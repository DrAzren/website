#!/usr/bin/env python3
"""
Optimise photos for the website.

Usage:
    python3 scripts/optimize_images.py

How it works:
  1. Put the ORIGINAL photo (jpg/png) in  assets/originals/
  2. Run this script. For every original it writes responsive WebP files to
     public/images/<name>-<width>.webp  (widths: 480, 960, 1600 — capped at the original size)
     plus public/images/<name>.jpg as a fallback.
  3. In src/content/site.ts, refer to the photo by its base name, e.g.
     image: { src: "majlis-usim-2026", alt: "..." }

It also regenerates the Open Graph share image (public/og-image.jpg).
Requires Pillow (pip install pillow).
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets" / "originals"
OUT = ROOT / "public" / "images"
FONTS = ROOT / "assets" / "fonts"
WIDTHS = (480, 960, 1600)


def optimise(path: Path) -> None:
    im = ImageOps.exif_transpose(Image.open(path)).convert("RGB")
    name = path.stem
    for w in WIDTHS:
        # every width is always written (capped at the original size) so the site can rely on all three
        target = im if im.width <= w else im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
        target.save(OUT / f"{name}-{w}.webp", "WEBP", quality=80, method=6)
    fallback = im if im.width <= 1200 else im.resize((1200, round(im.height * 1200 / im.width)), Image.LANCZOS)
    fallback.save(OUT / f"{name}.jpg", "JPEG", quality=82, optimize=True, progressive=True)
    print(f"  ✓ {name}  ({im.width}×{im.height})")


def og_image() -> None:
    W, H = 1200, 630
    navy, ivory, coral, lavender = (23, 42, 58), (248, 245, 239), (255, 119, 94), (200, 188, 245)
    img = Image.new("RGB", (W, H), navy)
    d = ImageDraw.Draw(img)
    d.ellipse((760, -160, 1340, 420), fill=(48, 66, 84))
    d.ellipse((820, 360, 1180, 720), fill=coral)

    portrait = Image.open(SRC / "portrait-varsity.jpg").convert("RGB")
    pw, ph = 420, 560
    portrait = ImageOps.fit(portrait, (pw, ph), centering=(0.5, 0.25))
    mask = Image.new("L", (pw, ph), 0)
    md = ImageDraw.Draw(mask)
    md.rectangle((0, pw // 2, pw, ph), fill=255)
    md.ellipse((0, 0, pw, pw), fill=255)
    img.paste(portrait, (720, 70), mask)

    bold = ImageFont.truetype(str(FONTS / "PlusJakartaSans-ExtraBold.ttf"), 112)
    med = ImageFont.truetype(str(FONTS / "PlusJakartaSans-Medium.ttf"), 34)
    small = ImageFont.truetype(str(FONTS / "PlusJakartaSans-Medium.ttf"), 24)
    d.text((70, 70), "HELLO, I'M", font=small, fill=lavender)
    d.text((64, 100), "DR AZREN", font=bold, fill=ivory)
    d.text((70, 250), "Bicara Jiwa. Sebarkan Ilmu.", font=med, fill=ivory)
    d.text((70, 295), "Bina Harapan.", font=med, fill=coral)
    d.text((70, 470), "Penceramah · Penulis · Doktor Kesihatan Mental", font=small, fill=(200, 205, 212))
    d.text((70, 510), "Penulis “Dr, Saya Boleh Sembuh Ke?”", font=small, fill=(200, 205, 212))
    img.save(ROOT / "public" / "og-image.jpg", "JPEG", quality=88, optimize=True)
    print("  ✓ og-image.jpg")


if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    print("Optimising images…")
    for p in sorted(SRC.iterdir()):
        if p.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"}:
            optimise(p)
    og_image()
