// Premium gate: run on a local build before showing Tejjo anything, and the site guard hook makes me.
//   NODE_PATH=$HOME/.disojo-tools/node_modules node premium_gate.cjs <projectRoot> <baseUrl> [/path ...]
//   node premium_gate.cjs --skip <projectRoot> "<one-line reason>"     (stamps without running; say why to Tejjo)
// Per path, at 1512x864 and 390x844, every screen of the page is screenshotted and measured:
//   FAIL  horizontal overflow, broken images, visible placeholders (lorem, TODO, "coming soon"), em dashes,
//         banned words, text under 12px on phone, a first screen with neither an image nor type at scale,
//         images shown soft (fewer source pixels than the screen needs), fewer than 3 in 8 screens carrying a big image
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
  const out = { overflow: document.documentElement.scrollWidth > innerWidth + 1, broken: [], soft: [], small: 0, smallEx: [], dash: [], banned: [], placeholder: [] };
  const dpr = devicePixelRatio || 1;
  for (const i of document.querySelectorAll('img')) {
    const r = i.getBoundingClientRect(); if (r.width < 40) continue;
    if (i.complete && i.naturalWidth === 0) out.broken.push(i.currentSrc || i.src);
    // object-fit cover crops: compare against the rendered box scaled by the image's fit
    else if (i.naturalWidth && r.width > 200) {
      const fitW = getComputedStyle(i).objectFit === 'cover' ? Math.max(r.width, r.height * i.naturalWidth / i.naturalHeight) : r.width;
      if (i.naturalWidth < fitW * Math.min(dpr, 2) * 0.75) out.soft.push(`${(i.currentSrc || i.src).split('/').pop()} ${i.naturalWidth}px for ${Math.round(fitW)}css@${dpr}x`);
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

(async () => {
  const when = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const OUT = path.join(process.env.GATE_OUT || path.join(os.homedir(), 'Desktop', 'DISOJO SOLUTIONS', 'qa-gate'), slug(path.basename(path.resolve(root))), when); fs.mkdirSync(OUT, { recursive: true });
  const b = await puppeteer.launch({ channel: 'chrome', headless: 'new', args: ['--hide-scrollbars'] });
  const lines = []; let fails = 0, warns = 0;
  const F = m => { fails++; lines.push('FAIL  ' + m); }, Wn = m => { warns++; lines.push('WARN  ' + m); }, P = m => lines.push('pass  ' + m);
  for (const pth of (paths.length ? paths : ['/'])) {
    for (const [w, h, dev, dpr] of [[1512, 864, 'desktop', 2], [390, 844, 'phone', 3]]) {
      const tag = `${pth} ${dev}`; const p = await b.newPage();
      await p.setViewport({ width: w, height: h, deviceScaleFactor: dpr });
      await p.evaluateOnNewDocument((bn, ph) => { window.__BANNED = new RegExp(bn, 'i'); window.__PLACEHOLDER = new RegExp(ph, 'i'); }, BANNED.source, PLACEHOLDER.source);
      try { await p.goto(new URL(pth, base).href, { waitUntil: 'networkidle2', timeout: 60000 }); }
      catch (e) { F(`${tag}: page did not load (${String(e).slice(0, 80)})`); await p.close(); continue; }
      await new Promise(r => setTimeout(r, 2500));
      const docH = await p.evaluate(() => document.documentElement.scrollHeight);
      const rows = [];
      for (let s = 0; s < Math.min(14, Math.ceil(docH / h)); s++) {
        await p.evaluate(y => { window.lenis?.scrollTo?.(y, { immediate: true }); window.scrollTo(0, y); }, s * h);
        await new Promise(r => setTimeout(r, 1300));
        const shot = path.join(OUT, `${pth.replace(/\W+/g, '_').replace(/^_|_$/g, '') || 'home'}-${dev}-s${String(s).padStart(2, '0')}.jpg`);
        await p.screenshot({ path: shot, type: 'jpeg', quality: 72 });
        const m = await p.evaluate(SCREEN);
        await p.evaluate(() => { for (const e of document.querySelectorAll('body *')) { const s = getComputedStyle(e), r = e.getBoundingClientRect(); if (s.position === 'fixed' && s.pointerEvents === 'none' && r.width * r.height >= innerWidth * innerHeight * 0.85) { e.dataset.gateHid = e.style.visibility || '-'; e.style.visibility = 'hidden'; } } });
        for (const [k, md] of m.media.entries()) {
          const crop = path.join(OUT, `.c${s}${k}.png`);
          try { await p.screenshot({ path: crop, clip: { x: md.x, y: md.y + (await p.evaluate(() => scrollY)), width: md.w, height: md.h } }); md.flat = +execFileSync('python3', [path.join(__dirname, 'flatness.py'), crop]).toString().trim(); fs.unlinkSync(crop); } catch (e) { md.flat = null; }
          md.kind = md.flat == null ? '?' : md.flat < 0.3 ? 'photo' : md.flat > 0.45 ? 'flat/ui' : 'mixed';
        }
        await p.evaluate(() => { for (const e of document.querySelectorAll('[data-gate-hid]')) { e.style.visibility = e.dataset.gateHid === '-' ? '' : e.dataset.gateHid; delete e.dataset.gateHid; } });
        rows.push(m);
      }
      await p.evaluate(() => { window.scrollTo(0, 0); });
      const c = await p.evaluate(PAGE_CHECKS);
      await p.close();
      // hard checks
      c.overflow ? F(`${tag}: horizontal overflow`) : P(`${tag}: no horizontal overflow`);
      if (c.broken.length) F(`${tag}: broken images ${c.broken.slice(0, 4).join(', ')}`);
      if (c.soft.length) F(`${tag}: images shown soft (need a bigger source): ${c.soft.slice(0, 4).join('; ')}`);
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
  const head = `# Premium gate ${when}\n${base} ${paths.join(' ') || '/'}\n**${fails} FAIL, ${warns} WARN**\n\nScreens: ${OUT}\n\n`;
  fs.writeFileSync(path.join(OUT, 'report.md'), head + lines.map(l => '- ' + l).join('\n') + '\n\n' +
    'Now LOOK at every screen file (desktop and phone) against references/first-look.md. Numbers pass broken taste too.\n');
  console.log(head + lines.join('\n'));
  stamp(root, `ran: ${fails} fail, ${warns} warn`);
  process.exitCode = fails ? 1 : 0;
})();
