# Übergabe: khatera-gross.de

Stand: 27. Oktober 2026 · Demo: https://khatera-relaunch.vercel.app · Repository: `Ricdog87/khatera_website2.0`, Branch `claude/eager-bardeen-5ntj1o`

## 1. Was übergeben wird

| Bereich | Inhalt |
|---|---|
| Seiten | Startseite, Home Staging, Musterwohnungen, Fix & Flip, Pakete & Preise, Für Makler, Projekte, Über mich, Kontakt, Ratgeber (8 Artikel), 8 Stadtseiten, Impressum, Datenschutz, 404 |
| Stadtseiten | Wiesbaden, Rheingau, Taunusstein, Mainz, Frankfurt, Darmstadt, Offenbach, Bad Homburg & Hochtaunus |
| Einsatzgebiet | gesamtes Rhein-Main-Gebiet, Musterwohnungen bundesweit |
| Funktionen | Paketauswahl mit Anfrageformular, Mehrerlös-Rechner, mobile Anruf-/WhatsApp-Leiste, Google-Bewertungslink |
| Design | CI-Farben (helles Grau, Oliv, Anthrazit, Sand), Original-Logo aus Illustrator, Profi-Fotos MKG |
| Qualität | Lighthouse mobil 99–100 in Performance, Barrierefreiheit, Best Practices und SEO; 30 Seiten ohne tote Links, je eine H1, Titel und Beschreibungen in Google-Länge |
| Datenschutz | keine Cookies, kein Tracking, Schriften und Bilder lokal, daher kein Cookie-Banner nötig |

## 2. SEO und GEO (Google und KI-Suchen)

GEO heißt: Die Seite wird von ChatGPT, Perplexity, Claude, Gemini und Googles KI-Übersichten verstanden und als Quelle zitiert.

| Baustein | Wirkung |
|---|---|
| „Kurz erklärt“-Block auf Startseite, Leistungs-, Preis- und Stadtseiten | Antwort zuerst, mit harten Fakten (Ort, Preise, Ablauf). Genau diese Absätze zitieren KI-Suchen und Featured Snippets. |
| `/llms.txt` und `/llms-full.txt` | Kompaktes Firmenprofil und alle Fakten, FAQ und Ratgeber als Klartext für KI-Assistenten. Wird bei jedem Build automatisch aus den Website-Daten erzeugt. |
| `robots.txt` | Nach Go-live alle Suchmaschinen und KI-Crawler (GPTBot, ClaudeBot, PerplexityBot, Google-Extended u. a.) ausdrücklich erlaubt |
| Strukturierte Daten | Firma mit Leistungen, Preisen, Einsatzgebiet und Fachgebieten; Website; Person; FAQ; Brotkrumen; Artikel mit Autorin; Service je Stadtseite |
| 8 Stadtseiten | ranken auf „Home Staging + Ort“, jede mit eigenem Lokalbezug (Stadtteile, Markt, Anfahrt) |
| Ratgeber | 8 Artikel, davon 4 neu: Kosten-Nutzen, leere Wohnung verkaufen, Musterwohnung einrichten, Fix & Flip. Alle mit Antwort zuerst, Tabellen und internen Links. |
| Interne Verlinkung | Leistungsseiten verlinken passende Ratgeber, Ratgeber verlinken Leistungen und Preise |
| Sitemap mit Änderungsdatum, eigenes Vorschaubild je Seite, 301 für alle alten Framer-URLs | saubere Indexierung, keine verlorenen Rankings |
| IndexNow (`npm run indexnow`) | meldet alle Seiten sofort an Bing. Bing speist die Websuche von ChatGPT und Copilot. |

## 3. Go-live in 8 Schritten

1. **Formular-Schlüssel:** Auf web3forms.com mit `kg@khatera-gross.de` einen Access Key anlegen.
2. **Build für IONOS:**
   ```bash
   PUBLIC_INDEXABLE=true PUBLIC_WEB3FORMS_KEY=<key> npm run build:ionos
   ```
   Ergebnis liegt in `dist/`, inklusive `.htaccess` (HTTPS, ohne www, Weiterleitungen, Caching).
3. **Hochladen:** Den Inhalt von `dist/` per SFTP in das Webspace-Verzeichnis bei IONOS laden. Die versteckte Datei `.htaccess` muss mit hochgeladen werden.
4. **Domain:** `khatera-gross.de` und `www.khatera-gross.de` im IONOS-Konto auf diesen Webspace zeigen lassen, SSL-Zertifikat aktivieren. Danach Framer-Abo kündigen.
5. **Testen:** Startseite, `/kontakt` (Testanfrage schicken), `/about-us` (muss auf `/ueber-mich` weiterleiten), `https://www.khatera-gross.de` (muss auf ohne www weiterleiten).
6. **Google Search Console:** Domain bestätigen, `https://khatera-gross.de/sitemap-index.xml` einreichen.
7. **Bing Webmaster Tools:** Site aus der Search Console importieren, Sitemap einreichen. Danach `npm run indexnow` ausführen.
8. **Google-Unternehmensprofil:** Website-Link setzen, direkten Bewertungslink kopieren und in `src/config/site.ts` als `googleReviewUrl` eintragen, neu bauen und hochladen.

Die Demo auf Vercel bleibt für Vorschauen bestehen. Sie ist für Suchmaschinen gesperrt und macht der Live-Domain daher keine Konkurrenz.

## 4. Pflege ohne Entwicklerwissen

Alle Inhalte, die sich ändern, liegen an wenigen Stellen. Nach jeder Änderung: neu bauen (Schritt 2) und hochladen (Schritt 3).

| Ich möchte … | Datei | Was ändern |
|---|---|---|
| Preise oder Paketinhalte ändern | `src/config/site.ts` → `pakete` | `preisAb`, `leistungen`, `preisHinweis` |
| Telefon, E-Mail, Adresse ändern | `src/config/site.ts` → `company` | Werte ersetzen, wirkt auf allen Seiten, im Impressum und in den strukturierten Daten |
| Eine Stadtseite ergänzen | `src/config/site.ts` → `orte` | neuen Eintrag nach Vorbild anlegen, Bild in `src/pages/home-staging-[ort].astro` zuordnen |
| FAQ ändern | `src/content/faq.ts` | Frage und Antwort; FAQ-Daten für Google aktualisieren sich automatisch |
| Ratgeber-Artikel schreiben | `src/content/ratgeber/` | neue `.md`-Datei nach Vorbild, Bild aus `src/assets/images/` verlinken. Erscheint automatisch in Übersicht, Sitemap und `llms-full.txt`. |
| Projekt ergänzen | `src/pages/projekte.astro` | Bilder nach `src/assets/images/` kopieren, Eintrag im Array `projekte` |
| Partner-Hinweis (50 %) ändern | `src/config/site.ts` → `partnerHinweis` | Text |
| Bewertungslink setzen | `src/config/site.ts` → `company.googleReviewUrl` | direkten Link aus dem Google-Profil |

Für Ricardo: `npm run check` (Typprüfung), `python3 -I scripts/seo-check.py .vercel/output/static` (SEO-Check nach dem Build), `node scripts/screenshots.mjs http://localhost:4321 /` (Screenshots).

## 5. Was noch fehlt (von Khatera)

Ausführlich in `CONTENT-TODO.md`. Die wichtigsten Punkte für mehr Anfragen:

1. Direkter Google-Bewertungslink und die ersten 5 Bewertungen
2. Bestätigung der Paketpreise und des 50-%-Partnerbonus
3. Vorher/Nachher-Fotos und Ergebnisse zu 3 Projekten (Ort, Fläche, „nach X Wochen verkauft“)
4. Porträt in Originalauflösung vom Fotografen
5. LinkedIn- und Instagram-Link (werden automatisch in die strukturierten Daten übernommen)
6. Juristische Prüfung von Impressum und Datenschutz

## 6. Nächste Ausbaustufe (optional)

- **Partner-Dashboard für Makler:** Login, Objekte mit Grundriss einreichen, Status verfolgen. Empfehlung: Supabase plus eigene Subdomain `partner.khatera-gross.de`, da IONOS-Webspace keinen Server-Code ausführt.
- **Monatlicher Ratgeber-Artikel:** Themenvorschläge in `SICHTBARKEIT.md`.
- **Google Ads auf Stadtseiten:** Test mit 300 bis 500 € im Monat, sobald Bewertungen da sind.
