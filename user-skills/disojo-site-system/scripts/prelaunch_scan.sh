#!/usr/bin/env bash
# Pre-launch gate. usage: prelaunch_scan.sh <project dir>
# Fails (exit 1) while placeholder or unverified content remains. It checks files, not truth: you still read the site.
set -uo pipefail
cd "${1:-.}"
fail=0
bad() { echo "FAIL  $1"; fail=1; }
ok()  { echo "ok    $1"; }

hits=$(grep -rnE "TODO\(client\)|Replace with|PLACEHOLDER|Item (One|Two|Three|Four)|example\.com|lorem ipsum|hello@example" src public index.html 2>/dev/null | head -20)
[ -n "$hits" ] && { bad "placeholder text still present:"; echo "$hits" | sed 's/^/        /'; } || ok "no placeholder text"

[ -f src/pages/library.astro ] || [ -d public/library ] && bad "section library specimen still in the project (src/pages/library.astro, public/library)" || ok "no library specimen"
grep -q '"origin": *""' src/data/site.json 2>/dev/null && bad "site.json origin is empty (canonical and og:url)" || ok "origin set"
grep -q "noindex: true" src/data/brand.js && echo "warn  brand.js noindex is true: right for a demo, wrong for the client's live domain"
[ -f public/og.jpg ] && ok "og.jpg present" || bad "public/og.jpg missing"
[ -f public/favicon.svg ] || [ -f public/favicon.ico ] || [ -f public/favicon.png ] && ok "favicon present" || bad "no favicon"

big=$(find public -type f \( -name '*.jpg' -o -name '*.jpeg' -o -name '*.png' -o -name '*.webp' \) -size +300k 2>/dev/null | grep -v hero-frames)
[ -n "$big" ] && { bad "images over 300 KB (budget 250 KB; regrade with disojo-image-pipeline/scripts/grade.py):"; echo "$big" | sed 's/^/        /'; } || ok "no oversized images"
vid=$(find public -type f \( -name '*.mp4' -o -name '*.webm' -o -name '*.mov' \) -size +3M 2>/dev/null)
[ -n "$vid" ] && { bad "videos over 3 MB:"; echo "$vid" | sed 's/^/        /'; } || ok "no oversized video"

grep -rnE "AIza|sk-[A-Za-z0-9]{20,}|storefrontAccessToken|shpat_" src public 2>/dev/null | head -3 | sed 's/^/FAIL  possible secret: /' && true
[ -f .env.local ] && ! grep -q "\.env" .gitignore && bad ".env.local exists but is not in .gitignore"
git remote -v 2>/dev/null | grep -q . && ok "git remote configured" || bad "no git remote: the only copy lives on this machine"
echo; [ $fail -eq 0 ] && echo "READY (files only: still do the manual checks)" || echo "NOT READY"
exit $fail
