# khatera-gross.de

Relaunch der Website von Khatera Gross Home Staging (Taunusstein, Rheingau, Wiesbaden).

Astro, TypeScript, Tailwind CSS. Statisch gebaut, Bilder über `astro:assets` (AVIF/WebP), Schriften selbst gehostet (Cormorant Garamond, Jost). Keine Cookies, kein Tracking. Deployment auf Vercel.

## Entwicklung

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # Ausgabe nach .vercel/output
npm run check      # Typprüfung
npm run build:ionos  # Live-Build für IONOS-Webspace nach dist/ (inkl. .htaccess)
```

## Deployment

| Ziel | Befehl | Hinweise |
|---|---|---|
| Vercel (Demo) | Push auf den Branch | Projekt `khatera-relaunch`, deployt automatisch |
| IONOS (Live) | `npm run build:ionos`, dann Inhalt von `dist/` per SFTP in das Webspace-Verzeichnis | `.htaccess` wird mit erzeugt: HTTPS, ohne www, 301 für alte Framer-URLs, saubere URLs ohne `.html`, Caching. Lokal mit Apache 2.4 getestet. Umgebungsvariablen beim Build setzen: `PUBLIC_INDEXABLE=true PUBLIC_WEB3FORMS_KEY=… npm run build:ionos` |

Die Datenschutzerklärung nennt automatisch den passenden Hoster (IONOS im Live-Build, Vercel in der Demo).

Voraussetzung: Node 22.22 oder neuer.

## Umgebungsvariablen

| Variable | Zweck |
|---|---|
| `PUBLIC_INDEXABLE` | Nur beim Go-live auf `true` setzen. Ohne die Variable sind alle Builds `noindex` und `robots.txt` sperrt alles. |
| `PUBLIC_WEB3FORMS_KEY` | Versand des Anfrageformulars per E-Mail (web3forms.com, kostenlos). Ohne Key öffnet das Formular das E-Mail-Programm. |

## Seiten

| URL | Inhalt |
|---|---|
| `/` | Startseite: Hero, Zielgruppen, Pakete, Einblicke, Ablauf, Mehrerlös-Rechner, Über mich, Regionen, FAQ |
| `/home-staging-kosten` | Pakete & Preise, Preisfaktoren, Rechenbeispiel, Rechner, FAQ Kosten |
| `/home-staging-[ort]` | Stadtseiten Wiesbaden, Rheingau, Taunusstein, Mainz, Frankfurt, Darmstadt, Offenbach, Bad Homburg (Daten in `site.ts` → `orte`) |
| `/llms.txt`, `/llms-full.txt` | Firmenprofil und alle Fakten als Klartext für KI-Assistenten |
| `/home-staging` | Leistungsseite für Eigentümer |
| `/musterwohnungen` | Bauträger und Projektentwickler |
| `/fix-and-flip` | Investoren, mit Rechenbeispiel zu Haltekosten |
| `/makler-bautraeger` | Partnermodell für Makler |
| `/projekte`, `/ueber-mich` | Referenzen, Profil |
| `/ratgeber`, `/ratgeber/[slug]` | Artikel als Markdown in `src/content/ratgeber/` |
| `/kontakt` | Anfrageformular mit Paketauswahl, Vorbelegung über `?paket=komplett&flaeche=…&preis=…&ort=…` |
| `/impressum`, `/datenschutz` | Markdown in `src/content/recht/` |

Alte Framer-URLs (`/about-us`, `/blog/…`, `/project/…`) leiten per 301 weiter, siehe `astro.config.mjs`.

## Struktur

| Pfad | Inhalt |
|---|---|
| `src/config/site.ts` | Firmendaten, Pakete und Preise, Extras, Rechner-Werte, Stadtseiten |
| `src/content/faq.ts` | FAQ, wird auch als FAQPage-Schema ausgegeben |
| `src/components/` | Header, Footer, Paketkarten, Rechner, Ablauf, FAQ, Regionen, CTA |
| `src/assets/brand/` | Wortmarke, Logo, Monogramm und Musterkachel, extrahiert aus den Illustrator-Originalen |
| `brand-originale/` | Originaldateien der Designerin (Visitenkarte, Briefumschlag, Icon in 4 Farben) |
| `src/assets/images/` | Kuratierte, umbenannte Projektfotos und Porträts |
| `scripts/screenshots.mjs` | Screenshots Desktop/Mobil: `node scripts/screenshots.mjs http://localhost:4321 / /kontakt` |
| `scripts/og-image.mjs` | Erzeugt `public/og.jpg` und das Touch-Icon neu |
| `scripts/logo-extract.mjs` | Zieht Logo-Teile als SVG aus den Originalen: `pdftocairo -svg brand-originale/….ai tmp.svg`, dann `node scripts/logo-extract.mjs tmp.svg out.svg 90-101,79-89` |
| `UEBERGABE.md` | Übergabe: Stand, Go-live in 8 Schritten, Pflege-Anleitung, offene Punkte |
| `SICHTBARKEIT.md` | Plan für Google-Profil, Bewertungen, Makler, Verzeichnisse, KI-Sichtbarkeit, Ads |
| `src/lib/llms.ts` | Inhalte für `/llms.txt` und `/llms-full.txt` (aus denselben Daten wie die Website) |
| `scripts/seo-check.py` | Prüft Links, Titel, Beschreibungen, H1, Alt-Texte, JSON-LD im Build |
| `scripts/indexnow.mjs` | Meldet alle Seiten nach Go-live an Bing (`npm run indexnow`) |
| `CONTENT-TODO.md` | Offene Inhalte und Entscheidungen für die Kundin |

## Prüfen

```bash
npm run build && npx serve .vercel/output/static -l 4321
node scripts/screenshots.mjs http://localhost:4321 / /home-staging-kosten /kontakt
```
