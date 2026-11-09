---
name: project-ascender-os-build
description: Ascender Media CRM + client portal ("Ascender OS"): approved 2026-10-21, USD 19,500 build + USD 750/mo; build state, how to run, what is left
metadata:
  type: project
---

Client approved proposal 2026-10-21; Tejjo received the 20% advance (USD 3,900). Fee and client facts are private (never on a public site). 117 active clients, currently spreadsheets + Slack, Stripe payment links sent by hand, footage via Google Drive (to be replaced by direct upload).

**Code:** `~/Desktop/DISOJO SOLUTIONS/projects/ascender-portal/ascender-os` (Next 16.4, React 19, Tailwind 4, TS 7, Supabase). Plan: `../PLAN.md`; proposal PDF in `../`. No git remote and no commit yet (waiting for Tejjo to pick the GitHub account; commit only when asked).

**Run:** Docker running, `supabase start` (ports offset +100: API 54421, DB 54422, Mailpit 54424, so it does not clash with the KDC stack `kdc-test`), `npm run dev` (port 3200), `npm run db:seed` for demo users (admin/editor/one/two @demo.test, magic links appear in Mailpit), `supabase test db` for pgTAP RLS tests (14 pass), `npm run db:types` after schema changes.

**Client list received 2026-10-21:** `~/Desktop/client_directory_117.csv` (117 rows: account_id, contact, title, company, industry, email, phone, location, deal_value, stage, lead_source). It is a sales directory, NOT a content-client list: 19 Active Client, the rest pipeline/renewal stages; deal values $15k-250k don't match plan prices ($1.3k-6k/mo), so shown as 'deal value' only, never MRR. Only 19 are 'Active Client' vs the '117 active clients' Tejjo said: unresolved, flag it. Import: `node scripts/import-clients.mjs <csv>` (idempotent by account_id), then `npm run db:seed`.

**Done (2026-10-21):** schema + RLS + RPCs (approve_video, request_revision flags over-limit, never blocks) + plan seed + storage buckets; invite-only auth (signups off); proxy role gate; magic-link login verified in browser; CRM overview (value by stage/source/location), Clients table (search, filters, sort, paging), account detail (contacts, notes, stage change + activity), Pipeline board; portal dashboard. Role-sync trigger fixes admin-role bug. 3 pgTAP files pass, build passes. Screenshots via `node scripts/shots.mjs ../shots` (headless Chrome; the in-app pane blocks cross-port redirects).

**Left:** production board, invoices page, add/edit client form + CSV import UI, drag-and-drop pipeline, resumable upload (tus) + send-footage page, review player with timecoded comments, library, messages, billing/Stripe (client's restricted key), Slack alerts, Calendly webhook, spreadsheet import, invite flow, email sending (needs client DNS), Lighthouse, handover docs.

**Why / how to apply:** brand tokens come from ascendermedia.in (Hanken Grotesk, cobalt #2b45f5, paper #f3f3f0, ink #0e0e10). Revision overage policy (charge/block/flag) is unconfirmed: currently flag only. Open facts needed from the client are listed in PLAN.md section 6. See [[project-high-ticket-branding-offer]].

## CRM v2 redesign (2026-10-21, after Tejjo: "what the actual fuck is this design")
- v1 was a dashboard template (stat cards, bar cards, 61px rows, deal-pipeline model). Rebuilt after research (Attio, Linear write-ups, Folk/Twenty product shots) and the anti-slop skills. Plan: `projects/ascender-portal/PLAN-v2-crm-design.md`.
- **Data truth (Tejjo 2026-10-21): ALL 117 accounts are active clients; the sheet has an issue** (stage column unreliable, 35 companies repeated up to 3x with different industries/locations). Stage shown only as "Stage (sheet)", value as "Contract value (sheet)", never built logic on them. Ask Tejjo what the sheet issue is before relying on stage.
- New CRM: Today (attention queue), Clients (dense 36px table, saved-style views in sidebar, filters, column chooser, multi-select + bulk export, Table/Board toggle, peek panel, j/k/Enter/x/Esc/slash keys, Cmd+K palette), record page (tabs, inline-editable properties). Real Ascender A mark in `public/brand`. Interaction QA: `node scripts/interact.mjs` (11 checks). Screens: `node scripts/shots.mjs ../shots [desktop|phone|portal]`.
- Demo production/invoice data for all 117 is DEV-ONLY (`scripts/seed-dev.mjs`, refuses non-local DB). Never import to production.
- **Gotcha that cost an hour:** Next 16 dev blocks `127.0.0.1` unless `allowedDevOrigins: ['127.0.0.1','localhost']` is in next.config; without it React never hydrates (forms fall back to native posts, buttons do nothing). Also `devIndicators: false` hides the dev badge.
- Not yet: client portal still old look (needs same design system), production board, invoices, messages, custom saved views in DB, dark mode, drag-and-drop board, Lighthouse run, hosted Supabase + Vercel preview.
