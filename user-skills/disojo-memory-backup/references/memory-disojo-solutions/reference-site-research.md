---
name: reference-site-research
description: "Where all website quality research lives (approved benchmarks, 84-site walk, code and Awwwards study, TFTL portfolio, taste walks, 3D research, kernel, Blender setup) and what it found; open it instead of re-researching"
metadata:
  node_type: memory
  type: reference
  originSessionId: 4e567c41-ccf5-4a5c-a42f-c5d79aa67be0
  modified: 2026-11-16T15:00:07.755Z
---

Merged 2026-11-16 from 6 notes (approved benchmarks, Awwwards code study, 3D research, site system, Blender setup, redo pipeline). Originals: `memory/_archive/2026-11-16/`. Do not re-research anything listed here; open the files. `SK=~/.claude/skills/disojo-site-system`.

## The bar
- Eight sites Tejjo approved 2026-11-10: shortscut.com, bymonolog.com, disojostudio.com, oharchitecture.com.au, supersolid.agency, yourcreative.com.au, era-residence.com (Tejjo's favourite, by TFTL), thefirstthelast.agency. File: `$SK/references/approved-benchmarks.md`. Only Tejjo's word moves a site onto this list; awards do not.
- 133 first screens judged on a yes or no page (artifact L4Zia3Rph66sXruDPT4xzB): 80 yes, then 77 after detail. Verdicts in `$SK/research/landing-2026-11-10/`. By eye, yes screens are one image or word filling the frame with type fused to it; no screens are headline + sub + buttons + mock-up on white.
- All 84 yes sites walked: `$SK/references/design-moves.md`, sheets in `$SK/research/walk-2026-11-10/`. Use only after an idea is picked, never as a menu.

## What the study found
- Code (`$SK/research/code-study-2026-11-10/`): Monolog, ERA and Shortscut share one architecture built independently: motion tokens (five durations, named eases), a data-attribute reveal vocabulary, Barba transitions, a cleanup registry, one quickTo cursor, char-by-char rolling links, magnetic buttons, WebGL last. GSAP is free since April 2025. Written up in `$SK/references/interaction-architecture.md`.
- Awwwards: 1,709 jury pages; medians overall 7.40, usability lowest for 75% of winners; 85 to 94% of SOTD also win Developer. `$SK/references/award-bar.md`.
- TFTL, all 96 projects (`$SK/research/tftl-portfolio/REPORT.md`): **no template**, code overlap between their sites is 0, five platforms. They reuse the kernel, token naming, named eases, a thin top bar, a giant closing screen, a designed 404; every look comes from the client's own subject. Tejjo: "don't make it a stuck system".
- **TFTL hands-on (done 2026-11-23)**: `$SK/research/tftl-handson/`, notes 01-51 (44 studied, the rest dead or bot-blocked; `rescan.txt` = need a hand visit). README holds 36 distinct moments, the two code kits (Webflow+Slater with exact eases; Nuxt+GSAP, default ease .24,1,.36,1), and five page-close families with `closes-1.jpg`/`closes-2.jpg`. Never re-scan; never base a moment on one site. Code pass 2026-11-23: shipped JS/CSS saved per site in `code/<slug>/` (grab.cjs); read with exact numbers in `closes-code.md` (19 closes), `frame-player-code.md` (WebCodecs .af player), `loaders-code.md` (fake progress, short on return, loader becomes hero). Never re-grab.
- Taste walks: `$SK/taste/` (ERA, Monolog, five benchmarks). disojostudio.com against them (2026-11-10): 36 text sizes vs 10 to 12, 19 saturated filled buttons vs 0, 0.9 media a screen vs 2 to 2.9. Still to do: rewrite taste/README.md from rules to method.
- The dissection on 2026-11-11 ([[project-csk]]): the sites Tejjo calls good share one huge visual, one confident line in the client's words, an ordinary structure and care on details.

## Tools
- Kernel practice build: `$SK/kernel/` (Astro, GSAP 3.15, Lenis, Barba), launch config "kernel-lab" on :4790. Not in starter/ yet.
- Scripts: teardown.cjs, side_by_side.cjs, study_site.cjs, taste_probe.cjs, taste_compare.py in `$SK/scripts/` and `$SK/taste/`.
- Site system history: 14 website skills merged into disojo-site-system on 2026-11-02 (archived in `~/.claude/skills-archive/2026-11-02/`, including the redo pipeline). Settings backup `~/.claude/settings.before-site-system.json`. The 3D skills (3d-product-site, scroll-3d-site-recipes, 3d-lookdev, packaged-product-3d, high-ticket-flagship-3d) overlap and were never merged.
- Full-bleed photos need 2300px+ sources, 3000px+ to be safe.

## 3D (2026-11-03, report https://claude.ai/artifact/A4Sa7EoeZde2BHHsjd2mQT, files `research/premium-sites-2026-11/`)
- Most "3D" sites are not real-time 3D: ERA is webm video, Ethical Life is 421 webp frames. Real GLB only on Ciao, StringTune, Shopify W26, Cartier, Igloo. Ciao's realism: MeshPhysicalMaterial, PMREM HDRI, bloom, SMAA. The bottleneck is the model pipeline.
- Techniques A to F: live model, frame sequence, video scrub, shader on media, full world, generated art direction. Approved 2026-11-03 to add the table, scripts and a separate 3D performance budget to the skills: not done.
- Webflow only when a client needs to edit themselves; Astro stays default.
- Blender: 5.2.2 with the blender-mcp bridge (`~/.disojo-tools/blender-mcp`, MCP server `blender`, telemetry off). Each session: N in the viewport, BlenderMCP tab, Connect. The three-object proof test Tejjo asked for was never run. Never use --factory-startup with save_userpref.

## Test runs
- Movement First PT redo (2026-11-01, Tejjo's test): `~/Desktop/websites ARCHIVE/movementfirst-redo`, 27 pages, not deployed.

- 2026-11-23 late: kit-code.md (menus, page changes, hovers, reveals, cursor), every loader/close/menu has a picture sheet in tftl-handson/moments/overview-*.jpg, hand visits in scan/<slug>/hand/. Kernel now has data-film (tools/make-film.cjs).
