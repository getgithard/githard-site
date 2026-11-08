# Build every image the site and GitHub need from one transparent cutout of Tank.
# Usage: uv run --with pillow scripts/make-assets.py CUTOUT.png HEAD_BOX OUT_DIR
#   HEAD_BOX is x,y,size in the cutout's pixels: a square around Tank's head.
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

cut = Image.open(sys.argv[1]).convert("RGBA")
hx, hy, hs = map(int, sys.argv[2].split(","))
out = Path(sys.argv[3]); out.mkdir(parents=True, exist_ok=True)
site = Path(__file__).resolve().parent.parent
BARRACKS, OLIVE, MOSS, SAND = (19, 21, 15), (65, 75, 43), (110, 108, 65), (185, 166, 124)

def camo_disc(size):
    # Olive-to-sand gradient disc behind the head, so it reads on light and dark backgrounds.
    g = Image.new("RGBA", (size, size))
    px = g.load()
    for y in range(size):
        for x in range(size):
            t = (x + y) / (2 * size)
            a, b, k = (OLIVE, MOSS, t / .5) if t < .5 else (MOSS, SAND, (t - .5) / .5)
            px[x, y] = tuple(int(a[i] + (b[i] - a[i]) * k) for i in range(3)) + (255,)
    mask = Image.new("L", (size, size)); ImageDraw.Draw(mask).ellipse((0, 0, size - 1, size - 1), fill=255)
    disc = Image.new("RGBA", (size, size)); disc.paste(g, mask=mask)
    return disc, mask

full = cut.crop(cut.getbbox())
full.thumbnail((960, 1080), Image.LANCZOS)
full.save(out / "tank.png", optimize=True)

head = cut.crop((hx, hy, hx + hs, hy + hs)).resize((1024, 1024), Image.LANCZOS)
disc, mask = camo_disc(1024)
icon = disc.copy(); icon.alpha_composite(head)
icon.putalpha(Image.composite(icon.getchannel("A"), Image.new("L", icon.size), mask))
icon.save(out / "icon.png", optimize=True)            # plugin icon and org avatar, 1024 px square
icon.resize((128, 128), Image.LANCZOS).save(out / "tank-head.png", optimize=True)
icon.resize((64, 64), Image.LANCZOS).save(out / "favicon.png", optimize=True)

social = Image.new("RGBA", (1200, 630), BARRACKS + (255,))
d = ImageDraw.Draw(social)
stencil = ImageFont.truetype(str(site / "www/fonts/stencil.woff2"), 96); stencil.set_variation_by_axes([800])
body = ImageFont.truetype(str(site / "www/fonts/archivo.woff2"), 34); body.set_variation_by_axes([500])
d.text((64, 150), "Your repo's been", font=stencil, fill=(230, 220, 195))
d.text((64, 250), "soft long enough.", font=stencil, fill=SAND)
d.text((64, 400), "GitHard: boot camp for your GitHub repos.", font=body, fill=(169, 159, 136))
d.text((64, 450), "githard.dev", font=body, fill=(230, 220, 195))
s = full.copy(); s.thumbnail((520, 600), Image.LANCZOS)
shadow = Image.new("RGBA", s.size, (0, 0, 0, 0)); shadow.putalpha(s.getchannel("A").point(lambda a: a * .5))
social.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(18)), (1200 - s.width - 30, 630 - s.height + 20))
social.alpha_composite(s, (1200 - s.width - 40, 630 - s.height))
social.convert("RGB").save(out / "social.png", optimize=True)
print("wrote", *sorted(p.name for p in out.iterdir()))
