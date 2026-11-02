// Paste into the browser JS tool (javascript_exec) on a loaded page. Returns JSON.
// Reads: fonts in use, text and background colours (top values), declared easings and durations,
// :root custom properties about colour/animation, known libraries, canvases, 3D/HDR/video/font files.
// CSS-declared motion only. Cross-origin stylesheets are skipped silently.
(async () => {
  const top = (o, n = 6) => Object.entries(o).sort((a, b) => b[1] - a[1]).slice(0, n);
  const hex = (c) => {
    const m = c.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    return m ? '#' + [m[1], m[2], m[3]].map((v) => (+v).toString(16).padStart(2, '0')).join('').toUpperCase() : c;
  };
  const fonts = {}, text = {}, bgs = {};
  document.querySelectorAll('h1,h2,h3,h4,p,a,button,span,li').forEach((e) => {
    if (!e.innerText || !e.innerText.trim()) return;
    const s = getComputedStyle(e);
    const k = s.fontFamily.split(',')[0].replace(/"/g, '') + ' | ' + s.fontWeight;
    fonts[k] = (fonts[k] || 0) + 1;
    const c = hex(s.color); text[c] = (text[c] || 0) + 1;
  });
  document.querySelectorAll('body,section,header,footer,main,div,a,button').forEach((e, i) => {
    if (i > 600) return;
    const v = getComputedStyle(e).backgroundColor;
    if (v !== 'rgba(0, 0, 0, 0)') { const c = hex(v); bgs[c] = (bgs[c] || 0) + 1; }
  });
  let css = '';
  const vars = {};
  for (const sh of document.styleSheets) {
    try {
      for (const r of sh.cssRules) {
        css += r.cssText + ' ';
        if (r.selectorText === ':root') {
          for (const p of r.style) {
            if (p.startsWith('--') && /color|swatch|brand|animation|ease|duration|accent/i.test(p) && !/font|weight|size|height|spacing|transform/i.test(p)) {
              vars[p] = getComputedStyle(document.documentElement).getPropertyValue(p).trim().slice(0, 40);
            }
          }
        }
      }
    } catch (e) { /* cross-origin sheet */ }
  }
  const ease = {}, dur = {};
  (css.match(/cubic-bezier\([^)]+\)/g) || []).forEach((x) => (ease[x] = (ease[x] || 0) + 1));
  (css.match(/transition[^;{}]*?[\d.]+m?s/g) || []).slice(0, 400).forEach((x) => {
    (x.match(/[\d.]+m?s/g) || []).forEach((d) => (dur[d] = (dur[d] || 0) + 1));
  });
  const libs = ['gsap', 'ScrollTrigger', 'Lenis', 'lenis', 'THREE', 'Webflow', '__NEXT_DATA__', '__NUXT__', 'jQuery', 'barba', 'Swiper', 'lottie', 'PIXI']
    .filter((k) => window[k] !== undefined);
  const html = document.documentElement.outerHTML;
  const res = [...new Set(performance.getEntriesByType('resource').map((r) => r.name)
    .filter((n) => /\.(glb|gltf|hdr|exr|ktx2|drc|webm|mp4|splinecode|woff2?)(\?|$)|three|draco|spline/i.test(n)))];
  const sizes = [];
  for (const n of res.filter((n) => /\.(glb|gltf|hdr|exr|ktx2|drc|webm|mp4|splinecode)(\?|$)/i.test(n))) {
    try {
      const r = await fetch(n, { method: 'HEAD' });
      const len = r.headers.get('content-length');
      sizes.push(n.split('/').slice(-2).join('/') + ' ' + (len ? (len / 1048576).toFixed(2) + 'MB' : '?'));
    } catch (e) { sizes.push(n.split('/').slice(-2).join('/') + ' (size blocked)'); }
  }
  const inlineModules = [...document.scripts].filter((s) => !s.src && s.type === 'module')
    .map((s) => ({ chars: s.textContent.length, mentions: ['THREE', 'GLTFLoader', 'RGBELoader', 'WebGLRenderer', 'UnrealBloomPass', 'DRACOLoader', 'ACESFilmic'].filter((k) => s.textContent.includes(k)) }));
  return JSON.stringify({
    viewport: innerWidth + 'x' + innerHeight, dpr: devicePixelRatio, title: document.title,
    generator: [...document.querySelectorAll('meta[name=generator]')].map((m) => m.content),
    webflow: /data-wf-|website-files\.com/i.test(html), next: /_next\//.test(html), framer: /framer\.(com|app)|data-framer/i.test(html),
    libs, canvases: [...document.querySelectorAll('canvas')].map((c) => c.width + 'x' + c.height),
    fonts: top(fonts), textColours: top(text), backgrounds: top(bgs), vars, easings: top(ease), durations: top(dur),
    files: sizes, fontFiles: res.filter((n) => /woff2?/i.test(n)).length, inlineModules,
    docHeight: document.documentElement.scrollHeight,
    scrollLocked: getComputedStyle(document.body).overflow === 'hidden' && scrollY === 0,
  });
})()
