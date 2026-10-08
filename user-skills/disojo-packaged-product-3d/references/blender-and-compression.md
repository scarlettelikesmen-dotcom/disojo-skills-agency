# Hand-made models and shipping them

1. **Model** in Blender at real scale (1 unit = 10 cm to match the kit), one object per material: body, label, cap, liquid. Non-overlapping UVs; the label object gets a 0-1 unwrap that is a plain rectangle so flat artwork maps without distortion.
2. **Material names matter**: name the label material `Label` and leave it without a texture; the page assigns the artwork. Keep metal/glass named `Metal` / `Glass`.
3. **Export** glTF 2.0 binary (.glb), apply transforms, Y-up. Target a pack model <= 200 KB (Ciao's can is 160 KB).
4. **Compress**: `npx @gltf-transform/cli optimize in.glb out.glb --compress draco --texture-compress webp` (check `--help`; versions differ). A Blender add-on such as GLB Optimizer can do Draco/Meshopt and WebP/KTX2/AVIF in one export (see research.md).
5. **Load in three.js**: GLTFLoader + DRACOLoader (host the decoder files) or MeshoptDecoder; replace the `Label` material's map at runtime exactly as `stage.js` does.
6. **Check**: shaded and wireframe screenshots, vertex count (<= 8k for a pack), no hidden internal faces, label seam at the back.
