---
name: reference-environment
description: "Machine, tools, backups, screenshot method, Python venv, Vercel and AI image tool notes"
metadata:
  type: reference
---

Moved verbatim from CLAUDE.md on 2026-11-10 when it was cut to under 25 lines. Dated facts may have gone stale: verify before relying on them.

## Environment notes
- macOS, zsh. Project work for sites: `~/Desktop/websites ARCHIVE/` (the Disojo site working copy is `~/Desktop/disojo-mix` on :4700; `disojo-hybrid` is old). Skills live in `~/.claude/skills`, mirrored to the private GitHub repo scarlettelikesmen-dotcom/disojo-skills-agency (working copy ~/Desktop/DISOJO SOLUTIONS/skills); Memory notes are backed up via skill `disojo-memory-backup` (run `~/.claude/skills/disojo-memory-backup/scripts/backup_memory.sh` after memory changes); CLAUDE.md and settings.json are backed up in the same repo under `claude-config/` (approved 2026-10-09); client website code is on the repo branch `archive-client-code`; recovery steps in RECOVERY.md. Postcards site: private repo disojo-solutions/postcards-perfumes-web (agency account). Two GitHub logins saved: put the username in remote URLs.
- Headless Chrome is the reliable way to screenshot and test: `playwright-core` with `channel:'chrome'` (or `puppeteer-core`); the browser pane can return blank images when hidden. The Claude scratchpad under `/private/tmp` is wiped on restart: keep scripts in the repo or in a skill, and reinstall `playwright-core` after reboot. Lighthouse: `~/.claude/skills/disojo-site-system/scripts/lighthouse_summary.sh <url> [desktop]`.
- Python needs a venv (system pip is blocked): `~/claudeskillsthrureels/.venv` has rembg and Pillow (the system Python also has Pillow, no numpy). ffmpeg and cwebp are installed (brew).
- Vercel CLI is logged in (an update is available, not required); public demos go in their own project (preview deploys under a team project are login-protected).
- AI footage and image tools used so far: Gemini web app (Omni 1.1 Flash video, image generation; Tejjo generates the hand-held phone mockups there from screenshots I supply). The Veo API needs billing. Outputs carry an invisible SynthID mark: disclose to clients.
