// Route optimization: OSRM public Trip API client + a haversine/nearest-
// neighbor fallback for when that free demo server is unavailable. Pure
// logic — no DOM, no storage (ruta.js owns persistence/rendering).
const OSRM_TRIP_URL = 'https://router.project-osrm.org/trip/v1/driving';
const OSRM_TIMEOUT_MS = 9000;
const ASSUMED_SPEED_KMH = 35; // rough mixed urban/field driving average, used only by the fallback

export function haversineMeters(a, b) {
  const R = 6371000;
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

function estimateDuration(distanceMeters) {
  return distanceMeters / ((ASSUMED_SPEED_KMH * 1000) / 3600);
}

/**
 * Greedy nearest-neighbor ordering using straight-line distance. Used only
 * when the OSRM trip call fails/times out — draws a dashed straight-line
 * route so it's visually distinct from a real driving route.
 */
export function nearestNeighborFallback(start, stops) {
  const remaining = [...stops];
  let current = { id: null, lat: start.lat, lng: start.lng };
  const order = [];
  const legs = [];
  let totalDistance = 0;

  while (remaining.length) {
    let nearestIdx = 0;
    let nearestDist = Infinity;
    for (let i = 0; i < remaining.length; i++) {
      const d = haversineMeters(current, remaining[i]);
      if (d < nearestDist) {
        nearestDist = d;
        nearestIdx = i;
      }
    }
    const nearest = remaining.splice(nearestIdx, 1)[0];
    const duration = estimateDuration(nearestDist);
    legs.push({ fromId: current.id ?? 'start', toId: nearest.id, distanceMeters: nearestDist, durationSeconds: duration });
    totalDistance += nearestDist;
    order.push(nearest);
    current = nearest;
  }

  return {
    stopIds: order.map((s) => s.id),
    geometryCoords: [{ lat: start.lat, lng: start.lng }, ...order].map((p) => [p.lng, p.lat]),
    totalDistanceMeters: totalDistance,
    totalDurationSeconds: legs.reduce((sum, l) => sum + l.durationSeconds, 0),
    legs,
    source: 'fallback-nn'
  };
}

function parseOsrmTripResponse(json, inputPoints) {
  const trip = json.trips[0];
  const zipped = inputPoints.map((point, i) => ({ point, waypoint: json.waypoints[i] }));
  zipped.sort((a, b) => a.waypoint.waypoint_index - b.waypoint.waypoint_index);

  const orderedStops = zipped.filter((z) => z.point.id !== null);
  const stopIds = orderedStops.map((z) => z.point.id);

  const legs = [];
  for (let i = 0; i < zipped.length - 1; i++) {
    const leg = trip.legs[i];
    legs.push({
      fromId: zipped[i].point.id ?? 'start',
      toId: zipped[i + 1].point.id,
      distanceMeters: leg.distance,
      durationSeconds: leg.duration
    });
  }

  return {
    stopIds,
    geometryCoords: trip.geometry.coordinates,
    totalDistanceMeters: trip.distance,
    totalDurationSeconds: trip.duration,
    legs,
    source: 'osrm'
  };
}

/**
 * Calls the public OSRM Trip API (router.project-osrm.org — a shared free
 * demo instance, not for heavy/production load). Coordinates in the request
 * are lon,lat (reversed from how they're stored/displayed everywhere else
 * in this app — the easiest bug to introduce here).
 */
async function fetchOsrmTrip(start, stops) {
  const inputPoints = [{ id: null, lat: start.lat, lng: start.lng }, ...stops];
  const coordStr = inputPoints.map((p) => `${p.lng},${p.lat}`).join(';');
  const url = `${OSRM_TRIP_URL}/${coordStr}?source=first&roundtrip=false&geometries=geojson&overview=full`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), OSRM_TIMEOUT_MS);
  try {
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) throw new Error(`OSRM HTTP ${res.status}`);
    const json = await res.json();
    if (json.code !== 'Ok' || !json.trips || !json.trips.length) {
      throw new Error(`OSRM error: ${json.code || 'no trip returned'}`);
    }
    return parseOsrmTripResponse(json, inputPoints);
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Computes an optimized visiting order for `stops` starting at `start`
 * ({lat,lng}, no id — a virtual point, not necessarily a saved location).
 * Tries OSRM first; falls back to the local nearest-neighbor heuristic on
 * any failure (network error, timeout, rate limit, non-Ok response).
 */
export async function computeOptimizedTrip(start, stops) {
  if (!stops.length) return null;
  try {
    return await fetchOsrmTrip(start, stops);
  } catch {
    return nearestNeighborFallback(start, stops);
  }
}
