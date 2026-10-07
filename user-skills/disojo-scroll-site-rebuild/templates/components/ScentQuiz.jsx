import { useEffect, useRef, useState } from 'react';
import { products } from '../data/products';
import { QUESTIONS, scoreQuiz } from '../data/quiz';
import { useCart } from '../context/CartContext';
import QuizQuestion from './QuizQuestion';
import QuizBlend from './QuizBlend';
import QuizResult from './QuizResult';
import './ScentQuiz.css';
import './QuizReveal.css';

const byId = (id) => products.find((p) => p.id === id);
const CURTAIN = '#141412';
const LEAVE_MS = 560;

// ask -> leave (chosen row holds, rest slip away) -> ask ... -> blend (suspense) -> reveal
export default function ScentQuiz() {
  const [phase, setPhase] = useState('ask');
  const [answers, setAnswers] = useState([]);
  const [picked, setPicked] = useState(null);
  const [rank, setRank] = useState(null); // { best, second }
  const [shownId, setShownId] = useState(null);
  const [from, setFrom] = useState(CURTAIN); // colour under the reveal wipe
  const headingRef = useRef(null);
  const timer = useRef(0);
  const { dispatch, setIsOpen } = useCart();
  const step = answers.length;

  useEffect(() => () => clearTimeout(timer.current), []);
  // follow focus into each new question / the result (without scrolling the page)
  useEffect(() => {
    if (step > 0 || phase === 'reveal') headingRef.current?.focus({ preventScroll: true });
  }, [step, phase, shownId]);

  const choose = (option, i) => {
    if (phase !== 'ask') return;
    setPicked(i);
    setPhase('leave');
    timer.current = setTimeout(() => {
      const next = [...answers, option];
      setAnswers(next);
      setPicked(null);
      if (next.length === QUESTIONS.length) {
        setRank(scoreQuiz(next));
        setPhase('blend');
      } else {
        setPhase('ask');
      }
    }, LEAVE_MS);
  };
  const back = () => setAnswers(answers.slice(0, -1));
  const retake = () => { setAnswers([]); setRank(null); setShownId(null); setFrom(CURTAIN); setPhase('ask'); };
  const swap = () => {
    setFrom(byId(shownId).gradientFrom);
    setShownId(shownId === rank.best ? rank.second : rank.best);
  };

  // while asking, the background drifts toward whichever scent is currently leading
  const live = picked !== null ? [...answers, QUESTIONS[step].options[picked]] : answers;
  const lead = live.length ? byId(scoreQuiz(live).best) : null;
  const shown = shownId ? byId(shownId) : null;
  let style;
  if (phase === 'reveal' && shown) {
    style = { '--q-from': from, '--q-bg': shown.gradientFrom, '--q-ink': shown.textColor, '--q-accent': shown.gradientTo };
  } else if (lead && phase !== 'blend') {
    style = { '--q-bg': `color-mix(in srgb, var(--cream-alt) 50%, ${lead.gradientFrom})` };
  }

  return (
    <section className={`quiz ed-gutter is-${phase}`} style={style} aria-labelledby="quiz-title">
      {(phase === 'ask' || phase === 'leave') && (
        <QuizQuestion
          question={QUESTIONS[Math.min(step, QUESTIONS.length - 1)]}
          step={step}
          total={QUESTIONS.length}
          picked={picked}
          leaving={phase === 'leave'}
          onChoose={choose}
          onBack={back}
          headingRef={headingRef}
        />
      )}
      {phase === 'blend' && (
        <QuizBlend winnerId={rank.best} onDone={() => { setShownId(rank.best); setPhase('reveal'); }} />
      )}
      {phase === 'reveal' && shown && (
        <QuizResult
          key={shown.id}
          product={shown}
          runnerUp={byId(shown.id === rank.best ? rank.second : rank.best)}
          headingRef={headingRef}
          onAdd={() => { dispatch({ type: 'ADD_ITEM', item: shown }); setIsOpen(true); }}
          onSwap={swap}
          onRetake={retake}
        />
      )}
    </section>
  );
}
