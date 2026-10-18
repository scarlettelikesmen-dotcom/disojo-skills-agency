#!/usr/bin/env python3
"""Merge slide PNGs into one PDF (LinkedIn document post) and a contact sheet. usage: carousel_pdf.py OUTDIR [name]"""
import sys
from pathlib import Path
from PIL import Image
d = Path(sys.argv[1]); name = sys.argv[2] if len(sys.argv) > 2 else d.name
pngs = sorted(d.glob("slide-*.png")); ims = [Image.open(p).convert("RGB") for p in pngs]
ims[0].save(d / f"{name}.pdf", save_all=True, append_images=ims[1:], resolution=150.0)
w, h = 270, 338; sh = Image.new("RGB", (len(ims) * (w + 8) + 8, h + 16), (40, 40, 40))
for i, im in enumerate(ims): sh.paste(im.resize((w, h)), (8 + i * (w + 8), 8))
sh.save(d / "_sheet.png"); print(f"pdf: {d / (name + '.pdf')} ({len(ims)} pages); sheet: {d / '_sheet.png'}")
