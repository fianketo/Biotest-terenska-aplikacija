// Ruta view controller: ties map.js + route.js + saved locations together —
// start-point selection, "Optimizuj rutu", itinerary rendering, and
// bta:lastRoute persistence/staleness.
import { locations, setLocations, on } from './state.js';
import { KEYS, getItem, setItem } from './storage.js';
import { toast, formatDistance, formatDuration, escapeHtml } from './ui.js';
import * as mapMod from './map.js';
import { computeOptimizedTrip } from './route.js';

let startMode = 'current';
let mapReady = false;
let routeStale = false;

function eligibleStops() {
  return locations.filter((l) => !l.visited && l.lat != null && l.lng != null);
}

function missingCoordCount() {
  return locations.filter((l) => !l.visited && (l.lat == null || l.lng == null)).length;
}

function locationMap() {
  return new Map(locations.map((l) => [l.id, l]));
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
    rows.push(`
      <div class="card itinerary-card">
        <div class="itinerary-num">🏁</div>
        <div class="itinerary-body">
          <span class="location-name">${escapeHtml(startLabel)}</span>
          <span class="itinerary-leg">Polazna tačka</span>
        </div>
      </div>`);
  }

  route.stopIds.forEach((id, i) => {
    const loc = locMap.get(id);
    if (!loc) return;
    const leg = route.legs[i];
    rows.push(`
      <div class="card itinerary-card ${loc.visited ? 'visited' : ''}" data-id="${loc.id}">
        <div class="itinerary-num">${loc.visited ? '✔' : i + 1}</div>
        <div class="itinerary-body">
          <span class="location-name">${escapeHtml(loc.name)}</span>
          <span class="location-address">📍 ${escapeHtml(loc.address)}</span>
          ${leg ? `<span class="itinerary-leg">🚗 ${formatDistance(leg.distanceMeters)} · ${formatDuration(leg.durationSeconds)} od prethodne stanice</span>` : ''}
        </div>
        ${!loc.visited ? `<button type="button" class="chip-btn" data-action="mark-visited" data-id="${loc.id}">✔ Posećeno</button>` : ''}
      </div>`);
  });

  listEl.innerHTML = rows.join('');
}

function drawRouteOnMap(route) {
  const locMap = locationMap();
  const bounds = mapMod.renderLocationMarkers(locations, {
    onMarkerClick: (id) => {
      const loc = locMap.get(id);
      if (loc) mapMod.flyTo(loc.lat, loc.lng);
    }
  });
  if (route && route.startCoord) {
    mapMod.showCurrentLocationMarker(route.startCoord.lat, route.startCoord.lng);
    bounds.push([route.startCoord.lat, route.startCoord.lng]);
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
  const startLabel = route.startMode === 'current' ? '📡 Moja trenutna lokacija (u trenutku optimizacije)' : null;
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

  button.disabled = true;
  button.textContent = '⏳ Optimizujem...';
  try {
    const result = await computeOptimizedTrip(start, stops);
    const route = {
      generatedAt: new Date().toISOString(),
      startMode,
      startCoord,
      startLabel,
      ...result
    };
    setItem(KEYS.lastRoute, route);
    routeStale = false;
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

  segmented.addEventListener('click', (e) => {
    const btn = e.target.closest('.segmented-btn');
    if (!btn) return;
    startMode = btn.dataset.mode;
    segmented.querySelectorAll('.segmented-btn').forEach((b) => b.classList.toggle('active', b === btn));
  });

  optimizeBtn.addEventListener('click', () => handleOptimize(optimizeBtn));

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
