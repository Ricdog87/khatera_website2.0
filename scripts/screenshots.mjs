// Screenshots für die Abnahme: node scripts/screenshots.mjs http://localhost:4321 / /kontakt …
import { chromium } from 'playwright';
import fs from 'node:fs';

const [, , base = 'http://localhost:4321', ...paths] = process.argv;
const out = process.env.OUT || 'audit/screens';
fs.mkdirSync(out, { recursive: true });
const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 },
];
const browser = await chromium.launch();
for (const vp of viewports) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, isMobile: vp.isMobile, deviceScaleFactor: vp.deviceScaleFactor ?? 1, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  for (const p of paths.length ? paths : ['/']) {
    await page.goto(base + p, { waitUntil: 'networkidle' });
    await page.evaluate(async () => {
      document.querySelectorAll('img[loading=lazy]').forEach((i) => i.setAttribute('loading', 'eager'));
      for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
      window.scrollTo(0, 0);
    });
    await page.evaluate(() => Promise.all([...document.images].map((i) => (i.complete ? 0 : new Promise((r) => { i.onload = i.onerror = r; })))));
    await page.waitForTimeout(400);
    const name = (p === '/' ? 'home' : p.replace(/^\//, '').replace(/[/?=&]/g, '_')) + `-${vp.name}.png`;
    await page.screenshot({ path: `${out}/${name}`, fullPage: true });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    console.log(name, overflow > 0 ? `HORIZONTAL OVERFLOW ${overflow}px` : 'ok');
  }
  await ctx.close();
}
await browser.close();
