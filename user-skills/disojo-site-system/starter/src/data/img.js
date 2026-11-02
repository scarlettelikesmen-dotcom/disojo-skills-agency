import IMAGES from './images.json';
/** Original image URL -> self-hosted WebP (720px copy for small slots). Unknown URLs pass through. */
export function img(src, w = 1200) {
  const m = IMAGES[src]; if (!m) return src; return m.svg ? `/img/${m.n}.svg` : `/img/${m.n}${w <= 720 ? '-s' : ''}.webp`;
}
export const dims = src => IMAGES[src] || null;
