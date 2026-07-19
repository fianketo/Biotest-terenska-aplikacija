// Leaflet wrapper: map init, location markers, route polyline, geolocation.
// Kept DOM/Leaflet-only — no routing math, no storage access.

let map = null;
let markersLayer = null;
let routeLayer = null;
let currentLocationMarker = null;
let homeMarker = null;
let liveMarker = null;

const DEFAULT_CENTER = [44.7866, 20.4489]; // Belgrade
const DEFAULT_ZOOM = 12;

// CartoDB Voyager — free, no API key, cleaner/higher-contrast than stock OSM
// tiles so the colored route pins stand out better, while keeping street
// labels legible (unlike the more minimal Positron style).
const TILE_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const TILE_OPTIONS = {
  maxZoom: 20,
  subdomains: 'abcd',
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> saradnici &copy; <a href="https://carto.com/attributions">CARTO</a>'
};

export function initMap(containerId) {
  if (map) return map;
  if (!window.L) throw new Error('Leaflet nije učitan (vendor/leaflet/leaflet.js).');
  map = window.L.map(containerId, { zoomControl: true }).setView(DEFAULT_CENTER, DEFAULT_ZOOM);
  window.L.tileLayer(TILE_URL, TILE_OPTIONS).addTo(map);
  window.L.control.scale({ metric: true, imperial: false }).addTo(map);
  markersLayer = window.L.layerGroup().addTo(map);
  routeLayer = window.L.layerGroup().addTo(map);
  return map;
}

export function invalidateSize() {
  if (map) map.invalidateSize();
}

function pinIcon(color, number) {
  // The pin div is rotated -45deg for the teardrop shape; the number span
  // is counter-rotated +45deg so it reads upright inside it.
  const label = number != null
    ? `<span style="transform:rotate(45deg);color:#fff;font-weight:700;font-size:12px;">${number}</span>`
    : '';
  return window.L.divIcon({
    className: 'route-pin',
    html: `<div style="width:28px;height:28px;border-radius:50% 50% 50% 0;background:${color};transform:rotate(-45deg);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;">${label}</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 28]
  });
}

/**
 * `routePositions`: optional Map of location id -> 1-based visiting order
 * (from the last computed route) — pins for stops in that route show their
 * number; others fall back to a plain colored pin. Every marker gets a
 * permanent name tooltip so the map itself is readable without tapping.
 */
export function renderLocationMarkers(locations, { onMarkerClick, routePositions } = {}) {
  if (!markersLayer) return;
  markersLayer.clearLayers();
  const bounds = [];

  for (const loc of locations) {
    if (loc.lat == null || loc.lng == null) continue;
    const color = loc.visited ? '#1a8f5e' : '#c94444';
    const position = routePositions ? routePositions.get(loc.id) : null;
    const marker = window.L.marker([loc.lat, loc.lng], { icon: pinIcon(color, position) })
      .bindPopup(`<strong>${escapeHtmlLite(loc.name)}</strong><br>${escapeHtmlLite(loc.address)}`)
      .bindTooltip(`${position != null ? `#${position} ` : ''}${escapeHtmlLite(loc.name)}`, {
        permanent: true,
        direction: 'right',
        offset: [10, 0],
        className: 'patient-label'
      });
    if (onMarkerClick) marker.on('click', () => onMarkerClick(loc.id));
    marker.addTo(markersLayer);
    bounds.push([loc.lat, loc.lng]);
  }

  return bounds;
}

export function showCurrentLocationMarker(lat, lng) {
  if (!map) return;
  if (currentLocationMarker) currentLocationMarker.remove();
  currentLocationMarker = window.L.marker([lat, lng], { icon: pinIcon('#12b3c4') })
    .bindPopup('📡 Moja trenutna lokacija')
    .addTo(map);
}

export function clearCurrentLocationMarker() {
  if (currentLocationMarker) {
    currentLocationMarker.remove();
    currentLocationMarker = null;
  }
}

function homeIcon() {
  return window.L.divIcon({
    className: 'home-pin',
    html: `<div style="width:36px;height:36px;border-radius:50%;background:#fff;border:3px solid #7c4dff;display:flex;align-items:center;justify-content:center;font-size:18px;box-shadow:0 2px 8px rgba(0,0,0,0.35)">🏠</div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18]
  });
}

export function showHomeMarker(lat, lng, address) {
  if (!map) return;
  if (homeMarker) homeMarker.remove();
  homeMarker = window.L.marker([lat, lng], { icon: homeIcon(), zIndexOffset: 1000 })
    .bindPopup(`🏠 ${escapeHtmlLite(address || 'Moja adresa')}`)
    .addTo(map);
}

export function clearHomeMarker() {
  if (homeMarker) {
    homeMarker.remove();
    homeMarker = null;
  }
}

function liveIcon() {
  return window.L.divIcon({
    className: 'live-pin',
    html: `<div class="live-dot-wrap"><div class="live-dot-pulse"></div><div class="live-dot"></div></div>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11]
  });
}

/** "You are here" live position marker — repositions the same marker instance in place (no flicker/recreate per GPS tick). */
export function showLiveMarker(lat, lng) {
  if (!map) return;
  if (liveMarker) {
    liveMarker.setLatLng([lat, lng]);
  } else {
    liveMarker = window.L.marker([lat, lng], { icon: liveIcon(), zIndexOffset: 2000 }).addTo(map);
  }
}

export function clearLiveMarker() {
  if (liveMarker) {
    liveMarker.remove();
    liveMarker = null;
  }
}

export function drawRoute(geometryCoords, { dashed = false } = {}) {
  if (!routeLayer) return;
  routeLayer.clearLayers();
  if (!geometryCoords || !geometryCoords.length) return;
  const latLngs = geometryCoords.map(([lng, lat]) => [lat, lng]);
  window.L.polyline(latLngs, {
    color: dashed ? '#b8860b' : '#0e7c8c',
    weight: 5,
    opacity: 0.85,
    dashArray: dashed ? '10 8' : null
  }).addTo(routeLayer);
}

export function fitToBounds(bounds) {
  if (!map || !bounds || !bounds.length) return;
  if (bounds.length === 1) {
    map.setView(bounds[0], 14);
  } else {
    map.fitBounds(bounds, { padding: [30, 30] });
  }
}

export function flyTo(lat, lng) {
  if (!map) return;
  map.flyTo([lat, lng], 15, { duration: 0.6 });
}

export function getCurrentPosition({ timeout = 10000 } = {}) {
  return new Promise((resolve, reject) => {
    if (!('geolocation' in navigator)) {
      reject(new Error('Geolokacija nije podržana u ovom pregledaču.'));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      (err) => reject(err),
      { enableHighAccuracy: true, timeout, maximumAge: 60000 }
    );
  });
}

/**
 * Standalone, disposable Leaflet map for picking a lat/lng by tapping —
 * independent of the module-singleton Ruta map above (used inside the
 * Lokacije add/edit sheet). Tap or drag the marker to move it; `onChange`
 * fires with the new {lat,lng}. Caller must call `destroy()` when done
 * (e.g. on sheet close) to avoid leaking the Leaflet instance.
 */
export function createPickerMap(containerId, { lat, lng } = {}) {
  if (!window.L) throw new Error('Leaflet nije učitan (vendor/leaflet/leaflet.js).');
  const hasInitial = lat != null && lng != null;
  const center = hasInitial ? [lat, lng] : DEFAULT_CENTER;
  const pickerMap = window.L.map(containerId, { zoomControl: true }).setView(center, hasInitial ? 15 : DEFAULT_ZOOM);
  window.L.tileLayer(TILE_URL, TILE_OPTIONS).addTo(pickerMap);
  window.L.control.scale({ metric: true, imperial: false }).addTo(pickerMap);

  const listeners = new Set();
  let marker = hasInitial ? window.L.marker(center, { draggable: true }).addTo(pickerMap) : null;

  function notify(latlng) {
    listeners.forEach((fn) => fn(latlng.lat, latlng.lng));
  }

  function placeMarker(latlng) {
    if (marker) {
      marker.setLatLng(latlng);
    } else {
      marker = window.L.marker(latlng, { draggable: true }).addTo(pickerMap);
      marker.on('dragend', () => notify(marker.getLatLng()));
    }
    notify(latlng);
  }

  if (marker) marker.on('dragend', () => notify(marker.getLatLng()));
  pickerMap.on('click', (e) => placeMarker(e.latlng));

  return {
    onChange(fn) {
      listeners.add(fn);
    },
    invalidateSize() {
      pickerMap.invalidateSize();
    },
    destroy() {
      pickerMap.remove();
    }
  };
}

function escapeHtmlLite(str) {
  return String(str || '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
