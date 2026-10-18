#!/usr/bin/env python3
"""carousel.py SPEC.json OUTDIR: render a carousel (PNG slides + layout check), build the LinkedIn PDF and a contact sheet.
Spec shape and slide types: ~/.claude/skills/disojo-reel-studio/engine/tools/render-carousel.mjs (header). Brands: disojo, trading (Rulebook), code (Coded by Abel)."""
import subprocess, sys
from pathlib import Path
ENGINE = Path.home() / ".claude/skills/disojo-reel-studio/engine/tools"
spec, out = sys.argv[1], sys.argv[2]
r = subprocess.run(["node", str(ENGINE / "render-carousel.mjs"), spec, out]); 
subprocess.run([sys.executable, str(ENGINE / "carousel_pdf.py"), out])
sys.exit(0 if r.returncode in (0, 3) else r.returncode)
