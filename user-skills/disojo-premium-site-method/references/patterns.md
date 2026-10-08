# Reusable patterns from the Ascender build (files are in ../kit/src)
Reuse the mechanism, never the look. Each row: what it is, why it works, file.

| Pattern | Mechanism | Why / gotcha | File |
|---|---|---|---|
| Scroll "transport" dock | fixed floating pill; timecode + fill written to DOM refs in one rAF scroll handler; active section by `getBoundingClientRect` vs 50% viewport; tick positions measured with ResizeObserver; clip list popover (Escape, outside click) | no React state per frame; swap the metaphor per client (progress as chapters, courses, etc.) | components/Transport.jsx + .css |
| Word-cut headline | each word in an overflow-clip mask, inner span translateY(108%) -> 0, 70ms stagger; starts after `document.fonts.ready` (600ms fallback) | no mid-reveal font swap; `padding-bottom` on the mask so descenders are not clipped | Hero.jsx, index.css `.cut` |
| Reveal-on-scroll | `useInView` adds `.in` once; opacity + translateY only; reduced motion = visible | one IO per element, released after firing | lib/motion.js, index.css `.rv` |
| Pause off-screen loops | `useOnScreen` gates setInterval/rAF | saves battery, keeps Lighthouse TBT 0 | lib/motion.js, Stage.jsx, Craft.jsx |
| Illustrative live demo in a hero | code-made preview using the page's own headline, captioned "Illustrative preview. Not client footage." | satisfies "no fake screenshots" while still showing the craft | Stage.jsx |
| Tabbed demo panel | roving tabindex tablist (arrow keys), pane re-mounts with a short enter animation; demos = segmented control, before/after switch, range slider driving a computed read-out | demos compute from their own inputs (avg shot = 10/n), no invented claims | Craft.jsx |
| Pinned stage-driven section | tall section, sticky 100dvh child, `useScrollProgress` -> stage + local progress q; CSS var `--q`; playhead `translateX(calc(var(--q) * 100cqw))`; state only changes on stage/clip thresholds | container-query units make the playhead width-independent; static layout for reduced motion; chips instead of lanes on phones | System.jsx/.css, lib/useScrollProgress.js |
| Pinned horizontal wall | section height = `innerHeight + travel*1.08` set by JS (ResizeObserver); track translated by progress; phones = native scroll-snap row | travel = `track.offsetLeft + offsetWidth - viewport.clientWidth`; equal-height cards via `--ch` and per-card aspect ratio `--ar` | Proof.jsx/.css |
| Native `<dialog>` lightbox | `showModal()` gives focus trap + Escape; `lockScroll` for Lenis; focus restored on close | no custom trap code | Proof.jsx |
| Pricing as presets | unequal columns (1 : 1.14 : 1), hot plan raised and tinted, spec mini-grid + includes + best-for, CTA records choice in a tiny external store that the form reads | `planStore.js` (useSyncExternalStore) avoids prop drilling | Pricing.jsx, lib/planStore.js |
| Facts instead of FAQ | three grouped cards in a 12-col grid, one tinted for variety | no accordion, no per-row borders | Details.jsx |
| Booking panel | tabs: Calendar (lazy Calendly iframe on click + new-tab link) / Message (form) | no third-party script until asked | Book.jsx |
| Form | custom validation, inline errors that clear on input, honeypot, aria-live success, failure -> mailto link; provider isolated | smoke test intercepts the request (answer the OPTIONS preflight too) | Book.jsx, lib/submit.js |
| End card footer | full accent progress bar, "Render complete" + end timecode, slim links, credit line right ("Developed by Disojo Solutions" -> https://disojo.in) | keep the Disojo credit on every client site unless told otherwise | Footer.jsx |
| Counter ledger | count-up on view with ease-out quartic, tabular nums | real numbers only | Ruler.jsx |
| Asset script | rembg-free: Pillow resizes chats to WebP, luminance-to-alpha logo mark, favicons | scripts/make_assets.py |
| OG image | HTML + the site's own woff2, screenshotted by puppeteer to 1200x630 jpg | no design tool needed | (see SKILL deploy notes) |

# Copy voice (applied to Ascender, client called it "so good")
- Headline from the client's own proof language (their chats said "we send what the team needs and everything else is handled" -> "Send the footage. We handle the rest.").
- Sub-line <= 20 words, plain verbs, who + what + how it is bought. No "elevate/unlock/seamless". No em dashes. No "not X, it's Y".
- Section titles are short statements ("Pick a preset.", "The details, plainly.", "Straight from the chats."), never labels in capitals.
- Keep the client's own wording for prices, plan features and promises; rewrite only structure and rhythm.
- Every label that is not real is labelled illustrative. Say what is NOT shown (no client reels) rather than hide it.
- Re-read every visible string at the end (copy self-audit).
