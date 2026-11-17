---
name: project-level-journal-duplicate-trade
description: "Liquid's journal duplicates an auto-imported trade when you fill in its details, doubling the P&L; Level's journal must never do this"
metadata:
  node_type: memory
  type: project
  originSessionId: ea15c3db-432f-48e4-ab32-232051318f19
  modified: 2026-11-17T15:06:42.640Z
---

Tejjo found this in Liquid (Liquid Journal, Level's only competitor) on 2026-11-17, from their own use. I have not reproduced it.

A trade is imported automatically and shows up waiting for its details. Opening it and writing about it saves the write-up as a second, separate trade, and the original stays. The result is the same trade counted twice, so a losing trade doubles the loss in the P&L.

**Why:** a real weakness in the only competitor that Level can beat, and a trust problem for any journal: numbers that are wrong make the whole record useless.

**How to apply:** when building Level's journal ([[project-level]]):
- Filling in an imported trade edits that same trade; it never creates a new one.
- One trade from the broker is one record. Imports are de-duplicated by the broker's own trade or fill ID.
- P&L totals come from unique trades only; add a test that writing notes on an imported trade leaves the count and P&L unchanged.
- Possible angle for later content or positioning ("your numbers stay right"), but naming Liquid publicly or claiming this about them needs Tejjo's word first.
