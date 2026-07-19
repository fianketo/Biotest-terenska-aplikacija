// Patient/client memory: once a name/phone/address/tests combo is entered
// for a location, it's remembered here so the next visit to the same place
// can be filled in with one tap instead of retyped from scratch.
import { KEYS, getItem, setItem } from './storage.js';
import { normalizeForSearch } from './state.js';
import { debounce, escapeHtml } from './ui.js';

function genId() {
  return `pt_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export function getPatients() {
  return getItem(KEYS.patients, []);
}

function savePatients(list) {
  setItem(KEYS.patients, list);
}

/**
 * Creates or updates a patient record from a saved location. Matches by
 * normalized name only — a deliberate simplification: two different real
 * patients sharing the exact same name will merge into one memory entry,
 * which is acceptable for a lightweight personal reuse list, not a strict
 * patient registry.
 */
export function upsertPatientFromLocation(loc) {
  const key = normalizeForSearch(loc.name || '').trim();
  if (!key) return;

  const patients = getPatients();
  const idx = patients.findIndex((p) => normalizeForSearch(p.name).trim() === key);
  const now = new Date().toISOString();

  const record = {
    id: idx === -1 ? genId() : patients[idx].id,
    name: loc.name,
    phone: loc.phone || '',
    address: loc.address || '',
    lat: loc.lat ?? null,
    lng: loc.lng ?? null,
    geocodedAt: loc.geocodedAt || null,
    testIds: [...(loc.testIds || [])],
    createdAt: idx === -1 ? now : patients[idx].createdAt,
    lastUsedAt: now
  };

  if (idx === -1) patients.push(record);
  else patients[idx] = record;

  savePatients(patients);
}

export function searchPatients(query) {
  const patients = getPatients();
  const q = normalizeForSearch((query || '').trim());

  const byRecency = (a, b) => (b.lastUsedAt || '').localeCompare(a.lastUsedAt || '');

  if (!q) return [...patients].sort(byRecency).slice(0, 6);

  return patients
    .filter((p) => normalizeForSearch([p.name, p.phone, p.address].filter(Boolean).join(' ')).includes(q))
    .sort(byRecency);
}

function patientRowHtml(p) {
  const meta = [p.address, p.phone].filter(Boolean).join(' · ');
  const testCount = (p.testIds || []).length;
  return `
  <div class="card patient-card" data-id="${p.id}">
    <div class="location-name">${escapeHtml(p.name)}</div>
    ${meta ? `<div class="test-meta">${escapeHtml(meta)}</div>` : ''}
    ${testCount ? `<div class="badge-row"><span class="badge-chip">${testCount} analiza</span></div>` : ''}
  </div>`;
}

/**
 * Mounts a self-contained search + list of saved patients into `container`.
 * Mirrors cenovnik.js's mountTestPicker (search box + card list), but
 * selecting a row fires `onSelect(patient)` once instead of toggling a Set.
 */
export function mountPatientPicker(container, { onSelect }) {
  container.innerHTML = `
    <div class="field">
      <label>🔍 Pretraga pacijenata</label>
      <input type="text" class="patient-search" placeholder="Ime, adresa, telefon..." autocomplete="off">
    </div>
    <div class="patient-results card-list"></div>
  `;
  const searchInput = container.querySelector('.patient-search');
  const resultsEl = container.querySelector('.patient-results');

  function render() {
    const results = searchPatients(searchInput.value);
    if (!results.length) {
      resultsEl.innerHTML = `<div class="empty-state"><span class="emoji">👤</span>${
        searchInput.value.trim() ? 'Nema pacijenata za zadatu pretragu.' : 'Još nema sačuvanih pacijenata — pojaviće se ovde posle prve sačuvane lokacije.'
      }</div>`;
      return;
    }
    resultsEl.innerHTML = results.map(patientRowHtml).join('');
  }

  resultsEl.addEventListener('click', (e) => {
    const card = e.target.closest('.patient-card');
    if (!card) return;
    const patient = getPatients().find((p) => p.id === card.dataset.id);
    if (patient) onSelect(patient);
  });

  searchInput.addEventListener('input', debounce(render, 200));
  render();
}
