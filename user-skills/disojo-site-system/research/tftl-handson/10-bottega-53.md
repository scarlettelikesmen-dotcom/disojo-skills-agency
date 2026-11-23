# Bottega 53 (bottega53.com), scanned 2026-11-23

Luxury wedding photography studio. Study only.

## Stack
Nuxt kit with Lenis, GSAP (ScrollTrigger, Observer, ScrollSmoother, SplitText, **Draggable + Inertia**), **200 canvases** (each photo drawn to its own canvas, likely for a reveal or grain effect), 190 MB fetched (the photographs, full size). Fonts: Forma DJR (variable grotesk) + Freight Big Pro for magazine-like moments. Init names: `initFirstScreenAnim`, `animateTextOnScroll`, `animateFadeIn`.

## The idea
**The site is the photographs, nothing else.** White page, the name set black in the middle with a 0-95% counter; the first photograph drops onto the white, then the page becomes an unbroken wall of photos, three across, edge to edge, no gutters, no captions, 42,000px tall. Magazine covers (Vogue, Wedluxe, L'Officiel, People) are dropped into the wall as tiles, so the press proof is part of the work, not a logo strip.

## Moments
1. Name loader on white, counter bottom left.
2. Endless photo wall, mixed colour and black and white, small white caption cards that come and go, a "+" to open.
3. Menu and Contact set vertically on the right edge, the name top left: the chrome is out of the way of the pictures.
4. Draggable with inertia (the wall or a gallery can be thrown).
5. Phone: the same wall two across; at the end "SAMO PHOT..." (a name set huge) and the email and phone.

## What Disojo should take
- For a photographer or anyone whose work is the picture: no sections at all, one wall, the press as tiles inside it.
- Vertical edge labels for nav when the content must stay full bleed.
- Plan the weight: they ship 190 MB; we would serve sized AVIF.

## Honest
The wheel did not move the page in headless Chrome; the scanner's script fallback did (19 stops). Intro and phone frames seen. Not walked by hand.
