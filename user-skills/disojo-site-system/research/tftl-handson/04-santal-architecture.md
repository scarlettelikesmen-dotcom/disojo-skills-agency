# Santal Architecture (santalarch.com), hands-on 2026-11-22

An architecture practice whose idea is perception: touch, feel, hear. Study only.

## Stack
- **Nuxt (Vue), not Webflow**, a different team or a different mode from ERA and Son Daven. Six minified chunks, 1.5 MB of JS. Three.js r183 with MeshPhysicalMaterial and custom ShaderMaterials, **troika-three-text** (sharp SDF text inside the 3D scene), GSAP + SplitText, Lenis, lil-gui (their tuning panel, left in production), a WebCodecs `VideoDecoder` frame player for `/sequences/*.json + chunks/*.bin` (the same idea as Son Daven's ActiveFrame).
- **Type is Helvetica, the system font, in 400 and 500. No web font at all.** The whole voice comes from scale, layout and the 3D scene.
- 40,300px tall home. A full-screen WebGL canvas at device pixel ratio 2 (3024x1728) sits behind the page and carries most of it.
- Assets: `Door.glb` (1.15 MB, Draco), a grid texture, a "room" sequence (9 chunks, ~10 MB) and a watch sequence.

## The signature moments, and how each works
1. **The name as the roof.** "SANTAL" in Helvetica Bold across the full width at the very top, cut by the screen edge; under it a navigation of six items set as columns, each with a thin line under it that fills as you scroll through that part (the nav is also the progress bar). Everything else is empty light grey. Confidence by emptiness.
2. **Words passing through space.** "Perception Defines Experience": the words are 3D text (troika) in the WebGL scene, crossing each other in depth as you scroll, so one word passes in front of another.
3. **The word field.** Many small words on thin lines, tilted in a 3D grid that rotates with scroll and tilts slightly with the pointer (`pointerTilt`), "comet" mode on hover at the corners. Text colours, line colours and grid colours switch by theme (light / dark) inside the scene.
4. **The door.** A real modelled door (GLB). Its layers are sorted by depth and moved apart, line anchors attached to its edges; scrolling opens it and the camera passes through into a room. The room is a pre-rendered video sequence decoded frame by frame and scrubbed by scroll, so the "inside" is film-quality while the door is live 3D. **Mechanism: live 3D for the object you touch, pre-rendered frames for the space beyond.**
5. **Grid paper ground.** Sections like "Quiet" sit on a fine grid (an architect's sheet), a big Helvetica word left, a short paragraph right. The same layout repeats for each quality.
6. **Cubes and pyramids**: geometric forms with content panels (services or process) inside the same scene, navigated as you scroll.
7. Cookie bar bottom left, small and dark. Footer not reached in this pass.

## What I looked at, honestly
About 12 minutes: 5 scroll stops, the bundle searched for its libraries and the door and sequence code read in part (minified). Not done: the full scroll by wheel (the pane scrolled by script here), works and inner pages, phone, 404. This one deserves a second, slower pass with a real wheel before we try anything like it.

## What Disojo should take
- System font plus a very strong scene can be enough; the type budget is not where the premium lives.
- Nav as progress bar: each nav item's underline fills while you are in its section.
- Live 3D only for the object the visitor "touches" (a door, a product), pre-rendered frames for everything heavy behind it.
- Text inside the 3D scene (troika) when words should move in depth.
- Their tuning panel (lil-gui) shows how they work: every value is tuned by hand on screen, not guessed in code. We should do the same when building scenes.
- This is the hardest technique of the five. Only for a client whose idea needs a space to walk through, and with a budget for it.
