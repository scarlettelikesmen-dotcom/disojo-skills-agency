import { useEffect } from 'react';
import { LAST } from './journey';

// Smooth wheel scrolling (Lenis) driven by the GSAP ticker, plus snapping so the page
// settles on a scent instead of stopping mid-flip. Off for reduced motion.
// Loaded after first paint so it stays out of the main bundle.
export default function useSmoothScroll(ref, enabled) {
  useEffect(() => {
    const el = ref.current;
    if (!enabled || !el) return undefined;
    let dead = false;
    let cleanup = () => {};
    Promise.all([import('lenis'), import('gsap'), import('gsap/ScrollTrigger')]).then(
      ([{ default: Lenis }, { gsap }, { ScrollTrigger }]) => {
        if (dead) return;
        gsap.registerPlugin(ScrollTrigger);
        const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
        lenis.on('scroll', ScrollTrigger.update);
        const tick = (t) => lenis.raf(t * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);
        const snap = ScrollTrigger.create({
          trigger: el,
          start: 'top top',
          end: 'bottom bottom',
          snap: { snapTo: 1 / LAST, duration: { min: 0.3, max: 0.8 }, delay: 0.12, ease: 'power2.inOut' },
        });
        cleanup = () => {
          snap.kill();
          gsap.ticker.remove(tick);
          lenis.destroy();
        };
      },
    );
    return () => {
      dead = true;
      cleanup();
    };
  }, [ref, enabled]);
}
