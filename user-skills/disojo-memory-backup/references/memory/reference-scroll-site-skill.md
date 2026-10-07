---
name: reference-scroll-site-skill
description: Map of the Disojo site-building skill set (playbook, intake, archetypes, starter, motion recipes, launch checklist, scroll-site-rebuild) and when to use each
metadata:
  type: reference
---

All in `~/.claude/skills/`. Entry point for any new client: `disojo-client-playbook`. Then: `disojo-client-intake` (asset request, inventory script, brand brief), `disojo-site-archetypes` (nine audited reference sites, decision tree, weight budgets), `disojo-site-starter` (runnable Vite starter driven by one `brand.config.js`; smoke tests pass), `disojo-motion-recipes` (tested fx components), `disojo-launch-checklist` (pre-launch gate script, Lighthouse runner, image optimiser), `disojo-scroll-site-rebuild` (Postcards recipe: prompts, asset scripts, gotchas). Real GLB hero: `disojo-3d-product-site`. Built from [[lumina-store-3d-rebuild]].
Not yet done: real-phone test, form backend, non-Shopify checkout, CMS. Research audit (2026-10-07) of palmo, agrumea, ciao, era residence, crav, stringtune, ethical life, on.energy, everest.suraj.work is in `disojo-site-archetypes/references/research-notes.md`.

**Backup:** all skills in `~/.claude/skills` are mirrored (git, private) at https://github.com/scarlettelikesmen-dotcom/disojo-skills-agency, working copy `~/Desktop/DISOJO SOLUTIONS/skills`. This Mac's git/GitHub login is account `scarlettelikesmen-dotcom` (HTTPS token in keychain, `repo` scope; no `gh` CLI, no SSH key). After changing a skill, rsync to the working copy, commit, push. CLAUDE.md and memory are NOT in that repo.

**GitHub on this Mac:** two saved HTTPS logins in the keychain: `scarlettelikesmen-dotcom` (skills repo) and `disojo-solutions` (agency account; Postcards repo). With two logins, always put the username in the remote URL (https://<user>@github.com/...) or git may pick the wrong one. `disojo-solutions` is a normal user account (not an org). Never ask the user to paste tokens in chat; open a terminal tab so they type it at git's prompt.
