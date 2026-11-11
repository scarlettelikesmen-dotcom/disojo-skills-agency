# Interaction architecture (from hand-read shipped code, 2026-11-10)

Monolog, ERA Residence (TFTL), Shortscut and TFTL were built independently and share one architecture. Full notes with line-level findings: `research/code-study-2026-11-10/notes-code-reading.md`. Our version, written from scratch: `kernel/` (run: launch config "kernel-lab", :4790). Never copy their code, fonts or copy.

## The layers, in build order
1. **Motion tokens.** Five durations, four to six named eases, in CSS variables.
   - Monolog: fast .3, normal .65, slow .95, slower 1.25, stagger .05. Eases: transition `.22,1,.36,1`, secondary `.31,.75,.22,1`, fade `.76,0,.24,1`, menu `.7,0,.22,1`.
   - ERA: .4 / .8 / 1.2, stagger .1. Out `.25,1,.5,1`, InOut `.75,0,.25,1`, In `.5,0,.75,0`, dive `.6,0,0,1`.
   - Shortscut transition `.22,1,.298,.955`. TFTL `.32,0,.12,1`.
   - Ours default `.16,1,.35,1`. Each client retunes from its idea.
2. **Reveal vocabulary.** `data-reveal="lines|words|chars|block|rule|media"`, each with a hidden state, a show and a hide. Group stagger, `clamp(top 88%)`, once. Fonts ready before SplitText.
3. **Page transitions (Barba).** Hide what is visible, veil covers, run cleanups and kill ScrollTriggers, swap and sync head (title, description, canonical, og), uncover, intro.
4. **Lifecycle.** Cleanup and suspend registry, pause on hidden tab and off screen, reduced motion gives finished states.
5. **Pointer layer.** One quickTo cursor with labels; text rolls char by char (SplitText propIndex `--char` plus CSS delay; the CSS does the motion); magnetic buttons with elastic release; a media card that follows the pointer over lists.
6. **Smooth scroll.** Lenis on gsap.ticker, lagSmoothing(0), lock during transitions and menus.
7. **Heavy accent last.** WebGL lazy-imported after the intro, DPR capped 1.5, paused off screen. Realism (Ciao): MeshPhysicalMaterial (transmission, sheen, clearcoat), PMREM HDRI, bloom, SMAA.

## How common each layer is (52 live TFTL sites fingerprinted, 2026-11-11)
| Layer | Sites |
|---|---|
| Lenis | 24 |
| Preloader | 21 |
| Split text | 16 |
| Custom cursor | 11 |
| Swiper | about 25 |

- Text-style classes named h1-h6, p1, p2, l1, a1 appear on 10 sites.
- Eases are named and reused:
  - `In` .5,0,.75,0
  - `Out` .25,1,.5,1
  - `Write` .333,0,.667,1
  - `InOut` .76,0,.24,1
  - `diveIn` .6,0,0,1
- No theme code is shared between sites. The plumbing is a habit, rebuilt per job. That is what our `kernel/` and token template are.

## Facts
- GSAP is free since 2025-04-30, including SplitText and MorphSVG.
- Shortscut and Monolog code reads like the Osmo vault (osmo.supply, paid, Snellenberg and van Eck).
- This layer is engineering. It wins Usability and the Developer Award. It does not win Design; see `taste/`.
