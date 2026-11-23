# Son Daven (sondaven.com/en), hands-on 2026-11-22

A design resort hotel in Yaremche (Carpathians, Ukraine), sold as an investment ("up to 10% expected annual return", "up to 30% capitalisation"). Study only.

## Stack
- Webflow + the **same hand-written architecture as ERA** (same developer or team kit): identical function names (`animatePreloaederIntro` typo included, `initThemeChange`, `initAllParallax`, `animateTextH/P`), identical tokens (`durS .4, durM .8, durL 1.2, stagger .1`, delayReveal .2) and the same named eases (`InOut` here is .76,0,.24,1). So TFTL do reuse a code kernel between sites, under totally different looks. This corrects the November report a little: zero shared class names, but a shared script skeleton.
- GSAP 3.13 + ScrollTrigger + SplitText + CustomEase + Flip, Lenis 1.3, Barba, Swiper 11, Finsweet cookie consent.
- Their own **ActiveFrame.js** (7.5 KB): loads a video as one binary file (encoded frames plus a JSON manifest at the end) and decodes frames with the browser's WebCodecs `VideoDecoder`, so scroll can jump to any frame instantly. Frame-accurate scroll video without a giant image sequence.
- 16 canvases on the home page, one per "scene". Fonts: KTF Metro Roman and KTF Metro Blueline (a lined, engraved display cut), commercial.

## The signature moments, and how each works
1. **Everything living is drawn as an engraving.** Trees, sheep, birds, hay, clouds, mountains, people: about 40 tiny MP4 loops (100 to 200 KB each, `-c` versions are cut-outs on black) and a few AVIF stills, each drawn into a WebGL canvas through one fragment shader. The shader divides the frame into a grid (`xSquares 150, ySquares 100`), samples the colour at each cell centre, maps brightness through `blackPoint` / `whitePoint` / gamma, and draws a line whose **width varies between min and max with that brightness**, in the site's two colours (fill and ground from CSS variables). Result: video that looks like a moving woodcut or a banknote engraving, matching Carpathian folk prints. **Mechanism: one reusable shader + a config per placement (x, y, width, height in %, black/white points, grid size).** A scene manager inits and destroys every scene on each Barba page change and reports loading progress for the preloader.
2. **The hero.** "SON DAVEN" set in the lined display face across the top, the two return figures beside it as big numbers with small captions, a photoreal render of the hotel below, an engraved mountain/tree layer laid over the edges. Real numbers as the headline, not adjectives.
3. **Summer / winter dial.** A sun and a snowflake on a dotted arc (an SVG path) with "hold and move". Dragging finds the nearest point on the path (`getPointAtLength`, 100 samples), and past 40% / 50% the content switches season (text, engraved mountain scene). Releasing tweens to the end. A physical control from the subject (the year turning).
4. **Scroll video on a canvas.** Frames pre-decoded, drawn with "cover" fit, scrubbed by ScrollTrigger (`snap: frame`, scrub .25), desktop only.
5. **Highlight text**: chars from opacity .1 to 1 scrubbed between top 75% and bottom 50%. The same reading-pace device as Gifford Hill.
6. Header hides on scroll down, magnetic buttons with a `data-magnetic-strength`, map pins, floating tips, a sound toggle, load-more lists, accordion FAQ with its own scene, a footer scene of sheep and mountain, an error (404) page with its own scene.
7. **Cookie card** in the brand: a small tan card, "COOKIES [X]", and a single "OK".

## What I looked at, honestly
About 15 minutes: the site script mapped by function, the shader and scene configs read, ActiveFrame read, hero and seasons screens watched. Not done: phone, inner pages, dragging the dial by hand.

## What Disojo should take
- **A house filter for a client's imagery**: one shader that renders any photo or small video in the client's own print language (engraving, halftone, risograph, stitch). It turns cheap stock clips into a coherent illustrated world. Worth building as a kernel module with a per-placement config.
- WebCodecs frame player for scroll video: smaller than image sequences and frame-exact.
- Numbers as the hero when the client sells returns or results (only verified numbers).
- A control built from the subject (the seasons dial) instead of tabs.
- A scene manager: every heavy visual registers init/destroy and loading progress. Our kernel's cleanup registry should do this.
