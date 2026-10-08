import { useEffect, useRef, useState } from 'react';
import ProductStage from './product3d/ProductStage';

// DEMO ONLY (made-up brand "Demo Fizz", placeholder labels). Shows the three ways a page drives a ProductStage:
// shape switch, flavour (label) swap with a spin, and scroll-driven rotation + background colour per flavour.
const FLAVOURS = [{ id: 'mango', bg: '#F2A81D', ink: '#3B1E00', content: '#e8a21a' }, { id: 'berry', bg: '#7B2D8E', ink: '#FFE9FF', content: '#5b1f6b' }, { id: 'lime', bg: '#2E9B4B', ink: '#F3FFE0', content: '#7cc243' }];
const BOX = { right: '/labels/box-right.png', left: '/labels/box-left.png', top: '/labels/box-top.png', bottom: '/labels/box-bottom.png', front: '/labels/box-front.png', back: '/labels/box-back.png' };

export default function App() {
  const [shape, setShape] = useState('can');
  const [fi, setFi] = useState(0);
  const [rot, setRot] = useState(0.5);
  const [p, setP] = useState(0);
  const sec = useRef(null);
  const f = FLAVOURS[fi];
  const label = shape === 'box' ? BOX : `/labels/${shape}-${f.id}.png`;

  useEffect(() => {
    const on = () => { const r = sec.current.getBoundingClientRect(); const t = r.height - innerHeight; setP(t > 0 ? Math.min(1, Math.max(0, -r.top / t)) : 0); };
    on(); addEventListener('scroll', on, { passive: true }); return () => removeEventListener('scroll', on);
  }, []);
  const si = Math.min(FLAVOURS.length - 1, Math.floor(p * FLAVOURS.length)); const sf = FLAVOURS[si];

  return (
    <main>
      <section className="demo" style={{ background: f.bg, color: f.ink }}>
        <header><h1>Packaged product kit</h1><p>Demo brand, placeholder labels.</p></header>
        <div className="stage"><ProductStage shape={shape} label={label} rotation={rot} content={f.content} ariaLabel={`${shape}, ${f.id}`} /></div>
        <div className="controls">
          <div>{['can', 'jar', 'bottle', 'box'].map((s) => <button key={s} className={s === shape ? 'on' : ''} onClick={() => setShape(s)}>{s}</button>)}</div>
          <div>{FLAVOURS.map((x, i) => <button key={x.id} className={i === fi ? 'on' : ''} onClick={() => setFi(i)}>{x.id}</button>)}</div>
          <label>rotate <input type="range" min="0" max={Math.PI * 2} step="0.01" value={rot} onChange={(e) => setRot(+e.target.value)} /></label>
        </div>
      </section>
      <section ref={sec} className="scroll" style={{ background: sf.bg, color: sf.ink, height: '400vh' }}>
        <div className="sticky"><h2>Scroll: {sf.id}</h2>
          <ProductStage shape="can" label={`/labels/can-${sf.id}.png`} rotation={0.5 + p * Math.PI * 4} tilt={Math.sin(p * 6) * 0.12} content={sf.content} ariaLabel="scroll demo can" />
        </div>
      </section>
    </main>
  );
}
