---
name: disojo-premium-site-method
description: The repeatable method behind the Ascender Media flagship (Lighthouse 99/100/100/100, client "so good"). Use when building any premium, non-3D brand or agency site from real client material: how to read the design skills in order, state a Design Read and dials, invent a concept-specific identity, build illustrative craft demos instead of fake screenshots, pinned scroll sections with mobile and reduced-motion fallbacks, honest copy, verification gates, and the preview-then-production deploy. Includes the full reference implementation in kit/.
---

# Disojo premium site method (reference build: Ascender Media, 2026-10-09)

Live (v1): https://www.ascendermedia.in, rollback `social-growth-agency-9pzpqpkcw`. v2 redesign (light, proof-first) preview: https://ascender-media-preview.vercel.app, not on the real domain until approved. `kit/` now holds v2 (v1 source is not kept; plan in references/ascender-plan-v2.md). Code: `kit/` (Vite + React + Lenis + Phosphor, no GSAP, no three.js). Plan it came from: `references/ascender-plan.md`. Measured: mobile Lighthouse 99 / 100 / 100 / 100, smoke 34/34, JS 93 KB gzip, fonts 94 KB.

## The method, in order (do not skip step 1)
1. **Read before building.** The full rules are copied into this skill so it works on its own: `references/design-rules-digest.md` (merged, with every banned tell) and verbatim originals in `references/source-skills/`. Read the digest first, then the originals when a rule needs detail. Then the live skills: `design-taste-frontend` (Design Read + dials), `high-end-visual-design`, `anti-slop-design`, `ui-ux-pro-max`, `make-interfaces-feel-better`, `emil-design-eng`, `motion-foundations`, plus `disojo-client-intake` and the playbook. Read the client's real files (every screenshot, the live site's copy and its source). The skills conflict in places; resolve like this: no Inter, no Instrument Serif/Fraunces, emphasis by weight not by a random serif word, max 1 eyebrow per 3 sections, max 1 marquee, no em dashes, no FAQ accordion, one theme for the whole page, 4 text elements max in the hero, one label per CTA intent ("Book a call" everywhere).
2. **Audit the live site for lies.** Ascender's old form faked "Message sent" with a timer. Find these, replace them, tell the client.
3. **Write the Design Read and dials** (here 8 / 7 / 3) and pick a concept from the client's craft, not from a template: Ascender sells editing, so the page is an editing suite (timecode HUD, transport-bar dock, tracks, playhead, "export presets", "render complete" footer). Palette = one accent. See `references/identity-checklist.md`.
4. **Only real content.** All copy, prices and numbers in one `src/data/content.js`. If the client will not share work (Ascender: no reels), proof = their real chats; demos built in code are labelled "illustrative". Never imply client footage.
5. **Build section by section, each with a different layout family** (hero split, ruler band + ledger, tabbed demo panel, pinned tracks, unequal price cards, pinned horizontal chat wall, asymmetric bento of facts, tabbed booking panel, slim end card).
6. **Verify yourself** with `references/quality-gates.md`: `python3 scripts/design_lint.py <project>` (0 FAIL), `npm run build`, `scripts/smoke.cjs` (intercepts the form request so nothing is emailed), `scripts/tour.cjs` screenshots at 1440 and 390 and LOOK at them, `scripts/lighthouse_summary.sh <url>`. Fix, repeat. Only then show.
7. **Deploy**: public preview to its own project with an `X-Robots-Tag: noindex` header (see `references/deploy.md`), show the link, production only when the client says go.

## v2 lessons (the first Ascender build was called slop by the client; v2 fixed it)
- **Never build a metaphor ABOUT the client's craft and decorate it** (v1: editing-suite timecode, dock, fake editor, numbered labels). It reads as a themed template. Build for the visitor: show the client's real proof as the visual.
- **No fake product UI in the hero**, even labelled "illustrative". If the client has no showable work, use real artefacts they do have (here: six real chat screenshots as dark phones on paper) and say what is not shown. Never fake reels or pass AI footage off as theirs.
- **Hero = headline + one sentence + ONE button + one picture.** Nothing else. Two buttons, stats, pills = AI tell. One CTA label everywhere, and hide the nav CTA while the hero or booking section already shows it.
- **Break equal-card pricing**: one panel + a segmented selector that carries all prices.
- **Bento = exactly the cells you have, with real variation** (ink tile, accent tile, paper tile). Stats only as plain facts in context, not a counter ledger. Cut filler stats ("1 system").
- **Check the page's theme against the proof material**: dark screenshots sit best on a light page.
- **LCP**: do not gate the first text behind a reveal transition or font-ready delay; and do NOT preload a hero image unless measured (it slowed local Lighthouse). Judge performance on the deployed URL (gzip), not `vite preview` (uncompressed: scored 90 locally, 100 on Vercel).
- The page-reading order for the redesign skills: positioning-audit, social-proof-mining, no-ai-slop before touching code; smoke test also asserts: one hero button, no em dashes, no "illustrative" text.

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

## Files in this skill
- `references/design-rules-digest.md`, `references/source-skills/*` (verbatim anti-slop, taste, high-end, ui-ux, make-interfaces-feel-better, emil, motion, review-animations, no-ai-slop)
- `references/quality-gates.md` (ordered gates), `references/identity-checklist.md`, `references/patterns.md`, `references/deploy.md`, `references/ascender-plan.md`
- `scripts/design_lint.py` (mechanical anti-slop + CSS class-collision lint), `scripts/lighthouse_summary.sh`, `scripts/smoke.cjs`, `scripts/tour.cjs`, `scripts/og/` (OG image from the site's own fonts)
- `kit/` (the complete reference site)

## Audit result on Ascender (2026-10-09)
Lint found one real `transition: all` and pure-black values (fixed and redeployed). Rule deviations that remain are listed in design-rules-digest section 8. Production: 97-99 / 100 / 100 / 100.

## Pattern library
`references/patterns.md` lists every reusable mechanism (dock, word-cut headline, pinned sections, lightbox, pricing store, forms) with file paths, plus the copy-voice rules. Every client site also carries the credit line "Developed by Disojo Solutions" linking to https://disojo.in in the footer's right corner.

## Handover checklist (copy into the project README)
Form delivery + activation, what is illustrative, what is AI (nothing, here), unverified labels or stats (Ascender: "Beckett" name, "24h" stat vs plan turnaround), rotate any key pasted in chat, repo remote (day one), rollback URL.

## Adapting to the next client (do not copy the look)
Reuse: plumbing (`src/lib/*`, Transport pattern idea, `useInView`/`useOnScreen`, pinned-section hooks, smoke/tour scripts, deploy recipe, the asset script pattern). Replace: concept, palette, type, nav form, every section's layout and copy. The editing-suite look belongs to Ascender; a bakery or a law firm needs its own metaphor (see `references/identity-checklist.md`).

## Print Elements lessons (2026-10-13, local print shop, USD 4k)
- For a local business, generate **static HTML per page** from a data file (one `site.mjs` + `products.json` -> home, category and one page per product, ~40 pages) instead of an SPA: real HTML for local SEO, 100 Lighthouse, tiny JS. Template functions + esbuild + a 20-line static server with clean URLs is enough.
- The concept came from the trade itself and is TRUE and interactive: a vector sample sheet built from four ink plates (C M Y K, `mix-blend-mode: multiply`) that register on load, with per-plate switches. Own vector artwork means crisp at any size, no client photo needed. Label it as our sample, not client work.
- Colour means something: one UI accent (their logo magenta); the other process colours only as plate/category colours. A dark "bed" with paper sheets as objects gave a look unlike the light Ascender site.
- Never dim text with `opacity` for inactive states (Lighthouse contrast fail): change the colour instead.
- Quote forms: never show success unless the endpoint says so; offer a prefilled mailto on failure; test both paths with the request intercepted; reject oversized files before sending.
- Preserve the client's logo as supplied; if a round badge is needed, crop/frame it, never redraw. Keep the logo's white disc on dark pages.
- Do not caption stock mockups as the client's work. Products without a real image get a typographic specimen sheet; leave the "Work" section out until real photos exist.

## Print Elements v3 lessons (light, real-asset build, 2026-10-13)
- When the client has a live site, scrape ITS catalogue (sitemap -> product pages -> og:image) and use that, not an AI-made demo's list: the Gemini demo listed products the client does not sell. Also scrape hours/contact from the live footer.
- No shop photography exists on many small-business sites: the honest route is their catalogue mockups, cut out unchanged, and a plain handover note that they are mockups. Do not draw replacements.
- Never publish scraped prices that look like placeholders ($0.99, $0.00).
- `[hidden]` is overridden by any `display:` rule: add `[hidden]{display:none!important}` (the "Request sent" screen showed on load until the smoke test caught it).
- Smoke tests that scroll must set `scroll-behavior:auto` first or smooth scrolling never reaches lazy images.
- A Lighthouse local score on an uncompressed server is pessimistic (LCP 3.7 s local, 1.7 s deployed). Measure deployed.

## Ascender v4 lessons (OH Architecture style, 2026-10-13)
- When Tejjomay brings a reference like oharchitecture.com.au, copy the SYSTEM not the content: one full-bleed photograph does the work, one tight grotesque, tiny bracketed uppercase labels, big plain index rows with hairlines (3/9 grid: label left, content right), one quote, no cards/shadows/pills, white-on-photo nav that turns into pills after the hero.
- If the client has no photography, have the client's side generate ONE cinematic scene (monolith at dusk worked) and reuse crops of it: hero, one mid-page photo band, darkened closing section. Always disclose AI. Ask for 3840px.
- Replace fake product UI with plain rows of the client's real copy. Keep only what is real: prices, specs, screenshots, quotes.
- IntersectionObserver edge case: an element exactly touching the root counts as intersecting; use `intersectionRatio > 0` and thresholds [0, 0.001].
- Scaling for ultrawide: convert px to rem and set `html { font-size: max(100%, 0.78vw) }`, `--max: max(82.5rem, 80vw)`.
- Measure Lighthouse on a COMPRESSING server (`npx serve`), not `http.server`: 91 vs 99 for the same build.
