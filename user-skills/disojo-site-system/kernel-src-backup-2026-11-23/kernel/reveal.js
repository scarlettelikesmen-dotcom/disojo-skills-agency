// Reveal vocabulary. Markup says WHAT an element is, the kernel decides HOW it arrives
// and leaves. Every kind has three states: set (hidden, before paint), show, hide.
// The hide state is what makes page transitions choreographed instead of a cut.
//
//   data-reveal="lines"  paragraphs: masked lines rise
//   data-reveal="words"  short headings: masked words rise
//   data-reveal="chars"  display type: chars flip up on X, one after another
//   data-reveal="block"  any box: rises a little and fades in
//   data-reveal="rule"   lines and dividers: draw from the left
//   data-reveal="media"  images and video: frame opens, picture settles from 1.15
// Options: data-reveal-delay="0.2", data-reveal-group on a wrapper makes its children
// start together from one trigger, data-reveal-now plays on page intro instead of scroll.
import { gsap, ScrollTrigger, SplitText, T, reduced } from './motion.js';
import { onCleanup } from './life.js';

const split = (el, type) => {
  if (el._split) return el._split;
  const s = SplitText.create(el, { type, mask: type.includes('chars') ? undefined : type.split(',').pop().trim(), linesClass: 'k-line', wordsClass: 'k-word', charsClass: 'k-char' });
  el._split = s;
  onCleanup(() => { s.revert(); el._split = null; });
  return s;
};

const K = {
  lines: {
    set: el => gsap.set(split(el, 'lines').lines, { yPercent: 110 }),
    show: (el, d) => gsap.to(split(el, 'lines').lines, { yPercent: 0, duration: T.slow, stagger: T.stagger * 1.4, delay: d }),
    hide: el => gsap.to(split(el, 'lines').lines, { yPercent: -110, duration: T.fast, ease: 'in', stagger: T.stagger / 2 }),
  },
  words: {
    set: el => gsap.set(split(el, 'lines,words').words, { yPercent: 110 }),
    show: (el, d) => gsap.to(split(el, 'lines,words').words, { yPercent: 0, duration: T.slow, stagger: T.stagger * 1.2, delay: d }),
    hide: el => gsap.to(split(el, 'lines,words').words, { yPercent: -110, duration: T.fast, ease: 'in', stagger: T.stagger / 3 }),
  },
  chars: {
    set: el => gsap.set(split(el, 'words,chars').chars, { opacity: 0, yPercent: 40, rotateX: -90, transformOrigin: '50% 100%' }),
    show: (el, d) => gsap.to(split(el, 'words,chars').chars, { opacity: 1, yPercent: 0, rotateX: 0, duration: T.slow, stagger: T.stagger / 2.5, delay: d }),
    hide: el => gsap.to(split(el, 'words,chars').chars, { opacity: 0, yPercent: -40, rotateX: 90, duration: T.fast, ease: 'in', stagger: T.stagger / 5 }),
  },
  block: {
    set: el => gsap.set(el, { opacity: 0, y: '2.5rem' }),
    show: (el, d) => gsap.to(el, { opacity: 1, y: 0, duration: T.slow, delay: d }),
    hide: el => gsap.to(el, { opacity: 0, y: '-1rem', duration: T.fast, ease: 'in' }),
  },
  rule: {
    set: el => gsap.set(el, { clipPath: 'inset(0 100% 0 0)' }),
    show: (el, d) => gsap.to(el, { clipPath: 'inset(0 0% 0 0)', duration: T.slower, ease: 'inout', delay: d }),
    hide: el => gsap.to(el, { clipPath: 'inset(0 0 0 100%)', duration: T.fast, ease: 'in' }),
  },
  media: {
    set: el => { gsap.set(el, { clipPath: 'inset(100% 0 0 0)' }); gsap.set(el.querySelector('img,video') || el, { scale: 1.15 }); },
    show: (el, d) => gsap.timeline({ delay: d })
      .to(el, { clipPath: 'inset(0% 0 0 0)', duration: T.slower, ease: 'inout' })
      .to(el.querySelector('img,video') || el, { scale: 1, duration: T.slower * 1.4 }, 0),
    hide: el => gsap.to(el, { clipPath: 'inset(0 0 100% 0)', duration: T.normal, ease: 'inout' }),
  },
};

const kindOf = el => K[el.dataset.reveal] ? el.dataset.reveal : 'block';
const delayOf = el => parseFloat(el.dataset.revealDelay) || 0;
const inView = el => { const r = el.getBoundingClientRect(); return r.top < innerHeight && r.bottom > 0; };

// call after fonts are ready, before the container is visible
export function setReveals(root) {
  const els = [...root.querySelectorAll('[data-reveal]')];
  if (reduced.matches) { gsap.set(els, { autoAlpha: 1 }); return; }
  els.forEach(el => { K[kindOf(el)].set(el); gsap.set(el, { autoAlpha: 1 }); });
}

// page intro: everything marked data-reveal-now, plus whatever is already on screen
export function introReveals(root, at = 0) {
  const tl = gsap.timeline();
  if (reduced.matches) return tl;
  const now = [...root.querySelectorAll('[data-reveal]')].filter(el => el.hasAttribute('data-reveal-now') || inView(el));
  now.forEach((el, i) => { el._shown = true; tl.add(K[kindOf(el)].show(el, 0), at + delayOf(el) + i * T.stagger * 1.5); });
  return tl;
}

// the rest arrive as they scroll in; a data-reveal-group starts together
export function scrollReveals(root) {
  if (reduced.matches) return;
  const seen = new Set();
  root.querySelectorAll('[data-reveal]').forEach(el => {
    if (el._shown) return;
    const trigger = el.closest('[data-reveal-group]') || el;
    if (seen.has(trigger)) return;
    seen.add(trigger);
    const members = trigger === el ? [el] : [...trigger.querySelectorAll('[data-reveal]')].filter(m => !m._shown);
    ScrollTrigger.create({
      trigger, start: 'clamp(top 88%)', once: true,
      onEnter: () => members.forEach((m, i) => { m._shown = true; K[kindOf(m)].show(m, delayOf(m) + i * T.stagger * 1.5); }),
    });
  });
}

// page outro: hide what the visitor can see, return when done
export function outroReveals(root) {
  if (reduced.matches) return Promise.resolve();
  const vis = [...root.querySelectorAll('[data-reveal]')].filter(inView);
  if (!vis.length) return Promise.resolve();
  const tl = gsap.timeline();
  vis.forEach((el, i) => tl.add(K[kindOf(el)].hide(el), i * 0.02));
  return tl.then();
}
