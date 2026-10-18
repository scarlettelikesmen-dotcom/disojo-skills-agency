# MASTER CONTEXT: Tejjomay's content operation (READ THIS FIRST, EVERY SESSION)
Last updated 2026-10-14. This file is the single source of truth. If anything else contradicts it, this wins; fix the other file. Decision history: `DECISIONS.md`. Operating model: `brands/OPERATING-MODEL.md`. Map of accounts: `brands/README.md`.

## 1. Who and what
**Tejjomay** (pronouns unstated: use their name or "they") runs **Disojo Solutions**, a Bombay (Mumbai) software studio for owner-run businesses (discovery-first: find where the work leaks, build in visible stages, stay after launch; site `disojostudio.com`, `disojo.in` redirects there). Also builds personal brands. Claude is the content team: research, strategy, hooks, scripts, direction, planning, editing, QA and review. **Tejjomay films, approves, adds trending audio in-app, posts/schedules, and answers comments and DMs. Claude never posts, DMs or comments, and never types credentials.**

## 2. The three accounts (two worlds)
| Slug / folder | Account | World | Goal | Platforms (same handle everywhere; verify limits) |
|---|---|---|---|---|
| `disojo` | @disojo.solutions (+ LinkedIn **company page**) | **Disojo world** | **client leads** from tier-1 owner-run businesses (Disojo is ready; USD pricing set privately, never public) | TikTok, Instagram, Snapchat, YouTube, X, LinkedIn (6) |
| `codewithabel` | @codewithabel (+ Tejjomay's **personal LinkedIn**) | **Disojo world** | build in public: audience and authority from real builds | the same 6 |
| `abelkapoor-trading` (internal slug) | **@abelkapoor** (final and Meta-verified, per Tejjomay 2026-10-15; the older handle idea @AbelTradesNQ is dropped) | **Trading world, fully separate** | pure value, **no selling for the first 5-6 months**, then a paid Discord community + mentorship + training (decided 2026-10-15), authority | TikTok, Instagram, Snapchat, YouTube, X (5; no LinkedIn) |
Disojo and codewithabel bios carry `disojostudio.com`; codewithabel says it builds Disojo in public. **The trading account never mentions, links, tags or visually echoes the Disojo world, and vice versa.** Three distinct visual identities (Disojo calm editorial ink/cream; codewithabel dev log IDE/mono/lime; trading journal paper/serif/red pen) and three voices. Identities **v2 APPROVED and locked 2026-10-14** (Disojo ink/cream + leak drip; codewithabel cobalt `#2338FF` + acid `#D9FF3F`, Bricolage; trading "The Rulebook" off-white/black/one red, Big Shoulders): specs in each `brands/<slug>/visual-identity.md`, stills and source in `brands/_visual/v2/`.

## 3. The operating model (all three accounts, every day)
**3 posts a day per account:** **A** high-effort talking-head reel (filmed; trust and authority); **B** low-effort reel (caption + trending audio + hot take; followers, reach, profile visits); **C** carousel 6-7 slides (explanation, trending audio, CTA-focused; trust, authority, CTA actions). 21 pieces per account per week, 63 across three. Mass production, consistent quality, maximum distribution. Format map per platform and the weekly flow: `brands/OPERATING-MODEL.md`.

## 4. Audience and language
**Tier-1: US, UK, Canada, Europe** (purchasing power; not a values statement). English only, US/UK spelling, $/£/€ examples, no Hinglish, no India-specific references (WhatsApp, GST, UPI, rupees, Indian regulators). Bombay is proudly stated on the Disojo site and may be mentioned honestly for `disojo`/`codewithabel`; never fake a tier-1 location, never use a VPN to look local. SEBI is out of scope; for trading content the relevant regimes are UK FCA and US FTC/SEC.

## 5. NON-NEGOTIABLES (the "never mess up" list)
1. **Never invent anything:** no stats, results, testimonials, client names, quotes, personal anecdotes, offers, prices. Unconfirmed = `TO CONFIRM`. (Zero fabrication is Tejjomay's hardest rule: AGENTS.md.)
2. **Separation of worlds.** Nothing Disojo/codewithabel/disojostudio.com/client work on trading; nothing trading on the other two. Never reuse one brand's look, voice or footage for another.
3. **Tradriv and all older reels (Apr-May 2026) are discarded.** Never reuse, quote, mention or build on them (they were unprofessional and sold an app / made performance claims).
4. **Trading compliance:** education only; no recommendations, signals, entries/targets as calls, **no return, win-rate or profit claims**, no P&L screenshots (AMENDED 2026-10-15: genuine prop-firm payout emails/unedited recordings allowed as proof at Tejjomay's decision, labelled as prop-firm payouts), no selling/referral/affiliate/broker/prop-firm/app promotion, disclaimer on screen and in caption ("Education only. Not investment advice."), no unsourced stats, no "I did X" unless confirmed. Tejjomay declined legal review on 2026-10-15 and accepts the risk (Claude advised it); baseline guardrails stay; sources in `brands/abelkapoor-trading/research/sources.md`.
5. **Disojo guards:** no client names/figures without OK (work listed on the site may be named; results only "as reported by the client"), **no pricing in content**, calm authoritative voice, never submissive, no competitor insults (opinions about practices, not people).
6. **No watermarked or identical reposts across platforms** (Instagram/TikTok demote them; YouTube's mass-produced-content policy): clean exports, native uploads, vary first line/caption/cover/title. Research: `brands/disojo/research/distribution.md`.
7. **Hot takes are his opinions:** draft, then he approves each. **Trending audio is added by him in-app** (it cannot be embedded).
8. **Engineering honesty:** look at frames before claiming a visual is good; run `verify_reel.py`; never say audio "sounds good" (measure); flag anything unverified (real phone, audio by ear, platform limits).
9. **Memory/doc hygiene:** after any decision, update this file, `DECISIONS.md` and the relevant memory file the same session. Posting/pushing/deleting/sending: ask first (backups to the skills GitHub repo only when he says so).

## 6. Where things live
- Hub: `~/Desktop/DISOJO SOLUTIONS/content-hub/` : `brands/<slug>/` (brand.md, voice.md, visual-identity.md, MOTION.md, strategy/, hooks/hook-bank.md, calendar/week-1.md, scripts/week-1-scripts.md, research/, published/log.md), `brands/_visual/` (identity mockups + `_identity-sheet.png`, face frame), `edits/` (renders), `scripts/` (reel plans, carousel specs), `research/transcripts/`, `.venv`. Footage lives in Downloads/Desktop (never commit it).
- Engine (single source): `~/.claude/skills/disojo-reel-studio/engine/` (tools, fonts, design, sfx, templates). Hub `tools/design/assets/fonts` are links to it.
- Skills (`~/.claude/skills/`): **`disojo-content-os`** (start here for planning), `disojo-reel-studio` (clip -> reel), `disojo-carousel-studio`, `disojo-content-copy`, `disojo-panel-designer`, `disojo-motion-craft`, `disojo-sound-design`, `disojo-short-form-playbook`, `disojo-reel-export`, `disojo-brand-motion-intake`, plus imported content skills (`going-viral`, `viral-hook-writer`, `content-research`, etc.; never `comment-responder`/auto-DM).
- Memory: `~/.claude/projects/-Users-tejjo-Desktop-DISOJO-SOLUTIONS/memory/` (index MEMORY.md). Global context: `~/.claude/CLAUDE.md`.

## 7. Start-of-session checklist
Read this file -> `brands/README.md` + `OPERATING-MODEL.md` -> the brand's `brand.md`, `voice.md`, `strategy/strategy.md`, `published/log.md` -> then act. Ask only what is truly blocking.

## 8. Status 2026-10-17 (FOCUS NOW: EDITING; other work parked)
**Done:** strategies, hook banks, week-1 plans for all three accounts (trading rewritten authority-first around The Wall Model, rules v1.3 incl. SMT and key time opens, `brands/abelkapoor-trading/wall-model-rules.md`), three approved v2 identities (`brands/_visual/v2/`, specs in each `visual-identity.md`), proof/pricing/name decisions in DECISIONS.md, research (`research/`), Remotion pilot v5-v7 (`remotion-lab/`, source mirrored in `~/.claude/skills/disojo-reel-studio/engine-remotion/`).
**Editing state:** latest render `edits/disojo-reel-2198-v7-remotion.mp4` (Disojo founder clip): persistent 3D module system + graded footage + smooth camera. Tejjomay's verdicts so far: v4 "mid, no transitions/graphics/motion"; v5 "not bad, twitching" (fixed in v5b); v5b "animations good, design mid, dotted pattern looks AI"; v6 (flat typographic) "too raw"; v7 awaiting feedback. He is sending reference repos for motion/graphics.
**Open editing work, in order:** (1) apply his v7 feedback; (2) caption redesign (still the generic dark pill); (3) b-roll cutaways and scene transitions between talking-head sections; (4) per-account themes: Disojo calm editorial (done as v7), codewithabel loud dev-log (cobalt/acid: code/terminal animation, screen-recording auto-zoom, day counter), trading restrained (Rulebook look: clean captions, chart overlays, purposeful zooms); (5) text-over-chart hot-take (B) generator; (6) carousel templates per brand + PDF export; (7) per-platform packager; (8) phone test and listening test.
**Parked (do not work on unless asked):** trading week-1 production (waiting on his chart recordings, talking-head filming, payout-email recording), Disojo/codewithabel week-1 refresh, platform handle checks.
**TO CONFIRM (Tejjomay):** Disojo offer wording, USD pricing (private), public email, client OKs for case studies; SMT timeframe for the Wall Model; paid-launch details.

## 9. Environment landmines (see `~/.claude/skills/disojo-reel-studio/references/lessons.md`)
macOS; Python venv at `content-hub/.venv`; this ffmpeg has no libass/drawtext (Chrome renders captions); iPhone clips are HDR HLG and are tone-mapped to SDR; Whisper transcripts need human checks (e.g. "cream" for "clean"); `rm` with a shell variable is blocked; Reddit and Instagram block scraping (do not circumvent); 4K renders take ~3 min per 90 s source.

## 10. Working style (from Tejjomay)
Finish the whole piece, verify it yourself, then show it; no stream of check-ins for obvious next steps; be direct and honest; re-read their details before generating; editorial, minimal, specific copy (no AI slop); show stills before building design; "let's talk" means discuss first, then act on decisions; he often dictates by voice, so read intent (e.g. "scales" = "skills").

## 11. Editing quality bar (Tejjomay 2026-10-17)
Engine v4 editing is 'very mid' (no transitions, graphics, motion). Editing matters hugely for @disojo.solutions and @codewithabel; trading stays restrained (clean captions, chart overlays, purposeful zooms). Research and plan: `research/editing-upgrade-2026-10-17.md` (candidate: Remotion + xfade transitions + code/terminal components + screen-recording zoom). Tejjomay is sending reference repos. Trading positioning: trust-first, so generous that people ask why there is no course; the model stays free, the paid community sells correction.


## UPDATE 2026-10-17: DISOJO EDITING IS LOCKED
Style + motion for @disojo.solutions = skill `disojo-editing-locked` (v9, render edits/disojo-reel-2198-v9.mp4). Read it before any Disojo edit. 3D dropped. Next focus: TRADING look (Rulebook, restrained), then codewithabel look, then generator/carousels/packager.


## UPDATE 2026-10-18: COPYWRITING
Use `abelkapoor-copywriting` / `codewithabel-copywriting` / `disojo-copywriting` for any hook, script, caption or carousel copy. Reports in `reports/` (awaiting Tejjomay's review).
