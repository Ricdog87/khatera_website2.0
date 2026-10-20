# khatera-gross.de

Relaunch der Website von Khatera Gross Home Staging (Taunusstein, Rheingau, Wiesbaden).

Astro, TypeScript, Tailwind CSS. Statisch gebaut, Bilder über `astro:assets` (AVIF/WebP), Schriften selbst gehostet (Cormorant Garamond, Jost). Keine Cookies, kein Tracking. Deployment auf Vercel.

## Entwicklung

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # Ausgabe nach .vercel/output
npm run check      # Typprüfung
```

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
| `/home-staging-[ort]` | Stadtseiten Wiesbaden, Rheingau, Taunusstein, Mainz, Frankfurt (Daten in `site.ts` → `orte`) |
| `/makler-bautraeger` | Partnermodell für Makler, Musterwohnungen für Bauträger |
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
| `src/assets/brand/` | Logo als Vektor (aus dem Original-PNG nachgezeichnet) |
| `src/assets/images/` | Kuratierte, umbenannte Projektfotos und Porträts |
| `scripts/screenshots.mjs` | Screenshots Desktop/Mobil: `node scripts/screenshots.mjs http://localhost:4321 / /kontakt` |
| `scripts/og-image.mjs` | Erzeugt `public/og.jpg` und das Touch-Icon neu |
| `SICHTBARKEIT.md` | Plan für Google-Profil, Bewertungen, Makler, Verzeichnisse, Ads, Go-live |
| `CONTENT-TODO.md` | Offene Inhalte und Entscheidungen für die Kundin |

## Prüfen

```bash
npm run build && npx serve .vercel/output/static -l 4321
node scripts/screenshots.mjs http://localhost:4321 / /home-staging-kosten /kontakt
```
