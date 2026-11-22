# The client portal in a branding job

Tejjo, 2026-11-22: everything is delivered on the portal for the client to review and approve; "the whole process has to be so seamless it feels so good".

## What exists (read from the code 2026-11-22, built for KDC, an Offer A job)
- Where: `~/Desktop/disojo-mix`, pages `src/pages/portal/`, API `src/pages/api/portal/`, data `src/lib/portalClients.ts`, SQL `db/portal_*.sql` (Supabase, server-only, RLS on). Live host clientportal.disojostudio.com; the public domain redirects `/portal/*` there.
- Each client gets a private link (only its SHA-256 hash is stored). Admin screen at `/portal/admin`.
- Client tabs: Today, Updates, From you (to-dos), Messages (chat with Tejjo), Contract and payments (milestones), The system (modules and sprints, Offer A only).
- Never start or stop Tejjo's :4700 server. Edit only in disojo-mix.

## What a branding job needs that is not built
1. **The journey**: the 10 steps (6 for Branding) with where the client is, in place of "The system".
2. **Review items**: each deliverable (strategy page, three directions, identity, book PDF, site demo link, presence kit) opens in the portal: PDF pages, images, or the demo link.
3. **Approve or ask for changes**, with a comment, recorded with date and who. Rounds used shown against rounds included.
4. **Questionnaire** filled in the portal, answers saved to the job.
5. **Files**: the handover kit downloadable from the portal.
6. A notification to Tejjo on every approval, change request and message.

Until these exist, use Updates for deliveries and Messages for approvals, and record each approval in `brief/APPROVALS.md` with the client's words and date.
