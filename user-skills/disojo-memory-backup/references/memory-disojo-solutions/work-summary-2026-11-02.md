---
name: work-summary-2026-11-02
description: Disojo site session 2026-11-02 - featured Mentable section, 8,750 fix, analyst hand photo, image-direction talk, compaction settings; nothing deployed
metadata:
  type: project
---

**Done on localhost (~/Desktop/disojo-hybrid), NOT deployed (waits for "deploy"):**
- Featured project section `#featured` under the hero (src/pages/index.astro, styles appended to src/styles/global.css): Mentable, "We helped Mentable raise $750,000 in pre-seed funding.", stats $750,000 / 8,750, "Read the success story" button, image /work/mentable/site-home-2611.webp.
- Pre-registrations corrected to **8,750** everywhere (hero work lists, src/data/v4case.mjs result text + new `results`).
- "We build it in stages" figure: /work/mt-analyst-hand-v3.jpg (1122x1192, cropped 15% from bottom per Tejjo, AI-generated hand from ~/Desktop/orderbro.png, watermarked; clean copy in _archive/originals-prewatermark).
- Verified at 1512 desktop and phone with screenshots.

**Pending / open:**
- Deploy when Tejjo says "deploy".
- Nav text vanishes over the dark Mentable image (fix idea: data-nav-bg / data-nav-ink like About). Offered, not answered.
- Positioning open items: see [[project-disojo-positioning-2026-11-02]].
- Image direction (Monolog-style big aesthetic photos): recommended photos of client worlds (KDC room, Postcards bottles, turmeric) graded to one look, licensed stock only as mood, no AI image next to a client result. Offered a grade script + 3-photo localhost test; asked which clients would allow a shoot. Awaiting answer.

**Claude config changed:** ~/.claude/settings.json env CLAUDE_AUTOCOMPACT_PCT_OVERRIDE=30 (300k on a 1M window, variable name unverified against docs); CLAUDE.md "Compact instructions" section (write memory note + work summary before compacting, drop anything unnecessary). Pre-compact hook offered, not added.

## Later 2026-11-02
- DEPLOYED e1ba18b (featured Mentable, 8,750, analyst photo, Kunal photo + 10 hrs card in #flow) and 87ac2df (Way of working step 01 = Kunal at kit, step 04 = KDC dark kit). Live site is built from **~/Desktop/disojo-mix** (branch mix-2026-11-01; .vercel/project.json copied from disojo-hybrid). I edited disojo-hybrid by mistake once, reverted it.
- KDC images harvested to DISOJO SOLUTIONS/mockup-sources/kdc-2026-11-02 (banner.png = Kunal; background-1..7, likely stock bought by KDC).
- Gate found (not fixed, Tejjo said hold): Parag review photo soft (640px source), phone labels 11.5px in What we fix. Kunal photo appears twice on home.
- Built skills disojo-premium-look (composition probe, premium gate, first-look review, BANDS.md study) and disojo-image-pipeline (tiers, shot list, grade.py, prompts). Site guard hooks in settings.json (PostToolUse track + Stop block). Study: imagery is the gap (refs 3-8/8 screens with a big image, ours 0-2/8).

## Later still 2026-11-02: website system merge (approved by Tejjo)
- Built `~/.claude/skills/disojo-site-system`: SKILL.md (six stages), references (message, direction, sections, launch, lessons, first-look, composition-bands and others), templates (MESSAGE, BRIEF), scripts (new_site.sh, log.py, gate and audits), starter with the section library at /library/.
- Verified: the starter builds; the gate on /library/ passes everything except full-bleed photos at 1920px (a true finding); a scaffolded test project builds; the hook fires from its new path.
- Fixed a premium_gate bug with srcset widths.
- Archived 14 skills (not deleted); repointed 17 files across 10 skills; updated CLAUDE.md (site section + Lighthouse path); added the archive to the backup script.
- Nothing deployed. The disojostudio.com code was not touched.
