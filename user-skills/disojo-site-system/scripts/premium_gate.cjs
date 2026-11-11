// Premium gate: run on a local build before showing Tejjo anything, and the site guard hook makes me.
//   NODE_PATH=$HOME/.disojo-tools/node_modules node premium_gate.cjs <projectRoot> <baseUrl> [/path ...]
//   node premium_gate.cjs --skip <projectRoot> "<one-line reason>"     (stamps without running; say why to Tejjo)
// Per path, at 1512x864 and 390x844, every screen of the page is screenshotted and measured:
//   FAIL  horizontal overflow, broken images, visible placeholders (lorem, TODO, "coming soon"), em dashes,
//         banned words, text under 12px on phone, a first screen with neither an image nor type at scale,
//         images shown soft (fewer source pixels than the screen needs), fewer than 3 in 8 screens carrying a big image,
//         more than one button in the first screen, a headline + sentence + button stack on a photo (lib/first_screen.cjs)
//   WARN  composition outside the reference band (words, boxes, buttons and text sizes per screen; share of screens
//         with a big image; largest image; share of photographs), from research/BANDS.md
// Writes ~/Desktop/DISOJO SOLUTIONS/qa-gate/<project>/<stamp>/ (screens + report.md; never inside the repo) and stamps the project for the site guard hook.
const fs = require('fs'); const path = require('path'); const os = require('os');
const { execFileSync } = require('child_process');
const STATE = path.join(os.homedir(), '.claude', 'state', 'site-guard');
const slug = r => r.replace(/[^a-z0-9]+/gi, '_').slice(-120);
const stamp = (root, how) => { fs.mkdirSync(STATE, { recursive: true }); fs.writeFileSync(path.join(STATE, `gate-${slug(path.resolve(root))}.json`), JSON.stringify({ at: Date.now(), how })); };

if (process.argv[2] === '--skip') {
  const [, , , root, ...why] = process.argv;
  if (!root || !why.join(' ').trim()) { console.error('usage: --skip <root> "<reason>"'); process.exit(2); }
  stamp(root, 'skipped: ' + why.join(' ')); console.log('stamped as skipped:', why.join(' ')); process.exit(0);
}

const puppeteer = require('puppeteer-core');
const { SCREEN } = require('./lib/screen.cjs');
const FIRST_SCREEN = require('./lib/first_screen.cjs');
const [root, base, ...paths] = process.argv.slice(2);
if (!root || !base) { console.error('usage: premium_gate.cjs <root> <baseUrl> [/path ...]'); process.exit(2); }

// Bands from the 2026-11-02 composition study (research/BANDS.md). Reference = Monolog + its 8 work sites.
const BAND = {
  wordsPerScreen: [10, 120],     // refs 11-119 (median 51); disojostudio 151, redo A 135
  boxesPerScreen: [0, 10],       // refs 1.2-10: not a separator, kept only to catch card soup
  buttonsPerScreen: [0, 2.5],    // refs 0-2.5
  textSizesPerScreen: [2, 7],    // refs 2.4-7.6 (median 3.8); disojostudio 8.6
  bigMediaScreens: 0.375,        // share of screens with an image covering 20%+: refs 3/8 to 8/8 (median 5/8); ours 0-2/8
  largestMedia: 0.5,             // at least one image covering half a screen: 7 of 9 refs; ours never above 0.28
  photoShare: 0.5,               // share of big images that are photographs (WARN: video, 3D and illustration also count)
};
const BANNED = /\b(seamless(ly)?|cutting[- ]edge|game[- ]?changer|revolutionary|leverage|unlock|elevate|synerg\w*|world[- ]class|next[- ]level|best[- ]in[- ]class|innovative solutions?|empower\w*|supercharge\w*)\b/i;
const PLACEHOLDER = /(lorem ipsum|\bTODO\b|TODO\(client\)|coming soon|placeholder|\[insert|xxx+|tbd\b)/i;

const PAGE_CHECKS = () => {
  // defaults-to-avoid.md: loaded faces, one-word accent in the h1, eyebrow count, buttons in the first screen
  const fonts = [...new Set([...document.fonts].filter(f => f.status === 'loaded').map(f => f.family.replace(/["']/g, '').trim()))].filter(f => /^(inter( tight)?|fraunces|instrument serif)$/i.test(f));
  const accent = [];
  for (const h of document.querySelectorAll('h1')) {
    const hs = getComputedStyle(h), hw = h.textContent.trim().split(/\s+/).length;
    for (const c of h.querySelectorAll('*')) {
      const w = c.textContent.trim().split(/\s+/).filter(Boolean).length, s = getComputedStyle(c);
      if (w >= 1 && w <= 2 && w < hw && (s.fontStyle !== hs.fontStyle || s.color !== hs.color || s.fontFamily !== hs.fontFamily)) accent.push(c.textContent.trim());
    }
  }
  const isEyebrow = e => { if (!e || e.textContent.trim().length > 60 || !e.textContent.trim()) return false; const s = getComputedStyle(e), fs = parseFloat(s.fontSize); return fs <= 16 && (s.textTransform === 'uppercase' || (parseFloat(s.letterSpacing) || 0) / fs >= 0.04); };
  let eyebrows = 0;
  for (const h of document.querySelectorAll('h1,h2')) if (isEyebrow(h.previousElementSibling) || (!h.previousElementSibling && isEyebrow(h.parentElement.previousElementSibling))) eyebrows++;
  const sections = Math.max(1, document.querySelectorAll('section,header').length);
  const webgl = [...document.querySelectorAll('canvas')].some(c => { try { return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; } });
  const model = performance.getEntriesByType('resource').map(r => r.name).find(n => /\.(glb|gltf|ktx2|drc|usdz)(\?|$)/i.test(n));
  const out = { three_d: webgl || !!model || !!window.THREE ? (model ? model.split('/').pop() : 'a WebGL canvas') : '', fonts, accent, eyebrows, sections, place: !!document.querySelector('footer [data-clock], footer time, footer .foot-place'), credit: [...document.querySelectorAll('a[href*="disojostudio.com"]')].some(a => a.textContent.trim() === 'Design & Systems · © Disojo Studio 2026'), oldCredit: /Developed by Disojo/i.test(document.body.innerText), flatBtn: [...document.querySelectorAll('button,a')].filter(e => { if (!e.offsetParent || !e.textContent.trim() || e.matches('.skip,[href*="disojostudio.com"]') || e.querySelector('.roll,.wave,img')) return false; if (e.tagName === 'BUTTON') return true; const c = getComputedStyle(e).backgroundColor; return c !== 'transparent' && !/, 0\)$/.test(c); }).map(e => e.textContent.trim().slice(0, 30)), overflow: document.documentElement.scrollWidth > innerWidth + 1, broken: [], soft: [], small: 0, smallEx: [], dash: [], banned: [], placeholder: [] };
  const dpr = devicePixelRatio || 1;
  for (const i of document.querySelectorAll('img')) {
    const r = i.getBoundingClientRect(); if (r.width < 40) continue;
    if (i.complete && i.naturalWidth === 0) out.broken.push(i.currentSrc || i.src);
    // object-fit cover crops: compare against the rendered box scaled by the image's fit
    else if (i.naturalWidth && r.width > 200) {
      // With srcset, naturalWidth is density-corrected (a 1920w file at sizes=390px reports ~390). Use the chosen file's w descriptor.
      let realW = i.naturalWidth;
      if (i.srcset && i.currentSrc) { const hit = i.srcset.split(',').map(x => x.trim().split(/\s+/)).find(([u]) => new URL(u, location.href).href === i.currentSrc); if (hit && /w$/.test(hit[1] || '')) realW = parseInt(hit[1]); }
      const fitW = getComputedStyle(i).objectFit === 'cover' ? Math.max(r.width, r.height * i.naturalWidth / i.naturalHeight) : r.width;
      if (realW < fitW * Math.min(dpr, 2) * 0.75) out.soft.push(`${(i.currentSrc || i.src).split('/').pop()} ${realW}px for ${Math.round(fitW)}css@${dpr}x`);
    }
  }
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let n; while ((n = walker.nextNode())) {
    const t = n.textContent; if (!t.trim()) continue; const e = n.parentElement; if (!e) continue;
    const s = getComputedStyle(e); if (s.display === 'none' || s.visibility === 'hidden' || e.closest('script,style,noscript,[aria-hidden="true"]')) continue;
    if (parseFloat(s.fontSize) < 12 && innerWidth < 500 && t.trim().length > 1) { out.small++; if (out.smallEx.length < 5) out.smallEx.push(`"${t.trim().slice(0, 28)}" ${parseFloat(s.fontSize)}px`); }
    if (/—/.test(t)) out.dash.push(t.trim().slice(0, 60));
    if (out.banned.length < 8) { const m = t.match(window.__BANNED); if (m) out.banned.push(m[0]); }
    if (out.placeholder.length < 8) { const m = t.match(window.__PLACEHOLDER); if (m) out.placeholder.push(t.trim().slice(0, 60)); }
  }
  return out;
};

// NPC nav (Tejjo 2026-11-10, hard rule): a full-width bar pinned to the top with a blurred backdrop, or links all in one size, weight and face.
const NAV_CHECK = () => {
  const hits = [];
  for (const e of document.querySelectorAll('body *')) {
    const s = getComputedStyle(e); if (s.position !== 'fixed' && s.position !== 'sticky') continue;
    const r = e.getBoundingClientRect(); if (r.top > 4 || r.width < innerWidth * 0.8 || r.height > 160 || r.height < 24 || s.visibility === 'hidden' || s.display === 'none') continue;
    const links = [...e.querySelectorAll('a,button')].filter(a => a.offsetParent && a.textContent.trim());
    if (links.length < 3) continue;
    const blur = /blur/.test(s.backdropFilter || '') || /blur/.test(s.webkitBackdropFilter || '');
    const key = a => { const c = getComputedStyle(a.querySelector('.wave .ch, span') || a); return [c.fontSize, c.fontWeight, c.fontFamily].join('|'); };
    const sizes = new Set(links.map(key));
    const name = (e.className && String(e.className).split(' ')[0]) || e.tagName.toLowerCase();
    if (blur) hits.push(`${name}: blurred backdrop bar`);
    if (links.length >= 4 && sizes.size === 1) hits.push(`${name}: ${links.length} links all in one size, weight and face`);
  }
  return hits;
};

(async () => {
  const when = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const OUT = path.join(process.env.GATE_OUT || path.join(os.homedir(), 'Desktop', 'DISOJO SOLUTIONS', 'qa-gate'), slug(path.basename(path.resolve(root))), when); fs.mkdirSync(OUT, { recursive: true });
  const b = await puppeteer.launch({ channel: 'chrome', headless: 'new', args: ['--hide-scrollbars'] });
  const lines = []; let fails = 0, warns = 0;
  const F = m => { fails++; lines.push('FAIL  ' + m); }, Wn = m => { warns++; lines.push('WARN  ' + m); }, P = m => lines.push('pass  ' + m);
  if (!['astro.config.mjs', 'astro.config.ts', 'astro.config.js'].some(f => fs.existsSync(path.join(path.resolve(root), f)))) F(`${root}: not an Astro project (no astro.config). Every website is built in Astro (hard rule)`);
  // owned pages: the 404 must be designed in the client's world, not the starter default (2026-11-11, TFTL study)
  try {
    const own = path.join(path.resolve(root), 'src/pages/404.astro'), stock = path.join(__dirname, '../starter/src/pages/404.astro');
    if (!fs.existsSync(own)) Wn(`${root}: no src/pages/404.astro; design one in the client's world (build-craft.md, owned pages)`);
    else if (fs.existsSync(stock) && fs.readFileSync(own, 'utf8') === fs.readFileSync(stock, 'utf8') && !/disojo-site-system\/starter/.test(path.resolve(root))) Wn(`${root}: 404 is still the starter default; design it in the client's world (build-craft.md, owned pages)`);
  } catch (e) {}
  // Website type from brief/IDEA.md (root is the project or its site/ folder)
  const ideaFile = [path.resolve(root, 'brief/IDEA.md'), path.resolve(root, '../brief/IDEA.md')].find(f => fs.existsSync(f));
  const ideaText = ideaFile ? fs.readFileSync(ideaFile, 'utf8') : '';
  const line = k => ((ideaText.match(new RegExp('^' + k + ':[ \\t]*(.*)$', 'm')) || [])[1] || '').trim();
  const idea = { type: line('TYPE'), product: /^product\b/i.test(line('TYPE')), allowed: line('3D ALLOWED BY TEJJO') };
  if (ideaFile && !idea.type) Wn(`brief/IDEA.md has no TYPE line (Product, Catalogue, Studio, Person, Local practice, Software)`);
  for (const pth of (paths.length ? paths : ['/'])) {
    for (const [w, h, dev, dpr] of [[1512, 864, 'desktop', 2], [390, 844, 'phone', 3]]) {
      const tag = `${pth} ${dev}`; const p = await b.newPage();
      await p.setViewport({ width: w, height: h, deviceScaleFactor: dpr });
      await p.evaluateOnNewDocument((bn, ph) => { window.__BANNED = new RegExp(bn, 'i'); window.__PLACEHOLDER = new RegExp(ph, 'i'); }, BANNED.source, PLACEHOLDER.source);
      try { await p.goto(new URL(pth, base).href, { waitUntil: 'networkidle2', timeout: 60000 }); }
      catch (e) { F(`${tag}: page did not load (${String(e).slice(0, 80)})`); await p.close(); continue; }
      await new Promise(r => setTimeout(r, 2500));
      const docH = await p.evaluate(() => document.documentElement.scrollHeight);
      const rows = [], navHits = new Set();
      for (let s = 0; s < Math.min(14, Math.ceil(docH / h)); s++) {
        await p.evaluate(y => { window.lenis?.scrollTo?.(y, { immediate: true }); window.scrollTo(0, y); }, s * h);
        await new Promise(r => setTimeout(r, 1300));
        const shot = path.join(OUT, `${pth.replace(/\W+/g, '_').replace(/^_|_$/g, '') || 'home'}-${dev}-s${String(s).padStart(2, '0')}.jpg`);
        await p.screenshot({ path: shot, type: 'jpeg', quality: 72 });
        const m = await p.evaluate(SCREEN);
        if (s < 3) for (const x of await p.evaluate(NAV_CHECK)) navHits.add(x);
        await p.evaluate(() => { for (const e of document.querySelectorAll('body *')) { const s = getComputedStyle(e), r = e.getBoundingClientRect(); if (s.position === 'fixed' && s.pointerEvents === 'none' && r.width * r.height >= innerWidth * innerHeight * 0.85) { e.dataset.gateHid = e.style.visibility || '-'; e.style.visibility = 'hidden'; } } });
        for (const [k, md] of m.media.entries()) {
          const crop = path.join(OUT, `.c${s}${k}.png`);
          try { await p.screenshot({ path: crop, clip: { x: md.x, y: md.y + (await p.evaluate(() => scrollY)), width: md.w, height: md.h } }); md.flat = +execFileSync('python3', [path.join(__dirname, 'flatness.py'), crop]).toString().trim(); fs.unlinkSync(crop); } catch (e) { md.flat = null; }
          md.kind = md.flat == null ? '?' : md.flat < 0.3 ? 'photo' : md.flat > 0.45 ? 'flat/ui' : 'mixed';
        }
        await p.evaluate(() => { for (const e of document.querySelectorAll('[data-gate-hid]')) { e.style.visibility = e.dataset.gateHid === '-' ? '' : e.dataset.gateHid; delete e.dataset.gateHid; } });
        rows.push(m);
      }
      await p.evaluate(() => { window.lenis?.scrollTo?.(0, { immediate: true }); window.scrollTo(0, 0); });
      await new Promise(r => setTimeout(r, 1300));
      const first = await p.evaluate(FIRST_SCREEN);
      const c = await p.evaluate(PAGE_CHECKS);
      await p.close();
      // hard checks
      if (c.three_d && !idea.product && !idea.allowed) F(`${tag}: 3D on a ${idea.type || 'site with no TYPE in brief/IDEA.md'} (${c.three_d}). 3D is for the Product type; anywhere else "3D ALLOWED BY TEJJO:" must hold their own words`);
      if (c.fonts.length) F(`${tag}: default face loaded: ${c.fonts.join(', ')} (defaults-to-avoid.md; keep only if brief/IDEA.md needs it, and say why to Tejjo)`);
      if (c.accent.length) F(`${tag}: one-word accent in the h1: "${c.accent[0]}" (defaults-to-avoid.md)`);
      if (c.eyebrows > Math.ceil(c.sections / 3)) Wn(`${tag}: ${c.eyebrows} eyebrows in ${c.sections} sections (at most 1 per 3)`);
      if (first.buttons.length > 1) F(`${tag}: ${first.buttons.length} buttons in the first screen: ${first.buttons.slice(0, 4).join(' / ')} (one at most; the idea carries the screen)`);
      if (first.salesBlock) F(`${tag}: headline, sentence and button stacked on a photo: "${first.salesBlock.h}" / "${first.salesBlock.sub}" / "${first.salesBlock.btn}" (type over a photo is fine, the sales block is not)`);
      c.overflow ? F(`${tag}: horizontal overflow`) : P(`${tag}: no horizontal overflow`);
      if (c.broken.length) F(`${tag}: broken images ${c.broken.slice(0, 4).join(', ')}`);
      if (c.soft.length) F(`${tag}: images shown soft (need a bigger source): ${c.soft.slice(0, 4).join('; ')}`);
      if (!c.credit) F(`${tag}: footer credit missing; it must read exactly "Design & Systems · © Disojo Studio 2026" linking to https://disojostudio.com (hard rule)`);
      if (!c.place) Wn(`${tag}: no location and small clock in the footer (hard rule; if it is built another way, say so)`);
      if (c.flatBtn.length) F(`${tag}: text button without the up down or side up down label motion (hard rule, references/text-button-motion.md): ${c.flatBtn.slice(0, 5).join(' | ')}`);
      if (navHits.size) F(`${tag}: NPC nav (hard rule, references/defaults-to-avoid.md): ${[...navHits].join('; ')}. The nav comes from the idea: no blurred bar, a real hierarchy`);
      if (c.oldCredit) F(`${tag}: old credit "Developed by Disojo..." still visible`);
      if (c.dash.length) F(`${tag}: em dash in visible copy: "${c.dash[0]}"`);
      if (c.banned.length) F(`${tag}: banned words: ${[...new Set(c.banned)].join(', ')}`);
      if (c.placeholder.length) F(`${tag}: placeholder visible: "${c.placeholder[0]}"`);
      if (dev === 'phone' && c.small) F(`${tag}: ${c.small} text nodes under 12px, e.g. ${c.smallEx.join('; ')}`);
      const scaleType = rows[0] && rows[0].maxFont >= (dev === 'phone' ? 40 : 96);
      if (!rows[0]?.media.length && !scaleType) F(`${tag}: first screen has neither an image nor type at scale (largest text ${rows[0]?.maxFont}px)`);
      else P(`${tag}: first screen leads with ${rows[0].media.length ? 'an image' : 'type at scale (' + rows[0].maxFont + 'px)'}`);
      // composition vs bands (desktop is where the bands were measured)
      if (dev === 'desktop' && rows.length) {
        const avg = k => rows.reduce((a, r) => a + r[k], 0) / rows.length;
        const band = (k, v, [lo, hi], unit) => (v < lo || v > hi) ? Wn(`${tag}: ${unit} ${v.toFixed(1)} (reference band ${lo}-${hi})`) : P(`${tag}: ${unit} ${v.toFixed(1)}`);
        band('w', avg('words'), BAND.wordsPerScreen, 'words per screen');
        band('b', avg('boxes'), BAND.boxesPerScreen, 'boxes per screen');
        band('bt', avg('buttons'), BAND.buttonsPerScreen, 'buttons per screen');
        band('ts', avg('textSizes'), BAND.textSizesPerScreen, 'text sizes per screen');
        const bigScreens = rows.filter(r => r.media.some(m => m.share >= 0.2)).length / rows.length;
        bigScreens < BAND.bigMediaScreens ? F(`${tag}: only ${(bigScreens * 100) | 0}% of screens carry a big image (every reference has 37%+, median 62%)`) : P(`${tag}: ${(bigScreens * 100) | 0}% of screens carry a big image`);
        const largest = Math.max(0, ...rows.flatMap(r => r.media.map(m => m.share)));
        largest < BAND.largestMedia ? Wn(`${tag}: no image ever covers half a screen (largest ${(largest * 100) | 0}%; 7 of 9 references do)`) : P(`${tag}: largest image covers ${(largest * 100) | 0}% of a screen`);
        const big = rows.flatMap(r => r.media.filter(m => m.share >= 0.08));
        const photo = big.length ? big.filter(m => m.kind === 'photo').length / big.length : 0;
        if (big.length && photo < BAND.photoShare) Wn(`${tag}: only ${(photo * 100) | 0}% of big images read as photographs; the rest are flat (UI screenshots fail this; real video, 3D or illustration is fine, say which) (reference ${BAND.photoShare * 100}%+)`);
        else P(`${tag}: ${(photo * 100) | 0}% of big images are photographs`);
        const worst = rows.map((r, i) => ({ i, score: r.words / 140 + r.boxes / 3 + r.buttons / 2.5 })).sort((a, b) => b.score - a.score)[0];
        lines.push(`info  ${tag}: busiest screen s${String(worst.i).padStart(2, '0')} (${rows[worst.i].words} words, ${rows[worst.i].boxes} boxes, ${rows[worst.i].buttons} buttons): look at it first`);
      }
    }
  }
  await b.close();
  const head = `# Defect check (premium_gate) ${when}\nProves "not broken" only. Says nothing about whether it is good.\n${base} ${paths.join(' ') || '/'}\n**${fails} FAIL, ${warns} WARN**\n\nScreens: ${OUT}\n\n`;
  fs.writeFileSync(path.join(OUT, 'report.md'), head + lines.map(l => '- ' + l).join('\n') + '\n\n' +
    'Now LOOK at every screen file (desktop and phone) against references/first-look.md. 0 FAIL is not progress: the rejected Kiran design-v1 and VAEL both passed.\n');
  console.log(head + lines.join('\n'));
  stamp(root, `ran: ${fails} fail, ${warns} warn`);
  process.exitCode = fails ? 1 : 0;
})();
