---
name: disojo-premium-site-method
description: The repeatable method behind the Ascender Media flagship (Lighthouse 99/100/100/100, client "so good"). Use when building any premium, non-3D brand or agency site from real client material: how to read the design skills in order, state a Design Read and dials, invent a concept-specific identity, build illustrative craft demos instead of fake screenshots, pinned scroll sections with mobile and reduced-motion fallbacks, honest copy, verification gates, and the preview-then-production deploy. Includes the full reference implementation in kit/.
---

# Disojo premium site method (reference build: Ascender Media, 2026-10-09)

Live: https://www.ascendermedia.in. Rollback target for that project: `social-growth-agency-9pzpqpkcw`. Code: `kit/` (Vite + React + Lenis + Phosphor, no GSAP, no three.js). Plan it came from: `references/ascender-plan.md`. Measured: mobile Lighthouse 99 / 100 / 100 / 100, smoke 34/34, JS 93 KB gzip, fonts 94 KB.

## The method, in order (do not skip step 1)
1. **Read before building.** `design-taste-frontend` (Design Read + dials), `high-end-visual-design`, `anti-slop-design`, `ui-ux-pro-max`, `make-interfaces-feel-better`, `emil-design-eng`, `motion-foundations`, plus `disojo-client-intake` and the playbook. Read the client's real files (every screenshot, the live site's copy and its source). The skills conflict in places; resolve like this: no Inter, no Instrument Serif/Fraunces, emphasis by weight not by a random serif word, max 1 eyebrow per 3 sections, max 1 marquee, no em dashes, no FAQ accordion, one theme for the whole page, 4 text elements max in the hero, one label per CTA intent ("Book a call" everywhere).
2. **Audit the live site for lies.** Ascender's old form faked "Message sent" with a timer. Find these, replace them, tell the client.
3. **Write the Design Read and dials** (here 8 / 7 / 3) and pick a concept from the client's craft, not from a template: Ascender sells editing, so the page is an editing suite (timecode HUD, transport-bar dock, tracks, playhead, "export presets", "render complete" footer). Palette = one accent. See `references/identity-checklist.md`.
4. **Only real content.** All copy, prices and numbers in one `src/data/content.js`. If the client will not share work (Ascender: no reels), proof = their real chats; demos built in code are labelled "illustrative". Never imply client footage.
5. **Build section by section, each with a different layout family** (hero split, ruler band + ledger, tabbed demo panel, pinned tracks, unequal price cards, pinned horizontal chat wall, asymmetric bento of facts, tabbed booking panel, slim end card).
6. **Verify yourself**: `npm run build`, `scripts/smoke.cjs` (intercepts the form request so nothing is emailed), `scripts/tour.cjs` screenshots at 1440 and 390 and LOOK at them, Lighthouse mobile. Fix, repeat. Only then show.
7. **Deploy**: public preview to its own project with an `X-Robots-Tag: noindex` header (see `references/deploy.md`), show the link, production only when the client says go.

## Hard-won rules (each one cost a bug here)
- **Namespace CSS classes per component.** Generic names (`.c`, `.end`, `.bar`, `.now`, `.done`, `.who`, `.ph`) collided across files and produced overlapping cards and a boxed card. If a layout overlaps unexpectedly, measure with `getBoundingClientRect` before guessing.
- **Pinned sections**: sticky inner + section height computed in JS (`innerHeight + travel*1.08` for the horizontal wall; `100dvh*4.4` for stage-driven). Progress via `getBoundingClientRect` in rAF writing CSS vars or refs, never React state per frame. Phones: compact static-ish layout or a plain swipe row. `prefers-reduced-motion`: no pin, everything visible (tested).
- **Contrast**: do not dim things with `opacity`; use real colours (dim text >= #8c8880 on #101012). That alone took accessibility from 97 to 100.
- **Fonts**: self-host latin-only variable woff2 in `public/fonts`, `@font-face` with unicode-range, preload the two above the fold. Beat fontsource's all-subset CSS (mobile 96 -> 98-99).
- **Hero**: H1 on two lines (`white-space: nowrap` per line on desktop), headline + sub (<= 20 words) + 2 CTAs, nothing else. Start the word-cut reveal after `document.fonts.ready`.
- **Counters/loops**: pause when off-screen (IntersectionObserver), stop under reduced motion.
- **Calendly**: lazy iframe on click plus an "open in new tab" link; never load their script up front.
- **Forms**: labels above, inline errors that clear as you type, honeypot, aria-live success, mailto fallback on failure. Provider lives in one function (`src/lib/submit.js`). Tell the client about any one-time activation.
- **Mistakes to avoid in deploy files**: `vercel.json` header entries need `source`; the first Ascender deploy failed on that and the smoke test then ran against the old version. Always confirm the deploy printed `Aliased:` before testing.

## Handover checklist (copy into the project README)
Form delivery + activation, what is illustrative, what is AI (nothing, here), unverified labels or stats (Ascender: "Beckett" name, "24h" stat vs plan turnaround), rotate any key pasted in chat, repo remote (day one), rollback URL.

## Adapting to the next client (do not copy the look)
Reuse: plumbing (`src/lib/*`, Transport pattern idea, `useInView`/`useOnScreen`, pinned-section hooks, smoke/tour scripts, deploy recipe, the asset script pattern). Replace: concept, palette, type, nav form, every section's layout and copy. The editing-suite look belongs to Ascender; a bakery or a law firm needs its own metaphor (see `references/identity-checklist.md`).
