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
