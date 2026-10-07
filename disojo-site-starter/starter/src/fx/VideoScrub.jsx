import { useEffect, useRef } from 'react';
import './fx.css';

// Pinned section that scrubs a <video> with the scroll (the on.energy-style product film). Children render as overlay copy.
//   <VideoScrub src="/film.mp4" poster="/film.jpg" height="300vh">...copy...</VideoScrub>
// ENCODE FOR SCRUBBING or it will stutter: every frame a keyframe, no audio, 24 fps, <= 1280 wide, <= 3 MB:
//   ffmpeg -i in.mp4 -an -vf scale=1280:-2,fps=24 -c:v libx264 -g 1 -crf 26 -pix_fmt yuv420p -movflags +faststart out.mp4
// Seeking is async: we ease toward the target and only seek when the difference matters. Falls back to the poster for reduced motion.
export default function VideoScrub({ src, poster, height = '300vh', children }) {
  const sec = useRef(null);
  const vid = useRef(null);
  useEffect(() => {
    const s = sec.current; const v = vid.current;
    if (!s || !v || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let target = 0; let cur = 0; let raf = 0; let on = false;
    const read = () => {
      const r = s.getBoundingClientRect();
      const total = r.height - innerHeight;
      target = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
    };
    const tick = () => {
      raf = 0;
      cur += (target - cur) * 0.14;
      if (Math.abs(target - cur) < 0.0005) cur = target;
      if (v.duration && Math.abs(v.currentTime - cur * v.duration) > 1 / 48) v.currentTime = cur * v.duration;
      if (on && cur !== target) raf = requestAnimationFrame(tick);
    };
    const kick = () => { read(); if (on && !raf) raf = requestAnimationFrame(tick); };
    const io = new IntersectionObserver(([e]) => { on = e.isIntersecting; if (on) kick(); }, { rootMargin: '200px' });
    io.observe(s);
    addEventListener('scroll', kick, { passive: true });
    addEventListener('resize', kick);
    v.addEventListener('loadedmetadata', kick);
    return () => { io.disconnect(); removeEventListener('scroll', kick); removeEventListener('resize', kick); v.removeEventListener('loadedmetadata', kick); cancelAnimationFrame(raf); };
  }, []);
  return (
    <section ref={sec} className="fx-scrub" style={{ height }}>
      <div className="fx-scrub-stage">
        <video ref={vid} src={src} poster={poster} muted playsInline preload="auto" aria-hidden="true" />
        <div className="fx-scrub-copy">{children}</div>
      </div>
    </section>
  );
}
