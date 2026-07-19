// Lokacije CRUD: list view + add/edit bottom-sheet form (name, phone,
// address + geocode, note, test picker, manual lat/lng fallback, and a
// patient-memory picker to reuse a previously entered patient/client).
import { locations, setLocations, on } from './state.js';
import { openBottomSheet, closeBottomSheet, toast, escapeHtml } from './ui.js';
import { mountTestPicker } from './cenovnik.js';
import { mountPatientPicker, upsertPatientFromLocation } from './patients.js';

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

function locationCardHtml(loc) {
  let pill = '<span class="status-pill pending">⏳ Na čekanju</span>';
  if (loc.visited) pill = '<span class="status-pill visited">✔ Posećeno</span>';
  else if (loc.lat == null || loc.lng == null) pill = '<span class="status-pill no-coord">⚠ Bez koordinata</span>';

  const testCount = (loc.testIds || []).length;
  return `
  <div class="card location-card ${loc.visited ? 'visited' : ''}" data-id="${loc.id}">
    <div class="location-top">
      <span class="location-name">${escapeHtml(loc.name)}</span>
      <span class="badge-row">${loc.appointmentTime ? `<span class="badge-chip">⏰ ${escapeHtml(loc.appointmentTime)}</span>` : ''}${pill}</span>
    </div>
    <div class="location-address">📍 ${escapeHtml(loc.address)}</div>
    ${loc.phone ? `<div class="location-phone">📞 <a href="tel:${escapeHtml(loc.phone.replace(/[^0-9+]/g, ''))}">${escapeHtml(loc.phone)}</a></div>` : ''}
    ${loc.note ? `<div class="location-note">"${escapeHtml(loc.note)}"</div>` : ''}
    ${testCount ? `<div class="badge-row"><span class="badge-chip">${testCount} analiza za poneti</span></div>` : ''}
    <div class="location-menu-row">
      <button type="button" class="chip-btn" data-action="toggle-visited" data-id="${loc.id}">${loc.visited ? '↺ Vrati na čekanje' : '✔ Označi posećeno'}</button>
      <button type="button" class="chip-btn" data-action="edit-location" data-id="${loc.id}">✎ Uredi</button>
      <button type="button" class="chip-btn" data-action="delete-location" data-id="${loc.id}">🗑 Obriši</button>
    </div>
  </div>`;
}

function renderList() {
  const listEl = document.getElementById('locationsList');
  const countEl = document.getElementById('locationsCount');
  countEl.textContent = locations.length ? `${locations.length} lokacija` : '';

  if (!locations.length) {
    listEl.innerHTML = `<div class="empty-state"><span class="emoji">📍</span>Još nema dodatih lokacija za teren.<br>Dodirnite <strong>+</strong> da dodate prvu.</div>`;
    return;
  }

  listEl.innerHTML = locations.map(locationCardHtml).join('');
}

function openLocationForm(existing) {
  const isEdit = !!existing;
  const working = existing
    ? { ...existing, testIds: [...(existing.testIds || [])] }
    : { id: genId(), name: '', phone: '', address: '', lat: null, lng: null, geocodedAt: null, note: '', appointmentTime: '', testIds: [], visited: false, visitedAt: null };
  const pickerSelection = new Set(working.testIds);

  const form = document.createElement('form');
  form.innerHTML = `
    <button type="button" class="chip-btn" id="openPatientPickerBtn">👤 Izaberi postojećeg pacijenta</button>
    <div class="field">
      <label for="locName">Naziv / klijent *</label>
      <input type="text" id="locName" required value="${escapeHtml(working.name)}" placeholder="npr. Apoteka Zdravlje, Novi Sad">
    </div>
    <div class="field">
      <label for="locPhone">Telefon</label>
      <input type="tel" id="locPhone" value="${escapeHtml(working.phone)}" placeholder="npr. 06X/XXX-XXXX">
    </div>
    <div class="field">
      <label for="locAddress">Adresa *</label>
      <div class="geocode-row">
        <div class="field"><input type="text" id="locAddress" required value="${escapeHtml(working.address)}" placeholder="Ulica i broj, grad"></div>
        <button type="button" id="geocodeBtn" class="chip-btn">📡 Pronađi na mapi</button>
      </div>
      <div id="geocodeStatus" class="geocode-status"></div>
    </div>
    <div class="field">
      <label for="locAppointmentTime">⏰ Zakazano vreme (opciono)</label>
      <input type="time" id="locAppointmentTime" value="${escapeHtml(working.appointmentTime || '')}">
    </div>
    <div class="field">
      <label for="locNote">Napomena</label>
      <textarea id="locNote" placeholder="Opciono...">${escapeHtml(working.note)}</textarea>
    </div>
    <button type="button" class="advanced-toggle" id="toggleAdvanced">▸ Napredne opcije (ručne koordinate)</button>
    <div id="advancedFields" hidden>
      <div class="coord-row">
        <div class="field"><label for="locLat">Geo. širina (lat)</label><input type="number" step="any" id="locLat" value="${working.lat ?? ''}"></div>
        <div class="field"><label for="locLng">Geo. dužina (lng)</label><input type="number" step="any" id="locLng" value="${working.lng ?? ''}"></div>
      </div>
    </div>
    <div class="field">
      <label>Analize za poneti</label>
      <div id="testPickerSummary" class="test-picker-summary">
        <span id="testPickerCount">${pickerSelection.size} odabrano</span>
        <button type="button" class="chip-btn" id="openTestPickerBtn">Izaberi analize</button>
      </div>
    </div>
    <div class="form-actions">
      <button type="button" class="secondary-btn" id="cancelFormBtn">Otkaži</button>
      <button type="submit" class="primary-btn">${isEdit ? 'Sačuvaj izmene' : 'Dodaj lokaciju'}</button>
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
    toast(isEdit ? 'Lokacija sačuvana' : 'Lokacija dodata');
    closeBottomSheet();
  });

  openBottomSheet(form, { title: isEdit ? 'Uredi lokaciju' : 'Nova lokacija' });
}

export function initLokacijeView() {
  const listEl = document.getElementById('locationsList');
  const addBtn = document.getElementById('addLocationBtn');

  addBtn.addEventListener('click', () => openLocationForm(null));

  listEl.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;
    const loc = findLocation(btn.dataset.id);
    if (!loc) return;

    if (btn.dataset.action === 'edit-location') {
      openLocationForm(loc);
    } else if (btn.dataset.action === 'delete-location') {
      deleteLocation(loc.id);
      toast('Lokacija obrisana');
    } else if (btn.dataset.action === 'toggle-visited') {
      upsertLocation({ ...loc, visited: !loc.visited, visitedAt: !loc.visited ? new Date().toISOString() : null });
    }
  });

  on('locations:changed', renderList);
  renderList();
}

export { findLocation };
