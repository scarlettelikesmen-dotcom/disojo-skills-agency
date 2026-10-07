# Built-in Claude Code / Claude app skills (NOT files: compiled into the app)

These ship inside Claude Code and the Claude app, so there is nothing on disk to back up and they come back with a reinstall.
What follows is only their names and one-line descriptions (as shown to Claude in a 2026-10-07 session), not their instructions.

| Skill | What it does |
|---|---|
| code-review | Reviews the current diff or a PR for correctness bugs at a chosen effort level; `ultra` runs a multi-agent cloud review |
| simplify | Reviews changed code for reuse, simplification and efficiency, then applies fixes |
| fewer-permission-prompts | Scans transcripts for common read-only commands and adds an allowlist to project settings |
| loop | Runs a prompt or command on a recurring interval, or self-paced |
| schedule | Creates and manages scheduled cloud agents (routines) on a cron schedule |
| claude-api | Reference for the Claude API / Anthropic SDK (models, params, streaming, tool use, caching, migration) |
| run | Launches and drives a project's app to see a change working |
| init | Initialises a CLAUDE.md for a codebase |
| security-review | Security review of the pending changes on the current branch |
| update-config | Configures the Claude Code harness through settings.json (hooks, permissions, env vars) |
| keybindings-help | Customises keyboard shortcuts in ~/.claude/keybindings.json |
| plugin-authoring | Builds a live pane, status line, toast or hook as a hot-reloading plugin |
| dataviz | Guidance for charts, dashboards and any data visualisation |
| artifact-design / artifact-diagramming / artifact-capabilities | Design, diagramming and runtime-capability guidance for published Artifacts |

Note: Anthropic's app skills (docs, docx, pdf, pptx, xlsx, schedule, skill-creator, google-workspace, morning, setup-claude, explain-usage,
consolidate-memory, import-memory, setup-cowork, sales-case-simulation, cowork-plugin-customizer, create-cowork-plugin) DO exist as files and are
backed up in `anthropic-app-skills/`.
