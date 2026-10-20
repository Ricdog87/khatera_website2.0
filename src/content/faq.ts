export type Frage = { frage: string; antwort: string };

export const faqAllgemein: Frage[] = [
  {
    frage: 'Was kostet Home Staging?',
    antwort:
      'Das hängt von Größe, Zustand und Zielgruppe der Immobilie ab. Eine Staging-Beratung für bewohnte Immobilien gibt es ab 290 €, ein Teil-Staging für leere Wohnungen ab 1.490 € und ein Komplett-Staging ab 2.990 €, jeweils inklusive Möbelmiete. Nach einem kurzen Blick auf Grundriss und Fotos bekommen Sie ein verbindliches Festpreisangebot.',
  },
  {
    frage: 'Lohnt sich Home Staging wirklich?',
    antwort:
      'In den meisten Fällen ja. Laut Deutscher Gesellschaft für Home Staging und Redesign (DGHR) verkaufen sich inszenierte Immobilien deutlich schneller und erzielen häufig einen höheren Preis. Schon ein Prozent mehr Verhandlungsspielraum deckt bei einer Immobilie für 450.000 € die Kosten eines Komplett-Stagings.',
  },
  {
    frage: 'Wie schnell kann es losgehen?',
    antwort:
      'Ein Erstgespräch ist meist innerhalb weniger Tage möglich. Vom Auftrag bis zum fertig eingerichteten Objekt vergehen in der Regel ein bis zwei Wochen. Der Aufbau selbst dauert meist nur einen Tag, damit der Fotograf direkt danach kommen kann.',
  },
  {
    frage: 'Was passiert, wenn die Immobilie länger zum Verkauf steht?',
    antwort:
      'Dann verlängern wir die Möbelmiete einfach wochenweise, ohne Kündigungsfrist. Nach dem Notartermin genügt eine kurze Nachricht und ich hole alles innerhalb von zwei Wochen ab.',
  },
  {
    frage: 'Funktioniert Home Staging auch, wenn ich noch in der Immobilie wohne?',
    antwort:
      'Ja. Dafür gibt es die Staging-Beratung: Wir gehen gemeinsam durch alle Räume, ich zeige Ihnen, was weg kann, was umgestellt wird und welche wenigen Accessoires den größten Unterschied machen. Auf Wunsch setze ich das auch direkt mit Ihnen um.',
  },
  {
    frage: 'Wer bezahlt das Home Staging, Eigentümer oder Makler?',
    antwort:
      'Beides ist üblich. Viele Makler bieten Home Staging als Teil ihres Vermarktungspakets an, andere teilen sich die Kosten mit dem Eigentümer. Für Makler habe ich ein eigenes Partnermodell mit festen Konditionen.',
  },
  {
    frage: 'Was ist virtuelles Home Staging?',
    antwort:
      'Leere Räume werden auf den Fotos digital eingerichtet. Das ist günstig und schnell, ideal für Neubauten vor Fertigstellung oder für Online-Exposés. Bei Besichtigungen ersetzt es aber nicht das echte Raumgefühl. Ich berate Sie ehrlich, was für Ihr Objekt sinnvoll ist.',
  },
  {
    frage: 'In welchen Regionen sind Sie tätig?',
    antwort:
      'Mein Schwerpunkt liegt im Rheingau-Taunus-Kreis, in Wiesbaden, Mainz und Frankfurt am Main. Größere Projekte und Musterwohnungen übernehme ich auch im gesamten Rhein-Main-Gebiet.',
  },
];

export const faqKosten: Frage[] = [
  faqAllgemein[0],
  {
    frage: 'Woraus setzt sich der Preis zusammen?',
    antwort:
      'Aus zwei Teilen: der Arbeitsleistung (Konzept, Transport, Aufbau, Styling, Abbau) und der Miete für Möbel und Dekoration. Beides weise ich im Angebot getrennt und transparent aus.',
  },
  {
    frage: 'Wie lange ist die Möbelmiete im Paket enthalten?',
    antwort:
      'Beim Teil-Staging acht Wochen, beim Komplett-Staging zwölf Wochen. Das reicht in den meisten Fällen bis zum Notartermin. Danach rechne ich fair nach angefangenen Wochen ab.',
  },
  {
    frage: 'Gibt es versteckte Kosten?',
    antwort:
      'Nein. Anfahrt im Rhein-Main-Gebiet, Aufbau und Abbau sind im Festpreis enthalten. Zusatzleistungen wie Fotografie, Malerarbeiten oder Reinigung stehen getrennt im Angebot und sind freiwillig.',
  },
  faqAllgemein[1],
  faqAllgemein[5],
];

export function faqSchema(fragen: Frage[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: fragen.map((f) => ({
      '@type': 'Question',
      name: f.frage,
      acceptedAnswer: { '@type': 'Answer', text: f.antwort },
    })),
  };
}
