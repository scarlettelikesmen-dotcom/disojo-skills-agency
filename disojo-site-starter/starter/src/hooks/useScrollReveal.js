import { useEffect } from 'react';

/**
 * Observes all .reveal elements and adds .visible when they enter the viewport.
 * Uses stagger delay from --delay CSS custom property set on each element.
 */
export default function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // Just make everything visible immediately
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe all .reveal elements on mount + after small delay for dynamic content
    const observe = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
    };

    observe();
    const t = setTimeout(observe, 300); // pick up any late-rendered elements

    return () => {
      observer.disconnect();
      clearTimeout(t);
    };
  }, []);
}
