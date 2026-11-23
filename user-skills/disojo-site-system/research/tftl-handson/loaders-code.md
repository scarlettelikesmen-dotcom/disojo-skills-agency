# Loaders, read in code (2026-11-23)

Read in full on ERA (`code/era-residence/js/60900.js:2`), Lenval (`code/lenval-properties/js/59707.js:2`), Fame (`code/fame-estate/js/C3DBThoh.js:160-290`) and ADA (`code/ada/js/C3LIzMiL.js:23100`). Study only.

## Five things every one of them does
1. **The progress number is fake.** It is a tween over a fixed time, not real loading: ERA 4s, Lenval 3s (0 to 100, shown as `05%`), Fame 1.2s with `roundProps`. ERA and Lenval run it on a custom ease that speeds up, stalls around 50%, then finishes (`loaderEase`: `M0,0 C0,0 .13,.34 .238,.442 ... .61,.719 .714,.826 .798,.912 1,1`), so it reads as real loading.
2. **Second visit is short.** `sessionStorage.hasVisited`: first visit gets the full intro, later pages in the same session get a short version without the text and counter (ERA, Lenval).
3. **Scroll is locked and sent to the top** while it runs (`lockScroll`, `scrollTo(0)` after 100ms), unlocked at the end, then `ScrollTrigger.refresh()`.
4. **The loader does not fade away: it turns into the first screen.** Its last move and the hero's first move overlap (`"<"`, `"<90%"`, `"-=0.2"`). Page transitions start before the loader has fully gone.
5. **Same timing tokens** as the rest of the site: `durS .4, durM .8, durL 1.2, stagger .1`, breakpoint 992 (ERA and Lenval share them exactly).

## The four handovers
| Site | How the loader becomes the page | Numbers |
|---|---|---|
| ERA | An arch-shaped window (CSS variables) rises from below the screen, widens, then dives past the top while the hero photo inside settles | `--arch-w` 24vw to 36vw (phone 40 to 50vw), `--arch-y` 104vh to 15vh over 1.5s InOut; then to width 125, y -100vh over 2.4s `diveIn`, starting at 90% of the previous move. Hero image scale .75 to 1 (phone 1.15 to 1), origin centre top, 1.5s InOut. |
| Lenval | Title pieces and logo jump between three layouts with Flip, a photo opens from a slit, then the loader itself is cut open from the centre and the page grows from half size | Flip 1.2s InOut, stagger .1, twice. Photo clip `inset(50% 0)` to `inset(0)` 1s, image scale 1.2 to 1. Loader clip polygon from a centre slit to fully open, 1.8s InOut; page `scale .5` to 1, origin `center 50vh`, same time. |
| Fame | Counter 0 to 100 in 1.2s, the screen splits left and right, the brand symbol drops to the bottom of the hero and becomes the corner mark | halves `translate(0,-50%)` 1.2s; symbol to `top: innerHeight - 8rem` 1s; hero title starts .4s in; next block slides up .8s out-quint. Phone gets a simpler version. This is the same corner mark that travels into the footer at the end (see `closes-code.md`): the logo's journey frames the whole page. |
| ADA | A drawn animation (Lottie, canvas renderer) plays; captions fade one after another; then the curtain slides down | captions opacity .75s, **stagger 1.25**, delay .25; on Lottie complete `#preloader` yPercent 0 to 100, .8s, their menu ease. |

## What Disojo should take
- A kernel `loader` module: fake progress on a stalling ease, short version on return visits, scroll lock, and a handover where the last loader move IS the hero's first move. The shape of the handover (arch, slit, split, curtain) comes from the client's idea every time.
- Fame's mark that starts in the loader, lives in the corner, and ends in the footer is the strongest single idea read today. One site only, so a candidate.

## Honest
Read from shipped code, not run frame by frame. Hilight, Grape, SL and the others also have loaders; not read yet. A fake counter is a design choice, not loading info: if we use one, the site must actually be ready when it ends.

## Pictures
`moments/overview-loaders.jpg` (every other frame). Full strips: `moments/era-residence-loader.jpg` and `moments/lenval-properties-loader.jpg` (a frame every 0.5 s for 15 s), `moments/fame-estate-loader.jpg` and `moments/ada-loader.jpg` (every 0.35 s for 7 s).
