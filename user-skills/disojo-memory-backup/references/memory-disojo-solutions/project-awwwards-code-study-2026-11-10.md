---
name: project-awwwards-code-study-2026-11-10
description: "READ FIRST for site quality work: 2026-11-10 code study of 137 reference sites + hand-read bundles; the shared architecture found; motion kernel practice build at skill kernel/"
metadata:
  node_type: memory
  type: project
  originSessionId: 2b056b99-c661-4dfb-9342-4067ab1e7d93
  modified: 2026-11-10T07:33:00.862Z
---

Tejjo, 2026-11-10: "not awwwards level"; "do everything A to Z (skills, systems, research, design, taste) before real projects; until then practice and research". Kiran is paused and stashed ([[project-kiran-roy-third-pass]]).

**Done**
- Full scan of 137 sites (yes77 plus approved8 plus TFTL work) with `study.cjs`.
- Scripts and notes copied to `~/.claude/skills/disojo-site-system/research/code-study-2026-11-10/`.
- Hand-read the shipped code of Monolog, ERA (TFTL), Shortscut, Ciao and the TFTL site (`notes-code-reading.md`).

**Finding (the missing key)**
- Monolog, ERA and Shortscut share one architecture, built independently.
- GSAP is free since April 2025, including SplitText.
- Shortscut and Monolog share code, in the style of the Osmo vault (osmo.supply, a paid library by Snellenberg and van Eck).
- The shared architecture:
  - motion tokens: five durations, four to six named CustomEases
  - a data-attribute reveal vocabulary, each with set/show/hide states
  - Barba transitions that run the hide state before the veil
  - a cleanup and suspend registry
  - one quickTo cursor
  - text links that roll char by char (SplitText propIndex plus CSS delay)
  - magnetic buttons
  - WebGL loaded last as an accent
- Ciao's realism comes from MeshPhysicalMaterial, a PMREM HDRI, bloom and SMAA.

**Practice build**
- `~/.claude/skills/disojo-site-system/kernel/` (Astro, gsap 3.15, lenis, barba), launch config "kernel-lab" on :4790.
- Tested in Chrome at 1512 and 390: transitions, rolls, follower and shader field work.
- Not wired into starter/ yet.

**Awwwards archive (Tejjo asked: study every Site of the Day, deeply, no wasted usage, agents only if needed)**
- Scratchpad `aw/`:
  - `sotd.jsonl`: 6,308 SOTD since 2009, with tags, URL, date, maker and dev award
  - `sotm_soty.json`: 229 Site of the Month/Year
  - `detail.jsonl`: jury scores for every SOTD 2018+, with per-juror votes and dev sub-scores
- Browser scan of 549 winners (SOTY + SOTM + last 12 months SOTD) into `study/out-aw`.
- Since 2020, 85 to 94% of SOTD also win the Developer Award.
- Self-reported tech tags are empty for 2023-24, so use the browser scan instead.
- Top makers 2023+: Locomotive, Obys, Immersive Garden, TFTL, Unseen, Holographik.
- The scratchpad is temporary: copy the results into `skill research/code-study-2026-11-10/` when done.

**Next**
- Aggregate numbers (`aggregate.py`) once the run finishes.
- Definitive report as an Artifact: stack, step process, key.
- Then update the skill (stack, kernel into starter, gates).
- Then more practice demos before any client.
