# Code reading notes (hand-read bundles), 2026-11-10

## Monolog (bymonolog.com), Astro, read from its BaseLayout bundle
Architecture, not effects, is the key:
1. **Motion tokens in one object**: `{offset:375, fast:.3, normal:.65, slow:.95, slower:1.25, stagger:.05}`. Every tween uses these, nothing ad hoc.
2. **Named eases (CustomEase)**: primary `.55,0,.7,0` (in), secondary `.31,.75,.22,1`, fade `.76,0,.24,1`, preloader `.25,1,.5,1`, transition `.22,1,.36,1` (the default for almost everything), menu `.7,0,.22,1`. CSS uses `.16,1,.35,1`.
3. **Barba page lifecycle**: once (await fonts.ready race 1.5s, init, page intro), leave (close menu, run page cleanups, fade `.transition_screen` in 0.35s, stop lenis), afterLeave (kill all ScrollTriggers, remove old container), beforeEnter (swap head meta/styles, scroll to 0, init new page), enter (lenis resize/start, ScrollTrigger refresh, fade screen out + page intro in parallel). Transition itself is a simple 0.35s overlay fade; the richness is the intro that plays after.
4. **Per-page modules**: each namespace exports `setInitialStates(container)`, `init()` (returns cleanup pushed to `window.pageCleanupFunctions`), `intro()` (a timeline). Default intro: `[data-animate]` from autoAlpha 0, y 24, duration slow, stagger .06.
5. **Text reveals by data attribute**: `[data-split="heading"]` with `data-split-reveal="lines|words|chars"`, SplitText `mask:"lines"`, autoSplit, from yPercent 150 opacity 0, ease-transition, ScrollTrigger `clamp(top 80%)` once. Stagger table: lines .95s/.03, words .6s/.06, chars .4s/.01. Eyebrows: words from xPercent -40, skewX 15, opacity 0.
6. **Hero intro**: nav home from yPercent 100, nav links stagger .0525, hero lines stagger .075 with per-paragraph `data-delay-enter`, button yPercent 0 at .55s, aside visual clip-path `inset(100% 0 0 100% round .15rem)` to open. `rotate:.001` to force subpixel smoothness.
7. **Cursor**: one fixed element, `gsap.quickTo` x/y duration .4 power3.out, state via `data-cursor="active|active-edge"` from `elementFromPoint().closest('[data-cursor-hover]')`, text from `data-cursor-text`, press scale .9. Only when `(hover:hover) and (pointer:fine)`.
8. **Hover**: `[data-hover-highlight]` row background tween fast in, normal out.
9. **Menu**: full panel from yPercent -100, slow open, fast close, items yPercent 20 stagger .05, `data-lenis-prevent` while open, Escape closes.
10. **Scroll scenes**: CTA block clip-path inset grows as it leaves (scrub), heading xPercent 50 scrub. Navbar fades out when footer enters. Videos play/pause on enter/leave.
11. **Sound (Howler)**: 5 random tap sounds + select at volume .15 on every interactive element, off by default, toggle in nav with an animated SVG stroke; preference in localStorage.
12. **Shader is loaded last**: `import('./initShader.js')` after the intro finishes, only if the container is still connected. Two shaders: sine domain-warp banding background, gooey halftone pixel reveal (luma to dot radius, smin merge, fwidth AA, uReveal).
13. **Details**: footer live clock in their city with blinking colon; copy-email button with copied state; about page loaded as a partial into a side modal with its own Lenis; Cal.com inline embed; lagSmoothing(50,17) only during intros; prefers-reduced-motion jumps every intro to progress(1); a ResizeObserver debounced 150ms refreshes Lenis and ScrollTrigger.

## ERA Residence (era-residence.com), Webflow + custom code from Slater (one 59KB file, by TFTL)
Same architecture as Monolog, built independently. That is the finding.
1. **Motion tokens**: durS .4, durM .8, durL 1.2, stagger .1, delayReveal .3, breakPoint 992.
2. **Named eases**: Out `.25,1,.5,1` (50 uses, the default), InOut `.75,0,.25,1`, In `.5,0,.75,0` (every hide), Ease `.25,.1,.25,1`, Write `.333,0,.667,1`, diveIn `.6,0,0,1`, horScroll `.25,0,.75,1`, plus a hand-drawn loaderEase path for the progress bar.
3. **Reveal vocabulary by data attribute, each with reveal/hide/initial**:
   - `a` (display): chars from rotateX 90, x 10rem, opacity 0, origin bottom, durL, stagger .1. Hide: rotateX -90, x -10rem.
   - `h` (headings): chars from yPercent 50, rotateY 90, durL, stagger .05.
   - `p` (paragraphs): lines masked, from yPercent 110, durL. Hide to -110 with durS, ease In.
   - `ctn` (blocks): y 3.333rem desktop, 11.54rem phone, opacity 0.
   - `line` (rules): clip-path inset from bottom.
   Grouped by `[data-scroll-reveal="w"]` wrapper so a group triggers once. Elements are hidden (visibility) in CSS until JS sets them, so no flash.
4. **Page transition (Barba)**: beforeLeave runs HIDE on every visible element (text animates out, reverse of reveal), leave fades container to 0 (durM, In), afterLeave kills ScrollTriggers and local Lenis instances, beforeEnter inits scripts and parallax, enter fades in (InOut). So leaving is choreographed, not a cut.
5. **Preloader**: first visit only (sessionStorage `hasVisited`), short version after. An arch shape driven by CSS variables `--arch-w`, `--arch-y` grows from 24vw to 36vw then dives off screen (diveIn), hero image scales .75 to 1 underneath. Progress bar on the hand-drawn ease, 4s.
6. **Hovers**:
   - Link: two stacked copies of the label, chars of the first flip out (rotateY -90, x .4em, yPercent -25), second flips in with .2s delay, underline scaleX from right to 0. Stagger .025.
   - Nav item: chars roll up to a twin, stagger by horizontal position (left to right wave).
   - Circle button: SVG arc stroke-dasharray grows from 4% to half the circle.
   - Magnetic: element follows pointer within strength 25 (in em), inner element moves more, power4.out 1.6s, release elastic.out(1,.3) 1.6s. Desktop only via gsap.matchMedia.
   - Cards: hovering a card plays the same h/p/line reveal inside it.
7. **Scroll scenes**: hero image scrubbed scale 1 to 2 on scroll, word-spacing 0 to 10rem scrub on a line of text, horizontal track pinned with its own ease, theme switching of fixed UI (`[data-theme]` elements get `theme_on-dark/light/color` class when a `[data-bg]` section passes under their centre).
8. **Parallax vocabulary**: img -15% to 15% scrub .5, img-in, img-out, ctn-up, ctn-down; `data-mob="off"` / `data-desk="off"` per item.
9. **Lenis**: duration 1.2, easing expo out `min(1, 1.001 - 2^(-10t))`, driven by gsap.ticker, lagSmoothing(0).
10. **Lightbox**: image scales to viewport width, follows mouse Y with lerp .08, pinch zoom on touch.

## Shortscut (shortscut.com), Webflow + one custom bundle (713KB unminified, modules named `odyn:/components/*.js`)
Same developer family as Monolog: identical cursor code (`data-cursor`, `data-cursor-hover`, `data-cursor-text`, quickTo, press scale .9), identical footer clock (`data-footer-time`, blinking colon), identical `window.pageCleanupFunctions`, same `ease-transition` name. Component naming (`data-button-032`, `data-bunny-player-init`, `data-bunny-lightbox`) matches the Osmo resource vault style: these studios work from a curated library of interaction components, then tune per site.
1. Eases: ease-transition `.22,1,.298,.955` (45 uses), ease-fade `.25,.1,.25,1`, ease-parallax `.73,.05,.112,1`, ease-in-out `.6738,0,0,1`, ease-menu `.76,0,.24,1`. Durations cluster .2/.3/.4/.45/.81/.875.
2. Stack: gsap 3.15 + ScrollTrigger + SplitText + CustomEase + Flip, Lenis 1.3.26, Barba, smooothy (slider), Bunny HLS video.
3. `[data-enter="text"]`: words from x 64 + chars from x 12, per-element overrides by attribute (`data-enter-delay`, `-word-x`, `-char-x`, `-word-duration`, `-char-stagger`). Tuning lives in the markup, the code stays generic.
4. Text link `data-button-032`: SplitText chars with `propIndex` (CSS var `--index` per char), icon gets its own index, so the CSS does the staggered roll with `transition-delay: calc(var(--index) * x)`. Hover is CSS, split is JS.
5. Preview follower: list of rows, a media card follows the cursor (xPercent/yPercent -50, scale from 1.3), shows the hovered row's video.
6. Launch cards: drag canvas of cards with filter and a minimap; card text animates in words+chars when a card becomes active.
7. Canvas overlay: a 2D canvas halftone (dots by arc, radius by value) drawn over media, DPR aware, ResizeObserver, stops on page suspend.
8. Odometer number counters, analog clock with hour/minute/second hands, footer parallax (footer revealed from under the page with a dark overlay), hero translate on scroll with overlay opacity to .6.
9. Every module registers cleanup and `onPageSuspend` (pauses timers and rAF when the tab is hidden or the page leaves).

## Ciao Energy, three r161
Real product model with MeshPhysicalMaterial (transmission, thickness, sheen, clearcoat, iridescence, IOR, anisotropy), PMREM env map (CUBEUV), morph targets, UnrealBloom (gaussian blur kernels), SMAA. That is the realism: physical materials + HDRI reflections + bloom + AA, not a special shader.

## TFTL own site (thefirstthelast.agency): Nuxt (Vue) + GSAP/ScrollTrigger/SplitText/CustomEase + Lenis + Lottie. No WebGL on their own site. Eases: my-ease .32,0,.12,1; my-slider .96,0,.62,.92.
