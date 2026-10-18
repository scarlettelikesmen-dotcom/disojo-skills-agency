---
name: creator-research-to-copy
description: The full method used on 2026-10-18 to research creators on Instagram (read-only, Tejjomay's logged-in session), turn what works into a per-account copywriting system, and ship a report and a designed page per account. Use when Tejjomay asks to "research creators like X", "study how they write their reels", "build copywriting for <account>", refresh a content strategy, or add a new account. Holds the safe IG research snippets, the analysis framework, the report template and generator, and indexes the three account copy skills (abelkapoor-copywriting, codewithabel-copywriting, disojo-copywriting). Accounts stay separate: never merge their copy.
---

# Creator research -> copy system -> report (one account at a time)

## What exists (2026-10-18)
| Account | Copy skill | Report (md) | Page (private artifact) |
|---|---|---|---|
| @abelkapoor (trading) | `abelkapoor-copywriting` | `reports/trading-content-report-2026-10-18.md` | https://claude.ai/artifact/DMHvs7T75xVzAUriGmuDps |
| @codewithabel | `codewithabel-copywriting` | `reports/codewithabel-content-report-2026-10-18.md` | https://claude.ai/artifact/V46NBJBrPxctLgcuFHNZfZ |
| @disojo.solutions | `disojo-copywriting` | `reports/disojo-content-report-2026-10-18.md` | https://claude.ai/artifact/BndF73ouYzRtrb7z3xACSe |
Launch plan (gates for paid communities, Amber King model): `reports/launch-plan-2026-10-18.md`, page https://claude.ai/artifact/Rmt3y8fnXo1A93yUjgnrFD. Amber teardown: `research/promptedbyamber-teardown.md`.
Copies of the reports and raw research notes are in this skill (`reports/`, `research/`); the live ones are in `~/Desktop/DISOJO SOLUTIONS/content-hub/reports` and `research/copy-2026-10-18/`. Every report ends with "What I need from you": those TO CONFIRM items are still open until Tejjomay answers.

## Step 1. Find the right creators (do not guess handles)
1. Seed from someone Tejjomay trusts: open their `/following/` dialog and collect handles (Evan's 44 follows gave most trading peers).
2. Keyword search pages: `instagram.com/explore/search/keyword/?q=<terms>` (e.g. "ict trading nq", "build in public saas", "vibe coding", "automation for small business", "web design agency"). Collect post ids, then read owner/likes/caption via og meta (`scripts/ig_snippets.js` #2-#3).
3. Keep only accounts whose own bio/profile states a tier-1 place, or mark them "location unverified". Note who they sell to (owners vs freelancers matters for Disojo).

## Step 2. Read them like an editor (read-only)
- Grid pass per account: `/<handle>/reels/`, wait 7 s, scroll, 2-3 screenshots at scale 0.75: read each cover's on-screen hook and its view count. Header via get_page_text.
- Top reels: open the reel, zoom the frame to read the on-screen line; caption + top comments via get_page_text (comments show what the audience values).
- Safety: never call `/api/v1/*` (429 once); space loads, batch fetches <= 10 per call; don't like/follow/comment/DM; highlights only with Tejjomay's OK (they show a "viewed" notice).
- Write raw notes as you go: `research/<topic>-raw.md` with hook text + numbers + one-line lesson per account, then a "cross-account patterns" list.

## Step 3. Analyse with this framework
For each account and the set: (a) reach engine vs trust engine (which formats spike, which convert); (b) hook formulas with the exact words and numbers; (c) series and catchphrases; (d) how proof is shown (ambient vs bragged); (e) CTA/funnel (keyword comments, free community, link); (f) what is banned for us (claims, lifestyle-as-income, wrong audience). Always separate "big numbers" from "right audience".

## Step 4. Build the copy skill for the account
Sections (see the three existing skills as the template): one-line frame; what the research proved (with numbers); signature language/series; 14 hook formulas table (formula, source, example in his true material, engine); script shapes; captions/CTA ladder/bio; claims or compliance filter; QA gate. Examples must be true or marked TO CONFIRM. Respect the account's guards (trading compliance, Disojo verified claims, codewithabel truth filter, two worlds never cross).

## Step 5. Write the report, then the page
Report sections: 1 what I studied (table), 2 what works, 3 unfair advantage or key insight, 4 framing rules, 5 content mix (3/day A/B/C), 6 six-month plan (table), 7 copy kit (hooks list under a heading containing "hooks" so the page adds copy buttons; scripts; carousels; bio/pins/highlights; replies), 8 what I need from you, 9 measurement, sources.
Page: `python3 scripts/build_reports.py` (edit BRANDS for a new account: its own fonts, tokens and hero in the account's locked identity; light+dark tokens). Screenshot once with headless Chrome, then publish each page as its own private artifact.

## Step 6. Record
Append DECISIONS.md and MASTER-CONTEXT.md, update the memory note `copywriting-systems`, add the skill to the CLAUDE.md pointer line. Nothing is posted; Tejjomay approves hooks/takes before filming.
