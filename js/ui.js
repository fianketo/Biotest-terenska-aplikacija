// Shared cross-view UI helpers: hash-based view routing, bottom sheet, toast,
// theme toggling, and formatters used across cenovnik/cart/locations/route.
import { KEYS, getItem, setItem } from './storage.js';

const VIEWS = ['cenovnik', 'korpa', 'lokacije', 'ruta'];
const VIEW_SUBTITLES = {
  cenovnik: 'Cenovnik analiza',
  korpa: 'Vaša korpa',
  lokacije: 'Terenske lokacije',
  ruta: 'Optimizacija rute'
};
const viewChangeListeners = [];

export function onViewChange(fn) {
  viewChangeListeners.push(fn);
}

export function currentView() {
  const hash = (window.location.hash || '').replace(/^#\/?/, '');
  return VIEWS.includes(hash) ? hash : 'cenovnik';
}

export function showView(name) {
  if (!VIEWS.includes(name)) name = 'cenovnik';
  if (window.location.hash !== `#/${name}`) {
    window.location.hash = `#/${name}`;
    return; // hashchange listener below will finish the render
  }
  renderView(name);
}

function renderView(name) {
  for (const v of VIEWS) {
    const section = document.getElementById(`view-${v}`);
    const navBtn = document.querySelector(`.nav-btn[data-view="${v}"]`);
    const active = v === name;
    if (section) {
      section.classList.toggle('active', active);
      section.toggleAttribute('hidden', !active);
    }
    if (navBtn) navBtn.classList.toggle('active', active);
  }
  const subtitleEl = document.getElementById('app-bar-sub');
  if (subtitleEl) subtitleEl.textContent = VIEW_SUBTITLES[name] || '';
  viewChangeListeners.forEach((fn) => fn(name));
}

window.addEventListener('hashchange', () => renderView(currentView()));

export function initNav() {
  document.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.addEventListener('click', () => showView(btn.dataset.view));
  });
  renderView(currentView());
}

// ---------- Theme ----------
export function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === 'system') {
    root.removeAttribute('data-theme');
  } else {
    root.setAttribute('data-theme', theme);
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    const dark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    meta.setAttribute('content', dark ? '#0b1220' : '#0e7c8c');
  }
}

export function initTheme() {
  const saved = getItem(KEYS.theme, 'system');
  applyTheme(saved);
  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = getItem(KEYS.theme, 'system');
      const order = ['system', 'light', 'dark'];
      const next = order[(order.indexOf(current) + 1) % order.length];
      setItem(KEYS.theme, next);
      applyTheme(next);
      toast(next === 'system' ? 'Tema: sistemska' : next === 'light' ? 'Tema: svetla' : 'Tema: tamna');
    });
  }
}

// ---------- Toast ----------
let toastTimer = null;
export function toast(message, { duration = 2600 } = {}) {
  const root = document.getElementById('toast-root');
  if (!root) return;
  root.textContent = message;
  root.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => root.classList.remove('visible'), duration);
}

// ---------- Bottom sheet ----------
// A stack, not a single slot — Lokacije opens a form sheet, then its
// "Analize za poneti" button opens a second, nested test-picker sheet on
// top of it. Each entry owns its own backdrop/sheet pair (z-index rises
// with depth); closeBottomSheet() with no args closes only the topmost one.
const sheetStack = [];

export function openBottomSheet(node, { title = '', onClose = null } = {}) {
  const root = document.getElementById('sheet-root');
  root.hidden = false;

  const depth = sheetStack.length;
  const backdrop = document.createElement('div');
  backdrop.className = 'sheet-backdrop';
  backdrop.style.zIndex = String(10 + depth * 2);

  const sheet = document.createElement('div');
  sheet.className = 'sheet';
  sheet.style.zIndex = String(11 + depth * 2);
  sheet.setAttribute('role', 'dialog');
  sheet.setAttribute('aria-modal', 'true');

  const header = document.createElement('div');
  header.className = 'sheet-header';
  header.innerHTML = `<span class="sheet-handle" aria-hidden="true"></span><div class="sheet-title-row"><h2>${title}</h2><button type="button" class="sheet-close" aria-label="Zatvori">✕</button></div>`;

  const body = document.createElement('div');
  body.className = 'sheet-body';
  body.appendChild(node);

  sheet.appendChild(header);
  sheet.appendChild(body);
  root.appendChild(backdrop);
  root.appendChild(sheet);

  requestAnimationFrame(() => {
    backdrop.classList.add('visible');
    sheet.classList.add('visible');
  });

  let closed = false;
  const close = () => {
    if (closed) return;
    closed = true;
    const idx = sheetStack.indexOf(entry);
    if (idx !== -1) sheetStack.splice(idx, 1);

    backdrop.classList.remove('visible');
    sheet.classList.remove('visible');
    document.removeEventListener('keydown', onKeydown);
    setTimeout(() => {
      backdrop.remove();
      sheet.remove();
      if (!sheetStack.length) root.hidden = true;
    }, 220);
    if (onClose) onClose();
  };

  function onKeydown(e) {
    if (e.key === 'Escape') close();
  }
  document.addEventListener('keydown', onKeydown);
  const entry = { close };
  sheetStack.push(entry);
  backdrop.addEventListener('click', close);
  header.querySelector('.sheet-close').addEventListener('click', close);

  return close;
}

export function closeBottomSheet() {
  const topmost = sheetStack[sheetStack.length - 1];
  if (topmost) topmost.close();
}

// ---------- Formatters ----------
const priceFmt = new Intl.NumberFormat('sr-RS', { maximumFractionDigits: 0 });

export function formatPrice(rsd) {
  return `${priceFmt.format(rsd)} RSD`;
}

export function formatDistance(meters) {
  if (meters == null) return '—';
  if (meters < 1000) return `${Math.round(meters)} m`;
  return `${(meters / 1000).toFixed(1)} km`;
}

export function formatDuration(seconds) {
  if (seconds == null) return '—';
  const mins = Math.round(seconds / 60);
  if (mins < 60) return `${mins} min`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h} h ${m ? `${m} min` : ''}`.trim();
}

export function formatClockTime(minutes) {
  if (minutes == null || Number.isNaN(minutes)) return '—';
  const total = ((Math.round(minutes) % 1440) + 1440) % 1440; // wrap into a 0-1439 day, tolerating overnight overflow
  const h = Math.floor(total / 60);
  const m = total % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

/** Parses a native <input type="time"> value ("HH:MM") into minutes since midnight, or null. */
export function parseTimeToMinutes(hhmm) {
  if (!hhmm) return null;
  const match = /^(\d{1,2}):(\d{2})$/.exec(hhmm.trim());
  if (!match) return null;
  const h = Number(match[1]);
  const m = Number(match[2]);
  if (h > 23 || m > 59) return null;
  return h * 60 + m;
}

export function debounce(fn, wait = 250) {
  let t = null;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

export function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
