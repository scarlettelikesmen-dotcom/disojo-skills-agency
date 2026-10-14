# MASTER CONTEXT: Tejjomay's content operation (READ THIS FIRST, EVERY SESSION)
Last updated 2026-10-14. This file is the single source of truth. If anything else contradicts it, this wins; fix the other file. Decision history: `DECISIONS.md`. Operating model: `brands/OPERATING-MODEL.md`. Map of accounts: `brands/README.md`.

## 1. Who and what
**Tejjomay** (pronouns unstated: use their name or "they") runs **Disojo Solutions**, a Bombay (Mumbai) software studio for owner-run businesses (discovery-first: find where the work leaks, build in visible stages, stay after launch; site `disojostudio.com`, `disojo.in` redirects there). Also builds personal brands. Claude is the content team: research, strategy, hooks, scripts, direction, planning, editing, QA and review. **Tejjomay films, approves, adds trending audio in-app, posts/schedules, and answers comments and DMs. Claude never posts, DMs or comments, and never types credentials.**

## 2. The three accounts (two worlds)
| Slug / folder | Account | World | Goal | Platforms (same handle everywhere; verify limits) |
|---|---|---|---|---|
| `disojo` | @disojo.solutions (+ LinkedIn **company page**) | **Disojo world** | **client leads** from tier-1 owner-run businesses (Disojo is ready; USD pricing set privately, never public) | TikTok, Instagram, Snapchat, YouTube, X, LinkedIn (6) |
| `codewithabel` | @codewithabel (+ Tejjomay's **personal LinkedIn**) | **Disojo world** | build in public: audience and authority from real builds | the same 6 |
| `abelkapoor-trading` | handle TO CONFIRM | **Trading world, fully separate** | pure value, **no selling/no paid course for 6+ months**, authority | TikTok, Instagram, Snapchat, YouTube, X (5; no LinkedIn) |
Disojo and codewithabel bios carry `disojostudio.com`; codewithabel says it builds Disojo in public. **The trading account never mentions, links, tags or visually echoes the Disojo world, and vice versa.** Three distinct visual identities (Disojo calm editorial ink/cream; codewithabel dev log IDE/mono/lime; trading journal paper/serif/red pen) and three voices. Identities are **stills only, awaiting approval**.

## 3. The operating model (all three accounts, every day)
**3 posts a day per account:** **A** high-effort talking-head reel (filmed; trust and authority); **B** low-effort reel (caption + trending audio + hot take; followers, reach, profile visits); **C** carousel 6-7 slides (explanation, trending audio, CTA-focused; trust, authority, CTA actions). 21 pieces per account per week, 63 across three. Mass production, consistent quality, maximum distribution. Format map per platform and the weekly flow: `brands/OPERATING-MODEL.md`.

## 4. Audience and language
**Tier-1: US, UK, Canada, Europe** (purchasing power; not a values statement). English only, US/UK spelling, $/£/€ examples, no Hinglish, no India-specific references (WhatsApp, GST, UPI, rupees, Indian regulators). Bombay is proudly stated on the Disojo site and may be mentioned honestly for `disojo`/`codewithabel`; never fake a tier-1 location, never use a VPN to look local. SEBI is out of scope; for trading content the relevant regimes are UK FCA and US FTC/SEC.

## 5. NON-NEGOTIABLES (the "never mess up" list)
1. **Never invent anything:** no stats, results, testimonials, client names, quotes, personal anecdotes, offers, prices. Unconfirmed = `TO CONFIRM`. (Zero fabrication is Tejjomay's hardest rule: AGENTS.md.)
2. **Separation of worlds.** Nothing Disojo/codewithabel/disojostudio.com/client work on trading; nothing trading on the other two. Never reuse one brand's look, voice or footage for another.
3. **Tradriv and all older reels (Apr-May 2026) are discarded.** Never reuse, quote, mention or build on them (they were unprofessional and sold an app / made performance claims).
4. **Trading compliance:** education only; no recommendations, signals, entries/targets as calls, **no return, win-rate or profit claims**, no P&L screenshots, no selling/referral/affiliate/broker/prop-firm/app promotion, disclaimer on screen and in caption ("Education only. Not investment advice."), no unsourced stats, no "I did X" unless confirmed. Verify with a lawyer; sources in `brands/abelkapoor-trading/research/sources.md`.
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

## 8. Status 2026-10-14
**Done:** strategies v2 (tier-1), hook banks v2 (A/B/C), week-1 content maps (21 slots per account), week-1 scripts, brand files v2, three identity stills, reel engine v4 + verify/export/measure tools, 20+ skills, memory. **Not built:** B text-reel generator; per-brand engine theming (3 looks) and carousel templates per brand; carousel -> slideshow video; per-platform packager + scheduler sheet; verified platform limits (caption/video lengths, handle rules: X and Snapchat handles max 15 chars and X has no dots, so `disojo.solutions` may not be identical everywhere); LinkedIn PDF-carousel export; any rendering of week 1.
**Next builds, in order:** (1) B text-reel generator (hot takes over b-roll/graphic, silent export); (2) per-brand theming + approve identities; (3) carousel templates per brand (6-7 slides, CTA slide) + PDF export for LinkedIn; (4) per-platform packager + scheduler sheet; (5) week-1 production run.
**TO CONFIRM (Tejjomay):** trading handle(s) and "Abel" public identity/age angle; handles actually registered per platform; Disojo offer wording ("free leak check"), USD pricing (private), current public email (AGENTS.md hello@disojo.in vs disojostudio.com), clients OK'd for case studies; capacity (filming sessions/week); approval of the three identity stills; hot takes approvals; trading instruments/route.

## 9. Environment landmines (see `~/.claude/skills/disojo-reel-studio/references/lessons.md`)
macOS; Python venv at `content-hub/.venv`; this ffmpeg has no libass/drawtext (Chrome renders captions); iPhone clips are HDR HLG and are tone-mapped to SDR; Whisper transcripts need human checks (e.g. "cream" for "clean"); `rm` with a shell variable is blocked; Reddit and Instagram block scraping (do not circumvent); 4K renders take ~3 min per 90 s source.

## 10. Working style (from Tejjomay)
Finish the whole piece, verify it yourself, then show it; no stream of check-ins for obvious next steps; be direct and honest; re-read their details before generating; editorial, minimal, specific copy (no AI slop); show stills before building design; "let's talk" means discuss first, then act on decisions; he often dictates by voice, so read intent (e.g. "scales" = "skills").
