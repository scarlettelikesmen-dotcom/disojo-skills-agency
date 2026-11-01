#!/bin/bash
# Stage 5: public demo. bash deploy_demo.sh <project> <client-slug>
# Builds site/, copies dist to a clean folder, adds noindex headers and the redirects, deploys to its OWN
# Vercel project "<client-slug>-demo" (team preview links are login-walled), adds <client-slug>-demo.vercel.app,
# and checks the link answers 200 without a login. Needs Tejjomay's go-ahead: it publishes.
set -euo pipefail
PROJ="$(cd "$1" && pwd)"; SLUG="$2"; NAME="${SLUG}-demo"; SCOPE="${VERCEL_SCOPE:-scarlettelikesmen-dotcoms-projects}"
OUT="$PROJ/deploy/$NAME"
( cd "$PROJ/site" && npx astro build >/dev/null )
mkdir -p "$OUT"; rsync -a --delete --exclude .vercel "$PROJ/site/dist/" "$OUT/"
python3 - "$PROJ" "$OUT" <<'PY'
import json, sys, os
proj, out = sys.argv[1:3]
red = json.load(open(os.path.join(proj, 'site/src/data/redirects.json'))) if os.path.exists(os.path.join(proj, 'site/src/data/redirects.json')) else {}
cfg = {"framework": None, "buildCommand": "", "outputDirectory": ".", "trailingSlash": True,
       "headers": [{"source": "/(.*)", "headers": [{"key": "X-Robots-Tag", "value": "noindex, nofollow"}]}],
       "redirects": [{"source": a.rstrip('/') or '/', "destination": b, "permanent": True} for a, b in red.items() if a != b]}
json.dump(cfg, open(os.path.join(out, 'vercel.json'), 'w'), indent=1)
PY
cd "$OUT"
[ -f .vercel/project.json ] || vercel link --yes --project "$NAME" --scope "$SCOPE" >/dev/null 2>&1 || true
vercel deploy --prod --yes --scope "$SCOPE" 2>&1 | grep -E "Production:|Aliased" || true
vercel domains add "$NAME.vercel.app" --scope "$SCOPE" >/dev/null 2>&1 || true
sleep 4
CODE=$(curl -s -o /dev/null -w '%{http_code}' "https://$NAME.vercel.app/")
echo "https://$NAME.vercel.app/ -> $CODE $( [ "$CODE" = 200 ] && echo '(open, no login wall)' || echo '(NOT OPEN: check Deployment Protection / domain)')"
