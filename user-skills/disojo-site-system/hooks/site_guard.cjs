#!/usr/bin/env node
// Guard for Disojo sites. Three hook modes, wired in ~/.claude/settings.json:
//   node site_guard.cjs pre     (PreToolUse on Edit|Write|MultiEdit|SendUserFile)  blocks design files until Tejjo has picked an
//                               idea (brief/IDEA.md, line "PICKED BY TEJJO:"), and blocks sending design images without a fresh
//                               side-by-side sheet. Cannot prove Tejjo said it; does not see files made through Bash.
//   node site_guard.cjs track   (PostToolUse on Edit|Write|MultiEdit)  records which site project a session touched
//   node site_guard.cjs stop    (Stop)  blocks ending the turn while a touched project has edits newer than its last
//                               premium gate run, and says exactly what to run.
// The gate (scripts/premium_gate.cjs) stamps the project when it runs; `premium_gate.cjs --skip <root> "<reason>"`
// stamps it with a stated reason when a gate genuinely does not apply (copy-only change already checked, etc.).
const fs = require('fs'); const path = require('path'); const os = require('os');
const STATE = path.join(os.homedir(), '.claude', 'state', 'site-guard');
const ARCHIVE = path.join(os.homedir(), 'Desktop', 'websites ARCHIVE');
const WATCH = [path.join(os.homedir(), 'Desktop', 'disojo-mix'), path.join(os.homedir(), 'Desktop', 'disojo-hybrid'), ARCHIVE];
const CUTOFF = Date.parse('2026-11-09T00:00:00+05:30'); // projects born before this are only gated if they have a brief/IDEA.md
const EXT = /\.(astro|css|scss|html|jsx?|tsx?|mjs|cjs|vue|svelte|json)$/i;
const DESIGN = /\.(astro|css|scss|html|svg|jsx?|tsx?|mjs|cjs|vue|svelte|json)$/i;
const IMAGE = /\.(png|jpe?g|webp|html)$/i;
const IGNORE = /(node_modules|\/dist\/|\/\.vercel\/|\/\.astro\/|\/_archive|\/research\/|\/qa\/|package(-lock)?\.json$|tsconfig\.json$)/;
const slug = r => r.replace(/[^a-z0-9]+/gi, '_').slice(-120);

function findRoot(file) {
  let d = path.dirname(file);
  while (d && d !== path.dirname(d)) {
    if (['astro.config.mjs', 'astro.config.ts', 'astro.config.js', 'vite.config.js', 'vite.config.ts', 'next.config.js', 'next.config.mjs'].some(f => fs.existsSync(path.join(d, f)))) return d;
    if (fs.existsSync(path.join(d, 'package.json')) && fs.existsSync(path.join(d, 'src'))) return d;
    d = path.dirname(d);
  }
  return null;
}
// the project is the first folder under websites ARCHIVE; disojo-mix is deliberately not gated
function projectOf(file) {
  if (!file.startsWith(ARCHIVE + path.sep)) return null;
  const parts = file.slice(ARCHIVE.length + 1).split(path.sep);
  return parts.length > 1 ? path.join(ARCHIVE, parts[0]) : null;
}
function gated(proj) {
  if (fs.existsSync(path.join(proj, 'brief', 'IDEA.md'))) return true;
  try { return fs.statSync(proj).birthtimeMs >= CUTOFF; } catch (e) { return true; } // not created yet = new project
}
function picked(proj) {
  try { return /^PICKED BY TEJJO:[ \t]*\S+/m.test(fs.readFileSync(path.join(proj, 'brief', 'IDEA.md'), 'utf8')); } catch (e) { return false; }
}
function newestSheet(dir) {
  let newest = 0;
  try {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) newest = Math.max(newest, newestSheet(p));
      else if (/^sbs-.*\.jpe?g$/i.test(e.name)) newest = Math.max(newest, fs.statSync(p).mtimeMs);
    }
  } catch (e) {}
  return newest;
}
function deny(reason) {
  process.stdout.write(JSON.stringify({ hookSpecificOutput: { hookEventName: 'PreToolUse', permissionDecision: 'deny', permissionDecisionReason: reason } }));
  process.exit(0);
}
const read = () => { try { return JSON.parse(fs.readFileSync(0, 'utf8') || '{}'); } catch (e) { return {}; } };
const mode = process.argv[2];
const input = read();
fs.mkdirSync(STATE, { recursive: true });
const sessFile = path.join(STATE, `session-${input.session_id || 'x'}.json`);
const sess = (() => { try { return JSON.parse(fs.readFileSync(sessFile, 'utf8')); } catch (e) { return {}; } })();

if (mode === 'pre') {
  const ti = input.tool_input || {};
  const noPick = proj => `No idea picked for ${path.basename(proj)}. Before any design file: list what only this client has, send Tejjo three one-sentence ideas in words (skill disojo-site-system, references/idea.md), and fill "PICKED BY TEJJO:" in ${path.join(proj, 'brief', 'IDEA.md')} only with their own words after they pick. Never fill it without them. Not a site design: fill it as "n/a - <reason>" and tell Tejjo.`;
  if (input.tool_name === 'SendUserFile') {
    for (const f of (ti.files || [])) {
      const file = path.resolve(input.cwd || process.cwd(), f); const proj = projectOf(file);
      if (!proj || !IMAGE.test(file) || /^sbs-/i.test(path.basename(file)) || /\/(assets|research)\//.test(file) || !gated(proj)) continue;
      if (!picked(proj)) deny(noPick(proj));
      const last = Math.max(0, ...Object.entries(sess).filter(([r]) => r === proj || r.startsWith(proj + path.sep)).map(([, v]) => v.last || 0));
      const sheet = newestSheet(path.join(proj, 'qa', 'sbs'));
      if (!sheet || sheet < last) deny(`No side-by-side sheet newer than the last edit in ${path.basename(proj)}. Run side_by_side.cjs ${path.join(proj, 'qa', 'sbs')} <ourUrl> <refUrl>..., fill scores.md with what they do that we do not, and send the sheet with the work. Tejjo decides who wins.`);
    }
    process.exit(0);
  }
  const file = path.resolve(input.cwd || process.cwd(), ti.file_path || ti.path || '');
  const proj = projectOf(file);
  if (proj && /\.html?$/i.test(file) && !IGNORE.test(file) && gated(proj)) deny(`Websites are built in Astro only (Tejjo, 2026-11-09). No .html files in ${path.basename(proj)}: use site/src/pages/*.astro. First screens go in site/src/pages/first/ (templates/first-screen.astro).`);
  if (proj && DESIGN.test(file) && !IGNORE.test(file) && gated(proj) && !picked(proj)) deny(noPick(proj));
  process.exit(0);
}

if (mode === 'track') {
  const ti = input.tool_input || {};
  const file = ti.file_path || ti.path || '';
  if (!file || !EXT.test(file) || IGNORE.test(file) || !WATCH.some(w => file.startsWith(w))) process.exit(0);
  // hand-built pages have no astro root: count their html and css against the project folder
  const root = findRoot(file) || (/\.(html|css)$/i.test(file) && projectOf(file)); if (!root) process.exit(0);
  sess[root] = { last: Date.now(), files: [...new Set([...(sess[root]?.files || []), path.relative(root, file)])].slice(-30) };
  fs.writeFileSync(sessFile, JSON.stringify(sess));
  process.exit(0);
}

if (mode === 'stop') {
  if (input.stop_hook_active) process.exit(0); // never loop: one reminder per stop
  const due = [];
  for (const [root, v] of Object.entries(sess)) {
    let stamp = 0; try { stamp = JSON.parse(fs.readFileSync(path.join(STATE, `gate-${slug(root)}.json`), 'utf8')).at; } catch (e) {}
    if (v.last > stamp) due.push(`${root} (edited: ${v.files.slice(-6).join(', ')})`);
  }
  if (!due.length) process.exit(0);
  const gate = path.join(__dirname, '..', 'scripts', 'premium_gate.cjs');
  process.stdout.write(JSON.stringify({
    decision: 'block',
    reason: `Site files changed since the last defect check:\n- ${due.join('\n- ')}\n` +
      `Before ending the turn: run NODE_PATH=$HOME/.disojo-tools/node_modules node "${gate}" <root> <local url> [paths...] , look at the screens it writes, fix every FAIL, and report the numbers. The gate is a defect check and says nothing about quality: never present 0 FAIL as progress. ` +
      `If the gate truly does not apply (no visible change, or already verified this turn with screenshots), run node "${gate}" --skip <root> "<one-line reason>" and say so to Tejjo.`
  }));
  process.exit(0);
}
