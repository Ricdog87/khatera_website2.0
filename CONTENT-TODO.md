# Offene Punkte für Khatera

Alles hier ist auf der Website schon als sinnvoller Platzhalter gefüllt. Bitte bestätigen oder korrigieren. Die meisten Werte stehen zentral in `src/config/site.ts`.

## Bitte bestätigen (Angebot & Versprechen)

| Punkt | Aktuell auf der Website | Wo |
|---|---|---|
| Preise | Werden auf der Website **nicht** genannt (Abstimmung 02.11.). Überall steht „individuelles Angebot nach Erstgespräch“. | `site.ts` → `pakete` → `hinweis` |
| Leistungsumfang je Paket | je 4 bis 5 Punkte | `site.ts` → `pakete` |
| Antwortzeit | Rückmeldung in 24 Stunden, persönliches Angebot in 48 Stunden | Startseite, Kontakt, Ablauf |
| Aufbau | „meist an einem Tag“ | Startseite, Ablauf |
| Abbau | „innerhalb von zwei Wochen nach Notartermin“ | Pakete, FAQ |
| Anfahrt | „im Rhein-Main-Gebiet inklusive“ | Pakete, FAQ |
| Verlängerung | wochenweise, ohne Kündigungsfrist | FAQ |
| Makler-Partnermodell | feste Partnerkonditionen, priorisierte Termine, Abrechnung über Makler oder Eigentümer | `/makler-bautraeger` |
| Extras | Moodboard & Einrichtungsplan, Fotografie über Partner, Handwerker-Koordination (kein virtuelles Staging) | `site.ts` → `extras` |
| WhatsApp | Button auf dem Handy mit der Mobilnummer. Falls kein WhatsApp Business genutzt wird: entfernen | `MobileBar.astro` |
| Kennzahlen | 5+ Jahre, 50+ Kunden, Netzwerk 250+ | `site.ts` → `facts` |

## Aus dem Meeting vom 21.10. (umgesetzt, bitte prüfen)

- Farben: helles Grau, dezentes Oliv, Anthrazit aus der Geschäftsausstattung. Kein Blau, kein Beige mehr.
- Pakete untereinander, klappen beim Überfahren auf (Handy: antippen).
- Menü: Startseite, Home Staging, Musterwohnungen, Fix & Flip, Pakete, Projekte, Über mich, Ratgeber. „Für Makler“ im Footer und auf den Leistungsseiten.
- Neue Seiten: `/home-staging`, `/musterwohnungen`, `/fix-and-flip`. Texte bitte freigeben.
- Partner-Hinweis „bis zu 50 % Kostenübernahme“ dezent in Teil- und Komplett-Staging, im FAQ und auf der Makler-Seite. **Bitte Formulierung und Bedingungen bestätigen.**
- Bewertungs-Link „Auf Google bewerten“ im Footer, auf Über mich und Projekte. **Direkten Link aus dem Google-Unternehmensprofil liefern** (`site.ts` → `googleReviewUrl`).
- Neue Profi-Fotos aus dem Drive-Ordner „Bilder - Webseite“ (Serie Juni 2026, Loft September 2025). Fotos mit blauen Kissen/Stühlen entfernt.
- Datenschutz mit Hosting-Angaben für IONOS (Live) bzw. Vercel (Demo).
- Offen: Partner-Login/Dashboard für Makler (Konzept separat).

## Seit dem 27.10. ergänzt (bitte prüfen)

- Einsatzgebiet: gesamtes Rhein-Main-Gebiet, Musterwohnungen bundesweit (FAQ, Regionen, Musterwohnungen-Seite, strukturierte Daten).
- Drei neue Stadtseiten: Darmstadt, Offenbach, Bad Homburg & Hochtaunus. Texte bitte freigeben.
- „Kurz erklärt“-Blöcke auf Startseite, Leistungs-, Paket- und Stadtseiten.
- Vier neue Ratgeber-Artikel: „Lohnt sich Home Staging?“, „Leere Wohnung verkaufen“, „Musterwohnung einrichten“, „Fix & Flip“. Bitte freigeben.
- Bei Musterwohnungen steht „mit meinem Team vor Ort“. Bitte bestätigen, dass das so stimmt.

## Bitte liefern

- [ ] **Vorher/Nachher-Fotos** von 3 bis 5 Projekten (stärkstes Verkaufsargument, fehlt aktuell komplett)
- [ ] Zu jedem Projekt: Ort, Wohnfläche, Paket, Ergebnis (z. B. „nach 3 Wochen reserviert“)
- [ ] 3 bis 5 Kundenstimmen mit Name und Rolle (Eigentümerin, Makler …) oder Freigabe für Google-Bewertungen
- [ ] Gütesiegel der Staging Community als Grafik (Premium-Mitglied)
- [ ] LinkedIn- und Instagram-Link
- [ ] **Porträt in Originalauflösung**: Das aktuelle Business-Porträt lag nur mit 241 × 249 Pixeln vor und wurde per KI auf 964 × 996 hochgerechnet (Real-ESRGAN, Gesicht mit GFPGAN). Die Originaldatei vom Fotografen ersetzt das 1:1 und ist noch schärfer.
- [ ] Freigabe der vier übernommenen und der vier neuen Ratgeber-Artikel

## Technik (Ricardo)

- [ ] Web3Forms-Key für `kg@khatera-gross.de` anlegen und in Vercel als `PUBLIC_WEB3FORMS_KEY` setzen. Ohne Key öffnet das Formular das E-Mail-Programm mit der fertigen Anfrage.
- [ ] Go-live nach `UEBERGABE.md`, Abschnitt 3
- [ ] Impressum und Datenschutz juristisch prüfen lassen (Entwurf: IONOS- bzw. Vercel-Hosting, Web3Forms, keine Cookies, keine Tracking-Tools)

## Herkunft der Inhalte

- Texte, Kontaktdaten, Impressumsangaben und Mitgliedschaft: alte Website khatera-gross.de (Rohtexte in `content/live-site-texte.md`)
- Fotos: Profi-Fotos aus dem Drive-Ordner „Bilder - Webseite“ (MKG, Juni 2026 und September 2025) sowie eigene Projektfotos von der alten Website. Profi-Fotos mit Khatera: Fotograf „MKG“ (Nikon D850, Januar 2025), Einliegerwohnung: iPhone, Juli 2024. Porträt: von Ricardo geliefert, KI-hochskaliert (siehe oben).
- Logo: Illustrator-Originale (`brand-originale/`), Farben der Geschäftsausstattung: Anthrazit #1E1E1D, Sand #BBB494, Creme #FFFDF0.
- Nicht übernommen: Stockfotos und Platzhalter des Framer-Templates (englische Lorem-Texte, fremde Porträts, Produktbilder).

## Aus dem Termin vom 02.11. (umgesetzt, bitte prüfen)

- Header zeigt nur noch das KG-Monogramm, der volle Name steht im Footer, Impressum und in den Suchmaschinen-Daten.
- Alle Preise entfernt: Pakete, FAQ, Stadtseiten, Ratgeber, strukturierte Daten, `llms.txt`. Stattdessen „persönliches Angebot nach Erstgespräch“.
- Mehrerlös-Rechner entfernt.
- Virtuelles Staging komplett entfernt (Extras, FAQ, Musterwohnungen, Fix & Flip, Stadtseiten, Ratgeber).
- Footer-Logo kleiner.
- Google-Bewertung als auffälliger Button: Startseite oben, Footer, Handy-Menü, Über mich, Projekte.
- Neues Projekt „Haus mit Wendeltreppe“ (Fotos Oktober 2025) auf `/projekte`.
- **Vorher/Nachher-Schieberegler auf `/fix-and-flip` ist eingebaut, aber noch ausgeblendet.** Er erscheint automatisch, sobald echte Bildpaare in `src/assets/images/vorher-nachher/` liegen, benannt `name-vorher.jpg` und `name-nachher.jpg`, gleiche Perspektive. **Bitte 2 bis 3 Paare liefern.**
- Vorschläge für Schrift und Logo liegen als Ansichtsseite bereit. Entscheidung offen.
