---
name: disojo-digital-systems
description: START HERE for a whole Digital systems job (Disojo Offer A), from diagnosis and the Leak Map through scoping, build in stages, roll-out and staying on. Custom software for owner-run businesses - portals, admin panels, CRMs, dashboards, automation, apps. Use when Tejjomay scopes or signs a client whose work runs on chats, spreadsheets and the founder's head, or starts building such a system.
---

# Digital systems (Offer A)

The promise: find where the work leaks, then build the system that stops it, in stages the client can see. The model is KDC: student, parent and tutor apps plus an admin panel, "10 hrs back every week".

Commercial terms live in `~/Desktop/DISOJO SOLUTIONS/content-hub/brands/disojo/offer.md`. **Never quote a price or currency from memory or from this file: ask Tejjomay.** Legal, payment and engineering law: `~/Desktop/DISOJO SOLUTIONS/AGENTS.md` (read-only).

## The stages
| # | Stage | Do | Output | Stop? |
|---|---|---|---|---|
| 0 | **Diagnosis** | Qualifying form, one call, then `templates/LEAK-MAP.md`. **Every hour and cost in it comes from the client.** If software will not help, it says so, and we do not sell it. | `brief/LEAK-MAP.md` | Tejjomay sends it |
| 1 | **Proposal** | Fixed scope, fixed price, named stages. Price from Tejjomay only. | proposal | Tejjomay sends it |
| 2 | **Signing check** | The list below. Gaps become a date or a scope change before work starts. | `brief/SIGNING.md` | **YES:** gaps go to Tejjomay |
| 3 | **Map the work as it really runs** | Watch it, do not take the org chart's word. Every role, every handover, every spreadsheet and chat. Their real data, including how messy it is. | `brief/WORK-MAP.md` | client confirms |
| 4 | **First clickable screen on real data** | The one screen that hurts most today. `disojo-guardrails/references/product-ui-rules.md` before designing. Show it early. | staging link | **YES:** Tejjomay, then client |
| 5 | **Core flows on staging** | `contract-first` for the API, `database-migrations` for schema. The client's own team uses it. | staging used by real people | client review |
| 6 | **Roll-out and training** | Move real data, run old and new side by side until trusted, train each role. | live system | **on their word** |
| 7 | **Stay on** | A watch period, then the retainer in `offer.md`. `launch-retrospective`. | handover | Tejjomay |

Payment 20/20/40/20 (`AGENTS.md` 2.2). Two consolidated revision rounds per milestone, new features are change orders (3.1, 3.2). Production repos, credentials, DNS and IP release only after final settlement (1.3). Client comms run through the client's own portal.

## Collect at signing
- [ ] Who decides, who uses it, every role
- [ ] Real data samples: the actual sheets and exports, with permission
- [ ] What must keep working during the change
- [ ] Every outside service and who owns the account: payment, SMS, email and DNS
- [ ] **Apple and Google developer accounts, in the client's name, opened now** (KDC's push notifications waited on these)
- [ ] Domain owner. The client logs in themselves; we never type credentials
- [ ] Personal data held, and any rule on it. Minors: stricter, ask
- [ ] One named person on their side who answers within a day

## Engineering
`disojo-guardrails` applies to everything: no placeholders, components under 150 lines, all five UI states, real verification. `AGENTS.md` section 7: indexes on foreign keys, no N+1, row-level security on every table. Also `error-handling`, `search-first` (buy or reuse before building), `react-patterns` and `react-testing` where React is used, `verification-loop`, `browser-qa`, `click-path-audit`, `safety-guard` for risky operations.

Put a git remote on the project early. The stack is decided per job. KDC (Expo, Supabase, Vercel admin) and Ascender OS (Next, Supabase) are what we have shipped or built, not a default.

The Astro rule is for websites; apps and internal tools are outside it. A marketing site for the software is a separate website job (`disojo-type-software`).

## Past failures (real)
- **Ascender CRM v1, 2026-10-21:** a dashboard template (stat cards, bar cards, a deal-pipeline model). Tejjomay rejected it on sight. Rebuilt after studying real tools. Study how a good tool handles this kind of data before designing.
- **Ascender client sheet:** the stage column was unreliable and 35 companies repeated. Do not build logic on a client's column before checking it.
- **Ascender dev setup:** Next 16 blocks `127.0.0.1` in dev unless `allowedDevOrigins` is set. React never hydrated and it cost an hour.
- **KDC:** push notifications could not ship: they needed the client's accounts. Hence the list above.
- Demo data stays out of production: seed scripts must refuse a non-local database.

## Hard rules
- Never invent hours, costs, users or results. Say plainly what is placeholder or untested.
- Keys in gitignored env files. Flag any key seen in chat or git.
- Client financials and portals stay private.

## Honest status
Written 2026-11-10 from KDC, Ascender OS, `offer.md` and `AGENTS.md`; not yet run from the start on a new client. Open in `offer.md` and left blank here: diagnosis call length, Leak Map turnaround, watch-period length, growth retainer hours. `AGENTS.md` 3.2 still names an old change-order mailbox and rupee rate: confirm with Tejjomay before using either.
