import { useEffect, useState } from 'react';
import { useLoad } from '../three/loadStore';
import './Loader.css';

const FAILSAFE_MS = 12000;
let finished = false; // show the loader once per page load, not on every visit to /

export default function Loader() {
  const { progress, ready } = useLoad();
  const [gone, setGone] = useState(finished);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (gone) return undefined;
    const t = setTimeout(() => setFading(true), FAILSAFE_MS);
    return () => clearTimeout(t);
  }, [gone]);

  useEffect(() => {
    if (ready) setFading(true);
  }, [ready]);

  useEffect(() => {
    if (!fading) return undefined;
    const t = setTimeout(() => {
      finished = true;
      setGone(true);
    }, 600);
    return () => clearTimeout(t);
  }, [fading]);

  if (gone) return null;
  return (
    <div className={`loader${fading ? ' is-out' : ''}`} role="status" aria-label="Loading">
      <div className="loader-mark">POSTCARDS</div>
      <div className="loader-tag">Carry a place. Wear a memory.</div>
      <div className="loader-pct">{Math.round((fading ? 1 : progress) * 100)}%</div>
      <div className="loader-bar"><span style={{ transform: `scaleX(${fading ? 1 : progress})` }} /></div>
    </div>
  );
}
