// Kernel entry. Order on every page: set hidden states, start scroll and pointer layer,
// play the intro (with the veil leaving if we came from another page), then scroll
// reveals, then the heavy accent (WebGL) last, only if the page asked for it.
import { gsap, ScrollTrigger, T, reduced } from './motion.js';
import { onCleanup, onSuspend, on } from './life.js';
import { setReveals, introReveals, scrollReveals } from './reveal.js';
import { startScroll, bindAnchors, lockScroll, unlockScroll } from './scroll.js';
import { initRoll, initMagnetic, initCursor, initFollower } from './hover.js';
import { startTransitions } from './transition.js';

// live clock: <time data-clock="Asia/Kolkata"></time>
function initClock(root) {
  const els = [...document.querySelectorAll('[data-clock]')];
  if (!els.length) return;
  const tick = () => els.forEach(el => {
    const p = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: el.dataset.clock }).formatToParts(new Date());
    const h = p.find(x => x.type === 'hour').value, m = p.find(x => x.type === 'minute').value;
    el.innerHTML = `${h}<span class="k-colon">:</span>${m}`;
  });
  tick();
  let id = setInterval(tick, 1000);
  onCleanup(() => clearInterval(id));
  onSuspend(hidden => { clearInterval(id); if (!hidden) { tick(); id = setInterval(tick, 1000); } });
}

// menu panel (outside the swapped container)
let menuTl = null;
const menuOpen = () => document.documentElement.dataset.menu === 'open';
function setMenu(open) {
  const panel = document.querySelector('[data-k-menu]');
  if (!panel) return;
  document.documentElement.dataset.menu = open ? 'open' : '';
  menuTl?.kill();
  const items = panel.querySelectorAll('[data-k-menu-item]');
  if (open) {
    lockScroll();
    menuTl = gsap.timeline()
      .set(panel, { autoAlpha: 1 })
      .fromTo(panel, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: T.slow, ease: 'inout' })
      .fromTo(items, { yPercent: 110 }, { yPercent: 0, duration: T.slow, stagger: T.stagger }, '<0.2');
  } else {
    unlockScroll();
    menuTl = gsap.timeline()
      .to(panel, { clipPath: 'inset(0 0 100% 0)', duration: T.normal, ease: 'inout' })
      .set(panel, { autoAlpha: 0 });
  }
}
function initMenu() {
  document.querySelectorAll('[data-k-menu-toggle]').forEach(b => b.addEventListener('click', () => setMenu(!menuOpen())));
  addEventListener('keydown', e => { if (e.key === 'Escape' && menuOpen()) setMenu(false); });
}

// heavy accents load last and only where asked: <canvas data-k-field>
async function initAccents(root) {
  const field = root.querySelector('[data-k-field]');
  if (!field) return;
  const { startField } = await import('./field.js');
  if (field.isConnected) startField(field);
}

async function boot(container, first, uncover) {
  setReveals(container);
  gsap.set(container, { autoAlpha: 1 });
  if (first) startScroll();
  initRoll(container);
  initMagnetic(container);
  initFollower(container);
  initClock(container);
  bindAnchors(container);
  const tl = gsap.timeline();
  if (uncover) tl.add(uncover(), 0);
  tl.add(introReveals(container), uncover ? T.slow * 0.55 : 0.1);
  scrollReveals(container);
  ScrollTrigger.refresh();
  await tl.then();
  initAccents(container);
}

initCursor();
initMenu();
startTransitions({ boot, closeMenu: () => menuOpen() && setMenu(false) });
