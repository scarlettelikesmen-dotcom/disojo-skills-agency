> **2026-10-14: three accounts, two worlds.** Brand folders are now `brands/disojo`, `brands/codewithabel`, `brands/abelkapoor-trading`. Start with `brands/README.md` and skill `disojo-content-os`. Older notes below that say `personal`/`trading` mean `codewithabel`/`abelkapoor-trading`.

> **2026-10-13: the workflow now lives in skills.** Start with `disojo-reel-studio` (clip -> reel), `disojo-carousel-studio`, `disojo-content-copy`.
> The engine is `~/.claude/skills/disojo-reel-studio/engine`; `tools/`, `design/`, `assets/`, `fonts/` here are links to it (edit in the skill, not here).
> `_archive_pre_skill/` holds the pre-skill copies and can be deleted. The notes below are the original build log.

# Content Hub: Tejjomay's content production desk

Three brands, one pipeline: `brands/disojo`, `brands/personal`, `brands/trading`.
Tejjomay films. Claude does everything else: research, hooks, scripts, shot lists, edits, captions, calendar, review.

## Before any work
1. Ask which brand (or read it from the request). Read `brands/<brand>/brand.md` fully. If it still has blanks that matter, ask. Never fill them with guesses.
2. Never invent: stats, results, testimonials, client names, offers, P&L, follower counts. Use only what is in the brand file, the footage, or what Tejjomay says this turn.
3. Run drafts through `no-ai-slop` and the brand voice before showing them. No badge soup, no filler, no emoji spam.

## Pipeline (skills in ~/.claude/skills)
- Research: content-research, trend-spotter, competitor-teardown, reel-analyzer, agent-reach, comment-mining
- Strategy: content-pillar-builder, going-viral, series-planner, positioning-audit
- Hooks/scripts: viral-hook-writer, hook-mining, ab-hook-tester, reel-scripter, reel-builder, on-screen-text-writer, b-roll-shot-list
- Formats: carousel-builder, viral-carousel, x-thread-strategy, linkedin-thought-leadership, story-sequencer
- Ship: caption-and-hashtags, cta-writer, cover-thumbnail-brief, content-calendar, cross-platform-reformatter
- Review: content-audit, analytics-readout, launch-retrospective, profile-conversion-audit

## Where things go
- `inbox/` raw footage. `edits/` finished cuts (never overwrite the originals).
- `scripts/` `hooks/` `calendar/` named `<brand>-<yyyy-mm-dd>-<slug>.md`.
- `swipe/` reels/posts worth modelling (format only, never copy words).

## Tools (installed 2026-10-13, all local)
- Carousels: write a spec like `scripts/disojo-2026-10-13-where-work-leaks.json`, then
  `node tools/render-carousel.mjs <spec.json> edits/<name>` -> 1080x1350 PNGs. Design system: `design/<brand>/tokens.css` (only `disojo` exists; personal and trading need their own look, do not reuse).
- Reels: `.venv/bin/python tools/edit_reel.py <raw.mov> --out edits/<name> --hook "Hook *emphasis*" --kicker "Label"`
  transcribes (faster-whisper small, CPU), cuts pauses >0.28s, alternate punch-in, animated brand captions (cream pill pops on the spoken word), animated hook card (claim wipe at 1.2s), voice clean + loudnorm, slow push-in per cut, 1080x1920 mp4. `--transcript-only` first; ALWAYS show Tejjomay the transcript (Whisper misheard "live" as "life"; Hinglish untested). Re-run is cached via `transcript.json` (`--retranscribe` to redo).
- This ffmpeg has NO libass/drawtext: captions/hook are rendered frame by frame in Chrome (`tools/timeline.html` + `render-timeline.mjs`, WAAPI seeked per frame, transparent PNG sequences) and overlaid. Chrome path is hard-coded to /Applications/Google Chrome.app.
- Motion rules used (from emil-design-eng / make-interfaces-feel-better / going-viral): strong ease-out (.23,1,.32,1), overshoot only subtle, enter = opacity+lift+blur, exits faster than enters, 55-65ms stagger, slow idle push so nothing is static, hook claim lands ~1.2s.
- Audio: voice clean (highpass, afftdn, EQ, de-ess, compress) + loudnorm -16 LUFS by default (`--no-clean` to skip). `--music track.mp3 [--music-db -22]` mixes a bed with sidechain ducking (measured 5-8 dB duck on a synthetic test). Script prints measured LUFS in/out. No SFX yet; no real music licensed/downloaded.
- Copy: read `copy-rules.md` and `brands/<brand>/voice.md` before writing any hook/script. Trading voice profile is built from his real transcripts.
- faster-whisper's own audio decode is broken on Python 3.14 (PyAV mismatch): audio is piped from ffmpeg as numpy instead. Do not "simplify" this.
- Test footage in ~/Desktop/PERSONAL BRAND REELS already has baked-in captions (old exports); use fresh raw footage.

- DECISION 2026-10-13: reel captions/hooks stay in **Host Grotesk** (Tejjomay compared 12 bold fonts incl. Anton and chose to keep it). Do not propose other fonts again. Candidates are archived in `fonts/reels/` and `edits/fonts/specimen.png`.
- `tools/motion-lab.*` is the OLD demo (v1 easing, judged 'mid' by Tejjomay). The real motion lives in `timeline.html`. Still to port into the timeline engine on request: lower third, count-up stat, underline stroke, process steps.

## Editing (ffmpeg, local)
Can do: cut/trim, silence removal, join, 9:16 reframe, speed, audio normalise, burn-in captions, overlays/text, cover frame export.
Cannot: judge raw footage by eye without extracting frames first. Always extract frames and look before claiming an edit is good. Render a preview and check it before handing over.

## Brand rules
- disojo: no client names/figures public without client OK (see project AGENTS.md). Postcards +42% is client-reported: say so.
- trading: no advice, no signals, no return promises, no unverified results. Process/discipline/psychology angle. Show only real, verifiable numbers Tejjomay supplies. SEBI rules apply to Indian audiences: flag anything that could read as advice and ask.
- personal: only facts Tejjomay confirms about themselves.

## Honesty
Say what is untested, placeholder, or a guess. Posting, DMs, comments, and any account action need Tejjomay's explicit OK each time. Tejjomay logs in to accounts themselves.

## Long raw take -> 30s reel workflow (built 2026-10-13)
1. `.venv/bin/python tools/take_report.py RAW.mov --out edits/<name>`: numbered sentences with timestamps, retakes/fillers/pauses flagged (heuristic; always read it yourself).
2. Write `scripts/plan-<name>.json`: `{"keep":[[s,e],...], "hook":"short\nlines with *emphasis*", "kicker":"...", "emphasis":["word",...], "callouts":[{"text":"0.5%","t0":2,"t1":4,"y":900}]}`. keep = SOURCE-time ranges chosen by Claude to total ~30s of speech. Callouts only for facts he says on camera.
3. `.venv/bin/python tools/edit_reel.py RAW.mov --out edits/<name> --plan scripts/plan-<name>.json`. Show him the chosen script (what was kept/cut) with the render.
- Motion vocabulary now: spring pop (real physics baked into CSS linear(), small bounce), marker highlighter sweep on emphasis words (`--caption-style pill` for the old pill), hook claim wipe, callout pop. Retakes: 4-word fuzzy match (or 3 after a pause) keeps the LAST attempt; auto-detection misses messy multi-take runs, so plan.keep is the reliable path.
- Render time is dominated by decoding 4K: ~2 min for a 56s source.
- Not built: sound effects (could synthesize pop/whoosh with ffmpeg lavfi, untested by ear), real music, brand accent colour for the marker (cream only until personal/trading looks are set).

## v3 additions (2026-10-13): cards, pulses, sfx
- Plan key `cards`: `[{"type":"clean|balance|loop|rise","at":<source seconds>,"dur":2.5,"label":"...","text":"Short *line.*","a":"..","b":".."}]`. Compact 620px card top-left (y 236) so it never covers the eyes; illustration only (no axes, no numbers) and text must paraphrase what he says. New types go in tools/timeline.html.
- Camera: automatic zoom pulse on every emphasised word and card start. SFX (synthesised pop/swipe/whoosh, peak ~-25 dBFS) default ON, `--no-sfx` to drop; Tejjomay has not yet confirmed how they sound.
- Learned: capture overlay layers in isolation (they overlap in y 700-820); top PNG sequence must be contiguous; Whisper (small and medium.en) both hear "clean" as "cream" in his voice, so use plan.fix.

## v4 (2026-10-13): see skill `disojo-reel-studio` (SKILL.md, references/research-2026-10-13.md, brands/disojo/MOTION.md)
Default layout is now `split` (panel on top, speaker below), boxed captions, HDR->SDR colour, real CC0 SFX. Commands in this file still work (tools/ links to the skill engine).
