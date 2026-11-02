// Behaviour and motion for Direction A. One easing family (expo-out for arrivals, in-out for state changes),
// durations 0.5 / 0.75 / 1.1 s, 60 ms staggers, scroll-scrubbed parallax kept inside clipped frames.
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const touch = matchMedia('(hover: none)').matches;
const OUT = 'expo.out', IO = 'power3.inOut';

// smooth scroll, driven by GSAP's ticker so scroll and scrubbed tweens move in the same frame
const lenis = reduce ? null : new Lenis({ lerp: 0.085, wheelMultiplier: 1, smoothWheel: true });
if (lenis) {
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(t => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

// nav: solid after the hero, slides away on the way down, back on the way up
const nav = document.getElementById('nav'); let last = 0;
const onScroll = () => { const y = scrollY; nav.classList.toggle('solid', y > 40); nav.classList.toggle('hide', y > 300 && y > last + 2 && !document.body.classList.contains('pm-open')); if (Math.abs(y - last) > 2) last = y; };
addEventListener('scroll', onScroll, { passive: true }); onScroll();

// phone menu: panel wipes down, links rise in sequence, reverse on close
const mb = document.getElementById('menuB'), pm = document.getElementById('pm');
const pmLinks = pm ? [...pm.querySelectorAll('nav a, .pm-foot > *')] : [];
let menuOpen = false;
const setMenu = open => {
  if (open === menuOpen) return; menuOpen = open;
  mb.setAttribute('aria-expanded', open); mb.textContent = open ? 'Close' : 'Menu';
  document.body.classList.toggle('pm-open', open); open ? lenis?.stop() : lenis?.start();
  gsap.killTweensOf([pm, pmLinks]);
  if (open) {
    pm.hidden = false;
    if (reduce) return;
    gsap.fromTo(pm, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.75, ease: IO });
    gsap.fromTo(pmLinks, { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.9, ease: OUT, stagger: 0.05, delay: 0.25 });
  } else if (reduce) pm.hidden = true;
  else gsap.to(pm, { clipPath: 'inset(0 0 100% 0)', duration: 0.6, ease: IO, onComplete: () => { if (!menuOpen) pm.hidden = true; } });
};
mb?.addEventListener('click', () => setMenu(!menuOpen));
addEventListener('keydown', e => { if (e.key === 'Escape' && menuOpen) { setMenu(false); mb.focus(); } });
pmLinks.forEach(a => a.tagName === 'A' && a.addEventListener('click', () => setMenu(false)));

// buttons: the arrow leaves and a twin arrives (two-part hover)
document.querySelectorAll('.btn i, .tlink i').forEach(i => { const a = i.textContent.trim(); i.dataset.k = a === '↗' ? 'd' : 'h'; i.innerHTML = `<b>${a}</b><b aria-hidden="true">${a}</b>`; });

if (!reduce) {
  // headlines: lines rise out of masks
  const heads = [...document.querySelectorAll('main h1, main h2, .sec-cta h2, .pn-tx h3, .row h3, .steps h3')];
  document.fonts.ready.then(() => {
    heads.forEach(h => {
      const hero = h.closest('.hero-photo, .phead');
      // first-screen headings stay painted (no mask, no fade) so the page shows at once; the lines still glide up
      const split = SplitText.create(h, hero ? { type: 'lines', linesClass: 'ln' } : { type: 'lines', mask: 'lines', linesClass: 'ln' });
      if (hero) gsap.from(split.lines, { yPercent: 45, duration: 1.3, ease: OUT, stagger: 0.07 });
      else gsap.from(split.lines, { yPercent: 110, duration: 1.1, ease: OUT, stagger: 0.06, scrollTrigger: { trigger: h, start: 'top 88%', once: true } });
      h.classList.add('in');
    });
    ScrollTrigger.refresh();
  });

  // copy, lists and cards: drift up in sequence as they arrive
  const flow = '.hd p, .hd .rv-ctl, .ph-intro > *, .hp-side > *, .hp-meta, .pt-list li, .ck-list li, .ticks li, .area-list li, .faq-r details, .ct, .steps li, .row, .rv, .post, .pf-body > *, .pf-tags, .pr-body > p, .cta-row > *, .after > *, .faq-more, .btns, .toc, .art-book, .art-body .prose > *:not(h2):not(h3), .vid, .foot-top > *';
  const items = [...document.querySelectorAll(flow)].filter((el, i, a) => !a.some(p => p !== el && p.contains(el)));
  // first-screen copy never hides (it is what the visitor reads first); it only glides into place
  const first = items.filter(el => el.closest('.phead, .hero-photo'));
  gsap.from(first, { y: 24, duration: 1.2, ease: OUT, stagger: 0.07, delay: 0.2 });
  const rest = items.filter(el => !first.includes(el));
  gsap.set(rest, { y: 28, opacity: 0 });
  ScrollTrigger.batch(rest, { start: 'top 92%', once: true, onEnter: b => gsap.to(b, { y: 0, opacity: 1, duration: 1, ease: OUT, stagger: 0.06, overwrite: true }) });

  // photos: unmask upward, settle from a slight zoom, then drift inside the frame while scrolling
  document.querySelectorAll('.ph-photo, .pn-ph, .pt-ph figure, .pf-ph, .ck-ph, .pr-ph, .cta-ph, .po-ph, .r-ph').forEach(f => {
    const img = f.querySelector('img'); if (!img) return;
    const small = f.classList.contains('r-ph') || f.classList.contains('po-ph');
    if (f.classList.contains('ph-photo')) { // page hero photo: settle and drift, never hidden
      gsap.fromTo(img, { scale: 1.12 }, { scale: 1.04, duration: 1.8, ease: OUT });
      gsap.fromTo(img, { yPercent: -3 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: f, start: 'top top', end: 'bottom top', scrub: true } });
      return;
    }
    gsap.fromTo(f, { clipPath: 'inset(18% 0 0 0 round var(--r-card))' }, { clipPath: 'inset(0% 0 0 0 round var(--r-card))', duration: 1.3, ease: OUT, scrollTrigger: { trigger: f, start: 'top 92%', once: true } });
    gsap.fromTo(img, { scale: 1.18 }, { scale: small ? 1 : 1.08, duration: 1.6, ease: OUT, scrollTrigger: { trigger: f, start: 'top 92%', once: true } });
    if (!small) gsap.fromTo(img, { yPercent: -4 }, { yPercent: 4, ease: 'none', scrollTrigger: { trigger: f, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  // home hero: the photo eases back and the copy lifts away as you scroll past
  const hp = document.querySelector('.hero-photo');
  if (hp) {
    const tl = gsap.timeline({ scrollTrigger: { trigger: hp, start: 'top top', end: 'bottom top', scrub: true } });
    tl.to(hp.querySelector(':scope > img'), { yPercent: 14, scale: 1.08, ease: 'none' }, 0).to(hp.querySelector('.hp-in'), { yPercent: -18, opacity: 0.2, ease: 'none' }, 0);
  }

  // dark steps band: the big numerals slide in at their own pace
  document.querySelectorAll('.st-n').forEach(n => gsap.fromTo(n, { xPercent: -12 }, { xPercent: 0, ease: 'none', scrollTrigger: { trigger: n, start: 'top bottom', end: 'top 50%', scrub: true } }));

  // booking band: the photo rises a little slower than the page
  document.querySelectorAll('.sec-cta').forEach(c => gsap.fromTo(c.querySelector('.cta-in'), { y: 60 }, { y: 0, ease: 'none', scrollTrigger: { trigger: c, start: 'top bottom', end: 'top 30%', scrub: true } }));
} else document.querySelectorAll('[data-lines],[data-reveal]').forEach(el => el.classList.add('in'));

// FAQ: answers open and close with their real height
document.querySelectorAll('.faq-r details').forEach(d => {
  const s = d.querySelector('summary'), a = d.querySelector('.faq-a');
  s.addEventListener('click', e => {
    if (reduce) return; e.preventDefault();
    if (d.open) gsap.to(a, { height: 0, opacity: 0, duration: 0.5, ease: IO, onComplete: () => { d.open = false; gsap.set(a, { clearProps: 'all' }); ScrollTrigger.refresh(); } });
    else { d.open = true; gsap.fromTo(a, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.6, ease: IO, onComplete: () => ScrollTrigger.refresh() }); }
    d.classList.toggle('closing', d.open);
  });
});

// reviews: arrows glide one card; on desktop the strip can also be dragged
document.querySelectorAll('.rv-b').forEach(b => b.addEventListener('click', () => {
  const t = b.closest('section').querySelector('.rv-track'); const card = t.querySelector('.rv');
  t.scrollBy({ left: (+b.dataset.dir) * (card ? card.getBoundingClientRect().width + 16 : 400), behavior: 'smooth' });
}));
if (!touch) document.querySelectorAll('.rv-track').forEach(t => {
  let down = false, x0 = 0, s0 = 0, v = 0, lx = 0, raf;
  t.addEventListener('pointerdown', e => { down = true; x0 = lx = e.clientX; s0 = t.scrollLeft; v = 0; t.classList.add('drag'); cancelAnimationFrame(raf); });
  addEventListener('pointermove', e => { if (!down) return; t.scrollLeft = s0 - (e.clientX - x0); v = e.clientX - lx; lx = e.clientX; });
  addEventListener('pointerup', () => { if (!down) return; down = false; t.classList.remove('drag'); const glide = () => { v *= 0.94; t.scrollLeft -= v; if (Math.abs(v) > 0.4) raf = requestAnimationFrame(glide); }; glide(); });
});

// videos: load the player only on click
document.querySelectorAll('.vid[data-yt]').forEach(v => v.addEventListener('click', () => {
  v.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${v.dataset.yt}?autoplay=1" title="Client video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
}, { once: true }));

// article contents: mark the heading in view
const toc = [...document.querySelectorAll('.toc a')];
if (toc.length) {
  const hs = toc.map(a => document.getElementById(decodeURIComponent(a.hash.slice(1)))).filter(Boolean);
  const mark = () => { let cur = hs[0]; for (const h of hs) if (h.getBoundingClientRect().top < 160) cur = h; toc.forEach(a => a.classList.toggle('on', a.hash === '#' + cur?.id)); };
  addEventListener('scroll', mark, { passive: true }); mark();
}

// anchor links glide under the fixed nav
document.querySelectorAll('a[href*="#"]').forEach(a => a.addEventListener('click', e => {
  const u = new URL(a.href); if (u.pathname !== location.pathname) return;
  const el = document.getElementById(u.hash.slice(1)); if (!el) return;
  e.preventDefault(); lenis ? lenis.scrollTo(el, { offset: -90, duration: 1.4 }) : el.scrollIntoView({ behavior: 'smooth' }); history.replaceState(null, '', u.hash);
}));
addEventListener('load', () => ScrollTrigger.refresh());
