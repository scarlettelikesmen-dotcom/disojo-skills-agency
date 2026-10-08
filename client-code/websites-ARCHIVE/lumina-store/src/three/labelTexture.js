import { CanvasTexture, SRGBColorSpace } from 'three';

// Wraps the full bottle. 2048px = circumference (2*PI*0.515), so ~633 px per world unit;
// 1580px tall = the 2.5 unit label (it covers ~90% of the glass, as on the real bottle). Text runs bottom-to-top like the printed label.
export const LABEL_W = 2048;
export const LABEL_H = 1580;
const INK = '#1C1E21';
const SERIF = (s, w = 400) => `${w} ${s}px "Playfair Display", Georgia, serif`;

export async function loadLabelFonts() {
  if (!document.fonts) return;
  await Promise.allSettled([
    document.fonts.load('400 60px "Playfair Display"'),
    document.fonts.load('500 40px "Playfair Display"'),
  ]);
}

function paper(ctx, base) {
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, LABEL_W, LABEL_H);
  const rnd = (a, b) => a + Math.random() * (b - a);
  // soft mottling
  for (let i = 0; i < 26; i++) {
    const g = ctx.createRadialGradient(rnd(0, LABEL_W), rnd(0, LABEL_H), 0, rnd(0, LABEL_W), rnd(0, LABEL_H), rnd(120, 420));
    const light = Math.random() > 0.5;
    g.addColorStop(0, light ? 'rgba(255,255,255,0.10)' : 'rgba(40,60,60,0.07)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, LABEL_W, LABEL_H);
  }
  // crumpled-paper facets
  for (let i = 0; i < 70; i++) {
    ctx.fillStyle = `rgba(${Math.random() > 0.5 ? '255,255,255' : '30,50,50'},${rnd(0.008, 0.024)})`;
    ctx.beginPath();
    ctx.moveTo(rnd(0, LABEL_W), rnd(0, LABEL_H));
    ctx.lineTo(rnd(0, LABEL_W), rnd(0, LABEL_H));
    ctx.lineTo(rnd(0, LABEL_W), rnd(0, LABEL_H));
    ctx.fill();
  }
  // fibres
  ctx.lineWidth = 1;
  for (let i = 0; i < 2600; i++) {
    const x = rnd(0, LABEL_W);
    const y = rnd(0, LABEL_H);
    const a = rnd(0, Math.PI);
    const l = rnd(6, 26);
    ctx.strokeStyle = `rgba(${Math.random() > 0.5 ? '255,255,255' : '60,70,60'},${rnd(0.03, 0.09)})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l);
    ctx.stroke();
  }
}

// One vertical line of text (reads bottom-to-top) at `deg` around the bottle, centred on y.
function vText(ctx, text, deg, y, weight, size, tracking, maxLen) {
  const width = (z) => {
    ctx.font = SERIF(z, weight);
    return [...text].reduce((a, c) => a + ctx.measureText(c).width, 0) + tracking * (text.length - 1);
  };
  let z = size;
  while (maxLen && z > 12 && width(z) > maxLen) z -= 1;
  const total = width(z);
  ctx.save();
  ctx.translate(LABEL_W / 2 + (deg / 360) * LABEL_W, y);
  ctx.rotate(-Math.PI / 2);
  let x = -total / 2;
  for (const c of text) {
    ctx.fillText(c, x, 0);
    x += ctx.measureText(c).width + tracking;
  }
  ctx.restore();
}

export function drawLabel(scent, look, scale = 1) {
  const canvas = document.createElement('canvas');
  canvas.width = LABEL_W * scale;
  canvas.height = LABEL_H * scale;
  const ctx = canvas.getContext('2d');
  ctx.scale(scale, scale);
  paper(ctx, look.label);
  ctx.fillStyle = INK;
  ctx.textBaseline = 'middle';
  const cy = LABEL_H * 0.5;
  vText(ctx, 'POSTCARDS', -62, cy, 400, 150, 24, 1170);
  vText(ctx, '—  PERFUMES  —', -37, cy, 400, 60, 22, 760);
  vText(ctx, scent.name.toUpperCase(), -11, cy, 500, 100, 5, 830);
  vText(ctx, '•', 10, cy + 70, 400, 54, 0);
  vText(ctx, look.notes, 25, cy, 400, 32, 6, 440);
  vText(ctx, 'Perfume Oil', 44, cy, 400, 52, 2, 280);
  vText(ctx, '10 ml | 0.34 fl oz', 66, cy, 400, 24, 2, 190);

  const tex = new CanvasTexture(canvas);
  tex.colorSpace = SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}
