# Disojo Claude skills: full backup

Private backup of everything skill-related on Tejjomay's Mac (2026-10-07). Keep this repo PRIVATE: it includes Anthropic's app skills (some carry
proprietary license terms, personal use only) and a Postcards example config with a client's real email and phone.

| Folder | What | Restore |
|---|---|---|
| `user-skills/` | 40 folders from `~/.claude/skills`: the 9 Disojo skills + 31 others (start with `disojo-client-playbook`) | `rsync -a user-skills/ ~/.claude/skills/` |
| `vercel-plugin-0.30.0/` | The Vercel plugin as installed (skills, agents, commands, hooks) | Reinstall from the Vercel plugin repo; this copy is the exact version used |
| `anthropic-app-skills/` | Anthropic's Claude-app skills (17), newest copy of each | Normally reinstalled by the Claude app; copy a folder into `~/.claude/skills/` to use it standalone |
| `plugin-config/` | Which plugins and marketplaces were installed | Reference for reinstalling |
| `builtin-skills.md` | Names and descriptions of built-in skills (not files) | Return with a Claude Code reinstall |

New Mac: `git clone https://github.com/scarlettelikesmen-dotcom/disojo-skills-agency.git ~/disojo-skills-backup && rsync -a ~/disojo-skills-backup/user-skills/ ~/.claude/skills/`
(needs access to that GitHub account), then restart Claude Code. Full list: `INVENTORY.md`.
Memory notes are in `user-skills/disojo-memory-backup/` (restore script included). CLAUDE.md and settings.json are in `claude-config/`. Client website code is on branch `archive-client-code`. NOT here: logins/keys. The Postcards code is in its own repo (disojo-solutions/postcards-perfumes-web).
