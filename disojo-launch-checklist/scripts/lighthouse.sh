#!/usr/bin/env bash
# Lighthouse run + one-screen summary. usage: lighthouse.sh <url> [mobile|desktop] [outfile.json]
# Uses npx (downloads lighthouse on first run) and your local Chrome. Treat scores as a guide: lab data on one machine, not field data.
set -euo pipefail
url="$1"; preset="${2:-mobile}"; out="${3:-/tmp/lh-$(date +%s).json}"
args=(--only-categories=performance,accessibility,best-practices,seo --output=json --output-path="$out" --quiet
      --chrome-flags="--headless=new --no-sandbox")
[ "$preset" = "desktop" ] && args+=(--preset=desktop)
npx -y lighthouse "$url" "${args[@]}" >/dev/null 2>&1 || true
python3 - "$out" <<'PY'
import json, sys
j = json.load(open(sys.argv[1]))
c = j['categories']; a = j['audits']
print('scores  ', {k: round(v['score'] * 100) for k, v in c.items()})
for k in ['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift', 'speed-index']:
    print(f'{k:28s}', a[k]['displayValue'])
print(f"{'total-byte-weight':28s}", a['total-byte-weight']['displayValue'])
bad = [(a[i]['title'], a[i].get('displayValue', '')) for i in a if a[i].get('score') == 0 and a[i].get('scoreDisplayMode') == 'binary'][:12]
print('failing audits:'); [print('  -', t, d) for t, d in bad]
PY
