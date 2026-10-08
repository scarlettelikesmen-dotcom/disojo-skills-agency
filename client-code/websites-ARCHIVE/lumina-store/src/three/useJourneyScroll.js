import { useEffect } from 'react';
import { journey, LAST, SCENT_COUNT } from './journey';

// Maps the journey wrapper's scroll position to journey.target (0..LAST),
// one unit per panel. Also reports whether the wrapper is on screen.
export default function useJourneyScroll(ref, onVisible) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const read = () => {
      // wrapper = 1 viewport (pinned stage) + one scroll segment per scent gap
      const seg = (el.offsetHeight - window.innerHeight) / (SCENT_COUNT - 1) || window.innerHeight;
      journey.target = Math.min(LAST, Math.max(0, -el.getBoundingClientRect().top / seg));
    };
    read();
    journey.p = journey.target;
    window.addEventListener('scroll', read, { passive: true });
    window.addEventListener('resize', read);
    const io = new IntersectionObserver(([e]) => onVisible?.(e.isIntersecting), { rootMargin: '100px' });
    io.observe(el);
    return () => {
      window.removeEventListener('scroll', read);
      window.removeEventListener('resize', read);
      io.disconnect();
    };
  }, [ref, onVisible]);
}
