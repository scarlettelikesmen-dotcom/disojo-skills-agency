import shutil
import os

brain_dir = "/Users/tejjo/.gemini/antigravity/brain/d27431cf-30d8-4de8-9827-c62cf3e5c03c"
assets_dir = "/Users/tejjo/Desktop/websites/sudha-mahesh-thakkar/assets"

mapping = {
    "media__1782138294806.png": "client_powder.png",
    "media__1782138314556.png": "client_finger.png",
    "media__1782138389855.png": "client_bulbs.png",
    "media__1782138400676.png": "client_finger_high_curcumin.png",
    "media__1782138410610.png": "client_internal_closeup.png",
    "media__1782138422483.png": "client_powder_curcumin.png"
}

for src, dst in mapping.items():
    src_path = os.path.join(brain_dir, src)
    dst_path = os.path.join(assets_dir, dst)
    shutil.copy(src_path, dst_path)
    print(f"Copied {src} to {dst}")
