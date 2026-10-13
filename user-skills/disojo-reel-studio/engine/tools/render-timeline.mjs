// node render-timeline.mjs <timeline.json> <outDir>
// timeline.json: { fps, duration, captions:[{t0,t1,words:[{w,s,e}]}], hook:{kicker,text,t0,t1,claimAt}|null }
// Writes PNG sequences (cap/top transparent, panel opaque): <out>/cap/00000.png (1080x880, composite at y=700) and <out>/top/00000.png (1080x820, at y=0, hook frames only).
import puppeteer from "puppeteer-core";
import fs from "node:fs"; import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
const here = path.dirname(fileURLToPath(import.meta.url));
const [jsonPath, outDir] = process.argv.slice(2);
const spec = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
const FPS = spec.fps || 30, N = Math.ceil(spec.duration * FPS);
for (const d of ["cap", "top", "panel"]) { fs.rmSync(path.join(outDir, d), { recursive: true, force: true }); fs.mkdirSync(path.join(outDir, d), { recursive: true }); }
const b = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: true, args: ["--allow-file-access-from-files"] });
const p = await b.newPage();
p.on("pageerror", (e) => console.error("PAGE ERROR", e.message));
await p.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 });
await p.goto(pathToFileURL(path.join(here, "timeline.html")).href, { waitUntil: "networkidle0" });
await p.evaluate(() => document.fonts.ready);
await p.evaluate((s) => window.setup(s), spec);
const hookEnd = spec.hook ? Math.ceil(spec.hook.t1 * FPS) : 0;
const panelActive = (spec.panels || []).map((c) => [Math.floor(c.t0 * FPS), Math.ceil(c.t1 * FPS)]);
const lastPanel = panelActive.length ? Math.max(...panelActive.map((x) => x[1])) : -1;
let blankPanel = false; const BLANKPANEL = path.join(outDir, "panel", "blank.png");
const topActive = [...(spec.hook ? [[0, hookEnd]] : []), ...(spec.cards || []).map((c) => [Math.floor(c.t0 * FPS), Math.ceil(c.t1 * FPS)])];
let capActive = [...spec.captions, ...(spec.callouts || [])].map((c) => [Math.floor(c.t0 * FPS), Math.ceil(c.t1 * FPS)]);
const BLANK = path.join(outDir, "cap", "blank.png");
let blankMade = false, blankTop = false;
const BLANKTOP = path.join(outDir, "top", "blank.png");
const lastTop = topActive.length ? Math.max(...topActive.map((x) => x[1])) : -1;
for (let f = 0; f < N; f++) {
  await p.evaluate((t) => window.seek(t), f / FPS);
  const name = String(f).padStart(5, "0") + ".png";
  const live = capActive.some(([a, b]) => f >= a && f <= b);
  const only = (id) => p.evaluate((id) => { for (const k of ["top", "cap", "panel"]) document.getElementById(k).style.visibility = k === id ? "visible" : "hidden"; }, id);   // layers overlap in y 700-820: capture each in isolation
  if (live) { await only("cap"); await p.screenshot({ path: path.join(outDir, "cap", name), omitBackground: true, clip: { x: 0, y: 700, width: 1080, height: 880 } }); }
  else {
    await only("cap");
    if (!blankMade) { await p.screenshot({ path: BLANK, omitBackground: true, clip: { x: 0, y: 700, width: 1080, height: 880 } }); blankMade = true; }
    fs.copyFileSync(BLANK, path.join(outDir, "cap", name));
  }
  if (f <= lastPanel) {
    await only("panel");
    if (panelActive.some(([a, b]) => f >= a && f <= b)) await p.screenshot({ path: path.join(outDir, "panel", name), clip: { x: 0, y: 0, width: 1080, height: 880 } });
    else { if (!blankPanel) { await p.screenshot({ path: BLANKPANEL, clip: { x: 0, y: 0, width: 1080, height: 880 } }); blankPanel = true; } fs.copyFileSync(BLANKPANEL, path.join(outDir, "panel", name)); }
  }
  if (f <= lastTop) {   // contiguous numbering is required by the image2 demuxer, so inactive frames copy a blank
    await only("top");
    if (topActive.some(([a, b]) => f >= a && f <= b)) await p.screenshot({ path: path.join(outDir, "top", name), omitBackground: true, clip: { x: 0, y: 0, width: 1080, height: 820 } });
    else { if (!blankTop) { await p.screenshot({ path: BLANKTOP, omitBackground: true, clip: { x: 0, y: 0, width: 1080, height: 820 } }); blankTop = true; } fs.copyFileSync(BLANKTOP, path.join(outDir, "top", name)); }
  }
}
await b.close();
console.log(`timeline: ${N} frames, hook frames ${hookEnd}, panel frames ${lastPanel + 1}`);
