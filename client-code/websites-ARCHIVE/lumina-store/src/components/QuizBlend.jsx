import { useEffect, useState } from 'react';
import { products } from '../data/products';

const IDS = [1, 2, 3, 4];
const STEPS = 13;

// The suspense beat between the last answer and the reveal: the four scents flick past
// on a dark curtain, slowing down until the winner is the one left standing.
export default function QuizBlend({ winnerId, onDone }) {
  const [i, setI] = useState(0);
  const w = IDS.indexOf(winnerId);
  const seq = Array.from({ length: STEPS }, (_, k) => IDS[(((w - (STEPS - 1 - k)) % 4) + 4) % 4]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onDone();
      return undefined;
    }
    let t;
    const next = (k) => {
      if (k >= STEPS - 1) { t = setTimeout(onDone, 850); return; }
      // 150ms at the start easing out to ~480ms on the last flick
      t = setTimeout(() => { setI(k + 1); next(k + 1); }, 150 + (k / (STEPS - 1)) ** 2 * 330);
    };
    next(0);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const p = products.find((x) => x.id === seq[i]);
  const settled = i === STEPS - 1;
  return (
    <div className="quiz-blend" role="status" aria-live="polite">
      <span className="quiz-blend-glow" style={{ '--glow': p.gradientTo }} aria-hidden="true" />
      <p className="ed-label quiz-blend-label">{settled ? 'Your scent' : 'Blending your scent'}</p>
      <p className={`quiz-blend-name${settled ? ' is-settled' : ''}`} key={i}>{p.name}</p>
      <span className="quiz-blend-line" aria-hidden="true" />
    </div>
  );
}
