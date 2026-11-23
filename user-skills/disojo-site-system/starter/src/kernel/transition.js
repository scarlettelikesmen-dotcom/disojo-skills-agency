// Page transitions with Barba (Monolog runs Barba on Astro). The order matters more than
// the effect: hide what is visible, cover, clean up, swap, uncover, play the new intro.
import barba from '@barba/core';
import { gsap, ScrollTrigger, T, reduced } from './motion.js';
import { runCleanups, fontsReady, twoFrames } from './life.js';
import { outroReveals } from './reveal.js';
import { toTop, lockScroll, unlockScroll, startScroll } from './scroll.js';

const veil = () => document.querySelector('[data-k-veil]');

function cover() {
  const v = veil();
  if (!v || reduced.matches) return Promise.resolve();
  return gsap.timeline()
    .set(v, { autoAlpha: 1, clipPath: 'inset(100% 0 0 0)' })
    .to(v, { clipPath: 'inset(0% 0 0 0)', duration: T.slow, ease: 'inout' })
    .then();
}
function uncover() {
  const v = veil();
  if (!v) return gsap.timeline();
  if (reduced.matches) return gsap.timeline().set(v, { autoAlpha: 0 });
  return gsap.timeline()
    .to(v, { clipPath: 'inset(0 0 100% 0)', duration: T.slow, ease: 'inout' })
    .set(v, { autoAlpha: 0 });
}

// keep <title>, description and canonical in step with the page we land on
function syncHead(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  document.title = doc.title;
  ['meta[name="description"]', 'link[rel="canonical"]', 'meta[property="og:title"]', 'meta[property="og:url"]'].forEach(sel => {
    const a = document.head.querySelector(sel), b = doc.head.querySelector(sel);
    if (a && b) a.replaceWith(b.cloneNode(true));
  });
}

// pages: { [namespace]: { init(container) -> void, intro?(container) -> timeline } }
// boot(container, firstLoad) is the shared per-page setup from index.js
export function startTransitions({ boot, closeMenu }) {
  history.scrollRestoration = 'manual';
  barba.init({
    debug: false,
    timeout: 7000,
    preventRunning: true,
    prevent: ({ el }) => el.hasAttribute('data-no-swap') || el.target === '_blank',
    transitions: [{
      name: 'veil',
      async once({ next }) {
        await fontsReady();
        await boot(next.container, true);
      },
      async leave({ current }) {
        closeMenu?.();
        lockScroll();
        await Promise.all([outroReveals(current.container), cover()]);
      },
      afterLeave({ current }) {
        runCleanups();
        ScrollTrigger.getAll().forEach(t => t.kill());
        current.container.remove();
      },
      beforeEnter({ next }) {
        syncHead(next.html);
        toTop();
      },
      async enter({ next }) {
        startScroll();
        unlockScroll();
        await twoFrames();
        await boot(next.container, false, uncover);
      },
      afterEnter() { ScrollTrigger.refresh(); },
    }],
  });
}
