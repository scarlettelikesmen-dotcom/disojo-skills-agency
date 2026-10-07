---
name: feedback-working-style
description: "How Tejjomay wants me to work on site builds - finish whole sections before showing, never invent content, re-read details before generating, be direct, state placeholders"
metadata:
  node_type: memory
  type: feedback
  originSessionId: aec5c1a6-53dc-4b0c-890f-4259beb677e1
  modified: 2026-10-07T14:33:46.473Z
---

Learned across the Postcards rebuild (Oct 2026). Applies to every Disojo client build.

- **Do the whole thing, verify it, then show it.** They told me to stop coming back with "small, small things" and wanted a finished section or site, not a stream of check-ins. **Why:** repeated interruptions with partial work annoyed them and slowed the build. **How to apply:** batch the work, run the build and smoke test myself, then show a running result with screenshots.
- **Re-read their details before generating anything.** They got angry when I ignored the label wording, added a camera orbit and dust particles, and missed the real cap style. **Why:** wrong outputs cost them manual regeneration time. **How to apply:** restate the constraints from their message before writing a prompt or building, and compare results against the real product.
- **Never invent content.** No made-up reviews, stats, offers, products or contact details; switch the section off instead and say so. **Why:** it is a client-facing proof piece. **How to apply:** mark unknowns TODO(client), flag placeholders out loud, keep testimonials off until real.
- **Be direct and honest about limits.** Say plainly what is untested (real phone), AI-generated, or a placeholder; correct myself when a theory is disproved by measurement (the decoded-frame memory theory was wrong and reverted). They dislike generic AI "slop" in design and copy.
- **Ask them to approve before uploading, publishing, or sharing anything outward** (public deploys were done when asked; do not widen scope).
- **Remote backup matters:** code lived only on one Mac; ask for a GitHub URL early on any new project.
- Their secrets: they pasted a Gemini API key in chat once; keep keys in gitignored env files and suggest rotation.

Related: [[reference-scroll-site-skill]], [[lumina-store-3d-rebuild]], [[disojo-business]].
