# Ratgeber: Redaktionsplan und Automatisierung

Beschlossen am 11.11.2026: Der Ratgeber bleibt und wird regelmäßig mit neuen Beiträgen gefüllt. Jeder Beitrag zielt auf eine Suchanfrage, die Eigentümer, Makler oder Bauträger wirklich stellen.

## So läuft ein neuer Beitrag

1. Nächstes offenes Thema aus der Liste unten nehmen.
2. Neue Datei in `src/content/ratgeber/` anlegen, Dateiname = URL (z. B. `besichtigung-vorbereiten.md`). Aufbau wie `leere-wohnung-verkaufen.md`.
3. Passendes Foto aus `src/assets/images/` wählen (kein neues Bildmaterial nötig).
4. Prüfen: `npm run check`, `npm run build`, `python3 -I scripts/seo-check.py .vercel/output/static`.
5. Committen und pushen. Die Website baut sich neu, der Beitrag erscheint automatisch in Übersicht, Sitemap und `llms-full.txt`.
6. Thema in dieser Datei abhaken.

## Regeln für jeden Beitrag

- Antwort zuerst: Der erste Absatz beginnt mit „**Kurz gesagt:**“ und beantwortet die Frage in drei Sätzen.
- 600 bis 900 Wörter, eine Tabelle oder Checkliste, 2 bis 3 interne Links (Leistungsseite, Pakete, Kontakt).
- Absender ist **KG Homestaging**, Autorin Khatera Gross, Ich-Form.
- **Keine Preise** von KG Homestaging. Angebote sind immer individuell.
- **Kein virtuelles Staging** anbieten oder empfehlen.
- Region: Rhein-Main-Gebiet, Musterwohnungen bundesweit. Taunusstein nicht als Sitz nennen.
- Keine erfundenen Zahlen, Studien oder Kundenstimmen. Marktbeispiele klar als Beispiel kennzeichnen.
- Ton: klar, warm, ohne Fachchinesisch. Keine Gedankenstriche.

## Themen

| Nr. | Monat | Arbeitstitel | Suchanfrage | Zielgruppe | Status |
|---|---|---|---|---|---|
| 1 | Dez 2026 | Immobilie im Winter verkaufen: So wirken Räume hell und warm | immobilie im winter verkaufen | Eigentümer | offen |
| 2 | Jan 2027 | Exposéfotos: 9 Fehler, die Anfragen kosten | exposé fotos immobilie tipps | Eigentümer, Makler | offen |
| 3 | Feb 2027 | Bewohnte Immobilie verkaufen: Home Staging im Alltag | bewohnte immobilie verkaufen home staging | Eigentümer | offen |
| 4 | Mrz 2027 | Garten, Balkon, Terrasse: Außenbereiche für den Verkauf vorbereiten | garten vor hausverkauf herrichten | Eigentümer | offen |
| 5 | Apr 2027 | Erbimmobilie verkaufen: entrümpeln, renovieren oder inszenieren? | geerbtes haus verkaufen vorbereiten | Erben | offen |
| 6 | Mai 2027 | Besichtigung vorbereiten: Checkliste für Eigentümer | hausbesichtigung vorbereiten checkliste | Eigentümer | offen |
| 7 | Jun 2027 | Home Staging im Akquisegespräch: 5 Argumente für Makler | home staging makler vorteile | Makler | offen |
| 8 | Jul 2027 | Kleine Wohnung größer wirken lassen: 8 Handgriffe | kleine wohnung größer wirken lassen verkauf | Eigentümer | offen |
| 9 | Aug 2027 | Restanten im Neubau: So gehen die letzten Wohnungen weg | restanten neubau vermarkten | Bauträger | offen |
| 10 | Sep 2027 | Renovieren oder inszenieren: Was sich vor dem Verkauf lohnt | renovieren vor verkauf sinnvoll | Eigentümer, Investoren | offen |
| 11 | Okt 2027 | Wandfarben, die verkaufen: Welche Töne Käufer mögen | wandfarbe hausverkauf | Eigentümer | offen |
| 12 | Nov 2027 | Altbau in Wiesbaden verkaufen: Stuck, Dielen und Licht richtig zeigen | altbau wiesbaden verkaufen | Eigentümer, Makler | offen |

## Automatisierung

Vorgesehen ist eine geplante Aufgabe in Claude Code, die zum Monatsanfang genau einen Beitrag nach diesem Plan schreibt, prüft und veröffentlicht. Sie ist noch nicht eingeschaltet. Vor dem Start zu entscheiden:

- **Rhythmus:** monatlich (empfohlen, 12 Beiträge im Jahr) oder quartalsweise (4 Beiträge).
- **Freigabe:** direkt veröffentlichen oder erst als Entwurf zur Durchsicht vorlegen. Empfehlung für die ersten drei Beiträge: Entwurf mit Freigabe, danach direkt.

Auftrag für die geplante Aufgabe:

> Öffne im Repository `khatera_website2.0` die Datei `RATGEBER-PLAN.md`. Schreibe genau einen neuen Ratgeber-Beitrag zum ersten Thema mit Status „offen“. Halte dich an den Abschnitt „Regeln für jeden Beitrag“ und an den Aufbau von `src/content/ratgeber/leere-wohnung-verkaufen.md`. Wähle ein passendes Foto aus `src/assets/images/`. Führe `npm run check`, `npm run build` und `python3 -I scripts/seo-check.py .vercel/output/static` aus und behebe Fehler. Setze den Status des Themas auf „erledigt“ mit Datum. Committe auf den Arbeitsbranch und pushe. Melde Titel, URL und Wortzahl.
