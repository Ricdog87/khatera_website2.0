// Erzeugt public/og.jpg (Social-Vorschau), public/apple-touch-icon.png und public/logo.png aus Logo und Hero-Foto.
import { chromium } from 'playwright';
import fs from 'node:fs';
import sharp from 'sharp';

const logo = fs.readFileSync('src/assets/brand/logo.svg', 'utf8');
const mono = fs.readFileSync('src/assets/brand/monogramm.svg', 'utf8');
const photo = (await sharp('src/assets/images/haus-fernblick/home-staging-wohnzimmer-haus-fernblick.jpg').resize(1400).jpeg({ quality: 85 }).toBuffer()).toString('base64');

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(`<body style="margin:0;display:grid;grid-template-columns:1fr 470px;height:630px;background:#1e1e1d">
  <div style="background:url(data:image/jpeg;base64,${photo}) 60% 50%/cover"></div>
  <div style="display:flex;align-items:center;justify-content:center;color:#bbb494;padding:70px">${logo.replace('<svg', '<svg style="width:100%;height:auto"')}</div>
</body>`);
await page.screenshot({ path: 'public/og.png' });
await page.setViewportSize({ width: 180, height: 180 });
await page.setContent(`<body style="margin:0;width:180px;height:180px;background:#1e1e1d;display:flex;align-items:center;justify-content:center;color:#bbb494">${mono.replace('<svg', '<svg style="width:96px;height:auto"')}</body>`);
await page.screenshot({ path: 'public/apple-touch-icon.png' });
// Logo für Google (Raster, quadratisch, mind. 112 px)
await page.setViewportSize({ width: 512, height: 512 });
await page.setContent(`<body style="margin:0;width:512px;height:512px;background:#1e1e1d;display:flex;align-items:center;justify-content:center;color:#bbb494">${mono.replace('<svg', '<svg style="width:260px;height:auto"')}</body>`);
await page.screenshot({ path: 'public/logo.png' });
await browser.close();
await sharp('public/og.png').jpeg({ quality: 82, mozjpeg: true }).toFile('public/og.jpg');
fs.unlinkSync('public/og.png');
console.log('ok');
