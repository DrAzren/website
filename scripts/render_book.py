"""Render a clean 3D book mockup from the genuine print-file textures.

Usage: python3 scripts/render_book.py <folder containing front.png, spine.png, back.png>

Pure Python (numpy + Pillow): projects a box with the real front/spine/back
artwork using a pinhole camera, warps each visible face with an exact
perspective transform, then adds page block, shading, gloss and a soft shadow.
"""
import sys
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageChops

D = sys.argv[1] if len(sys.argv) > 1 else "."
front = Image.open(f"{D}/front.png").convert("RGB")
spine = Image.open(f"{D}/spine.png").convert("RGB")
back = Image.open(f"{D}/back.png").convert("RGB")

W, H, T = 125.0, 177.5, 13.4  # mm


def rot(yaw, pitch, roll=0.0):
    y, p, r = np.radians([yaw, pitch, roll])
    Ry = np.array([[np.cos(y), 0, np.sin(y)], [0, 1, 0], [-np.sin(y), 0, np.cos(y)]])
    Rx = np.array([[1, 0, 0], [0, np.cos(p), -np.sin(p)], [0, np.sin(p), np.cos(p)]])
    Rz = np.array([[np.cos(r), -np.sin(r), 0], [np.sin(r), np.cos(r), 0], [0, 0, 1]])
    return Rz @ Rx @ Ry


def coeffs(dst, src):
    """PIL PERSPECTIVE coefficients mapping output (dst) quad -> input (src) quad."""
    A, B = [], []
    for (x, y), (u, v) in zip(dst, src):
        A.append([x, y, 1, 0, 0, 0, -u * x, -u * y]); B.append(u)
        A.append([0, 0, 0, x, y, 1, -v * x, -v * y]); B.append(v)
    return np.linalg.solve(np.array(A, float), np.array(B, float)).tolist()


def warp(tex, quad, size):
    w, h = tex.size
    src = [(0, 0), (w, 0), (w, h), (0, h)]
    img = tex.convert("RGBA").transform(size, Image.PERSPECTIVE, coeffs(quad, src), Image.BICUBIC)
    mask = Image.new("L", size, 0)
    ImageDraw.Draw(mask).polygon(quad, fill=255)
    img.putalpha(ImageChops.multiply(img.getchannel("A"), mask))
    return img


def shade(img, factor):
    rgb = Image.eval(img.convert("RGB"), lambda c: int(min(255, c * factor)))
    rgb.putalpha(img.getchannel("A"))
    return rgb


def gradient_overlay(size, quad, stops, axis_pts, opacity):
    """Linear light overlay across a face (screen-ish sheen)."""
    w, h = size
    yy, xx = np.mgrid[0:h, 0:w]
    (x0, y0), (x1, y1) = axis_pts
    d = np.array([x1 - x0, y1 - y0], float)
    t = ((xx - x0) * d[0] + (yy - y0) * d[1]) / (d @ d)
    t = np.clip(t, 0, 1)
    val = np.interp(t, [s[0] for s in stops], [s[1] for s in stops])
    a = (val * 255 * opacity).astype(np.uint8)
    over = Image.new("RGBA", size, (255, 255, 255, 0))
    over.putalpha(Image.fromarray(a))
    mask = Image.new("L", size, 0)
    ImageDraw.Draw(mask).polygon(quad, fill=255)
    over.putalpha(ImageChops.multiply(over.getchannel("A"), mask))
    return over


def pages_texture(w, h, horizontal):
    """Cream page block with fine page lines."""
    arr = np.full((h, w, 3), (246, 241, 228), np.uint8)
    rng = np.random.default_rng(3)
    n = h if horizontal else w
    lines = (rng.random(n) * 22).astype(np.int16)
    if horizontal:
        arr = (arr.astype(np.int16) - lines[:, None, None]).clip(0, 255).astype(np.uint8)
    else:
        arr = (arr.astype(np.int16) - lines[None, :, None]).clip(0, 255).astype(np.uint8)
    return Image.fromarray(arr)


def render(yaw, pitch, roll, out, scale=2400, cam_dist=620, show_back=False):
    R = rot(yaw, pitch, roll)
    hw, hh, ht = W / 2, H / 2, T / 2
    # box corners; +z is the front cover, spine at x = -hw
    def P(x, y, z):
        v = R @ np.array([x, y, z])
        zc = cam_dist - v[2]
        f = cam_dist
        return np.array([v[0] * f / zc, -v[1] * f / zc])

    faces = {
        # name: (corners TL, TR, BR, BL in texture orientation, texture, normal)
        "front": ([P(-hw, hh, ht), P(hw, hh, ht), P(hw, -hh, ht), P(-hw, -hh, ht)], front, (0, 0, 1)),
        "back": ([P(hw, hh, -ht), P(-hw, hh, -ht), P(-hw, -hh, -ht), P(hw, -hh, -ht)], back, (0, 0, -1)),
        "spine": ([P(-hw, hh, -ht), P(-hw, hh, ht), P(-hw, -hh, ht), P(-hw, -hh, -ht)], spine, (-1, 0, 0)),
        "fore": ([P(hw, hh, ht), P(hw, hh, -ht), P(hw, -hh, -ht), P(hw, -hh, ht)], None, (1, 0, 0)),
        "top": ([P(-hw, hh, -ht), P(hw, hh, -ht), P(hw, hh, ht), P(-hw, hh, ht)], None, (0, 1, 0)),
    }
    allpts = np.concatenate([np.array(q) for q, _, _ in faces.values()])
    mn, mx = allpts.min(0), allpts.max(0)
    pad = 0.16
    span = (mx - mn).max() * (1 + 2 * pad)
    s = scale / span
    off = np.array([scale / 2, scale / 2]) - (mn + mx) / 2 * s
    size = (scale, scale)
    canvas = Image.new("RGBA", size, (0, 0, 0, 0))

    # soft ground shadow: project the base footprint downward-right
    base = [P(-hw, -hh, ht), P(hw, -hh, ht), P(hw, -hh, -ht), P(-hw, -hh, -ht)]
    shadow = Image.new("L", size, 0)
    sq = [tuple(p * s + off + np.array([scale * 0.03, scale * 0.012])) for p in base]
    cx = np.mean([q[0] for q in sq]); cy = np.mean([q[1] for q in sq])
    ImageDraw.Draw(shadow).ellipse([cx - scale * 0.26, cy - scale * 0.035, cx + scale * 0.30, cy + scale * 0.05], fill=150)
    shadow = shadow.filter(ImageFilter.GaussianBlur(scale * 0.03))
    sh = Image.new("RGBA", size, (23, 42, 58, 0)); sh.putalpha(shadow)
    canvas.alpha_composite(sh)
    contact = Image.new("L", size, 0)
    ImageDraw.Draw(contact).polygon(sq, fill=200)
    contact = contact.filter(ImageFilter.GaussianBlur(scale * 0.008))
    ch = Image.new("RGBA", size, (23, 42, 58, 0)); ch.putalpha(contact)
    canvas.alpha_composite(ch)

    light = np.array([-0.45, 0.55, 0.7]); light /= np.linalg.norm(light)
    view = np.array([0, 0, 1.0])
    order = []
    for name, (quad, tex, n) in faces.items():
        nw = R @ np.array(n, float)
        if nw[2] <= 0.02:
            continue  # back-facing
        if name == "back" and not show_back:
            continue
        depth = np.mean([(R @ np.array(c))[2] for c in [(0, 0, 0)]])
        order.append((nw[2], name, quad, tex, nw))
    order.sort()  # draw most oblique first
    for _, name, quad, tex, nw in order:
        q = [tuple(p * s + off) for p in quad]
        if tex is None:
            horiz = name == "top"
            tex = pages_texture(1200 if horiz else 60, 60 if horiz else 1600, horiz)
        face = warp(tex, q, size)
        lam = (0.9 + 0.1 * max(0.0, float(nw @ light))) * (0.86 if name in ("spine", "fore", "top") else 1.0)
        face = shade(face, lam)
        canvas.alpha_composite(face)
        if name == "front":
            # soft sheen + hinge groove near the spine
            canvas.alpha_composite(gradient_overlay(size, q, [(0, 0.0), (0.42, 0.0), (0.55, 0.22), (0.7, 0.0), (1, 0.0)], (q[0], q[2]), 0.55))
            groove = gradient_overlay(size, q, [(0, 0.0), (0.025, 0.0), (0.04, 0.6), (0.06, 0.0), (1, 0)], (q[0], q[1]), 0.35)
            g = Image.new("RGBA", size, (10, 20, 30, 0)); g.putalpha(groove.getchannel("A")); canvas.alpha_composite(g)
        if name == "spine":
            canvas.alpha_composite(gradient_overlay(size, q, [(0, 0.0), (0.5, 0.18), (1, 0.0)], (q[0], q[1]), 0.6))

    # trim transparent margins and downsample for a crisp antialiased result
    bbox = canvas.getbbox()
    canvas = canvas.crop(bbox)
    out_w = 1600
    canvas = canvas.resize((out_w, round(canvas.height * out_w / canvas.width)), Image.LANCZOS)
    canvas.save(out)
    print(out, canvas.size)


render(yaw=30, pitch=9, roll=-2, out=f"{D}/book-3d.png", scale=3600)
render(yaw=148, pitch=9, roll=2, out=f"{D}/book-3d-back.png", scale=3600, show_back=True)
