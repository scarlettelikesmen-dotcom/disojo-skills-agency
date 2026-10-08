import { CanvasTexture, SRGBColorSpace } from 'three';

const SIZE = 512;

function arcText(ctx, text, cx, cy, r, centerAngle, maxAngle, bottom) {
  const chars = [...text];
  let size = 44;
  let widths;
  let span;
  do {
    ctx.font = `600 ${size}px "Inter", system-ui, sans-serif`;
    widths = chars.map((c) => ctx.measureText(c).width + 6);
    span = widths.reduce((a, b) => a + b, 0) / r;
    size -= 2;
  } while (span > maxAngle && size > 14);
  let a = centerAngle - (bottom ? -span : span) / 2;
  chars.forEach((c, i) => {
    const step = widths[i] / r;
    const mid = a + (bottom ? -step : step) / 2;
    ctx.save();
    ctx.translate(cx + r * Math.sin(mid), cy - r * Math.cos(mid));
    ctx.rotate(bottom ? mid + Math.PI : mid);
    ctx.fillText(c, 0, 0);
    ctx.restore();
    a += bottom ? -step : step;
  });
}

// Round postmark: scent number in the middle, place on the top arc, brand underneath.
export function drawStamp(number, place, INK = '#8A3B24') {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = SIZE;
  const ctx = canvas.getContext('2d');
  const c = SIZE / 2;
  ctx.strokeStyle = INK;
  ctx.fillStyle = INK;
  ctx.globalAlpha = 0.88;
  ctx.lineWidth = 8;
  ctx.beginPath(); ctx.arc(c, c, 236, 0, Math.PI * 2); ctx.stroke();
  ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(c, c, 150, 0, Math.PI * 2); ctx.stroke();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  arcText(ctx, place.toUpperCase(), c, c, 190, 0, 3.3, false);
  arcText(ctx, 'POSTCARDS PERFUMES', c, c, 190, Math.PI, 2.4, true);
  ctx.font = '500 120px "Playfair Display", Georgia, serif';
  ctx.fillText(number, c, c + 6);
  const tex = new CanvasTexture(canvas);
  tex.colorSpace = SRGBColorSpace;
  return tex;
}
