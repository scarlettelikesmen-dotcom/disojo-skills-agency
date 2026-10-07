import { useEffect, useRef } from 'react';
import Lines from './Lines';
import { brand } from '../brand.config';
import './TestimonialsSection.css';

const testimonials = brand.testimonials.items;

// Quotes as type. The section pins to the viewport and vertical scroll slides the row sideways;
// once the last quote is in view the pin releases and the page carries on.
export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const rowRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const row = rowRef.current;
    if (!section || !row) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let maxShift = 0;
    let raf = 0;

    const update = () => {
      raf = 0;
      if (reduce.matches) return;
      const travel = section.offsetHeight - window.innerHeight;
      const p = travel > 0 ? Math.min(1, Math.max(0, -section.getBoundingClientRect().top / travel)) : 0;
      row.style.transform = `translate3d(${-p * maxShift}px, 0, 0)`;
    };
    const queue = () => { if (!raf) raf = requestAnimationFrame(update); };

    const measure = () => {
      if (reduce.matches) {
        section.style.height = '';
        row.style.transform = '';
        return;
      }
      // + right padding so the last quote stops one gutter in from the edge
      maxShift = Math.max(0, row.scrollWidth - row.clientWidth + parseFloat(getComputedStyle(row).paddingRight));
      // scroll distance spent pinned = how far the row has to travel
      section.style.height = `${window.innerHeight + maxShift}px`;
      queue();
    };

    measure();
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', measure);
    reduce.addEventListener('change', measure);
    document.fonts?.ready.then(measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', queue);
      window.removeEventListener('resize', measure);
      reduce.removeEventListener('change', measure);
    };
  }, []);

  return (
    <section ref={sectionRef} className="voices" aria-labelledby="voices-title">
      <div className="voices-stage">
        <header className="voices-head ed-gutter">
          <h2 id="voices-title" className="ed-title"><Lines text={brand.testimonials.title} /></h2>
        </header>

        <ul ref={rowRef} className="voices-row ed-gutter">
          {testimonials.map((t) => (
            <li key={t.name} className="voice">
              <blockquote>
                <p className="voice-quote">“{t.quote}”</p>
                <footer className="ed-label voice-by">{t.name} · {t.city}</footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
