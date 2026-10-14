---
name: disojo-carousel-studio
description: Designs and renders Instagram/LinkedIn carousels (1080x1350 PNG slides) from an idea or a topic, in the Disojo design system (dark #131311 / cream #E6DDD6 / light #E8E8E3, Host Grotesk, mono labels, real wordmark), then verifies them on a contact sheet. Use when Tejjomay asks for a carousel, slides, a swipe post, a LinkedIn document post, a cover or an Instagram highlight graphic, or says "make this a carousel".
---

# Disojo carousel studio

Uses the engine of `disojo-reel-studio` (`ENGINE=~/.claude/skills/disojo-reel-studio/engine`, workspace `HUB=~/Desktop/"DISOJO SOLUTIONS"/content-hub`). Setup check: `test -d "$ENGINE/tools/node_modules" || bash ~/.claude/skills/disojo-reel-studio/scripts/setup.sh`.

## Workflow
1. **Copy first.** Read `$HUB/copy-rules.md` and `brands/<brand>/voice.md`; write the slides with `disojo-content-copy` (one idea per slide, a cover that opens a gap, a last slide with one CTA). Nothing invented: no stats, clients, testimonials, offers. Mark drafts "DRAFT copy for approval".
2. **Spec.** `$HUB/scripts/<brand>-<date>-<slug>.json`, modelled on `$ENGINE/templates/carousel.example.json`.
   Slide types: `cover` (kicker, title, lead), `point` (label, title, body, tell), `cta` (kicker, title, lead, url). `theme` is `dark` or `light`; alternate them for rhythm. `*word*` renders italic emphasis. Keep titles to ~2-3 lines.
3. **Render.** `cd $HUB && node $ENGINE/tools/render-carousel.mjs scripts/<spec>.json edits/<name>` writes `slide-01.png ...` at 1080x1350.
4. **Verify by looking.** Build a contact sheet of all slides and Read it; then Read at least one full-size slide. Check: nothing clipped, headline balance, contrast, consistent margins, slide numbers right, the last slide has exactly one action.
5. **Deliver.** Send the slides (SendUserFile) or the contact sheet plus the folder path, with a short note: the idea per slide, flags (claims, anything placeholder), and what you would change.

## Brands
- `disojo`: design system exists (`$ENGINE/design/disojo/tokens.css`). Source of truth is disojo.in; do not drift from its two themes.
- `codewithabel` (dev log: IDE, mono, lime) and `abelkapoor-trading` (trading journal: paper, serif, red pen): **identity directions are designed as stills only** (`$HUB/brands/_visual/`, `brands/<slug>/visual-identity.md`), pending Tejjomay's approval; no `tokens.css`/carousel templates yet. Never render these brands in the Disojo look. After approval, turn the mockup HTML into carousel templates and tokens. Trading carousels follow the compliance guards in `copy-rules.md`.

## Known weaknesses (v1, 2026-10-13)
Point slides are text-only and sparse; headlines could be larger and some slides want a diagram, device mockup or number block. Add slide types in `render-carousel.mjs` (e.g. `stat`, `compare`, `steps`) and tokens, then verify visually. Do not claim a slide type works until you have rendered and looked at it.
