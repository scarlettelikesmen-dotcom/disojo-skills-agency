import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// Heavy, weighted page scroll (Lenis). Everything that scrolls the page goes through
// the helpers below so it doesn't fight the smoothing. Off for reduced motion, where
// the helpers fall back to native scrolling.
let lenis = null;
let wake = () => {};

export function startSmoothScroll() {
  if (lenis || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};
  lenis = new Lenis({ lerp: 0.07, wheelMultiplier: 0.85, smoothWheel: true });

  // Drive Lenis only while there's input or motion; idle costs nothing.
  // Lenis eases by elapsed time, so after an idle pause its first frame would see a
  // multi-second gap and finish the glide in one step. Feed it a clock that never
  // advances more than 50ms per frame instead.
  let raf = 0;
  let last = 0;
  let clock = 0;
  const tick = (t) => {
    // `raf` stays set while this frame runs, so the scroll event Lenis emits from
    // inside raf() can't restart the loop (and reset the clock) mid-frame.
    clock += Math.max(0, Math.min(t - last, 50));
    last = t;
    lenis.raf(clock);
    raf = lenis.isScrolling ? requestAnimationFrame(tick) : 0;
  };
  const kick = () => {
    if (raf) return;
    last = performance.now();
    raf = requestAnimationFrame(tick);
  };
  const events = ['wheel', 'touchstart', 'touchmove', 'keydown', 'mousedown'];
  events.forEach((e) => window.addEventListener(e, kick, { passive: true }));
  const off = lenis.on('scroll', kick);
  wake = kick;
  kick();

  return () => {
    wake = () => {};
    events.forEach((e) => window.removeEventListener(e, kick));
    off();
    cancelAnimationFrame(raf);
    lenis.destroy();
    lenis = null;
  };
}

export function scrollToTop({ immediate = false } = {}) {
  if (lenis) { lenis.scrollTo(0, { immediate }); wake(); }
  else window.scrollTo({ top: 0, behavior: immediate ? 'auto' : 'smooth' });
}

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el, { offset: -(parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 0) });
    wake();
  }
  else el.scrollIntoView({ behavior: 'smooth' });
}
