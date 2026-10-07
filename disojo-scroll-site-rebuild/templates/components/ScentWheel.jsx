import { useEffect, useRef, useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import BottleArt from './BottleArt';
import ProductModal from './ProductModal';
import './ScentWheel.css';

// Agrumea-style scent selector: bottles ride a large wheel whose hub sits below the
// screen. Scrolling through this (pinned) section turns the wheel; the bottle at the
// top of the arc is big and tilted, its neighbours shrink away down either side.
const SLOTS = [...products, ...products]; // 4 scents, twice round, so the arc never looks empty
const STEP = (Math.PI * 2) / SLOTS.length; // angle between neighbouring bottles
const RING_TEXT = 'CARRY A PLACE · WEAR A MEMORY · FOUR SCENTS, ONE JOURNEY · ';
// Perforation holes every 30 units along each edge of the 600x600 stamp.
const PERFS = Array.from({ length: 21 }, (_, k) => k * 30).flatMap((t) => [
  [t, 0], [t, 600], [0, t], [600, t],
]);

export default function ScentWheel() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const itemsRef = useRef([]);
  const ringRef = useRef(null);
  const state = useRef({ target: 0, current: 0 });
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(null);
  const { dispatch, setIsOpen } = useCart();

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let lastActive = -1;
    let w = stage.clientWidth;
    let h = stage.clientHeight;

    const read = () => {
      const r = section.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
      state.current.target = p * (SLOTS.length - 1);
      // only animate while the section is on (or near) the screen
      const near = r.bottom > -300 && r.top < window.innerHeight + 300;
      if (!near) {
        state.current.current = state.current.target;
        return;
      }
      if (reduced) state.current.current = state.current.target;
      kick();
    };

    const layout = () => {
      const s = state.current;
      s.current += (s.target - s.current) * 0.12;
      if (Math.abs(s.target - s.current) < 0.001) s.current = s.target;

      // Hub below the screen; radius tied to the smaller side so phones still get a
      // centre bottle with neighbours peeking in from the edges.
      const R = Math.min(h * 1.15, w * 0.62);
      const cx = w / 2;
      const cy = h * 0.45 + R;
      const turn = -s.current * STEP;

      itemsRef.current.forEach((el, i) => {
        if (!el) return;
        let a = i * STEP + turn;
        a = Math.atan2(Math.sin(a), Math.cos(a)); // wrap to [-π, π]
        const x = cx + R * Math.sin(a);
        const y = cy - R * Math.cos(a);
        const near = Math.max(0, Math.cos(a));
        const scale = 0.42 + 0.58 * near * near;
        const tilt = (a * 180) / Math.PI * 0.7 + 14;
        el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${tilt}deg) scale(${scale})`;
        el.style.opacity = Math.abs(a) > Math.PI * 0.6 ? '0' : '1';
        el.style.zIndex = String(Math.round(near * 100));
        el.tabIndex = Math.abs(a) < STEP / 2 ? 0 : -1;
      });

      if (ringRef.current) ringRef.current.style.transform = `rotate(${turn * 0.6}rad)`;

      const idx = ((Math.round(s.current) % SLOTS.length) + SLOTS.length) % SLOTS.length;
      if (idx !== lastActive) {
        lastActive = idx;
        setActive(idx);
      }
      // idle once the easing has settled; the next scroll wakes it up again
      raf = s.current !== s.target ? requestAnimationFrame(layout) : 0;
    };
    // layout() as a loop only while something is moving
    function kick() { if (!raf) raf = requestAnimationFrame(layout); }

    // stage size is measured on resize, not every frame
    const ro = new ResizeObserver(() => {
      w = stage.clientWidth;
      h = stage.clientHeight;
      read();
      kick();
    });
    ro.observe(stage);

    read();
    kick();
    window.addEventListener('scroll', read, { passive: true });
    window.addEventListener('resize', read);
    return () => {
      window.removeEventListener('scroll', read);
      window.removeEventListener('resize', read);
      ro.disconnect();
      cancelAnimationFrame(raf);
      raf = 0;
    };
  }, []);

  const scent = SLOTS[active];

  return (
    <section
      ref={sectionRef}
      className="scent-wheel"
      style={{ '--sw-bg': scent.gradientFrom, '--sw-accent': scent.gradientTo, '--sw-ink': scent.textColor }}
      aria-label="Choose a scent"
    >
      <div ref={stageRef} className="scent-wheel-stage">
        {/* postage-stamp plinth (perforated edge) with a postmark ring turning on it */}
        <div className="scent-wheel-plinth" aria-hidden="true">
          <svg className="scent-wheel-stamp" viewBox="0 0 600 600">
            <defs>
              <mask id="sw-perf">
                <rect width="600" height="600" fill="#fff" />
                {PERFS.map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="11" fill="#000" />)}
              </mask>
            </defs>
            <rect width="600" height="600" style={{ fill: 'var(--sw-accent)' }} mask="url(#sw-perf)" />
            <rect x="34" y="34" width="532" height="532" fill="none" stroke="currentColor" strokeOpacity="0.25" />
          </svg>
          <svg ref={ringRef} className="scent-wheel-ring" viewBox="0 0 600 600">
            <defs>
              <path id="sw-ring-path" d="M300,300 m-232,0 a232,232 0 1,1 464,0 a232,232 0 1,1 -464,0" />
            </defs>
            <text>
              <textPath href="#sw-ring-path" textLength="1450" lengthAdjust="spacingAndGlyphs">{RING_TEXT}</textPath>
            </text>
          </svg>
        </div>

        {SLOTS.map((p, i) => (
          <button
            key={`${p.id}-${i}`}
            ref={(n) => (itemsRef.current[i] = n)}
            type="button"
            className="scent-wheel-item"
            aria-label={`${p.name} — view details`}
            onClick={() => setOpen(p)}
          >
            <BottleArt product={p} />
          </button>
        ))}

        <div className="scent-wheel-caption" aria-live="polite">
          <h3 className="scent-wheel-name">{scent.name}</h3>
          <p className="scent-wheel-meta">{scent.mood} · {scent.currency}{scent.price}</p>
          <button type="button" className="scent-wheel-view" onClick={() => setOpen(scent)}>
            View scent <span aria-hidden="true">○</span>
          </button>
        </div>

        <p className="scent-wheel-hint" aria-hidden="true">Scroll to discover</p>
      </div>

      {open && (
        <ProductModal
          product={open}
          onClose={() => setOpen(null)}
          onAddToCart={() => {
            dispatch({ type: 'ADD_ITEM', item: open });
            setIsOpen(true);
          }}
        />
      )}
    </section>
  );
}
