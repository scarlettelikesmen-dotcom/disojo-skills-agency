import { useEffect, useRef } from 'react';

// Cut-out stickers/ingredients that drift at different speeds as the section scrolls (parallax). Only runs while visible.
// items: [{ src, alt?, x: '8%', y: '12%', size: 120, speed: 0.3, rotate: -8 }]. speed > 0 drifts up as you scroll down.
// Put it inside a `position: relative; overflow: clip` section. Compress every sticker (WebP, < 60 KB).
export default function Floaters({ items }) {
  const wrap = useRef(null);
  useEffect(() => {
    const el = wrap.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const kids = [...el.children];
    let raf = 0; let visible = false;
    const update = () => {
      raf = 0;
      const r = el.parentElement.getBoundingClientRect();
      const mid = (r.top + r.height / 2 - innerHeight / 2); // 0 when the section is centred
      kids.forEach((k, i) => { k.style.transform = `translate3d(0, ${(-mid * (items[i].speed ?? 0.2)).toFixed(1)}px, 0) rotate(${items[i].rotate || 0}deg)`; });
    };
    const queue = () => { if (!raf && visible) raf = requestAnimationFrame(update); };
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) queue(); });
    io.observe(el.parentElement);
    addEventListener('scroll', queue, { passive: true });
    addEventListener('resize', queue);
    return () => { io.disconnect(); removeEventListener('scroll', queue); removeEventListener('resize', queue); cancelAnimationFrame(raf); };
  }, [items]);
  return (
    <div ref={wrap} aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
      {items.map((it, i) => (
        <img key={i} src={it.src} alt="" loading="lazy" decoding="async"
          style={{ position: 'absolute', left: it.x, top: it.y, width: it.size, height: 'auto', willChange: 'transform' }} />
      ))}
    </div>
  );
}
