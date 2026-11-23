#!/bin/bash
# Copy the motion kernel (the one source: $SK/kernel) into a site or the starter.
# bash sync_kernel.sh <site-dir>   (a folder with src/ and package.json)
set -euo pipefail
SK="$(cd "$(dirname "$0")/.." && pwd)"; S="$(cd "$1" && pwd)"
rsync -a --delete "$SK/kernel/src/kernel/" "$S/src/kernel/"
cp "$SK/kernel/src/styles/kernel.css" "$S/src/styles/kernel.css"
mkdir -p "$S/tools"; cp "$SK/kernel/tools/make-film.cjs" "$S/tools/"
echo "kernel synced into $S"
