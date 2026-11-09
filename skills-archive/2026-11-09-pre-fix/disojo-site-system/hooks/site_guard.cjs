#!/usr/bin/env node
// Audit-while-working guard for Disojo sites. Two hook modes, wired in ~/.claude/settings.json:
//   node site_guard.cjs track   (PostToolUse on Edit|Write|MultiEdit)  records which site project a session touched
//   node site_guard.cjs stop    (Stop)  blocks ending the turn while a touched project has edits newer than its last
//                               premium gate run, and says exactly what to run.
// The gate (scripts/premium_gate.cjs) stamps the project when it runs; `premium_gate.cjs --skip <root> "<reason>"`
// stamps it with a stated reason when a gate genuinely does not apply (copy-only change already checked, etc.).
const fs = require('fs'); const path = require('path'); const os = require('os');
const STATE = path.join(os.homedir(), '.claude', 'state', 'site-guard');
const WATCH = [path.join(os.homedir(), 'Desktop', 'disojo-mix'), path.join(os.homedir(), 'Desktop', 'disojo-hybrid'), path.join(os.homedir(), 'Desktop', 'websites ARCHIVE')];
const EXT = /\.(astro|css|scss|html|jsx?|tsx?|mjs|cjs|vue|svelte|json)$/i;
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
const read = () => { try { return JSON.parse(fs.readFileSync(0, 'utf8') || '{}'); } catch (e) { return {}; } };
const mode = process.argv[2];
const input = read();
fs.mkdirSync(STATE, { recursive: true });
const sessFile = path.join(STATE, `session-${input.session_id || 'x'}.json`);
const sess = (() => { try { return JSON.parse(fs.readFileSync(sessFile, 'utf8')); } catch (e) { return {}; } })();

if (mode === 'track') {
  const ti = input.tool_input || {};
  const file = ti.file_path || ti.path || '';
  if (!file || !EXT.test(file) || IGNORE.test(file) || !WATCH.some(w => file.startsWith(w))) process.exit(0);
  const root = findRoot(file); if (!root) process.exit(0);
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
    reason: `Site files changed since the last premium gate run:\n- ${due.join('\n- ')}\n` +
      `Before ending the turn: run NODE_PATH=$HOME/.disojo-tools/node_modules node "${gate}" <root> <local url> [paths...] , look at the screens it writes, fix every FAIL, and report the numbers. ` +
      `If the gate truly does not apply (no visible change, or already verified this turn with screenshots), run node "${gate}" --skip <root> "<one-line reason>" and say so to Tejjo.`
  }));
  process.exit(0);
}
