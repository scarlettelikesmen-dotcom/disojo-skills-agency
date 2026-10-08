import { useRef, useCallback } from 'react';

/**
 * Magnetic 3D tilt + light sheen effect for product cards.
 * Cards tilt towards the cursor in perspective — feels premium, not gimmicky.
 */
export default function useMagneticTilt(intensity = 10) {
  const ref = useRef(null);

  const onMouseMove = useCallback(e => {
    const card = ref.current;
    if (!card) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Normalise to -1 ... 1
    const nx = x / (rect.width / 2);
    const ny = y / (rect.height / 2);

    const rotX = -ny * intensity;
    const rotY = nx * intensity;

    card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(6px)`;
    card.style.transition = 'transform 0.1s ease';
    card.style.boxShadow = `
      ${-nx * 12}px ${-ny * 12}px 40px rgba(26, 21, 16, 0.14),
      0 8px 24px rgba(26, 21, 16, 0.08)
    `;

    // Move the sheen highlight
    const sheen = card.querySelector('.card-sheen');
    if (sheen) {
      const px = ((nx + 1) / 2) * 100;
      const py = ((ny + 1) / 2) * 100;
      sheen.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.13) 0%, transparent 60%)`;
      sheen.style.opacity = '1';
    }
  }, [intensity]);

  const onMouseLeave = useCallback(() => {
    const card = ref.current;
    if (!card) return;
    card.style.transform = '';
    card.style.transition = 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)';
    card.style.boxShadow = '';

    const sheen = card.querySelector('.card-sheen');
    if (sheen) { sheen.style.opacity = '0'; }
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
