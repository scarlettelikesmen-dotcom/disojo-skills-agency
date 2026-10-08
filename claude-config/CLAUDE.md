# Master context: Tejjomay / Disojo

Loaded at the start of every Claude Code session, in every project. Keep it short and true; update it when facts change.
(Pronouns not stated: use Tejjomay's name or "they".)

## Who and what
- **Tejjomay**, founder of **Disojo** (disojo.in), a software studio in Mumbai. Leads every project personally.
- Disojo builds "the software behind successful businesses" for **owner-run businesses** (not enterprise/VC startups): websites, web apps and
  portals, CRMs/invoicing/internal tools, mobile apps, automation.
- Positioning: **discovery-first** ("find where the work leaks" before building: WhatsApp bookings, spreadsheet fee tracking, retyped documents,
  tribal knowledge). Build in stages with client visibility, no big reveal at the end. Stay on after launch.
- Team: Tejjomay leads; a client has mentioned Divyansh as part of the team. Client comms run through each client's own portal.
- Past/sample work (as listed on disojo.in): KDC (student/parent/tutor booking and fees), Postcards Perfumes (D2C perfume site; the site
  credits a quiz with +42% sample-pack sales, as the client reported), Tradriv (pre-revenue trading-discipline app), Sudha Mahesh Thakkar
  (turmeric exporter site), Nature's Blend (business-card scanner app).
- Email on file: tradingprops09@gmail.com (use only to identify them).

## Current goals (update as they change)
1. **Win paying website clients.** Tejjomay wants to prove they can build premium, scroll-driven brand sites like palmo, ciaoenergy, agrumeafarm,
   alche.studio, oharchitecture, then pitch clients at 10-20k deals (currency not confirmed: ask before quoting).
2. **Proof piece done:** a free rebuild of Postcards Perfumes. Live demo https://postcards-rebuild-demo.vercel.app, code in
   `~/Desktop/websites ARCHIVE/lumina-store` (branch `3d-rebuild`, remote disojo-solutions/postcards-perfumes-web). **Live on postcardsperfumes.in since 2026-10-09** (Vercel project lumina-store). Details in memory (`lumina-store-3d-rebuild`).
3. **Make everything reusable** so a new client goes: assets in, working demo the same day.
4. Original project in `~/claudeskillsthrureels`: turn saved/DM'd Instagram reels into usable skills (memory: `reels-to-skills-goal`).

## When a new website client comes up: START WITH THE SKILL `disojo-client-playbook`
It chains the rest (all in `~/.claude/skills/`): `disojo-client-intake` (asset request, inventory script, brand brief) ->
`disojo-site-archetypes` (nine audited reference sites, decision tree) -> `disojo-site-starter` (runnable project, one `brand.config.js`) ->
`disojo-motion-recipes` (tested effects) -> `disojo-launch-checklist` (pre-launch gate, Lighthouse, handover). Background and prompts:
`disojo-scroll-site-rebuild`. Real GLB/3D heroes: `disojo-3d-product-site`. Packaged goods 3D (cans/jars/bottles/boxes, label-swap kit) and how to source product 3D assets: `disojo-packaged-product-3d`. Premium non-3D brand/agency sites (reference: Ascender Media, live, Lighthouse 99/100/100/100): `disojo-premium-site-method`. Code quality gate: `disojo-guardrails`.
Do not rebuild from scratch what these already do.

## How Tejjomay wants me to work
- **Finish the whole section/feature, verify it myself, then show it.** No stream of small check-ins or "want me to...?" for obvious next steps.
- **Re-read their details before generating or building** (label wording, sizes, camera moves, copy). Wrong output costs them manual rework and patience.
- **Never invent content**: no made-up reviews, stats, offers, products, contact details. Switch the section off and say so.
- **Be direct and honest.** Say plainly what is a placeholder, AI-generated, or untested (real phones are untested so far). If a theory is
  disproved by measurement, say so and revert.
- **Every client site needs its own visual identity and flow.** Never reuse the Postcards/starter look (nav, FAQ, footer, curtain, chapters); the starter is plumbing only. See memory `feedback-unique-design-per-client`.
- Every client site footer carries "Developed by Disojo Solutions" (right side) linking to https://disojo.in (added on Ascender 2026-10-09).
- Design taste: editorial, minimal, specific copy; they dislike generic "AI slop" (clutter, badge soup, emoji icons, filler text).
- Measure before and after any optimisation. Use real screenshots, desktop and phone widths.
- Confirm before outward-facing or hard-to-reverse actions (publishing, pushing, deleting, sending). Public demo deploys have been requested
  explicitly before; do not widen scope beyond what was asked. Commit only when asked.
- **Never type credentials**; they log in themselves. Keep API keys in gitignored env files, never in chat or git; remind them to rotate any
  key pasted in chat (a Gemini key was pasted once).
- Put a git remote on every project early; so far work lives on one Mac.

## Shipped
- **Ascender Media**: flagship rebuild live on ascendermedia.in since 2026-10-09 (Vercel project social-growth-agency; rollback social-growth-agency-9pzpqpkcw). Code `~/Desktop/websites ARCHIVE/ascender-media/site` (no remote yet). Memory `project-ascender-media-rebuild`.

## Environment notes
- macOS, zsh. Project work for sites: `~/Desktop/websites ARCHIVE/`. Skills live in `~/.claude/skills`, mirrored to the private GitHub repo scarlettelikesmen-dotcom/disojo-skills-agency (working copy ~/Desktop/DISOJO SOLUTIONS/skills); Memory notes are backed up via skill `disojo-memory-backup` (run its backup_memory.sh after memory changes); CLAUDE.md and settings.json are backed up in the same repo under `claude-config/` (approved 2026-10-09); client website code is on the repo branch `archive-client-code`; recovery steps in RECOVERY.md. Postcards site: private repo disojo-solutions/postcards-perfumes-web (agency account). Two GitHub logins saved: put the username in remote URLs.
- Headless Chrome via `puppeteer-core` is the reliable way to screenshot and test (the browser pane can return blank images when hidden).
  The Claude scratchpad under `/private/tmp` is wiped on restart: keep scripts in the repo or in a skill, and reinstall `puppeteer-core` after reboot.
- Python needs a venv (system pip is blocked): `~/claudeskillsthrureels/.venv` has rembg and Pillow.
- Vercel CLI is logged in; public demos go in their own project (preview deploys under a team project are login-protected).
- AI footage tools used so far: Gemini web app (Omni 1.1 Flash video, image generation). The Veo API needs billing. Outputs carry an invisible
  SynthID mark: disclose to clients.

## Keep this file healthy
Short, factual, dated where it can go stale. Move long procedures into skills and long history into memory; this file is only the index and the rules.
