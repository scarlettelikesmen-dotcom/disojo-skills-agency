# Motion rules for the reel engine (from emil-design-eng, make-interfaces-feel-better, going-viral, plus what broke)

- Easing: strong ease-out `cubic-bezier(.23,1,.32,1)` for entrances, `(.77,0,.175,1)` for on-screen movement. Never `ease-in`/`linear` for UI motion (linear only for holds).
- Springs: real physics baked into CSS `linear()` (see `spring()` in timeline.html). Bounce stays small (stiffness ~300, damping ~17). Nothing starts at scale 0; start >= .85 with opacity and blur.
- Enter = opacity + small lift + blur; exit is shorter and quieter than enter (~130-160 ms).
- Stagger 55-65 ms. Nothing static: slow push on every cut, idle drift on cards/hook, zoom pulse on emphasis.
- Hook: frame 0 already moving; text at 0.15 s; the claim (emphasis wipe) lands ~1.2 s. Never later than 1.6 s.
- **A WAAPI effect-level `easing` applies to the whole animation and warps keyframe offsets.** For multi-keyframe animations (hold, exit) use `easing: linear` at effect level and ease per keyframe. Violating this made captions vanish after 0.7 s of a 1.4 s phrase.
- Animate transform/opacity/filter only. Text legibility on bright footage: captions sit in one dark rounded box with a thin light edge (a bare shadow failed on bright frames).
- Layers overlap (hook y 0-820, captions y 700-1580): capture each layer in isolation or the overlap is drawn twice and leaves a seam.
- Overlay image sequences must be contiguously numbered (blank frames fill the gaps).
- Cards: compact (620 px), top-left, y 236 default, never over the eyes. Illustrations are metaphors, not data.
- Review by looking: composite frames over a mid-tone backdrop and check at phone size. Check the first 0.5 s, the claim beat, each card at +0.9 s and +1.7 s, and the last second.

## v4 additions (from claude-motion, claude-motion-design, LottieFiles motion-design, motion-broll, student-kit playbook)
- Springs: damping ratio >= 0.72 for "premium" (zeta = c / (2*sqrt(k))). The v1-v3 values (300/17, 120/9) were zeta .49 and .41: bouncy and cheap. Now 300/26, 220/24, 140/19.
- Three motion layers on every visual: primary (the thing the viewer follows), secondary (supporting richness), ambient (always-on background life). Flat animation = a missing layer. Ambient here: dot grid drift, grain reseeded on twos, vignette, idle push.
- One thing moves at a time; one accent; transformations, not cuts. Keep a ghost of the start state after a change (the tangle stays faintly behind the clean line).
- Something small stays alive in every hold (ring pulse, tiny sway, pill pulse). No frozen frame except the final hold.
- Reading holds: >= 1 s for a short phrase; a panel is 2-3.3 s; exits ~half an entrance.
- Safe zone: key text inside y 296..1420 and out of the right 120 px; nothing in the bottom ~500 px except the seam caption.
- Frame 0 is a real image; the first change lands in 0.6-1.0 s; no black frame.
- Premium means one object changing shape, not a fade between pictures.
- Review like a critic: score each shot out of 10, fix only the 7s and below, leave the 9s alone. Check at phone width (300 px tiles). Silent test: if a viewer cannot say it in one sentence with the sound off, too much moves.
- Delivery: H.264 High, BT.709 tv-range tags, faststart, loudness measured on the final MP4 (stereo).
