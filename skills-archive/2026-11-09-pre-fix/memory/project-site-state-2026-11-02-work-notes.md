---
name: project-site-state-2026-11-02-work-notes
description: Disojo site DEPLOYED ca6f2fd (2026-11-02 evening) from disojo-mix: work-page notes, asc5 + kd2 screenshots, $750,000 Mentable, 78,000+ cards, stage arrows; one local change not deployed
metadata:
  type: project
---
Deployed ca6f2fd (dpl_6eDX1kgeqKxrTLaQMb1Ayzu5hzZf) from ~/Desktop/disojo-mix, branch mix-2026-11-01, pushed to origin. Verified live on www.disojostudio.com.

What shipped:
- Ascender screenshots are asc5-* everywhere (desktop 2000x1255 + iOS sim phones 690x1500).
- Home stage (WorkStage): plain prev/next arrows, separate absolute element at the right edge of the frame.
- Mentable stage + /work: case study shots (mentable/v3-home, v4-intent, v3-edge, mt-analyst-v2). v4-intent-780.webp = new sim capture with the icon-only tab bar (Tejjo rejects any shot with the OLD text tab bar). Raw: mentable-space/app-capture/intent-2026-11-02.png.
- /work: Mentable figure "$750,000 raised" (Tejjo's word only, not elsewhere on the site); Nature's Blend "78,000+" (was 78,904) everywhere in text.
- /work: KDC = web mode, kd2-admin-v2.jpg (HD Today dashboard from the LOCAL demo admin, fake test data) + kd-app-2-v2 phone.
- /work: note under each scene (name, 3-sentence story in NOTE map in src/pages/work/index.astro, service tags), Monolog-style; "View success story" uses the site .btn; scenes 46svh.

Later deployed 6e0ddac: Ascender note line "allowed them to close $50,000 worth of deals in 4 months" (matches Skye, Tejjo: keep everything to 4 months); hover zone on the /work list ends at the widest number.

Open: Mentable home stage caption "Desk is closed" sits on the "Run the gate" screen; Nature's Blend screenshot shows 78,904 inside the image; Mentable record shot shows a partial sample "+$16,400" (gate not run).
Local test infra left running: KDC test Supabase (Docker), kdc-admin demo :3100, Expo Metro :8081 (~/TradeMind).
Related: [[project-site-state-2026-11-02-testimonials]], [[feedback-disojo-site-working-copy]]

**2026-11-04 DEPLOYED 095bc66** (from disojo-mix, branch mix-2026-11-01, Tejjo said "Deploy everything"): FAQ cost answer now opens with Tejjo's price line ($5,000 start, most $8,000 to $20,000, USD, Tejjo's own words, so pricing is now public on the FAQ); timeline answer adds "Most projects run 8 to 12 weeks end to end."; "So far that has meant a music school..." removed from "Who do you usually work with?"; home work-stage tags (.sg-k .sg-t) restyled to match /work tags. Verified on live by curl.
