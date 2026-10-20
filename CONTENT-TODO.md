# Offene Punkte für Khatera

Alles hier ist auf der Website schon als sinnvoller Platzhalter gefüllt. Bitte bestätigen oder korrigieren. Die meisten Werte stehen zentral in `src/config/site.ts`.

## Bitte bestätigen (Angebot & Versprechen)

| Punkt | Aktuell auf der Website | Wo |
|---|---|---|
| Startpreise der Pakete | Beratung ab 290 €, Teil-Staging ab 1.490 € (8 Wochen Miete), Komplett-Staging ab 2.990 € (12 Wochen Miete), alles netto | `site.ts` → `pakete` |
| Leistungsumfang je Paket | je 4 bis 5 Punkte | `site.ts` → `pakete` |
| Grundlage Mehrerlös-Rechner | 30 bis 45 €/m² Investition, 3 bis 8 % Mehrerlös | `site.ts` → `rechner` |
| Antwortzeit | Rückmeldung in 24 Stunden, Festpreisangebot in 48 Stunden | Startseite, Kontakt, Ablauf |
| Aufbau | „meist an einem Tag“ | Startseite, Ablauf |
| Abbau | „innerhalb von zwei Wochen nach Notartermin“ | Pakete, FAQ |
| Anfahrt | „im Rhein-Main-Gebiet inklusive“ | Preise, FAQ |
| Verlängerung | wochenweise, ohne Kündigungsfrist | FAQ |
| Makler-Partnermodell | feste Partnerkonditionen, priorisierte Termine, Abrechnung über Makler oder Eigentümer | `/makler-bautraeger` |
| Extras | Virtuelles Staging, Fotografie über Partner, Handwerker-Koordination | `site.ts` → `extras` |
| WhatsApp | Button auf dem Handy mit der Mobilnummer. Falls kein WhatsApp Business genutzt wird: entfernen | `MobileBar.astro` |
| Kennzahlen | 5+ Jahre, 50+ Kunden, Netzwerk 250+ | `site.ts` → `facts` |

## Bitte liefern

- [ ] **Vorher/Nachher-Fotos** von 3 bis 5 Projekten (stärkstes Verkaufsargument, fehlt aktuell komplett)
- [ ] Zu jedem Projekt: Ort, Wohnfläche, Paket, Ergebnis (z. B. „nach 3 Wochen reserviert“)
- [ ] 3 bis 5 Kundenstimmen mit Name und Rolle (Eigentümerin, Makler …) oder Freigabe für Google-Bewertungen
- [ ] Gütesiegel der Staging Community als Grafik (Premium-Mitglied)
- [ ] LinkedIn- und Instagram-Link
- [ ] **Porträt in Originalauflösung**: Das aktuelle Business-Porträt lag nur mit 241 × 249 Pixeln vor und wurde per KI auf 964 × 996 hochgerechnet (Real-ESRGAN, Gesicht mit GFPGAN). Die Originaldatei vom Fotografen ersetzt das 1:1 und ist noch schärfer.
- [ ] Freigabe der vier Ratgeber-Artikel (Inhalte von der alten Seite übernommen und überarbeitet)

## Technik (Ricardo)

- [ ] Web3Forms-Key für `kg@khatera-gross.de` anlegen und in Vercel als `PUBLIC_WEB3FORMS_KEY` setzen. Ohne Key öffnet das Formular das E-Mail-Programm mit der fertigen Anfrage.
- [ ] Domain umziehen, `PUBLIC_INDEXABLE=true`, Search Console (siehe `SICHTBARKEIT.md`, Go-live-Checkliste)
- [ ] Impressum und Datenschutz juristisch prüfen lassen (Entwurf: Vercel-Hosting, Web3Forms, keine Cookies, keine Tracking-Tools)

## Herkunft der Inhalte

- Texte, Kontaktdaten, Impressumsangaben und Mitgliedschaft: alte Website khatera-gross.de (Rohtexte in `content/live-site-texte.md`)
- Fotos: eigene Projektfotos von der alten Website. Profi-Fotos mit Khatera: Fotograf „MKG“ (Nikon D850, Januar 2025), Einliegerwohnung: iPhone, Juli 2024. Porträt: von Ricardo geliefert, KI-hochskaliert (siehe oben).
- Logo: Illustrator-Originale (`brand-originale/`), Farben der Geschäftsausstattung: Anthrazit #1E1E1D, Sand #BBB494, Creme #FFFDF0.
- Nicht übernommen: Stockfotos und Platzhalter des Framer-Templates (englische Lorem-Texte, fremde Porträts, Produktbilder).
