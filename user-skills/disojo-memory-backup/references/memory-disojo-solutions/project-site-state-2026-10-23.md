---
name: project-site-state-2026-10-23
description: Disojo site DEPLOYED 2026-10-23 (commit 444f168): What we fix section, underline CTAs, footer flip, Systems and automation rename; what is still open
metadata:
  type: project
---

Deployed to www.disojostudio.com on 2026-10-23 (branch site-rebuild-astro-v2, commit 444f168, pushed). Tejjo said "deploy everything".

**What shipped:** home "What we fix" (pick-and-answer panel, hover switches, #2 default) + word sentence (look/runs/system, hover fills, fixed detail row, "Browse all services"); every CTA is an underlined text link; footer flips black under light page endings (script in Footer.astro); service renamed "Systems and automation" (company line "Digital systems & identities" kept); new nav logo; contact line "A short chat is enough..." removed.

**How it was merged:** the 4402 copy (`~/Desktop/disojo-hybrid-v3`, still NOT in git) was three-way merged into main against base c990d58 so the 10-22 phone, title and favicon commits stayed. v3 copy is now stale: from here on work in `~/Desktop/disojo-hybrid` (dev: `npx astro dev --port 4399`, open http://localhost:4399, not 127.0.0.1).

**Still open:** copy of the new section is placeholder wording (Tejjo has not approved the exact lines); phone and Safari untested by a real device; CTA labels ("Build with us") not renamed; case-study redo (10 layouts at localhost:4403/cs, no pick yet); other pages in old style; logo only a 700px trace (need vector); Instagram bio options given, no pick; pill/CTA mock-ups in `_archive/work-options/ws/` (served on 4455).

See [[project-site-state-2026-10-22]] and [[feedback-how-tejjo-iterates]].
