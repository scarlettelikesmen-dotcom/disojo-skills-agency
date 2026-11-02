# Ascender landing page v2: plan (2026-10-11)

Status: plan only. Nothing built or changed. Live site is untouched.

## 1. Why the current page reads as slop (measured against the skills, not taste)
| Problem on the live page | Rule it breaks |
|---|---|
| Hero = headline + sub + two buttons, and a third "Book a call" sits in the dock on screen at the same time | Hero max one primary CTA; no duplicate CTA intent ("Book a call" appears 7 times) |
| Hero visual is a fake editor built from divs, captioned "Illustrative preview. Not client footage." | "Div-based fake product UI in the hero is the #1 LLM-design tell" (design-taste 9.F); the caption admits it |
| Near-black + orange + radial glow behind the hero | The "AI dark mode blob" (anti-slop); neon/outer glows |
| Mono labels "01 Reels ... 09", "01 Strategy", timecode HUD, status dots, "Illustrative demos" tag | Section-number eyebrows, decorative dots, eyebrow limit (max 1 per 3 sections) |
| Three equal pricing cards; three-number stat ledger ("30+", "24h", "1 system") | Three-equal-cards ban; "1 system" is a filler stat |
| Headlines that are metaphors ("One system, three tracks", "Pick a preset", "The details, plainly", "Render complete") | Copy self-audit: cute-but-vague, fails the portability/clarity test |
| The whole page talks about editing in metaphor and shows no edited video | Biggest problem. A video agency page with no moving picture cannot read as credible, however it is styled |

Honest note: I built an editing-suite metaphor and then decorated it. It is a concept about the agency, not for the visitor. That is why it feels like a template with a theme.

## 2. The real constraint, and how to solve it
The agency will not share client reels. So the page has only three kinds of true material: six real chat screenshots, real prices/numbers, and the process. Options for the missing moving picture (decision needed, see section 9):
- **A (recommended):** Ascender edits 1 to 3 short sample reels from its own or stock footage (not client work). Labelled plainly: "Made by us, not a client." Autoplay muted loops in a phone frame. Cheapest fix with the biggest effect.
- **B:** No video. The six chats become the hero material, large and tactile, and the page says reels are walked through on the call (only if true, never implied).
I will not generate fake reels or AI footage and present it as their work.

## 3. Design Read and dials (design-taste step 0)
"Reading this as: agency landing for founders and agency owners who buy short-form video editing, with a proof-first, human language (real chats on paper, one clear action), leaning toward native CSS + Lenis, restrained motion." Dials: VARIANCE 7, MOTION 5, DENSITY 3. Mode: Redesign - Overhaul (keep content and facts, new visual language).

## 4. Identity (must differ from v1, Postcards, Mochi)
- Theme: **light**, one theme for the whole page. The six chats are dark WhatsApp screens (mean brightness about 48/255), so on paper they read as physical phones. That contrast is the visual.
- Palette: cool paper #F3F3F0, ink #0E0E10, hairlines ink/10, ONE accent. Proposed cobalt #2B45F5 (skill-listed alternative to the beige/orange defaults). Orange glow is gone. Accent decision in section 9.
- Type: Bricolage Grotesque is kept only if it still earns it; otherwise Geist Display/Cabinet Grotesk + Geist body. No mono timecode labels. Numbers use tabular-nums.
- Surfaces: double-bezel only for the phone/chat objects; everything else is open layout, spacing and hairlines (cards only where elevation means something).
- Nav: wordmark top-left, ONE "Book a call" pill top-right, which hides when the booking section is on screen. No dock, no timecode.
- Motion: real motivation only: chats lift and settle into the hero cascade, sample reels autoplay muted when visible, one pinned moment (process). Reduced motion = static.

## 5. Page (7 sections, no repeated layout family)
1. **Hero (split, z-axis cascade):** H1, one sentence (<= 20 words), ONE button "Book a call". Right: sample reel in a phone with two real chat screenshots overlapping behind it. Nothing else in the hero. No stats, no pills, no scroll cue.
2. **Proof (full-bleed horizontal wall):** the six real chats, large and readable, with names; moved up because it is the strongest asset. Tap to enlarge (keep the native dialog lightbox).
3. **What lands in your inbox (asymmetric bento, exact cell count):** reels, shorts, carousels, subtitles and captions, monthly content plan, posting help. Cells carry real visual variation (a sample reel, a caption close-up, the plan document as real text). Real numbers appear here as plain facts (30+ ideas a month; turnaround per plan), no stat ledger.
4. **How a month runs (vertical story, not pinned tracks):** Plan, Edit, Post as three large verb-led steps with the real service copy.
5. **Pricing (one panel, segmented selector):** Starter / Growth / Scale switch one big spec panel (price, videos, turnaround, revisions, what is included, who it is for). Replaces three equal cards. Prices unchanged: $1,300 / $3,500 / $6,000 USD per month.
6. **Book:** Calendly (lazy) + real form + email + Instagram. Plain facts about how it starts sit beside it. No FAQ accordion.
7. **Footer:** slim, links, "Developed by Disojo Solutions" right side. Drop the "Render complete" bit.

## 6. Copy plan (no-ai-slop, brand-voice, positioning-audit)
- Voice extracted from their own words: the six chats and the old site ("Hook. Story. Proof. CTA.", "easier to understand, easier to watch, easier to act on"). Keep real phrases; cut metaphors.
- H1 candidates for approval (all from what clients actually said): "Send raw footage. Get posts back, ready to publish." / "Your content team, without the hiring." / keep "Send the footage. We handle the rest." (the current one is the best-grounded; only change it if you want).
- Positioning sentence to test: For founders and agency owners who need steady short-form video, Ascender plans, edits and helps post it each month, with [real client chats as proof].
- Rules: no em dashes, no "not X but Y", no cute section titles, one CTA label ("Book a call"), every number real, no invented claims. Full re-read of every string at the end.

## 7. What stays, what goes
Stays: all facts, prices, contacts, Calendly, form + FormSubmit, six chats (WebP), font/perf plumbing, lint/smoke/Lighthouse scripts, the Disojo credit, deploy flow.
Goes: dock + timecode HUD, fake editor hero, numbered ruler marquee, craft-demo tabs (they are the same fake-UI family), stat ledger, three-card pricing, "Details" block, orange glow.
Open: the craft demos (captions/hooks/pacing) could return only if reworked into real before/after of an actual sample edit. Default: cut.

## 8. Build and verification
- M0 research (1 hr): look at 5 to 6 real video-editing agency sites with agent-reach + competitor-positioning; map what they all say, to avoid sounding like them. Read-only.
- M1 identity + hero + nav; M2 proof wall + bento; M3 process + pricing panel; M4 book + footer + copy pass; M5 verify; M6 preview link for your approval.
- Gates: design_lint 0 FAIL (and a written "slop self-audit" per section against design-rules-digest section 4), smoke test updated, screenshots at 1440 and 390 and I look at every one, Lighthouse mobile >= 95 / a11y 100, reduced-motion run.
- Deploy: public noindex preview in its own project first. Production (ascendermedia.in) only after you say go; old version stays as rollback.
- Skills update after: new lessons into disojo-premium-site-method (including "do not build a metaphor about the client").

## 9. Decisions needed from Tejjomay (answer in one line each)
1. Moving picture: option A (Ascender makes 1 to 3 sample reels, labelled as their own, I embed them) or option B (no video, chats carry the page)? If A, who supplies the clips and from where?
2. Light page with cobalt accent as proposed, or stay dark?
3. Keep the H1 "Send the footage. We handle the rest." or pick another?
4. Anything on the current live page you like and want kept (so I do not throw it out)?
