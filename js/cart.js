// Cart CRUD, total, nav badge. Reuses cenovnik.js's card-list renderer in 'cart' mode.
import { cart, persistCart, testById, on } from './state.js';
import { renderCardList } from './cenovnik.js';
import { formatPrice, toast } from './ui.js';

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
  let total = 0;
  for (const id of cart) {
    const t = testById.get(id);
    if (t) total += t.price;
  }
  return total;
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
  }

  clearBtn.addEventListener('click', () => {
    if (!cart.size) return;
    clearCart();
    toast('Korpa je ispražnjena');
  });

  on('cart:changed', render);
  render();
}
