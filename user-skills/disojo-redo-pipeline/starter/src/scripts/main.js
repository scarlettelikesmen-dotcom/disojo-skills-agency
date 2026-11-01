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
