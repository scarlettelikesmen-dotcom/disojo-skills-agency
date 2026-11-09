#!/bin/bash
# Stage 0: bash new_site.sh <client-slug> [url]   -> ~/Desktop/websites ARCHIVE/<client-slug>-site with research/, brief/, site/ (starter), qa/, assets/
# With a URL (a redo) it also crawls the site word for word, self-hosts the images and writes the inventory.
# Without a URL (a new site) drop the client's files in assets/ and run inventory_assets.py on them.
# Starts the project log (scripts/log.py) so time from material to demo is measured.
set -euo pipefail
SK="$(cd "$(dirname "$0")/.." && pwd)"; SLUG="$1"; URL="${2:-}"
P="$HOME/Desktop/websites ARCHIVE/$SLUG-site"
[ -e "$P" ] && { echo "exists: $P (not touching it)"; exit 1; }
mkdir -p "$P"/{research,brief,qa,assets}
cp "$SK/templates/IDEA.md" "$P/brief/IDEA.md"   # the site guard blocks design files until Tejjo's pick is written here
rsync -a --exclude node_modules --exclude dist --exclude .astro --exclude 'src/data/pages/*.json' --exclude 'src/data/site.json' --exclude 'src/data/images.json' \
  --exclude 'src/pages/library.astro' --exclude 'public/library' "$SK/starter/" "$P/site/"
mkdir -p "$P/site/src/data/pages"; echo '{}' > "$P/site/src/data/images.json"
[ -f "$P/site/src/data/site.json" ] || echo '{"name":"","origin":"","nav":[],"footer":[],"tel":[],"mail":[],"social":[],"address":"","logo":[],"icons":[]}' > "$P/site/src/data/site.json"
( cd "$P/site" && npm install --silent >/dev/null 2>&1 ) && echo "deps installed"
python3 "$SK/scripts/log.py" "$SLUG" start "${URL:-assets}"
if [ -n "$URL" ]; then
  NODE_PATH="$HOME/.disojo-tools/node_modules" node "$SK/scripts/intake.cjs" "$URL" "$P"
  python3 "$SK/scripts/make_content.py" "$P"
else
  # new site: an empty home until the message step (stage 2) writes the copy
  echo '{"route":"/","title":"","desc":"","h1":"","body":[]}' > "$P/site/src/data/pages/home.json"
fi
echo "$P"
