import { useEffect, useRef, useState } from 'react';
import { ClosedCaptioning, Lightning, Scissors } from '@phosphor-icons/react';
import { useInView, useOnScreen, useReduced } from '../lib/motion.js';
import './Craft.css';

// Three working demos of what happens to raw footage. They run on a sample line and are labelled as illustrative.
const TABS = [
  { id: 'captions', label: 'Captions', line: 'Subtitles that follow the voice.', Icon: ClosedCaptioning },
  { id: 'hooks', label: 'Hooks', line: 'The point goes in the first line.', Icon: Lightning },
  { id: 'pacing', label: 'Pacing', line: 'A new shot when the last one is done.', Icon: Scissors },
];

const SAMPLE = 'Most people do not need more posting. They need a system.'.split(' ');
const CHUNKS = [[0, 4], [4, 7], [7, 11]];
const STYLES = [['plain', 'Plain'], ['hl', 'Highlight'], ['pop', 'Pop']];

function Captions() {
  const [style, setStyle] = useState('hl');
  const [i, setI] = useState(0);
  const [ref, on] = useOnScreen();
  const reduced = useReduced();
  useEffect(() => {
    if (!on || reduced) return undefined;
    const id = setInterval(() => setI((n) => (n + 1) % (SAMPLE.length + 2)), 430);
    return () => clearInterval(id);
  }, [on, reduced]);
  const idx = reduced ? 1 : Math.min(i, SAMPLE.length - 1);
  const chunk = CHUNKS.find(([a, b]) => idx >= a && idx < b) || CHUNKS[0];
  return (
    <div className="demo cap-demo" ref={ref}>
      <div className="phone bezel">
        <div className="core">
          <div className={`pframe cs-${style}`}>
            <div className="scene" />
            <div className="line" key={chunk[0]}>
              {SAMPLE.slice(chunk[0], chunk[1]).map((w, j) => {
                const gi = chunk[0] + j;
                return <span key={gi} className={gi === idx ? 'now' : gi < idx ? 'past' : 'next'}>{w}</span>;
              })}
            </div>
            <div className="pprog"><i style={{ transform: `scaleX(${(idx + 1) / SAMPLE.length})` }} /></div>
          </div>
        </div>
      </div>
      <div className="side">
        <p className="lead">Same sentence, three caption treatments. We pick the one that fits your brand and apply it to every video.</p>
        <div className="seg" role="radiogroup" aria-label="Caption style">
          {STYLES.map(([k, l]) => (
            <button key={k} role="radio" aria-checked={style === k} className={style === k ? 'on' : ''} onClick={() => setStyle(k)}>{l}</button>
          ))}
        </div>
        <p className="fine mono">Sample line. Not client footage.</p>
      </div>
    </div>
  );
}

const BEFORE = "Hey everyone, so today I wanted to talk about something I've been thinking about for a while, and that is content.";
const AFTER = 'Your content is not the problem. Your first line is.';

function Hooks() {
  const [after, setAfter] = useState(false);
  return (
    <div className="demo hook-demo">
      <div className="hook-stage">
        <div className="strip mono" aria-hidden="true"><span>0:00</span><span>0:01</span><span>0:02</span><span>0:03</span></div>
        <div className="hook-card" key={String(after)} data-after={after}>
          <p className="state mono">{after ? 'Rewritten hook' : 'Raw opener'}</p>
          <p className="text">{after ? AFTER : BEFORE}</p>
          <p className="why">{after ? 'The point comes first. Context follows.' : 'Warm-up first, point later.'}</p>
        </div>
      </div>
      <div className="side">
        <p className="lead">We find the strongest sentence in your footage and open with it. Flip the switch to see the same idea both ways.</p>
        <div className="seg" role="radiogroup" aria-label="Opener version">
          <button role="radio" aria-checked={!after} className={!after ? 'on' : ''} onClick={() => setAfter(false)}>Before</button>
          <button role="radio" aria-checked={after} className={after ? 'on' : ''} onClick={() => setAfter(true)}>After</button>
        </div>
        <p className="fine mono">Sample lines. Not client work.</p>
      </div>
    </div>
  );
}

// Fixed shape so the bars do not jump around while the slider moves.
const SHAPE = [1.1, 0.8, 1.35, 0.9, 1.2, 0.7, 1.05, 1.3, 0.85, 1.0];
function shots(n) {
  const w = SHAPE.slice(0, n);
  const sum = w.reduce((a, b) => a + b, 0);
  return w.map((x) => x / sum);
}

function Pacing() {
  const [n, setN] = useState(4);
  const [cur, setCur] = useState(0);
  const [ref, on] = useOnScreen();
  const reduced = useReduced();
  const parts = shots(n);
  const barRef = useRef(null);
  useEffect(() => {
    if (!on || reduced) return undefined;
    let raf; let last = -1; const t0 = performance.now(); const D = 7000;
    const tick = (t) => {
      const p = ((t - t0) % D) / D;
      if (barRef.current) barRef.current.style.setProperty('--p', p.toFixed(4));
      let acc = 0; let k = 0;
      for (; k < parts.length; k++) { acc += parts[k]; if (p <= acc) break; }
      if (k !== last) { last = k; setCur(Math.min(k, parts.length - 1)); }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [on, reduced, n]); // eslint-disable-line react-hooks/exhaustive-deps
  const avg = 10 / n;
  const feel = n <= 2 ? 'Slow and steady' : n <= 5 ? 'Conversational' : n <= 8 ? 'Fast' : 'Rapid-fire';
  return (
    <div className="demo pace-demo" ref={ref}>
      <div className="pace-stage">
        <div className="pace-bar" ref={barRef} aria-hidden="true">
          {parts.map((w, i) => <i key={`${n}-${i}`} className={`seg-${i % 3}${i === cur ? ' lit' : ''}`} style={{ flexGrow: w * 100 }} />)}
          <b className="ph" />
        </div>
        <div className="pace-read">
          <p className="mono big num">{n} {n === 1 ? 'shot' : 'shots'} in 10 s</p>
          <p className="mono num">average shot {avg.toFixed(1)} s</p>
          <p className="feel">{feel}</p>
        </div>
      </div>
      <div className="side">
        <p className="lead">Cuts set the rhythm. We trim the dead air and match the pace to the platform and your audience.</p>
        <label className="range" htmlFor="shots">
          <span>Shots in 10 seconds</span>
          <input id="shots" type="range" min="1" max="10" step="1" value={n} onChange={(e) => setN(+e.target.value)} aria-valuetext={`${n} shots, average ${avg.toFixed(1)} seconds`} />
        </label>
        <p className="fine mono">Illustration of editing rhythm only.</p>
      </div>
    </div>
  );
}

export default function Craft() {
  const [tab, setTab] = useState(0);
  const [ref, seen] = useInView();
  const onKey = (e) => {
    const k = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (!k) return;
    e.preventDefault();
    const n = (tab + k + TABS.length) % TABS.length;
    setTab(n);
    document.getElementById(`tab-${TABS[n].id}`)?.focus();
  };
  return (
    <section className="sec craft" id="edit" ref={ref}>
      <div className="wrap">
        <div className={`head rv${seen ? ' in' : ''}`}>
          <p className="tag mono"><i />Illustrative demos</p>
          <h2 style={{ marginTop: 22 }}>See what changes in the edit.</h2>
          <p>Captions, hooks and pacing are where raw footage turns into content. Try each one on a sample line.</p>
        </div>
        <div className={`bezel panel rv${seen ? ' in' : ''}`} style={{ '--d': 150 }}>
          <div className="core">
            <div className="tabs" role="tablist" aria-label="Edit demos" aria-orientation="vertical" onKeyDown={onKey}>
              {TABS.map((t, i) => (
                <button key={t.id} id={`tab-${t.id}`} role="tab" aria-selected={tab === i} aria-controls={`pane-${t.id}`} tabIndex={tab === i ? 0 : -1} className={tab === i ? 'on' : ''} onClick={() => setTab(i)}>
                  <span className="ic"><t.Icon size={22} weight="light" /></span>
                  <span className="tt"><b>{t.label}</b><small>{t.line}</small></span>
                </button>
              ))}
            </div>
            <div className="pane" role="tabpanel" id={`pane-${TABS[tab].id}`} aria-labelledby={`tab-${TABS[tab].id}`} key={tab}>
              {tab === 0 && <Captions />}
              {tab === 1 && <Hooks />}
              {tab === 2 && <Pacing />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
