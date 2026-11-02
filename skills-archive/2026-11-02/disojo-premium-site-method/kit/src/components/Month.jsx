import { MONTH } from '../data/content.js';
import { useInView } from '../lib/motion.js';
import './Month.css';

function Step({ s, i }) {
  const [ref, seen] = useInView();
  return (
    <li className={`step rv${seen ? ' in' : ''}`} ref={ref} style={{ '--d': 60 }}>
      <h3>{s.verb}</h3>
      <p>{s.body}</p>
    </li>
  );
}

// Three verbs, no diagram. The wording is the client's own.
export default function Month() {
  return (
    <section className="sec month" id="month">
      <div className="wrap month-grid">
        <h2 className="m-title">How a month runs.</h2>
        <ol className="steps">
          {MONTH.map((s, i) => <Step key={s.verb} s={s} i={i} />)}
        </ol>
      </div>
    </section>
  );
}
