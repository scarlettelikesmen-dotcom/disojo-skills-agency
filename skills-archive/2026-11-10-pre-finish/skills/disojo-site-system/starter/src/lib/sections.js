// Reads a crawled page body (blocks in published order) and groups it into typed sections, so every page
// can be designed from its real content. Nothing is rewritten: text is only re-cased (sc) where the source
// set it in all caps.
import IMAGES from '../data/images.json';

// PER CLIENT: proper nouns and acronyms to restore after sentence-casing ALL-CAPS headings (brand, people, places, products).
const PROPER = ['Dr.', 'Google', 'I'];
const esc = s => s.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');
const PROPER_RE = new RegExp(`(^|[^A-Za-z])(${PROPER.map(esc).join('|')})(?=$|[^A-Za-z])`, 'gi');
const canon = Object.fromEntries(PROPER.map(p => [p.toLowerCase(), p]));

/** Sentence case for strings the source set in ALL CAPS; mixed-case strings are returned unchanged. */
export function sc(s = '') {
  const letters = s.replace(/[^A-Za-z]/g, '');
  if (!letters || letters.replace(/[^A-Z]/g, '').length / letters.length < 0.8) return s;
  let t = s.toLowerCase().replace(/(^\s*|[.!?]\s+)([a-z])/g, (m, a, b) => a + b.toUpperCase());
  t = t.replace(PROPER_RE, (m, pre, w) => pre + (canon[w.toLowerCase()] || w));
  return t.replace(/(^|[.!?]\s+)([a-z])/g, (m, a, b) => a + b.toUpperCase());
}

const strip = h => (h || '').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;|‍/g, ' ').trim();
export const isIcon = src => { const m = IMAGES[src]; return !src || /(=|%3D)s\d+-c|google-icons|\.svg(\?|$)/i.test(src) || (m && (m.svg || (m.w && m.w === m.h && m.w <= 1000 && /\.png/i.test(src)))); };
export const isAvatar = src => /(=|%3D)s\d+-c/i.test(src || '');
const isPhoto = b => b.t === 'img' && !isIcon(b.src) && !b.bg;
const textOf = b => b.x || strip(b.h);
const isQ = b => b.t === 'tx' && /\?\s*$/.test(b.x);

/** Split a body into { hero, sections }. */
export function parse(body) {
  const B = body.filter(b => !(b.t === 'p' && !strip(b.h)));
  let i = 0; const hero = { crumb: null, eyebrow: '', title: '', intro: [], actions: [], photo: null, meta: [] };
  if (B[i]?.t === 'link') hero.crumb = B[i++];
  if (B[i]?.t === 'tx' && B[i + 1]?.t === 'h1') hero.eyebrow = B[i++].x;
  if (B[i]?.t === 'h1') { hero.title = B[i++].x; }
  if (B[i]?.t === 'h2') { hero.eyebrow = hero.eyebrow || hero.title; hero.title = B[i++].x; }
  for (; i < B.length; i++) {
    const b = B[i];
    if (b.t === 'p') hero.intro.push(b.h);
    else if (b.t === 'link') hero.actions.push(b);
    else if (isPhoto(b) && !hero.photo) hero.photo = b;
    else if (b.t === 'tx' && /^(written by|published on)$/i.test(b.x)) { hero.meta.push([b.x, B[i + 1]?.x]); i++; }
    else if (b.t === 'img' && isIcon(b.src)) continue;
    else break;
  }
  // sections start at each h2 (a short tx right before it is its kicker)
  const sections = []; let cur = null;
  for (; i < B.length; i++) {
    const b = B[i];
    const prev = B[i - 1];
    const notKicker = b.t === 'tx' && (/^[A-Z][a-z]+ \d{1,2}, \d{4}$/.test(b.x) || /founder|therapist$/i.test(b.x) || (prev && ((prev.t === 'tx' && prev.x.length > 60) || (prev.t === 'img' && isAvatar(prev.src)))));
    if (b.t === 'h2' || (b.t === 'tx' && B[i + 1]?.t === 'h2' && b.x.length < 60 && !isQ(b) && !notKicker)) {
      cur = { kicker: '', title: '', blocks: [] };
      if (b.t === 'tx') { cur.kicker = b.x; i++; }
      cur.title = B[i].x; sections.push(cur); continue;
    }
    if (!cur) { cur = { kicker: '', title: '', blocks: [] }; sections.push(cur); }
    cur.blocks.push(b);
  }
  const out = sections.map(classify);
  out.forEach((x, n) => { if (x.kind === 'cta?') x.kind = (n === out.length - 1 || /ready|stop managing|next step|answers|stay sharp|get back|doesn't have to|done accepting/i.test(x.kicker + ' ' + x.title)) ? 'cta' : 'prose'; });
  return { hero, sections: out };
}

function classify(sec) {
  const bl = sec.blocks; const s = { ...sec, tags: [], intro: [], items: [], faq: [], reviews: [], links: [], photos: [], embeds: [], list: [], after: [], kind: 'prose' };
  let k = 0;
  while (k < bl.length && bl[k].t === 'p') s.intro.push(bl[k++].h);
  let item = null, pendingKicker = '', pendingIcon = null;
  for (; k < bl.length; k++) {
    const b = bl[k];
    if (isQ(b)) { const a = []; while (bl[k + 1]?.t === 'p') a.push(bl[++k].h); s.faq.push({ q: b.x, a }); item = null; continue; }
    if (b.t === 'tx' && b.x.length > 60) { // review: text, optional avatar, name
      const r = { text: b.x, name: '', avatar: '' };
      if (bl[k + 1]?.t === 'img' && isAvatar(bl[k + 1].src)) r.avatar = bl[++k].src;
      if (bl[k + 1]?.t === 'tx' && bl[k + 1].x.length < 40) r.name = bl[++k].x;
      s.reviews.push(r); item = null; continue;
    }
    if (b.t === 'h3' || b.t === 'h4') { item = { kicker: pendingKicker, title: b.x, href: b.href, body: [], list: [], photo: null, icon: pendingIcon, links: [] }; pendingKicker = ''; pendingIcon = null; s.items.push(item); continue; }
    if (b.t === 'tx') { if (/^learn more$/i.test(b.x)) continue; if (b.x.length < 40 && !(bl[k - 1]?.t === 'tx' && bl[k - 1].x.length > 60)) { if (pendingKicker) s.tags.push(pendingKicker); pendingKicker = b.x; continue; } if (b.x.length < 40) { const r = s.reviews[s.reviews.length - 1]; if (r && !r.name) { r.name = b.x; continue; } } }
    if (b.t === 'img') { if (isAvatar(b.src) || /google-icons/.test(b.src)) continue; if (isIcon(b.src)) { pendingIcon = b.src; continue; } if (item && !item.photo) item.photo = b; else s.photos.push(b); continue; }
    if (b.t === 'embed') { s.embeds.push(b); continue; }
    if (b.t === 'link') { if (item && item.body.length === 0 && /@|^\(\d|\d{3}/.test(b.x)) item.links.push(b); else s.links.push(b); continue; }
    if (b.t === 'ul') { (item ? item.list : s.list).push(...b.items); continue; }
    if (b.t === 'p') { if (item) item.body.push(b.h); else if (s.items.length || s.faq.length || s.reviews.length) s.after.push(b.h); else s.intro.push(b.h); continue; }
    if (b.t === 'tx') { (item ? item.body : s.after).push(b.x); continue; }
    if (b.t === 'table' || b.t === 'quote' || b.t === 'form') s.after.push(b.t === 'quote' ? b.h : '');
  }
  if (pendingKicker) s.tags.push(pendingKicker);
  // tab labels (h3 with no body whose text matches a later item's kicker) are navigation, not content
  const kick = new Set(s.items.map(it => (it.kicker || '').toLowerCase()).filter(Boolean));
  const labels = s.items.filter(it => !it.body.length && !it.list.length && !it.photo && kick.has(it.title.toLowerCase()));
  if (labels.length) s.items = s.items.filter(it => !labels.includes(it));
  // short consecutive paragraphs after the intro read as a list (e.g. "What's included")
  if (!s.items.length && s.intro.length >= 4 && s.intro.slice(1).every(h => strip(h).length < 110)) { s.list.push(...s.intro.slice(1)); s.intro = s.intro.slice(0, 1); }
  if (!s.items.length && s.after.length >= 3 && s.after.every(h => strip(h).length < 110)) { s.list.push(...s.after); s.after = []; }

  const t = (s.kicker + ' ' + s.title).toLowerCase();
  const contact = s.items.filter(it => /^(email|phone|office)$/i.test(it.title));
  if (s.faq.length >= 2) s.kind = 'faq';
  else if (s.reviews.length >= 2) s.kind = 'reviews';
  else if (contact.length >= 2) s.kind = 'contact';
  else if (/how it works|three steps/.test(t) && s.items.length) s.kind = 'steps';
  else if (s.links.filter(l => /areas-we-serve\//.test(l.href)).length >= 2 && !s.items.length) s.kind = 'areas';
  else if (s.embeds.some(e => /youtube|embedly/.test(e.src))) s.kind = 'videos';
  else if (s.embeds.some(e => /thepatchsystem|form|booking/.test(e.src)) && !s.items.length) s.kind = 'widget';
  else if (s.items.length && s.items.every(it => !it.body.length && !it.list.length)) s.kind = 'points';
  else if (s.items.length) s.kind = s.items.some(it => it.list.length || it.photo) ? 'panes' : 'rows';
  else if (s.list.length) s.kind = 'checklist';
  else if (s.tags.length && (s.photos.length || s.tags.some(x => /dr\.|dpt/i.test(x)))) s.kind = 'profile';
  else if (!s.items.length && s.intro.length <= 2 && !s.list.length && !s.embeds.length) s.kind = 'cta?';
  return s;
}

/** First non-icon photo anywhere in a body: used for page heros that have none. */
export const firstPhoto = body => body.find(isPhoto) || null;
export { strip, isPhoto };
