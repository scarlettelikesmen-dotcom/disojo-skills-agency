import { useEffect, useState } from 'react';
import { HERO } from '../data/content.js';
import { timecode } from '../lib/time.js';
import { useOnScreen, useReduced } from '../lib/motion.js';

// A live, code-made editing preview. It is not client footage: it shows the three things the page is about
// (captions, cuts, a timeline) using the hero line itself. Looping stops off-screen and under reduced motion.
const STEP = 520; // ms per word
const WORDS = HERO.caption;
const CLIPS = [
  { track: 'V1', items: [[0, 22, 'a'], [22, 18, 'b'], [40, 15, 'a'], [55, 27, 'c'], [82, 18, 'b']] },
  { track: 'A1', items: [[0, 100, 'wave']] },
  { track: 'CAP', items: WORDS.map((w, i) => [i * (100 / WORDS.length), 100 / WORDS.length - 1.2, w]) },
];

export default function Stage({ go }) {
  const [ref, on] = useOnScreen();
  const reduced = useReduced();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!go || reduced || !on) return undefined;
    let n = 0;
    const id = setInterval(() => { n = (n + 1) % (WORDS.length + 2); setI(n); }, STEP);
    return () => clearInterval(id);
  }, [go, reduced, on]);

  const idx = reduced ? WORDS.length - 1 : Math.min(i, WORDS.length - 1);
  const pos = reduced ? 1 : Math.min(1, (i + 1) / (WORDS.length + 1));
  const chunk = idx < 3 ? [0, 3] : [3, WORDS.length];

  return (
    <div className={`stage rv${go ? ' in' : ''}`} style={{ '--d': 500 }} ref={ref}>
      <div className="timeline bezel" aria-hidden="true">
        <div className="core">
          <div className="tl-head">
            <span className="mono">{timecode(pos * (WORDS.length * STEP) / 1000)}</span>
            <span className="mono dim">Timeline</span>
          </div>
          <div className="tl-body" style={{ '--pos': pos }}>
            {CLIPS.map((t) => (
              <div className="trk" key={t.track}>
                <span className="mono lab">{t.track}</span>
                <div className="lane">
                  {t.items.map(([l, w, k], j) => (
                    <i key={j} className={`clip k-${t.track === 'CAP' ? 'cap' : k}${t.track === 'CAP' && j === idx ? ' hot' : ''}`} style={{ left: `${l}%`, width: `${w}%` }}>
                      {t.track === 'CAP' ? <em>{k}</em> : null}
                    </i>
                  ))}
                </div>
              </div>
            ))}
            <div className="playhead"><b /></div>
          </div>
        </div>
      </div>

      <div className="monitor bezel">
        <div className="core" role="img" aria-label="Illustrative editing preview: the headline appears as animated captions over a dark frame.">
          <div className="frame">
            <div className="scene" />
            <div className="meta mono"><span>9:16</span><span>CAPTIONS ON</span></div>
            <div className="caps" key={chunk[0]}>
              {WORDS.slice(chunk[0], chunk[1]).map((w, j) => {
                const gi = chunk[0] + j;
                return <span key={gi} className={gi < idx ? 'past' : gi === idx ? 'now' : 'next'}>{w}</span>;
              })}
            </div>
            <div className="wave">{Array.from({ length: 30 }, (_, b) => <i key={b} style={{ '--b': b }} />)}</div>
            <div className="prog"><i style={{ transform: `scaleX(${pos})` }} /></div>
          </div>
        </div>
      </div>
      <p className="note mono">Illustrative preview, built in code. Not client footage.</p>
    </div>
  );
}
