// Usage: node render-carousel.mjs <spec.json> <outDir>
// Spec: { "brand":"disojo", "label":"...", "slides":[{ "type":"cover|point|cta", "theme":"dark|light", ... }] }
// Renders each slide to 1080x1350 PNG with headless Chrome. Fonts are local; no network needed.
import puppeteer from "puppeteer-core";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const hub = path.resolve(here, "..");
const [specPath, outDir] = process.argv.slice(2);
if (!specPath || !outDir) { console.error("usage: node render-carousel.mjs spec.json outDir"); process.exit(1); }
const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));
const css = `${hub}/design/${spec.brand}/tokens.css`;
if (!fs.existsSync(css)) { console.error(`no design system for brand "${spec.brand}"`); process.exit(1); }

const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
// *word* in copy renders as the italic emphasis style
const rich = (s = "") => esc(s).replace(/\*([^*]+)\*/g, '<span class="em">$1</span>').replace(/&lt;(\/?)b>/g, "<$1b>");
const N = spec.slides.length;
const pad = (i) => String(i + 1).padStart(2, "0") + " / " + String(N).padStart(2, "0");

function slide(s, i) {
  const top = `<div class="top"><span class="wm"></span><span>${pad(i)}</span></div>`;
  const next = i < N - 1 ? `<span>Swipe<span class="arrow">→</span></span>` : `<span>${esc(spec.handle || "")}</span>`;
  const bot = `<div class="bot"><span>${esc(s.footer || spec.footerLeft || "")}</span>${next}</div>`;
  let body;
  if (s.type === "cover") {
    body = `<div class="body"><div class="kicker">${esc(s.kicker)}</div><h1>${rich(s.title)}</h1>${s.lead ? `<p class="lead">${rich(s.lead)}</p>` : ""}</div>`;
  } else if (s.type === "cta") {
    body = `<div class="body"><div class="kicker">${esc(s.kicker || "")}</div><h2>${rich(s.title)}</h2>${s.lead ? `<p class="lead">${rich(s.lead)}</p>` : ""}<div class="cta-url">${esc(s.url)}<span>↗</span></div></div>`;
  } else {
    body = `<div class="body"><div class="num">${esc(s.label)}</div><h2>${rich(s.title)}</h2><p class="lead">${rich(s.body)}</p>${s.tell ? `<div class="tell">${rich(s.tell)}</div>` : ""}</div>`;
  }
  return `<section class="slide ${s.theme || "dark"}" id="s${i}">${top}${body}${bot}</section>`;
}

const html = `<!doctype html><meta charset="utf-8"><link rel="stylesheet" href="${pathToFileURL(css).href}"><body>${spec.slides.map(slide).join("")}`;
const tmp = path.resolve(outDir, "_slides.html");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(tmp, html);

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--allow-file-access-from-files"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(tmp).href, { waitUntil: "networkidle0" });
await page.evaluate(() => document.fonts.ready);
for (let i = 0; i < N; i++) {
  const el = await page.$("#s" + i);
  await el.screenshot({ path: path.join(outDir, `slide-${String(i + 1).padStart(2, "0")}.png`) });
}
await browser.close();
console.log(`rendered ${N} slides -> ${outDir}`);
