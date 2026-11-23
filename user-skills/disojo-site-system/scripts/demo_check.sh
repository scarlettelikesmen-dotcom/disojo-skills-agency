#!/bin/bash
# Check a demo deploy is really ours and open. Used by deploy_demo.sh; testable alone with saved output.
# bash demo_check.sh <vercel-deploy-output.txt> <published-dir> <guessed-name>
# Exit 0 = the URL Vercel assigned answers 200 without a login and serves this build. Exit 1 otherwise.
# Why (VÆL, 2026-11-03): `vercel domains add vael-demo.vercel.app` failed silently (a stranger owns it) and the
# old check curled the guessed name and reported their site as our open demo. Our link was vael-demo-topaz.
set -uo pipefail
LOG="$1"; DIR="$2"; NAME="$3"
strip(){ sed -E 's/\x1b\[[0-9;]*m//g' "$1"; }
ALIAS=$(strip "$LOG" | grep -oE 'Aliased: *https://[^ ]+' | tail -1 | grep -oE 'https://[^ ]+')
PROD=$(strip "$LOG" | grep -oE 'Production: *https://[^ ]+' | tail -1 | grep -oE 'https://[^ ]+')
URL="${ALIAS:-$PROD}"
if [ -z "$URL" ]; then echo "FAILED: no Aliased or Production URL in the vercel output. The deploy did not go out."; exit 1; fi
[ -n "$ALIAS" ] || echo "WARNING: no Aliased line; checking the deployment URL $PROD (team links may be login-walled)."
URL="${URL%/}"
TOKEN=$(cat "$DIR/_deploy-id.txt" 2>/dev/null || true)
WANT=$(python3 -c 'import re,sys,html;m=re.search(r"<title[^>]*>(.*?)</title>",open(sys.argv[1],encoding="utf8").read(),re.S);print(html.unescape(m.group(1)).strip() if m else "")' "$DIR/index.html" 2>/dev/null)
title(){ curl -sL --max-time 20 "$1" | python3 -c 'import re,sys,html;m=re.search(r"<title[^>]*>(.*?)</title>",sys.stdin.read(),re.S);print(html.unescape(m.group(1)).strip() if m else "")'; }
ok=1
for i in 1 2 3 4 5 6; do   # a fresh alias can take a few seconds
  CODE=$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 "$URL/")
  GOT_ID=$(curl -s --max-time 20 "$URL/_deploy-id.txt" || true)
  [ "$CODE" = 200 ] && { [ -z "$TOKEN" ] || [ "$GOT_ID" = "$TOKEN" ]; } && { ok=0; break; }
  sleep 4
done
GOT=$(title "$URL/")
if [ $ok = 0 ] && [ "$GOT" = "$WANT" ]; then
  echo "DEMO: $URL/ -> 200, title \"$GOT\"${TOKEN:+, this build}  (open, no login wall)"
else
  echo "NOT VERIFIED: $URL/ -> $CODE, title \"$GOT\" (expected \"$WANT\")${TOKEN:+, build id ${GOT_ID:+mis}match${GOT_ID:-: missing}}"
  echo "  Check Deployment Protection and the alias before sending this link to anyone."
fi
# the guessed name: say loudly if it is not ours
G="https://$NAME.vercel.app"
if [ "$G" != "$URL" ]; then
  GID=$(curl -s --max-time 20 "$G/_deploy-id.txt" || true)
  if [ -n "$TOKEN" ] && [ "$GID" = "$TOKEN" ]; then echo "Also ours: $G/"
  else
    echo "!!!!! WARNING: $G/ is NOT this demo (title \"$(title "$G/")\"). Someone else may own that name."
    echo "!!!!! Send only $URL/"
  fi
fi
[ $ok = 0 ] && [ "$GOT" = "$WANT" ]
