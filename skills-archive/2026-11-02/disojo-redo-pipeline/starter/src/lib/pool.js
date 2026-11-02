// Real clinic photos (the shoot), used where a section has none of its own. Stock and screenshots are left out.
import IMAGES from '../data/images.json';
const STOCK = /athletic|biracial|health-man|focused|capture|movem|main-|image-|icon|asessment|caller|stretch|sprint|level|google/i;
export const POOL = Object.entries(IMAGES).filter(([u, m]) => !m.svg && m.w >= 700 && m.w !== m.h && !STOCK.test(m.n) && !/=s\d+-c|%3Ds\d+-c/i.test(u)).map(([src]) => ({ src, alt: '' }));
