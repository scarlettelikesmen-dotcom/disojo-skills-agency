# Blender side (templates in ../templates/blender)

## Model: lathed profiles (model_v2.py)
- Units: Blender metres, profiles written in mm (`MM = 0.001`), base at z = 0.
- A profile is a list of `(r, z, slot)`; `slot` is the material index for the face that starts at that point. Build it from straight runs plus helpers: `fillet(centre, radius, a0, a1, k)` for rounds, `superellipse(r0, r1, z0, z1, n)` for a shoulder that meets the neck almost flat.
- `spin(name, prof, slots, steps=256)` makes the mesh with UVs: u = angle / 2π, v = arc length / total length. This layout is bake-ready and orientation-predictable (front of the bottle = known u). Then `remove_doubles` welds the seam and axis, `set_sharp_from_angle(38°)` keeps crisp edges crisp.
- Include the inside (inner wall, mouth, threads) for any part that opens. Moving parts (cap, insert, seal, O-ring) are separate objects with their own origin so the web can move them.
- Print the measured dimensions after building and compare to the sheet.

## Masks (masks.cjs)
- Render artwork as big PNG masks in headless Chrome with the real font loaded (`document.fonts.load`, `domcontentloaded`, not networkidle). Wordmark 4200x1200, round engravings 2048², perforation patterns with PIL (seeded).
- White = mark. Keep the viewBox math written in the file so the mask's physical size is known (VÆL wordmark: 450 units wide in a 37 mm radius context).
- macOS has no `timeout` command; don't use it.

## Materials (materials_v2.py)
- Helper class `G` builds node graphs in a few lines (`math`, `noise`, `image`, `mixc`, `bump`, `ramp`).
- Project every mask in object space, never via the UV map:
  - cylinder print: `theta = atan2(X, -Y)` (0 at the front), `u = 0.5 + theta*R/width`, `v = 0.5 + (Z - centreZ)/height`.
  - flat discs (bottom, cap top): `u = 0.5 + X/size`, `v = 0.5 + Y/size`.
  - tubes (perforation): u from angle, v from Z, extension EXTEND.
- Surface recipes that read premium:
  - powder coat: noise 620 (detail 3) + fine noise 2600 at 0.18 for bump (strength 1, distance 0.0006); roughness 0.6-0.8 from the grain, minus 0.22 on the print; print sits a hair proud (+0.25 height).
  - brushed metal side: noise stretched along one axis (angle*0.025, Z*0.02) at scale 3000 into roughness 0.2-0.34 and a faint bump.
  - spun top: noise on radius (rho) at 6000, engraving darker and rougher.
  - polished steel: roughness 0.07-0.13 from low noise. Rubber: 0.012 grey, roughness 0.62.
- Colourways: one global (`COLOURWAY`) sets base and ink colour; bake colour and roughness once per colourway, normal and AO once.
- An unused node (VÆL's voronoi grit) is harmless but delete it in new work.

## Preview (preview_v2.py)
Cycles, HDRI lighting with camera rays seeing flat grey, views front/close/cap/bottom. Stores and restores camera, render settings, world and visibility. Compare every view to the sheet close-ups before baking.

## Bake (bake_v2.py)
- Per object, per map: create the image, add an image node to every material slot and make it active, bake, save PNG, remove the node.
- Colour and alpha: `rewire()` sends whatever feeds Base Color (or Alpha) into an Emission shader on the output, bake EMIT, then undo. This captures procedural colour without lighting.
- ROUGHNESS 4 samples, NORMAL tangent 8, AO 96. Margin 16, EXTEND.
- Hide non-project objects from render while baking. `ONLY = ['V2_Body']` rebakes one part.
- AO trap: an enclosed part (neck under a cap, insert inside a body) bakes nearly black. Hide the enclosing part while baking it, or do not use AO on it in the web.

## Export (export_glb.py) and maps (convert_maps.sh)
- Select the project collection, export GLB with Draco (level 7, position 16, normal 12), tangents, no images, no cameras/lights/animations, Y up.
- Maps: `cwebp -quiet -q 84 -m 6` for colour, `-q 90` for normal (artefacts show on normals first). Rename to `<part>-<map>[-<colourway>].webp`.
