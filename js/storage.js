// Thin localStorage wrapper: JSON-safe get/set, namespaced keys, schema migration stub.
const PREFIX = 'bta:';
const SCHEMA_VERSION = 1;

export const KEYS = {
  schemaVersion: `${PREFIX}schemaVersion`,
  theme: `${PREFIX}theme`,
  cart: `${PREFIX}cart`,
  locations: `${PREFIX}locations`,
  geocodeCache: `${PREFIX}geocodeCache`,
  lastRoute: `${PREFIX}lastRoute`,
  patients: `${PREFIX}patients`,
  startLocation: `${PREFIX}startLocation`,
  cenovnik: `${PREFIX}cenovnik`
};

export function getItem(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function setItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false; // e.g. private-browsing quota errors — caller can toast
  }
}

export function removeItem(key) {
  localStorage.removeItem(key);
}

export function runMigrations() {
  const version = getItem(KEYS.schemaVersion, 0);
  if (version < SCHEMA_VERSION) {
    setItem(KEYS.schemaVersion, SCHEMA_VERSION);
  }
}
