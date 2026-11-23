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

## 2026-11-22 direction (Tejjo)
- Plan: match everything Liquid has and do it better (sync glitch etc), plus exclusive features for a trader's everyday life, plus a concept-aware AI coach (knows e.g. SMT vs true manipulation; built on a concept library in Tejjo's definitions + journal context + a question set that scores it). Ultra plan coming, heavy build.
- Tone: Tejjo wants delusional optimism, no negativity about the product. Frame hard parts as how we win; still flag real breakers (wrong answers, buy/sell calls) in one line with the fix.
- Liquid launched September 2026 and had 6,600+ sign-ups by late November (Tejjo: sign-ups, not all active, a fraction paying).
- Pending from Tejjo: "go" on research; whose definitions the AI follows; what "true manipulation" means to them.
- 2026-11-22 research done: level/research/2026-11-22/00-FINDINGS.md (+01-05). Key: Rithmic is the open door (ProjectX closed to outside firms Feb 2026; Liquid lacks Rithmic); nobody has concept-aware AI or plan-vs-trade checks; top complaints = wrong/duplicate sync, support, billing. Reddit/futures.io unreadable by my tools. Naming prop firms inside the app is fine (Tejjo).
- 2026-11-22 plan written: level/research/2026-11-22/06-PLAN-firms-and-live-accounts.md. Tejjo wants every trusted firm and as many live accounts as possible. Two engines: Firm Library (trust bar, universe list, versioned rules schema, AI extract + human confirm + daily watcher, affiliate -> exclusive codes -> partnerships -> firm portal) and Connection Layer (one connector per platform; order Tradovate, TopstepX, Rithmic, MT4/5, cTrader/DXtrade/TradeLocker/Match-Trader, IBKR/Schwab/crypto; CSV always). Needs a server (sign-in, Postgres, workers, secrets). Open: trust bar, legal entity, server go, scope futures-first or all markets.
- BACKEND EXISTS (Tejjo was angry I forgot, 2026-11-22): Supabase LEVEL-PLAYBOOK linked + migration pushed; Vercel levelplaybook-app; domain app.levelplaybook.app behind password wall; api/coach.mjs. See level-app/docs/STACK.md. Always read STACK.md before proposing infrastructure.
- 2026-11-22 decisions: ALL markets from the start (futures, forex/CFD, crypto, stocks). Tejjo applies to Tradovate, Rithmic and affiliates through a new Udyam-registered company named LEVEL. Next: Tejjo's biggest question is how we crack the UI and readability.

## 2026-11-22 Liquid walk-through done
Walked Liquid hands-on in Tejjo's account (look only): research/2026-11-22/07-liquid-walkthrough.md. Liquid = three columns + 10 top links + rails on every screen, 9-12.5px grey type, 12-16 sizes a screen, card grids, a social feed bolted on, affiliate firm cards, Showcase 404s. Level = one question per screen, big tabular numbers, no rails, no feed, firm as live rules. Readability rules + three looks (A Ledger, B Instrument, C Session) written; my pick A with B's gauge for room left. Awaiting Tejjo's pick + colour set. Phone width of Liquid not measured.

## 2026-11-23 Look test page
Tejjo did not want to pick a look from words; built /lab?look=ledger|instrument|session (src/web/Lab.web.tsx, route src/app/lab.tsx, _layout.web.tsx skips the frame for /lab). Same Today "during the session" moment (10:40, a sample losing day inside the rules), own copy of sample data, ink only. Server: preview level-app-web :8091. My read after seeing them: C Session reads best (headline "Off the plan." + vertical timeline on phone was clearer than I predicted), B's big room gauge is the fastest number, A is tidy but report-like. Suggested blend: C headline + B room gauge, A's ruled table for after the close. Awaiting Tejjo's verdict. Not committed.
2026-11-23 verdict on /lab: all three looks REJECTED ("so unpleasant to look at, readiness is fucked"). Next: get 2-3 app references Tejjo enjoys before any more pixels; question whether Nippo Bold at display sizes is the problem.
2026-11-23: zoom out (html zoom .8 desktop/.88 phone in ui.web.tsx CSS) + home (Today.web.tsx) rewritten calmer: status sentence, 40px medium numbers, sentence-case labels, last-day line, human breach line. Awaiting Tejjo's look. Not committed.
2026-11-23 v3 home: Weather layout (hero = room left today, thin system face, grouped lists), system face via --ui with ?face=nippo test, brief + system in level/app/DESIGN-SYSTEM.md. Shell chrome still Nippo bold. Awaiting verdict.

- 2026-11-23 late: home v3 widened to full desktop (Today max 1680, Shell main 1740 on /), This week summary, sessions strip, 3 columns at >=1200, empty states, hero = time to NY open when no prop account and no trades, shell chrome in var(--ui) with Level wordmark in Nippo. Tejjo: "damn this is great work claude". Not committed. Empty-data check trick: open 127.0.0.1:8091 (separate IndexedDB).

- 2026-11-23 late: "do all sections now". Whole app moved to the v1 system through the kit (ui.web.tsx): body in var(--ui), .label sentence case 13/500 soft, .num 300, Stat big 200 thin, page titles 40/32, Card radius 20, Seg = light thumb on grey, pills sentence case, no fontWeight 700 anywhere except the Nippo wordmark. Journal and Review heroes moved off cards onto the page (112/76 thin). Accounts uses breachLine and "14 of 5". Shell scrolls to top on page change (Back too, for now). Other pages max 1480. Not committed. Untested: real phone, Safari.

- 2026-11-23 late: tab bar is now Mac-style end to end (Tejjo asked): Shell NAV in 5 groups (Today Plan Goals | Journal Accounts Import | Review | Learn Practice Playbook Notes Boards | Coach Settings), dividers, sliding light pill, + at the end; phone scrolls sideways and centres the active tab. Community left out on purpose (brief: no social feed), told Tejjo. html overflow-x hidden added: glass halo on edge buttons was widening the phone page. Not committed.

- 2026-11-23 late: tab bar got SF-style icons (Shell TAB_ICON, 20 grid, 1.6 stroke), Today renamed Dashboard (Tejjo). Bug: never use 100vw for widths here, html zoom .8 makes 100vw narrower than the real screen in Chrome (bar stopped 400px short on Tejjo 2000px screen); removed.

- 2026-11-23 guides: nine beginner guides inside Learn (start, futures, prop, risk, sizing, plan, review, mind, words) in apps/app/src/web/guides.ts; list card at the top of /learn, reader at /guide/[id] (GuidePage in Learn.web.tsx, sticky contents column on wide). Written by Claude from checkable facts only (contract values, hours, arithmetic), no firm names or firm numbers, no profit claims. DRAFT: Tejjo must read and check before launch. Verified 1512 and 375; not committed.
- 2026-11-23 firm rules BUILT as draft (/firms list split Futures / Forex & CFD, /firms/[id], data firms.ts, 34 of 35 with rules, 11 partial, linked from Learn and the prop guide): firm rules FAQ inside the prop guide, all rules of every firm in one place, crawled from the firms' own sites. Spec and open questions in level-app/docs/FIRM-RULES.md (source link + checked date per rule, weekly re-crawl with diff, summaries not copied text, feeds Accounts). Firm list: 35 names copied from Liquid /propfirm (12 futures, 23 other); naming firms OK (Tejjo 2026-11-23).
