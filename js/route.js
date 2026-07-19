// Route optimization: OSRM public Trip API client + a haversine/nearest-
// neighbor fallback for when that free demo server is unavailable, plus a
// time-window-aware scheduler (computeScheduledTrip) for stops with a
// fixed appointment time, using OSRM's Route service for a pre-fixed
// order. Pure logic — no DOM, no storage (ruta.js owns persistence/rendering).
const OSRM_TRIP_URL = 'https://router.project-osrm.org/trip/v1/driving';
const OSRM_ROUTE_URL = 'https://router.project-osrm.org/route/v1/driving';
const OSRM_TIMEOUT_MS = 9000;
const ASSUMED_SPEED_KMH = 35; // rough mixed urban/field driving average, used only by the fallback
const SERVICE_DURATION_MINUTES = 15; // assumed time spent per stop (sample collection) before departing — fixed, tunable assumption

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

/**
 * Builds a stop order where appointment-time stops act as fixed anchors
 * (sorted ascending, order never altered) and every flexible (no
 * appointment) stop is inserted at whichever gap — including before the
 * first anchor or after the last — adds the least straight-line distance
 * (cheapest-insertion construction). This is a feasibility-*reporting*
 * heuristic, not a constraint solver: it always returns one valid full
 * ordering; computeScheduledTrip below then reports honestly wherever
 * that ordering can't actually make an appointment on time.
 */
function buildTimeAnchoredOrder(start, stops) {
  const anchored = stops.filter((s) => s.appointmentMinutes != null).sort((a, b) => a.appointmentMinutes - b.appointmentMinutes);
  const flexible = stops.filter((s) => s.appointmentMinutes == null);

  const sequence = [...anchored];
  for (const stop of flexible) {
    let bestIndex = 0;
    let bestExtraCost = Infinity;
    for (let i = 0; i <= sequence.length; i++) {
      const prev = i === 0 ? start : sequence[i - 1];
      const next = i === sequence.length ? null : sequence[i];
      const costWithout = next ? haversineMeters(prev, next) : 0;
      const costWith = haversineMeters(prev, stop) + (next ? haversineMeters(stop, next) : 0);
      const extra = costWith - costWithout;
      if (extra < bestExtraCost) {
        bestExtraCost = extra;
        bestIndex = i;
      }
    }
    sequence.splice(bestIndex, 0, stop);
  }
  return sequence;
}

/**
 * Calls the public OSRM Route service (sibling to the Trip service used
 * above) for a *fixed* waypoint order — unlike Trip, it never reorders,
 * so legs line up 1:1 with the submitted points. Same lon,lat coordinate
 * order caveat as fetchOsrmTrip.
 */
async function fetchOsrmRoute(orderedPoints) {
  const coordStr = orderedPoints.map((p) => `${p.lng},${p.lat}`).join(';');
  const url = `${OSRM_ROUTE_URL}/${coordStr}?geometries=geojson&overview=full`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), OSRM_TIMEOUT_MS);
  try {
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) throw new Error(`OSRM HTTP ${res.status}`);
    const json = await res.json();
    if (json.code !== 'Ok' || !json.routes || !json.routes.length) {
      throw new Error(`OSRM error: ${json.code || 'no route returned'}`);
    }
    const route = json.routes[0];
    return {
      geometryCoords: route.geometry.coordinates,
      totalDistanceMeters: route.distance,
      totalDurationSeconds: route.duration,
      legDistancesMeters: route.legs.map((l) => l.distance),
      legDurationsSeconds: route.legs.map((l) => l.duration),
      source: 'osrm'
    };
  } finally {
    clearTimeout(timeout);
  }
}

/** Straight-line fallback for a pre-fixed order (mirrors nearestNeighborFallback's fallback math, minus the ordering decision). */
function buildStraightLineLegs(orderedPoints) {
  const legDistancesMeters = [];
  const legDurationsSeconds = [];
  let totalDistance = 0;
  for (let i = 0; i < orderedPoints.length - 1; i++) {
    const d = haversineMeters(orderedPoints[i], orderedPoints[i + 1]);
    legDistancesMeters.push(d);
    legDurationsSeconds.push(estimateDuration(d));
    totalDistance += d;
  }
  return {
    geometryCoords: orderedPoints.map((p) => [p.lng, p.lat]),
    totalDistanceMeters: totalDistance,
    totalDurationSeconds: legDurationsSeconds.reduce((a, b) => a + b, 0),
    legDistancesMeters,
    legDurationsSeconds,
    source: 'fallback-nn'
  };
}

/**
 * Time-window-aware route: orders stops around fixed appointment times
 * (see buildTimeAnchoredOrder), fetches real driving legs for that order
 * (OSRM Route, falling back to straight lines), then walks the sequence
 * from `departureMinutes` computing an honest estimated arrival at each
 * stop and flagging any appointment it can't actually make on time.
 *
 * `stops`: [{ id, lat, lng, appointmentMinutes: number|null }, ...]
 * Returns the same shape as computeOptimizedTrip (so ruta.js's existing
 * OSRM/fallback banner logic keeps working unchanged) plus `schedule`.
 */
export async function computeScheduledTrip({ start, departureMinutes, stops }) {
  if (!stops.length) return null;

  const orderedStops = buildTimeAnchoredOrder(start, stops);
  const orderedPoints = [start, ...orderedStops];

  let legInfo;
  try {
    legInfo = await fetchOsrmRoute(orderedPoints);
  } catch {
    legInfo = buildStraightLineLegs(orderedPoints);
  }

  const legs = [];
  const schedule = [];
  let currentTimeMinutes = departureMinutes;

  orderedStops.forEach((stop, i) => {
    const fromId = i === 0 ? 'start' : orderedStops[i - 1].id;
    const distanceMeters = legInfo.legDistancesMeters[i];
    const durationSeconds = legInfo.legDurationsSeconds[i];
    legs.push({ fromId, toId: stop.id, distanceMeters, durationSeconds });

    const arrivalMinutes = currentTimeMinutes + durationSeconds / 60;
    let lateByMinutes = 0;
    let departFromStopMinutes;
    if (stop.appointmentMinutes != null) {
      if (arrivalMinutes > stop.appointmentMinutes) lateByMinutes = arrivalMinutes - stop.appointmentMinutes;
      departFromStopMinutes = Math.max(arrivalMinutes, stop.appointmentMinutes) + SERVICE_DURATION_MINUTES;
    } else {
      departFromStopMinutes = arrivalMinutes + SERVICE_DURATION_MINUTES;
    }

    schedule.push({
      stopId: stop.id,
      arrivalMinutes: Math.round(arrivalMinutes),
      appointmentMinutes: stop.appointmentMinutes ?? null,
      lateByMinutes: Math.round(lateByMinutes)
    });
    currentTimeMinutes = departFromStopMinutes;
  });

  return {
    stopIds: orderedStops.map((s) => s.id),
    geometryCoords: legInfo.geometryCoords,
    totalDistanceMeters: legInfo.totalDistanceMeters,
    totalDurationSeconds: legInfo.totalDurationSeconds,
    legs,
    schedule,
    source: legInfo.source
  };
}
