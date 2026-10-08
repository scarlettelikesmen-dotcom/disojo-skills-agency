# Deploy recipe (Vercel CLI, Vite SPA)
Preview (public, own project, noindex):
```
npm run build; tmp=$(mktemp -d); cp -R dist/. "$tmp/"
echo '{"rewrites":[{"source":"/((?!fonts/|img/|assets/).*)","destination":"/index.html"}],"headers":[{"source":"/(.*)","headers":[{"key":"X-Robots-Tag","value":"noindex"}]}]}' > "$tmp/vercel.json"
cd "$tmp" && vercel deploy --prod --yes --name <client>-preview   # expect "Aliased:"
```
Production (client's project): `vercel link --yes --project <existing-project>` inside a fresh tmp dir, copy dist + a vercel.json WITHOUT the noindex header, `vercel deploy --prod --yes`, then check both www and apex return 200, run smoke.cjs and Lighthouse against the real domain. Note the previous production deployment URL first (rollback: `vercel promote <url>`).
