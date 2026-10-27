// Meldet alle Seiten aus der Live-Sitemap per IndexNow an Bing, Yandex u. a. (Bing speist auch ChatGPT- und Copilot-Suche).
// Nach jedem Go-live oder größeren Update ausführen: npm run indexnow
const KEY = '35209a0f89a3d701bc60c346921e914a';
const HOST = 'khatera-gross.de';

const xml = await (await fetch(`https://${HOST}/sitemap-0.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urlList.length) throw new Error('Keine URLs in der Sitemap gefunden. Ist die Seite live und PUBLIC_INDEXABLE=true gesetzt?');

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: ${urlList.length} URLs gemeldet, Antwort ${res.status} ${res.statusText}`);
