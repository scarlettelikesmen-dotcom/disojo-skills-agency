# Motion rules for the reel engine (from emil-design-eng, make-interfaces-feel-better, going-viral, plus what broke)

- Easing: strong ease-out `cubic-bezier(.23,1,.32,1)` for entrances, `(.77,0,.175,1)` for on-screen movement. Never `ease-in`/`linear` for UI motion (linear only for holds).
- Springs: real physics baked into CSS `linear()` (see `spring()` in timeline.html). Bounce stays small (stiffness ~300, damping ~17). Nothing starts at scale 0; start >= .85 with opacity and blur.
- Enter = opacity + small lift + blur; exit is shorter and quieter than enter (~130-160 ms).
- Stagger 55-65 ms. Nothing static: slow push on every cut, idle drift on cards/hook, zoom pulse on emphasis.
- Hook: frame 0 already moving; text at 0.15 s; the claim (emphasis wipe) lands ~1.2 s. Never later than 1.6 s.
- **A WAAPI effect-level `easing` applies to the whole animation and warps keyframe offsets.** For multi-keyframe animations (hold, exit) use `easing: linear` at effect level and ease per keyframe. Violating this made captions vanish after 0.7 s of a 1.4 s phrase.
- Animate transform/opacity/filter only. Text legibility on bright footage: layered text-shadow, not a box.
- Layers overlap (hook y 0-820, captions y 700-1580): capture each layer in isolation or the overlap is drawn twice and leaves a seam.
- Overlay image sequences must be contiguously numbered (blank frames fill the gaps).
- Cards: compact (620 px), top-left, y 236 default, never over the eyes. Illustrations are metaphors, not data.
- Review by looking: composite frames over a mid-tone backdrop and check at phone size. Check the first 0.5 s, the claim beat, each card at +0.9 s and +1.7 s, and the last second.
