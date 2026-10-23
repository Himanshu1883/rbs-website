from pathlib import Path
from PIL import Image

src_path = Path(r"C:\Users\Gulab\Desktop\rbs_demo\src\assets\images\logo-source.jpeg")
out_path = Path(r"C:\Users\Gulab\Desktop\rbs_demo\src\assets\images\logo-cropped.jpg")

im = Image.open(src_path).convert("RGB")
w, h = im.size
px = im.load()

min_x, min_y, max_x, max_y = w, h, 0, 0
for y in range(h):
    for x in range(w):
        r, g, b = px[x, y]
        if r > 22 or g > 22 or b > 22:
            min_x = min(min_x, x)
            min_y = min(min_y, y)
            max_x = max(max_x, x)
            max_y = max(max_y, y)

pad_x = 56
pad_y = 48
box = (
    max(0, min_x - pad_x),
    max(0, min_y - pad_y),
    min(w, max_x + 1 + pad_x),
    min(h, max_y + 1 + pad_y),
)
crop = im.crop(box)
crop.save(out_path, "JPEG", quality=95)
print("bbox", min_x, min_y, max_x, max_y)
print("crop", crop.size, "aspect", round(crop.size[0] / crop.size[1], 3))
