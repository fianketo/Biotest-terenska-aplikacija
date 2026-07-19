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

// ---------- Backup (export/import) ----------
// Durable user data only — bta:geocodeCache (pure perf cache) and
// bta:lastRoute (recomputed on demand) are deliberately excluded.
const BACKUP_KEYS = ['theme', 'cart', 'locations', 'patients', 'startLocation', 'cenovnik'];

export function buildBackupPayload() {
  const data = {};
  for (const name of BACKUP_KEYS) {
    data[name] = getItem(KEYS[name], null);
  }
  return { app: 'biotest-teren', exportedAt: new Date().toISOString(), data };
}

/** Validates and writes a previously exported payload back into storage. Returns true on success, false if the payload doesn't look like a valid backup (nothing is written in that case). */
export function applyBackupPayload(payload) {
  if (!payload || typeof payload !== 'object' || !payload.data || typeof payload.data !== 'object') return false;
  for (const name of BACKUP_KEYS) {
    if (Object.prototype.hasOwnProperty.call(payload.data, name)) {
      setItem(KEYS[name], payload.data[name]);
    }
  }
  return true;
}
