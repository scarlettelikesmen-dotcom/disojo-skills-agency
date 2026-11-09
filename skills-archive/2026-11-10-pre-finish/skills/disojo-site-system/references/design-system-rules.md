# Design system rules (from bymonolog.com and its 8 work sites)

**Read this as measurements, not a recipe.** It says how nine sites are built. It says nothing about what a page should be: that is the picked idea (`idea.md`), and `defaults-to-avoid.md` overrides anything here.

Measured 2026-11-01 with `scripts/study_site.cjs` at 1512x864 and 390x844, plus frame-by-frame review. Sites: bymonolog.com, oharchitecture.com.au, mammothmurals.com, shortscut.com, supersolid.agency, slik.com.au, hiss.sydney, backhouse.com, squiggle.sydney. Raw numbers: `references/reference-measurements.md`.
The same sweep of our own 8 builds (CSK, Print Elements, Ascender v6, Mentable, Postcards, Mochi & Midori, disojostudio.com, KDC admin) is the "where we drift" column. **Take the system, never their fonts, curves, copy or layouts** (`high-ticket-flagship-3d/references/04-no-copy-law.md`).

## What they share (the system under the looks)

### 1. One framework, many brands
Monolog, Mammoth, Shortscut, SLIK and Backhouse expose the same CSS variable framework: `--site--gutter: 1rem`, a 12-column grid (`--column-width--1..12` computed from container, gutter and count) and a **fluid spacing scale** in which every step is `clamp(min, fluid, max)` between a min and max viewport. They differ only by brand. **Lesson: build every redo on one token framework, vary only the tokens and the concept.**

Their spacing steps (rem, min to max): 1 `.375-.5`, 2 `.625-.75`, 3 `.875-1`, 4 `1.25-1.5`, 5 `1.75-2`, 6 `2-2.5`, 7 `2.25-3`. Section spacing: small `3-5`, main `4-7`, large `5.5-10`, page-top `7-14`. Our `tokens_to_css.py` emits exactly this kind of scale.

### 2. Type: one workhorse family, few sizes, big contrast
| Site | Families | Body | Display | Labels |
|---|---|---|---|---|
| Monolog | Khteka + Suisse Mono (+ Animo, rare) | 18px **w500**, -0.01em, lh 1.25 | 54-95px w700, -0.03em, lh 1.0 | mono 10-12px UC, -0.015em |
| OH | PP Neue Montreal only | 17px w400, -0.01em, lh 1.2 | 123px w500 UC, -0.03em, lh 0.95 | 14px UC, -0.01em |
| Mammoth | Suisse Intl + Obviously (condensed black) | 16-18px w500, lh 1.3 | 171px w800 UC, lh 0.85 | 14px w600 UC |
| Shortscut | GT Standard + Geist Mono | 16-18px **w600**, lh 1.2 | 132px w700, -0.04em, lh 0.9 | mono 11-14px w600 UC |
| Supersolid | Montserrat + Sono | 16px w500, -0.03em, lh 1.25 | 48px w700, -0.04em (wordmark is the real display) | mono 14px UC |
| SLIK | Rand + Rand Mono | 18px w400, lh 1.5 | 197px (and 423px) w500, -0.03em | mono 14-16px |
| HISS | Queens (serif) + Manrope | 16px w600, -0.03em, lh 1.3 | 112-136px w500, -0.03em, lh 0.85 | serif 14-16px |
| Backhouse | Roobert + Roobert Mono | 16-18px **w500**, -0.025em, lh 1.3 | 78px w500, -0.025em | mono 12px UC |
| Squiggle | Manrope + Manuka (condensed) | 17px w500-600, lh 1.5 | 152px Manuka, lh 0.9 | 12px w600 |

Rules that fall out:
- **2 families max**: a workhorse sans that does 80%+ of the text, plus one display or mono with a job. Monolog's third face appears in one place only.
- **Body is weight 500-600 more often than 400.** It reads denser and more designed. Default body to 500 unless the face is already heavy.
- **Body tracking runs from 0 to -0.03em, never tighter.** Display runs from -0.025 to -0.045em. (Drift: disojostudio.com uses -0.07em on 13-16px text.)
- **Body leading is tight: 1.2-1.3 for UI and short copy**, 1.5 only for long reading (SLIK, Squiggle, and our long-form legal pages).
- **Display leading is 0.85-1.0** and display sizes run 120-200px on desktop: **7-11x body**. A second display tier sits at 48-80px. Nothing else in between except one subhead size (20-24px).
- **Labels are 12-14px on desktop, never below 12px on phone.** Uppercase mono or sans, **tracking flat or slightly negative** (-0.02 to 0em). The references do not space their uppercase labels wide; our builds do (+0.04 to +0.14em on CSK, Postcards, Mochi, Mentable). Wide tracking reads as "template"; choose it only if the concept wants it.
- Count the distinct text sizes on the home page: the references use **6-9**. Disojo drift: 16+.

### 3. Colour: ink, paper, one loud accent used as a surface
- **Ink is almost never pure black**: `#080807` (Monolog, OH), `#120011` (Mammoth), `#171717`, `#1E1E1E`, `#0E0E0C`, `#1B0803`. Paper is an off-white with a tint: `#E8E8E3`, `#FCFCFC`, `#FFF6E5`, `#FEFCF6`, `#F0F0F0`, `#FFFDEC`, `#F9F7F0`.
- **One accent, used big**: Mammoth's yellow `#FFD900` is a whole hero and section background, Shortscut's `#FF4500` fills a headline word and stats, SLIK's `#00F500` is a 400px word and a text highlight, HISS's orange and yellow are full bands. The accent is a surface and a voice, not just a button colour.
- Secondary text is one warm or neutral grey (`#938F8A`, `#817F79`, `#545454`, `#A2B0B2`). One grey, not three.
- Dark sites add film grain (Monolog, Supersolid, Backhouse): a fixed noise overlay at about 10% opacity.
- Total: **4 colours plus one grey**. Every extra colour needs a job (Mammoth's blue marks the services band).

### 4. Shape and components
- **One radius family per site**: either pill (`999px`, OH, SLIK) or near-square (2.4-4px, Monolog, Mammoth, Supersolid), or a soft card radius (8px HISS, 32px Squiggle). Never mix pills and soft cards.
- **Buttons are small and specific**: 32-49px tall, label plus an icon box (Monolog's arrow square, OH's dot, Squiggle's separate circle). The icon box is the button's signature and carries the hover.
- **Labels in a system**: "(06)", "(SCROLL DOWN)", "SS /06", "STEP • 01", "(OUR PROCESS)". Every site has one bracket or numbering grammar and uses it everywhere.
- Lists over cards: services and projects as **numbered full-width rows** with a rule between them (Mammoth "01. MURALS", SLIK project list, OH work list), not equal card grids.
- Real proof inline: stats as large numerals with a two-line caption (Shortscut "1.5m+ Followers in 12 months", Monolog "$100K+ In new work within 30 days"). Only with numbers the client has confirmed.

### 5. Layout moves
- **Asymmetric 12-column placement**: a small intro block top-left (about 3 columns) against a huge headline (Monolog, Squiggle, Supersolid). Body copy columns are narrow: 420-620px max width.
- **Media inside the headline** (Shortscut's video chip between words, Monolog's product shot between "WE CLOSE" and "THAT GAP"): a reusable signature pattern.
- **Wordmark or one word at viewport width** (Supersolid, Squiggle, SLIK "Services", OH "FEATURED WORKS"). One per page, not more.
- Section changes by **full-bleed surface swaps** (paper to ink to accent), not by boxes.
- Phone: the same system scaled, not a different site. Display drops to 28-41px, labels stay at 12px or above, and the intro block moves above the headline.

### 6. Motion
- Lenis on every one; GSAP with ScrollTrigger on 8 of 9 (Monolog's own site runs Lenis plus its own code).
- Two easings: a strong in-out `cubic-bezier(0.83,0,0.17,1)` and an expo-out `cubic-bezier(0.16,1,0.3,1)`. Durations 0.3, 0.5 and 0.75s. (Drift: disojostudio.com declares 6 easings.)
- Reveals: line masks rising, about 1s, 60ms stagger. Hovers are two-part (one thing leaves, one arrives) and settle in 400-700ms.
- The concept drives one physical move (Supersolid's wordmark smear, SLIK's bolt, Squiggle's drawn line, Backhouse's floating blocks).

### 7. Their defects (do not copy)
Mammoth: a "COMING SOON" placeholder in the hero showreel. SLIK: the logo overlaps headings while scrolling. Supersolid: content still blurred at screenshot time. Backhouse: a trial font in production and a blank grey media box. Squiggle: an intro that can scroll-lock for 20-35s. Monolog: 10px labels on phone. Our checks (`system_check.cjs`, `phone_audit.cjs`) catch these classes of fault.

## The Disojo token contract (every redo)
Each direction in the brief must fill `tokens.json` (schema in `templates/tokens.example.json`) and the build must pass `system_check.cjs` against it:
1. Families: at most 2, plus a mono only if the label system uses it.
2. Type scale: exactly these roles: `label`, `small`, `body`, `lead`, `h3`, `h2`, `display` (+ optional `mega` for one wordmark-scale word). All fluid between 390 and 1512.
3. Display/body ratio 6x or more on desktop (unless the concept is quiet editorial, e.g. CSK, and the brief says so).
4. Tracking: body 0 to -0.03em, display -0.02 to -0.05em, labels -0.02 to +0.06em (wider only if the brief justifies it).
5. Colours: `ink`, `paper`, `accent`, `grey` (+ one optional `spare` with a stated job). Contrast ink/paper 12:1 or better; grey on paper 4.5:1 or better.
6. One radius family, two easings, three durations.
7. Labels 12px or larger at every width. Tap targets 40px or larger on phone.
9. The hero headline paints without JS (no opacity-0 reveal on the LCP element).
8. Spacing only from the fluid scale (no magic numbers in components).
