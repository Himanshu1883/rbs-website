from pathlib import Path
import shutil
from PIL import Image, ImageFilter

root = Path(r"C:\Users\Gulab\Desktop\rbs_demo")
logo_src = root / "src" / "assets" / "images" / "logo-source.jpeg"
out_dir = root / "src" / "assets" / "images"

src = Image.open(logo_src).convert("RGBA")
w, h = src.size
src_px = src.load()
out = Image.new("RGBA", (w, h), (0, 0, 0, 0))
out_px = out.load()

for y in range(h):
    for x in range(w):
        r, g, b, _ = src_px[x, y]
        pink = r > 150 and r > g + 35 and r > b + 25
        black = r < 28 and g < 28 and b < 28
        if pink:
            out_px[x, y] = (230, 0, 126, 255)
        elif black:
            out_px[x, y] = (0, 0, 0, 0)
        else:
            luma = int(0.2126 * r + 0.7152 * g + 0.0722 * b)
            alpha = 0 if luma < 48 else min(255, int((luma - 36) * 1.35))
            out_px[x, y] = (255, 255, 255, alpha)

# tighten alpha to kill jpeg dust
a = out.split()[3].point(lambda v: 0 if v < 55 else (255 if v > 190 else v))
out.putalpha(a)

bbox = out.getbbox()
pad = 10
left, top, right, bottom = bbox
out = out.crop(
    (
        max(0, left - pad),
        max(0, top - pad),
        min(w, right + pad),
        min(h, bottom + pad),
    )
)

dark_path = out_dir / "logo-on-dark.png"
out.save(dark_path, "PNG")
print("dark", out.size)

light = out.copy()
lp = light.load()
lw, lh = light.size
for y in range(lh):
    for x in range(lw):
        r, g, b, a = lp[x, y]
        if a == 0:
            continue
        if r > 180 and g < 90:
            lp[x, y] = (230, 0, 126, a)
        else:
            lp[x, y] = (17, 11, 14, a)

light.filter(ImageFilter.SMOOTH)
light_path = out_dir / "logo-on-light.png"
light.save(light_path, "PNG")
print("light", light.size)

# also a tight original crop for reference
bbox2 = None
for y in range(h):
    for x in range(w):
        r, g, b, _ = src_px[x, y]
        if r > 24 or g > 24 or b > 24:
            if bbox2 is None:
                bbox2 = [x, y, x, y]
            else:
                bbox2[0] = min(bbox2[0], x)
                bbox2[1] = min(bbox2[1], y)
                bbox2[2] = max(bbox2[2], x)
                bbox2[3] = min(h - 1, max(bbox2[3], y))
if bbox2:
    p = 8
    tight = src.crop(
        (
            max(0, bbox2[0] - p),
            max(0, bbox2[1] - p),
            min(w, bbox2[2] + p),
            min(h, bbox2[3] + p),
        )
    ).convert("RGB")
    tight.save(out_dir / "logo-cropped.jpg", "JPEG", quality=94)
    print("cropped", tight.size)

downloads = Path(r"C:\Users\Gulab\Downloads")
reels = root / "public" / "reels"
reels.mkdir(parents=True, exist_ok=True)

mapping = [
    ("Your step-by-step", "glam-look.mp4"),
    ("rbsmakeoverstudio did a fantastic", "client-love.mp4"),
    ("beautiful canvas", "bridal-glow.mp4"),
    ("ultimate bridal transformation", "bridal-transform.mp4"),
]
files = list(downloads.glob("*.mp4")) + list(downloads.glob("*.MP4"))
for needle, name in mapping:
    match = next((f for f in files if needle.lower() in f.name.lower()), None)
    if not match:
        print("MISSING", needle)
        continue
    dest = reels / name
    shutil.copy2(match, dest)
    print("copied", name, dest.stat().st_size)

print("DONE")
