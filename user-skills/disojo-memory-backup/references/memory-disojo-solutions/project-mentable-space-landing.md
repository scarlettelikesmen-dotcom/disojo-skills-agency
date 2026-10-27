---
name: project-mentable-space-landing
description: "Mentable pre-registration site, LIVE on www.mentable.space (v2 \"held gap\"); state, deploy recipe, decisions, and the approved NEXT PASS in progress"
metadata:
  node_type: memory
  type: project
  originSessionId: 2b056b99-c661-4dfb-9342-4067ab1e7d93
  modified: 2026-10-27T17:07:25.764Z
---

Client: Mentable (trading-discipline app; founder Parag Mehta, Founder and CTO; pre-seed funded, figure NOT shown). Client paid USD 17,000 (private, never on a page). Formerly called Tradriv: never use that name.

## Current live state (2026-10-27)
- **LIVE: https://www.mentable.space** (apex 308 -> www). Code `~/Desktop/websites ARCHIVE/mentable-space/site-v2` (Vite, vanilla JS, GSAP 3.15 + ScrollTrigger, Lenis 1.3; fonts Archivo variable + IBM Plex Mono 500, both OFL). README there has everything.
- **Deploy recipe:** `npx vite build` in site-v2, then copy `dist/.` into `/tmp/mt-deploy` (linked to Vercel project mentable-space-preview, team scarlettelikesmen-dotcoms-projects; keep its `.vercel/` and `vercel.json` = cache headers only, NO noindex), then `vercel deploy --prod --yes`. Private preview first = `vercel deploy --yes` (login-protected URL). If /tmp was wiped: `vercel link` a new folder to project mentable-space-preview. Verify after: curl headers, assets 200, tour at 1512 + 390, Lighthouse via `~/.claude/skills/disojo-premium-site-method/scripts/lighthouse_summary.sh`.
- Screenshot/test scripts: `site-v2/qa/tour.mjs` (run from `~/Desktop/websites ARCHIVE/print-elements-multipage`, which has puppeteer-core). Local serve: `npx -y serve -s dist -l 5322`.
- Live Lighthouse: mobile 97/100/100/100, desktop 100s.

## Decisions (final, do not re-raise)
- Logo = `mentable-space/branding/logo-05` ("the held gap": heavy caps, mint downward triangle in the M valley), kept EXACTLY as is. Site accent = logo mint #3DDC97 (not app #5edeac). Big hero/lock/reserve M = clean geometric copy of the logo M (same shape); logo files untouched.
- Concept A "the held gap": hero = the M filling the screen, HUGE uppercase headline in the left stem (Tejjo prefers it big), form in right stem; scroll zooms into the triangle (intent screen inside); desk lock = the M's gap closes into a solid block "DESK IS CLOSED."; reserve = M opens again.
- Founder quote = Parag's 3-paragraph text supplied by Tejjo ("Most trading software is built around charts..."), only "Im" -> "I'm". Founder photo = `~/Desktop/monpune.png` on white (452 px, soft): Tejjo will supply better later.
- Collector: FormSubmit to projects@disojostudio.com; inbox change LATER (Tejjo said). Activation pending.
- App screens: preview build, sample data, labelled; cropped so no money figures show.

## NEXT PASS (approved 2026-10-27, in progress): "build this, show me something insane"
Plan: `mentable-space/brief/AUDIT-AND-NEXT-PASS-2026-10-27.md` (scores: interaction layer 3/10 = biggest gap). Code study data: `mentable-space/brief/code-study/*.json`, `hover-timelines.json`.
Tejjo authorised: (1) find the Mentable APP project on this laptop, run it in the iOS Simulator, (2) change the app code to the NEW logo (logo-05) everywhere in the app, (3) record short screen recordings from the sim (intent logging, gate clearing, desk lock) and re-export screens with the new logo, (4) build the full pass on the site: Mentable's own motion tokens (--seal / --settle / --release, no bounce), interaction library (link roll + mint triangle, button fill-from-top + seal press, field focus draw, chips fill, index rows with sibling dim + screen preview, phone hover, triangle cursor on fine pointers, focus-visible mirrors), scroll grammar (line-mask reveals, phones settle, in-frame drift, section hand-offs, grain on dark), middle-section redesigns (03 Outcome three columns sliding apart, 04 evidence wall-scale line + big sample numbers, 06 interactive index), 404 "desk closed", tab-title state, regenerate OG, (5) keep auditing (side by side with references, frame checks, Lighthouse >= 95, reduced motion), (6) deploy to production and show the deployed version (Tejjo asked to see the deployed version = go).
Rules: no-copy law (no reference curves/timings/markup/signature moves); no layered slower-previous-section scroll (rejected on Ascender); no marquee, no bounce, no long preloader; commit app code only if asked (edit is authorised).
App search had just started (find ~ for *mentable*/*tradriv* dirs) when compaction was requested.

Related: [[feedback-premium-build-process]], [[project-high-ticket-branding-offer]]
