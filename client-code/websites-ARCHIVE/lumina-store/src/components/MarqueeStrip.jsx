import { useEffect, useRef } from 'react';
import './MarqueeStrip.css';

const items = [
  'Alcohol-free perfume oil',
  'Precision roll-on',
  'No overspray',
  'Lasts 8–10 hours',
  'Travel friendly',
  'Inspired by India',
  '10 ml',
];

// Quiet product-facts ticker between the page and the footer.
export default function MarqueeStrip() {
  const trackRef = useRef(null);
  // only animate while the strip is on screen
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    const io = new IntersectionObserver(([e]) => {
      track.style.animationPlayState = e.isIntersecting ? 'running' : 'paused';
    });
    io.observe(track);
    return () => io.disconnect();
  }, []);

  const row = items.map((item) => <span key={item} className="ticker-item">{item}</span>);
  return (
    <div className="ticker" role="group" aria-label={items.join(', ')}>
      <div ref={trackRef} className="ticker-track" aria-hidden="true">
        <div className="ticker-set">{row}</div>
        <div className="ticker-set">{row}</div>
      </div>
    </div>
  );
}
