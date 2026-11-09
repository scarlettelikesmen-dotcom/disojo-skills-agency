# Product UI rules (dashboards, admin panels, portals)

Kept from `anti-slop-design`, archived 2026-11-09. Moves into `disojo-digital-systems` when that skill is built.

- One primary action per zone, at most three secondary. Five equal buttons means group or rank them.
- Design for what most users do most days: that action is prominent and immediate. Rare actions go in a menu or a second tab.
- One filter or date bar per page, controlling every view. Never a picker inside each card.
- Each metric appears once per view: one summary, drill-downs below.
- No decoration that holds no data (a big map or 3D globe). Bars, sparklines and rows with real deltas.
- No vanity cards: real figures or no card. A status dot only when it reports real state.
- Remove status badges the data already shows, sentences explaining a clear button, and bordered cards wrapping one field.
- Every control has default, hover, focus, active, disabled, loading, error, success. Empty states say how to fill them.
- Very frequent actions (keyboard shortcuts, row selection) do not animate. Dropdowns 120-180ms, modals 200-250ms, scaling from the trigger.
- Filters, tabs and pagination live in the URL so a view can be shared. Confirm destructive actions.
- Tabular numbers on all figures; tables become cards or a contained scroll on phones.
