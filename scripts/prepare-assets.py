import shutil
from pathlib import Path
from PIL import Image

src = Path(r"C:\Users\Gulab\.cursor\projects\c-Users-Gulab-Desktop-rbs-demo\assets")
dest_client = Path(r"C:\Users\Gulab\Desktop\rbs_demo\src\assets\images")
dest_stock = Path(r"C:\Users\Gulab\Desktop\rbs_demo\src\assets\stock")
dest_client.mkdir(parents=True, exist_ok=True)
dest_stock.mkdir(parents=True, exist_ok=True)

mapping = [
    ("model_work__1_", "bridal-red-chandelier.jpg"),
    ("model_work__2_", "bridal-red-paisley.jpg"),
    ("model_work__3_", "party-orange-chin-hand.jpg"),
    ("model_work__4_", "party-orange-earring.jpg"),
    ("owner_rbs__1_", "owner-rachna-portrait.jpg"),
    ("owner_rbs__2_", "owner-rachna-full.jpg"),
    ("owner_working-image__1_", "studio-working-logo-wall.jpeg"),
    ("owner_working-image__2_", "studio-working-mirror.jpeg"),
    ("RBS_LOGO", "logo-source.jpeg"),
    ("Glamorous_Bridal", "studio-glamorous-moments.jpg"),
]

files = list(src.iterdir())
for key, name in mapping:
    match = next((f for f in files if key in f.name), None)
    if not match:
        print("MISSING", key)
        continue
    target = dest_client / name
    shutil.copy2(match, target)
    im = Image.open(target)
    print(f"{name}: {im.size[0]}x{im.size[1]} {target.stat().st_size}")

stock_src = Path(r"C:\Users\Gulab\.cursor\projects\c-Users-Gulab-Desktop-rbs-demo\stock-temp")
for f in sorted(stock_src.glob("*.jpg")):
    im = Image.open(f).convert("RGB")
    out = dest_stock / (f.stem + ".webp")
    im.save(out, "WEBP", quality=82, method=6)
    print(f"stock {out.name}: {im.size[0]}x{im.size[1]} {out.stat().st_size}")
print("DONE")
