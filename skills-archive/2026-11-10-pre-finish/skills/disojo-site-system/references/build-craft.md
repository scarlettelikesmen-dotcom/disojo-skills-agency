# Build craft (things that are simply correct)

None of this makes a site good: only the idea does (`idea.md`). These stop it being broken. Motion feel and interaction polish live in `make-interfaces-feel-better` and `emil-design-eng`. Kept from six imported skills archived 2026-11-09 (`skills-archive/2026-11-09/`).

## Layout and type
- Full-height sections use `min-height: 100dvh`, never `100vh`: the phone address bar makes `100vh` jump.
- CSS Grid for columns, no percentage maths in flex. Say what every multi-column block does below 768px.
- Italic display type with y g j p q needs line-height 1.1 or more and a little bottom padding, or the descenders clip.
- `text-wrap: balance` on headings, `pretty` on paragraphs. Body at about 65 characters a line.
- `font-variant-numeric: tabular-nums` wherever digits change or sit in columns (the footer clock too).
- A non-breaking space between a number and its unit.
- Nested corners: inner radius = outer radius minus the padding between them. One radius system per page.
- In a row of cards: same start height for shared parts, buttons pinned to the bottom. Grids have exactly as many cells as content.
- Button labels stay on one line at desktop. Nav stays on one line at desktop.
- Optical alignment: play icons and arrows often need 1-2px by eye.

## Motion and rendering
- Animate `transform` and `opacity` only. Name the properties: no `transition: all`.
- No `window.addEventListener('scroll')`: IntersectionObserver, ScrollTrigger or CSS scroll-driven animation.
- Grain only on a fixed, `pointer-events: none` layer. `backdrop-filter` only on fixed or sticky elements. Both repaint constantly on anything that scrolls.
- `will-change` only on what is about to move. Named z-index layers, no `9999`.
- Pinned scroll: `start: "top top"`, `pin: true`, the wrapper pinned and the inner track moving, `end: "+=" + distance`. A trigger at "top 80%" shows half a slide.
- Every motion has a reason you can say in one sentence (hierarchy, story, feedback, state change). `prefers-reduced-motion` turns loops, parallax and pinning off.

## Access and forms
- Contrast 4.5:1 body, 3:1 large, including placeholders and buttons over photos.
- Visible `:focus-visible` everywhere; never remove an outline without a replacement. Icon-only buttons get `aria-label`; decorative icons `aria-hidden`.
- Real `button`, `a`, `label`, `nav`, `main`. Hit area 44px on phones. Never disable zoom.
- Label above the field, no placeholder as label. Right `type` and `autocomplete`. Never block paste. Error inline under the field, focus moves to the first error. Keep submit enabled and show it working.
- Every input and action has its hover, focus, active, disabled, loading, error and success state.

## What gets forgotten
Custom 404, favicon, OG image, skip link, privacy and terms links, current page marked in the nav, a way back from every page, no link to `#`, reserved space for images and fonts so nothing jumps.

## Redos
Decide first: keep the brand, or new look on the same content.
- Before touching anything, record: the page tree and nav, tokens already in use, what the content does, ranking pages, meta titles, structured data, OG cards. SEO is the biggest redo risk.
- Never change without Tejjo's word: URLs, primary nav labels, form field names and order, the logo, legal and consent copy.
