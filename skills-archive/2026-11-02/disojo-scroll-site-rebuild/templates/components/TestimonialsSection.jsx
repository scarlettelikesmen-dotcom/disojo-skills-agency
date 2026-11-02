import { useEffect, useRef } from 'react';
import './TestimonialsSection.css';

const testimonials = [
  {
    quote: "It smells like actual memories. Himalayan Morning made me feel like I was on a trek I'd done 5 years ago. That's insane.",
    name: 'Ananya Mehta',
    city: 'Mumbai',
  },
  {
    quote: "I've tried a lot of roll-on perfume oils and most of them feel cheap. Postcards doesn't. Old Haveli is something else entirely.",
    name: 'Rohan Desai',
    city: 'Pune',
  },
  {
    quote: 'Malabar Coast has become my everyday scent. The packaging alone is worth it - this is a brand that actually has a point of view.',
    name: 'Priya Sundaram',
    city: 'Bengaluru',
  },
  {
    quote: "Bought the Discovery Set as a gift for my sister. She hasn't stopped talking about it. Every bottle tells a story.",
    name: 'Kabir Sharma',
    city: 'Delhi',
  },
  {
    quote: 'Rani Mahal smells like what I imagined Jaipur would smell like before I visited. Then I visited, and I was right.',
    name: 'Ishita Nair',
    city: 'Hyderabad',
  },
];

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
          <h2 id="voices-title" className="ed-title">People don’t forget<br />a postcard.</h2>
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
