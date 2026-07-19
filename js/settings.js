// Settings: manage the price list itself — add new analyses, edit or
// delete existing ones, reset to factory defaults. Mirrors locations.js's
// shape (list view + add/edit bottom-sheet CRUD form).
import { testById, getCenovnikCategories, addTest, updateTest, deleteTest, resetCenovnikToDefaults, on } from './state.js';
import { buildBackupPayload, applyBackupPayload } from './storage.js';
import { openBottomSheet, closeBottomSheet, toast, escapeHtml } from './ui.js';
import { filterTests, renderCardList, populateCategorySelect } from './cenovnik.js';

function openTestForm(existing) {
  const isEdit = !!existing;
  const working = existing || { id: null, category: '', name: '', prefix: '', sample: '', method: '', instrument: '', time: '', price: '' };

  const form = document.createElement('form');
  form.innerHTML = `
    <div class="form-section-title">Osnovni podaci</div>
    <div class="field">
      <label for="testCategory">Kategorija *</label>
      <input type="text" id="testCategory" list="categoryOptions" required value="${escapeHtml(working.category)}" placeholder="npr. Biohemija">
      <datalist id="categoryOptions">${getCenovnikCategories().map((c) => `<option value="${escapeHtml(c)}">`).join('')}</datalist>
    </div>
    <div class="field">
      <label for="testName">Naziv analize *</label>
      <input type="text" id="testName" required value="${escapeHtml(working.name)}" placeholder="npr. Glukoza">
    </div>
    <div class="field">
      <label for="testPrice">Cena (RSD) *</label>
      <input type="number" id="testPrice" min="0" step="1" required value="${working.price ?? ''}">
    </div>

    <div class="form-section-title">Detalji (opciono)</div>
    <div class="field">
      <label for="testPrefix">Prefiks</label>
      <input type="text" id="testPrefix" value="${escapeHtml(working.prefix || '')}" placeholder="npr. S">
    </div>
    <div class="field">
      <label for="testSample">Uzorak</label>
      <input type="text" id="testSample" value="${escapeHtml(working.sample || '')}" placeholder="npr. Serum">
    </div>
    <div class="field">
      <label for="testMethod">Metoda</label>
      <input type="text" id="testMethod" value="${escapeHtml(working.method || '')}">
    </div>
    <div class="field">
      <label for="testInstrument">Instrument</label>
      <input type="text" id="testInstrument" value="${escapeHtml(working.instrument || '')}">
    </div>
    <div class="field">
      <label for="testTime">Vreme</label>
      <input type="text" id="testTime" value="${escapeHtml(working.time || '')}" placeholder="npr. 4h">
    </div>
    <div class="form-actions">
      <button type="button" class="secondary-btn" id="cancelTestFormBtn">Otkaži</button>
      <button type="submit" class="primary-btn">${isEdit ? 'Sačuvaj izmene' : 'Dodaj analizu'}</button>
    </div>
    ${isEdit ? '<button type="button" class="remove-btn" id="deleteTestBtn" style="width:100%;margin-top:10px;">🗑 Obriši analizu</button>' : ''}
  `;

  form.querySelector('#cancelTestFormBtn').addEventListener('click', () => closeBottomSheet());

  if (isEdit) {
    form.querySelector('#deleteTestBtn').addEventListener('click', () => {
      deleteTest(working.id);
      toast('Analiza obrisana');
      closeBottomSheet();
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fields = {
      category: form.querySelector('#testCategory').value,
      name: form.querySelector('#testName').value,
      price: form.querySelector('#testPrice').value,
      prefix: form.querySelector('#testPrefix').value.trim(),
      sample: form.querySelector('#testSample').value.trim(),
      method: form.querySelector('#testMethod').value.trim(),
      instrument: form.querySelector('#testInstrument').value.trim(),
      time: form.querySelector('#testTime').value.trim()
    };
    const result = isEdit ? updateTest(working.id, fields) : addTest(fields);
    if (!result) {
      toast('Proverite obavezna polja (kategorija, naziv, cena).');
      return;
    }
    toast(isEdit ? 'Analiza sačuvana' : 'Analiza dodata');
    closeBottomSheet();
  });

  openBottomSheet(form, { title: isEdit ? 'Uredi analizu' : 'Nova analiza' });
}

export function initSettingsView() {
  const searchInput = document.getElementById('settingsSearchInput');
  const categorySelect = document.getElementById('settingsCategoryFilter');
  const resultCount = document.getElementById('settingsResultCount');
  const listEl = document.getElementById('settingsList');
  const addBtn = document.getElementById('addTestBtn');
  const resetBtn = document.getElementById('resetCenovnikBtn');
  const exportBtn = document.getElementById('exportDataBtn');
  const importBtn = document.getElementById('importDataBtn');
  const importInput = document.getElementById('importDataInput');

  populateCategorySelect(categorySelect);

  function render() {
    const results = filterTests({ query: searchInput.value, category: categorySelect.value });
    resultCount.textContent = `${results.length} analiza`;
    renderCardList(listEl, results, {
      mode: 'manage',
      onAction: (action, id) => {
        if (action === 'edit-test') {
          const test = testById.get(id);
          if (test) openTestForm(test);
        }
      },
      emptyMessage: 'Nema analiza za zadate filtere.'
    });
  }

  searchInput.addEventListener('input', () => render());
  categorySelect.addEventListener('change', render);
  addBtn.addEventListener('click', () => openTestForm(null));

  resetBtn.addEventListener('click', () => {
    const confirmed = window.confirm('Ovo će obrisati sve izmene i dodate analize i vratiti originalni cenovnik. Nastaviti?');
    if (!confirmed) return;
    resetCenovnikToDefaults();
    toast('Cenovnik vraćen na fabričke vrednosti');
  });

  exportBtn.addEventListener('click', () => {
    const payload = buildBackupPayload();
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `biotest-teren-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    toast('Podaci izvezeni');
  });

  importBtn.addEventListener('click', () => importInput.click());

  importInput.addEventListener('change', async () => {
    const file = importInput.files[0];
    importInput.value = ''; // allow re-selecting the same file again later
    if (!file) return;

    const confirmed = window.confirm('Uvoz će zameniti trenutni cenovnik, pacijente, korpu i memoriju sadržajem iz fajla. Nastaviti?');
    if (!confirmed) return;

    try {
      const payload = JSON.parse(await file.text());
      if (!applyBackupPayload(payload)) {
        toast('Fajl ne izgleda kao ispravan Biotest Teren backup.');
        return;
      }
      toast('Podaci uvezeni — učitavam...');
      setTimeout(() => window.location.reload(), 800);
    } catch {
      toast('Greška pri čitanju fajla.');
    }
  });

  on('cenovnik:changed', () => {
    populateCategorySelect(categorySelect);
    render();
  });

  render();
}
