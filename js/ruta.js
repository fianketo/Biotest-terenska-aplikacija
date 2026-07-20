// Ruta view controller: ties map.js + route.js + saved locations together —
// start-point selection, appointment-time-aware scheduling (when any stop
// has a fixed time), "Optimizuj rutu", itinerary rendering, live GPS
// position tracking (watchPosition + a "you are here" map dot, next-stop
// distance via haversine — deliberately not hitting OSRM on every tick),
// and bta:lastRoute persistence/staleness.
import { locations, setLocations, sumTestPrices, resolveTests, on, emit } from './state.js';
import { KEYS, getItem, setItem } from './storage.js';
import { toast, formatDistance, formatDuration, formatClockTime, formatPrice, parseTimeToMinutes, buildNavigationUrl, escapeHtml } from './ui.js';
import * as mapMod from './map.js';
import { computeOptimizedTrip, computeScheduledTrip, haversineMeters } from './route.js';

const ARRIVAL_THRESHOLD_METERS = 100;

let startMode = 'custom';
let mapReady = false;
let routeStale = false;
let watchId = null;
let lastArrivalToastStopId = null;

function eligibleStops() {
  return locations.filter((l) => !l.visited && l.lat != null && l.lng != null);
}

function missingCoordCount() {
  return locations.filter((l) => !l.visited && (l.lat == null || l.lng == null)).length;
}

function locationMap() {
  return new Map(locations.map((l) => [l.id, l]));
}

function renderCustomStartEditor() {
  const savedRow = document.getElementById('customStartSaved');
  const savedLabel = document.getElementById('customStartSavedLabel');
  const formRow = document.getElementById('customStartForm');
  const saved = getItem(KEYS.startLocation, null);
  if (saved && saved.lat != null && saved.lng != null) {
    savedRow.hidden = false;
    savedLabel.textContent = `🏠 ${saved.address}`;
    formRow.hidden = true;
  } else {
    savedRow.hidden = true;
    formRow.hidden = false;
  }
}

function setBanner(message, tone = 'warning') {
  const el = document.getElementById('routeBanner');
  if (!message) {
    el.hidden = true;
    return;
  }
  el.hidden = false;
  el.textContent = message;
  el.style.background = tone === 'error' ? 'var(--danger-soft)' : 'var(--warning-soft)';
  el.style.color = tone === 'error' ? 'var(--danger)' : 'var(--warning)';
  el.style.borderColor = tone === 'error' ? 'var(--danger)' : 'var(--warning)';
}

function renderSummary(route, stopCount) {
  const el = document.getElementById('routeSummary');
  if (!route) {
    el.hidden = true;
    return;
  }
  el.hidden = false;
  el.innerHTML = `
    <div class="stat"><strong>${stopCount}</strong><span>Stanica</span></div>
    <div class="stat"><strong>${formatDistance(route.totalDistanceMeters)}</strong><span>Ukupno</span></div>
    <div class="stat"><strong>${formatDuration(route.totalDurationSeconds)}</strong><span>Vreme vožnje</span></div>
  `;
}

function renderItinerary(route, startLabel) {
  const listEl = document.getElementById('itineraryList');
  if (!route || !route.stopIds.length) {
    listEl.innerHTML = '';
    return;
  }
  const locMap = locationMap();
  const rows = [];

  if (startLabel) {
    const departureLine = route.departureMinutes != null ? `<span class="itinerary-leg">🕐 Polazak ${formatClockTime(route.departureMinutes)}</span>` : '';
    rows.push(`
      <div class="card itinerary-card">
        <div class="itinerary-num">🏁</div>
        <div class="itinerary-body">
          <span class="location-name">${escapeHtml(startLabel)}</span>
          <span class="itinerary-leg">Polazna tačka</span>
          ${departureLine}
        </div>
      </div>`);
  }

  const scheduleMap = new Map((route.schedule || []).map((s) => [s.stopId, s]));

  route.stopIds.forEach((id, i) => {
    const loc = locMap.get(id);
    if (!loc) return;
    const leg = route.legs[i];
    const sched = scheduleMap.get(id);
    let scheduleLine = '';
    if (sched) {
      const arrivalBadge = `<span class="badge-chip">🕐 Dolazak ~${formatClockTime(sched.arrivalMinutes)}</span>`;
      const appointmentBadge = sched.appointmentMinutes != null
        ? sched.lateByMinutes > 0
          ? `<span class="badge-chip late">⚠ ~${sched.lateByMinutes} min kašnjenja (zakazano ${formatClockTime(sched.appointmentMinutes)})</span>`
          : `<span class="badge-chip">⏰ Zakazano ${formatClockTime(sched.appointmentMinutes)}</span>`
        : '';
      scheduleLine = `<div class="badge-row">${arrivalBadge}${appointmentBadge}</div>`;
    }
    const assignedTests = resolveTests(loc.testIds);
    const testsLine = assignedTests.length
      ? `<div class="assigned-tests">
          <div class="badge-row"><span class="badge-chip">${assignedTests.length} analiza za poneti</span><span class="badge-chip mono">${formatPrice(sumTestPrices(loc.testIds))}</span></div>
          <ul class="assigned-tests-list">${assignedTests.map((t) => `<li>${escapeHtml(t.name)}</li>`).join('')}</ul>
        </div>`
      : '';
    rows.push(`
      <div class="card itinerary-card ${loc.visited ? 'visited' : ''}" data-id="${loc.id}">
        <div class="itinerary-num">${loc.visited ? '✔' : i + 1}</div>
        <div class="itinerary-body">
          <span class="location-name">${escapeHtml(loc.name)}</span>
          <span class="location-address">📍 ${escapeHtml(loc.address)}</span>
          ${leg ? `<span class="itinerary-leg">🚗 ${formatDistance(leg.distanceMeters)} · ${formatDuration(leg.durationSeconds)} od prethodne stanice</span>` : ''}
          ${scheduleLine}
          ${testsLine}
          ${!loc.visited ? `<div class="location-menu-row"><a class="chip-btn" href="${buildNavigationUrl(loc.lat, loc.lng)}" target="_blank" rel="noopener">🧭 Navigiraj</a><button type="button" class="chip-btn" data-action="mark-visited" data-id="${loc.id}">✔ Posećeno</button></div>` : ''}
        </div>
      </div>`);
  });

  listEl.innerHTML = rows.join('');
}

function drawRouteOnMap(route) {
  const locMap = locationMap();
  const routePositions = route && route.stopIds ? new Map(route.stopIds.map((id, i) => [id, i + 1])) : null;
  const bounds = mapMod.renderLocationMarkers(locations, {
    routePositions,
    onMarkerClick: (id) => {
      const loc = locMap.get(id);
      if (loc) mapMod.flyTo(loc.lat, loc.lng);
    }
  });

  const home = getItem(KEYS.startLocation, null);
  if (home && home.lat != null && home.lng != null) {
    mapMod.showHomeMarker(home.lat, home.lng, home.address);
    bounds.push([home.lat, home.lng]);
  } else {
    mapMod.clearHomeMarker();
  }

  if (route && route.startCoord && route.startMode === 'current') {
    mapMod.showCurrentLocationMarker(route.startCoord.lat, route.startCoord.lng);
    bounds.push([route.startCoord.lat, route.startCoord.lng]);
  } else {
    mapMod.clearCurrentLocationMarker();
  }

  if (route) {
    mapMod.drawRoute(route.geometryCoords, { dashed: route.source === 'fallback-nn' });
  } else {
    mapMod.drawRoute(null);
  }
  mapMod.fitToBounds(bounds);
}

function renderAll() {
  const route = getItem(KEYS.lastRoute, null);
  drawRouteOnMap(route);
  if (!route) {
    renderSummary(null, 0);
    renderItinerary(null, null);
    setBanner(null);
    return;
  }
  const startLabel = route.startLabel || (route.startMode === 'current' ? '📡 Moja trenutna lokacija (u trenutku optimizacije)' : null);
  renderSummary(route, route.stopIds.length);
  renderItinerary(route, startLabel);

  if (routeStale) {
    setBanner('Ruta je zastarela (lokacije su izmenjene) — dodirnite "Optimizuj rutu" za ažuriranje.');
  } else if (route.source === 'fallback-nn') {
    setBanner('OSRM ruta nije dostupna — prikazana je približna ruta (vazdušna linija).');
  } else {
    setBanner(null);
  }
}

async function handleOptimize(button) {
  const missing = missingCoordCount();
  const eligible = eligibleStops();

  let start = null;
  let startCoord = null;
  let stops = [];
  let startLabel = null;

  if (startMode === 'current') {
    try {
      const pos = await mapMod.getCurrentPosition();
      start = pos;
      startCoord = pos;
      stops = eligible;
    } catch {
      toast('Nije moguće dobiti trenutnu lokaciju — proverite dozvole za lokaciju.');
      return;
    }
  } else if (startMode === 'custom') {
    const saved = getItem(KEYS.startLocation, null);
    if (!saved || saved.lat == null || saved.lng == null) {
      toast('Prvo unesite i sačuvajte svoju početnu adresu.');
      return;
    }
    start = { lat: saved.lat, lng: saved.lng };
    startCoord = start;
    startLabel = `🏠 ${saved.address}`;
    stops = eligible;
  } else {
    if (!eligible.length) {
      toast('Nema lokacija za optimizaciju rute.');
      return;
    }
    const first = eligible[0];
    start = { lat: first.lat, lng: first.lng };
    stops = eligible.slice(1);
    startLabel = first.name;
  }

  if (!stops.length) {
    toast('Potrebno je bar dve lokacije (van polazne tačke) za optimizaciju rute.');
    return;
  }

  const stopsWithAppointments = stops.filter((s) => s.appointmentTime);

  button.disabled = true;
  button.textContent = '⏳ Optimizujem...';
  try {
    let result;
    let departureMinutes = null;
    if (stopsWithAppointments.length) {
      const departureInput = document.getElementById('departureTime');
      const now = new Date();
      departureMinutes = parseTimeToMinutes(departureInput.value) ?? now.getHours() * 60 + now.getMinutes();
      const scheduledStops = stops.map((s) => ({ id: s.id, lat: s.lat, lng: s.lng, appointmentMinutes: parseTimeToMinutes(s.appointmentTime) }));
      result = await computeScheduledTrip({ start, departureMinutes, stops: scheduledStops });
    } else {
      result = await computeOptimizedTrip(start, stops);
    }
    const route = {
      generatedAt: new Date().toISOString(),
      startMode,
      startCoord,
      startLabel,
      departureMinutes,
      ...result
    };
    setItem(KEYS.lastRoute, route);
    routeStale = false;
    emit('route:changed');
    renderAll();
    if (missing > 0) {
      toast(`Ruta izračunata. ${missing} lokacija bez koordinata je izostavljeno.`);
    } else {
      toast(result.source === 'osrm' ? 'Ruta optimizovana' : 'Ruta izračunata (približno, OSRM nedostupan)');
    }
  } catch {
    toast('Greška pri izračunavanju rute. Pokušajte ponovo.');
  } finally {
    button.disabled = false;
    button.textContent = '🧭 Optimizuj rutu';
  }
}

function nextUnvisitedStop() {
  const route = getItem(KEYS.lastRoute, null);
  if (!route || !route.stopIds) return null;
  const locMap = locationMap();
  for (const id of route.stopIds) {
    const loc = locMap.get(id);
    if (loc && !loc.visited && loc.lat != null && loc.lng != null) return loc;
  }
  return null;
}

function updateLiveStatus(lat, lng) {
  const statusEl = document.getElementById('liveStatus');
  const next = nextUnvisitedStop();
  if (!next) {
    statusEl.textContent = '🧭 Nema sledeće stanice u ruti.';
    return;
  }
  const distance = haversineMeters({ lat, lng }, { lat: next.lat, lng: next.lng });
  statusEl.textContent = `🧭 Sledeća: ${next.name} · ${formatDistance(distance)}`;
  if (distance <= ARRIVAL_THRESHOLD_METERS && lastArrivalToastStopId !== next.id) {
    lastArrivalToastStopId = next.id;
    toast(`Stigli ste do: ${next.name}`);
  }
}

function startLiveTracking(button) {
  if (!('geolocation' in navigator)) {
    toast('Geolokacija nije podržana u ovom pregledaču.');
    return;
  }
  lastArrivalToastStopId = null;
  const statusEl = document.getElementById('liveStatus');
  statusEl.hidden = false;
  statusEl.textContent = '📡 Tražim poziciju...';

  let firstFix = true;
  watchId = navigator.geolocation.watchPosition(
    (pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;
      mapMod.showLiveMarker(lat, lng);
      updateLiveStatus(lat, lng);
      if (firstFix) {
        // Center once on start so the live dot doesn't keep fighting a manual pan/zoom on every tick.
        firstFix = false;
        const next = nextUnvisitedStop();
        const bounds = [[lat, lng]];
        if (next) bounds.push([next.lat, next.lng]);
        mapMod.fitToBounds(bounds);
      }
    },
    () => {
      toast('Nije moguće dobiti poziciju uživo — proverite dozvole za lokaciju.');
      stopLiveTracking(button);
    },
    { enableHighAccuracy: true, maximumAge: 5000, timeout: 15000 }
  );
  button.textContent = '⏹ Zaustavi praćenje';
}

function stopLiveTracking(button) {
  if (watchId != null) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }
  mapMod.clearLiveMarker();
  const statusEl = document.getElementById('liveStatus');
  if (statusEl) {
    statusEl.hidden = true;
    statusEl.textContent = '';
  }
  if (button) button.textContent = '📍 Prati uživo';
}

/** Force-stops live tracking when the user navigates away from Ruta — a watchPosition left running in the background would otherwise silently drain the battery. */
export function onRutaViewHidden() {
  if (watchId != null) stopLiveTracking(document.getElementById('liveTrackBtn'));
}

export function onRutaViewShown() {
  if (!mapReady) {
    try {
      mapMod.initMap('map');
      mapReady = true;
    } catch {
      setBanner('Mapa nije mogla da se učita. Proverite internet konekciju i osvežite stranicu.', 'error');
      return;
    }
  }
  mapMod.invalidateSize();
  renderAll();
}

export function initRutaView() {
  const segmented = document.getElementById('startModeSegmented');
  const optimizeBtn = document.getElementById('optimizeRouteBtn');
  const itineraryList = document.getElementById('itineraryList');
  const customEditor = document.getElementById('customStartEditor');
  const customAddressInput = document.getElementById('customStartAddress');
  const customStatusEl = document.getElementById('customStartStatus');
  const saveCustomStartBtn = document.getElementById('saveCustomStartBtn');
  const editCustomStartBtn = document.getElementById('editCustomStartBtn');
  const departureInput = document.getElementById('departureTime');

  if (!departureInput.value) {
    const now = new Date();
    departureInput.value = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  }

  customEditor.hidden = startMode !== 'custom';
  if (startMode === 'custom') renderCustomStartEditor();

  segmented.addEventListener('click', (e) => {
    const btn = e.target.closest('.segmented-btn');
    if (!btn) return;
    startMode = btn.dataset.mode;
    segmented.querySelectorAll('.segmented-btn').forEach((b) => b.classList.toggle('active', b === btn));
    customEditor.hidden = startMode !== 'custom';
    if (startMode === 'custom') renderCustomStartEditor();
  });

  editCustomStartBtn.addEventListener('click', () => {
    const saved = getItem(KEYS.startLocation, null);
    customAddressInput.value = saved ? saved.address : '';
    document.getElementById('customStartSaved').hidden = true;
    document.getElementById('customStartForm').hidden = false;
    customStatusEl.textContent = '';
    customStatusEl.className = 'geocode-status';
  });

  saveCustomStartBtn.addEventListener('click', async () => {
    const address = customAddressInput.value.trim();
    if (!address) {
      toast('Unesite adresu');
      return;
    }
    saveCustomStartBtn.disabled = true;
    saveCustomStartBtn.textContent = '⏳ Tražim...';
    customStatusEl.textContent = '';
    customStatusEl.className = 'geocode-status';
    try {
      const { geocodeAddress } = await import('./geocode.js');
      const result = await geocodeAddress(address);
      if (result) {
        setItem(KEYS.startLocation, { address, lat: result.lat, lng: result.lng, geocodedAt: new Date().toISOString() });
        toast('Početna adresa sačuvana');
        renderCustomStartEditor();
      } else {
        customStatusEl.textContent = '✖ Adresa nije pronađena — proverite adresu.';
        customStatusEl.classList.add('error');
      }
    } catch {
      customStatusEl.textContent = '✖ Greška pri pretrazi (proverite internet konekciju).';
      customStatusEl.classList.add('error');
    } finally {
      saveCustomStartBtn.disabled = false;
      saveCustomStartBtn.textContent = '📡 Pronađi i sačuvaj';
    }
  });

  optimizeBtn.addEventListener('click', () => handleOptimize(optimizeBtn));

  const liveTrackBtn = document.getElementById('liveTrackBtn');
  liveTrackBtn.addEventListener('click', () => {
    if (watchId != null) stopLiveTracking(liveTrackBtn);
    else startLiveTracking(liveTrackBtn);
  });

  const centerOnMeBtn = document.getElementById('centerOnMeBtn');
  centerOnMeBtn.addEventListener('click', async () => {
    centerOnMeBtn.disabled = true;
    try {
      const pos = await mapMod.getCurrentPosition();
      mapMod.flyTo(pos.lat, pos.lng);
    } catch {
      toast('Nije moguće dobiti trenutnu lokaciju — proverite dozvole za lokaciju.');
    } finally {
      centerOnMeBtn.disabled = false;
    }
  });

  const mapWrap = document.getElementById('mapWrap');
  const expandMapBtn = document.getElementById('expandMapBtn');
  expandMapBtn.addEventListener('click', () => {
    const expanded = mapWrap.classList.toggle('expanded');
    expandMapBtn.textContent = expanded ? '✕' : '⛶';
    expandMapBtn.setAttribute('aria-label', expanded ? 'Zatvori pun ekran' : 'Pun ekran');
    requestAnimationFrame(() => mapMod.invalidateSize());
  });

  itineraryList.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action="mark-visited"]');
    if (!btn) return;
    const id = btn.dataset.id;
    setLocations(locations.map((l) => (l.id === id ? { ...l, visited: true, visitedAt: new Date().toISOString() } : l)));
  });

  on('locations:changed', () => {
    if (getItem(KEYS.lastRoute, null)) routeStale = true;
    if (mapReady) renderAll();
  });
}
