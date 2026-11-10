// Code study of reference sites: node study.cjs <urls.json> <outDir> [concurrency]
// For learning only. Shader text and code excerpts stay in the scratchpad; nothing is reused in client work.
const puppeteer = require('puppeteer-core'); const fs = require('fs'); const path = require('path');
const [LIST, OUT, CONC = '5'] = process.argv.slice(2);
const urls = Object.keys(JSON.parse(fs.readFileSync(LIST, 'utf8')));
fs.mkdirSync(path.join(OUT, 'sites'), { recursive: true }); fs.mkdirSync(path.join(OUT, 'shots'), { recursive: true });

const SIG = {
  three: /WebGLRenderer|THREE\.REVISION|three\.module|__THREE__/,
  r3f: /react-three-fiber|@react-three\/fiber|useFrame\(/,
  drei: /@react-three\/drei|MeshTransmissionMaterial/,
  ogl: /\bogl\b|new Renderer\(\{[^}]*dpr|\.gl\.renderer/,
  pixi: /PIXI\.|pixi\.js|@pixi\//,
  curtains: /curtainsjs|Curtains\(/,
  babylon: /BABYLON\./,
  spline: /splinetool|prod\.spline\.design|@splinetool/,
  unicorn: /unicorn\.studio|UnicornStudio/,
  gsap: /gsap\.|GreenSock|_gsScope|gsap\/|"gsap"/,
  ScrollTrigger: /ScrollTrigger/,
  SplitText: /SplitText/,
  Flip: /\bFlip\.(from|getState)|gsap\/Flip/,
  CustomEase: /CustomEase/,
  ScrollSmoother: /ScrollSmoother/,
  DrawSVG: /DrawSVG/, MorphSVG: /MorphSVG/, Observer: /Observer\.create|gsap\/Observer/,
  Draggable: /Draggable/, Inertia: /InertiaPlugin/,
  lenis: /lenis|Lenis/,
  locomotive: /locomotive-scroll|LocomotiveScroll/,
  barba: /@barba|barba\.init|barba\.hooks/,
  swup: /swup/i,
  taxi: /@unseenco\/taxi|taxi\.js|new Core\(\{[^}]*links/,
  highway: /@dogstudio\/highway|Highway\.Core/,
  viewTransition: /startViewTransition/,
  splitting: /Splitting\(/, splittype: /SplitType|split-type/,
  motion: /framer-motion|motion\/react|motion\.dev/,
  use_SplitText: /new SplitText\(|SplitText\.create\(/,
  use_ScrollSmoother: /ScrollSmoother\.create\(/,
  use_Flip: /Flip\.from\(|Flip\.getState\(/,
  use_CustomEase: /CustomEase\.create\(/,
  use_lenis: /new Lenis\(|new \w\(\{[^}]{0,200}(lerp|wheelMultiplier|smoothWheel)/,
  use_ScrollTrigger: /ScrollTrigger\.create\(|scrollTrigger:\s*\{/,
  theatre: /@theatre\/core|@theatre\/studio/,
  lottie: /lottie|bodymovin/i, rive: /@rive-app|rive\.wasm/,
  postprocessing: /EffectComposer|postprocessing|UnrealBloomPass/,
  glslNoise: /snoise|simplex|fbm\(|curlNoise|cnoise/,
  matter: /Matter\.Engine/, rapier: /rapier/i, cannon: /cannon-es|CANNON\./,
  webgpu: /navigator\.gpu|WebGPURenderer/,
  hls: /hls\.js|Hls\.isSupported/,
  swiper: /swiper/i, embla: /embla/i, keen: /keen-slider/,
  howler: /Howl\(|howler/i, tone: /Tone\.Transport/,
};

async function study(b, url) {
  const name = new URL(url).hostname.replace(/^www\./, '').replace(/\./g, '-') + (new URL(url).pathname.length > 1 ? '_' + new URL(url).pathname.replace(/\W+/g, '') : '');
  const g = await b.newPage(); await g.setViewport({ width: 1512, height: 864 });
  await g.evaluateOnNewDocument(() => {
    window.__st = { shaders: [], ctx: [], raf: 0 };
    const gc = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (t, o) { const c = gc.call(this, t, o); if (c && /webgl|webgpu/i.test(t)) window.__st.ctx.push({ t, w: this.width, h: this.height, aa: o && o.antialias, alpha: o && o.alpha }); return c; };
    for (const C of [window.WebGLRenderingContext, window.WebGL2RenderingContext]) { if (!C) continue; const ss = C.prototype.shaderSource; C.prototype.shaderSource = function (sh, src) { try { if (window.__st.shaders.length < 60) window.__st.shaders.push(src); } catch (e) {} return ss.call(this, sh, src); }; }
    const r = window.requestAnimationFrame; window.requestAnimationFrame = function (f) { window.__st.raf++; return r.call(window, f); };
  });
  const js = [], css = [], files = [];
  g.on('response', async r => {
    const u = r.url(); if (u.startsWith('data:')) return; const t = r.request().resourceType();
    let body = null; try { if (t === 'script' || t === 'stylesheet' || /\.m?js(\?|$)|\.css(\?|$)/.test(u)) body = await r.text(); } catch (e) {}
    let size = +(r.headers()['content-length'] || 0) || (body ? body.length : 0);
    files.push({ u: u.slice(0, 200), t, size, ct: (r.headers()['content-type'] || '').split(';')[0] });
    if (body && (t === 'script' || /\.m?js(\?|$)/.test(u))) js.push({ u, body });
    if (body && (t === 'stylesheet' || /\.css(\?|$)/.test(u))) css.push({ u, body });
  });
  const t0 = Date.now();
  let err = null;
  await g.goto(url, { waitUntil: 'networkidle2', timeout: 60000 }).catch(e => err = e.message);
  await new Promise(r => setTimeout(r, 3500));
  // first-screen shot
  await g.screenshot({ path: path.join(OUT, 'shots', name + '-0.jpg'), type: 'jpeg', quality: 55 }).catch(() => {});
  // cursor: move mouse and see what follows it
  const before = await g.evaluate(() => [...document.querySelectorAll('body *')].filter(e => { const s = getComputedStyle(e); return (s.position === 'fixed' || s.position === 'absolute') && e.getBoundingClientRect().width < 160 && e.getBoundingClientRect().width > 2 && e.getBoundingClientRect().height < 160; }).slice(0, 400).map(e => { const r = e.getBoundingClientRect(); return [r.x, r.y]; }));
  await g.mouse.move(300, 300); await new Promise(r => setTimeout(r, 300)); await g.mouse.move(900, 500, { steps: 8 }); await new Promise(r => setTimeout(r, 700));
  const cursor = await g.evaluate(() => { const out = []; for (const e of document.querySelectorAll('body *')) { const s = getComputedStyle(e); if ((s.position === 'fixed' || s.position === 'absolute') && s.pointerEvents === 'none') { const r = e.getBoundingClientRect(); if (r.width > 2 && r.width < 200 && Math.abs(r.x + r.width / 2 - 900) < 120 && Math.abs(r.y + r.height / 2 - 500) < 120) out.push({ cls: String(e.className).slice(0, 60), w: Math.round(r.width), blend: s.mixBlendMode }); } } return { custom: out.slice(0, 3), hidden: getComputedStyle(document.body).cursor === 'none' || getComputedStyle(document.documentElement).cursor === 'none' }; });
  // smooth scroll detection: wheel once, sample scrollY over time
  const y0 = await g.evaluate(() => scrollY);
  await g.mouse.wheel({ deltaY: 400 });
  const samples = [];
  for (let i = 0; i < 8; i++) { await new Promise(r => setTimeout(r, 60)); samples.push(await g.evaluate(() => { const t = document.querySelector('[data-scroll-container],.smooth-wrapper,#smooth-wrapper,.scroll-content'); return scrollY || (t ? -new DOMMatrix(getComputedStyle(t).transform).m42 : 0); })); }
  // scroll the page, shots at 3 depths
  const docH = await g.evaluate(() => document.documentElement.scrollHeight);
  for (let i = 1; i <= 12; i++) { await g.mouse.wheel({ deltaY: 700 }); await new Promise(r => setTimeout(r, 650)); if (i === 3 || i === 7 || i === 11) await g.screenshot({ path: path.join(OUT, 'shots', `${name}-${i}.jpg`), type: 'jpeg', quality: 45 }).catch(() => {}); }
  await new Promise(r => setTimeout(r, 1500));
  const page = await g.evaluate(() => {
    const st = window.__st || {};
    const fw = [];
    if (window.__NEXT_DATA__ || document.querySelector('#__next,[data-nextjs-scroll-focus-boundary]') || [...document.scripts].some(s => /\/_next\//.test(s.src))) fw.push('next');
    if (window.__NUXT__ || window.$nuxt || document.querySelector('#__nuxt')) fw.push('nuxt');
    if (document.querySelector('astro-island,[data-astro-cid],[class*="astro-"]') || [...document.scripts].some(s => /\/_astro\//.test(s.src))) fw.push('astro');
    if (document.documentElement.dataset.wfSite || document.querySelector('[data-wf-page]')) fw.push('webflow');
    if (document.querySelector('[data-framer-name],#__framer-badge-container') || [...document.scripts].some(s => /framer/.test(s.src))) fw.push('framer');
    if ([...document.scripts].some(s => /_app\/immutable|sveltekit/.test(s.src)) || document.querySelector('[data-sveltekit-preload-data]')) fw.push('sveltekit');
    if (document.querySelector('[data-v-app],[data-server-rendered]') && !fw.includes('nuxt')) fw.push('vue');
    if (document.querySelector('#___gatsby')) fw.push('gatsby');
    if (window.Shopify) fw.push('shopify'); if (document.querySelector('meta[name=generator][content*=WordPress]') || /wp-content/.test(document.documentElement.innerHTML.slice(0, 200000))) fw.push('wordpress');
    if (window.Squarespace || /squarespace/.test(document.documentElement.innerHTML.slice(0, 50000))) fw.push('squarespace');
    const fonts = [...new Set([...document.fonts].filter(f => f.status === 'loaded').map(f => f.family.replace(/"/g, '')))];
    const vids = [...document.querySelectorAll('video')].map(v => ({ w: v.videoWidth, auto: v.autoplay, src: (v.currentSrc || '').slice(-60) }));
    const imgs = [...document.images]; const big = imgs.filter(i => i.getBoundingClientRect().width > innerWidth * .4).length;
    const hcls = document.documentElement.className + ' ' + document.body.className;
    const textNodes = [...document.querySelectorAll('h1,h2,h3,p,a,span,li')].filter(e => e.children.length === 0 && e.textContent.trim() && e.getBoundingClientRect().height > 0);
    const sizes = {}; for (const e of textNodes.slice(0, 1500)) { const fs = Math.round(parseFloat(getComputedStyle(e).fontSize)); sizes[fs] = (sizes[fs] || 0) + 1; }
    const chars = document.querySelectorAll('[class*=char],[class*=letter],[class*=word],[class*=line] > span').length;
    return { title: document.title, gen: document.querySelector('meta[name=generator]')?.content || null, fw, fonts, vids, imgs: imgs.length, bigImgs: big, canvases: [...document.querySelectorAll('canvas')].map(c => { const r = c.getBoundingClientRect(); return `${Math.round(r.width)}x${Math.round(r.height)}`; }), ctx: st.ctx, shaders: st.shaders, raf: st.raf, hcls: hcls.slice(0, 300), sizes, splitSpans: chars, docH: document.documentElement.scrollHeight, words: document.body.innerText.split(/\s+/).length };
  }).catch(e => ({ err: e.message }));
  // page transition: click the first internal link and see if the document survives
  let nav = null;
  try {
    const href = await g.evaluate(() => { window.__alive = 1; const a = [...document.querySelectorAll('a[href]')].find(a => { try { const u = new URL(a.href); return u.origin === location.origin && u.pathname !== location.pathname && !u.hash && a.getBoundingClientRect().width > 0; } catch (e) { return false; } }); return a ? a.href : null; });
    if (href) {
      await g.evaluate(h => { const a = [...document.querySelectorAll('a[href]')].find(a => a.href === h); window.scrollTo(0, 0); a.click(); }, href);
      await new Promise(r => setTimeout(r, 400));
      await g.screenshot({ path: path.join(OUT, 'shots', `${name}-nav.jpg`), type: 'jpeg', quality: 45 }).catch(() => {});
      await new Promise(r => setTimeout(r, 2600));
      nav = await g.evaluate(h => ({ to: location.href, spa: window.__alive === 1, arrived: location.href.split('#')[0] === h.split('#')[0] }), href).catch(() => ({ spa: false, reload: true }));
    }
  } catch (e) { nav = { err: e.message.slice(0, 80) }; }
  await g.close();

  // code signatures
  const allJs = js.map(j => j.body).join('\n');
  const libs = Object.entries(SIG).filter(([, re]) => re.test(allJs)).map(([k]) => k);
  const threeRev = (allJs.match(/REVISION\s*=\s*["'](\d+)/) || [])[1] || null;
  const allCss = css.map(c => c.body).join('\n');
  const count = (re, s) => (s.match(re) || []).length;
  const beziers = {}; for (const m of allCss.matchAll(/cubic-bezier\(([^)]+)\)/g)) { const k = m[1].replace(/\s+/g, ''); beziers[k] = (beziers[k] || 0) + 1; }
  for (const m of allJs.matchAll(/ease:\s*["']([^"']{2,40})["']/g)) { const k = 'gsap:' + m[1]; beziers[k] = (beziers[k] || 0) + 1; }
  for (const m of allJs.matchAll(/CustomEase\.create\(\s*["'][^"']+["']\s*,\s*["']([^"']{4,120})["']/g)) { const k = 'custom:' + m[1]; beziers[k] = (beziers[k] || 0) + 1; }
  const durs = {}; for (const m of allCss.matchAll(/transition[^;{}]*?(\d*\.?\d+)(m?s)/g)) { const v = m[2] === 'ms' ? +m[1] / 1000 : +m[1]; if (v > 0 && v < 5) { const k = v.toFixed(2); durs[k] = (durs[k] || 0) + 1; } }
  const cssFeat = {
    clipPath: count(/clip-path/g, allCss), blend: count(/mix-blend-mode/g, allCss), backdrop: count(/backdrop-filter/g, allCss),
    scrollTimeline: count(/scroll-timeline|animation-timeline|view-timeline/g, allCss), viewTransitionCss: count(/view-transition/g, allCss),
    varFonts: count(/font-variation-settings/g, allCss), clamp: count(/clamp\(/g, allCss), vw: count(/\d(vw|svh|dvh|lvh)/g, allCss), container: count(/@container/g, allCss),
    reduced: count(/prefers-reduced-motion/g, allCss + allJs), keyframes: count(/@keyframes/g, allCss), willChange: count(/will-change/g, allCss), cursorNone: count(/cursor:\s*none/g, allCss),
    letterSpacingNeg: count(/letter-spacing:\s*-/g, allCss), textWrap: count(/text-wrap:\s*(balance|pretty)/g, allCss), maskImage: count(/mask-image/g, allCss),
  };
  const kinds = {}; let jsKB = 0, total = 0; for (const f of files) { total += f.size; if (f.t === 'script') jsKB += f.size; const k = /\.(glb|gltf|drc)(\?|$)/.test(f.u) ? 'model' : /\.(hdr|exr|ktx2|basis)(\?|$)/.test(f.u) ? 'gpu-tex' : /\.(mp4|webm|m3u8)(\?|$)/.test(f.u) || /video/.test(f.ct) ? 'video' : /\.(woff2?|ttf|otf)(\?|$)/.test(f.u) ? 'font' : /\.(avif|webp)(\?|$)/.test(f.u) ? 'img-modern' : /\.(jpe?g|png|gif)(\?|$)/.test(f.u) ? 'img-legacy' : /\.svg(\?|$)/.test(f.u) ? 'svg' : f.t; kinds[k] = (kinds[k] || 0) + 1; }
  const scrollMoved = samples.map(v => Math.round(v - y0));
  const smooth = scrollMoved.length > 3 && scrollMoved[0] < scrollMoved[scrollMoved.length - 1] - 30 && scrollMoved[scrollMoved.length - 1] > 0;
  const res = { url, name, err, ms: Date.now() - t0, ...page, shaders: undefined, shaderCount: (page.shaders || []).length, libs, threeRev, beziers, durs, cssFeat, kinds, jsKB: Math.round(jsKB / 1024), totalKB: Math.round(total / 1024), scrollMoved, smooth, cursor, nav };
  fs.writeFileSync(path.join(OUT, 'sites', name + '.json'), JSON.stringify(res, null, 1));
  if (page.shaders && page.shaders.length) fs.writeFileSync(path.join(OUT, 'sites', name + '.shaders.glsl'), page.shaders.map((s, i) => `// ---- shader ${i}\n${s}`).join('\n\n'));
  // keep the app's own code (not vendor) for hands-on reading: the largest same-origin bundles
  const own = js.filter(j => { try { return new URL(j.u).hostname.includes(new URL(url).hostname.replace(/^www\./, '').split('.')[0]) || /webflow|cdn\.prod|framerusercontent|_next|_nuxt|_astro|assets/.test(j.u); } catch (e) { return false; } }).sort((a, b) => b.body.length - a.body.length).slice(0, 4);
  fs.mkdirSync(path.join(OUT, 'code', name), { recursive: true });
  own.forEach((j, i) => fs.writeFileSync(path.join(OUT, 'code', name, `${i}-${path.basename(new URL(j.u).pathname).slice(0, 60) || 'inline'}.js`), j.body.slice(0, 3_000_000)));
  return res;
}

(async () => {
  const b = await puppeteer.launch({ channel: 'chrome', headless: 'new', args: ['--enable-webgl', '--ignore-gpu-blocklist', '--use-angle=metal', '--autoplay-policy=no-user-gesture-required'] });
  const q = [...urls]; let done = 0;
  const worker = async () => { while (q.length) { const u = q.shift(); try { const r = await Promise.race([study(b, u), new Promise((_, rej) => setTimeout(() => rej(new Error('timeout 150s')), 150000))]); console.log(`${++done}/${urls.length} ${r.name} libs=[${r.libs.join(',')}] fw=[${(r.fw || []).join(',')}] smooth=${r.smooth} spa=${r.nav && r.nav.spa}`); } catch (e) { console.log(`${++done}/${urls.length} FAIL ${u} ${e.message.slice(0, 100)}`); } } };
  await Promise.all(Array.from({ length: +CONC }, worker));
  await b.close();
})();
