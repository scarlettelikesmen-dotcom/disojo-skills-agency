import { FPS } from '../data/content.js';
const p2 = (n) => String(Math.floor(n)).padStart(2, '0');
// seconds -> HH:MM:SS:FF
export function timecode(sec, fps = FPS) {
  const s = Math.max(0, sec);
  const whole = Math.floor(s);
  const f = Math.floor((s - whole) * fps);
  return `${p2(whole / 3600)}:${p2((whole / 60) % 60)}:${p2(whole % 60)}:${p2(f)}`;
}
