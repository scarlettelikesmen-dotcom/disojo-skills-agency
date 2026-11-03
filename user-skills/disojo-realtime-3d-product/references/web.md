# Web side (templates in ../templates/web, three r170 + Vite 6)

## Setup
- `npm i`, copy `node_modules/three/examples/jsm/libs/draco/` to `public/draco/`, model to `public/model/`, maps to `public/tex/`, HDRI to `public/env/`. Dev: `vite --port <port> --host 127.0.0.1`. Always open http://127.0.0.1:<port>, never the file.
- Renderer: antialias, pixel ratio max 2, `NeutralToneMapping` exposure 1, VSM shadows.

## Materials
- Assign by Blender material name on load (powder, polished steel, cap, core, rubber). One shared material per finish so colourway swaps are one assignment.
- Textures: `flipY = false`, anisotropy max, `SRGBColorSpace` on colour maps only.
- Powder: map, roughnessMap, normalMap (`normalScale` 0.26), aoMap, sheen 0.25 (soft fabric-like edge glow on matte coat).
- Metal parts: metalness 1, roughness from maps; they need the HDRI or they look black.
- Cut-out parts: alphaMap + `alphaTest 0.5` + DoubleSide.
- Colourway swap: change `map`, `roughnessMap`, `sheenColor`, set `needsUpdate`.

## Light rig (VÆL numbers, metres, bottle 0.275 m)
- HDRI (Poly Haven studio, CC0) as `scene.environment` only, intensity 0.5, rotated per beat for moving reflections.
- Soft key: RectAreaLight 0xfffaf3, 5.5, 0.5 x 0.9 at (-0.55, 0.32, 0.35) looking at the bottle middle: rakes the grain.
- Rim: RectAreaLight 2.4, 0.08 x 0.6 behind right.
- Shadow: DirectionalLight 0.9 from upper left, 2048 map, VSM radius 14, blur 24; ShadowMaterial floor 0.22 plus a radial contact disc 0.55 under the base. Fade both when the object lifts.
- Background: a canvas radial gradient texture, not a flat colour.

## Motion
- Beats: an array of {cam, at, spin, partOffsets, x, tilt, lift, env}. Scroll progress maps to beat index; inside a beat ease with a cubic, holding 15% at each end so every beat rests.
- Damping: `cur += (target - cur) * (1 - exp(-dt * 4.2))`, dt capped at 0.05. Idle breathing: ±0.04 rad sine on the spin.
- Copy blocks fade by distance to the beat (opacity `1 - d*2.6`) and drift 40 px.
- Phone (< 700 px): camera distance x1.5, no x offset, copy at the bottom.
- `prefers-reduced-motion`: no damping lag, no breathing.

## Drag to spin 360
- Pointer events on the canvas, `touch-action: pan-y` so vertical swipes still scroll on phones, `setPointerCapture`, cursor grab/grabbing.
- One drag across min(viewport, 900 px) = one full turn. Velocity smoothed on move; on release keep spinning with `spinV *= exp(-dt*3)`; zero velocity if the pointer paused > 80 ms before release.
- The shown angle trails the input slightly: `spinShown += (spinU - spinShown) * (1 - exp(-dt*10))`. Added on top of the beat spin, so scroll choreography still works after a spin.

## Type that read as luxury on VÆL
Display: Instrument Serif 400 (Tejjomay's pick over Bodoni Moda and Cormorant), clamp(52px, 6vw, 98px), tracking -0.01em, line height 0.98. Labels: Switzer 400, 10.5 px, tracking 0.30em, uppercase. Body: Switzer 300, 14.5 px, +0.01em, line height 1.6. Rule: big type tight, small type wide, everything one weight lighter. Every client picks their own pair; never ship a placeholder.

## QA
- `qa/proof-shots.cjs <w> <h> <prefix> [query]`: waits for `window.__ready`, wheel-scrolls to 0/.25/.5/.75/.9/1.
- `qa/spin-test.cjs <w> <h> <prefix>`: three drags, a flick (inertia), then scroll still works.
- `qa/spin-touch.cjs`: phone sideways swipe spins, vertical swipe scrolls (prints scroll before/after).
- Then side by side vs the reference (disojo-site-system `side_by_side.cjs`), scores filled honestly.
- Untested until checked by a person: real phones, Safari, low-end GPUs.
