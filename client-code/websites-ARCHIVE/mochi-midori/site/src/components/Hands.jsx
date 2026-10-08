import { useEffect, useRef } from 'react';
import { brand } from '../brand.config';
import './Hands.css';

// Photos drift at different speeds as you scroll past (plain transforms, only while the section is on screen).
export default function Hands() {
  const root = useRef(null);
  useEffect(() => {
    const el = root.current;
    if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const figs = [...el.querySelectorAll('[data-speed]')];
    let raf = 0; let on = false;
    const run = () => {
      raf = 0;
      figs.forEach((f) => {
        const r = f.parentElement.getBoundingClientRect();
        const d = r.top + r.height / 2 - innerHeight / 2;
        f.style.transform = `translate3d(0, ${(d * -Number(f.dataset.speed)).toFixed(1)}px, 0)`;
      });
    };
    const kick = () => { if (on && !raf) raf = requestAnimationFrame(run); };
    const io = new IntersectionObserver(([e]) => { on = e.isIntersecting; kick(); }, { rootMargin: '200px' });
    io.observe(el); addEventListener('scroll', kick, { passive: true }); addEventListener('resize', kick);
    return () => { io.disconnect(); cancelAnimationFrame(raf); removeEventListener('scroll', kick); removeEventListener('resize', kick); };
  }, []);
  return (
    <section ref={root} data-nav="dark" className="hands gutter" aria-label={brand.hands.title}>
      <h2 className="hands-title display"><span aria-hidden="true">手</span> {brand.hands.title}</h2>
      <div className="hands-grid">
        {brand.hands.items.map((it, i) => (
          <div key={it.img} className={`hands-cell hands-cell--${i + 1}`}>
            <figure data-speed={it.speed}>
              <img src={it.img} alt={it.alt} loading="lazy" width="2000" height="1013" />
              <figcaption className="label">{it.label}</figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}
