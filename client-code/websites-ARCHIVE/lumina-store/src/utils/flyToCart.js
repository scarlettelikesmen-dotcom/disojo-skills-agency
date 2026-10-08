/**
 * flyToCart — creates a ghost element that animates from the clicked button
 * to the cart icon in the navbar, then removes itself.
 * 
 * Usage: flyToCart(buttonElement)
 */
export function flyToCart(triggerEl) {
  const cartBtn = document.getElementById('cart-btn');
  if (!cartBtn || !triggerEl) return;

  const fromRect = triggerEl.getBoundingClientRect();
  const toRect = cartBtn.getBoundingClientRect();

  // Create the flying dot
  const dot = document.createElement('div');
  dot.style.cssText = `
    position: fixed;
    z-index: 9999;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--terracotta, #C46C4E);
    pointer-events: none;
    left: ${fromRect.left + fromRect.width / 2 - 5}px;
    top: ${fromRect.top + fromRect.height / 2 - 5}px;
    transition: none;
  `;
  document.body.appendChild(dot);

  // Force reflow
  dot.getBoundingClientRect();

  // Animate to cart
  dot.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  dot.style.left = `${toRect.left + toRect.width / 2 - 5}px`;
  dot.style.top = `${toRect.top + toRect.height / 2 - 5}px`;
  dot.style.opacity = '0';
  dot.style.transform = 'scale(0.3)';

  // Pop the cart icon
  setTimeout(() => {
    cartBtn.classList.add('cart-pop');
    setTimeout(() => cartBtn.classList.remove('cart-pop'), 300);
  }, 560);

  // Remove dot
  setTimeout(() => dot.remove(), 700);
}
