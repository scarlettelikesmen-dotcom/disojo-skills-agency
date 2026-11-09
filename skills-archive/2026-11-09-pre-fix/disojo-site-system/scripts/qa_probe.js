// Paste into the browser JS tool (javascript_exec) on a loaded page at the size you are testing.
// Returns JSON with pass/warn/fail flags for the defects seen in the reference sites.
// It measures one moment. Run it at 1s, 3s and 8s after load, and again after scrolling, to catch late problems.
(async () => {
  const out = { viewport: innerWidth + 'x' + innerHeight, scrollY: Math.round(scrollY), checks: {} };
  const vw = innerWidth, vh = innerHeight;
  const rectOf = (e) => e.getBoundingClientRect();
  const visible = (e) => {
    const s = getComputedStyle(e);
    if (s.display === 'none' || s.visibility === 'hidden' || parseFloat(s.opacity) < 0.05) return false;
    const r = rectOf(e);
    return r.width > 1 && r.height > 1 && r.bottom > 0 && r.top < vh && r.right > 0 && r.left < vw;
  };

  // 1. Scroll lock (Squiggle stayed locked for 35 s)
  const bodyHidden = getComputedStyle(document.body).overflow === 'hidden' || getComputedStyle(document.documentElement).overflow === 'hidden';
  out.checks.scrollLock = { status: bodyHidden ? 'WARN' : 'PASS', note: bodyHidden ? 'overflow hidden now; re-run after 3 s and 8 s. FAIL if it persists past the intro cap' : 'page can scroll', docHeight: document.documentElement.scrollHeight };

  // 2. Horizontal overflow
  const over = document.documentElement.scrollWidth > document.documentElement.clientWidth;
  out.checks.horizontalOverflow = { status: over ? 'FAIL' : 'PASS', scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth };

  // 3. First screen has real content (Supersolid, Mammoth, HISS phone heroes were empty)
  let chars = 0, textEls = 0;
  document.querySelectorAll('h1,h2,h3,p,a,button,li,span').forEach((e) => {
    if (!visible(e) || !e.innerText) return;
    const t = e.innerText.trim();
    if (t) { chars += t.length; textEls++; }
  });
  const imgs = [...document.querySelectorAll('img,video,canvas,svg')].filter(visible).filter((e) => { const r = rectOf(e); return r.width * r.height > vw * vh * 0.08; }).length;
  out.checks.firstScreenContent = { status: (chars > 40 || imgs > 0) ? (chars > 40 && imgs > 0 ? 'PASS' : 'WARN') : 'FAIL', visibleChars: chars, textElements: textEls, largeMedia: imgs, note: 'FAIL = near-empty screen; check timing before blaming the site' };

  // 4. Full-screen overlays (preloaders, locked intros, cookie walls)
  const overlays = [...document.querySelectorAll('body *')].filter((e) => {
    const s = getComputedStyle(e);
    if (s.position !== 'fixed' || s.display === 'none' || s.visibility === 'hidden' || parseFloat(s.opacity) < 0.05) return false;
    const r = rectOf(e);
    return r.width >= vw * 0.9 && r.height >= vh * 0.9 && s.pointerEvents !== 'none';
  }).map((e) => (e.className && e.className.toString ? e.className.toString().slice(0, 40) : e.tagName) + ' z:' + getComputedStyle(e).zIndex);
  out.checks.fullScreenOverlays = { status: overlays.length ? 'WARN' : 'PASS', items: overlays.slice(0, 5), note: overlays.length ? 'fine during a capped intro; FAIL if still there after 3 s' : '' };

  // 5. Fixed/sticky UI overlapping visible text (SLIK logo over copy; Palmo logo over body text)
  const fixedUi = [...document.querySelectorAll('header, nav, [class*="logo" i], [class*="nav" i], [class*="menu" i]')]
    .filter((e) => { const s = getComputedStyle(e); return (s.position === 'fixed' || s.position === 'sticky') && visible(e); })
    .filter((e) => rectOf(e).height < vh * 0.25);
  const hits = [];
  const texts = [...document.querySelectorAll('h1,h2,h3,h4,p,li')].filter(visible);
  fixedUi.forEach((f) => {
    const fr = rectOf(f);
    texts.forEach((t) => {
      if (f.contains(t) || t.contains(f)) return;
      const tr = rectOf(t);
      const ix = Math.min(fr.right, tr.right) - Math.max(fr.left, tr.left);
      const iy = Math.min(fr.bottom, tr.bottom) - Math.max(fr.top, tr.top);
      if (ix > 8 && iy > 8) hits.push((f.className && f.className.toString ? f.className.toString().slice(0, 25) : f.tagName) + ' over "' + (t.innerText || '').trim().slice(0, 30) + '"');
    });
  });
  out.checks.fixedUiOverlap = { status: hits.length ? 'WARN' : 'PASS', count: hits.length, items: hits.slice(0, 4), note: 'WARN means geometric overlap now; look at a screenshot (a deliberate blend is fine)' };

  // 6. Fonts: trial or unlicensed markers, family count
  const faces = [...new Set([...document.fonts].map((f) => f.family.replace(/"/g, '')).filter((f) => !/fallback/i.test(f)))];
  const trial = faces.filter((f) => /trial|demo|sample/i.test(f));
  out.checks.fonts = { status: trial.length ? 'FAIL' : (faces.filter((f) => !/icon/i.test(f)).length > 3 ? 'WARN' : 'PASS'), families: faces, trial, note: 'Check each licence in brand/tokens.json; more than 2 text families is a WARN' };

  // 7. 3D and heavy assets
  const res = [...new Set(performance.getEntriesByType('resource').map((r) => r.name).filter((n) => /\.(glb|gltf|hdr|exr|ktx2|drc|webm|mp4|splinecode)(\?|$)/i.test(n)))];
  const assets = [];
  for (const n of res) {
    try { const r = await fetch(n, { method: 'HEAD' }); const l = r.headers.get('content-length'); assets.push({ file: n.split('/').slice(-2).join('/'), mb: l ? +(l / 1048576).toFixed(2) : null }); }
    catch (e) { assets.push({ file: n.split('/').slice(-2).join('/'), mb: null }); }
  }
  const over3d = assets.filter((a) => a.mb && ((/\.glb|\.gltf/i.test(a.file) && a.mb > 0.6) || (/\.hdr|\.exr/i.test(a.file) && a.mb > 1.5) || (/\.webm|\.mp4/i.test(a.file) && a.mb > 3)));
  out.checks.heavyAssets = { status: over3d.length ? 'WARN' : 'PASS', assets, overBudget: over3d, budgets: 'model <= 0.6 MB, HDR <= 1.5 MB, video <= 3 MB' };

  // 8. Canvas / WebGL presence
  out.checks.canvases = { count: document.querySelectorAll('canvas').length, sizes: [...document.querySelectorAll('canvas')].map((c) => c.width + 'x' + c.height).slice(0, 8) };

  // 9. Reduced-motion hook present in loaded CSS or scripts
  let rm = false;
  for (const sh of document.styleSheets) { try { for (const r of sh.cssRules) { if (r.media && /prefers-reduced-motion/.test(r.media.mediaText)) rm = true; } } catch (e) {} }
  const inlineRm = [...document.scripts].some((s) => !s.src && /prefers-reduced-motion/.test(s.textContent));
  out.checks.reducedMotionHook = { status: (rm || inlineRm) ? 'PASS' : 'WARN', css: rm, script: inlineRm, note: 'WARN = no hook found in readable CSS or inline scripts; confirm in the source' };

  return JSON.stringify(out);
})()
