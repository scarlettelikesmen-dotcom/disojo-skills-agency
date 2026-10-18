import { spring } from "remotion";
export const INK = "#131311", CREAM = "#E6DDD6", PAPER = "#E8E8E3";
export const SANS = '"Host Grotesk", system-ui, sans-serif', MONO = '"JetBrains Mono", ui-monospace, monospace';
export const SP = {
  pop: { damping: 28, stiffness: 260, mass: 1 },
  soft: { damping: 22, stiffness: 180, mass: 1 },
  heavy: { damping: 26, stiffness: 120, mass: 1 },
};
// spring that starts at time t0 (seconds), 0 before, settles at 1 with a little overshoot
export const sp = (frame: number, fps: number, t0: number, cfg = SP.soft) =>
  spring({ frame: frame - Math.round(t0 * fps), fps, config: cfg });
export const clamp = (x: number, a = 0, b = 1) => Math.max(a, Math.min(b, x));
export const parseEm = (s: string): { t: string; em: boolean }[] =>
  s.split(/(\*[^*]+\*)/).filter(Boolean).map((p) => (p.startsWith("*") ? { t: p.slice(1, -1), em: true } : { t: p, em: false }));
