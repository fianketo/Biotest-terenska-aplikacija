// In-memory app state: editable test index (seeded once from data.js, then
// lives in localStorage so Settings can add/edit/delete tests), cart,
// locations — plus a tiny pub/sub bus so modules react to each other
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

// ---------- Test index (editable, stable IDs) ----------
// `prefix` is null for many tests and not unique — cannot serve as an ID.
// IDs are derived from (categoryName, testName) *once*, the first time a
// test is seeded/created, then stored as a permanent, opaque field —
// renaming a test or its category afterward never changes its id, so
// existing cart items / saved locations' testIds[] / saved patients'
// testIds[] never get silently orphaned by an edit.
function slugify(str) {
  return str
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // strip diacritics
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function generateUniqueTestId(category, name, existingIds) {
  const base = `${slugify(category)}__${slugify(name)}`;
  let candidate = base;
  let suffix = 1;
  while (existingIds.has(candidate)) {
    suffix += 1;
    candidate = `${base}__${suffix}`;
  }
  return candidate;
}

/** Flattens the static factory data.js CENOVNIK into the flat {id, category, ...fields}[] shape used everywhere else, assigning fresh stable ids. */
function flattenDefaultCenovnik() {
  const existingIds = new Set();
  const flat = [];
  for (const category of CENOVNIK.categories) {
    for (const test of category.tests) {
      const id = generateUniqueTestId(category.name, test.name, existingIds);
      existingIds.add(id);
      flat.push({ id, category: category.name, ...test });
    }
  }
  return flat;
}

function seedCenovnikIfNeeded() {
  if (getItem(KEYS.cenovnik, null) !== null) return;
  setItem(KEYS.cenovnik, flattenDefaultCenovnik());
}

export const testIndex = [];
export const testById = new Map();

function syncTestById() {
  testById.clear();
  testIndex.forEach((t) => testById.set(t.id, t));
}

function rebuildTestIndex() {
  const stored = getItem(KEYS.cenovnik, []);
  testIndex.length = 0;
  testIndex.push(...stored);
  syncTestById();
}

function persistCenovnik() {
  setItem(KEYS.cenovnik, testIndex);
  syncTestById();
  pruneCartOfMissingTests(); // a deleted test can't be left as a phantom entry in someone's cart
  emit('cenovnik:changed');
}

function pruneCartOfMissingTests() {
  let changed = false;
  for (const id of cart) {
    if (!testById.has(id)) {
      cart.delete(id);
      changed = true;
    }
  }
  if (changed) persistCart();
}

seedCenovnikIfNeeded();
rebuildTestIndex();

export function getCenovnikCategories() {
  return [...new Set(testIndex.map((t) => t.category))].sort((a, b) => a.localeCompare(b, 'sr'));
}

export function addTest(fields) {
  const category = (fields.category || '').trim();
  const name = (fields.name || '').trim();
  const price = Number(fields.price);
  if (!category || !name || !Number.isFinite(price) || price < 0) return null;

  const existingIds = new Set(testIndex.map((t) => t.id));
  const test = {
    id: generateUniqueTestId(category, name, existingIds),
    category,
    name,
    prefix: fields.prefix || null,
    sample: fields.sample || null,
    method: fields.method || null,
    instrument: fields.instrument || null,
    time: fields.time || null,
    price
  };
  testIndex.push(test);
  persistCenovnik();
  return test;
}

export function updateTest(id, fields) {
  const test = testById.get(id);
  if (!test) return null;

  const category = (fields.category || '').trim();
  const name = (fields.name || '').trim();
  const price = Number(fields.price);
  if (!category || !name || !Number.isFinite(price) || price < 0) return null;

  test.category = category;
  test.name = name;
  test.prefix = fields.prefix || null;
  test.sample = fields.sample || null;
  test.method = fields.method || null;
  test.instrument = fields.instrument || null;
  test.time = fields.time || null;
  test.price = price;
  persistCenovnik();
  return test;
}

export function deleteTest(id) {
  const idx = testIndex.findIndex((t) => t.id === id);
  if (idx === -1) return false;
  testIndex.splice(idx, 1);
  persistCenovnik();
  return true;
}

/** Wipes all add/edit/delete changes and restores the original factory price list. Destructive — callers should confirm with the user first. */
export function resetCenovnikToDefaults() {
  const fresh = flattenDefaultCenovnik();
  testIndex.length = 0;
  testIndex.push(...fresh);
  persistCenovnik();
}

export function sumTestPrices(ids) {
  let total = 0;
  for (const id of ids || []) {
    const t = testById.get(id);
    if (t) total += t.price;
  }
  return total;
}

export function resolveTests(ids) {
  return (ids || []).map((id) => testById.get(id)).filter(Boolean);
}

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
