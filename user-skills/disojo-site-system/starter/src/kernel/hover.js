// Pointer layer: text roll, magnetic pull, one cursor, a media follower for lists.
// All of it only on a fine pointer; touch gets the plain, working element.
import { gsap, SplitText, T, reduced, finePointer } from './motion.js';
import { on, onCleanup } from './life.js';

// data-roll: every char rolls up to its twin, left to right (Disojo "side up down").
// JS only splits and writes --i per char; the motion is CSS (kernel.css), so it is
// cheap and keeps working when the element is cloned or re-rendered.
export function initRoll(root) {
  root.querySelectorAll('[data-roll]').forEach(el => {
    const label = el.querySelector('[data-roll-label]') || el;
    if (label._roll) return;
    const s = SplitText.create(label, { type: 'chars', charsClass: 'k-rc', propIndex: true });
    label._roll = s;
    label.style.setProperty('--n', s.chars.length);
    onCleanup(() => { s.revert(); label._roll = null; });
  });
}

// data-magnetic="0.35": the element leans toward the pointer, its inner part leans more
export function initMagnetic(root) {
  if (!finePointer.matches || reduced.matches) return;
  root.querySelectorAll('[data-magnetic]').forEach(el => {
    const k = parseFloat(el.dataset.magnetic) || 0.3;
    const inner = el.querySelector('[data-magnetic-inner]');
    const x = gsap.quickTo(el, 'x', { duration: T.slower, ease: 'power4.out' });
    const y = gsap.quickTo(el, 'y', { duration: T.slower, ease: 'power4.out' });
    const ix = inner && gsap.quickTo(inner, 'x', { duration: T.slower * 1.2, ease: 'power4.out' });
    const iy = inner && gsap.quickTo(inner, 'y', { duration: T.slower * 1.2, ease: 'power4.out' });
    on(el, 'pointermove', e => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      x(dx * k); y(dy * k); ix?.(dx * k * 0.6); iy?.(dy * k * 0.6);
    });
    on(el, 'pointerleave', () => {
      gsap.to([el, inner].filter(Boolean), { x: 0, y: 0, duration: T.slower * 1.3, ease: 'elastic.out(1, 0.4)', overwrite: true });
    });
  });
}

// One cursor for the whole site (lives outside the swapped container).
// Elements opt in with data-cursor="label text"; the cursor grows and shows it.
let cursorReady = false;
export function initCursor() {
  const c = document.querySelector('[data-k-cursor]');
  if (!c || cursorReady || !finePointer.matches) return;
  cursorReady = true;
  const label = c.querySelector('[data-k-cursor-label]');
  const x = gsap.quickTo(c, 'x', { duration: 0.45, ease: 'power3.out' });
  const y = gsap.quickTo(c, 'y', { duration: 0.45, ease: 'power3.out' });
  let px = 0, py = 0, queued = false;
  const update = () => {
    queued = false;
    const hit = document.elementFromPoint(px, py)?.closest('[data-cursor]');
    const text = hit?.dataset.cursor || '';
    c.dataset.state = hit ? (text ? 'label' : 'hover') : '';
    if (label && text && label.textContent !== text) label.textContent = text;
  };
  const queue = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
  addEventListener('pointermove', e => { px = e.clientX; py = e.clientY; x(px); y(py); c.dataset.on = '1'; queue(); });
  addEventListener('scroll', queue, { passive: true });
  document.addEventListener('pointerleave', () => { c.dataset.on = ''; });
  addEventListener('pointerdown', () => gsap.to(c, { scale: 0.85, duration: 0.3 }));
  addEventListener('pointerup', () => gsap.to(c, { scale: 1, duration: 0.4 }));
}

// data-follow-list: hovering a row ([data-follow-src] = image url) shows that picture
// in a card that trails the pointer. Lists of work, rooms, products.
export function initFollower(root) {
  if (!finePointer.matches) return;
  root.querySelectorAll('[data-follow-list]').forEach(list => {
    const card = list.querySelector('[data-follow-card]');
    const img = card?.querySelector('img');
    if (!card || !img) return;
    gsap.set(card, { xPercent: -50, yPercent: -50, scale: 0.6, autoAlpha: 0 });
    const x = gsap.quickTo(card, 'x', { duration: 0.7, ease: 'power3.out' });
    const y = gsap.quickTo(card, 'y', { duration: 0.7, ease: 'power3.out' });
    const r = gsap.quickTo(card, 'rotation', { duration: 0.9, ease: 'power3.out' });
    let lastX = 0;
    on(list, 'pointermove', e => {
      const b = (card.offsetParent || list).getBoundingClientRect(); // card is placed in its offsetParent
      const nx = e.clientX - b.left, ny = e.clientY - b.top;
      x(nx); y(ny); r(gsap.utils.clamp(-8, 8, (nx - lastX) * 0.4)); lastX = nx;
    });
    list.querySelectorAll('[data-follow-src]').forEach(row => on(row, 'pointerenter', () => {
      if (img.getAttribute('src') !== row.dataset.followSrc) img.src = row.dataset.followSrc;
      gsap.to(card, { autoAlpha: 1, scale: 1, duration: T.normal, overwrite: 'auto' });
    }));
    on(list, 'pointerleave', () => gsap.to(card, { autoAlpha: 0, scale: 0.6, duration: T.fast, ease: 'in', overwrite: 'auto' }));
  });
}
