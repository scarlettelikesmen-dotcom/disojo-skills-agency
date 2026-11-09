// Runs in the page at scroll 0. Two checks Tejjomay approved 2026-11-10 from judging 133 first screens:
// more than one button in the first screen, and a headline + sentence + button stack sitting on a photo.
// Type over a photo on its own is fine (ERA Residence is exactly that). Nav, footer and pinned bars do not count.
module.exports = () => {
  const vh = innerHeight, vw = innerWidth;
  const alpha = c => { const m = /rgba?\(([^)]+)\)/.exec(c || ''); if (!m) return 0; const p = m[1].split(/[,\s/]+/).filter(Boolean); return p.length > 3 ? parseFloat(p[3]) : 1; };
  const shown = e => { const r = e.getBoundingClientRect(); if (r.width <= 0 || r.height <= 0 || r.bottom <= 0 || r.top >= vh) return false; for (let x = e; x && x !== document.documentElement; x = x.parentElement) { const s = getComputedStyle(x); if (s.display === 'none' || s.visibility === 'hidden' || +s.opacity < 0.05) return false; } return true; };
  const chrome = e => { if (e.closest('nav,footer,[aria-hidden="true"],[role="dialog"]')) return true; for (let x = e; x && x !== document.body; x = x.parentElement) { const p = getComputedStyle(x).position; if ((p === 'fixed' || p === 'sticky') && x.getBoundingClientRect().height < vh * 0.4) return true; } return false; };
  const painted = e => { const s = getComputedStyle(e); return alpha(s.backgroundColor) > 0.05 || s.backgroundImage !== 'none' || (parseFloat(s.borderTopWidth) > 0 && parseFloat(s.borderLeftWidth) > 0 && s.borderTopStyle !== 'none' && alpha(s.borderTopColor) > 0.05); };
  // Not a call to action: consent banners, media and menu controls, account and language switches.
  const UTIL = /^(pause|play|mute|unmute|page \d+|\d+|next|prev(ious)?|open\b.*|close|toggle\b.*|skip to\b.*|menu|search|accept\b.*|reject\b.*|deny|decline|allow\b.*|only necessary.*|cookies?\b.*|manage\b.*|preferences|legal\b.*|privacy\b.*|terms\b.*|my account|account|sign in|log ?in|cart|bag|english|en|español|français|deutsch|italiano)$/i;
  const consent = e => !!e.closest('[id*="cookie" i],[class*="cookie" i],[id*="consent" i],[class*="consent" i],[id*="onetrust" i],[class*="gdpr" i]');
  const isBtn = e => { const t = (e.innerText || '').trim(), r = e.getBoundingClientRect(); if (t.length < 2 || t.length > 40 || r.height > 120 || r.width > vw * 0.6 || e.closest('p') || UTIL.test(t) || consent(e)) return false; if (e.tagName === 'BUTTON' || e.getAttribute('role') === 'button') return true; if (painted(e)) return true; const k = e.firstElementChild; return !!k && k.getBoundingClientRect().width >= r.width * 0.6 && painted(k); };
  const all = [...document.querySelectorAll('a,button,[role="button"]')].filter(e => shown(e) && !chrome(e) && isBtn(e));
  const btns = all.filter(e => !all.some(o => o !== e && o.contains(e)));
  const size = e => parseFloat(getComputedStyle(e).fontSize);
  let heads = [...document.querySelectorAll('h1')].filter(e => shown(e) && !chrome(e));
  if (!heads.length) heads = [...document.querySelectorAll('h2,[role="heading"],div,span')].filter(e => shown(e) && !chrome(e) && !e.querySelector('div,p,h1,h2,h3') && (e.innerText || '').trim().length > 2 && size(e) >= 28).sort((a, b) => size(b) - size(a)).slice(0, 1);
  const media = [...document.querySelectorAll('img,video,canvas,section,header,main,figure,div')].filter(e => shown(e) && (['IMG', 'VIDEO', 'CANVAS'].includes(e.tagName) || /url\(/.test(getComputedStyle(e).backgroundImage))).filter(e => { const r = e.getBoundingClientRect(); return (Math.min(r.right, vw) - Math.max(r.left, 0)) * (Math.min(r.bottom, vh) - Math.max(r.top, 0)) >= vw * vh * 0.4; }).map(e => e.getBoundingClientRect());
  let salesBlock = null;
  for (const h of heads) {
    const hr = h.getBoundingClientRect(), hs = size(h);
    const subs = [...document.querySelectorAll('p,div,span,h2,h3')].filter(e => { if (!shown(e) || chrome(e) || h.contains(e) || e.contains(h) || e.closest('a,button') || e.querySelector('p,div,h1,h2,h3,ul')) return false; const w = (e.innerText || '').trim().split(/\s+/).filter(Boolean).length, z = size(e), r = e.getBoundingClientRect(); return w >= 8 && w <= 70 && z <= 28 && z < hs * 0.7 && r.top >= hr.top && r.top - hr.bottom < 280 && r.left < hr.right && r.right > hr.left; });
    for (const s of subs) {
      const sr = s.getBoundingClientRect();
      const b = btns.find(e => { const r = e.getBoundingClientRect(); return r.top >= sr.top && r.top - sr.bottom < 200 && r.left < Math.max(sr.right, hr.right) && r.right > Math.min(sr.left, hr.left); });
      if (!b) continue;
      const cx = (sr.left + sr.right) / 2, cy = (sr.top + sr.bottom) / 2;
      if (media.some(r => cx >= r.left && cx <= r.right && cy >= r.top && cy <= r.bottom)) { salesBlock = { h: h.innerText.trim().slice(0, 50), sub: s.innerText.trim().slice(0, 50), btn: b.innerText.trim().slice(0, 30) }; break; }
    }
    if (salesBlock) break;
  }
  return { buttons: btns.map(e => e.innerText.trim().replace(/\s+/g, ' ').slice(0, 30)), salesBlock };
};
