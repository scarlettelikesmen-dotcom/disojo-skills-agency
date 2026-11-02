# The 3D pipeline (assets included in the flagship)

3D is included in the 10-15k, so this pipeline has to be dependable, bounded and honest. The look comes from **light, material and camera**, not polygon count (Ciao's can is a 0.16 MB model; its look is HDRI, tone mapping and bloom). Detail skills: `disojo-3d-lookdev` (look recipe, Gate 3), `disojo-packaged-product-3d` (template route and sourcing), `disojo-3d-product-site` (page recipe), `3d-web-experience` (R3F and performance).

## 1. Choose the route (Phase 0 and Phase 1; write it into the scope sheet)
| The client sells or is | Route | Notes |
|---|---|---|
| Cans, jars, bottles, boxes, tubes | **Template model + the client's flat label art** (`disojo-packaged-product-3d` kit) | Needs print files or a dieline; send `templates/dieline-request.md`. Do not trace photos of labels. |
| Something with a real GLB supplied | **Supplied model** | Check scale, materials, polygon count, licence. Optimise. |
| An abstract idea, a brand mark, type, glass, particles | **Code-built 3D** in Three.js | Not yet validated on a Disojo client project: treat the first as a test and record what broke. |
| A distinctive hero object (odd shape, embossing, pump, pouch, jewellery, electronics, furniture) | **Licensed model, scan, or a hired 3D artist** | Price the artist or licence into the quote. Do not promise AI output. |
| Food that is not in a pack | Photoreal stills and cut-outs, AI video turntable or a hired artist (`food-and-other-routes.md`) | Procedural 3D food looked cheap on a past build. |
**Hard stop:** no model, no print files and no budget for an artist = do not promise real 3D. Offer the strongest honest alternative (photoreal stills, a code-built scene) and say so in the proposal.

## 2. Sourcing and licences (every asset)
- Label art from the client's print files. Generic pack models from our own kit, a marketplace model with a commercial-use licence, or a commission.
- HDRI: Poly Haven publishes CC0 HDRIs (check the licence line on each page); use 1k (about 1.4 MB). Textures from our own photography.
- **Never reuse any file from a reference site** (models, HDRIs, textures, loader video). Two well-known sites loading one identical can file is the exact situation to avoid for a distinctive brand.
- Log each item in `00-admin/licences.md` (source, licence, where used, AI flag). Details: `disojo-packaged-product-3d/references/sourcing-and-licences.md`.
- AI image-to-3D and Spline AI: rough meshes, single simple objects; check every detail (especially label text) and disclose AI use (invisible SynthID mark).

## 3. Model prep (hand-made or modified models)
Follow `disojo-packaged-product-3d/references/blender-and-compression.md`: real scale, one object per material, clean UVs, a named `Label` material with no baked texture so artwork swaps at runtime, glTF 2.0 binary export (Y-up, transforms applied), target a pack model <= 200 KB, vertex count <= 8k for a pack, no hidden internal faces, label seam at the back.

## 4. Optimisation
`npx @gltf-transform/cli optimize in.glb out.glb --compress draco --texture-compress webp` (check `--help`; versions differ). Host the Draco decoder files or use Meshopt. Budgets: model <= 0.6 MB each (flagship hero objects may go higher only with a measured reason), HDR <= 1.5 MB, loader video <= 3 MB, home page first load <= 6-8 MB. Record the before and after sizes in the QA report.

## 5. Look-dev on one test scene (Gate 3)
1. Renderer: ACES filmic tone mapping, sRGB output, capped pixel ratio (measure; drop on weak devices).
2. HDRI environment, plus at most one key light.
3. Materials: metals with high metalness and low roughness, clearcoat on printed or painted parts, separate label material. No default grey everywhere.
4. Subtle bloom (the reference setup used a strength around 0.1); raise only for emissive parts.
5. Contact shadow or base so the object sits somewhere.
6. One camera move eased with the brand's ease from `tokens.json`.
7. Screenshot desktop and phone width and the end of the move; compare beside a reference frame; list three honest differences; fix the biggest; reshoot.
Test heavy WebGL in a **real-GPU browser**; headless software GL stalls and misleads.

## 6. Integration into the site
- **One portable scene module** (Three.js), driven by one scroll-progress value (0 to 1) from the page. Sections are normal DOM on top of a fixed canvas, so all copy stays in the DOM.
- Stack: custom code by default (Astro or Next, Three.js or React Three Fiber, GSAP ScrollTrigger, Lenis). The same module can run inside a Webflow embed if a client must edit content. Webflow and Framer do not make or natively render 3D.
- Per-variant theming from one config object; colour animates with GSAP, not by remounting the scene.
- Loader tied to real asset progress, capped near 3 s, with a skip; the page is never held hostage by it. Scroll never locks past the cap.
- Lazy-load the model; render on demand; pause rendering off-screen; load below-the-fold scenes later.

## 7. Fallbacks (included in scope, not extras)
- **No-WebGL:** a static image of the object with the same copy.
- **Phone:** a simplified scene (lower pixel ratio, fewer effects) or a poster; the references branch near 1024 px wide.
- **Reduced motion:** no scroll-jacking, no large camera moves, everything visible. (Ciao's script had no such path; ours does.)
- **Slow network:** poster first, model later.

## 8. Scope control for 3D (the scope sheet's 3D table)
Count and write: hero objects, variants, scenes, camera moves, who supplies the model or print files, route, phone treatment, source transfer. Each extra object, variant, scene or move is a change order. Two revision rounds per stage apply to what is in the table.

## 9. QA for 3D (`disojo-site-system` rows C1-C7)
Weights, fallbacks, reduced motion, off-screen pause, side-by-side comparison, real-GPU test, console clean. State plainly what was not tested (real phones, Safari).

## 10. Handover for 3D
Optimised GLBs, the scene module and how it loads, the variant config, the licence log, the AI-disclosure note, source files if scope says they transfer, a note on how to add a variant.

## 11. Honest limits (say them to Tejjomay and, where relevant, the client)
- High-end hand modelling is not something the AI does well alone; a hero object that is hard to build needs a licensed model, a scan or an artist.
- Code-built 3D and the flagship scope are not yet validated on a client; treat the first project as validation and note what broke.
- Real phones and Safari have not been tested so far.
- Templates are generic; distinctive packs need an edited profile or a bought or modelled mesh.
