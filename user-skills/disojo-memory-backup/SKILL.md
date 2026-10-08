---
name: disojo-memory-backup
description: Backup and restore of Claude's memory notes for Tejjomay's projects (business context, working preferences, project status), stored as a snapshot inside this skill and mirrored to the private skills repo on GitHub. Use when asked to back up or restore memory, when setting up Claude Code on a new Mac, or when the memory folder looks empty or wrong.
---

# Disojo memory backup

Claude's memory notes live in `~/.claude/projects/-Users-tejjo-claudeskillsthrureels/memory/` (one file per fact plus `MEMORY.md`, the index
loaded each session). That folder exists only on this Mac. This skill keeps a snapshot in `references/memory/` so the notes ride along with
the skills backup (private GitHub repo `scarlettelikesmen-dotcom/disojo-skills-agency`, local copy `~/Desktop/DISOJO SOLUTIONS/skills`).

## Back up (run after memory changes, and at the end of any long session)
```bash
bash ~/.claude/skills/disojo-memory-backup/scripts/backup_memory.sh
```
Snapshots the memory folder into `references/memory/`, scans for secrets (aborts if it finds a token or key), mirrors all skills into the
Desktop repo, commits and pushes. Prints what changed. The repo must stay PRIVATE: the notes hold business context and an email address.

## Restore (new Mac, or after a wipe)
1. `git clone https://github.com/scarlettelikesmen-dotcom/disojo-skills-agency.git ~/disojo-skills-backup` (needs that GitHub account's login).
2. `rsync -a ~/disojo-skills-backup/user-skills/ ~/.claude/skills/`
3. `bash ~/.claude/skills/disojo-memory-backup/scripts/restore_memory.sh` (copies the snapshot back; refuses to overwrite a newer file unless `--force`).
4. Memory is keyed to the project folder path. If the project lives somewhere else now, pass the memory dir: `restore_memory.sh <dir>`.

## Full disaster recovery
See `RECOVERY.md` (also at the repo root): what is covered, the new-Mac steps, and the known gaps (client code, CLAUDE.md, logins).

## What is deliberately NOT here
`CLAUDE.md` and `settings.json` ARE backed up now (repo folder `claude-config/`, approved 2026-10-09). Secrets never go in memory: the backup script refuses if it sees one.
