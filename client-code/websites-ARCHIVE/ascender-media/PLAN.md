# Ascender Media: flagship rebuild plan (written 2026-10-09)

## Facts (all confirmed real by Tejjomay)
- Live: https://www.ascendermedia.in (Vercel project `social-growth-agency`, team scarlettelikesmen-dotcom; domain ascendermedia.in is in the same account). Current site = one static index.html, no git repo.
- Business: social media post-production + growth agency (reels/shorts/carousels, content planning, editing, posting system). Audience: the whole world (founders, creators, agencies). English only.
- Real numbers on the page: 30+ content ideas/month, 24h editing turnaround, 1 system.
- Pricing (USD/mo): Starter $1,300 (20-30 videos, 3-5 day turnaround, 2 revisions), Growth $3,500 (60-70 videos, 2-3 day, 3 revisions, dedicated editor, motion graphics, Slack+email, monthly strategy call, MOST POPULAR), Scale $6,000 (90-100+ videos, 24-48h, unlimited revisions, dedicated team, advanced motion graphics, priority support, weekly calls, custom workflow). Keep exactly.
- Proof: six real WhatsApp screenshots (Jaylen, Nasir, Beckett, Amrou, Dillon, Anna; files testi-*.png in the project folder). Permission given for screenshots and names. Contact: ascendermedia.in@gmail.com, @ascender_media, Calendly (free 30-min strategy call). All confirmed fine.
- NO client reels may be shown (agency declined). So no fake work, no stock "portfolio". Proof = real chats + real numbers + craft demos built in code and labelled illustrative.

## Design read (per design-taste-frontend)
"Reading this as: flagship agency site for a global audience of founders and agency owners buying video editing, with a cinematic editing-suite language (timeline, timecode, tracks), leaning toward custom CSS + Lenis + scroll-driven motion, no 3D." Dials: DESIGN_VARIANCE 8, MOTION_INTENSITY 7, VISUAL_DENSITY 3.

## Identity (must differ from Postcards and Mochi & Midori)
- Palette: film black #0A0A0B, bone #EDEAE3, ONE accent "safelight" orange #FF5A1F (confirm), hairline white/10, 3% film grain.
- Type: Bricolage Grotesque (display), Geist (body), Instrument Serif italic for single emphasised words, Geist Mono / JetBrains Mono for timecode. Subset Google Fonts via `&text=` where possible; tabular numerals; `text-wrap: balance`.
- Nav: floating "transport bar" pill (logo, section clips with live timecode, Book a call). No edge-to-edge bar.
- Surfaces: double-bezel cards, concentric radii, layered soft shadows, ultra-light line icons (Phosphor Light style SVG, no Lucide/emoji).
- Motion: custom cubic-beziers (no linear/ease-in-out), transform/opacity only, jump-cut transitions (2-frame flash wipe), reduced-motion = static layout.
- Scroll logic: a global playhead + timecode HUD moves with scroll; each section is a "clip" with in/out points.

## Page (single long page, global CTA)
1. Hero: giant headline cut word-by-word (jump-cut masks); behind it a wall of 9:16 "reel" frames built in code (captions, waveform, progress; abstract, not footage); three real stats as counters; Book a call.
2. Track marquee: Reels / Shorts / Carousels / Hooks / Captions as a ruler.
3. The edit (craft demos, labelled "illustrative: what we do to your footage"): caption styles toggle (plain / word-highlight / karaoke), hook rewrite (before/after), pacing (cut rhythm bar). Interactive, code-made.
4. The system: pinned tracks (Plan, Edit, Post) whose clips slide into place on scroll; copy from the three real service cards.
5. Pricing as "export presets": Starter / Growth / Scale with spec rows; Growth highlighted; USD.
6. Proof: pinned sideways chat wall of the six WhatsApp screenshots (WebP, readable, tap to enlarge) with names.
7. Spec sheet (replaces a FAQ accordion): what is included, turnaround, revisions, tools, how a month runs. Only facts we have; unknowns marked TODO(client).
8. Book: Calendly (lazy) + contact form with a real backend + email/Instagram.
9. Footer: "Render complete" end timecode, slim.

## Build (same plumbing as Mochi & Midori)
Vite + React + Lenis, loader store, no GSAP; copy from `disojo-site-starter` plumbing only. Optimise screenshots (PNG 0.5-0.7 MB -> WebP), keep logo.png. Rewrite copy in a specific, non-AI voice (keep real facts; "scroll-stopping" is their line, propose a sharper H1 for approval). Targets: Lighthouse mobile >= 95, a11y 100, contrast >= 4.5:1, 44 px targets, `100dvh`, no horizontal overflow, console clean, real-phone test by Tejjomay.
Milestones: M0 assets + tokens -> M1 design system, nav, hero, HUD -> M2 craft demos + system tracks -> M3 pricing + proof wall -> M4 book, form, footer -> M5 verify (smoke, desktop+phone tour, Lighthouse) -> M6 show running build; deploy to `social-growth-agency` only after approval. Set up a git remote (agency account) on day one; back up skills/memory after.

## Open decisions
1. Accent colour: safelight orange default, or lime / other?
2. Form backend: Web3Forms/Formspree (Tejjomay signs up) or Resend via a Vercel function (needs a key typed by Tejjomay). Mailto fallback otherwise.
3. May the page say "portfolio shared on the call"? Only if true.
4. Repo URL (disojo-solutions) for day-one git.
5. Approve the new H1 once drafted.
