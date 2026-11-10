# The award bar (measured 2026-11-10)

Source: Awwwards jury pages of 1,709 Sites of the Day, 2018 to 2026, every juror row and Developer Award marks. Raw data and crawl scripts in `research/code-study-2026-11-10/awwwards/` (`detail.jsonl`, `sotd.jsonl` 6,308 SOTD since 2009, `sotm_soty.json`).

## How the score works
- Overall = Design 40% + Usability 30% + Creativity 20% + Content 10%. About 18 jurors per site.
- Developer Award (won by 85 to 94% of SOTD since 2020): Semantics/SEO, Animations/Transitions, Accessibility, WPO (performance), Responsive, Markup/Meta.

## What winners score (median, p10 to p90)
| Mark | Median | p10 | p90 |
|---|---|---|---|
| Overall | 7.40 | 7.24 | 7.65 |
| Design | 7.49 | 7.25 | 7.80 |
| Usability | 7.20 | 6.96 | 7.46 |
| Creativity | 7.55 | 7.21 | 7.98 |
| Content | 7.48 | 7.22 | 7.79 |

- Usability is the lowest mark for 1,288 of 1,709 winners (75%). Winners pay for creativity with usability. That is where we can beat them with engineering alone.
- Developer Award medians: animations 8.0, WPO 7.6, responsive 7.6, SEO 7.2, markup 7.2, accessibility 7.0. Accessibility is their weakest.

## What it means for us
- Design carries 40% and is the gap. Engineering cannot fix it; only taste, material and time per screen do (`taste/`).
- Target to beat the median: Design 7.3, Usability 7.9, Creativity 7.6, Content 7.5 = 7.56.
- Creativity = the picked idea made playable (not decoration). Content = fewer, better words (winners run about 485 words a page).
- Dev checks to add to every build: semantic landmarks and headings, alt text, focus states, reduced motion, LCP under 2.5s on 4G, no layout shift, meta and OG complete.

## Who wins (2023 on)
Locomotive 28, Obys 21, Immersive Garden 21, Holographik 17, TFTL 17, Unseen 17. 2026 self-reported tech: GSAP 52%, WebGL 38%, Three.js 30%, Webflow 21% (tags empty for 2023-24; trust the browser scans instead).

## Code reality (browser scan of 119 reference sites)
GSAP 67%, smooth scroll 65%, page transitions 65%, split text 39%, custom cursor 26%, WebGL about 31%. Median JS about 1.1MB. How they are built: `interaction-architecture.md`.
