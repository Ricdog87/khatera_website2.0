// Zieht Logo-Teile als saubere Vektoren aus den Illustrator-Originalen (vorher: pdftocairo -svg datei.ai out.svg).
// Aufruf: node scripts/logo-extract.mjs <quelle.svg> <ziel.svg> <pfad-indizes, z. B. 90-101,79-89>
import { chromium } from 'playwright';
import fs from 'node:fs';

const [, , src, out, spec] = process.argv;
const ids = spec.split(',').flatMap((r) => {
  const [a, b = a] = r.split('-').map(Number);
  return Array.from({ length: b - a + 1 }, (_, k) => a + k);
});
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(`<body style="margin:0">${fs.readFileSync(src, 'utf8').replace(/<\?xml[^>]*>/, '').replace(/<\/?page(Set)?>/g, '')}</body>`);
const svg = await page.evaluate((ids) => {
  const all = [...document.querySelectorAll('path')];
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  const parts = ids.map((i) => {
    const el = all[i];
    const m = el.getCTM();
    const r = el.getBBox();
    for (const [x, y] of [[r.x, r.y], [r.x + r.width, r.y], [r.x, r.y + r.height], [r.x + r.width, r.y + r.height]]) {
      const X = m.a * x + m.c * y + m.e, Y = m.b * x + m.d * y + m.f;
      x0 = Math.min(x0, X); y0 = Math.min(y0, Y); x1 = Math.max(x1, X); y1 = Math.max(y1, Y);
    }
    const f = (n) => +n.toFixed(5);
    return { d: el.getAttribute('d'), rule: el.getAttribute('fill-rule') || 'nonzero', m: [m.a, m.b, m.c, m.d, m.e, m.f].map(f) };
  });
  const pad = 0.5;
  const vb = [x0 - pad, y0 - pad, x1 - x0 + 2 * pad, y1 - y0 + 2 * pad].map((n) => +n.toFixed(3));
  const paths = parts.map((p) => `<path fill-rule="${p.rule}" transform="matrix(${p.m.join(' ')})" d="${p.d.replace(/\s+/g, ' ').replace(/(\d\.\d{3})\d+/g, '$1').trim()}"/>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb.join(' ')}" width="${vb[2]}" height="${vb[3]}"><g fill="currentColor">${paths}</g></svg>`;
}, ids);
fs.writeFileSync(out, svg);
console.log(out, svg.length, 'Zeichen');
await browser.close();
