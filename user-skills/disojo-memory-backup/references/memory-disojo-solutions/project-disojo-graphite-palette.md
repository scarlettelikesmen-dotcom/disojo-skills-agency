---
name: project-disojo-graphite-palette
description: "2026-11-02 Tejjo locked the Graphite palette + moving film grain for disojostudio.com in the mix localhost (~/Desktop/disojo-mix :4700); not committed, not deployed"
metadata:
  node_type: memory
  type: project
  originSessionId: 2b056b99-c661-4dfb-9342-4067ab1e7d93
  modified: 2026-11-01T22:35:36.219Z
---

On 2026-11-02 Tejjo chose **Graphite** for the Disojo site. It replaces the old warm grey, which read as a Monolog copy. Teak was the runner-up.

- **Ladder**:
  - paper #D8E2EC, raised #E6EDF4, sunk #CCD6E0, line #C1CAD4
  - label #89929A, secondary #5D646B
  - ink #091016, dark sections #0D1318
- **No accent.** Client world colours (KDC, Postcards, Mentable, etc.) are unchanged.
- **Applied in source** in the worktree `~/Desktop/disojo-mix` (branch mix-2026-11-01), 190 swaps across global.css, case-v4.css, services css, work8.css, Base.astro, about, work/index, home.js, shared.js, projects.json.
  - Private pages (portal, contract, invoice) were deliberately left alone.
  - Backup of the pre-swap src: scratchpad `src-before-graphite.tgz` (wiped on reboot).
- **Grain**: `.grain` fixed overlay in Base.astro.
  - Own tile `public/fx/grain.png`: 400px, alpha 18, 4 tones.
  - Jitters with steps(6) every 0.5s, the same technique Monolog and Supersolid use (both use one shared Webflow grain PNG; we did not copy it).
  - Turned off under reduced motion.
- **Logo exports** in `logo-exports/palette-2026-11-02/`, Graphite and Teak:
  - full wordmark
  - script O alone, cut from the current logo vector in global.css `.end .bigwm`
  - with-grain versions and platform preview sheets
- **DEPLOYED 2026-11-02** commit 2886479 (leadvix-website-80zt8mmrt). Not done yet:
  - favicon.svg and og image still use the old #EBE9E4
  - (deploy word rule still applies to anything new)
- `public/brand/wordmark-large.svg` is an OLD logo (block O), not the current one. Never export from it.

Related: [[project-disojo-redo-2026-11-01]], [[project-site-state-2026-10-28]]
