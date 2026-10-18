// Usage: node render-carousel.mjs <spec.json> <outDir>
// Spec: { "brand":"disojo|trading|code", "handle":"@x", "footerLeft":"...", "bigNumber":true|false, "slides":[{ "type":"cover|point|cta|list|compare|stamp|image|code", "theme":"dark|light", ... }] }
// Renders each slide to 1080x1350 PNG with headless Chrome, then reports slides whose content overflows. Fonts are local; no network needed.
// Slide fields by type: cover{kicker,title,lead} point{label,title,body,tell} cta{kicker,title,lead,url} list{kicker,title,items:[{t,sub,warn,mark}]}
//   compare{title,left:{head,items[]},right:{head,items[]}} stamp{title,stamp,lead} image{kicker,title,img?,ph?,tags:[{t,x,y,hot}],caption} code{kicker,title,code} (code: <k>keyword</k> <s>string</s> <c>comment</c>)
import puppeteer from "puppeteer-core";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const engine = path.resolve(here, "..");
const [specPath, outDir] = process.argv.slice(2);
if (!specPath || !outDir) { console.error("usage: node render-carousel.mjs spec.json outDir"); process.exit(1); }
const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));
const css = `${engine}/design/${spec.brand}/tokens.css`;
if (!fs.existsSync(css)) { console.error(`no design system for brand "${spec.brand}"`); process.exit(1); }
const common = `${engine}/design/common.css`;
const specDir = path.dirname(path.resolve(specPath));

const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const rich = (s = "") => esc(s).replace(/\*([^*]+)\*/g, '<span class="em">$1</span>').replace(/&lt;(\/?)b>/g, "<$1b>");
const N = spec.slides.length;
const pad = (i) => String(i + 1).padStart(2, "0") + " / " + String(N).padStart(2, "0");
const img = (p) => pathToFileURL(path.resolve(specDir, p)).href;
const big = spec.bigNumber ?? (spec.brand === "code");

function slide(s, i) {
  const wm = spec.brand === "disojo" ? `<span class="wm"></span>` : `<span class="wm"></span>`;
  const top = `<div class="top">${wm}<span>${pad(i)}</span></div>`;
  const next = i < N - 1 ? `<span>Swipe<span class="arrow">→</span></span>` : `<span>${esc(spec.handle || "")}</span>`;
  const bot = `<div class="bot"><span>${esc(s.footer || spec.footerLeft || "")}</span>${next}</div>`;
  let body;
  if (s.type === "cover") body = `<div class="body"><div class="kicker">${esc(s.kicker)}</div><h1>${rich(s.title)}</h1>${s.lead ? `<p class="lead">${rich(s.lead)}</p>` : ""}</div>`;
  else if (s.type === "cta") body = `<div class="body"><div class="kicker">${esc(s.kicker || "")}</div><h2>${rich(s.title)}</h2>${s.lead ? `<p class="lead">${rich(s.lead)}</p>` : ""}<div class="cta-url">${esc(s.url)}<span>↗</span></div></div>`;
  else if (s.type === "list") body = `<div class="body"><div class="kicker">${esc(s.kicker || "")}</div><h2>${rich(s.title)}</h2><div class="rows">${s.items.map((it, k) => `<div class="row${it.warn ? " warn" : ""}"><span class="n">${String(k + 1).padStart(2, "0")}</span><div><b>${rich(it.t)}</b>${it.sub ? `<i>${esc(it.sub)}</i>` : ""}</div><span class="tick">${esc(it.mark ?? "✓")}</span></div>`).join("")}</div></div>`;
  else if (s.type === "compare") body = `<div class="body"><h2>${rich(s.title)}</h2><div class="cmp">${[s.left, s.right].map((c) => `<div><h3>${esc(c.head)}</h3><ul>${c.items.map((x) => `<li>${rich(x)}</li>`).join("")}</ul></div>`).join("")}</div></div>`;
  else if (s.type === "stamp") body = `<div class="body"><h2>${rich(s.title)}</h2><div class="stamp">${esc(s.stamp)}</div>${s.lead ? `<p class="lead">${rich(s.lead)}</p>` : ""}</div>`;
  else if (s.type === "image") body = `<div class="body"><div class="kicker">${esc(s.kicker || "")}</div>${s.title ? `<h2 style="font-size:96px">${rich(s.title)}</h2>` : ""}<div class="shot">${s.img ? `<img src="${img(s.img)}">` : `<div class="ph">${esc(s.ph || "Your screen recording goes here")}</div>`}${(s.tags || []).map((t) => `<span class="tag${t.hot ? " hot" : ""}" style="left:${t.x}px;top:${t.y}px">${esc(t.t)}</span>`).join("")}</div>${s.caption ? `<div class="caption">${rich(s.caption)}</div>` : ""}</div>`;
  else if (s.type === "code") body = `<div class="body"><div class="kicker">${esc(s.kicker || "")}</div><h2 style="font-size:92px">${rich(s.title)}</h2><pre class="code">${esc(s.code).replace(/&lt;(\/?)([ksc])>/g, (m, c, t) => (c ? "</span>" : `<span class="${t}">`))}</pre></div>`;
  else body = `<div class="body"><div class="num">${esc(s.label)}</div><h2>${rich(s.title)}</h2><p class="lead">${rich(s.body)}</p>${s.tell ? `<div class="tell">${rich(s.tell)}</div>` : ""}</div>`;
  return `<section class="slide ${s.theme || "dark"}" id="s${i}">${big ? `<div class="big">${String(i + 1).padStart(2, "0")}</div>` : ""}${top}${body}${bot}</section>`;
}

const html = `<!doctype html><meta charset="utf-8"><link rel="stylesheet" href="${pathToFileURL(css).href}"><link rel="stylesheet" href="${pathToFileURL(common).href}"><body>${spec.slides.map(slide).join("")}`;
const tmp = path.resolve(outDir, "_slides.html");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(tmp, html);

const browser = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: true, args: ["--allow-file-access-from-files"] });
const page = await browser.newPage();
await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(tmp).href, { waitUntil: "networkidle0" });
await page.evaluate(() => document.fonts.ready);
const problems = await page.evaluate(() => {
  const out = [];
  document.querySelectorAll(".slide").forEach((sl, i) => {
    const r = sl.getBoundingClientRect(), b = sl.querySelector(".body"), bot = sl.querySelector(".bot"), br = bot ? bot.getBoundingClientRect() : null;
    if (b && b.scrollHeight > b.clientHeight + 2) out.push(`slide ${i + 1}: content taller than its area by ${b.scrollHeight - b.clientHeight}px`);
    sl.querySelectorAll(".body *").forEach((el) => { const e = el.getBoundingClientRect(); if (e.width && (e.right > r.right - 40 || e.left < r.left + 40)) out.push(`slide ${i + 1}: <${el.tagName.toLowerCase()}> pokes past the side margin`); if (br && e.height && e.bottom > br.top - 6 && !el.closest(".big") && !el.classList.contains("tag")) out.push(`slide ${i + 1}: <${el.tagName.toLowerCase()}> runs into the footer`); });
  });
  return [...new Set(out)];
});
for (let i = 0; i < N; i++) {
  const el = await page.$("#s" + i);
  await el.screenshot({ path: path.join(outDir, `slide-${String(i + 1).padStart(2, "0")}.png`) });
}
await browser.close();
console.log(`rendered ${N} slides -> ${outDir}`);
if (problems.length) { console.log("LAYOUT WARNINGS:\n  " + problems.join("\n  ")); process.exitCode = 3; } else console.log("layout check: clean");
