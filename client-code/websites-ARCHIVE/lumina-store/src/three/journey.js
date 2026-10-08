// Shared scroll state for the 3D journey. Written by the DOM scroll hook,
// read every frame by the scene (no React re-renders while scrolling).
export const journey = { target: 0, p: 0 };

export const SCENT_COUNT = 4;
export const LAST = SCENT_COUNT - 1;
const HALF = 0.2; // transition window half-width, in panels

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const smooth = (x) => x * x * (3 - 2 * x);

// p runs 0..3 (one unit per panel). Scent k dwells until k+0.5-HALF, then flips
// to k+1 over [k+0.5-HALF, k+0.5+HALF]. Returns scents before/after and flip 0..1.
export function stage(p, reduced = false) {
  const q = clamp(p, 0, LAST);
  const k = Math.min(LAST - 1, Math.floor(q));
  const lo = k + 0.5 - HALF;
  const hi = k + 0.5 + HALF;
  if (reduced) {
    const i = q < k + 0.5 ? k : k + 1;
    return { a: i, b: i, t: 0, dwell: i };
  }
  if (q < lo) return { a: k, b: k, t: 0, dwell: k };
  if (q > hi) return { a: k + 1, b: k + 1, t: 0, dwell: k + 1 };
  return { a: k, b: k + 1, t: smooth((q - lo) / (2 * HALF)), dwell: k };
}

// 0..1 for how far the stamp has landed on scent i (starts just after its flip ends).
export function stampProgress(p, i) {
  const start = i === 0 ? -0.12 : i - 0.5 + HALF - 0.2 + 0.12;
  return clamp((p - start) / 0.22, 0, 1);
}

export function isReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function detectWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

export function isLowEnd() {
  return window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches;
}

// Smooths the scroll target into journey.p. Lenis already eases the wheel, so this is light.
export function stepJourney(dt, reduced) {
  const k = reduced ? 1 : 1 - Math.exp(-dt * 10);
  journey.p += (journey.target - journey.p) * k;
  if (Math.abs(journey.target - journey.p) < 0.0002) journey.p = journey.target;
}

// How visible scent i's copy is at progress p: leaves over [i+0.3, i+0.5], arrives over
// [i-0.5, i-0.3], i.e. exactly while the bottle is turned away and the label is swapped.
export function copyWeight(p, i) {
  const ease = (x) => x * x * (3 - 2 * x);
  const c = (x) => Math.min(1, Math.max(0, x));
  return p <= i ? ease(c((p - (i - 0.5)) / 0.2)) : 1 - ease(c((p - (i + 0.3)) / 0.2));
}
