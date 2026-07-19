// Minimal service worker — registers a fetch handler so the browser treats
// the app as installable ("Add to Home Screen") and caches just enough to
// show the app shell offline. Network-first for same-origin requests only:
// cross-origin calls (Leaflet CDN, OSM tiles, Nominatim, OSRM) are left
// completely alone and pass straight through to normal browser networking —
// caching those here would serve stale map/geocode/route data.
const CACHE_NAME = 'biotest-teren-shell-v1';
const SHELL_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './manifest.json',
  './js/app.js',
  './js/storage.js',
  './js/state.js',
  './js/ui.js',
  './js/data.js',
  './js/cenovnik.js',
  './js/cart.js',
  './js/locations.js',
  './js/patients.js',
  './js/geocode.js',
  './js/route.js',
  './js/map.js',
  './js/ruta.js',
  './js/settings.js',
  './vendor/leaflet/leaflet.js',
  './vendor/leaflet/leaflet.css',
  './vendor/leaflet/images/marker-icon.png',
  './vendor/leaflet/images/marker-icon-2x.png',
  './vendor/leaflet/images/marker-shadow.png',
  './vendor/leaflet/images/layers.png',
  './vendor/leaflet/images/layers-2x.png',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return; // let cross-origin (map/geocode/route APIs) pass through untouched

  event.respondWith(
    // cache: 'no-store' — without this, "network-first" is only aspirational:
    // fetch() still honors normal HTTP caching, so a browser could hand back
    // a stale cached response instead of hitting the network.
    fetch(event.request, { cache: 'no-store' })
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
