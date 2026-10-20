# Logo-Vektorisierung aus dem Original-PNG: python3 scripts/logo-trace.py <png> <out.svg> word|full|mono [toleranz] [weichzeichnung]
# Benötigt: pip install potracer numpy pillow
# Saubere Vektorisierung: Kantenglättung über 8-fache Vergrößerung, Schwelle in der Mitte, dann potrace
import sys, potrace, numpy as np
from PIL import Image, ImageFilter
src, out, part, F = sys.argv[1], sys.argv[2], sys.argv[3], 8
im = Image.open(src).convert('RGB')
a = np.asarray(im).astype(float)
bg = np.array([76,105,113]); fg = np.array([187,180,148])
# Anteil Logo-Farbe je Pixel (0..1), aus der Kantenglättung des Originals
t = np.clip(((a-bg)*(fg-bg)).sum(2) / ((fg-bg)**2).sum(), 0, 1)
mask = t > 0.5
ys, xs = np.where(mask)
rows = mask.any(1)
y0, y1 = ys.min(), ys.max()
# Bereiche: Monogramm / Wortmarke (beide Zeilen)
y = y0
while rows[y]: y += 1
mono_end = y - 1
while not rows[y]: y += 1
word_start = y
if part == 'word': y0 = word_start
elif part == 'mono': y1 = mono_end
cols = mask[y0:y1+1].any(0); xx = np.where(cols)[0]; x0, x1 = xx.min(), xx.max()
pad = 4
crop = t[y0-pad:y1+pad+1, x0-pad:x1+pad+1]
g = Image.fromarray((crop*255).astype(np.uint8))
g = g.resize((g.width*F, g.height*F), Image.LANCZOS).filter(ImageFilter.GaussianBlur(F*float(sys.argv[5]) if len(sys.argv)>5 else F*0.45))
big = np.asarray(g) > 127
path = potrace.Bitmap(~big).trace(turdsize=F*F*4, alphamax=1.15, opticurve=True, opttolerance=float(sys.argv[4]) if len(sys.argv)>4 else 2.0)
h, w = crop.shape
f = lambda p: f"{p.x/F:.2f} {p.y/F:.2f}"
d = []
for c in path:
    d.append(f"M{f(c.start_point)}")
    for s in c.segments:
        d.append(f"L{f(s.c)}L{f(s.end_point)}" if s.is_corner else f"C{f(s.c1)} {f(s.c2)} {f(s.end_point)}")
    d.append('Z')
open(out, 'w').write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}"><path fill="currentColor" fill-rule="evenodd" d="{"".join(d)}"/></svg>')
print(out, w, h)
