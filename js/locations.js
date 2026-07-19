// "Lista pacijenata" (internally still `locations`/Lokacije in code — see
// plan notes on why the rename is display-text only) CRUD: list view +
// add/edit bottom-sheet form (name, phone, address + geocode, note, test
// picker, manual lat/lng fallback, and a patient-memory picker to reuse a
// previously entered patient/client). The list re-sorts into the last
// computed route's visiting order once one exists (see renderList).
import { locations, setLocations, normalizeForSearch, on } from './state.js';
import { KEYS, getItem, removeItem } from './storage.js';
import { openBottomSheet, closeBottomSheet, toast, buildNavigationUrl, debounce, escapeHtml } from './ui.js';
import { mountTestPicker } from './cenovnik.js';
import { mountPatientPicker, upsertPatientFromLocation } from './patients.js';
import { createPickerMap } from './map.js';

function genId() {
  return `loc_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function findLocation(id) {
  return locations.find((l) => l.id === id) || null;
}

function upsertLocation(loc) {
  const idx = locations.findIndex((l) => l.id === loc.id);
  const next = [...locations];
  if (idx === -1) next.push(loc);
  else next[idx] = loc;
  setLocations(next);
}

function deleteLocation(id) {
  setLocations(locations.filter((l) => l.id !== id));
}

/** Removes visited patients from the active list and clears the now-stale computed route, so the list doesn't grow unbounded day after day. Not-yet-visited patients are kept (carried over). */
function startNewDay() {
  const visitedCount = locations.filter((l) => l.visited).length;
  if (!visitedCount) {
    toast('Nema posećenih pacijenata za uklanjanje.');
    return;
  }
  const confirmed = window.confirm(`Ukloniti ${visitedCount} posećenih pacijenata sa liste i započeti nov dan?`);
  if (!confirmed) return;
  setLocations(locations.filter((l) => !l.visited));
  removeItem(KEYS.lastRoute);
  toast('Nov dan započet — posećeni pacijenti uklonjeni.');
}

function locationCardHtml(loc, routePosition) {
  let pill = '<span class="status-pill pending">⏳ Na čekanju</span>';
  if (loc.visited) pill = '<span class="status-pill visited">✔ Posećeno</span>';
  else if (loc.lat == null || loc.lng == null) pill = '<span class="status-pill no-coord">⚠ Bez koordinata</span>';

  const testCount = (loc.testIds || []).length;
  const canNavigate = !loc.visited && loc.lat != null && loc.lng != null;
  return `
  <div class="card location-card ${loc.visited ? 'visited' : ''}" data-id="${loc.id}">
    <div class="location-top">
      <span class="location-name">${routePosition != null ? `<span class="badge-chip mono">#${routePosition}</span> ` : ''}${escapeHtml(loc.name)}</span>
      <span class="badge-row">${loc.appointmentTime ? `<span class="badge-chip">⏰ ${escapeHtml(loc.appointmentTime)}</span>` : ''}${pill}</span>
    </div>
    <div class="location-address">📍 ${escapeHtml(loc.address)}</div>
    ${loc.phone ? `<div class="location-phone">📞 <a href="tel:${escapeHtml(loc.phone.replace(/[^0-9+]/g, ''))}">${escapeHtml(loc.phone)}</a></div>` : ''}
    ${loc.note ? `<div class="location-note">"${escapeHtml(loc.note)}"</div>` : ''}
    ${testCount ? `<div class="badge-row"><span class="badge-chip">${testCount} analiza za poneti</span></div>` : ''}
    <div class="location-menu-row">
      ${canNavigate ? `<a class="chip-btn" href="${buildNavigationUrl(loc.lat, loc.lng)}" target="_blank" rel="noopener">🧭 Navigiraj</a>` : ''}
      <button type="button" class="chip-btn" data-action="toggle-visited" data-id="${loc.id}">${loc.visited ? '↺ Vrati na čekanje' : '✔ Označi posećeno'}</button>
      <button type="button" class="chip-btn" data-action="edit-location" data-id="${loc.id}">✎ Uredi</button>
      <button type="button" class="remove-btn" data-action="delete-location" data-id="${loc.id}">🗑 Obriši</button>
    </div>
  </div>`;
}

/** Sorts a copy of `locations` into the last computed route's visiting order (entries not in that route, or if none exists yet, keep their normal order at the end). Deliberately doesn't duplicate Ruta's "route je zastarela" staleness banner here — see plan notes. */
function orderedLocationsForDisplay(query) {
  const q = normalizeForSearch((query || '').trim());
  const filtered = q
    ? locations.filter((l) => normalizeForSearch([l.name, l.address, l.phone].filter(Boolean).join(' ')).includes(q))
    : locations;

  const route = getItem(KEYS.lastRoute, null);
  if (!route || !route.stopIds || !route.stopIds.length) return filtered.map((loc) => ({ loc, position: null }));

  const orderIndex = new Map(route.stopIds.map((id, i) => [id, i + 1]));
  return filtered
    .map((loc, i) => ({ loc, position: orderIndex.get(loc.id) ?? null, originalIndex: i }))
    .sort((a, b) => {
      const ai = a.position ?? Infinity;
      const bi = b.position ?? Infinity;
      if (ai !== bi) return ai - bi;
      return a.originalIndex - b.originalIndex;
    });
}

function renderList() {
  const listEl = document.getElementById('locationsList');
  const countEl = document.getElementById('locationsCount');
  const searchInput = document.getElementById('locationsSearchInput');
  const query = searchInput ? searchInput.value : '';
  countEl.textContent = locations.length ? `${locations.length} pacijenata` : '';

  if (!locations.length) {
    listEl.innerHTML = `<div class="empty-state"><span class="emoji">📍</span>Još nema dodatih pacijenata za teren.<br>Dodirnite <strong>+</strong> da dodate prvog.</div>`;
    return;
  }

  const ordered = orderedLocationsForDisplay(query);
  if (!ordered.length) {
    listEl.innerHTML = `<div class="empty-state"><span class="emoji">🔎</span>Nema pacijenata za zadatu pretragu.</div>`;
    return;
  }

  listEl.innerHTML = ordered.map(({ loc, position }) => locationCardHtml(loc, position)).join('');
}

function openLocationForm(existing) {
  const isEdit = !!existing;
  const working = existing
    ? { ...existing, testIds: [...(existing.testIds || [])] }
    : { id: genId(), name: '', phone: '', address: '', lat: null, lng: null, geocodedAt: null, note: '', appointmentTime: '', testIds: [], visited: false, visitedAt: null };
  const pickerSelection = new Set(working.testIds);

  const form = document.createElement('form');
  form.innerHTML = `
    <div class="form-section-title">Osnovni podaci</div>
    <button type="button" class="chip-btn" id="openPatientPickerBtn">👤 Izaberi postojećeg pacijenta</button>
    <div class="field">
      <label for="locName">Naziv / klijent *</label>
      <input type="text" id="locName" required value="${escapeHtml(working.name)}" placeholder="npr. Apoteka Zdravlje, Novi Sad">
    </div>
    <div class="field">
      <label for="locPhone">Telefon</label>
      <input type="tel" id="locPhone" value="${escapeHtml(working.phone)}" placeholder="npr. 06X/XXX-XXXX">
    </div>

    <div class="form-section-title">Lokacija</div>
    <div class="field">
      <label for="locAddress">Adresa *</label>
      <div class="geocode-row">
        <div class="field"><input type="text" id="locAddress" required value="${escapeHtml(working.address)}" placeholder="Ulica i broj, grad"></div>
        <button type="button" id="geocodeBtn" class="chip-btn">📡 Pronađi na mapi</button>
      </div>
      <div id="geocodeStatus" class="geocode-status"></div>
      <button type="button" class="advanced-toggle" id="pickOnMapBtn">🗺️ Odaberi na mapi</button>
    </div>
    <button type="button" class="advanced-toggle" id="toggleAdvanced">▸ Napredne opcije (ručne koordinate)</button>
    <div id="advancedFields" hidden>
      <div class="coord-row">
        <div class="field"><label for="locLat">Geo. širina (lat)</label><input type="number" step="any" id="locLat" value="${working.lat ?? ''}"></div>
        <div class="field"><label for="locLng">Geo. dužina (lng)</label><input type="number" step="any" id="locLng" value="${working.lng ?? ''}"></div>
      </div>
    </div>

    <div class="form-section-title">Termin i napomena</div>
    <div class="field">
      <label for="locAppointmentTime">⏰ Zakazano vreme (opciono)</label>
      <input type="time" id="locAppointmentTime" value="${escapeHtml(working.appointmentTime || '')}">
    </div>
    <div class="field">
      <label for="locNote">Napomena</label>
      <textarea id="locNote" placeholder="Opciono...">${escapeHtml(working.note)}</textarea>
    </div>

    <div class="form-section-title">Analize</div>
    <div class="field">
      <label>Analize za poneti</label>
      <div id="testPickerSummary" class="test-picker-summary">
        <span id="testPickerCount">${pickerSelection.size} odabrano</span>
        <button type="button" class="chip-btn" id="openTestPickerBtn">Izaberi analize</button>
      </div>
    </div>
    <div class="form-actions">
      <button type="button" class="secondary-btn" id="cancelFormBtn">Otkaži</button>
      <button type="submit" class="primary-btn">${isEdit ? 'Sačuvaj izmene' : 'Dodaj pacijenta'}</button>
    </div>
  `;

  const geocodeStatusEl = form.querySelector('#geocodeStatus');
  if (working.geocodedAt && working.lat != null) {
    geocodeStatusEl.textContent = `✔ Koordinate pronađene (${working.lat.toFixed(5)}, ${working.lng.toFixed(5)})`;
    geocodeStatusEl.classList.add('ok');
  }

  form.querySelector('#toggleAdvanced').addEventListener('click', (e) => {
    const fields = form.querySelector('#advancedFields');
    const nowHidden = !fields.hidden;
    fields.hidden = nowHidden;
    e.target.textContent = nowHidden ? '▸ Napredne opcije (ručne koordinate)' : '▾ Napredne opcije (ručne koordinate)';
  });

  form.querySelector('#geocodeBtn').addEventListener('click', async () => {
    const address = form.querySelector('#locAddress').value.trim();
    if (!address) {
      toast('Unesite adresu pre pretrage');
      return;
    }
    const btn = form.querySelector('#geocodeBtn');
    btn.disabled = true;
    btn.textContent = '⏳ Tražim...';
    geocodeStatusEl.textContent = '';
    geocodeStatusEl.className = 'geocode-status';
    try {
      const { geocodeAddress } = await import('./geocode.js');
      const result = await geocodeAddress(address);
      if (result) {
        working.lat = result.lat;
        working.lng = result.lng;
        working.geocodedAt = new Date().toISOString();
        form.querySelector('#locLat').value = result.lat;
        form.querySelector('#locLng').value = result.lng;
        geocodeStatusEl.textContent = `✔ Pronađeno: ${result.displayName}`;
        geocodeStatusEl.classList.add('ok');
      } else {
        geocodeStatusEl.textContent = '✖ Adresa nije pronađena — proverite adresu ili unesite koordinate ručno ispod.';
        geocodeStatusEl.classList.add('error');
        form.querySelector('#advancedFields').hidden = false;
      }
    } catch {
      geocodeStatusEl.textContent = '✖ Greška pri pretrazi (proverite internet konekciju).';
      geocodeStatusEl.classList.add('error');
    } finally {
      btn.disabled = false;
      btn.textContent = '📡 Pronađi na mapi';
    }
  });

  form.querySelector('#pickOnMapBtn').addEventListener('click', () => {
    const mapContainerId = `locationPickerMap_${Date.now()}`;
    const pickerContainer = document.createElement('div');
    pickerContainer.innerHTML = `
      <div class="picker-map-hint">Dodirnite mapu (ili prevucite pin) da postavite tačnu lokaciju.</div>
      <div id="${mapContainerId}" class="picker-map"></div>
    `;
    const confirmBtn = document.createElement('button');
    confirmBtn.type = 'button';
    confirmBtn.className = 'primary-btn';
    confirmBtn.style.width = '100%';
    confirmBtn.style.marginTop = '12px';
    confirmBtn.textContent = 'Potvrdi lokaciju';
    confirmBtn.disabled = true;
    pickerContainer.appendChild(confirmBtn);

    let picked = null;
    let pickerHandle = null;

    const closePicker = openBottomSheet(pickerContainer, {
      title: 'Odaberi lokaciju na mapi',
      onClose: () => {
        if (pickerHandle) pickerHandle.destroy();
      }
    });

    requestAnimationFrame(() => {
      pickerHandle = createPickerMap(mapContainerId, working.lat != null ? { lat: working.lat, lng: working.lng } : {});
      if (working.lat != null) {
        picked = { lat: working.lat, lng: working.lng };
        confirmBtn.disabled = false;
      }
      pickerHandle.onChange((lat, lng) => {
        picked = { lat, lng };
        confirmBtn.disabled = false;
      });
    });

    confirmBtn.addEventListener('click', () => {
      if (!picked) return;
      working.lat = picked.lat;
      working.lng = picked.lng;
      working.geocodedAt = new Date().toISOString();
      form.querySelector('#locLat').value = picked.lat;
      form.querySelector('#locLng').value = picked.lng;
      geocodeStatusEl.textContent = `✔ Postavljeno na mapi (${picked.lat.toFixed(5)}, ${picked.lng.toFixed(5)})`;
      geocodeStatusEl.className = 'geocode-status ok';
      closePicker();
    });
  });

  form.querySelector('#openPatientPickerBtn').addEventListener('click', () => {
    const pickerContainer = document.createElement('div');
    mountPatientPicker(pickerContainer, {
      onSelect: (patient) => {
        form.querySelector('#locName').value = patient.name || '';
        form.querySelector('#locPhone').value = patient.phone || '';
        form.querySelector('#locAddress').value = patient.address || '';

        pickerSelection.clear();
        (patient.testIds || []).forEach((id) => pickerSelection.add(id));
        form.querySelector('#testPickerCount').textContent = `${pickerSelection.size} odabrano`;

        if (patient.lat != null && patient.lng != null) {
          working.lat = patient.lat;
          working.lng = patient.lng;
          working.geocodedAt = patient.geocodedAt;
          form.querySelector('#locLat').value = patient.lat;
          form.querySelector('#locLng').value = patient.lng;
          geocodeStatusEl.textContent = `✔ Koordinate iz memorije (${patient.lat.toFixed(5)}, ${patient.lng.toFixed(5)})`;
          geocodeStatusEl.className = 'geocode-status ok';
        } else {
          geocodeStatusEl.textContent = '';
          geocodeStatusEl.className = 'geocode-status';
        }

        closeBottomSheet();
        toast(`Popunjeno iz memorije: ${patient.name}`);
      }
    });
    openBottomSheet(pickerContainer, { title: 'Izaberi postojećeg pacijenta' });
  });

  form.querySelector('#openTestPickerBtn').addEventListener('click', () => {
    const pickerContainer = document.createElement('div');
    mountTestPicker(pickerContainer, pickerSelection);
    const doneBtn = document.createElement('button');
    doneBtn.type = 'button';
    doneBtn.className = 'primary-btn';
    doneBtn.style.width = '100%';
    doneBtn.style.marginTop = '12px';
    doneBtn.textContent = 'Gotovo';
    pickerContainer.appendChild(doneBtn);

    const closePicker = openBottomSheet(pickerContainer, { title: 'Analize za poneti' });
    doneBtn.addEventListener('click', () => {
      form.querySelector('#testPickerCount').textContent = `${pickerSelection.size} odabrano`;
      closePicker();
    });
  });

  form.querySelector('#cancelFormBtn').addEventListener('click', () => closeBottomSheet());

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('#locName').value.trim();
    const address = form.querySelector('#locAddress').value.trim();
    if (!name || !address) return;

    const manualLat = form.querySelector('#locLat').value;
    const manualLng = form.querySelector('#locLng').value;
    if (manualLat !== '' && manualLng !== '') {
      working.lat = Number(manualLat);
      working.lng = Number(manualLng);
    }

    const now = new Date().toISOString();
    const saved = {
      ...working,
      name,
      phone: form.querySelector('#locPhone').value.trim(),
      address,
      appointmentTime: form.querySelector('#locAppointmentTime').value || null,
      note: form.querySelector('#locNote').value.trim(),
      testIds: [...pickerSelection],
      createdAt: working.createdAt || now,
      updatedAt: now
    };
    upsertLocation(saved);
    upsertPatientFromLocation(saved);
    toast(isEdit ? 'Pacijent sačuvan' : 'Pacijent dodat');
    closeBottomSheet();
  });

  openBottomSheet(form, { title: isEdit ? 'Uredi pacijenta' : 'Novi pacijent' });
}

export function initLokacijeView() {
  const listEl = document.getElementById('locationsList');
  const addBtn = document.getElementById('addLocationBtn');
  const searchInput = document.getElementById('locationsSearchInput');
  const newDayBtn = document.getElementById('newDayBtn');

  addBtn.addEventListener('click', () => openLocationForm(null));
  searchInput.addEventListener('input', debounce(renderList, 200));
  newDayBtn.addEventListener('click', startNewDay);

  listEl.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;
    const loc = findLocation(btn.dataset.id);
    if (!loc) return;

    if (btn.dataset.action === 'edit-location') {
      openLocationForm(loc);
    } else if (btn.dataset.action === 'delete-location') {
      deleteLocation(loc.id);
      toast('Pacijent obrisan');
    } else if (btn.dataset.action === 'toggle-visited') {
      upsertLocation({ ...loc, visited: !loc.visited, visitedAt: !loc.visited ? new Date().toISOString() : null });
    }
  });

  on('locations:changed', renderList);
  on('route:changed', renderList);
  renderList();
}

export { findLocation };
