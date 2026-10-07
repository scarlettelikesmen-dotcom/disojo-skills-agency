// One question on screen. The label, progress bar and back link stay mounted between
// questions; only the heading and the options remount, so the swap animates instead of
// jumping. `leaving` plays the exit (chosen row stays, the rest slip away) before the
// parent swaps in the next question.
export default function QuizQuestion({ question, step, total, picked, leaving, onChoose, onBack, headingRef }) {
  const filled = step + (leaving ? 1 : 0);
  return (
    <div className={`quiz-card${leaving ? ' is-leaving' : ''}`}>
      <div className="quiz-side">
        <p className="ed-label quiz-kicker">Find your scent</p>
        <h2
          id="quiz-title"
          ref={headingRef}
          tabIndex={-1}
          className="ed-title quiz-heading"
          aria-label={question.prompt}
          key={`h-${step}`}
        >
          {question.prompt.split(' ').map((w, i) => (
            <span className="qw" key={i} aria-hidden="true"><span style={{ '--i': i }}>{w}&nbsp;</span></span>
          ))}
        </h2>

        <div className="quiz-progress">
          <div className="quiz-bar" aria-hidden="true">
            {Array.from({ length: total }, (_, k) => (
              <i key={k} style={{ transform: `scaleX(${k < filled ? 1 : 0})` }} />
            ))}
          </div>
          <p className="ed-label quiz-count" aria-live="polite">
            Question {step + 1} of {total}
            {step > 0 && !leaving && <button type="button" className="quiz-inline" onClick={onBack}>Back</button>}
          </p>
        </div>
      </div>

      <ul className="quiz-options" key={`o-${step}`}>
        {question.options.map((o, i) => (
          <li key={o.label} style={{ '--i': i }} className={picked === i ? 'is-picked' : ''}>
            <button type="button" className="quiz-option" onClick={() => onChoose(o, i)} disabled={leaving}>
              <span className="ed-label quiz-num">0{i + 1}</span>
              <span className="quiz-option-text">{o.label}</span>
              <span className="quiz-arrow" aria-hidden="true">→</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
