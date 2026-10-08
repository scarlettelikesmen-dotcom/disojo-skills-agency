# Quality gates (run in this order; do not show the client until all pass)
## A. Mechanical (scripts)
1. `python3 scripts/design_lint.py <project>`: 0 FAIL. Every `warn` is either fixed or written down under "Deliberate deviations" in the project README.
2. `npm run build` clean; JS < 120 KB gzip for a 2D site; no console errors.
3. `node scripts/smoke.cjs <url> <out>` (copy from kit/scripts): all PASS at 1440 and 390, plus a reduced-motion run. It must exercise: nav, every interactive demo, lightbox, form (request intercepted, answer OPTIONS), embed on demand, overflow, real prices/contacts present, no placeholder text.
4. `node scripts/tour.cjs <url> <out> desktop|phone`, then LOOK at every screenshot at both sizes (overlaps, clipped text, empty areas, fixed bars covering content).
5. `bash scripts/lighthouse_summary.sh <url>` mobile: perf >= 95, a11y 100, best-practices 100, SEO 100 (a noindex preview shows ~69 SEO by design).
## B. Human review (write the answers down)
- Design Read and dials stated? Concept unique to this client? Not the Postcards/Mochi/Ascender look?
- Every layout family used once? Hero <= 4 text elements, H1 <= 2 lines on desktop?
- Every number, price, name, contact detail traceable to the client? Every non-real thing labelled illustrative? Client's "no" respected (e.g. no reels)?
- One CTA label per intent. No em dashes. No banned tells (digest section 4). Copy self-audit done on every visible string.
- 7-axis gate (anti-slop purity, 1-to-3 hierarchy, typography, spacing/radius math, motion feel, a11y/keyboard, mobile linearity): each >= 4/5.
- Audit the client's current live site for dishonest behaviour (fake forms, dead links) and report it.
## C. Deploy gate
Preview first (noindex, own project) -> client says go -> production via linked tmp dir -> verify `Aliased:` printed, www and apex 200, rerun smoke + Lighthouse on the real domain, record rollback URL in the README.
## D. Handover
README with: how to run, where content lives, form provider + one-time activation, what is illustrative, what is AI-generated, unverified labels/stats, deliberate deviations, rollback URL, repo remote status, keys to rotate.
