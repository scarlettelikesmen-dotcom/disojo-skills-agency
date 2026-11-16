---
name: project-csk-lawny-concept
description: 2026-10-29 redo concept for csklawny.com (Cohen Stine Kapoor LLP, a Manhattan matrimonial law firm); a one-page local concept, not deployed
metadata:
  type: project
---
On 2026-10-29 Tejjo asked "take a shot at csklawny.com, how would you redo this, just show me".

The site belongs to Cohen Stine Kapoor LLP, a matrimonial and family law firm at 11 Times Square (not a lawn company).

The concept is a single page at `~/Desktop/websites ARCHIVE/csk-lawny/v1/index.html`, served with `python3 -m http.server 4561` from that folder.
- Look: ivory and the firm's navy, Instrument Serif with Instrument Sans.
- Hero: full-bleed team photo carrying their own headline.
- Sections: numbered practice-area rows that open on hover; greyscale portraits that turn to colour; the approach section beside the lobby photo; one review at a time; a press list; awards; a confidential-consultation close with a live NYC clock; a giant wordmark; the attorney-advertising disclaimer.

Every word is theirs (excerpts marked with an ellipsis). Photos are hotlinked from their WordPress, not downloaded. It is NOT deployed: it carries a real firm's brand, so don't publish it without Tejjo confirming they are a client or prospect.

Research is in `csk-lawny/research/` (page.json files per page).

Whether CSK is a client or a prospect is unknown.

## 2026-11-11 font change (local, not deployed)
- Source of csk-law-demo.vercel.app = `csk-lawny/v2` (Astro, :4562, launch config "csk-law-demo"); deploy folder `csk-lawny/deploy/csk-law-demo`.
- Specimen of 19 free serifs + 9 sans on the real hero: `v2/src/pages/type.astro` (/type/), shots in `csk-lawny/brief/type/`.
- Tejjo picked 18, Brygada 1918, "site-wide everywhere, every single thing": --serif and --sans both Brygada 1918 (400-700, italics). Was Newsreader + Instrument Sans. Delete /type/ page before any deploy.
- DEPLOYED 2026-11-11 to csk-law-demo.vercel.app (Brygada everywhere). Recipe: build v2, rsync v2/dist into deploy/csk-law-demo (keep .vercel, vercel.json), npx vercel@latest deploy --prod there. Previous deploy files backed up in deploy/csk-law-demo-backup-2026-11-11. Specimen page moved to brief/type/type.astro.bak.
