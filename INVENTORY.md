# Skill inventory (as of 2026-10-07)

## A. Disojo skills (written by us, in this repo)
| Skill | What it is |
|---|---|
| disojo-client-playbook | START HERE for any new website client: ordered steps chaining the others |
| disojo-client-intake | Asset request message, asset inventory script, brand brief |
| disojo-site-archetypes | Nine audited reference sites, decision tree, weight budgets |
| disojo-site-starter | Runnable Vite+React starter driven by one brand config; smoke tests |
| disojo-motion-recipes | Tested effects: split words, counters, wave dividers, stickers, scrubbed video, pinned row, consent card |
| disojo-launch-checklist | Pre-launch gate, Lighthouse runner, image optimiser, handover |
| disojo-scroll-site-rebuild | The Postcards recipe: prompts, asset scripts, gotchas, original templates |
| disojo-3d-product-site | Real GLB/three.js product sites (older skill) |
| disojo-guardrails | Code quality gate for Disojo builds (older skill) |

## B. Other skills installed in ~/.claude/skills (in this repo; original source not recorded here)
3d-web-experience, anti-slop-design, brand-discovery, brand-voice, browser-qa, click-path-audit, context-budget, contract-first,
database-migrations, design-taste-frontend, emil-design-eng, error-handling, frontend-slides, gpt-taste, high-end-visual-design,
make-interfaces-feel-better, motion-advanced, motion-foundations, motion-patterns, no-ai-slop, react-patterns, react-testing,
redesign-existing-projects, review-animations, safety-guard, santa-method, search-first, strategic-compact, ui-demo, ui-ux-pro-max,
verification-loop. (`learned/` is an empty folder.)

## C. Other skill sets (now ALSO in this repo as of the second push; also re-installable)
- **vercel-plugin 0.30.0** (installed from the Vercel plugin repo on GitHub): bootstrap, deploy, env, marketplace, status, ai-gateway, ai-sdk,
  auth, chat-sdk, deployments-cicd, env-vars, knowledge-update, next-cache-components, next-upgrade, nextjs, react-best-practices,
  routing-middleware, runtime-cache, shadcn, turbopack, vercel-agent, vercel-cli, vercel-functions, vercel-sandbox, vercel-storage,
  verification, workflow. Lives in `~/.claude/plugins/cache/`; copied to `vercel-plugin-0.30.0/` (42 SKILL.md files found).
- **Anthropic skills that come with the Claude app/account** (copied to `anthropic-app-skills/`, 17 unique): docs, docx, pdf, pptx, xlsx,
  google-workspace, schedule, skill-creator, morning, setup-claude, explain-usage, consolidate-memory, import-memory, setup-cowork,
  sales-case-simulation, cowork-plugin-customizer, create-cowork-plugin.
- **Built into Claude Code** (not files; names and descriptions recorded in `builtin-skills.md`): dataviz, artifact-design, artifact-diagramming, artifact-capabilities, update-config, keybindings-help,
  code-review, simplify, fewer-permission-prompts, loop, schedule, claude-api, run, init, security-review, plugin-authoring.

## Remote backup
Pushed to a PRIVATE GitHub repo: `scarlettelikesmen-dotcom/disojo-skills-agency` (branch `main`). Push again after any skill change:
`cd "~/Desktop/DISOJO SOLUTIONS/skills" && rsync -a --exclude node_modules ~/.claude/skills/ user-skills/ && git add -A && git commit -m "update" && git push`

## Postcards site
Pushed (both branches) to the private repo `disojo-solutions/postcards-perfumes-web` on the agency GitHub account.

## Memory notes
Snapshot in the skill `disojo-memory-backup` (`user-skills/disojo-memory-backup/references/memory/`). Refresh with `bash ~/.claude/skills/disojo-memory-backup/scripts/backup_memory.sh`.

## D. Things that are NOT backed up anywhere except this Mac
- `~/.claude/CLAUDE.md` (master context) and `~/.claude/master-context-for-claude-ai.md` (deliberately not committed here)
- Postcards original source footage and generated images in Downloads
