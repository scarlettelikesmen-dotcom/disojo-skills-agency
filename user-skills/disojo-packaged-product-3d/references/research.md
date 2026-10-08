# How the reference sites get clean product assets (researched 2026-10-08)

Method: loaded each site in headless Chrome, listed every image/model/video request, downloaded the GLBs and read their glTF JSON.
Verified = measured from files. Inferred = reasoning, labelled.

## ciaoenergy.com (agency: SKAALD, per Webflow's Made-in-Webflow showcase)
- Webflow + GSAP/ScrollTrigger + one fixed WebGL canvas.
- `cdn.skaald.com/ciaoenergy/webgl/can.glb`: 162,956 bytes, 3 meshes (Shell, Bottom, Top), 3,918 vertices, materials "Etiquette" (label) and "Metal", no embedded textures. VERIFIED.
- Six flavour label textures `ciao-energy_texture_<flavour>.avif`, 188-247 KB each, swapped onto the same can. VERIFIED.
- `hdri2.hdr` 1,396 KB for reflections; `base.glb` 607 KB = four plain metal meshes (cable, tubes, base plates), no textures; a 364 KB WebM loader; seven 10-14 KB AVIF flavour backgrounds. VERIFIED.
## palmo.co.in
- `model/can1.glb` is the SAME FILE as Ciao's `can.glb` (identical md5 d3de265a5a20dc62378794162a428a3c). VERIFIED. => a shared stock/template model; origin unknown (INFERRED). Check licence before reusing any model.
- `coconut.glb` 4.6 MB: 13.6k vertices, two 1024 px PNG textures (colour + normal), nodes coconut_left / coconut_right / milk animated in code. VERIFIED.
- HDRI `empty_warehouse_01_1k.hdr` (a Poly Haven-style 1k HDRI name; origin INFERRED).
## agrumeafarm.it
- Jars are flat per-flavour images `*_result.webp` (about 45-56 KB) served from a Prismic CMS; same angle and lighting for every flavour; tilt/blur done in code (canvas). VERIFIED. Whether they are renders or photo composites cannot be proven from the files.

## Takeaways
1. One template mesh + N flat label images = every variant, tiny payload, exact brand colours.
2. The HDR environment does most of the "premium" look (metal, clearcoat, glass).
3. Weight budget to copy: model <= 200 KB for a pack, labels <= 250 KB each (AVIF/WebP), HDR 1k about 1.4 MB.
4. For food and organic shapes there is no template: see `food-and-other-routes.md`.

## Sources
- Ciao Energy by SKAALD: https://webflow.com/made-in-webflow/website/ciao-energy
- GLB optimisation add-on (Draco/Meshopt/WebP/KTX2/AVIF): https://blendermarket.com/products/glb-optimizer
- Example of a production bottle model with separate body/liquid/label/top objects, exported GLB: https://superhivemarket.com/products/bottle-with-liquid-and-label
- 2026 image-to-3D tool comparison (Tripo, Meshy, Rodin, Hunyuan3D): https://www.3daistudio.com/3d-generator-ai-comparison-alternatives-guide/best-image-to-3d-tools-2026
- Photogrammetry vs Gaussian splatting: https://www.pix-pro.com/blog/gaussian-vs-photogrammetry
- Transparent/glossy surfaces are a known weakness of SfM and splatting: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12300396/
