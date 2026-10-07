import { Link } from 'react-router-dom';
import BottleArt from './BottleArt';
import { scrollToTop } from '../lib/smoothScroll';
import { brand } from '../brand.config';

const RING = brand.quiz.ringText;

// The grand reveal. Everything is staged with CSS delays off one clock: colour wipe,
// bottle rising and settling inside a turning postmark ring, a huge ghost name sliding in
// behind, the name building letter by letter, then the details and buttons.
export default function QuizResult({ product, runnerUp, headingRef, onAdd, onSwap, onRetake }) {
  return (
    <div className="quiz-result">
      <span className="qr-wipe" aria-hidden="true" />
      <p className="qr-ghost" aria-hidden="true">{product.name}</p>

      <div className="qr-stage" aria-hidden="true">
        <span className="qr-halo" />
        <svg className="qr-ring" viewBox="0 0 600 600">
          <defs><path id="qr-ring-path" d="M300,300 m-250,0 a250,250 0 1,1 500,0 a250,250 0 1,1 -500,0" /></defs>
          <text><textPath href="#qr-ring-path" textLength="1540" lengthAdjust="spacingAndGlyphs">{RING}</textPath></text>
        </svg>
        <div className="qr-rise"><div className="qr-float"><BottleArt product={product} /></div></div>
      </div>

      <div className="qr-copy">
        <p className="ed-label qr-line" style={{ '--d': 0 }}><span>{brand.quiz.resultLabel}</span></p>
        <h2 id="quiz-title" ref={headingRef} tabIndex={-1} className="ed-title qr-name" aria-label={product.name}>
          {[...product.name].map((c, i) => (
            <span className="qr-ch" key={i} aria-hidden="true" style={{ '--c': i }}>{c === ' ' ? ' ' : c}</span>
          ))}
        </h2>
        <p className="qr-tagline qr-line" style={{ '--d': 1 }}><span>{product.tagline}</span></p>

        <dl className="qr-facts">
          {(product.facts || []).map(({ label: k, value: v }, i) => (
            <div key={k} className="qr-fact" style={{ '--d': i }}>
              <dt className="ed-label">{k}</dt><dd>{v}</dd>
            </div>
          ))}
        </dl>

        <div className="qr-actions">
          <button type="button" className="pill-link" onClick={onAdd}>
            Add to cart · {product.currency}{product.price} <span className="pill-link-dot" aria-hidden="true" />
          </button>
          <Link to="/combos" className="text-link" onClick={() => scrollToTop({ immediate: true })}>
            Try all four in a box
          </Link>
        </div>

        <p className="qr-also">
          Close second: <button type="button" className="quiz-inline" onClick={onSwap}>{runnerUp.name}</button>
          <span aria-hidden="true"> · </span>
          <button type="button" className="quiz-inline" onClick={onRetake}>Retake the quiz</button>
        </p>
      </div>
    </div>
  );
}
