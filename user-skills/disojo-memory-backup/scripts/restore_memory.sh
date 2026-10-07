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
