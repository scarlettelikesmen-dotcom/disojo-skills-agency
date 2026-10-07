# Performance: what was measured, what was guessed wrong

Measured in headless Chrome 1440x900 (a guide, not a phone test).

## Fixes that were invisible and worth doing
- Every animation loop must stop when nothing is moving and when off-screen: hero canvas, wheel, cursor glow, smooth-scroll driver,
  ticker (pause with IntersectionObserver). Before: hero idle 4.5% main thread, FAQ 1.8%. After: 0.0% and 0.1%.
- Measure container size on resize (ResizeObserver), never read clientWidth/Height every frame.
- Pinned/scroll sections: one rAF-throttled scroll listener, writes only `transform`.
- `will-change` only on elements that are actually moving.

## A theory that was WRONG (do not repeat)
"160 decoded 1360x1080 frames = ~940 MB, so hold only a window of ImageBitmaps." Measured: Chrome already caps its own decoded-image
cache (tab ~440 MB with plain `Image` objects); a 33-frame ImageBitmap window made it WORSE (~514 MB). Keep plain preloaded `Image`s.
Lesson: measure before shipping a "fix", compare old vs new in the same browser.

## Still costly, and visible if changed (ask the client first)
- Navbar `backdrop-filter: blur()` re-blurs a moving canvas behind it.
- Cursor glow: a 700 px fixed layer with `mix-blend-mode: multiply` at z-index 9999 forces blending of the whole page.
- Canvas at devicePixelRatio 2 (4x pixels). Capping at 1.5 is usually unnoticeable but check bottle edges and label text.
- Hero frame count (160 here). ~100 is usually fine with easing; test the smoothness before cutting.

## Smooth scroll (Lenis) gotchas (all hit)
- Idle-gating Lenis' rAF means its first frame after a pause sees a multi-second delta and finishes the glide in one jump.
  Feed it a clock capped at 50 ms per frame and clamp negative deltas to 0 (see `templates/lib/smoothScroll.js`).
- Do not reset the clock from inside the Lenis scroll event (it fires mid-frame): keep `raf` set until the frame ends.
- Programmatic scrolls (nav links, scroll-to-top) emit no wheel event, so they must wake the loop explicitly.
- Route changes and any `window.scrollTo`/`scrollIntoView` must go through the helpers, or they fight the smoothing.
- Any inner scroll container (modal, cart drawer) needs `data-lenis-prevent`.
- Remove `html { scroll-behavior: smooth }` conflicts: import `lenis/dist/lenis.css`.
