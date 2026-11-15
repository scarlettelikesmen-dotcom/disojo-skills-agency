---
name: project-level-trading-playbook
description: "Tejjo's own trading startup idea (2026-11-04): \"Level, your trading playbook\", ICT-style learning map + drills first; name, category, domains, vision doc"
metadata:
  node_type: memory
  type: project
  originSessionId: 4e567c41-ccf5-4a5c-a42f-c5d79aa67be0
  modified: 2026-11-15T16:31:37.609Z
---

**DAY ONE: 2026-11-15.** Tejjo declared 15 Nov 2026 the day Level started. All Level work (code, planning, socials) runs in ONE chat: session 4e567c41-ccf5-4a5c-a42f-c5d79aa67be0. **LOGO 2026-11-15: Tejjo made their own mark in Gemini (stacked flowing bands + a bar, white on #242122). It REPLACES Settled.** Vectorised in `branding/level-identity-2026-11/mark-2026-11-15/` (178 curves, max error 0.75 px; README there). Known limit: mush at 16 px, a simplified favicon cut awaits Tejjo. Strategy doc's waitlist date (Nov 18) and every price/target are still proposals. **RESEARCH 2026-11-15:** Tejjo asked for a plan, direction and identity before the landing page. LiquidJournal is the main benchmark ("10x better"). Part 1 (public site) is done: `level/research/liquidjournal/TEARDOWN-site.md`, plus shots/ and text/ and the crawl scripts in `level/research/`. Part 2 (inside the app) is done: `TEARDOWN-app.md` and `shots/app/`, walked on Tejjo's free account (@tejjo). Key findings: their free Study Room already does video with timestamped notes (Level v1's note part). Bar-by-bar backtesting replay is their announced next build. They have no ordered curriculum and no graded drills, which is Level's gap. They ship about two updates a day. Open question for Tejjo: stay learn-and-drill, or journal as well (recommended: no journal in v1). **PRICING DECIDED 2026-11-15 by Tejjo:**
- Free tier, plus two paid tiers.
- Mid tier: $20.29/mo list, $12.99 with a 36% code.
- Top tier: $45.29/mo list, $28.99 with a 36% code.
- Exact maths: 0.64 × list rounds to .99.
- The list price is real and charged to anyone without a code. The 36% comes through affiliate, creator and launch codes. No permanent fake "was" price.
- This reverses the earlier "no affiliates in v1" guard for creator affiliates. Prop firm deals stay out.
- Supersedes the strategy doc's $19/mo proposal.
- Still open: tier names, annual price, what each tier includes.
- **Decided 2026-11-15:**
  - Payments run on Dodo Payments (merchant of record) only.
  - Affiliate commission is 25% of what the customer pays, for the customer's first 12 months (confirmed).
  - **OVERRIDDEN later on 2026-11-15:** Tejjo wants the phone app (iOS and Android), the desktop app and the web app all launched together. Do not talk in V1/V2 terms.
  - Apple and Google billing on phones, Dodo on web and desktop.
  - Feature plan draft: `level/plan/FEATURES.md`. Loop: Learn → Drill → Plan → Trade → Review. Core is the Map plus graded Drills. Journal matches Liquid. No prop affiliate placements.
  - **Decided 2026-11-15: LIGHT MODE IS THE PRODUCT.**
    - Every screen, ad, store shot and share card is designed and shown in light.
    - Dark mode is secondary: a setting, off by default.
    - Charts must work on light.
    - UI plan: `level/plan/UI.md`. Tejjo wants to talk the look through rather than pick from A/B/C straight away.
  - Decided 2026-11-15: Tejjo alone writes the lessons and marks every drill answer. Nobody else checks. (@abelkapoor is Tejjo's own account, not another person.)
  - **Decided 2026-11-15: domains kept apart.** levelplaybook.app is the pre-register and landing site (Astro). The app lives on its own subdomain (e.g. app.levelplaybook.app, exact prefix not picked). Backend stays separate from the landing site.
  - **AI 2026-11-15:** comparison in `level/plan/MODELS.md`. Haiku 5.5 is the working choice for cheap jobs; a blind test is proposed for the Coach. Monthly AI budget ceilings per user (Tejjo): free $0.50, mid $2, top $5. **No Coach on the free tier** (Tejjo). Liquid gives no coach on free or on its mid Prestige plan, only on Apex, plus 2 free Study AI runs a week on free. Open: does free get a small taste of the Coach, and what separates mid from top.
  - **SCOPE CHANGE 2026-11-15 (Tejjo):** Level is for every trader: forex, CFD, futures and the rest, not only NQ/ES futures. Tejjo wants as many broker connections as possible. This supersedes "NQ/ES only" wherever earlier notes say it.
  - **Broker sync research 2026-11-15:**
    - Liquid has no Tradovate partnership (their own page says "Not made or endorsed by Tradovate"). It is OAuth app access, approved through the NinjaTrader Ecosystem. Developers report unanswered applications from Mar to Oct 2026, and CrossTrade claims the program is closed. CrossTrade's Partner API is a paid fallback.
    - TopstepX: the user pays for ProjectX API access ($14.50 with code topstep) and pastes their key.
    - TradeLocker: open Developer Program.
    - Rithmic: dev kit plus conformance, using the user's own login. Liquid is still "coming soon".
    - Replica Copier: a small Romanian copier that pushes fills to Liquid with a code. This is the only real partner.
    - MT5: no partnership exists. Journals use the investor password, through their own MT5 servers or MetaApi.
    - Liquid's AI runs on OpenRouter (DeepSeek).
    - Tejjo floated prop firm "money off the top", which conflicts with the locked "no prop firm deals". Asked to confirm.
  - **Logo finish 2026-11-15:** Tejjo likes Liquid's glossy liquid look but wants their own in monochrome. Of three ideas (A wet ink, too close to Liquid's hero; B clear glass, iOS 26 look; C settling surface), Tejjo picked C: the mark as a swell in a liquid surface with ripples settling, drawn only by light. The first Blender test is `branding/level-identity-2026-11/settling-c/` (heightmap.py, render.py, settling-c.blend, settling-c-black-v1.png). Tejjo rejected the all-black version ("don't like this"), then a white-on-white try, and asked for a dark scene with the mark light. Current state: `settling-c-milk-v1.png` (render.py MODE=milk WB=0.55 FR=12): white glossy mark set into black liquid with ripples. My verdict: it reads clearly but looks like white enamel or a sticker, not liquid glass yet. Tejjo then said "not good, not even high quality". The emboss approach is dead. Rebuilt as a real inflated 3D solid (Poisson inflation + marching cubes) in `branding/level-identity-2026-11/glass-light/` (solid.py, scene.py, glass-light.blend). Tejjo first asked for it light on light grey, then settled on a DARK mark on light grey (ads are light mode). Shown: `level-dark-on-light-v2.png` (MAT=black YAW=-24 CZ=1.05 TOP=5 SW=0.5 STRIP=10). Known flaws: rim facets up close (the smoothing pass did not fix them, needs a finer build); same glossy black material as Liquid's hero; left-edge notches read as dents in 3D. Proposed idea, not built: a clear glass mark with dark liquid settled inside at one flat level line. Tejjo rejected that render too ("not good"). They want the FLAT mark to look as clean as Liquid's flat mark (one heavy smooth shape, one counter), not glossy. My diagnosis: our mark has about 6 parts and narrow gaps, so it reads busy and mushes at 32 and 16 px, and no render fixes that. Evidence: `clean-2026-11-15/why-clean.png`. My own monoline redraws (`_rejected/`) looked like a worm and were not shown. I asked Tejjo whether the mark may be simplified.
  - **Connection map given in chat 2026-11-15 (proposal, nothing applied for):**
    - Six doors: open APIs or user keys (TradeLocker, Match-Trader, cTrader, TopstepX, crypto exchanges); approval needed (Tradovate via NinjaTrader Ecosystem or CrossTrade, Rithmic conformance); MT4/MT5 investor password (MetaApi first, own servers later); per-firm (DXtrade); a local bridge in the Level desktop app (NT8 add-on, MT5 terminal: idea, not verified); stocks through an aggregator such as SnapTrade (pricing unverified); file import for everything.
    - Wave 1 is open doors plus file import, with applications sent on day one. Applications go to Tejjo.
    - Open questions: which entity signs, and the prop money rule.
  - Proposed and NOT locked: yearly prices $99.99 and $229.99 with the code (list $156.23 and $359.36); tier names Level 1 / Level 2 / Level 3.
  - The affiliate code is the 36% code; codes don't stack.
- Margin per subscriber, after the fee, servers, AI caps and a 25% affiliate cut: about $7.89 of $12.99, and about $16.59 of $28.99. The chart data licence fee is still unknown.

Tejjo's own startup in the trading space, idea born 2026-11-04 after seeing liquidjournal.app (LiquidJournal, ~4,581 traders, journal + AI + prop desk + community). Tejjo felt FOMO; said Tradriv failed because they never gave it their all.

- **Name: Level. Category: playbook.** Line: "Level, your trading playbook." Decided 2026-11-04. Level = key levels + level-headed + levelling up the learning map. Own brand, NOT Psyche Society, NOT @abelkapoor.
- Rejected along the way (don't re-suggest): Psyche (as platform name), Nine Thirty, Sweep, Tape Reps, The Draw, Keel, Equili/Equilla/Equora/Aequa/Equilo (fail the "I journaled on ___ today" test: must be an everyday English word like Liquid), category "journal", "gym", "copilot". Tejjo's naming test: "I journaled on ___ today" must sound natural.
- Domains free at registry check 2026-11-04: levelplaybook.com, levelplaybook.app (level.app/.com taken). Not bought as of 2026-11-04; buying is Tejjo's. Trademark NOT checked.
- Instagram registered by Tejjo 2026-11-04: @levelplaybook.app. TikTok, X, YouTube not yet.
- Category confirmed again 2026-11-04 after a 60-option review: Playbook ("playbook is awesome"). Runner-up was Handbook.
- Vision doc (Claude Docs): https://claude.ai/artifact/DCoSVdsrm54w9sSpgxK5Ku ("Level: vision"): problem, A-to-Z vision, competitor table (LiquidJournal, TIC, The Inner Circle Traders, NQ Replay, LiquidityScan, Backtrex), v1, 6-week test, risks, names.
- Plan: v1 = ordered ICT concept map + embedded YouTube with notes + drills on real NQ/ES charts; free; Psyche Society members first. Journal, AI coach ("Level Coach", not Copilot: Microsoft), prop guide, community later. Proposed 6-week test with 50 weekly users pass mark (Tejjo to confirm).
- Guards: no "ICT" in name/logo (Huddleston), embed videos only, no affiliates/prop deals in v1, no profit claims, stay out of discipline gates/desk lock (overlaps client Mentable; talk to Parag if close), free during @abelkapoor no-selling window.
- 6-month strategy doc (written 2026-11-04, awaiting Tejjo's read): https://claude.ai/artifact/9gxvyykjrc6sk1YrLpykso ("Level: 6-month strategy", Nov 12 2026 to May 15 2027). Proposals in it: waitlist Nov 18, closed beta Dec 15 (30 users), open free beta Jan 12, 6-week test gate Feb 22 (50 weekly users), paid launch Mar 3, May 15 target 100 paying; Pro $19/mo or $149/yr, founding $99/yr for life (200 places); screenshot drills until CME/Databento confirm display licensing in writing; Coach = cached playbook + user context + 100-question eval, model picked by eval. 15 decisions listed at the end of the doc. All prices and targets are proposals, not decisions.
- **Logo LOCKED 2026-11-05: mark "Settled"** (symbol, not wordmark): soft liquid body with one dead-straight top edge, shown as clear glass. Tejjo said ignore all earlier Level logo rounds. Rebuilt as vector in `~/Desktop/DISOJO SOLUTIONS/branding/level-identity-2026-11/settled/` (path.json, build.py, glass.py, SVGs, png/, board.png, README). AI origin disclosed in README. Open: rendered glass hero imagery, a 16 px favicon variant, lookalike risks (mouth/grin read in a square, Dynamic Island pill, LiquidJournal soft-blob family).
- Instagram bio options written 2026-11-04 (option 1 recommended); downward arrow is ↓ (U+2193).
- Open: hours/week, concept order, whether Tradriv was Tejjo's idea before Mentable, week-6 target.

**Why:** Tejjo's long-held dream is their own trading product; the main risk is quitting early.
**How to apply:** build only on Tejjo's go; keep scope to v1; remind them of the pre-decided 6-week test. Related: [[project-mentable-space-landing]], [[brand-abelkapoor-trading]].

**Identity (2026-11-04):** Tejjo asked for the full identity (logo, colours, type, pattern or motion, brand guide). Brief: calm, disciplined, Linear/TradingView not crypto; audience 20-35 tier-1 futures traders in dark charting apps. Avoid ICT, bulls/bears, rockets, money, profit hints. Round 1 prompts (8 territories L1 Sweep, L2 Brackets, L3 Ruled word, L4 Still surface, L5 Bubble, L6 Cut, L7 Posts, L8 Crest wildcard) in `branding/level-identity-2026-11/prompts-round1.md` + `round1.html`. Awaiting picks; system built after the pick. Palette rule proposed: no red/green (P&L colours).
**Round 1 rejected 2026-11-04** (dark, heavy, wordmark). Tejjo wants: light mode, calm, relaxed, smooth, clean, liquid-glass feel, a MARK not the word. Round 2 (7 glass marks: G1 Bubble, G2 Horizon, G3 Layers, G4 Corner L, G5 Settled drop, G6 Balance, G7 Fold wildcard) in `branding/level-identity-2026-11/prompts-round2.md`; prompts pasted in chat as code blocks (board copy buttons don't work for Tejjo).
**Round 2 rejected** (literal glass objects; "liquid glass feel" = finish, not object). **Round 3 C "lvl" liked, then killed 2026-11-04: too close to Wispr Flow** (rounded vertical bars). Build in `lvl/` is dead, keep as record. Keep the feel: cream frosted icon, warm graphite, soft heavy rounded strokes, letter-based. Round 4 (`prompts-round4.md`): R1 shared-bar mirrored e's, R2 e-level, R3 flat-top ring, R4 cradle U + dot. Lookalike check is now a hard rule in disojo-identity-lab.
