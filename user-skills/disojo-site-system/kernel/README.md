# Motion kernel (practice build, 2026-11-10)

The interaction layer every Disojo site starts from. It was written from scratch after hand-reading the shipped code of Monolog, ERA Residence, Shortscut and TFTL (notes: `../research/code-study-2026-11-10/notes-code-reading.md`). They all share one architecture, built independently:

1. **Motion tokens.** Five durations and four named eases, read from CSS (`--m-*`, `--e-*`), so each site retunes its feel from the idea without touching JS.
2. **Reveal vocabulary.** `data-reveal="lines|words|chars|block|rule|media"`, each with a hidden state, an entrance and an exit. Options: `data-reveal-delay`, `data-reveal-group`, `data-reveal-now`.
3. **Choreographed page transitions** (Barba). The page hides what is visible, the veil covers, cleanups run, the new page swaps in, the veil uncovers and the intro plays.
4. **Lifecycle discipline.** `onCleanup`, `onSuspend`, fonts before splitting, reduced motion, pause when hidden or off screen.
5. **Pointer layer.** `data-roll` (each character rolls to its twin, left to right; the CSS does the motion), `data-magnetic`, one site cursor (`data-cursor="label"`), `data-follow-list` (a media card trails the pointer).
6. **Heavy accent last.** `<canvas data-k-field>` is a plain WebGL shader field. It loads only after the intro and pauses when off screen.

Run: `npm i && npx astro dev --port 4790` (launch config "kernel-lab").

Status:
- Tested in Chrome at 1512 and 390. Safari, Firefox and real phones are untested.
- The look is a neutral placeholder. Each client's look comes from its picked idea.
- The kernel ships the mechanics, never a style.

Not yet wired into `starter/`. That waits for Tejjo's verdict on the stack.
