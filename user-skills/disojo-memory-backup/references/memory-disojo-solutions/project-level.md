---
name: project-level
description: "Level (Tejjo's trading playbook product) restarted clean 2026-11-17 via the brand-building skills; strategy, ink mark and Nippo type locked; colour next"
metadata:
  node_type: memory
  type: project
  originSessionId: ea15c3db-432f-48e4-ab32-232051318f19
  modified: 2026-11-17T09:57:23.014Z
---

Level, Tejjo's own trading product (levelplaybook.app, app at app.levelplaybook.app). Restarted from a clean slate on 2026-11-17, working through the brand-building skills in order.

Locked so far (all in `~/Desktop/DISOJO SOLUTIONS/level/`):
- Brand context: `.agents/brand-context.md` (free forever plus two paid tiers, launch about mid-Feb 2027, Liquid is the only competitor).
- Strategy: `strategy/brand-strategy.md`, confirmed ("everything sounds good"). Positioning: plan first, journal against the plan. Tagline pick "Hold your level."
- Mark: organic ink ring, sheet 1 number 4 (`identity/marks/`). Pixel-exact only: grain is the whole point, never trace or smooth it. Source is 347x280 px.
- Display type: Nippo, Fontshare, ITF FFL (`brand/fonts/`). Do not subset or convert the font files.
- Source of truth: `brand/tokens.json`.

**Why:** Tejjo rejected geometric letter marks and similar-looking grotesks the same day. They want organic, intentional, one thing at a time, and "thick and smooth" type.

2026-11-17 later: brand board at :4610/brand (`identity/board/`), full guide v1 at `brand/BRAND-GUIDE.md` (locked vs PROPOSED vs TODO). Waiting on Tejjo: colour A/B/C/D (C proposed: Paper + black ink, amber only for lines), Nippo for numbers too (Tejjo locked it: one typeface only). Then the Astro pre-register page.

2026-11-17 site: idea 1 'Through the ring' built at level/site index (:4610). Light is LOCKED for site and product (Paper ground, black ink). Amber REJECTED ("disgusting yellow lines"), no accent until Tejjo picks. Paper as a METAPHOR for the site is rejected (cringe), light colour is not.

**How to apply:** Next step is colour, tested against the mark and Nippo. Then voice and messaging, then the Astro site (`level/site`, specimen at :4610/type via launch config "level-type-specimen"). "Make traders profitable" is internal intent only, never public copy. See [[reference-verified-claims]].

## Site deploy (2026-11-17, Tejjo said "deploy")
- levelplaybook.app + www are aliased to Vercel project `level-demo` (app.levelplaybook.app is a separate project `levelplaybook-app`, untouched).
- Recipe: `cd level/site && npx astro build`, rsync dist to `level/deploy/level-demo/` excluding /brand, /type and the specimen fonts (Apfel, Necto, Ronzino), vercel.json with noindex header, then `vercel deploy --prod --yes --scope scarlettelikesmen-dotcoms-projects` from that folder (already linked).
- Live is noindex (meta + header) because TODO text is on the pages; the pre-register form saves nothing. Previous live (older Level page, mentioned prop accounts) stays in Vercel history for rollback.

## App glass test (2026-11-17)
- App work lives in ~/Desktop/level-app (Expo web). Localhost: launch config "level-app-web", http://localhost:8091. Metro did not pick up edits live once; restart the preview if a change does not show.
- Home route = glass test screen (src/glass/Today.web.tsx, Glass.web.tsx, lens.ts, Backgrounds.web.tsx), stand-in data labelled. Old spike at /spike.
- Deploy to app.levelplaybook.app only on "deploy": vercel build --prod, then vercel deploy --prebuilt --prod from ~/Desktop/level-app.
- Shots: DISOJO SOLUTIONS/level/app/shots. Open problem: grey text on clear glass vanishes over dark backgrounds (Ink, Noise).

## Tiers (2026-11-18)
Tier names LOCKED by Tejjo: **Preflight** (free forever), **Takeoff**, **Altitude** (paid, 12.99 / 28.99 with the 36% code). Picked after four rounds of options; Tejjo kept asking "more creative" and then chose the aviation set (checklist before the trade = plan first). Free tier is never named "Free". Next: every feature, sorted into the three tiers. Free core must be enough to learn and keep a plan.

## Features and AI budget (2026-11-18)
- Feature lists v2 by tier in `level/strategy/features.md`, market study in `level/research/journals/` (Liquid already does plan-first; Level wins on auto-checked rules, locked plans, courses tied to setups, one-trade-one-record, AI from 12.99, replay, native iPhone).
- Takeoff AI budget: $1 per user per month on Claude Haiku 5.5 (Tejjo; worked out 2026-11-17). Model prices in `_archive/level-before-clean-slate-2026-11-17/level-plan-and-research/plan/MODELS.md` (Haiku 5.5 $0.10 in / $0.01 cached / $0.50 out per 1M, read 2026-11-15). Altitude budget $3 per user per month (Tejjo 2026-11-18), no daily limit. Takeoff gets a daily AI limit so the $1 cannot be spent in one day (LOCKED 2026-11-18: at most 1/15 of the month a day, about $0.07, counted in cost).

## 2026-11-18 full build
- Every feature in strategy/features.md built as a local-first web app in ~/Desktop/level-app (Expo web, IndexedDB). Glass test screen deleted. Status and not-connected list in level-app/docs/BUILD.md.
- Not committed yet (last commit d01e86a on level-playbook). Ask before committing or pushing.
- Shots: level/app/shots/full (20 routes at 1512 and 390). Preview: launch config level-app-web, port 8091; restart it if edits don't show (Metro served stale code twice).
- Open for Tejjo: share card contents, prop firm names in-app, AI taste in Preflight, currency/billing, Preflight setups limit (3 is a guess), lesson setup drafts, sample data.
- 2026-11-18: Log panel has three modes on top, Level (plain words, parsed on device; AI reading via coach task 'log' on Takeoff+), Simple (buttons), Advanced (every field). Choice remembered in settings.logMode. Not committed yet.
- 2026-11-18: page scroll was locked (Expo web reset sets body overflow hidden); fixed in ui.web.tsx. Shots only capture the first screen, so test scrolling by hand. Voice: web/speech.ts (Web Speech, Chrome/Edge/Safari only; the Claude browser pane blocks the mic). Automated Chrome hears speech but returns no words from a fake mic, so real-voice test needs Tejjo in real Chrome.
- 2026-11-18: run the Level dev server in a Terminal tab (npx expo start --web --port 8091 in level-app/apps/app), not preview_start: the pane-owned server is stopped by the app, and the old launch config's CI=1 turned off file watching (removed).

## 2026-11-18 polish pass ("do everything")
- Content cards are solid frosted sheets; glass only on floating bars. Labels 12px. Money and R coloured with sign() through --up/--down.
- Colour sets ink/a/b/c in ui.web.tsx; test switch in Settings ("Gain and loss colour (test, not picked yet)"). Default stays ink until Tejjo picks.
- Journal leads with the latest day's result + running total line; calendar cells shaded by result; PriceLadder on the trade page (stop, entry, exit, target, worst/best).
- Shots: level/app/shots/compare (before-after, colours-*). Nothing committed since ace97a6.
