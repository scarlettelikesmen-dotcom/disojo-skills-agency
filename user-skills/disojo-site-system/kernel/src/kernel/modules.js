// Scroll modules found on every strong TFTL site, rebuilt as our own.
// Each is one data attribute, registered with use(), cleaned up on page leave.
import { gsap, ScrollTrigger, SplitText, T, reduced } from './motion.js';
import { use } from './registry.js';

// data-ink: a statement inks in letter by letter as you read down (Gifford Hill, Son Daven).
// data-ink="0.15" sets the starting ink. The reading pace becomes the scroll pace.
use('[data-ink]', el => {
  if (reduced.matches) return;
  const s = SplitText.create(el, { type: 'words,chars', charsClass: 'k-ic' });
  const from = parseFloat(el.dataset.ink) || 0.15;
  const tw = gsap.fromTo(s.chars, { opacity: from }, {
    opacity: 1, ease: 'none', stagger: 0.1,
    scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true },
  });
  return () => { tw.scrollTrigger?.kill(); tw.kill(); s.revert(); };
});

// data-parallax="0.15": the element drifts against the scroll. On a frame with an
// [data-parallax-media] child, the picture moves inside a fixed window instead.
use('[data-parallax]', el => {
  if (reduced.matches) return;
  const k = parseFloat(el.dataset.parallax) || 0.15;
  const media = el.querySelector('[data-parallax-media]');
  const target = media || el;
  if (media) gsap.set(media, { scale: 1 + k * 2 });
  const tw = gsap.fromTo(target, { yPercent: -k * 50 }, {
    yPercent: k * 50, ease: 'none',
    scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
  });
  return () => { tw.scrollTrigger?.kill(); tw.kill(); gsap.set(target, { clearProps: 'transform' }); };
});

// data-ground="dark|light" on sections + data-follow-ground on fixed UI:
// each fixed element takes the ground of whatever section sits under its own middle,
// so the header changes colour exactly at the edge, not for the whole screen (ERA).
use('[data-barba="container"]', root => {
  const sections = [...root.querySelectorAll('[data-ground]')];
  const followers = [...document.querySelectorAll('[data-follow-ground]')];
  if (!sections.length || !followers.length) return;
  const triggers = [];
  followers.forEach(f => {
    const mid = () => { const r = f.getBoundingClientRect(); return r.top + r.height / 2; };
    sections.forEach(sec => triggers.push(ScrollTrigger.create({
      trigger: sec,
      start: () => `top ${mid()}px`,
      end: () => `bottom ${mid()}px`,
      onToggle: self => { if (self.isActive) f.dataset.ground = sec.dataset.ground; },
    })));
  });
  return () => triggers.forEach(t => t.kill());
});

// data-k-header: hides going down, comes back going up, always shown near the top.
use('[data-k-header]', header => {
  let shown = true;
  const show = v => {
    if (v === shown) return;
    shown = v;
    gsap.to(header, { yPercent: v ? 0 : -110, duration: T.normal, ease: v ? 'out' : 'in', overwrite: true });
  };
  const st = ScrollTrigger.create({
    start: 0, end: 'max',
    onUpdate: self => show(self.scroll() < 120 || self.direction < 0),
  });
  return () => st.kill();
}, { scope: 'shell' });

// data-progress="#section-id" on a nav item: its line fills while you are in that
// section (Santal's nav is its progress bar). The fill reads --p (0 to 1) in CSS.
use('[data-progress]', item => {  // scope shell: nav items live outside the container
  const sec = document.querySelector(item.dataset.progress);
  if (!sec) return;
  const st = ScrollTrigger.create({
    trigger: sec, start: 'top 50%', end: 'bottom 50%',
    onUpdate: self => item.style.setProperty('--p', self.progress.toFixed(3)),
    onLeave: () => item.style.setProperty('--p', 1),
    onLeaveBack: () => item.style.setProperty('--p', 0),
  });
  return () => { st.kill(); item.style.setProperty('--p', 0); };
}, { scope: 'shell' });

// <link rel="icon" data-away="/favicon-away.svg">: while the tab is in the background
// the icon swaps every second to pull the visitor back (Jesko Jets). Costs nothing.
use('link[rel="icon"][data-away]', link => {
  const home = link.href, away = link.dataset.away;
  let id = null;
  const onVis = () => {
    clearInterval(id);
    if (document.hidden) { let a = false; id = setInterval(() => { a = !a; link.href = a ? away : home; }, 1000); }
    else link.href = home;
  };
  document.addEventListener('visibilitychange', onVis);
}, { scope: 'once' });

// data-close: the page close, read from TFTL's shipped code (research/tftl-handson/closes-code.md).
// Every TFTL close is one scrubbed trigger on the footer; only what moves changes.
//
// data-close="frame" (ERA, ADA, 4X): a tall section with a sticky screen. The picture that ends
// the page ([data-close-clip]) shrinks into a frame while the footer content ([data-close-inner])
// grows in from .75. data-close-inset="8% 22%" sets the frame (phone default 4% 8%).
//
// data-close="catch-up" (Lenval, SL, Pictoric): the footer content ([data-close-inner]) starts
// half its height higher and catches up as the footer scrolls in, so it feels like it was waiting
// under the page. data-close-from="-50" sets the start offset in percent. Desktop only, as theirs.
use('[data-close]', el => {
  if (reduced.matches) return;
  const kind = el.dataset.close;
  const inner = el.querySelector('[data-close-inner]');
  const mm = gsap.matchMedia();
  if (kind === 'frame') {
    const clip = el.querySelector('[data-close-clip]');
    mm.add({ desk: '(min-width: 992px)', phone: '(max-width: 991px)' }, ctx => {
      const inset = ctx.conditions.desk ? (el.dataset.closeInset || '8% 22%') : (el.dataset.closeInsetPhone || '4% 8%');
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: 'top top', end: 'bottom bottom', scrub: 0.5 },
      });
      if (clip) tl.fromTo(clip, { clipPath: 'inset(0% 0% 0% 0%)' }, { clipPath: `inset(${inset})`, ease: 'none' }, 0);
      if (inner) tl.fromTo(inner, { opacity: 0, scale: 0.75 }, { opacity: 1, scale: 1, ease: 'none' }, 0);
    });
  } else if (kind === 'catch-up' && inner) {
    const from = parseFloat(el.dataset.closeFrom) || -50;
    mm.add('(min-width: 992px)', () => {
      gsap.fromTo(inner, { yPercent: from }, {
        yPercent: 0, ease: 'none', immediateRender: false,
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom bottom', scrub: true },
      });
    });
  }
  return () => mm.revert();
});
