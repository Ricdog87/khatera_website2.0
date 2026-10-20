# Sichtbarkeit: So wird Khatera gefunden

Die Website ist die Basis. Gefunden wird man im Home Staging aber vor allem über **Google Maps, Bewertungen und Makler**. Dieser Plan ist nach Hebel sortiert: oben das, was am schnellsten Anfragen bringt.

## Was die neue Website schon mitbringt

| Baustein | Wirkung |
|---|---|
| 5 Stadtseiten (`/home-staging-wiesbaden`, `-rheingau`, `-taunusstein`, `-mainz`, `-frankfurt`) | rankt auf „Home Staging + Ort“, die Suchanfragen mit der höchsten Kaufabsicht |
| Seite „Home Staging Kosten“ | rankt auf „Home Staging Kosten / Preise“, die meistgesuchte Frage |
| Strukturierte Daten (LocalBusiness, Service, Preise, FAQ, Artikel, Brotkrumen) | Google versteht Leistung, Region und Preise, FAQ können direkt in den Suchergebnissen erscheinen |
| 301-Weiterleitungen aller alten Framer-URLs | bestehende Rankings und Links gehen beim Umzug nicht verloren |
| Statische Seite, Bilder in AVIF/WebP, keine Cookies | schnell auf dem Handy (Ranking-Faktor), kein Cookie-Banner nötig |
| Mehrerlös-Rechner, Paket-Buttons, mobile Anruf-/WhatsApp-Leiste | aus Besuchern werden Anfragen |

## 1. Google Unternehmensprofil (Woche 1, größter Hebel)

Bei „Home Staging Wiesbaden“ zeigt Google zuerst die Karte. Wer dort nicht steht, existiert für viele Suchende nicht.

1. Profil auf business.google.com anlegen oder übernehmen, Name exakt: **Khatera Gross Home Staging**
2. Als **Servicegebiet-Unternehmen** einrichten (Adresse ausblenden), Gebiete: Wiesbaden, Rheingau-Taunus-Kreis, Mainz, Frankfurt am Main, Main-Taunus-Kreis
3. Hauptkategorie so nah wie möglich an Home Staging wählen (Google-Kategorien vor Ort prüfen, z. B. Inneneinrichtung / Raumausstattung), Nebenkategorien ergänzen
4. Website-Link: `https://khatera-gross.de/home-staging-kosten` oder Startseite, Telefon wie auf der Website
5. Unter **Produkte** die drei Pakete mit Preis eintragen, unter **Leistungen** Musterwohnungen, Virtuelles Staging, Beratung
6. Mindestens 15 eigene Fotos hochladen (Projekte + Porträt), danach jede Woche 1 bis 2 neue
7. Alle 14 Tage einen Beitrag posten (neues Projekt, Tipp, Vorher/Nachher)

## 2. Bewertungen (laufend, Ziel: 15 in 90 Tagen)

Bewertungen entscheiden über die Reihenfolge in Google Maps und über das Vertrauen.

- Bewertungslink aus dem Unternehmensprofil kopieren und als QR-Code auf die Visitenkarte und in die Abschlussmail
- Nach **jedem** Projekt am Tag des Abbaus fragen, nicht Wochen später
- Auch Makler um eine Bewertung bitten, sie sind die glaubwürdigsten Stimmen
- Jede Bewertung innerhalb von 48 Stunden beantworten

Vorlage für die Abschluss-Mail:

> Liebe Frau …, es war mir eine Freude, Ihre Immobilie in Szene zu setzen. Wenn Sie zufrieden waren, würde mir eine kurze Google-Bewertung sehr helfen, damit mich auch andere Eigentümer finden: [Link]. Herzlichen Dank! Khatera Gross

## 3. Makler als Vertriebskanal (ab Woche 2)

Makler sind die schnellsten Multiplikatoren: ein Makler bringt 5 bis 20 Objekte im Jahr.

1. Liste mit 30 Maklern im Rheingau, in Wiesbaden und Taunusstein anlegen (Google Maps, ImmoScout24-Anbieter)
2. Persönlich anrufen oder vorbeigehen, Angebot: **erstes Staging zum Partnerpreis** gegen Fotos und Feedback
3. Seite `/makler-bautraeger` als Link in jede Mail
4. Partner bitten, auf ihrer Website „Unser Home-Staging-Partner“ mit Link einzubauen (wertvolle lokale Backlinks)

Gesprächseinstieg am Telefon:

> „Guten Tag, Khatera Gross, Home Staging aus Taunusstein. Ich unterstütze Makler hier in der Region, damit leere Objekte schneller weggehen und Sie im Akquisegespräch ein Argument mehr haben. Haben Sie gerade ein Objekt, das schon länger online ist?“

## 4. Einträge und Verzeichnisse (Woche 2 bis 3)

Überall **identischer Name, Adresse, Telefon** (NAP), jeweils mit Link zur Website:

- Staging Community: Profil im Mitgliederverzeichnis mit Link prüfen
- DGHR (Deutsche Gesellschaft für Home Staging und Redesign), falls Mitgliedschaft sinnvoll
- Houzz, Apple Maps (Apple Business Connect), Bing Places
- Gelbe Seiten, Das Örtliche, 11880, Cylex
- LinkedIn-Unternehmensseite, Instagram-Profil (Links danach in `src/config/site.ts` eintragen)

## 5. Inhalte (1 Beitrag pro Monat)

Jedes neue Projekt wird eine eigene Referenz mit Ort, Fläche und Ergebnis („nach 3 Wochen reserviert“). Das ist der Content, der rankt und überzeugt. Dazu im Ratgeber Themen mit Suchvolumen, zum Beispiel:

- Home Staging Kosten: Womit Eigentümer in Wiesbaden rechnen müssen
- Leere Wohnung verkaufen: 7 Fehler im Exposé
- Home Staging vor und nach dem Verkauf: Ein Projekt im Rheingau
- Musterwohnung einrichten: Was Bauträger wissen sollten

Vorher/Nachher-Fotos bei jedem Projekt machen. Sie sind für Website, Google-Profil und Instagram das stärkste Material.

## 6. Optional: Google Ads (Test mit 300 bis 500 € im Monat)

Die Staging Manufaktur aus der Referenz schaltet genau das: Anzeigen auf „Home Staging + Stadt“ mit eigener Landingpage. Die Stadtseiten sind dafür schon die passenden Zielseiten. Sinnvoll, sobald Profil und erste Bewertungen stehen, damit die Anzeigen auch überzeugen.

Startkeywords: home staging wiesbaden, home staging rheingau, home staging mainz, home staging kosten, immobilie verkaufen einrichten

## 7. Go-live-Checkliste (technisch)

- [ ] Domain `khatera-gross.de` von Framer auf Vercel umziehen (DNS)
- [ ] In Vercel `PUBLIC_INDEXABLE=true` setzen und neu deployen
- [ ] `PUBLIC_WEB3FORMS_KEY` setzen und eine Testanfrage schicken
- [ ] Google Search Console einrichten, `https://khatera-gross.de/sitemap-index.xml` einreichen
- [ ] Alte URLs stichprobenartig prüfen (`/about-us`, `/blog/...`), müssen auf die neuen Seiten weiterleiten
- [ ] Framer-Abo kündigen, sobald die neue Seite live ist

## Messen

Einmal im Monat: Anfragen über die Website, Anrufe und Klicks im Google-Profil, Anzahl Bewertungen, Position für die 10 wichtigsten Suchbegriffe (Search Console).
