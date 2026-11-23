// data-film: a film that plays forward and back with the scroll, frame exact.
// Studied from Lenval and Hilight (research/tftl-handson/frame-player-code.md); our own code.
// Markup: <div data-film="/films/x.film" data-film-poster="/films/x.jpg"><canvas></canvas></div>
// The poster is shown behind the canvas and is all a phone, reduced motion or an old browser sees.
// File made by kernel/tools/make-film.cjs (H.264 Annex B frames + JSON manifest + 4-byte offset).
import { gsap, ScrollTrigger, reduced } from './motion.js';
import { use } from './registry.js';

const cache = new Map();
async function load(url) {
  if (!cache.has(url)) cache.set(url, fetch(url).then(r => { if (!r.ok) throw new Error(r.status); return r.arrayBuffer(); }).then(buf => {
    const at = new DataView(buf).getUint32(buf.byteLength - 4, true);
    const man = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, at, buf.byteLength - 4 - at)));
    man.frames.forEach(f => { f.data = new Uint8Array(buf, f.o, f.l); });
    return man;
  }));
  return cache.get(url);
}

async function pickConfig(man) {
  const base = { codec: man.codec, codedWidth: man.width, codedHeight: man.height, colorSpace: { primaries: 'bt709', transfer: 'bt709', matrix: 'bt709' } };
  const soft = /Windows|Android/.test(navigator.userAgent); // hardware decode there is less reliable (Hilight does the same)
  const tries = soft ? [{ hardwareAcceleration: 'prefer-software', optimizeForLatency: true }, {}]
    : [{ hardwareAcceleration: 'prefer-hardware', optimizeForLatency: true }, { optimizeForLatency: true }, {}];
  for (const t of tries) {
    const cfg = { ...base, ...t };
    try { if ((await VideoDecoder.isConfigSupported(cfg)).supported) return cfg; } catch {}
  }
  return null;
}

function player(canvas, man, cfg) {
  const ctx = canvas.getContext('2d');
  let want = -1, shown = -1, last = -1, busy = false, dead = false;
  const draw = frame => {
    const r = canvas.getBoundingClientRect(), d = Math.min(devicePixelRatio, 2);
    const w = Math.round(r.width * d), h = Math.round(r.height * d);
    if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
    const s = Math.max(w / frame.displayWidth, h / frame.displayHeight); // cover
    const dw = frame.displayWidth * s, dh = frame.displayHeight * s;
    ctx.drawImage(frame, (w - dw) / 2, (h - dh) / 2, dw, dh);
  };
  let target = -1;
  const dec = new VideoDecoder({
    output: f => { const n = Math.round(f.timestamp * man.fps / 1e6); if (n === target) { draw(f); shown = n; } f.close(); },
    error: () => { dead = true; },
  });
  dec.configure(cfg);
  const feed = n => dec.decode(new EncodedVideoChunk({ type: man.frames[n].ty, timestamp: man.frames[n].t, data: man.frames[n].data }));
  async function pump() {
    if (busy || dead) return; busy = true;
    while (want !== shown && !dead) {
      const n = want; target = n;
      if (n === last + 1 && last >= 0) feed(n);          // the next frame: one decode
      else {                                              // a jump: from the key frame at or before n
        let k = n; while (k > 0 && man.frames[k].ty !== 'key') k--;
        if (n > last && last >= k) k = last + 1;          // already past that key: continue from where we are
        else { dec.reset(); dec.configure(cfg); }
        for (let i = k; i <= n; i++) feed(i);
      }
      last = n;
      await dec.flush().catch(() => { dead = true; });
    }
    busy = false;
  }
  return {
    set(n) { want = Math.max(0, Math.min(man.totalFrames - 1, n)); pump(); },
    destroy() { dead = true; try { dec.close(); } catch {} },
  };
}

use('[data-film]', el => {
  const canvas = el.querySelector('canvas');
  const poster = el.dataset.filmPoster;
  if (poster) el.style.backgroundImage = `url("${poster}")`;
  if (!canvas || reduced.matches || !('VideoDecoder' in window)) return;
  const mm = gsap.matchMedia();
  let p = null, st = null, gone = false;
  mm.add('(min-width: 992px)', () => {
    load(el.dataset.film).then(async man => {
      const cfg = await pickConfig(man);
      if (!cfg || gone) return;
      p = player(canvas, man, cfg);
      st = ScrollTrigger.create({
        trigger: el.closest('[data-film-track]') || el, start: el.dataset.filmStart || 'top top', end: el.dataset.filmEnd || 'bottom bottom', scrub: 1,
        onUpdate: s => p.set(Math.round(s.progress * (man.totalFrames - 1))),
      });
      p.set(0);
    }).catch(() => {}); // the poster stays
    return () => { st?.kill(); st = null; p?.destroy(); p = null; };
  });
  return () => { gone = true; mm.revert(); p?.destroy(); };
});
