# Food and non-packaged products: the honest ranking

No template exists for a macaron or a mille-crepe. Routes, best first for a Disojo-sized project:

| Route | Quality | Cost / time (my estimates) | Weak spot | Use when |
|---|---|---|---|---|
| **1. Photoreal stills + cut-outs, 2.5D motion** (what Mochi & Midori ships) | High, honest | hours; needs good photos (AI stills worked) | Not true 3D; cut-out edges need hand checks (rembg + colour masks) | Default for food |
| **2. AI video turntable, scrubbed on scroll** | High if the take is clean | generations are cheap; picking takes time | Layers/details morph; AI watermarks; 1080p only | Hero film; pick a take where details hold at 0/2/4/6/8 s |
| **3. Phone photogrammetry** (Polycam etc.) | Medium for matte items (bread, brownies) | 1-2 h capture + clean-up | Glossy, translucent, powdery items fail; needs Blender clean-up and a retopo/bake | A matte hero item and a patient capture |
| **4. AI image-to-3D** (Rodin, Tripo, Meshy; ranked in the 2026 comparison linked in research.md) | Variable; fast | minutes per model, credits | Text/labels garble; geometry needs clean-up; check licence/terms | Organic shapes; test first, never promise |
| **5. Hired 3D artist (Blender/C4D)** | Highest | days; quote separately | Cost | The client pays for a signature hero |
| **6. Procedural in code** (our green layered cake) | Looked cheap next to photos | hours | Materials/lighting need Blender-grade work | Only with real PBR textures from photos; otherwise skip |

## Test protocols (run these before promising 3D)
**AI image-to-3D (30 min, untested by us so far):** pick 3 hero items; shoot each from 4-6 sides on a plain background in daylight; upload multi-view to Rodin and Tripo; export GLB; load in the kit's viewer;
score: silhouette match, texture sharpness, hole count, text legibility, file size. Write the result in this file.
**Photogrammetry capture guide:** matte item on a plain rotating plate; 60-90 photos, 3 elevation rings, 70 percent overlap, even soft light, no flash, no moving shadows; powder or glaze = dust with a removable spray or give up.
**AI video take picker:** extract frames at 0, 2, 4, 6, 8 s and compare layer/feature counts; reject any take where the plate and subject do not rotate together or the loop does not close; always use the same still as start and end frame.

## Quoting
Packaged goods with print files: template route, about a day (estimate). Food: photoreal route, include the AI-asset disclosure (Gemini's invisible SynthID mark). Real 3D of a bespoke product: quote an artist,
state "real 3D needs a model" in the proposal (see `disojo-3d-product-site`).
