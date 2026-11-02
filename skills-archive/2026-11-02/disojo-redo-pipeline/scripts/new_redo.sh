#!/bin/bash
# Stage 0: bash new_redo.sh <client-slug> [url]   -> ~/Desktop/websites ARCHIVE/<client-slug>-redo with research/, brief/, site/ (starter), qa/
# With a URL it also runs intake (crawl + content + images + inventory) and installs the site's dependencies.
set -euo pipefail
SK="$(cd "$(dirname "$0")/.." && pwd)"; SLUG="$1"; URL="${2:-}"
P="$HOME/Desktop/websites ARCHIVE/$SLUG-redo"
[ -e "$P" ] && { echo "exists: $P (not touching it)"; exit 1; }
mkdir -p "$P"/{research,brief,qa,assets}
rsync -a --exclude node_modules --exclude dist --exclude .astro --exclude 'src/data/pages/*.json' --exclude 'src/data/site.json' --exclude 'src/data/images.json' "$SK/starter/" "$P/site/"
mkdir -p "$P/site/src/data/pages"; echo '{}' > "$P/site/src/data/images.json"
( cd "$P/site" && npm install --silent >/dev/null 2>&1 ) && echo "deps installed"
if [ -n "$URL" ]; then
  NODE_PATH="$HOME/.disojo-tools/node_modules" node "$SK/scripts/intake.cjs" "$URL" "$P"
  python3 "$SK/scripts/make_content.py" "$P"
fi
echo "$P"
