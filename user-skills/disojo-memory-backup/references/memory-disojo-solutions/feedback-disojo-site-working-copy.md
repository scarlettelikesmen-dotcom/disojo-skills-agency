---
name: feedback-disojo-site-working-copy
description: "Disojo site edits go in ~/Desktop/disojo-mix (Tejjo's localhost :4700), never disojo-hybrid; watermark portraits with _archive/watermark_new.py (new logo)"
metadata:
  type: feedback
---

All disojostudio.com work happens in the worktree `~/Desktop/disojo-mix` (branch mix-2026-11-01), served on Tejjo's own dev server at http://127.0.0.1:4700. `~/Desktop/disojo-hybrid` is the older copy: do not edit it, and do not start servers for it (Astro 7 allows one dev server per project; check `lsof -iTCP:4700` before starting anything).

Client portraits get the corner mark from `_archive/watermark_new.py src dst` (the NEW wordmark). `_archive/watermark.py` stamps the OLD logo: never use it. Naming: `-n.jpg` clean, `-v2.jpg` marked.

**Why:** on 2026-11-02 I edited the Skye Nguyen and Lopamudra changes in disojo-hybrid, briefly put that copy on port 4700, and stamped the old logo. Tejjo: "critical error why the fuck have you used the old disojo copyright with the old logo. We just discussed this." The CLAUDE.md site section still names disojo-hybrid; the mix copy is current.

**How to apply:** before any Disojo site edit, `cd ~/Desktop/disojo-mix` and confirm :4700 serves it. Related: [[project-disojo-graphite-palette]], [[project-disojo-logo-redo]].
