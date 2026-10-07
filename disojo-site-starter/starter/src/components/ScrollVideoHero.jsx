import { useEffect, useRef, useState } from 'react';
import { setLoad } from '../lib/loadStore';
import { brand } from '../brand.config';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import './ScrollVideoHero.css';

// Frame sequence from brand.hero (frameCount 1 = a single still). Turntable footage is sliced with
// scripts/extract_frames.sh in the disojo-scroll-site-rebuild skill.
const FRAME_COUNT = Math.max(1, brand.hero.frameCount);
const FRAME_PATH = (i) => `${brand.hero.framePath}${String(i + 1).padStart(3, '0')}.jpg`;

// Scroll-scrubbed video hero: a video sliced into a frame sequence, drawn to canvas,
// with the frame index driven directly by scroll position within this section — the
// same technique as the bakery reel this was modeled on. No video element, no
// autoplay, no WebGL: just a canvas and scroll math, so it's robust on every device.
export default function ScrollVideoHero() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const dirtyRef = useRef(true);
  const lastIdxRef = useRef(-1);
  const kickRef = useRef(() => {});
  const frameRef = useRef({ current: 0, target: 0 });
  const rafRef = useRef(null);
  const [loaded, setLoaded] = useState(0);
  const [ready, setReady] = useState(false);
  const { dispatch, setIsOpen } = useCart();
  const featured = products.find((p) => p.id === brand.hero.featuredProductId) || products[0];
  const addFeatured = () => {
    dispatch({ type: 'ADD_ITEM', item: featured });
    setIsOpen(true);
  };

  // Preload every frame up front (~3.4MB total). Chrome manages the decoded-image cache
  // itself, which measured lighter than holding our own decoded copies.
  useEffect(() => {
    let cancelled = false;
    let doneCount = 0;
    const imgs = new Array(FRAME_COUNT);
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = 'async';
      img.src = FRAME_PATH(i);
      img.onload = img.onerror = () => {
        doneCount += 1;
        if (!cancelled) {
          setLoaded(doneCount);
          setLoad({ progress: doneCount / FRAME_COUNT });
        }
        if (doneCount === FRAME_COUNT && !cancelled) {
          setReady(true);
          setLoad({ progress: 1, ready: true });
        }
      };
      imgs[i] = img;
    }
    imagesRef.current = imgs;
    return () => { cancelled = true; };
  }, []);

  // The exact frame if it has loaded, otherwise the nearest one that has.
  const frameFor = (idx) => {
    const imgs = imagesRef.current;
    const ok = (i) => imgs[i] && imgs[i].complete && imgs[i].naturalWidth;
    if (ok(idx)) return imgs[idx];
    for (let d = 1; d < FRAME_COUNT; d++) {
      if (ok(idx - d)) return imgs[idx - d];
      if (ok(idx + d)) return imgs[idx + d];
    }
    return null;
  };

  // The frames sit on a plain studio wall/floor. Instead of cover-cropping (which clips
  // the cap on wide screens), scale the bottle to a set size, anchor the frame to the
  // bottom, and stretch the frame's own edge pixels outward to fill the rest of the
  // canvas — the backdrop is smooth enough that the extension reads as one seamless set.
  const draw = () => {
    const canvas = canvasRef.current;
    const img = frameFor(Math.round(frameRef.current.current));
    if (!canvas || !img) return;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingQuality = 'high';
    const { width: cw, height: ch } = canvas;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const wide = cw / ch > 1;
    // Bottle centred, like the hero subject in a full-bleed photo; the overlay copy sits
    // in the side columns and along the bottom. Portrait: bottle in the lower part.
    const s = wide ? (ch * 0.8) / ih : (ch * 0.6) / ih;
    const dw = iw * s;
    const dh = ih * s;
    const dx = cw / 2 - dw / 2;
    const dy = ch - dh;
    const E = 3; // sample a few px in from the edge to avoid JPEG edge noise
    const left = Math.max(0, dx);
    const right = Math.max(0, cw - (dx + dw));
    if (dy > 0) {
      if (left) ctx.drawImage(img, E, E, 1, 1, 0, 0, left, dy);
      if (right) ctx.drawImage(img, iw - E, E, 1, 1, dx + dw, 0, right, dy);
      ctx.drawImage(img, 0, E, iw, 1, dx, 0, dw, dy);
    }
    if (left) ctx.drawImage(img, E, 0, 1, ih, 0, dy, left, dh);
    if (right) ctx.drawImage(img, iw - E, 0, 1, ih, dx + dw, dy, right, dh);
    ctx.drawImage(img, dx, dy, dw, dh);
  };

  // Resize the canvas to the device pixel ratio so the frame stays crisp.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      dirtyRef.current = true;
      draw();
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [ready]);

  // Scroll -> frame index, eased toward target each animation frame so it never
  // feels stepped even if the browser drops scroll events under load.
  useEffect(() => {
    if (!ready) return undefined;
    const section = sectionRef.current;
    if (!section) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Only run the animation loop while something is changing: it starts on scroll and
    // stops once the eased frame has settled. Off-screen, it doesn't run at all.
    const tick = () => {
      rafRef.current = 0;
      const f = frameRef.current;
      f.current += (f.target - f.current) * 0.18;
      if (Math.abs(f.target - f.current) < 0.02) f.current = f.target;
      const idx = Math.round(f.current);
      if (idx !== lastIdxRef.current) {
        lastIdxRef.current = idx;
        dirtyRef.current = true;
      }
      if (dirtyRef.current) {
        dirtyRef.current = false;
        draw();
      }
      if (f.current !== f.target) rafRef.current = requestAnimationFrame(tick);
    };
    const kick = () => { if (!rafRef.current) rafRef.current = requestAnimationFrame(tick); };
    kickRef.current = kick;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      const f = frameRef.current;
      f.target = p * (FRAME_COUNT - 1);
      const near = rect.bottom > -300 && rect.top < window.innerHeight + 300;
      if (!near) {
        // scrolled well away: snap and stay idle
        f.current = f.target;
        return;
      }
      if (reduced) f.current = f.target;
      kick();
    };
    onScroll();
    kick();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    };
  }, [ready]);

  const pct = Math.round((loaded / FRAME_COUNT) * 100);

  return (
    <section ref={sectionRef} className="scroll-video-hero">
      <div className="scroll-video-hero-stage">
        <canvas ref={canvasRef} className="scroll-video-hero-canvas" />
        {!ready && (
          <div className="scroll-video-hero-loading" aria-hidden="true">
            <span>{pct}%</span>
          </div>
        )}
        <div className="scroll-video-hero-row">
          <span>{brand.hero.featuredLabel}</span>
          <span>{featured.name}</span>
          <span>{featured.size} · {featured.currency}{featured.price}</span>
          <button type="button" className="scroll-video-hero-cta" onClick={addFeatured}>
            Add to cart <span className="scroll-video-hero-dot" aria-hidden="true" />
          </button>
        </div>
        <h1 className="scroll-video-hero-statement">
          {brand.hero.statement}
        </h1>
        <p className="scroll-video-hero-hint" aria-hidden="true">{brand.hero.hint}</p>
      </div>
    </section>
  );
}
