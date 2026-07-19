// Cenovnik: search/filter over the flattened test index + a shared card-list
// renderer reused by cart.js and by locations.js's test-picker sheet.
import { testIndex, normalizeForSearch, cart, on } from './state.js';
import { formatPrice, debounce, escapeHtml } from './ui.js';
import { CENOVNIK } from './data.js';

const BATCH_SIZE = 60;

export function filterTests({ query = '', category = '', min = null, max = null } = {}) {
  const q = normalizeForSearch(query.trim());
  return testIndex.filter((t) => {
    if (category && t.category !== category) return false;
    if (min != null && !Number.isNaN(min) && t.price < min) return false;
    if (max != null && !Number.isNaN(max) && t.price > max) return false;
    if (!q) return true;
    const haystack = normalizeForSearch(
      [t.name, t.category, t.prefix, t.sample, t.method, t.instrument].filter(Boolean).join(' ')
    );
    return haystack.includes(q);
  });
}

export function populateCategorySelect(selectEl) {
  const current = selectEl.value;
  const options = ['<option value="">Sve kategorije</option>']
    .concat(CENOVNIK.categories.map((c) => `<option value="${escapeHtml(c.name)}">${escapeHtml(c.name)}</option>`));
  selectEl.innerHTML = options.join('');
  if (current) selectEl.value = current;
}

function testCardHtml(test, { mode, selected }) {
  const meta = [];
  if (test.sample) meta.push(`Uzorak: ${escapeHtml(test.sample)}`);
  if (test.method) meta.push(`Metoda: ${escapeHtml(test.method)}`);
  if (test.instrument) meta.push(`Instrument: ${escapeHtml(test.instrument)}`);
  if (test.time) meta.push(`Vreme: ${escapeHtml(test.time)}`);

  let actionHtml = '';
  if (mode === 'browse') {
    actionHtml = `<button type="button" class="add-btn ${selected ? 'in-cart' : ''}" data-action="toggle-cart" data-id="${test.id}">${selected ? '✓ U korpi' : '➕ Dodaj'}</button>`;
  } else if (mode === 'cart') {
    actionHtml = `<button type="button" class="remove-btn" data-action="remove-cart" data-id="${test.id}">✕ Ukloni</button>`;
  } else if (mode === 'picker') {
    actionHtml = `<button type="button" class="add-btn ${selected ? 'in-cart' : ''}" data-action="toggle-picker" data-id="${test.id}">${selected ? '✓ Odabrano' : '➕ Dodaj'}</button>`;
  }

  return `
  <div class="card test-card" data-id="${test.id}">
    <div class="test-card-top">
      <span class="test-name">${escapeHtml(test.name)}</span>
      <span class="test-price">${formatPrice(test.price)}</span>
    </div>
    <div class="badge-row">
      <span class="badge-chip">${escapeHtml(test.category)}</span>
      ${test.prefix ? `<span class="badge-chip mono">${escapeHtml(test.prefix)}</span>` : ''}
    </div>
    ${meta.length ? `<div class="test-meta">${meta.join(' · ')}</div>` : ''}
    <div class="card-actions">${actionHtml}</div>
  </div>`;
}

/**
 * Shared incremental card-list renderer.
 * mode: 'browse' (Cenovnik, toggles global cart), 'cart' (Korpa, remove-only),
 * 'picker' (location test-tagging, toggles a caller-provided Set).
 */
export function renderCardList(container, tests, { mode, selectedIds = cart, onAction, emptyMessage } = {}) {
  container.innerHTML = '';
  if (!tests.length) {
    container.innerHTML = `<div class="empty-state"><span class="emoji">🔎</span>${escapeHtml(emptyMessage || 'Nema rezultata.')}</div>`;
    return;
  }

  let renderedCount = 0;
  const listEl = document.createElement('div');
  container.appendChild(listEl);

  function renderNextBatch() {
    const slice = tests.slice(renderedCount, renderedCount + BATCH_SIZE);
    if (!slice.length) return;
    listEl.insertAdjacentHTML(
      'beforeend',
      slice.map((t) => testCardHtml(t, { mode, selected: selectedIds.has(t.id) })).join('')
    );
    renderedCount += slice.length;
  }

  renderNextBatch();

  if (renderedCount < tests.length) {
    const sentinel = document.createElement('div');
    sentinel.className = 'load-sentinel';
    container.appendChild(sentinel);
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        renderNextBatch();
        if (renderedCount >= tests.length) observer.disconnect();
      }
    });
    observer.observe(sentinel);
  }

  if (!container.dataset.delegated) {
    container.dataset.delegated = '1';
    container.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-action]');
      if (!btn || !container.contains(btn)) return;
      onAction && onAction(btn.dataset.action, btn.dataset.id);
    });
  }
}

/**
 * Mounts a self-contained search + card-list picker into `container`,
 * toggling membership in `selectedSet` (mutated in place). Used by the
 * Lokacije "Analize za poneti" nested sheet — reuses the same search/filter
 * and card UI as the main Cenovnik view instead of a second list component.
 */
export function mountTestPicker(container, selectedSet) {
  container.innerHTML = `
    <div class="field">
      <label>🔍 Pretraga analiza</label>
      <input type="text" class="picker-search" placeholder="Naziv, kategorija..." autocomplete="off">
    </div>
    <div class="picker-results card-list"></div>
  `;
  const searchInput = container.querySelector('.picker-search');
  const resultsEl = container.querySelector('.picker-results');

  function render() {
    const results = filterTests({ query: searchInput.value });
    renderCardList(resultsEl, results.slice(0, 200), {
      mode: 'picker',
      selectedIds: selectedSet,
      onAction: (action, id) => {
        if (action !== 'toggle-picker') return;
        if (selectedSet.has(id)) selectedSet.delete(id);
        else selectedSet.add(id);
        render();
      },
      emptyMessage: 'Nema rezultata.'
    });
  }

  searchInput.addEventListener('input', debounce(render, 200));
  render();
}

export function initCenovnikView() {
  const searchInput = document.getElementById('searchInput');
  const categorySelect = document.getElementById('categoryFilter');
  const minPriceEl = document.getElementById('minPrice');
  const maxPriceEl = document.getElementById('maxPrice');
  const clearBtn = document.getElementById('clearFiltersBtn');
  const resultCount = document.getElementById('resultCount');
  const listEl = document.getElementById('cenovnikList');

  populateCategorySelect(categorySelect);

  function render() {
    const filters = {
      query: searchInput.value,
      category: categorySelect.value,
      min: minPriceEl.value !== '' ? Number(minPriceEl.value) : null,
      max: maxPriceEl.value !== '' ? Number(maxPriceEl.value) : null
    };
    const results = filterTests(filters);
    resultCount.textContent = `${results.length} / ${testIndex.length} analiza`;
    renderCardList(listEl, results, {
      mode: 'browse',
      onAction: (action, id) => {
        if (action === 'toggle-cart') {
          import('./cart.js').then((m) => m.toggleCartItem(id));
        }
      },
      emptyMessage: 'Nema analiza za zadate filtere. Pokušajte drugu pretragu.'
    });
  }

  const debouncedRender = debounce(render, 220);
  searchInput.addEventListener('input', debouncedRender);
  categorySelect.addEventListener('change', render);
  minPriceEl.addEventListener('input', debouncedRender);
  maxPriceEl.addEventListener('input', debouncedRender);
  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    categorySelect.value = '';
    minPriceEl.value = '';
    maxPriceEl.value = '';
    render();
  });

  on('cart:changed', () => {
    // refresh add/in-cart button state without losing scroll position
    listEl.querySelectorAll('.test-card').forEach((card) => {
      const id = card.dataset.id;
      const btn = card.querySelector('[data-action="toggle-cart"]');
      if (!btn) return;
      const inCart = cart.has(id);
      btn.classList.toggle('in-cart', inCart);
      btn.textContent = inCart ? '✓ U korpi' : '➕ Dodaj';
    });
  });

  render();
}
