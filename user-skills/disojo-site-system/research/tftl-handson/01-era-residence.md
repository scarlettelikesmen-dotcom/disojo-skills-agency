# ERA Residence (era-residence.com), hands-on 2026-11-22

Visual walk already in `../../taste/era-residence.md` (colour, type, spacing, 1512 + 390). This file is the new part: how the moments are built, read from their own site script (Slater-hosted, 59 KB, unminified names). Study only: we rebuild the mechanism in our own code with our own look, never copy their code, fonts, images or copy.

## Stack
- Webflow page + one hand-written script. GSAP, ScrollTrigger, SplitText, CustomEase, Lenis, Barba, Lottie, jQuery (Webflow's). No WebGL, no canvas.
- Fonts: Ambroise Francois (display serif, commercial), Maison Neue Extended (text, commercial), Sloop Script Three (one-word script, commercial).
- The flowers are 7 transparent WebM loops, 1080x1080 (`bougainvillea-flowers_0N.webm`). Alpha video, not WebGL. That is how the flowers sway over the edges of photos and type.
- 21,800px tall home at 1512.

## The architecture (the part to learn)
- **One set of motion tokens**: `durS .4, durM .8, durL 1.2, stagger .1, delayReveal .3`, breakpoint 992.
- **Named eases** (CustomEase): `Out .25,1,.5,1` · `In .5,0,.75,0` · `InOut .75,0,.25,1` · `Ease .25,.1,.25,1` · `Write .333,0,.667,1` · `diveIn .6,0,0,1` · `horScroll .25,0,.75,1`, plus one hand-drawn `loaderEase` with a stutter in the middle (the loader bar pauses like real loading).
- **Text has three animators, each with reveal / hide / initial states**:
  - `animateTextH` (headings): SplitText into chars; each char comes in from `opacity 0, yPercent 50, rotateY 90` over durL, ease Out, stagger 0.05. Hide goes the other way (`yPercent -50, rotateY -90`, durS, ease In). The rotateY is why their letters seem to turn like cards rather than slide.
  - `animateTextP` (paragraphs): SplitText lines with a mask; lines rise from `yPercent 110`, durL, stagger 0.1.
  - `animateTextA` / `animateCtn` / `animateLine` for labels, containers and rules.
  - Every section calls these with `reveal` on enter and `hide` on leave-back, so text hides again when you scroll up. Nothing just fades.
- **Data attributes drive everything**: `data-parallax="img|img-out|img-in|ctn-down"`, `data-scroll-reveal`, `data-reveal-first`, `data-theme`, `data-bg="light|dark|color"`, `data-magnetic-btn`, `data-arc`, `data-fit-text`, `data-footer-clip`, `data-lenis-scroll`, modals, tabs, filters, sort, lightbox, slider, carousel. ~70 attributes, one `init*` function each, all called from one `initScripts()` after every Barba page change. After leaving a page: kill all ScrollTriggers, destroy local Lenis instances, remove the old container.
- **Lenis**: duration 1.2, exponential easing `min(1, 1.001 - 2^(-10t))`, driven by the GSAP ticker, lag smoothing off. Scrollable panels (menus, modals) get their own small Lenis (duration .6).
- **Page transition**: plain. Old page hides its text (the hide animators), fades out durM ease In, new page fades in durM InOut. The text choreography makes it feel rich, not the transition itself.
- **Loader only once per visit**: `sessionStorage.hasVisited`; first visit gets the full intro, later visits a short one.

## The signature moments, and how each works
1. **The door (intro).** The loader is a plum screen with the name. Two arch shapes (rounded top, `border-radius: var(--arch-w)` on the top corners) sit below the screen (`--arch-y: 104vh`, `--arch-w: 24vw`). The timeline animates only two CSS variables: the arch rises to `15vh` and widens to `36vw` (1.5s, InOut), then grows to fill and flies up (`--arch-y -100vh`, diveIn, 2.4s). At the same moment the hero photo scales from 0.75 to 1 from the top. Two outlined arches, 1.02x and 1.1x, give it a drawn double line. **Mechanism: two CSS variables tweened by GSAP, the shape is pure CSS.** Cheap and exact.
2. **The descent (hero).** The hero is one very tall render, sky to pool. Scrolling a pinned area moves the photo up by its own height minus the screen, the title moves 1.25x faster than the photo (so the name leaves first), and in the last part the photo scales to 2x from 50% 75% (into the pool). Scrub true. **Mechanism: one scrubbed timeline over a tall image, three tweens.**
3. **Words spreading apart.** A circle of words whose `word-spacing` scrubs from 0 to 10rem across the section. One property.
4. **Horizontal location walk.** A pinned area whose height is set to the track's width; the track moves left with the `horScroll` ease, scrub .25. Three title lines drift against each other (`xPercent` -5/25/-15 to 5/-25/25). The map path draws in with `clip-path: inset(0 100% 0 0)` to `inset(0)` inside the horizontal scroll (containerAnimation). Flowers drift on their own speed.
5. **Theme follows the section.** Fixed UI (logo seal, menu) gets a class `theme_on-light|dark|color` from ScrollTriggers placed at the UI element's own centre line, so each fixed element changes colour exactly when a section passes under it, not when the section reaches the top.
6. **Parallax in three directions**: images move -15% to 15% inside their frame (scrub .5); "img-out" only as the section leaves; "img-in" only as it arrives. Mobile and desktop can be switched off per element (`data-mob="off"`).
7. **Footer closes like a window.** The footer photo's `clip-path` scrubs from `inset(0)` to `inset(8% 22%)` (desktop) while the footer content scales from .75 to 1 and fades in. The page shrinks into a framed picture as you reach the end. Then the giant plum phone number.
8. **Circle button hover.** An SVG circle (r 103.5) whose `stroke-dasharray` grows from 4% of the circumference to half on hover (durM, InOut). A drawn line, not a fill.
9. **Magnetic buttons, rolling nav and link hovers** (`initMagneticEffect`, `initNavItemHover`, `initLinkHover`).
10. **404**: the sky-blue ground with the seal, menu and cookie card; content barely there. The cookie card is a cream card with the word "Cookies" in the script face.

## What I looked at, honestly
About 25 minutes: their script read in full by function, the intro and hero watched, 4 scroll stops, the 404. Not re-walked: phone and inner pages (done 2026-11-10 in the taste walk).

## What Disojo should take
- The token set and the reveal/hide/initial animator pattern per text type. Ours (kernel) has reveals but not the hide-on-leave-back or the char rotateY.
- "Animate two CSS variables, let CSS draw the shape": the door. Works for any shape that comes from a client (an arch, a window, a bottle, a label).
- A tall single image scrubbed as the hero, name leaving faster than the picture.
- The footer clip that turns the page into a framed picture.
- Theme switching keyed to each fixed element's own position.
- Alpha WebM for living things (flowers, smoke, water) instead of WebGL.
