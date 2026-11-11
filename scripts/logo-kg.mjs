// Baut das Logo "KG HOMESTAGING" aus den Original-Buchstaben der Wortmarke (Illustrator-Vektoren der Designerin).
// "KG" kommt aus der Zeile KHATERA GROSS, "HOMESTAGING" aus der Unterzeile HOME STAGING, ohne Wortabstand.
// Aufruf: node scripts/logo-kg.mjs  → schreibt src/assets/brand/kg-homestaging*.svg
import fs from 'node:fs';

const quelle = fs.readFileSync(new URL('../brand-originale/wortmarke-khatera-gross.svg', import.meta.url), 'utf8');
const d = [...quelle.matchAll(/<path[^>]*\sd="([^"]+)"/g)].map((m) => m[1]);
// Boxen der Buchstaben (x, y, Breite, Höhe) im Original-Koordinatensystem
const box = [[344.42,360.82,19.16,32.71],[367.81,360.82,21.08,32.73],[392.05,359.64,26.07,33.91],[415.1,360.82,22.38,32.73],[440.92,360.82,16.83,32.73],[461.48,360.82,21.03,32.71],[484.66,359.64,26.06,33.91],[524.91,360.31,22.13,33.69],[553.63,360.82,21.03,32.71],[578.27,360.09,32.63,34.47],[613.02,360.31,21.19,34.12],[636.59,360.31,21.17,34.12],[421.79,408.43,8.01,9.53],[436.45,408.3,9.56,9.79],[452.69,408.43,10.29,9.53],[469.98,408.43,6.91,9.53],[491.15,408.28,7.71,9.81],[504.74,408.43,8.09,9.53],[517.45,408.43,9.02,9.53],[532.1,408.3,9.03,9.81],[547.97,408.43,1.73,9.53],[556.7,408.43,8,9.53],[571.36,408.3,9.03,9.81]];
const n = (v) => +v.toFixed(3);
const p = (i, tx, ty, s = 1) => `<path transform="translate(${n(tx)} ${n(ty)}) scale(${n(s)}) translate(${n(-box[i][0])} ${n(-360.82)})" d="${d[i]}"/>`;
const sub = (i, tx, ty, s = 1) => `<path transform="translate(${n(tx)} ${n(ty)}) scale(${n(s)}) translate(${n(-421.79)} ${n(-408.43)})" d="${d[i]}"/>`;

// KG: K und G mit dem Buchstabenabstand der Originalzeile
const KG_GAP = 6.2, KG_W = box[0][2] + KG_GAP + box[7][2], KG_H = 32.72;
const kg = (x, y, s) => p(0, x, y, s) + p(7, x + (box[0][2] + KG_GAP) * s, y, s);
// HOMESTAGING: Unterzeile, Lücke zwischen E und S auf Buchstabenabstand gekürzt
const SHIFT = 491.15 - (469.98 + 6.91) - 6.65;
const SUB_W = 580.39 - 421.79 - SHIFT, SUB_H = 9.53;
const hs = (x, y, s) => [12,13,14,15].map((i) => sub(i, x, y, s)).join('') + [16,17,18,19,20,21,22].map((i) => sub(i, x - SHIFT * s, y, s)).join('');

const svg = (w, h, inner) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n(w)} ${n(h)}" width="${n(w)}" height="${n(h)}"><g fill="currentColor">${inner}</g></svg>`;

// 1) Zeile: KG | HOMESTAGING
{
  const s = 1.55, gap = 13, pad = 1;
  const subH = SUB_H * s, y = pad + (KG_H - subH) / 2;
  const xr = pad + KG_W + gap, xs = xr + 0.9 + gap;
  const w = xs + SUB_W * s + pad, h = KG_H + 2 * pad;
  fs.writeFileSync(new URL('../src/assets/brand/kg-homestaging.svg', import.meta.url),
    svg(w, h, kg(pad, pad, 1) + `<rect x="${n(xr)}" y="${pad + 1}" width="0.9" height="${n(KG_H - 2)}"/>` + hs(xs, y, s)));
}
// 2) Gestapelt: KG groß, HOMESTAGING darunter auf gleiche Breite
{
  const pad = 1, s = 1, W = SUB_W * s, k = 2.05;
  const kw = KG_W * k, kh = KG_H * k, gap = 15;
  const w = W + 2 * pad, h = kh + gap + SUB_H * s + 2 * pad;
  const lineY = pad + kh / 2, lx = pad + (W - kw) / 2;
  fs.writeFileSync(new URL('../src/assets/brand/kg-homestaging-gestapelt.svg', import.meta.url),
    svg(w, h, kg(lx, pad, k)
      + `<rect x="${pad}" y="${n(lineY)}" width="${n(lx - pad - 12)}" height="0.7"/><rect x="${n(lx + kw + 12)}" y="${n(lineY)}" width="${n(W - (lx - pad) - kw - 12)}" height="0.7"/>`
      + hs(pad, pad + kh + gap, s)));
}
console.log('Logo geschrieben');
