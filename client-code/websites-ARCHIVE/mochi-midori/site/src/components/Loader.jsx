import { useEffect, useState } from 'react';
import { useLoad } from '../lib/loadStore';
import { brand } from '../brand.config';
import './Loader.css';

const FAILSAFE_MS = 25000;
let finished = false;

// Deep-green screen with the leaf mark filling like ink, then a circle opens onto the page.
export default function Loader() {
  const { progress, ready } = useLoad();
  const [gone, setGone] = useState(finished);
  const [out, setOut] = useState(false);
  useEffect(() => { if (gone) return undefined; const t = setTimeout(() => setOut(true), FAILSAFE_MS); return () => clearTimeout(t); }, [gone]);
  useEffect(() => { if (ready) setOut(true); }, [ready]);
  useEffect(() => { if (!out) return undefined; const t = setTimeout(() => { finished = true; setGone(true); }, 1100); return () => clearTimeout(t); }, [out]);
  if (gone) return null;
  const pct = Math.round((out ? 1 : progress) * 100);
  return (
    <div className={`loader${out ? ' is-out' : ''}`} role="status" aria-label="Loading">
      <div className="loader-mark" style={{ '--fill': `${pct}%` }}><img src="/images/mark.png" alt="" width="120" height="120" /></div>
      <p className="loader-name display">{brand.name}</p>
      <p className="loader-pct label">{pct}</p>
    </div>
  );
}
