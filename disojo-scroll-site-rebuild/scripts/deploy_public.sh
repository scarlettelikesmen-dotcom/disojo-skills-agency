#!/usr/bin/env bash
# Public demo deploy for a Vite SPA. usage: deploy_public.sh <vercel-project-name>
# Why a separate folder: preview deploys under a team project are SSO-protected (302 for visitors);
# a plain project deployed with --prod is public. dist/ only, so raw source footage never uploads.
set -euo pipefail
name="$1"
npm run build
tmp="$(mktemp -d)"
cp -R dist/. "$tmp/"
echo '{"rewrites":[{"source":"/(.*)","destination":"/index.html"}]}' > "$tmp/vercel.json"
( cd "$tmp" && vercel deploy --prod --yes --name "$name" 2>&1 | grep -E "Aliased|Production|Error" )
