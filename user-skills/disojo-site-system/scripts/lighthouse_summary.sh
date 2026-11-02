#!/usr/bin/env bash
# usage: lighthouse_summary.sh <url> [desktop]   (needs Chrome; uses npx lighthouse)
set -euo pipefail
export CHROME_PATH="${CHROME_PATH:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
P=""; [ "${2:-}" = desktop ] && P="--preset=desktop"
out=$(mktemp).json
npx -y lighthouse "$1" $P --only-categories=performance,accessibility,best-practices,seo --chrome-flags="--headless=new" --output=json --output-path="$out" --quiet >/dev/null 2>&1
python3 - "$out" <<'PY'
import json,sys
d=json.load(open(sys.argv[1]))
print({k:round(v['score']*100) for k,v in d['categories'].items()})
for m in ['first-contentful-paint','largest-contentful-paint','cumulative-layout-shift','total-blocking-time']: print(' ',m,d['audits'][m]['displayValue'])
for k,a in d['audits'].items():
    if a.get('scoreDisplayMode')=='binary' and a.get('score') is not None and a['score']<1: print('  FAIL',k,'-',a['title'])
for i in d['audits'].get('color-contrast',{}).get('details',{}).get('items',[])[:6]: print('   contrast:',i['node']['snippet'][:70],'|',i['node']['explanation'][-110:])
PY
