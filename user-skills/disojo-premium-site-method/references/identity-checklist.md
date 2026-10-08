# Identity checklist (answer in one line each before writing UI; write it into PLAN.md)
1. Concept: what does the client DO, and what object/interface from that craft can the whole page be? (Ascender: video editing suite. Mochi: Japanese tea-room. Not: "dark SaaS".)
2. Palette: 3 neutrals + ONE accent; contrast checked (>= 4.5:1 text, buttons dark-on-accent).
3. Type: display + body + mono for data. No Inter/Roboto/Arial. No random serif emphasis.
4. Nav: not the centred nav + pill and not an edge-to-edge bar. Ascender: floating dock bottom-left + brand pill top-left.
5. Scroll logic: what moves with scroll and why (Ascender: global timecode + playhead; pinned tracks; sideways chat wall).
6. Surfaces: double-bezel cards, concentric radius (outer = inner + bezel), one radius rule per page.
7. Proof: what real proof exists? If none can be shown, say so on the page and use what is real.
8. Section families: list them; none repeats; max 2 image+text splits in a row.
9. Footer: not a giant wordmark (Ascender: "Render complete" end card).
10. Motion budget: every animation answers "what does it communicate?"; custom cubic-beziers; transform/opacity only; hover gated by `(hover: hover)`.
