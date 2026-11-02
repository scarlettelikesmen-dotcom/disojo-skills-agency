---
name: project-site-system
description: "2026-11-02 merged 14 website skills into one, disojo-site-system (six stages, Astro starter + section library, gate hook, project log); not yet run on a real client"
metadata:
  node_type: memory
  type: project
  originSessionId: 2b056b99-c661-4dfb-9342-4067ab1e7d93
  modified: 2026-11-02T04:38:04.236Z
---

On 2026-11-02 Tejjo approved merging the overlapping website skills into one system: "build specific intentional skills, not skills for the sake of having multiple skills, they should serve real things".

State:
- `~/.claude/skills/disojo-site-system` is the entry for all website work. Stages: intake, message (about 80 words a screen), ONE direction (Tejjo's only checkpoint), build from the section library, gates, ship.
- Starter: Astro 5 with 16 sections plus Card, Btn (the approved button curve) and Pic (srcset, parallax). Every section is shown at /library/ with Disojo's verified copy and the KDC photo set graded mono. The gate passes except for 1920px photos used full-bleed, which really are too small.
- Gate bug fixed: premium_gate read a density-scaled naturalWidth on srcset images (a 1920px file showed as 389px), so earlier "soft image" FAILs on sites with responsive images were wrong.
- The site-guard hook was moved to `disojo-site-system/hooks/site_guard.cjs` and tested. Settings backup: `~/.claude/settings.before-site-system.json`.
- 14 old skills are archived in `~/.claude/skills-archive/2026-11-02/`: client-playbook, client-intake, site-archetypes, site-starter, motion-recipes, launch-checklist, scroll-site-rebuild, premium-site-method, redo-pipeline, art-direction, premium-qa, site-flow, premium-look, brand-site-playbook. The backup script mirrors them to the repo under `skills-archive/`.
- New project folders are `~/Desktop/websites ARCHIVE/<slug>-site`. The log lives in `~/Desktop/DISOJO SOLUTIONS/site-system-log/`; `log.py summary` prints hours to demo, first-look verdict and fix rounds.

**Why:** the 2026-11-01 redo links did not land. The study showed the gap was photos and word count, not code. Too many overlapping skills meant no single path.

**How to apply:** start any website task with `disojo-site-system`. Next: run it end to end on one real client and record the three numbers. Tejjo has not yet said which client. Full-bleed photos need 2300px+ sources (3000px+ to be safe).
Not done yet: merging the 3D skills (3d-product-site, scroll-3d-site-recipes, 3d-lookdev, packaged-product-3d, high-ticket-flagship-3d). These overlap and are a candidate for a second pass.

Related: [[project-redo-pipeline]], [[feedback-button-motion]], [[feedback-unique-design-per-client]]
