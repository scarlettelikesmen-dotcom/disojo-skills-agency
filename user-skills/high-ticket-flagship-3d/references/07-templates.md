# Templates index

All templates live in `../templates/`. Copy each into the project folder at the phase shown, fill every field, and never leave a placeholder in a client-facing file.

| Template | Copy to | Phase | Purpose |
|---|---|---|---|
| `scope-sheet.md` | `00-admin/scope.md` | 1 | Deliverables, exact 3D scope, exclusions, responsibilities, gates, payment, ownership |
| `decisions-log.md` | `00-admin/decisions.md` | 0 onward | Every approval with date, approver, round |
| `licences.md` | `00-admin/licences.md` | 2 onward | Every font, model, HDRI, texture, image, music, library, with licence and AI flag |
| `references-log.md` | `brief/references.md` | 5 | No-copy law log, palette, type and concept checks, distinctness results |
| `art-direction-brief.md` | `brief/art-direction.md` | 5 | The one-page concept brief and bland test |
| `gate-update.md` | (message) | every gate | Client-facing update: what, real vs AI vs placeholder, untested, one decision, round count |
| `qa-report.md` | `qa/report.md` | 10 | Scorecard with numbers, failures fixed, warnings, not-tested list |
| `handover-readme.md` | `handover/README.md` | 11 | Run, deploy, roll back, what is real, 3D notes, open items, aftercare |

Other templates used from other skills:
- Asset request: `~/.claude/skills/disojo-client-intake/templates/asset-request.md`
- Brand brief: `~/.claude/skills/disojo-client-intake/templates/brand-brief.md`
- Dieline request (packaged goods): `~/.claude/skills/disojo-packaged-product-3d/templates/dieline-request.md`
- Token file: `~/.claude/skills/disojo-brand-system/templates/tokens.example.json` (example values only; never ship them)
- Site flow structure: described in `~/.claude/skills/disojo-site-flow/SKILL.md` (copy the tables into `plan/site-flow.md`)

## Rules for templates
- Client-facing files carry no internal notes, rates or other clients' names.
- Contracts, invoices and financials are private: they stay out of public repositories and out of the site repo.
- Write dates as absolute dates. Mark unknowns `TBD (owner)` and chase them; do not fill them with guesses.
