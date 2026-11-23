# Jesko Jets (jeskojets.com), hands-on 2026-11-22

Private jet charter, Dubai. Study only.

## Stack
- Webflow + **the same TFTL script skeleton again** (`initScripts`, `initThemeChange`, `initAllParallax`, `initHighlightText`, `initMagneticEffect`, `initTFTLjson`, `initResetWebflow`, named eases `In / Out / InOut .76,0,.24,1 / Write / ease`, breakpoint 992, Lenis duration 1.2 with the same exponential curve). 33 KB, small.
- GSAP 3.13 + ScrollTrigger + SplitText + CustomEase, Lenis, Barba, Lottie, **globe.gl** (three.js) for the globe.
- Light page weight: about 5 MB total, images 2.3 MB. The hero is layered images (sky, window frame front and back, clouds), not video.

## The signature moments, and how each works
1. **The window shade opens (preloader).** The first screen is an aircraft window. The loader text splits in and out, then the window's shade element slides up (`yPercent 0 to -92` while `scaleY 1 to .5`, 1.2s InOut) with its knob travelling with it, a second knob fades in, and a front overlay fades out 0.4s later. The site literally opens the window shade on the sky. **Mechanism: four layered images and four tweens; the frame is a photo with a transparent hole, the sky is behind it.**
2. **Words that come into focus.** "We are movement" / "We are distinction" arrive blurred and sharpen (blur filter to 0) with the reveal, split either side of the window. The brand name sits inside the window on the sky.
3. **Fly anywhere + [city].** A vertical list of cities that steps up one line every 0.8s forever (`yPercent` by one item, ease Out, then the first child is moved to the end so it never runs out); the current city is highlighted, the others fade above and below. On phones the same list runs sideways.
4. **The globe.** A huge "Global" word behind a dark globe (globe.gl): the map is their own SVG, no atmosphere, no shine, 10 random flight arcs with dashes running every 8s, points at the ends, auto-rotate with the tilt locked, no zoom or pan. On desktop the globe's mask follows the mouse horizontally (`--mask-x` tweened over 2.4s, ease Out), so the lit side leans toward the pointer. Then "5K+" as a big number card.
5. **CTA hover.** The label's chars roll up and out while the twin label rolls in (stagger .01, 1s, Out) and the arrow icon exits up-right while its twin enters from down-left. The same "up down" roll we use, plus the arrow swap.
6. **Small things**: a live Dubai clock in the header (`Intl.DateTimeFormat`, timeZone Asia/Dubai); the **favicon blinks between two icons while the tab is in the background** to pull you back; the TFTL credit is a Lottie; page-specific blocks hidden by a `local` attribute.

## What I looked at, honestly
About 12 minutes: the script read by function, the preloader watched twice, hero and globe seen. Not done: inner pages, phone, the footer, 404.

## What Disojo should take
- **The opening is a real object from the business, doing its real action** (a window shade lifting, a door opening at ERA). This is the pattern across TFTL's best intros: not a logo animation, an action from the subject.
- Layered cut-out photos and four tweens can beat a 3D scene.
- Focus-pull text (blur to sharp) for a calm, expensive reveal.
- The infinite stepping list for "we do X in [place / thing]".
- globe.gl with a custom flat map and the atmosphere off, when geography is the business.
- The background favicon blink: tiny, memorable, costs nothing.
- Our footer clock rule already matches what they do in the header.
