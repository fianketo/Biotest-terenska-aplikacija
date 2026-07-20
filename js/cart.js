// Cart CRUD, total, nav badge. Reuses cenovnik.js's card-list renderer in 'cart' mode.
import { cart, persistCart, testById, locations, sumTestPrices, on } from './state.js';
import { renderCardList } from './cenovnik.js';
import { assignTestIdsToLocation } from './locations.js';
import { formatPrice, toast, escapeHtml } from './ui.js';

export function toggleCartItem(id) {
  if (cart.has(id)) {
    cart.delete(id);
  } else {
    cart.add(id);
  }
  persistCart();
}

export function removeFromCart(id) {
  if (cart.delete(id)) persistCart();
}

export function clearCart() {
  cart.clear();
  persistCart();
}

export function getCartTotal() {
  return sumTestPrices(cart);
}

export function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (!badge) return;
  const count = cart.size;
  badge.textContent = String(count);
  badge.hidden = count === 0;
}

export function initCartView() {
  const listEl = document.getElementById('cartList');
  const totalEl = document.getElementById('cartTotal');
  const clearBtn = document.getElementById('clearCartBtn');
  const assignRow = document.getElementById('cartAssignRow');
  const patientSelect = document.getElementById('cartPatientSelect');
  const assignBtn = document.getElementById('assignCartToPatientBtn');

  function renderPatientOptions() {
    const assignable = locations.filter((l) => !l.visited);
    const previousValue = patientSelect.value;
    if (!assignable.length) {
      patientSelect.innerHTML = '<option value="">Nema pacijenata za teren</option>';
      patientSelect.disabled = true;
    } else {
      patientSelect.disabled = false;
      patientSelect.innerHTML = `<option value="">Izaberi pacijenta...</option>${assignable
        .map((l) => `<option value="${l.id}">${escapeHtml(l.name)}</option>`)
        .join('')}`;
      if (assignable.some((l) => l.id === previousValue)) patientSelect.value = previousValue;
    }
    assignBtn.disabled = !cart.size || !patientSelect.value;
  }

  function render() {
    const items = [...cart].map((id) => testById.get(id)).filter(Boolean);
    renderCardList(listEl, items, {
      mode: 'cart',
      onAction: (action, id) => {
        if (action === 'remove-cart') removeFromCart(id);
      },
      emptyMessage: 'Korpa je prazna. Dodajte analize sa Cenovnika.'
    });
    totalEl.textContent = formatPrice(getCartTotal());
    updateCartBadge();
    assignRow.hidden = !cart.size;
    renderPatientOptions();
  }

  clearBtn.addEventListener('click', () => {
    if (!cart.size) return;
    clearCart();
    toast('Korpa je ispražnjena');
  });

  patientSelect.addEventListener('change', () => {
    assignBtn.disabled = !cart.size || !patientSelect.value;
  });

  assignBtn.addEventListener('click', () => {
    const locationId = patientSelect.value;
    if (!locationId || !cart.size) return;
    const updated = assignTestIdsToLocation(locationId, [...cart]);
    if (!updated) {
      toast('Pacijent više ne postoji — osvežite listu.');
      return;
    }
    clearCart();
    toast(`Analize dodeljene pacijentu: ${updated.name}`);
  });

  on('cart:changed', render);
  on('cenovnik:changed', render); // price edits/deletions in Settings should reflect in the cart total immediately
  on('locations:changed', renderPatientOptions);
  render();
}
