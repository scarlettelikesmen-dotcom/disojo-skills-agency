// Smooth scroll: Lenis driven by the GSAP ticker so ScrollTrigger and Lenis share one clock.
import Lenis from 'lenis';
import { gsap, ScrollTrigger, reduced } from './motion.js';

export let lenis = null;
const raf = t => lenis && lenis.raf(t * 1000);

export function startScroll() {
  if (reduced.matches) return null;
  lenis?.destroy();
  lenis = new Lenis({ duration: 1.15, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.remove(raf);
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);
  return lenis;
}

export const lockScroll = () => { lenis?.stop(); document.documentElement.classList.add('is-locked'); };
export const unlockScroll = () => { lenis?.start(); document.documentElement.classList.remove('is-locked'); };

export function toTop() {
  window.scrollTo(0, 0);
  lenis?.scrollTo(0, { immediate: true, force: true });
}

// in-page anchors glide instead of jumping
export function bindAnchors(root = document) {
  root.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(a => {
    a.addEventListener('click', e => {
      const el = document.querySelector(a.getAttribute('href'));
      if (!el || !lenis) return;
      e.preventDefault();
      lenis.scrollTo(el, { duration: 1.2, offset: -24 });
    });
  });
}
