import { useEffect } from 'react';
import './CursorGlow.css';

export default function CursorGlow() {
  useEffect(() => {
    // Skip on mobile and reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 900) return;

    const glow = document.getElementById('cursor-glow');
    if (!glow) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let cx = mx, cy = my;
    let raf = 0;

    const onMove = e => { mx = e.clientX; my = e.clientY; if (!raf) raf = requestAnimationFrame(tick); };
    document.addEventListener('mousemove', onMove);

    function tick() {
      // Smooth lerp — feels organic, not snappy
      cx += (mx - cx) * 0.06;
      cy += (my - cy) * 0.06;
      glow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      // stop once the glow has caught up with the cursor; the next mouse move restarts it
      raf = Math.abs(mx - cx) + Math.abs(my - cy) > 0.5 ? requestAnimationFrame(tick) : 0;
    }

    raf = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div id="cursor-glow" aria-hidden="true" />;
}
