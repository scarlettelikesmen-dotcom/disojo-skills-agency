# Operating model: 3 posts a day, per account (decided 2026-10-14)
Applies to **all three accounts**: `disojo`, `codewithabel`, `abelkapoor-trading`. Audience for all: **tier-1 (US, UK, Canada, Europe)**. English only, US/UK spelling, dollar/pound/euro examples, no India-specific references. Mass production, **consistent quality**, maximum distribution.

## The daily trio (per account, every day)
| Slot | Piece | What it is | Outcome it is built for | Main KPIs |
|---|---|---|---|---|
| **A** | **High-effort reel** | Talking head, actually filmed by Tejjomay (30-45 s). Edited by the reel engine (cuts, captions, panels, sound). | **Trust and authority** | avg watch time, 3 s hold, shares, saves, profile visits -> link taps |
| **B** | **Low-effort reel** | Caption + trending audio + **hot take**. No filming needed: text over b-roll/screen/graphic. | **Followers, reach, profile visits** | reach, follows per reach, profile visits per reach, sends |
| **C** | **Carousel** | 6-7 slides, explanation, trending audio, **CTA-focused**. Teaches something real. | **Trust, CTA actions, authority by sharing knowledge** | saves, shares, swipe-through, CTA actions (DMs/link taps), profile visits |

Per week per account: 7 A + 7 B + 7 C = 21 pieces. Across three accounts: **63 pieces a week**. Fallback if filming capacity is short: A can drop to 4/week per account; B and C stay daily (they are Claude's production work).

## Who does what
- **Claude:** research, ideas, hot-take drafts (he approves each: it is his opinion), A-reel scripts and direction, carousel copy and design, edits for A, visuals for B, per-platform packs (caption/title/hashtags/cover/alt text), scheduler sheet, QA, logging, weekly review.
- **Tejjomay:** films A, approves everything, adds **trending audio in-app** (it cannot be embedded; it is regional: browse tier-1 creators' feeds or TikTok Creative Center for US/UK sounds, verify), uploads or schedules, replies to comments and DMs. **Posting, DMs, comments are never automated and never done by Claude.**

## Platforms and handles (decided)
- `abelkapoor-trading`: **5** = TikTok, Instagram, Snapchat, YouTube, X.
- `codewithabel` and `disojo`: **6** = the same five + **LinkedIn** (LinkedIn created: **personal profile for Tejjomay**, **company page for Disojo**).
- **Handles: the same on every platform per account.** CHECK before relying on it: X handles are letters/numbers/underscore only (no dots) and max 15 characters, Snapchat max 15 characters; `disojo.solutions` is 16 characters with a dot, so an identical handle may be impossible. TO CONFIRM what was actually registered (verify limits on each platform).

## Format map (what goes where; default, optional)
| Piece | Instagram | TikTok | YouTube | Snapchat | X | LinkedIn |
|---|---|---|---|---|---|---|
| A talking-head reel | Reel | video | Short | Spotlight | native video | native captioned video (personal profile; Disojo page optional) |
| B hot-take reel | Reel + trending audio | video + trending sound | Short | Spotlight | **text-first post** (hot take as text; video optional) | text/opinion post (video optional) |
| C carousel | carousel + audio | photo carousel + sound | skip (or slideshow Short) | skip (or slideshow Spotlight) | up to 4 images or a thread | **document post (PDF carousel)** |
Not every outlet gets every piece. Weak outlets get the repurposed A only; cut any outlet that does not earn its effort after 30 days.

## Rules for volume (non-negotiable)
1. **One idea, native variants.** No watermarked exports and no identical reposts: Instagram and TikTok reportedly exclude reposted/watermarked content from recommendations; YouTube's mass-produced-content policy targets templated videos with minimal variation. Export clean; change first line, caption, cover and title per platform; use A/B/C hook variants across platforms. Research: `disojo/research/distribution.md`.
2. **Human contribution:** real ideas, his voice, real footage. Templates give consistency, ideas give variety.
3. **Tier-1 language check on everything:** no Hinglish, no India references (WhatsApp, GST, UPI, rupees, "owner in Mumbai"), US/UK spelling, dollar/pound examples. (Bombay/Mumbai as the *studio's home* is proudly stated on the Disojo site and is allowed for `disojo` and `codewithabel` where true and relevant.)
4. **No invented facts**, ever: no stats, results, testimonials, client names, personal anecdotes, or "I" statements he has not confirmed. Mark TO CONFIRM.
5. **Separation:** the trading account never touches the Disojo world; Tradriv and all older reels (Apr-May 2026) are discarded.
6. **Hot takes are his opinions:** draft them, do not publish without his approval; never insult people or make claims about competitors that he cannot back.
7. **Trading compliance (UK FCA, US FTC/SEC; verify with a lawyer):** education only; no recommendations, signals or return/win-rate claims; no selling for 6+ months; disclaimer on screen and in caption; no unsourced stats.
8. One goal and one CTA per piece. Disojo CTAs may point to the leak check; codewithabel to "follow for Day N" and the site; trading to follow only.

## Quality gates per piece
A: facts, compliance, separation, voice, tier-1 language, design/motion (`disojo-motion-craft`), `verify_reel.py`, look at the sheet. B and C: facts, compliance, separation, voice, tier-1 language, visual check at phone size, CTA present (C), claims listed for approval.

## Production flow
Weekly: film A (batch sessions) -> Claude edits A, writes/renders B and C, builds per-platform packs and the scheduler sheet -> he approves -> uploads/schedules -> adds trending audio in-app -> logs metrics at 48 h -> Claude reviews per tier, per platform, per account. Daily time slots (hypotheses to test, tier-1 time zones): C morning, B midday, A early evening in US Eastern/UK; scheduler handles the India clock.

## What is built vs not (2026-10-14)
Built: A pipeline (reel engine, verify, export_safe), carousel renderer (Disojo look only), brand stills for three identities, strategies/hooks/week-1 plans. **Not built:** B text-reel generator, per-brand engine theming (3 looks), carousel templates per brand, carousel -> slideshow video, per-platform packager and scheduler sheet, verified platform limits (caption/video lengths).
