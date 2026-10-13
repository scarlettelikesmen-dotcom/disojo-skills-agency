# Plan file schema (`scripts/plan-<brand>-<name>.json`)

All times are **source-clip seconds** (what take_report.py prints). The pipeline maps them to the edited timeline.

```json
{
  "layout": "split",
  "speakerY": 140,
  "keep": [[2.25, 6.35], [9.93, 14.46], [15.85, 25.6]],
  "hook": "Agencies\nbuild *bad*\nsoftware.",
  "kicker": "Disojo / Why we're different",
  "emphasis": ["trash", "clean", "business@57.0"],
  "fix": {"cream": "clean"},
  "cards": [
    {"type": "clean",   "at": 12.7, "dur": 2.5, "label": "Clean software", "text": "Clean *software.*"},
    {"type": "balance", "at": 18.5, "dur": 3.3, "label": "What we care about", "text": "Your business, *not* the money.", "a": "Your business", "b": "Money"},
    {"type": "loop",    "at": 36.3, "dur": 2.8, "label": "How we win", "text": "You get business. *We* get business.", "a": "You get business", "b": "We get business"},
    {"type": "rise",    "at": 55.6, "dur": 2.2, "label": "The goal", "text": "More business *for you.*", "side": "left", "y": 236}
  ],
  "callouts": [{"text": "0.5%", "at": 20.0, "dur": 2.0, "y": 900}]
}
```

| key | meaning |
|---|---|
| `layout` | `split` (default, the house style): hook and every card become full-width **visual panels** on the top 880 px, the speaker moves to the bottom 1040 px, captions sit on the seam. `full`: small cards over the full-frame speaker (old v3 look). |
| `speakerY` | split layout only: top of the 1040 px crop taken from the full frame (default 140). Raise/lower it so the eyes land in the lower block, not under the caption box. Check the sheet. |
| `keep` | source ranges to keep. Words outside are dropped; fillers (um/uh) and detected retakes are removed inside. Omit to keep everything (auto cut of pauses > 0.28 s). |
| `hook` | on-screen hook, `\n` line breaks, `*word*` = emphasis wipe at 1.2 s. Keep lines <= ~18 chars. |
| `kicker` | small mono label above the hook. |
| `emphasis` | words that get the marker highlight when spoken. `word@12.4` = only the one spoken near source 12.4 s. |
| `fix` | corrects mis-heard words: `{"cream":"clean"}` (match on the normalised word). Always flag in the delivery note. |
| `cards` | illustrated visuals (panels in split layout, small cards in full layout). Optional `theme`: `dark`/`light` (panels alternate automatically after the dark hook panel). `type`: clean, balance, loop, rise. `at` source seconds, `dur` seconds (>= 1.2). `label` mono header, `text` bottom line (`*x*` = italic). `a`/`b` = labels for balance and loop. Optional `side` ("left" default, "right"), `y` (top in px, default 236). Cards start after the hook panel automatically. Keep one panel per idea, 2-3.3 s each, and no more than about 40% of the reel. |
| `callouts` | big fact pop. Only for figures he says on camera. `at`/`dur` source seconds, optional `y` (full-frame px, default 900). |

CLI overrides: `--hook`, `--kicker`. Everything else lives in the plan.
Captions are automatic: 3-4 word chunks, broken at sentence ends, cuts and pauses, held until the next phrase, sentence-case fixed.
