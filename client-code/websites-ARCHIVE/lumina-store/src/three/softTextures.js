import { CanvasTexture } from 'three';

// White-centre radial falloff, used for the soft light behind the bottle.
export function radialTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.5, 'rgba(255,255,255,0.35)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 256);
  return new CanvasTexture(c);
}

// Blurred vertical capsule, built from stacked rounded rects (no ctx.filter, works everywhere).
export function shadowTexture() {
  const c = document.createElement('canvas');
  c.width = 128;
  c.height = 512;
  const ctx = c.getContext('2d');
  ctx.fillStyle = 'rgba(0,0,0,0.045)';
  for (let i = 0; i < 28; i++) {
    const inset = 8 + i * 2.2;
    ctx.beginPath();
    ctx.roundRect(inset, inset * 1.5, 128 - inset * 2, 512 - inset * 3, 40);
    ctx.fill();
  }
  return new CanvasTexture(c);
}
