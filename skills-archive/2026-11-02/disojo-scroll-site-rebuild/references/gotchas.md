# Gotchas from the Postcards build (each one cost time)

## Environment
- System `pip install` is blocked (PEP 668). Use a venv for rembg/Pillow.
- ffmpeg here has no libwebp: frames are JPEG, not WebP.
- The Mac's temp folders (including the Claude scratchpad) are wiped on restart: keep scripts and deploy folders in the repo
  or in this skill, not only in /tmp. After a restart, `npm i puppeteer-core` again and re-create the deploy folder.
- Hidden browser panes return blank screenshots. Use headless Chrome via puppeteer-core (`scripts/check_site.cjs`) or DOM checks.
- Stale console buffers and HMR transient parse errors look like live errors. Verify on a fresh page or the server log.
- Positions of sections change after load (images, fonts, layout above). Re-measure before each scroll in tests.
- zsh has no `timeout`; the `Edit` tool needs a prior `Read` of the file in the same session.

## CSS/React
- SVG `fill="var(--x)"` attribute does not resolve: use `style={{ fill: 'var(--x)' }}`.
- `overflow: hidden` on a pinned stage can be scrolled by focus/click and shoved the stage up 358 px: use `overflow: clip`.
- Accordions: grid-template-rows 0fr -> 1fr needs `min-height: 0` on the inner element or it will not collapse.
- Scroll-snap rows: the last item must `scroll-snap-align: end` or the row cannot reach its end.
- Full-width footer wordmark: size in `vw` (Fraunces "Postcards" is ~3.45em wide -> 26vw).
- A fixed transparent nav hides the product cap: size the hero bottle (0.8 of canvas height wide, 0.6 portrait) and offset.
- Loader hangs if its progress store is fed by something that no longer mounts (deleted Three.js scene): feed it from the hero.
- Animations with `fill-mode: both` freeze values and block later transitions: use `backwards` for entrances you also want to exit.
- CSS percentage heights inside a grid need a definite row: `grid-template-rows: minmax(0, 1fr)` (bottle rendered at 1500 px otherwise).
- A card that remounts with `key` on every step replays its animation = a twitch. Keep stage height fixed and persist the
  progress bar; only remount the heading and options.
- JSX inside `<ul>` rows: keep keys stable (use label, not index) so exits do not flicker.

## Process
- The user gets angry when output ignores details they gave (label scale, camera move, glitter). Re-read the brief before generating.
- Showing small intermediate things repeatedly is unwelcome: do the whole section/feature, verify it, then show.
- Say plainly what is a placeholder (e.g. the SVG stand-in bottle) and what is not tested.

- react-router gives a new `navigate` after every route change: an effect with `[navigate]` deps cleans up mid-transition and
  cancels its timers (curtain froze closed). Read `navigate` through a ref, effect deps `[]`.
