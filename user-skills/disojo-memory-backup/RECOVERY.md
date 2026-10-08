# Disaster recovery: new Mac, same Claude (written 2026-10-09)

## What brings "me" back
| Piece | Where it lives | In the GitHub backup? |
|---|---|---|
| Skills (44, incl. the premium-site method, anti-slop rules, kits) | `~/.claude/skills` | YES (`user-skills/`) |
| Memory notes (who you are, how you work, project status) | `~/.claude/projects/-Users-tejjo-claudeskillsthrureels/memory` | YES (snapshot in this skill, `references/memory/`) |
| Master context `~/.claude/CLAUDE.md` (working rules, "never reuse a look", credit line, etc.) | `~/.claude/CLAUDE.md` | **NO, by an older choice. See "CLAUDE.md decision" below.** |
| Plugin list (Vercel etc.) | `~/.claude/plugins/installed_plugins.json` | YES (`plugin-config/`) |
| Client website code and original assets | `~/Desktop/websites ARCHIVE/*` (1.2 GB, 47 folders) | **NO, except Postcards (own repo) and the Ascender/Mochi build copies inside skill kits** |
| Logins: GitHub (2 accounts), Vercel, Shopify, Calendly, domain registrar, Gemini | your head / password manager | NO, never |
| This chat's history | Claude app | NO (not needed: memory + skills + CLAUDE.md recreate the behaviour) |

## Steps on the new Mac
1. Install the Claude app, sign in. Install Node (nodejs.org or `brew install node`), Python 3, git, Google Chrome.
2. `git clone https://github.com/scarlettelikesmen-dotcom/disojo-skills-agency.git ~/disojo-skills-backup` (log in as that GitHub account in the browser/credential prompt; you type the password or token yourself).
3. `mkdir -p ~/.claude && rsync -a ~/disojo-skills-backup/user-skills/ ~/.claude/skills/`
4. Open Claude Code once in a project folder named `~/claudeskillsthrureels` (so memory path matches), then `bash ~/.claude/skills/disojo-memory-backup/scripts/restore_memory.sh`.
5. Put `CLAUDE.md` back at `~/.claude/CLAUDE.md` (from the private copy, see below). Restart Claude Code.
6. Tools: `mkdir -p ~/.disojo-tools && cd ~/.disojo-tools && npm init -y && npm i puppeteer-core`; Python venv with rembg/Pillow (`python3 -m venv ~/claudeskillsthrureels/.venv && ~/claudeskillsthrureels/.venv/bin/pip install rembg Pillow numpy`); `npm i -g vercel` then `vercel login`.
7. Re-login: GitHub (both accounts), Vercel, Shopify etc. Claude never types credentials for you.
8. First message to Claude: "Read the memory and the disojo-client-playbook skill, then tell me where we are." It will have your rules, your projects and the full method.

## Honest gaps (decide and close them)
- **Client code is not backed up.** A fire loses Ascender, Mochi and 45 other folders (including client originals such as logos and screenshots). Fix: push each project to a private repo under `disojo-solutions` (one repo per live client, plus one "websites-archive" repo for old/small ones; keep `node_modules`, `dist`, huge videos out via `.gitignore`/Git LFS).
- **CLAUDE.md is the piece that makes Claude talk to you "exactly like now"** and it is not in the repo. Decision needed from Tejjomay.
- Secrets and logins live only in your password manager. Put every key in one (1Password/Bitwarden/iCloud Keychain) and enable 2FA recovery codes.
