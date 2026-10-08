# Design rules digest (self-contained; verbatim sources are in source-skills/)
Merged from design-taste-frontend, high-end-visual-design, anti-slop-design, ui-ux-pro-max, make-interfaces-feel-better, emil-design-eng, motion-foundations/patterns, review-animations, no-ai-slop. Where they disagree the stricter rule wins.

## 0. Before any code
- Write the Design Read: "Reading this as: <page kind> for <audience>, with a <vibe> language, leaning toward <system/aesthetic>." Set dials DESIGN_VARIANCE / MOTION_INTENSITY / VISUAL_DENSITY (agency/creative = 8-9 / 7-8 / 3). "Motion claimed, motion shown": if MOTION > 4 the page must really move; if you cannot ship working motion, drop the dial and ship static.
- Defaults to avoid: AI-purple/blue glow, centred hero over dark mesh, three equal feature cards, glass on everything, infinite micro-loops, Inter + slate-900.
- One accent colour, saturation < 80%, locked across the whole page. No pure #000/#fff (use off-black / off-white). One theme per page (no light section in a dark page). Dark-only is acceptable only when the concept demands it; write that down.
- Shape lock: one radius system (pills for interactive, 28/22 for double-bezel cards, 16 for fields). Concentric radius: inner = outer - padding.

## 1. Typography
- Banned: Inter, Roboto, Arial, Open Sans, Helvetica as defaults. Use Geist, Bricolage Grotesque, Cabinet Grotesk, Satoshi, Outfit, etc. Max 2 families + a mono for data. Tabular numerals on anything that counts. `text-wrap: balance` on headings, `pretty` on short body. Body max 65-75ch, >= 16px on mobile, line-height 1.5-1.75.
- Serifs very discouraged; Instrument Serif and Fraunces banned as defaults. Emphasis = weight/italic of the SAME family, never a random serif word. Single-word italic/gradient accents in headlines are an AI tell.
- Italic descender clearance (leading >= 1.1 + padding) if italic display is used.
- Hero: headline max 2 lines desktop, sub max 20 words, one primary + at most one secondary CTA, max 4 text elements. No trust strips, pricing teasers or bullet lists in the hero. Hero top padding <= 6rem. Nav on one line, <= 80px tall.

## 2. Layout
- No edge-to-edge sticky bar glued to the top; use a floating detached pill/dock. Centered hero only for manifesto briefs.
- A section layout family may appear once; 8 sections need >= 4 families. Max 2 image+text zigzags in a row. Bento cells = exactly the content you have. No left-headline + floating-right-paragraph headers. Use CSS Grid, `100dvh` never `100vh`.
- Cards only where elevation means something; otherwise `border-t`, `divide-y` or space. Tinted shadows, never harsh black. Double-bezel (outer shell + inner core + inner highlight) for major cards. Button-in-button icon island for arrow CTAs.
- Long lists: no hairline under every row; group into chunks or use cards/pills/marquee. Spec tables: 2-col cards or grouped chunks.
- Mobile collapse declared per section (< 768px single column, no rotations, no negative-margin overlaps).

## 3. Colour and surfaces
- Max 1 accent. Neutral base + one pop. Contrast >= 4.5:1 text, 3:1 large; buttons and form fields checked explicitly (placeholder, helper, error text too). Never dim text with `opacity` (Lighthouse flags it); pick a real colour.
- Banned: neon/outer glows by default, gradient text on large headers, custom cursors, oversaturated accents. Grain only on a fixed `pointer-events:none` layer at <= 3-4% opacity.
- Premium-consumer palette ban: beige/cream + brass/clay/oxblood + espresso is the AI default; rotate to another family.

## 4. Content tells (banned outright unless the brief demands them)
- Em dash and en dash as punctuation anywhere visible (use hyphen, comma, period). Zero.
- Section-number eyebrows (`01 / INDEX`), `01 / 4` pagination on tiles, scroll cues ("Scroll", wheel icons), version labels/footers (`v0.6`, build numbers), locale/time/weather strips, decorative status dots, rotated vertical text, crosshair grid decoration, hero-bottom word strips (`BRAND. MOTION. SPATIAL.`), pills overlaid on images, pretentious photo credits, generic step labels (`Step 1`, `Phase 01`), "Quietly trusted by", "From the field" style poetic labels, tiny corner explainer paragraphs, "Reservation 412 of 800" counters.
- Eyebrows (small uppercase tracked labels): max 1 per 3 sections; hero counts. Middle dot `·` max 1 per line.
- Fake data: round/perfect numbers (99.99%, 10x), invented stats, "John Doe", "Acme/Nexus", generic avatars. Real numbers from the client or nothing. Fake div-built product screenshots are the #1 tell: use real images, a real working component, or nothing, and label demos "illustrative".
- Filler words: elevate, seamless, unleash, next-gen, revolutionize, leverage, supercharge, cutting-edge, game changer, robust, delve, empower. Binary contrasts ("not X, it's Y"), fake-profound kickers, summary endings, colon reveals.
- No duplicate CTA intent: pick one label per intent ("Book a call") and use it everywhere. CTA text on one line. Quotes <= 3 lines, real typographic quotes or none, attribution = name + role.
- Logos: real SVGs only; logo walls are logos only. Hand-rolled SVG icons banned: use Phosphor Light (one family, one stroke weight). No emoji as icons.

## 5. Interaction and motion
- 8 states on every control: default, hover, focus-visible, active, disabled, loading, error, success. Hover motion gated by `@media (hover: hover) and (pointer: fine)`. `:active` scale 0.96-0.98. Touch targets >= 44px. Labels above inputs, errors below, no placeholder-as-label, inline errors that clear as the user types.
- Motion must be motivated: guide attention, communicate state, preserve continuity. Frequency rule: 100+/day or keyboard-triggered = no animation. UI transitions 120-250ms, hero/entrance up to ~1s. Custom cubic-bezier (e.g. `0.16,1,0.3,1`, `0.32,0.72,0,1`); never `ease-in`, never `linear` except constant-velocity marquee; never `transition: all`; animate `transform`/`opacity` only; `will-change` sparingly. Popovers scale from their trigger origin; nothing scales from 0 (start 0.95 + opacity). Exits quieter and shorter than enters. Stagger 30-80ms. Prefer CSS transitions (interruptible) over keyframes for state; keyframes for one-shot entrances.
- Scroll: no raw scroll handlers writing React state. IntersectionObserver for reveals; for scrubbed/pinned work use a passive, rAF-throttled handler that writes CSS variables/refs (measured TBT 0), or CSS scroll-driven animation. Pin pattern: `start: top top`, sticky wrapper, section height = viewport + travel.
- `prefers-reduced-motion`: pins off, loops stopped, everything visible; gentler (keep opacity), not zero. Pause infinite animation when hidden or off-screen. One marquee per page. Never hijack native scroll (keep native scrolling + Lenis smoothing).
- Modals: `<dialog>` with `showModal()` (focus trap + Escape), scroll lock, focus restored.

## 6. Performance and accessibility gates
- LCP < 2.5s, INP < 200ms, CLS < 0.1; run Lighthouse mobile before saying done. Fonts self-hosted, latin subset, preloaded; images WebP/AVIF with width/height; third-party embeds loaded on demand. Targets that shipped: perf >= 95, a11y 100, best practices 100, SEO 100 (production).
- Semantic HTML (`main`, `section` with labels, `button`, `a`), skip link, one h1, alt text meaningful, aria-labels on icon-only buttons, visible focus ring, keyboard order = visual order, no horizontal overflow at 390px, z-index scale documented (content 1, hud 40, menu 50, modal 60).

## 7. Writing (no-ai-slop, applied to site copy)
Concrete over abstract; verbs do the work; active voice; cut throat-clearing, hedges, empty adverbs; keep the client's real phrases; apply the portability test (could this sentence sit on a competitor's site? then replace it with a fact). Re-read every visible string at the end; replace anything cute-but-unclear with a plain functional sentence.

## 8. Deliberate deviations on Ascender (record yours the same way; client still approved)
- Dark-only theme (concept: a film suite; contrast verified). Dock bottom-left instead of a top bar.
- Rationed numbering and timecode labels (01-09 ruler indices, "01 Strategy", flow numbers) and two small accent dots (Illustrative tag, footer "Render complete") because they carry the timecode concept. Under the strict tells list above these are borderline: prefer dropping them on the next client unless the concept needs them.
- rAF-throttled passive scroll listeners (not CSS scroll-driven animation) for the dock, pinned system and chat wall; measured TBT 0 ms.
- One marquee (the ruler); no other.
