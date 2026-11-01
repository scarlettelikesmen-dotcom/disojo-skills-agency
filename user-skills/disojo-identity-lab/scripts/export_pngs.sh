#!/bin/bash
# Transparent PNG exports of a finished SVG via headless Chrome (bash, not zsh: zsh does not word-split).
# usage: export_pngs.sh mark.svg OUT_DIR [widths...]   default widths: 3000 1200 512 192 48 32
# Square app icons: pass the icon SVG (with its own background) and square widths; height follows the viewBox.
set -e
SVG=$(cd "$(dirname "$1")" && pwd)/$(basename "$1"); OUT=$2; shift 2
W=${@:-3000 1200 512 192 48 32}
CH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
mkdir -p "$OUT"; OUT=$(cd "$OUT" && pwd)
read VW VH < <(python3 -c "import re,sys;v=re.search(r'viewBox=\"[\d.\-]+ [\d.\-]+ ([\d.]+) ([\d.]+)\"',open(sys.argv[1]).read());print(v.group(1),v.group(2))" "$SVG")
base=$(basename "$SVG" .svg)
for w in $W; do
  h=$(python3 -c "print(max(1,round($w*$VH/$VW)))")
  html="$OUT/.e-$base-$w.html"
  printf '<!doctype html><meta charset="utf-8"><style>html,body{margin:0;background:transparent}img{display:block;width:%spx;height:%spx}</style><img src="file://%s">' "$w" "$h" "$SVG" > "$html"
  "$CH" --headless=new --disable-gpu --hide-scrollbars --default-background-color=00000000 --window-size=$w,$h --screenshot="$OUT/$base-$w.png" "file://$html" >/dev/null 2>&1
  rm -f "$html"; echo "$OUT/$base-$w.png"
done
