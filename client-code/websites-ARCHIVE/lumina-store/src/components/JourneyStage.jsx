import { useEffect, useRef } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { journey, stepJourney, copyWeight } from '../three/journey';
import './JourneyStage.css';

const BASE_TITLE = 'Postcards Perfumes';

// All four scents' copy stacked in one pinned stage. Each frame it reads the same
// journey.p the bottle uses, so the words swap exactly while the bottle is turned away.
export default function JourneyStage({ active, reduced }) {
  const { dispatch, setIsOpen } = useCart();
  const items = useRef([]);
  const hero = useRef(null);

  useEffect(() => {
    if (!active) return undefined;
    let raf;
    let last = performance.now();
    let title = '';
    const tick = (now) => {
      try {
        stepJourney(Math.min(0.05, (now - last) / 1000), reduced);
        last = now;
        // journey.p should always sit within [0, products.length - 1], but guard it:
        // a stray NaN/out-of-range value here must never be allowed to throw, because
        // that would kill this rAF loop permanently (every panel would freeze stacked
        // and fully visible instead of fading in/out one at a time).
        const last_i = products.length - 1;
        const raw = journey.p;
        const p = Number.isFinite(raw) ? Math.min(last_i, Math.max(0, raw)) : 0;
        products.forEach((_, i) => {
          const el = items.current[i];
          if (!el) return;
          const w = copyWeight(p, i);
          el.style.opacity = w;
          el.style.transform = `translateY(${(1 - w) * (p > i ? -26 : 26)}px)`;
          el.style.pointerEvents = w > 0.5 ? 'auto' : 'none';
          el.toggleAttribute('inert', w <= 0.5);
        });
        if (hero.current) hero.current.style.opacity = copyWeight(p, 0);
        const idx = Math.min(last_i, Math.max(0, Math.round(p)));
        const t = `${products[idx].name} | ${BASE_TITLE}`;
        if (t !== title) document.title = title = t;
      } catch (err) {
        // Never let a single bad frame end the animation loop.
        if (import.meta.env.DEV) console.error('JourneyStage tick error:', err);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.title = BASE_TITLE;
    };
  }, [active, reduced]);

  const add = (product) => {
    dispatch({ type: 'ADD_ITEM', item: product });
    setIsOpen(true);
  };

  return (
    <div className="stage-copy">
      <h1 ref={hero} className="stage-hero">Carry a place. Wear a memory.</h1>
      {products.map((p, i) => (
        <article key={p.id} ref={(n) => (items.current[i] = n)} className="stage-item" style={{ color: p.textColor }} aria-label={p.name}>
          <p className="scent-eyebrow">{p.number} · {p.inspiredBy}</p>
          <h2 className="scent-name">{p.name}</h2>
          <p className="scent-tagline">{p.tagline}</p>
          <p className="scent-notes">{p.notes}</p>
          <p className="scent-price">{p.currency}{p.price} · {p.size}</p>
          <div className="scent-actions">
            <button type="button" className="scent-btn" onClick={() => add(p)}>Add to cart</button>
            <a className="scent-link" href="#collection" style={{ color: p.textColor }}>See the collection</a>
          </div>
        </article>
      ))}
    </div>
  );
}
