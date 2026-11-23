# Motion kernel (practice build, 2026-11-10)

The interaction layer every Disojo site starts from. It was written from scratch after hand-reading the shipped code of Monolog, ERA Residence, Shortscut and TFTL (notes: `../research/code-study-2026-11-10/notes-code-reading.md`). They all share one architecture, built independently:

1. **Motion tokens.** Five durations and four named eases, read from CSS (`--m-*`, `--e-*`), so each site retunes its feel from the idea without touching JS.
2. **Reveal vocabulary.** `data-reveal="lines|words|chars|block|rule|media"`, each with a hidden state, an entrance and an exit. Options: `data-reveal-delay`, `data-reveal-group`, `data-reveal-now`.
3. **Choreographed page transitions** (Barba). The page hides what is visible, the veil covers, cleanups run, the new page swaps in, the veil uncovers and the intro plays.
4. **Lifecycle discipline.** `onCleanup`, `onSuspend`, fonts before splitting, reduced motion, pause when hidden or off screen.
5. **Pointer layer.** `data-roll` (each character rolls to its twin, left to right; the CSS does the motion), `data-magnetic`, one site cursor (`data-cursor="label"`), `data-follow-list` (a media card trails the pointer).
6. **Heavy accent last.** `<canvas data-k-field>` is a plain WebGL shader field. It loads only after the intro and pauses when off screen.

## 2026-11-23: TFTL skeleton added (from `../research/tftl-handson/`)
7. **Module registry** (`src/kernel/registry.js`). `use(selector, init, {scope})`: one init per data attribute, run after every page swap, each returns its own stop function. Scopes: `page` (in the new container), `shell` (fixed UI needing fresh triggers each page), `once`. A client site adds its moments with `use()` and never edits the kernel.
8. **New modules** (`src/kernel/modules.js`): `data-ink` (statement inks in per letter with scroll), `data-parallax` (+ `data-parallax-media` inside a fixed frame), `data-ground` on sections + `data-follow-ground` on fixed UI (colour changes at the exact edge), `data-k-header` (hides going down), `data-progress="#id"` (nav item fills as its section passes, via `--p`), `<link rel=icon data-away>` (favicon swaps while the tab is in the background).
9. **Reveals**: new kinds `turn` (chars turn in on Y and rise) and `focus` (blur to sharp). Text now resets once it leaves below the screen and plays again on the way down; `data-reveal-once` opts out.
10. **Eases**: added `write` (.333,0,.667,1) and `dive` (.6,0,0,1). Lenis duration 1.2. GSAP overwrite auto.
Checked 2026-11-23 in Chrome 1512 and 390 by script: ink, ground switch, header hide/show, progress, reset and replay, all still working after a page change and back. Old source kept in `../kernel-src-backup-2026-11-23/`.

Run: `npm i && npx astro dev --port 4790` (launch config "kernel-lab").

Status:
- Tested in Chrome at 1512 and 390. Safari, Firefox and real phones are untested.
- The look is a neutral placeholder. Each client's look comes from its picked idea.
- The kernel ships the mechanics, never a style.

Not yet wired into `starter/`. That waits for Tejjo's verdict on the stack.

## 2026-11-23: code read for the next modules
Page close (`data-close`: frame, catch-up, floor, last-word), loader (fake progress on a stalling ease, short on return, loader becomes hero) and scroll film (`data-film`, WebCodecs): numbers in `../research/tftl-handson/closes-code.md`, `loaders-code.md`, `frame-player-code.md`. Not built yet.

## 2026-11-23: data-close built (frame, catch-up)
`src/kernel/modules.js` (end), CSS in `kernel.css`, lab pages `/close-frame/` and `/close-catch/`. Checked with a real wheel at 1512 only: strips `../research/tftl-handson/moments/lab-frame-close.jpg`, `lab-catch-close.jpg`. Then the same day: phone 390 checked (frame works; catch-up is desktop only, as Lenval), `data-close-dim` added (section above fades to .3, Lenval), `floor` (word fitted to full width, sunk by `data-close-sink`, letters rise in random order, Grape/Pictoric) and `last-word` (sentence by word, action wipes in turned 5deg as the last word, Archvoyage) on `/close-floor/`. Side by side with ERA and Lenval: `../research/tftl-handson/moments/sbs-closes.jpg`. What they have that the lab does not: real pictures, and Lenval's wordmark is huge and faint behind the links. Floor: the last letter can touch the right edge (fit ignores the mask padding); check on a real site. Not tested: Safari, Firefox, real phones.

## 2026-11-23: data-film built (scroll film)
`src/kernel/film.js` (imported in `index.js`), maker `tools/make-film.cjs`, lab `/film/`, styles `.film-track` / `.film-stick` in `kernel.css`. Desktop 992+ with WebCodecs only; everyone else sees the poster. Verified in the in-app browser at 1512 (Chromium); Safari, Firefox and phones untested. Use only when the client has real film that says something as you scroll. Notes: `research/tftl-handson/frame-player-code.md`.
