// Per-screen composition measure, run inside the page with page.evaluate(SCREEN).
// Shared by composition_probe.cjs and premium_gate.cjs so research and gate measure the same way.
const SCREEN = () => {
  const vw = innerWidth, vh = innerHeight;
  const vis = e => { const s = getComputedStyle(e); return s.visibility !== 'hidden' && s.display !== 'none' && +s.opacity > 0.05; };
  const isMedia = e => {
    if (!e || e.nodeType !== 1) return false;
    if (/^(IMG|VIDEO|CANVAS|PICTURE|IFRAME)$/.test(e.tagName)) return true;
    if (e.tagName === 'svg' || e.closest?.('svg')) return false;
    // overlays are not imagery: film grain, noise and texture layers (fixed full-screen, faint, blended or click-through)
    const cs = getComputedStyle(e), rr = e.getBoundingClientRect();
    if ((cs.position === 'fixed' && rr.width * rr.height >= innerWidth * innerHeight * 0.85) || +cs.opacity < 0.6 || cs.mixBlendMode !== 'normal' || (cs.pointerEvents === 'none' && rr.width * rr.height >= innerWidth * innerHeight * 0.85)) return false;
    const bi = getComputedStyle(e).backgroundImage; return bi && bi !== 'none' && /url\(/.test(bi) && e.getBoundingClientRect().width > 120;
  };
  // grid-sample the viewport: which points land on media
  const GX = 48, GY = 28; let mediaPts = 0;
  for (let i = 0; i < GX; i++) for (let j = 0; j < GY; j++) {
    const x = (i + .5) * vw / GX, y = (j + .5) * vh / GY;
    const st = document.elementsFromPoint(x, y).slice(0, 6);
    if (st.some(isMedia)) mediaPts++;
  }
  // media rects (for crops)
  const media = [];
  for (const e of document.querySelectorAll('img,video,canvas,iframe,[style*="background-image"],section,div,figure,a')) {
    if (!isMedia(e) || !vis(e)) continue; const r = e.getBoundingClientRect();
    const x0 = Math.max(0, r.left), y0 = Math.max(0, r.top), x1 = Math.min(vw, r.right), y1 = Math.min(vh, r.bottom);
    const a = (x1 - x0) * (y1 - y0); if (x1 <= x0 || y1 <= y0 || a < vw * vh * 0.03) continue;
    media.push({ x: Math.round(x0), y: Math.round(y0), w: Math.round(x1 - x0), h: Math.round(y1 - y0), share: +(a / (vw * vh)).toFixed(3), tag: e.tagName.toLowerCase() });
  }
  media.sort((a, b) => b.share - a.share);
  const dedup = []; for (const m of media) if (!dedup.some(d => Math.abs(d.x - m.x) < 8 && Math.abs(d.y - m.y) < 8 && Math.abs(d.w - m.w) < 16)) dedup.push(m);
  // text, boxes, buttons, sizes visible in this screen
  let words = 0; const sizes = new Set(); let boxes = 0, buttons = 0, maxFont = 0;
  const bodyBg = getComputedStyle(document.body).backgroundColor;
  for (const e of document.querySelectorAll('body *')) {
    const r = e.getBoundingClientRect(); if (r.bottom < 0 || r.top > vh || r.width < 2 || r.height < 2) continue;
    if (!vis(e)) continue; const s = getComputedStyle(e);
    const own = [...e.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join(' ').trim();
    if (own && r.top >= -4 && r.bottom <= vh + 4) { words += own.split(/\s+/).filter(Boolean).length; const fs = Math.round(parseFloat(s.fontSize)); sizes.add(fs); maxFont = Math.max(maxFont, fs); }
    const filled = s.backgroundColor !== 'rgba(0, 0, 0, 0)' && s.backgroundColor !== bodyBg && s.backgroundColor !== 'transparent';
    const bordered = parseFloat(s.borderTopWidth) > 0 && parseFloat(s.borderLeftWidth) > 0 && s.borderStyle !== 'none';
    const shadow = s.boxShadow && s.boxShadow !== 'none';
    const area = r.width * r.height;
    if ((filled || bordered || shadow) && !isMedia(e) && area > 6000 && area < vw * vh * 0.6 && r.width < vw * 0.92) boxes++;
    if ((e.tagName === 'A' || e.tagName === 'BUTTON') && (filled || bordered) && r.height >= 28 && r.height <= 90 && r.width < 420) buttons++;
  }
  return { mediaCover: +(mediaPts / (GX * GY)).toFixed(3), media: dedup.slice(0, 4), words, textSizes: sizes.size, maxFont, boxes, buttons };
};
module.exports = { SCREEN };
