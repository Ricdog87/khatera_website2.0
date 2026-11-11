# Übergabe: khatera-gross.de

Stand: 11. November 2026 · Demo: https://khatera-relaunch.vercel.app · Repository: `Ricdog87/khatera_website2.0`, Branch `claude/eager-bardeen-5ntj1o`

## 1. Was übergeben wird

| Bereich | Inhalt |
|---|---|
| Seiten | Startseite, Home Staging, Musterwohnungen, Fix & Flip, Pakete & Ablauf, Für Makler, Projekte, Über mich, Kontakt, Ratgeber (8 Artikel), 8 Stadtseiten, Impressum, Datenschutz, 404 |
| Stadtseiten | Wiesbaden, Rheingau, Taunusstein, Mainz, Frankfurt, Darmstadt, Offenbach, Bad Homburg & Hochtaunus |
| Einsatzgebiet | gesamtes Rhein-Main-Gebiet, Musterwohnungen bundesweit |
| Funktionen | Paketauswahl mit Anfrageformular, Vorher/Nachher-Schieberegler (Startseite und Fix & Flip), mobile Anruf-/WhatsApp-Leiste, Google-Bewertungsbutton. Bewusst ohne Preise: jedes Angebot individuell nach Erstgespräch. |
| Name und Logo | Die Website heißt **KG Homestaging**. Das Logo „KG \| HOMESTAGING“ ist aus den Original-Buchstaben der bisherigen Wortmarke gebaut. Inhaberin Khatera Gross steht weiter im Impressum und auf „Über mich“. |
| Design | CI-Farben (helles Grau, Oliv, Anthrazit, Sand), Profi-Fotos MKG |
| Qualität | Lighthouse mobil 99–100 in Performance, Barrierefreiheit, Best Practices und SEO; 30 Seiten ohne tote Links, je eine H1, Titel und Beschreibungen in Google-Länge |
| Datenschutz | keine Cookies, kein Tracking, Schriften und Bilder lokal, daher kein Cookie-Banner nötig |

## 2. SEO und GEO (Google und KI-Suchen)

GEO heißt: Die Seite wird von ChatGPT, Perplexity, Claude, Gemini und Googles KI-Übersichten verstanden und als Quelle zitiert.

| Baustein | Wirkung |
|---|---|
| „Kurz erklärt“-Block auf Startseite, Leistungs-, Paket- und Stadtseiten | Antwort zuerst, mit harten Fakten (Ort, Region, Ablauf, Angebot in 48 Stunden). Genau diese Absätze zitieren KI-Suchen und Featured Snippets. |
| `/llms.txt` und `/llms-full.txt` | Kompaktes Firmenprofil und alle Fakten, FAQ und Ratgeber als Klartext für KI-Assistenten. Wird bei jedem Build automatisch aus den Website-Daten erzeugt. |
| `robots.txt` | Nach Go-live alle Suchmaschinen und KI-Crawler (GPTBot, ClaudeBot, PerplexityBot, Google-Extended u. a.) ausdrücklich erlaubt |
| Strukturierte Daten | Firma mit Leistungen, Einsatzgebiet und Fachgebieten; Website; Person; FAQ; Brotkrumen; Artikel mit Autorin; Service je Stadtseite |
| 8 Stadtseiten | ranken auf „Home Staging + Ort“, jede mit eigenem Lokalbezug (Stadtteile, Markt, Anfahrt) |
| Ratgeber | 8 Artikel, davon 4 neu: Kosten-Nutzen, leere Wohnung verkaufen, Musterwohnung einrichten, Fix & Flip. Alle mit Antwort zuerst, Tabellen und internen Links. |
| Interne Verlinkung | Leistungsseiten verlinken passende Ratgeber, Ratgeber verlinken Leistungen und Pakete |
| Sitemap mit Änderungsdatum, eigenes Vorschaubild je Seite, 301 für alle alten Framer-URLs | saubere Indexierung, keine verlorenen Rankings |
| IndexNow (`npm run indexnow`) | meldet alle Seiten sofort an Bing. Bing speist die Websuche von ChatGPT und Copilot. |

## 3. Go-live

Stand Meeting 11.11.: Die Website läuft künftig auf **Vercel**, die Domain wird dort angebunden. Ziel ist Freitag, 13.11., damit der Link für die Präsentation am 17.11. steht. Voraussetzung: Texte und Bilder von Khatera liegen bis Donnerstag vor. Sonst Go-live am 24.11.

**Vor dem Go-live zu klären**

- **Domain:** Der alte Name soll vollständig weg, die Domain `khatera-gross.de` enthält ihn aber. `kg-homestaging.de` war am 11.11. frei. Bitte vor dem Druck der Werbematerialien entscheiden, welche Adresse dort steht. Bei Wechsel: `site` in `astro.config.mjs`, `company.url` und `company.email` in `src/config/site.ts` sowie `HOST` in `scripts/indexnow.mjs` anpassen, alte Domain per 301 weiterleiten.
- **Formular-Schlüssel:** Auf web3forms.com mit der Geschäfts-E-Mail einen Access Key anlegen.

**Schritte auf Vercel**

1. Projekt `khatera-relaunch` → Settings → Environment Variables (Production): `PUBLIC_INDEXABLE=true` und `PUBLIC_WEB3FORMS_KEY=<key>`.
2. Settings → Domains: Domain und `www`-Variante hinzufügen. Vercel zeigt die nötigen DNS-Einträge.
3. Bei IONOS unter Domains → DNS: A-Eintrag `@` auf die von Vercel genannte IP, CNAME `www` auf den von Vercel genannten Host. **MX-Einträge nicht anfassen**, sonst fällt das E-Mail-Postfach aus.
4. Neu deployen (Redeploy im Vercel-Dashboard), damit die Variablen greifen.
5. Testen: Startseite, `/kontakt` (Testanfrage), `/about-us` (muss auf `/ueber-mich` leiten), `www` (muss auf ohne `www` leiten), `/robots.txt` (darf nicht mehr sperren).
6. Google Search Console: Domain bestätigen, `/sitemap-index.xml` einreichen. Bing Webmaster Tools: Site importieren, danach `npm run indexnow`.
7. Google-Unternehmensprofil: Name „KG Homestaging“, Website-Link, direkten Bewertungslink in `src/config/site.ts` als `googleReviewUrl` eintragen.
8. Framer-Abo kündigen. IONOS-Tarif anhand der Rechnung prüfen: Für diesen Weg wird nur Domain und E-Mail gebraucht, kein Webspace.

**Alternative ohne Vercel:** `PUBLIC_INDEXABLE=true PUBLIC_WEB3FORMS_KEY=<key> npm run build:ionos` erzeugt `dist/` inklusive `.htaccess` zum Hochladen per SFTP auf IONOS-Webspace. Dann gibt es keine automatischen Ratgeber-Beiträge ohne erneutes Hochladen.

## 4. Pflege ohne Entwicklerwissen

Alle Inhalte, die sich ändern, liegen an wenigen Stellen. Nach jeder Änderung: neu bauen (Schritt 2) und hochladen (Schritt 3).

| Ich möchte … | Datei | Was ändern |
|---|---|---|
| Paketinhalte ändern | `src/config/site.ts` → `pakete` | `leistungen`, `hinweis` (Preise werden bewusst nicht angezeigt) |
| Vorher/Nachher-Bilder ergänzen | `src/assets/images/vorher-nachher/` | Paar als `name-vorher.jpg` und `name-nachher.jpg` ablegen. Das erste Paar erscheint auf der Startseite, alle auf `/fix-and-flip`. Details in der `LIESMICH.md` im Ordner. |
| Logo neu erzeugen | `scripts/logo-kg.mjs` | `node scripts/logo-kg.mjs`, danach `node scripts/og-image.mjs` für Vorschaubild und Icons |
| Telefon, E-Mail, Adresse ändern | `src/config/site.ts` → `company` | Werte ersetzen, wirkt auf allen Seiten, im Impressum und in den strukturierten Daten |
| Eine Stadtseite ergänzen | `src/config/site.ts` → `orte` | neuen Eintrag nach Vorbild anlegen, Bild in `src/pages/home-staging-[ort].astro` zuordnen |
| FAQ ändern | `src/content/faq.ts` | Frage und Antwort; FAQ-Daten für Google aktualisieren sich automatisch |
| Ratgeber-Artikel schreiben | `src/content/ratgeber/` | neue `.md`-Datei nach Vorbild, Bild aus `src/assets/images/` verlinken. Erscheint automatisch in Übersicht, Sitemap und `llms-full.txt`. Themen und Regeln: `RATGEBER-PLAN.md`. |
| Projekt ergänzen | `src/pages/projekte.astro` | Bilder nach `src/assets/images/` kopieren, Eintrag im Array `projekte` |
| Partner-Hinweis (50 %) ändern | `src/config/site.ts` → `partnerHinweis` | Text |
| Bewertungslink setzen | `src/config/site.ts` → `company.googleReviewUrl` | direkten Link aus dem Google-Profil |

Für Ricardo: `npm run check` (Typprüfung), `python3 -I scripts/seo-check.py .vercel/output/static` (SEO-Check nach dem Build), `node scripts/screenshots.mjs http://localhost:4321 /` (Screenshots).

## 5. Was noch fehlt (von Khatera)

Ausführlich in `CONTENT-TODO.md`. Die wichtigsten Punkte für mehr Anfragen:

1. Direkter Google-Bewertungslink und die ersten 5 Bewertungen
2. Bestätigung des 50-%-Partnerbonus
3. Echte Fotos vom leeren Zustand für den Schieberegler (aktuell ist der Leerstand digital nachgestellt und so gekennzeichnet), dazu Ergebnisse zu 3 Projekten (Ort, Fläche, „nach X Wochen verkauft“)
4. Porträt in Originalauflösung vom Fotografen
5. LinkedIn- und Instagram-Link (werden automatisch in die strukturierten Daten übernommen)
6. Juristische Prüfung von Impressum und Datenschutz
7. Neuer Name: Google-Unternehmensprofil, LinkedIn, Staging-Community-Profil und Verzeichnisse auf „KG Homestaging“ umstellen. Domain-Entscheidung siehe Abschnitt 3.

## 6. Nächste Ausbaustufe (optional)

- **Partner-Dashboard für Makler:** Login, Objekte mit Grundriss einreichen, Status verfolgen. Empfehlung: Supabase plus eigene Subdomain `partner.khatera-gross.de`, da IONOS-Webspace keinen Server-Code ausführt.
- **Automatische Ratgeber-Beiträge:** Themenplan für 12 Monate und Auftrag in `RATGEBER-PLAN.md`. Einschalten, sobald Rhythmus und Freigabe entschieden sind.
- **Google Ads auf Stadtseiten:** Test mit 300 bis 500 € im Monat, sobald Bewertungen da sind.
