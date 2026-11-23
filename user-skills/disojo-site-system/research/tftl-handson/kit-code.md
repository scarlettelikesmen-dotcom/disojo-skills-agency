# Menus, page transitions, hovers and reveals, read in code (2026-11-23)

Two TFTL kits. Webflow kit read in full on Lenval (`code/lenval-properties/js/59707.js`) and ERA (`code/era-residence/js/60900.js`), which share it line for line. Nuxt kit read on Hilight (`code/hilight/js/g4UUSNTr.js`). Study only. Pictures: `moments/<slug>-menu.jpg`, `moments/<slug>-nav.jpg`.

## Shared tokens (Webflow kit)
`durS .4, durM .8, durL 1.2, stagger .1, delayReveal .3`, breakpoint 992. Eases In .5,0,.75,0 / Out .25,1,.5,1 / InOut .75,0,.25,1. Lenis duration 1.2, easing `min(1, 1.001 - 2^(-10t))`, touchMultiplier 2; inner scroll areas get their own Lenis at .6.

## Reveals: one vocabulary, every element has reveal, hide and initial
Mark-up: `data-scroll-reveal="h|p|ctn|line|slide"`, grouped by the nearest `[data-scroll-reveal="w"]` so a group triggers together. Trigger `top bottom`, once, delay .2.
| Kind | Reveal | Hide (page leave) |
|---|---|---|
| h (headings) | split lines+words, mask lines; words yPercent 135 to 0, 1.2s Out, stagger .1, delay .3 | words to -135, .4s In, stagger .025 |
| p (paragraphs) | lines yPercent 110 to 0, 1.2s Out, stagger .1 | lines to -110, .4s In, stagger .05 |
| ctn (anything else) | opacity 0, y 3.333rem to 0, 1.2s Out | opacity 0, .4s In |
| line (rules) | clip `inset(0 100% -1px 0)` to `inset(0 0 -1px 0)`, 1.2s Out (draws left to right) | clips away to the right, `inset(0 0 -1px 100%)` |
| slide (images) | frame clip `inset(0 0 100% 0)` to open while the picture inside scales 1.5 to 1, 1.2s InOut | clip to `inset(100% 0 0 0)`, picture back to 1.5 |
Each element splits once and keeps it (`e._split`). Cards: yPercent 35 to 0, 1.2s Out, replays (once false). Carousels: children from xPercent 25, opacity 0.

## Page transitions
**Webflow kit (Barba, ERA and Lenval):** no veil. `beforeLeave`: every reveal element currently on screen runs its hide (words drop out upward). `leave`: container opacity to 0, .8s In. `afterLeave`: kill all ScrollTriggers, destroy inner Lenis, scroll top, remove. `beforeEnter`: new container at opacity 0, run inits, refresh. `enter`: opacity 1, .8s InOut. Then the new page's reveals play. Webflow is reset per page (`data-wf-page`).
**Nuxt kit (Hilight):** a full-screen `.transition-loader` with an `.overlay` that slides in from the side (`xPercent` to 0, 1s), the route swaps under it (scroll to top, menu reset), then the loader fades out (opacity 0, 1s) and the overlay is parked at xPercent 100 for next time. Clicks are locked during (`navigation-locked`). A flag skips it for instant jumps.

## Menus
**Webflow kit:** the button rotates its icon 90deg (.8s InOut); the panel shows, the backdrop fades in (.8s Out), the header turns to its dark theme, links and text run their normal reveal (ctn, p), scroll is locked. Closing runs the same in reverse with In, .8s, then hides. The menu is just another page section using the same reveal vocabulary.
**Nuxt kit (Hilight):** backdrop opacity, panel opacity, then each nav link's letters slide in sideways (`xPercent` 100 to 0, .7s Out), photos and the mobile call to action fade in, the menu-foot line rises from yPercent 105.

## Hovers
- **Nav item roll** (`hover-nav-item`): two copies of the label, letters of the first go up and out (yPercent -100, opacity 0), the second comes up from 100; .8s Out, stagger .02. Desktop only. Same idea as our `data-roll`.
- **Link underline** (`hover-link`): a line parked at xPercent -101 slides in on enter (1.2s Out) and out the other side to 101 on leave, so it passes through rather than retracting.
- **Magnetic** (`data-magnetic-strength`, default 25): offset = (pointer position in box - .5) x strength/16 rem; release springs back with `elastic.out(1, .3)` over 1.6s.
- **Pins** on maps: pulses grow from the pin size to twice, opacity 1 to 0, 1.2s In, stagger .2, repeat forever.

## Against our kernel
- Our reveal kinds already match theirs in shape (lines, words, rule, media each have set, show and hide). Numbers differ: their headings rise 135% (ours 110%), their pictures scale from 1.5 (ours 1.15), their durations are 1.2s with a .3s delay (ours use T.slow .95). Theirs are bolder; ours are softer. Neither is right in general: the client's idea picks.
- Our transition uses a veil; the Webflow kit uses none (content drops out, page fades), the Nuxt kit a sliding overlay. Both are fine; the veil should be a setting, not the default.
- The underline that passes through and the elastic magnetic release are not in our kernel yet.

## Pictures (captured 2026-11-23, a frame every 150 ms after the click)
Sheets: `moments/overview-menus.jpg`, `moments/overview-navs.jpg`. Strips: `moments/<slug>-menu.jpg`, `moments/<slug>-nav.jpg`.
- **Menus seen:** ADA (dark panel, "Services" with small portrait photos, four links large bottom right), Archvoyage (black panel, six caps links stacked top left rising line by line, a project photo right), Hilight (the panel fades in over a blurred photo, links small top centre).
- **Menus not caught:** ERA, Lenval (button `.btn-menu` / `.header_menu` not clickable at 1512; their desktop shows the links in the bar), Fame (no menu button found).
- **Page changes seen:** ERA (home fades to cream, then "APARTMENTS" with letters rising and a bougainvillea photo), Archvoyage (dark panel wipes in from the right, "PROJECTS"), Lenval (cream fade, then "A Developer Building For Generations"), Hilight (the cream overlay covers, then the new page appears under it), ADA (the hero swaps photo in place before the FAQ page appears).
- **Not caught:** Fame (no internal link found by the tool).

## Cursor (read 2026-11-23)
No custom dot cursor on any of the TFTL sites read. The cursor work is in two places:
- **Lenval `initFluidCursor` (`59707.js:2794`):** a full-screen WebGL fluid simulation (three.js r157 loaded on demand) that the pointer stirs, in the brand cream (249,244,238). Settings: sim 128, dye 512, 3 pressure passes, velocity dissipation 1, dye .98, splat radius .005. While the preloader shows, the fluid is masked by the logo SVG (drawn to a texture), so the stirring shows only inside the logo; after that it runs across the page. Stops updating after 300 frames without input.
- **The cursor as a label:** ERA and Lenval plans set `cursor: zoom-in`; a click scales the plan to the screen width (durM .8, Out) and mouse movement pans it; Esc or arrows close it. Sliders use `grab` / `grabbing`. Hilight's 3D viewer uses `grab`.
Against our kernel: we ship a follower dot. The references show the cursor is used only where it says what a click will do (zoom, drag), plus one site where it is the brand's material (fluid). Default to the system cursor; a follower only when the idea asks for it.
