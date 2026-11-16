---
name: project-site-state-2026-10-22
description: "Disojo site + brand assets state at 2026-10-22 shutdown: new logo, social exports, CTA mock-up, services-copy plan awaiting answers"
metadata:
  node_type: memory
  type: project
  originSessionId: 60ef3da9-acfc-4f23-89f1-e7c9ce0538c6
  modified: 2026-10-22T18:27:05.612Z
---

Where things live (laptop shut down 2026-10-22):
- **v3 site copy** (4402) is NOT in git: `~/Desktop/disojo-hybrid-v3`. Tarball backup: `~/Desktop/disojo-backups/disojo-hybrid-v3-*.tar.gz` (no node_modules; `public` and `node_modules` were symlinked to `~/Desktop/disojo-hybrid`). Not yet committed or deployed. Preview on Vercel is older than the new nav/logo.
- **New logo** (white-on-black, rounded, hollow square J, hand-drawn O) is in the 4402 nav as a CSS mask (end of `src/styles/global.css`, `.nav .brand .lg-w`, ~118x22px). Traced from Tejjo's image at 700px wide; vector original still missing. Footer wordmark, favicon, OG image still old.
- **Social exports** in `~/Desktop/DISOJO SOLUTIONS/logo-exports/`: wordmark #111 on #EBE9E4 (1080 and zoomed 90% version for LinkedIn), LinkedIn company banner light + ghost wordmark (final-ish `linkedin-company-banner-light-ghost-v5.png`, headline "Digital systems and identities for founder-led businesses.", muted disojostudio.com bottom right), source PNG masks and html in `src/`. Instagram bio options A/B/C given; Tejjo picks (I recommended B; handle @disojo.solutions vs @disojostudio still unconfirmed).
- **CTA mock-up**: `~/Desktop/disojo-hybrid/_archive/work-options/cta.html` (served by `python3 -m http.server 4455 --bind 127.0.0.1` in that folder), 10 options (Square, Orbit, Offset block, Corners, Square grows, Arrow island, Scribble underline, Chamfer, Ledger, Stamp). Tejjo has not chosen. My pick: 1 + 2 mix, or 6.
- **Services copy plan (awaiting Tejjo's 4 answers):** research of Monolog, thoughtbot, Wednesday, Thoughtworks, Simform, Dignisys, Superformula, Pentagram: authoritative sites lead with diagnosis, name a method, say who it is not for; bare service lists read as agency. Proposal: merge "What we do" + "Where it hurts" into one problem-first section (rows: "People can't see how good you are" / "Your team runs on chats and spreadsheets" / "Someone repeats the same task every day"), line "We find where your business leaks time, then build the system that stops it." Questions: merge yes/no, problem-named rows vs service-named, name the method (Find, Fix, Stay on), change "Build with us" CTA. Site-wide pass: avoid "studio", "bespoke", "solutions", "crafted"; never say "consulting firm"; Tejjo writes the founder letter himself.

**Why:** Tejjo wants the site to read as problem-solvers, not a web studio or freelancers.
**How to apply:** start next session by asking the four questions, then build on 4402 only; deploy only on "deploy". See [[project-site-state-2026-10-20]] and [[project-disojo-logo-redo]].
