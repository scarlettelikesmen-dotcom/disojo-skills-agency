# Disojo motion identity (reels)  - v1, 2026-10-13
Derived from disojo.in, the logo wordmark and the motion references studied today. Personality: **Premium, calm, precise** (not playful).

- **Palette (meaning):** ink `#131311` and cream `#E6DDD6` (dark theme), `#E8E8E3` and ink (light theme). Panels alternate themes; the hook panel is dark. One accent = cream/ink inversion (the marker highlight and the pill). No other hues.
- **Type:** Host Grotesk 700 tight (-0.045em) for statements, italic 600 for the one emphasised word per line; JetBrains Mono 22 px uppercase .14em for labels (decoration only; anything that must be read goes big).
- **Easing:** signature `cubic-bezier(.23,1,.32,1)`; moves between states `cubic-bezier(.77,0,.175,1)`.
- **Springs (damping ratio >= .72):** pop 300/26, soft 220/24, heavy 140/19. Overshoot stays under ~4%.
- **Durations:** quick 120-160 ms, standard 300-560 ms, slow 700 ms+. Exits ~half an entrance. Stagger 55-70 ms. Panels 2-3.3 s.
- **Entrance pattern:** opacity + 26 px lift + 8 px blur resolving to sharp. Text rises out of a mask.
- **Layers:** primary = the drawn idea; secondary = pills, rings, ghost of the start state; ambient = dot grid drifting 48 px per 4.2 s, grain reseeded on twos (8.5%), vignette, idle push 1.025.
- **Layout:** split. Panel on top (text inside y 296..820), speaker bottom 1040 px, boxed captions on the seam (centre y~964), full-frame speaker between ideas.
- **Sound:** real CC0 effects only, sparse, ~14 dB under the voice: soft whoosh on panel cuts, pop as the drawing lands, dry tick on highlighted words, one soft impact on the hook claim.
- **Never:** bounce, particles, glow gradients, emoji, rainbow palettes, invented numbers, a frozen frame outside the final hold.
