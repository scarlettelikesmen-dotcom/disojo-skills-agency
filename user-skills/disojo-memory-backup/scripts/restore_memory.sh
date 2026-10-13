#!/usr/bin/env bash
# Copy the snapshot back into Claude's memory folder. Will not overwrite a newer file unless --force.
set -euo pipefail
FORCE=""; DEST="$HOME/.claude/projects/-Users-tejjo-claudeskillsthrureels/memory"
for a in "$@"; do [ "$a" = "--force" ] && FORCE=1 || DEST="$a"; done
SRC="$HOME/.claude/skills/disojo-memory-backup/references/memory"
[ -d "$SRC" ] || { echo "no snapshot at $SRC"; exit 1; }
mkdir -p "$DEST"
if [ -n "$FORCE" ]; then rsync -a "$SRC/" "$DEST/"; else rsync -a --update "$SRC/" "$DEST/"; fi
echo "restored $(ls "$SRC" | wc -l) files into $DEST"

# Second project memory (content hub), if it was backed up
SRC2="$HOME/.claude/skills/disojo-memory-backup/references/memory-disojo-solutions"
DEST2="$HOME/.claude/projects/-Users-tejjo-Desktop-DISOJO-SOLUTIONS/memory"
if [ -d "$SRC2" ]; then
  mkdir -p "$DEST2"
  if [ -n "$FORCE" ]; then rsync -a "$SRC2/" "$DEST2/"; else rsync -a --update "$SRC2/" "$DEST2/"; fi
  echo "restored $(ls "$SRC2" | wc -l) files into $DEST2"
fi
