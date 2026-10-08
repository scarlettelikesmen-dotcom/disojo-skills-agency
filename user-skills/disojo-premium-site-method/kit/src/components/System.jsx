import { useRef, useState } from 'react';
import { STAGES } from '../data/content.js';
import { timecode } from '../lib/time.js';
import useScrollProgress from '../lib/useScrollProgress.js';
import { useReduced } from '../lib/motion.js';
import './System.css';

// Pinned section. Scroll moves a playhead across the active track; clips light as it passes. When the stage changes
// the playhead jumps back to the start (a jump cut) and the next track takes over.
export default function System() {
  const root = useRef(null);
  const tc = useRef(null);
  const reduced = useReduced();
  const [st, setSt] = useState({ stage: 0, k: 0 });

  useScrollProgress(root, (p) => {
    const n = STAGES.length;
    const stage = Math.min(n - 1, Math.floor(p * n));
    const q = Math.min(1, Math.max(0, p * n - stage));
    root.current.style.setProperty('--q', q.toFixed(4));
    if (tc.current) tc.current.textContent = timecode(q * 18);
    const count = STAGES[stage].clips.length;
    const k = Math.min(count, Math.floor(q * count * 1.12 + 0.18));
    setSt((s) => (s.stage === stage && s.k === k ? s : { stage, k }));
  }, [reduced]);

  const state = (s, j) => {
    if (reduced) return 'in';
    if (st.stage > s) return 'in done';
    if (st.stage < s) return 'wait';
    return j < st.k ? 'in' : 'wait';
  };
  const cur = reduced ? -1 : st.stage;

  return (
    <section className={`system${reduced ? ' is-static' : ''}`} id="system" ref={root} aria-label="How the system works">
      <div className="pin">
        <div className="wrap sys-grid">
          <div className="sys-copy">
            <h2>One system, three tracks.</h2>
            <div className="steps">
              {STAGES.map((s, i) => (
                <article key={s.key} className={`step${cur === i ? ' on' : ''}`} aria-hidden={!reduced && cur !== i}>
                  <p className="mono no"><span>{s.no}</span> {s.tag}</p>
                  <h3>{s.title}</h3>
                  <p className="body">{s.body}</p>
                </article>
              ))}
            </div>
            <ol className="dots" aria-hidden="true">
              {STAGES.map((s, i) => <li key={s.key} className={cur === i ? 'on' : i < cur ? 'done' : ''}>{s.name}</li>)}
            </ol>
          </div>

          <div className="board bezel" aria-hidden="true">
            <div className="core">
              <div className="b-head mono"><span ref={tc}>00:00:00:00</span><span className="dim">{reduced ? 'Plan, edit, post' : STAGES[cur].name}</span></div>
              <div className="b-body">
                {STAGES.map((s, i) => (
                  <div className={`t-row${cur === i ? ' active' : ''}`} key={s.key}>
                    <span className="mono t-lab">{s.name}</span>
                    <div className="t-lane">
                      {s.clips.map((c, j) => (
                        <i key={c} className={`sc ${state(i, j)}`} style={{ '--l': `${(j / s.clips.length) * 100}%`, '--w': `${100 / s.clips.length - 1.6}%` }}>{c}</i>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="ph-wrap"><b className="ph" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
