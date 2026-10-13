#!/usr/bin/env bash
# Snapshot memory into this skill, scan for secrets, mirror skills to the Desktop repo, commit and push.
set -euo pipefail
MEM="${1:-$HOME/.claude/projects/-Users-tejjo-claudeskillsthrureels/memory}"
SKILL="$HOME/.claude/skills/disojo-memory-backup"
REPO="$HOME/Desktop/DISOJO SOLUTIONS/skills"

[ -d "$MEM" ] || { echo "memory folder not found: $MEM"; exit 1; }
if grep -rIlE "github_pat_|ghp_[A-Za-z0-9]{20}|AIza[0-9A-Za-z_-]{20,}|sk-ant-|shpat_|storefrontAccessToken" "$MEM" 2>/dev/null; then
  echo "ABORT: a secret-looking string is in the memory notes (files above). Remove it first."; exit 1
fi
mkdir -p "$SKILL/references/memory"
rsync -a --delete --exclude .DS_Store "$MEM/" "$SKILL/references/memory/"
echo "snapshot: $(ls "$SKILL/references/memory" | wc -l) files"
# Second project memory (the content hub in ~/Desktop/DISOJO SOLUTIONS). Additive: its own folder, so the primary snapshot above is never overwritten.
MEM2="$HOME/.claude/projects/-Users-tejjo-Desktop-DISOJO-SOLUTIONS/memory"
if [ -d "$MEM2" ]; then
  if grep -rIlE "github_pat_|ghp_[A-Za-z0-9]{20}|AIza[0-9A-Za-z_-]{20,}|sk-ant-|shpat_|storefrontAccessToken" "$MEM2" 2>/dev/null; then echo "ABORT: secret-looking string in $MEM2"; exit 1; fi
  mkdir -p "$SKILL/references/memory-disojo-solutions"
  rsync -a --delete --exclude .DS_Store "$MEM2/" "$SKILL/references/memory-disojo-solutions/"
  echo "snapshot (DISOJO SOLUTIONS project): $(ls "$SKILL/references/memory-disojo-solutions" | wc -l) files"
fi

[ -d "$REPO/.git" ] || { echo "Desktop repo missing ($REPO): snapshot saved in the skill only"; exit 0; }
rsync -a --exclude node_modules --exclude dist --exclude .DS_Store "$HOME/.claude/skills/" "$REPO/user-skills/"
# Content-hub text files (plans, brand files, voice profiles, copy rules, notes). NOT videos/footage (edits/, inbox/), not the venv, not links to the skill engine.
HUBD="$HOME/Desktop/DISOJO SOLUTIONS/content-hub"
if [ -d "$HUBD" ]; then
  if grep -rIlE "github_pat_|ghp_[A-Za-z0-9]{20}|AIza[0-9A-Za-z_-]{20,}|sk-ant-|shpat_|storefrontAccessToken" "$HUBD" --include='*.md' --include='*.json' --include='*.txt' --exclude-dir=node_modules --exclude-dir=.venv --exclude-dir=edits 2>/dev/null; then echo "ABORT: secret-looking string in content-hub"; exit 1; fi
  mkdir -p "$REPO/content-hub"
  rsync -a --delete --prune-empty-dirs --exclude 'edits/' --exclude 'inbox/' --exclude '.venv/' --exclude '_archive*/' --exclude 'node_modules/' --exclude 'swipe/' \
    --exclude 'tools' --exclude 'design' --exclude 'assets' --exclude 'fonts' --exclude '.DS_Store' \
    --include '*/' --include '*.md' --include '*.json' --include '*.txt' --include '.gitignore' --exclude '*' "$HUBD/" "$REPO/content-hub/"
  echo "content-hub text files mirrored: $(find "$REPO/content-hub" -type f | wc -l) files"
fi
# Master context (CLAUDE.md) and Claude Code settings ride along (Tejjomay approved 2026-10-09). Secret-scanned first.
mkdir -p "$REPO/claude-config"
for f in CLAUDE.md settings.json; do
  if [ -f "$HOME/.claude/$f" ]; then
    if grep -qE "github_pat_|ghp_[A-Za-z0-9]{20}|AIza[0-9A-Za-z_-]{20,}|sk-ant-|shpat_|storefrontAccessToken" "$HOME/.claude/$f"; then echo "ABORT: secret-looking string in ~/.claude/$f"; exit 1; fi
    cp "$HOME/.claude/$f" "$REPO/claude-config/$f"
  fi
done
cd "$REPO"
git add -A
if git diff --cached --quiet; then echo "nothing new to commit"; exit 0; fi
git -c user.name="Tejjomay" -c user.email="tradingprops09@gmail.com" commit -q -m "Back up skills and memory notes ($(date +%F))

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
GIT_TERMINAL_PROMPT=0 git push -q && echo "pushed: $(git rev-parse --short HEAD)"
