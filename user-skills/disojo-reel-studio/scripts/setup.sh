#!/usr/bin/env bash
# Idempotent setup for the Disojo content hub on a Mac. Safe to re-run.
#   bash ~/.claude/skills/disojo-reel-studio/scripts/setup.sh
set -euo pipefail
SKILL="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENGINE="$SKILL/engine"
HUB="${CONTENT_HUB:-$HOME/Desktop/DISOJO SOLUTIONS/content-hub}"
ok(){ echo "  ok   $1"; }; bad(){ echo "  MISSING $1 -> $2"; MISSING=1; }
MISSING=0
echo "Checking system tools"
for t in ffmpeg ffprobe node npm python3; do command -v "$t" >/dev/null && ok "$t" || bad "$t" "brew install ${t/ffprobe/ffmpeg}"; done
[ -x "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" ] && ok "Google Chrome" || bad "Google Chrome" "install Chrome (used headless to render captions/graphics)"
[ "$MISSING" = 0 ] || { echo "Fix the missing items above, then re-run."; exit 1; }

echo "Workspace: $HUB"
mkdir -p "$HUB"/{edits,scripts,inbox,brands/disojo,brands/personal,brands/trading,calendar,hooks,swipe}
for d in tools design assets fonts; do
  if [ -L "$HUB/$d" ] || [ ! -e "$HUB/$d" ]; then ln -sfn "$ENGINE/$d" "$HUB/$d"; ok "link $d -> engine/$d"; else echo "  NOTE $HUB/$d exists and is not a link; leaving it (engine copy is at $ENGINE/$d)"; fi
done
[ -e "$HUB/copy-rules.md" ] || { cp "$ENGINE/copy-rules.md" "$HUB/copy-rules.md"; ok "copy-rules.md"; }
for b in disojo personal trading; do [ -e "$HUB/brands/$b/brand.md" ] || { cp "$ENGINE/templates/brand.template.md" "$HUB/brands/$b/brand.md"; ok "brands/$b/brand.md (blank intake)"; }; done

echo "Python env (transcription, image tools)"
if [ ! -x "$HUB/.venv/bin/python" ]; then python3 -m venv "$HUB/.venv"; fi
"$HUB/.venv/bin/pip" install -q --upgrade pip >/dev/null 2>&1 || true
"$HUB/.venv/bin/pip" install -q faster-whisper pillow fonttools numpy && ok "faster-whisper, pillow, fonttools, numpy"

echo "Node env (headless Chrome rendering)"
( cd "$ENGINE/tools" && npm install --no-audit --no-fund --silent ) && ok "puppeteer-core"

echo
echo "Ready. First transcription downloads the Whisper 'small' model (~460 MB, once)."
echo "Run a reel:   cd \"$HUB\" && .venv/bin/python \"$ENGINE/tools/take_report.py\" RAW.mov --out edits/NAME"
