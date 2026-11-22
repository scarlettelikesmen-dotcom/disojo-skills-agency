---
name: project-kdc-app-contract
description: "KDC App development and maintenance contract with Kunal Drum Class; v3 draft built 2026-11-22 from Tejjo's annotated PDF, paused, blanks left"
metadata:
  node_type: memory
  type: project
  originSessionId: 2b056b99-c661-4dfb-9342-4067ab1e7d93
  modified: 2026-11-22T17:27:22.713Z
---

KDC App contract (Disojo Studio and Kunal Drum Class, Kunal Athreya). Paused by Tejjo 2026-11-22; pick up here.

**Files**
- Source of truth: `projects/kdc/KDCAPP/docs/KDC-Contract-v2.html` (clause text). Backup before the v3 edits: `docs/design/KDC-Contract-v2.before-2026-11-22.html`.
- Build: `cd docs/design && python3 build_contract.py && NODE_PATH=$HOME/.disojo-tools/node_modules node print.cjs && pdfunite _cover.pdf _body.pdf ../KDC-Contract-v3-draft.pdf`. Live Disojo brand (hoflik, Bricolage, graphite). Cover and body print separately.
- Output: `docs/KDC-Contract-v3-draft.pdf`, copy on Desktop. Tejjo's annotated input: `~/Desktop/finalcontractdiscussion1.pdf`.
- New or changed text is wrapped in `<span class="new">` and prints red (Tejjo asked for new clauses in red). Remove the class when finalising.

**Decided by Tejjo 2026-11-22**
- Annexure B (will get back items) is inside the fixed ₹3,25,000 (1.3, 6.1, Annexure B intro).
- Payments: M1 ₹1,10,000 upfront on signing; M2 ₹1,07,500 on client approval of final version; M3 ₹1,07,500 when live on both stores (3.6), payable anyway 30 days after "ready to submit" notice if the delay is the client's (no dev account etc.) or Apple/Google's side. Nothing received before signing (3.2). Invoices due in 7 days.
- 3.5: after M1 the client need not continue and owes nothing until a written go-ahead. 13.4: start date is the client's, no upper limit. 12.6: if it stops after only M1, Tejjo keeps M1 and hands over nothing.
- Students: fee covers up to 314; +₹1,500/month at 315, 415, 515...; drops back when count falls. 5.4: combined multi-centre fee is the base for the 7% yearly rise.
- 7.1: any centre under 150 active students may take the reduced plan, 50% off, up to 150 students. 7.2: 7 days' notice to return. 7.3: pause free up to 6 months, then ₹2,000/month until resume. 7.4 exit-after-pause sentence removed.
- 12.1: 7 days to fix a breach. 12.4: one-year lock from Go-Live. 12.5: if Tejjo leaves, must first find a replacement developer at a similar fee and the same or lower yearly rise. 4.5 tied to 12.4/12.5.
- Locked: 3 hours small changes a month, ₹800/hour urgent fixes. 11.3 liability cap kept (I advised it protects Tejjo; Tejjo did not object).

**Still open:** agreement date; Disojo registered address, Udyam number, Tejjo's title; client registered address; Kunal's title; cover says "Version 2"; strip the red before sending. Risk flagged, not acted on: payment gateway, WhatsApp/SMS and GST invoices are now inside the fixed price via Annexure B.

Related: [[project-kdc-site-redo]]
