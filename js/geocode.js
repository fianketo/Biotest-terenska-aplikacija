// Nominatim (OpenStreetMap) geocoding client: address -> {lat, lng, displayName}.
// Etiquette: browser JS cannot set a custom User-Agent header (fetch/XHR treat
// it as forbidden), so we rely on the Referer header the browser sends
// automatically (the deployed origin) plus an optional contact `email` param.
// Fill CONTACT_EMAIL in below (or via README instructions) if you deploy this
// for real/heavy use — see https://operations.osmfoundation.org/policies/nominatim/
import { KEYS, getItem, setItem } from './storage.js';

const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/search';
const CONTACT_EMAIL = ''; // optional: add a contact address for Nominatim's usage policy
const COUNTRY_CODES = ''; // optional: e.g. 'rs' to bias results to Serbia
const MIN_INTERVAL_MS = 1100; // Nominatim usage policy: max ~1 request/sec

function normalizeAddress(address) {
  return address.trim().replace(/\s+/g, ' ').toLowerCase();
}

let queue = Promise.resolve();
let lastCallAt = 0;

function throttledFetch(url, options) {
  // `queue` is the ordering gate for the *next* call and must never become a
  // rejected promise, or every subsequent call would short-circuit forever
  // the first time one request fails/aborts. The real result/rejection is
  // carried by `run`, which is what callers actually await.
  const run = queue.then(async () => {
    const wait = Math.max(0, MIN_INTERVAL_MS - (Date.now() - lastCallAt));
    if (wait > 0) await new Promise((r) => setTimeout(r, wait));
    lastCallAt = Date.now();
    return fetch(url, { ...options, headers: { Accept: 'application/json', ...(options && options.headers) } });
  });
  queue = run.then(() => undefined, () => undefined);
  return run;
}

/**
 * Geocode a free-text address. Cache-first (bta:geocodeCache) — repeat
 * addresses never hit the network. Returns null on no-match or failure.
 */
export async function geocodeAddress(address) {
  const key = normalizeAddress(address);
  if (!key) return null;

  const cache = getItem(KEYS.geocodeCache, {});
  if (cache[key]) return cache[key];

  const params = new URLSearchParams({
    format: 'jsonv2',
    q: address,
    limit: '1',
    addressdetails: '0',
    'accept-language': 'sr'
  });
  if (COUNTRY_CODES) params.set('countrycodes', COUNTRY_CODES);
  if (CONTACT_EMAIL) params.set('email', CONTACT_EMAIL);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 9000);

  try {
    const res = await throttledFetch(`${NOMINATIM_URL}?${params.toString()}`, { signal: controller.signal });
    if (!res.ok) return null;
    const results = await res.json();
    if (!Array.isArray(results) || !results.length) return null;

    const top = results[0];
    const entry = {
      lat: parseFloat(top.lat),
      lng: parseFloat(top.lon),
      displayName: top.display_name,
      cachedAt: new Date().toISOString()
    };

    const freshCache = getItem(KEYS.geocodeCache, {});
    freshCache[key] = entry;
    setItem(KEYS.geocodeCache, freshCache);

    return entry;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}
