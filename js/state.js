// In-memory app state: flattened test index (built once from CENOVNIK),
// cart, locations — plus a tiny pub/sub bus so modules react to each other
// without a framework.
import { CENOVNIK } from './data.js';
import { KEYS, getItem, setItem } from './storage.js';

const listeners = new Map();

export function on(event, fn) {
  if (!listeners.has(event)) listeners.set(event, new Set());
  listeners.get(event).add(fn);
  return () => listeners.get(event).delete(fn);
}

export function emit(event, payload) {
  (listeners.get(event) || []).forEach((fn) => fn(payload));
}

// ---------- Test index (slug IDs) ----------
// `prefix` is null for 68/897 tests and not unique — cannot serve as an ID.
// (categoryName, testName) pairs are unique across the whole dataset, so the
// ID is derived from those two fields, stable across future data.js edits
// that add/remove unrelated tests.
function slugify(str) {
  return str
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // strip diacritics
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function buildTestIndex() {
  const index = [];
  const seenIds = new Map();
  for (const category of CENOVNIK.categories) {
    for (const test of category.tests) {
      let id = `${slugify(category.name)}__${slugify(test.name)}`;
      const count = (seenIds.get(id) || 0) + 1;
      seenIds.set(id, count);
      if (count > 1) id = `${id}__${count}`;
      index.push({ id, category: category.name, ...test });
    }
  }
  return index;
}

export const testIndex = buildTestIndex();
export const testById = new Map(testIndex.map((t) => [t.id, t]));

export function normalizeForSearch(str) {
  return (str || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
}

// ---------- Cart ----------
export const cart = new Set(getItem(KEYS.cart, []));

export function persistCart() {
  setItem(KEYS.cart, [...cart]);
  emit('cart:changed', cart);
}

// ---------- Locations ----------
export let locations = getItem(KEYS.locations, []);

export function persistLocations() {
  setItem(KEYS.locations, locations);
  emit('locations:changed', locations);
}

export function setLocations(next) {
  locations = next;
  persistLocations();
}
