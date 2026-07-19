// Entry point: boots storage, registers the service worker, wires nav/theme,
// and initializes each view module.
import { runMigrations } from './storage.js';
import { initNav, initTheme, onViewChange } from './ui.js';
import { initCenovnikView } from './cenovnik.js';
import { initCartView, updateCartBadge } from './cart.js';
import { initLokacijeView } from './locations.js';
import { initRutaView, onRutaViewShown, onRutaViewHidden } from './ruta.js';
import { initSettingsView } from './settings.js';

runMigrations();
initTheme();
updateCartBadge();

initCenovnikView();
initCartView();
initLokacijeView();
initRutaView();
initSettingsView();

// Registered before initNav() so a reload landing directly on #/ruta still
// triggers the map's lazy init (renderView fires listeners synchronously).
onViewChange((name) => {
  if (name === 'ruta') onRutaViewShown();
  else onRutaViewHidden();
});

initNav();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {
      // offline-install just won't work this session — app still functions online
    });
  });
}
