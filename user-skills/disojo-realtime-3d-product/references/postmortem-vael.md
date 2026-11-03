# Post-mortem: why VÆL's 3D failed three times, and what made it work (2026-11-03)

## Attempt 1: Blender renders on a site (rejected as "very okay, not good")
- What we did: modelled the bottle, rendered stills and a 61-frame exploded sequence in Blender, played them on scroll.
- Why it failed: renders are pictures, not a product you can touch. No light moves on the surface, nothing responds to the visitor. Palmo and Ciao are live WebGL; ours was a slideshow pretending to be 3D. Also modelled from two low-res ChatGPT collages whose proportions disagreed, so the object itself was a guess.
- Lesson: when the reference is live 3D, the answer is live 3D. Rendered sequences are a fallback, never the hero.

## Attempt 2: live 3D v1 ("why the fuck is so disgusting")
- What we did: exported the same Blender model to GLB and lit it in Three.js.
- Why it failed:
  1. All the detail lived in procedural Cycles nodes. glTF does not carry node graphs, so the browser got flat colours: a smooth tube with a grey cap.
  2. The model had no surface design at all: no grain, no print, no machining, no seal ring, no engraving. Premium is micro detail; we had none.
  3. The wordmark texture came out mirrored, then upside down (UV v direction plus glTF `flipY`), patched instead of fixed at the source.
  4. Lighting was flat, so even what detail there was could not be seen.
- Lesson: bake every detail into maps on a real UV layout, design every surface, light from the side.

## The detour that cost trust
- I said, in effect, that this level needs a 3D artist or a different route. Tejjomay: "i cant hire people... the palmo's dev said that it took him just 3 days because he told his claude that it is possible". They were right.
- The teardown of ciaoenergy.com proved it: a 163 KB can, ~200 KB label images, one HDRI, bloom and anti-aliasing. Small, reachable assets. The quality is maps + light + motion discipline.
- Earlier the same day I had also called gate passes "audited". Gates check defects; they are not taste.
- Lesson: teardown before declaring anything hard; side by side before declaring anything good.

## Attempt 3: v2 (worked)
What changed, in order:
1. Tejjomay supplied a real reference sheet (views, close-ups, cut, exploded, 275 x 74 mm). Every surface got a finish from it.
2. Rebuilt every part as a lathed profile with arc-length UVs, so baking needs no unwrap and textures map predictably (no more mirrored print).
3. Materials stayed procedural in Blender but every mask was projected in object space (angle around the axis, height, planar XY), so they bake straight onto the UVs.
4. Baked colour, roughness, tangent normal, AO (and Core alpha) per part, all colourways, in about a minute on GPU.
5. Web: MeshPhysicalMaterial with those maps, studio HDRI for reflections at 0.5, soft RectAreaLight raking from the left, thin rim, soft VSM shadow + contact disc, NeutralToneMapping.
6. Tuned by eye in the browser: normalScale 1 → 0.26 (orange peel → sand); AO removed from the neck and Core (baked black while enclosed); floor shadow fades when the bottle lifts; camera pulled back where the cap was cut off.
7. Scroll beats with holds and damping, then drag-to-spin with inertia.
8. Side by side against Ciao: object quality matched; scene drama still behind (stated plainly, sent with the sheet).

## Smaller mistakes that still cost a round
- Showed the proof in Inter Tight, a placeholder, after Tejjomay had already chosen fonts. "Why are you using this bullshit font?" Type ships with the first screenshot.
- Opened index.html as file:// in the browser pane: 3D cannot load that way. Always the http://127.0.0.1:<port> link.
- The side-by-side screenshots caught copy mid-fade: pick scroll stops at beat centres.
- Downloaded two HDRIs when one was asked for. Downloads: exactly what was approved.

## The one-line version
Reference sheet → design every surface → bake it → light it from the side → move it with restraint → compare it to the reference before anyone sees it.
