// Plumbing behaviours: smooth scroll, nav hide/solid, phone menu, reveals. Direction-specific motion lives in its own file.
import Lenis from 'lenis';
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const lenis = reduce ? null : new Lenis({ duration: 0.9, smoothWheel: true });
if (lenis) { const raf = t => { lenis.raf(t); requestAnimationFrame(raf); }; requestAnimationFrame(raf); }

const nav = document.getElementById('nav'); let last = 0;
const onScroll = () => { const y = scrollY; nav.classList.toggle('solid', y > 40); nav.classList.toggle('hide', y > 300 && y > last && !document.body.classList.contains('pm-open')); last = y; };
addEventListener('scroll', onScroll, { passive: true }); onScroll();

const mb = document.getElementById('menuB'), pm = document.getElementById('pm');
const setMenu = open => { pm.hidden = !open; mb.setAttribute('aria-expanded', open); mb.textContent = open ? 'Close' : 'Menu'; document.body.classList.toggle('pm-open', open); open ? lenis?.stop() : lenis?.start(); };
mb?.addEventListener('click', () => setMenu(pm.hidden));
addEventListener('keydown', e => { if (e.key === 'Escape' && !pm.hidden) { setMenu(false); mb.focus(); } });
pm?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));

const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -12% 0px' });
document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));

// In-frame parallax: a .pic.par image drifts up to 6% of its frame while the frame crosses the screen. Off under reduced motion.
const pars = reduce ? [] : [...document.querySelectorAll('.pic.par')];
if (pars.length) {
  const vis = new Set();
  const po = new IntersectionObserver(es => es.forEach(e => e.isIntersecting ? vis.add(e.target) : vis.delete(e.target)), { rootMargin: '10% 0px' });
  pars.forEach(p => po.observe(p));
  const tick = () => { for (const p of vis) { const r = p.getBoundingClientRect(); const t = (r.top + r.height / 2 - innerHeight / 2) / (innerHeight / 2 + r.height / 2); p.style.setProperty('--py', `${(-t * r.height * 0.06).toFixed(1)}px`); } requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
}
