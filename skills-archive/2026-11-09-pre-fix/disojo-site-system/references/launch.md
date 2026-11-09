# Stage 5: demo, launch, handover

## Demo
`bash $SK/scripts/deploy_demo.sh <project> <slug>` builds, adds `X-Robots-Tag: noindex`, deploys to its own Vercel project `<slug>-demo` (team preview links are login-walled) and checks the link answers 200 without a login. Only after Tejjomay says so. Send the link with three lines they can forward: what it is, what is real, what is missing.

## Before the client's domain
1. `bash $SK/scripts/prelaunch_scan.sh site`: placeholders and `TODO(client)`, the library specimen, empty origin, noindex still on, og image, favicon, images over 300 KB, video over 3 MB, secrets in src/public, `.env` not ignored, no git remote. Files only: still read the site.
2. Lighthouse on the DEPLOYED url (gzip; local preview scores lower): `bash $SK/scripts/lighthouse_summary.sh <url>` and `... <url> desktop`. Target 90+ on all four (AGENTS.md); say where a page cannot reach it and why.
3. Gates from stage 4 green on the final build; `references/first-look.md` answered on every screen.

## Forms and booking
Pick one per client and wire it: a hosted form service (Formspree, Web3Forms, Basin), a Vercel function calling an email API (Resend, Postmark), or the client's CRM. Labels above, inline errors, honeypot, aria-live success only when the endpoint confirms, mailto fallback on failure. Test both paths with the request intercepted. Calendly/cal.com: lazy iframe on click plus an "open in new tab" link, never their script up front. Third-party widgets fail Cloudflare checks headless: verify in the browser pane.

## SEO and sharing
One h1 per page, meaningful alt on photos, title and description per page, canonical to the real domain, sitemap.xml, robots.txt, a real 1200x630 share image (`scripts/og/`). Redo: every old URL redirects (redirects.json). Search Console: the client's or Tejjomay's to register; never sign in for them. Demos stay noindex so they never outrank the client's live site. Disojo's own pages: visible copy says Bombay, titles, meta and JSON-LD say Mumbai.

## Analytics and consent
Load analytics after interaction or idle, never at t=0. No popup before engagement. EU/UK traffic: one small consent card, never a modal over the hero.

## Real devices (always state what was not done)
iPhone Safari and one Android: no blank areas, no address-bar jump, menu and forms work with touch, rotate, reduced motion on, slow 4G. Until someone has done this, the report says "real phones and Safari untested".

## Handover
Repo with a remote (day one, not at the end), README: how to edit content and tokens, where assets live, how to deploy, rollback URL, form delivery and any activation step, what is stock or AI (disclose the SynthID mark), unverified labels, keys to rotate. Production repo, credentials and IP transfer only after the final invoice (AGENTS.md). Footer credit stays.
