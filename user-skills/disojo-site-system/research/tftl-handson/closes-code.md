# Page closes, read in code (2026-11-23)

Shipped JS and CSS saved by `grab.cjs` into `code/<slug>/`, beautified, read by hand. Study only: the mechanisms and numbers are recorded so we can build our own; no code, copy, fonts or images are taken.

Almost every close is the same small tool: **a ScrollTrigger on the footer, `start: "top bottom"`, `end: "bottom bottom"` (or `top 10%`), scrubbed.** What changes is what moves and how far. The idea lives in that choice, not in the code.

## Family 1: the page turns into the footer

| Site | What moves | Numbers | File |
|---|---|---|---|
| ERA | The whole page above shrinks into a frame while the footer content grows in | `[data-footer-clip]` clipPath `inset(0%)` to `inset(8% 22%)` desktop, `inset(4% 32%)` phone; `.footer-s` scale .75 to 1, opacity 0 to 1; trigger `.footer-w`, start `top 30%`, end `bottom bottom`, scrub .5. Headings, paragraphs and buttons reveal on enter, hide again on leave back. Scroll hint fades out from `top bottom` to `center bottom`. | `era-residence/js/60900.js:2791` |
| 4X Strategy | Footer sits under the page and is uncovered | CSS only: footer `position: sticky; bottom: 0; z-index: 1`, the last section scrolls off over it. Logo `width: 100%`. | css |
| ADA | Pre-footer section sinks while a circle in the footer grows | `section.pre-footer` yPercent 0 to 15, power1.inOut, trigger `footer.footer`, start `top bottom`, end `top -10%`, scrub .4, desktop only. `footer #bg-circle` scale to 2.7, ease none, start `top 85%`, end `top -10%`, scrub .4. | `ada/js/QNNnm3oT.js:1700`, `DFEjc4Xv.js:198` |

## Family 2: the wordmark as floor

| Site | What moves | Numbers | File |
|---|---|---|---|
| Lenval | Footer content starts half a footer higher and catches up (feels like it was waiting under the page) | `.footer-s_main` yPercent -50 to 0, translateZ 10, ease none; trigger `.footer-w`, start `top bottom`, end `bottom bottom`, scrub. Desktop only. Section above fades to opacity .3 as it leaves. | `lenval-properties/js/59707.js:1332` |
| SL Architects | The big SL ribbon catches up | `.footer .sl-wrapper` y -120px to 0, same trigger shape | `sl-architects/js/CEJKH9bI.js:~160` |
| Pictoric | Each letter of the footer logo rises out of the floor | `.footer-logo path` yPercent 100 to 0, stagger picked at random from [0, .1, .3] per letter; start `top bottom`, end `bottom bottom`, scrub | `pictoric/js/entry.6cb2d70d.js:~47336` |
| Grape | "©2026" set so big it is cut by the bottom and left edges | CSS only: footer `overflow: hidden`, desktop `margin-bottom: -2.78rem; margin-left: -2.71rem`; phone `font-size: 35.5rem; letter-spacing: -2.4rem; margin-bottom: -17.15rem` (about half cut) | css |
| Hilight, ADA, Yodezeen | Footer logo is a Lottie, loaded only when the footer first enters | `ScrollTrigger.create({ trigger: "footer.footer", start: "top bottom", once: true, onEnter: load })`, Lottie `autoplay: false`, played on hover (Yodezeen at speed 2). TFTL's Nuxt kit does this on every site: the logo is drawn, not an image. | `hilight/js/C6yeEfUZ.js:475`, `ada/js/DFEjc4Xv.js:185`, `yodezeen/js/5FC--5Lm.js:8679` |

## Family 3: the last sentence is the contact

| Site | What moves | Numbers | File |
|---|---|---|---|
| Archvoyage | Sentence reveals word by word, then the action arrives as the last word | Words split (first word separate), duration .5, stagger .06. Then "Send request" `.description-link h3` from yPercent 100, rotate 5, clipPath `polygon(0 0,150% 0,150% 0,0 0)` to yPercent 0, rotate 0, clipPath `polygon(0 0,150% 0,150% 120%,0 120%)`; duration .5, **delay 1**, start `top bottom`, plays once. Description colour white at 40%. | `archvoyage/js/Contact.D-xzsxJa.js:~150` |
| Coeval | Big title, then "From You" split into letters, then a ticker "Find out what we can do for you /" | Ticker speed 10. Footer itself has no motion. | page.html, Contact.js |
| Alchemy | Footer items arrive from the centre outwards | `.js-anim` from opacity 0, yPercent 20, duration 1, `stagger: { from: "center", each: .05 }`, start `top bottom`, plays. Phone: the fixed frame fades out over .3s as the footer enters. | `alchemy-family/js/DJb2uxw5.js` |
| Nabil | No separate footer: the contact section carries the legal row inside it | `.sect-4-footer` grid `25.375rem auto auto`, `margin-top: 7.5rem`, `z-index: 2`. "CONNECT" is markup, not animation. | page.html:7000 |

## Family 4: an object from the business ends it

| Site | What moves | Numbers | File |
|---|---|---|---|
| **Fame** | The small Lottie logo that sits bottom right on every screen travels into the footer and grows into the "hanging sign" | `.lottie-logo-wrap` from `bottom: 0, scale: 1` to `right: 50%, bottom: 60%, transform: translate(50%,0) scale(4)`; iOS animates width and height to 28rem instead of scale. Trigger `footer.footer`, start `top bottom`, end `top 10%`, scrub .4. Hover on the footer button scales it to 6, ease out-quint, .8s. Menu state flips at footer `top center`. | `fame-estate/js/C3DBThoh.js:~859` |
| Face to Face | A photo in the footer slowly zooms while you pass it | `.footer__photo img` scale 1 to 1.15, linear, start `top bottom`, end `bottom top`, scrub | `face-to-face/js/index.7f0e4327.js:987` |
| Gifford Hill | The footer is a full screen (`height: 100vh`, content pushed to the bottom) over a construction photo that drifts about 10% | Webflow interaction, transform translateY about -10.8% at the end. `.footer-wrap` flex column, `justify-content: flex-end`. | css, page.html:1442 |
| Pictoric | The call section has layered pictures moving at different speeds | layer 0 to y 250 (66 phone); layer 2 from y 100 to -150 (40 phone); start `top bottom`, end `bottom top`, scrub | `entry.6cb2d70d.js` |

## Not read in code
- **Kitchen Hero** is Tilda: the close is a zero-block; Tilda's own runtime, nothing site-specific to read.
- **Grand Hotel, Verholy**: the footer is CMS data rendered in a Vue component; no footer animation found in the shipped code. Their close is content (branches, sitemap), not motion.

## What this means for our kernel
One module, `data-close`, with settings, each from three or more sites:
1. `frame`: page above clips into a frame, footer grows from .75 (ERA, ADA, 4X).
2. `catch-up`: footer content starts offset up by -50% and catches up, scrubbed (Lenval, SL, Pictoric letters).
3. `floor`: a wordmark cut by the edge, CSS only (Grape, plus Lenval and 4X wordmarks).
4. `last-word`: the sentence reveals, the action arrives after a 1s beat (Archvoyage, Coeval, Alchemy).
5. `come-home`: a mark that is on every screen travels into the footer and grows (Fame). One site only, so it is a candidate, not a setting yet; it only works when the client has a mark worth carrying.

Shared numbers: trigger the footer, `start: "top bottom"`, `end: "bottom bottom"` or `top 10%`, scrub .4 to .5, desktop only for the scrubbed moves, phone gets a simpler version.

## Pictures (captured 2026-11-23 with `moments.cjs`, frames top to bottom of the close)
All closes on one sheet: `moments/overview-closes.jpg` (last 10 frames per site). One strip per site, every frame: `moments/<slug>-close.jpg` for era-residence, 4x-strategy, ada, lenval-properties, sl-architects, pictoric, grape, archvoyage, coeval, alchemy-family, fame-estate, gifford-hill.
Hilight and Face to Face captured on a second run with script scrolling (`SCRIPT=1 STEP=120`): `moments/hilight-close.jpg`, `moments/face-to-face-close.jpg`.
- **Hilight:** the dark call band ("Ready to bring your next project to life with us?", a live clock "11:39") lifts off a pale footer; the footer is four columns of short lines, one small project photo, and the wordmark "HILIGHT" huge and very faint across the bottom, half sunk (the floor family).
- **Face to Face:** "Alright, need someone who can handle it?" then a circle of small type turns and the words "You've just found me" assemble in its middle; then a white band with Call / Message / Fax and the phone number set edge to edge as the headline; then a red band with "FACE TO FACE" huge, cut by the edges, with the founder's photo standing in the words. The phone number is the close.

## Built from this (2026-11-23)
Kernel `data-close` with four settings: `frame`, `catch-up` (+ `data-close-dim`), `floor`, `last-word`. Lab pages `/close-frame/`, `/close-catch/`, `/close-floor/` on :4790. Captures: `moments/lab-*-close.jpg`, phone `moments/lab-*-phone-close.jpg`, side by side `moments/sbs-closes.jpg`.
