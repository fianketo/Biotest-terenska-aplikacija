// Leaflet wrapper: map init, location markers, route polyline, geolocation.
// Kept DOM/Leaflet-only — no routing math, no storage access.

let map = null;
let markersLayer = null;
let routeLayer = null;
let currentLocationMarker = null;

const DEFAULT_CENTER = [44.7866, 20.4489]; // Belgrade
const DEFAULT_ZOOM = 12;

export function initMap(containerId) {
  if (map) return map;
  if (!window.L) throw new Error('Leaflet nije učitan (vendor/leaflet/leaflet.js).');
  map = window.L.map(containerId, { zoomControl: true }).setView(DEFAULT_CENTER, DEFAULT_ZOOM);
  window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> saradnici'
  }).addTo(map);
  markersLayer = window.L.layerGroup().addTo(map);
  routeLayer = window.L.layerGroup().addTo(map);
  return map;
}

export function invalidateSize() {
  if (map) map.invalidateSize();
}

function pinIcon(color) {
  return window.L.divIcon({
    className: 'route-pin',
    html: `<div style="width:26px;height:26px;border-radius:50% 50% 50% 0;background:${color};transform:rotate(-45deg);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.35)"></div>`,
    iconSize: [26, 26],
    iconAnchor: [13, 26]
  });
}

export function renderLocationMarkers(locations, { onMarkerClick } = {}) {
  if (!markersLayer) return;
  markersLayer.clearLayers();
  const bounds = [];

  for (const loc of locations) {
    if (loc.lat == null || loc.lng == null) continue;
    const color = loc.visited ? '#1a8f5e' : '#0e7c8c';
    const marker = window.L.marker([loc.lat, loc.lng], { icon: pinIcon(color) })
      .bindPopup(`<strong>${escapeHtmlLite(loc.name)}</strong><br>${escapeHtmlLite(loc.address)}`);
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

function escapeHtmlLite(str) {
  return String(str || '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
