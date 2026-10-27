/**
 * Zentrale Daten der Website. Alles, was Khatera selbst ändern möchte
 * (Preise, Telefonnummer, Regionen), steht hier an einer Stelle.
 * Offene Punkte: CONTENT-TODO.md
 */

export const company = {
  name: 'Khatera Gross Home Staging',
  shortName: 'Khatera Gross',
  owner: 'Khatera Gross',
  street: 'Im Biengarten 21',
  zip: '65232',
  city: 'Taunusstein',
  region: 'Rhein-Main-Gebiet · Musterwohnungen bundesweit',
  phone: '+49 151 547 205 35',
  phoneHref: 'tel:+4915154720535',
  whatsappHref: 'https://wa.me/4915154720535',
  email: 'kg@khatera-gross.de',
  vatId: 'DE 403881224',
  // TODO Kundin: echtes LinkedIn- und Instagram-Profil eintragen
  linkedin: '',
  instagram: '',
  url: 'https://khatera-gross.de',
  // TODO: Direkten Bewertungslink aus dem Google-Unternehmensprofil eintragen (Profil > Rezensionen anfordern).
  // Bis dahin führt der Link auf die Google-Suche nach dem Profil.
  googleReviewUrl: 'https://www.google.com/maps/search/?api=1&query=Khatera+Gross+Home+Staging+Taunusstein',
} as const;

export const indexable = import.meta.env.PUBLIC_INDEXABLE === 'true';
export const web3formsKey: string = import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '';

// Reihenfolge abgestimmt im Meeting 21.10.: Home Staging an zweiter Stelle, dann Musterwohnungen, Fix & Flip, Preise
export const navigation = [
  { label: 'Startseite', href: '/' },
  { label: 'Home Staging', href: '/home-staging' },
  { label: 'Musterwohnungen', href: '/musterwohnungen' },
  { label: 'Fix & Flip', href: '/fix-and-flip' },
  { label: 'Preise', href: '/home-staging-kosten' },
  { label: 'Projekte', href: '/projekte' },
  { label: 'Über mich', href: '/ueber-mich' },
  { label: 'Ratgeber', href: '/ratgeber' },
];

/** Kennzahlen aus der bisherigen Website. */
export const facts = [
  { value: '5', unit: '+', label: 'Jahre Erfahrung im Home Staging' },
  { value: '50', unit: '+', label: 'Kunden im Rhein-Main-Gebiet' },
  { value: '250', unit: '+', label: 'Kolleg:innen im Netzwerk der Staging Community' },
];

export type Paket = {
  id: 'beratung' | 'teil' | 'komplett';
  name: string;
  claim: string;
  fuer: string;
  /** Startpreis in Euro (netto). null zeigt "Preis auf Anfrage". */
  preisAb: number | null;
  preisHinweis: string;
  leistungen: string[];
  dauer: string;
  highlight?: boolean;
};

// TODO Kundin: Startpreise bestätigen oder anpassen. Werte sind Vorschläge auf Marktniveau Rhein-Main.
export const pakete: Paket[] = [
  {
    id: 'beratung',
    name: 'Staging-Beratung',
    claim: 'Ihr Zuhause, verkaufsbereit gemacht.',
    fuer: 'Für bewohnte Immobilien',
    preisAb: 290,
    preisHinweis: 'Festpreis, ein Termin vor Ort',
    dauer: '2 Stunden vor Ort',
    leistungen: [
      'Begehung Raum für Raum mit klarer Prioritätenliste',
      'Konkrete To-dos: entrümpeln, umstellen, neutralisieren',
      'Einkaufsliste für Deko und Textilien, budgetgenau',
      'Tipps für die Fotos im Exposé',
    ],
  },
  {
    id: 'teil',
    name: 'Teil-Staging',
    claim: 'Die Räume, die verkaufen.',
    fuer: 'Für leere Wohnungen bis ca. 80 m²',
    preisAb: 1490,
    preisHinweis: 'inkl. 8 Wochen Möbelmiete',
    dauer: 'Wohnen, Essen, Schlafen',
    leistungen: [
      'Konzept passend zur Zielgruppe Ihrer Immobilie',
      'Möbel, Textilien, Leuchten, Kunst und Deko für bis zu 3 Räume',
      'Anlieferung, Aufbau und Styling an einem Tag',
      'Abbau und Abholung nach dem Verkauf',
    ],
  },
  {
    id: 'komplett',
    name: 'Komplett-Staging',
    claim: 'Die ganze Bühne für Ihre Immobilie.',
    fuer: 'Für Häuser, große Wohnungen und Premiumobjekte',
    preisAb: 2990,
    preisHinweis: 'inkl. 12 Wochen Möbelmiete',
    dauer: 'Alle Wohnräume, Flur und Bad',
    highlight: true,
    leistungen: [
      'Vermarktungsanalyse mit Makler oder Eigentümer',
      'Individuelles Einrichtungskonzept für jeden Raum',
      'Hochwertige Möbel, Teppiche, Kunst und Lichtkonzept',
      'Aufbau, Styling und Begleitung des Fototermins',
      'Abbau innerhalb von zwei Wochen nach Notartermin',
    ],
  },
];

/** Hinweis aus dem Meeting 21.10.: dezent in der Paketübersicht, nicht prominent auf der Startseite */
export const partnerHinweis = {
  titel: 'Partner-Vorteil',
  text: 'Vermarkten Sie Ihre Immobilie über einen meiner Partnermakler, kann dieser bis zu 50 % der Home-Staging-Kosten übernehmen. Fragen Sie mich gern nach den Konditionen.',
};

export const extras = [
  { name: 'Virtuelles Home Staging', text: 'Leere Räume digital eingerichtet, fotorealistisch, für Exposé und Portale.' },
  { name: 'Immobilienfotografie', text: 'Profi-Fotos direkt nach dem Styling, über Partnerfotografen.' },
  { name: 'Verlängerung der Möbelmiete', text: 'Fair nach Wochen abgerechnet, ohne Kündigungsfrist.' },
  { name: 'Handwerker-Koordination', text: 'Maler, Reinigung, kleine Reparaturen aus meinem Netzwerk.' },
];

/** Grundlage für den Mehrerlös-Rechner. Orientierungswerte, keine Zusage. */
export const rechner = {
  /** Konservative und optimistische Preiswirkung laut Branchenangaben */
  effektMin: 0.03,
  effektMax: 0.08,
  /** Grobe Investition fürs Komplett-Staging je m² (inkl. 12 Wochen Miete) */
  euroProQmMin: 30,
  euroProQmMax: 45,
};

export type Ort = {
  slug: string;
  name: string;
  /** Titel-Form, z. B. "im Rheingau" oder "in Wiesbaden" */
  praep: string;
  title: string;
  description: string;
  intro: string;
  markt: string[];
  lagen: string[];
  anfahrt: string;
};

export const orte: Ort[] = [
  {
    slug: 'wiesbaden',
    name: 'Wiesbaden',
    praep: 'in Wiesbaden',
    title: 'Home Staging Wiesbaden',
    description:
      'Home Staging in Wiesbaden: Altbau, Villa oder Neubauwohnung professionell inszeniert. Schneller verkaufen, besser verhandeln. Pakete ab 290 €.',
    intro:
      'Wiesbaden verkauft sich über Atmosphäre. Hohe Decken, Stuck, Erker und Parkett im Dichterviertel oder am Nerotal, klare Linien in den Neubauquartieren. Ich sorge dafür, dass Käufer genau das fühlen, sobald sie die Tür öffnen.',
    markt: [
      'In Wiesbaden treffen anspruchsvolle Käufer auf ein großes Angebot an hochwertigen Bestandsimmobilien. Wer hier verkauft, konkurriert nicht über den Preis, sondern über den ersten Eindruck im Exposé.',
      'Gerade leerstehende Altbauwohnungen wirken auf Fotos schnell kühl und schwer lesbar. Mit gezielter Möblierung werden Raumproportionen, Lichtführung und Grundriss sofort verständlich.',
    ],
    lagen: ['Dichterviertel', 'Nerotal', 'Sonnenberg', 'Biebrich', 'Rheingauviertel', 'Bierstadt', 'Dotzheim', 'Nordost'],
    anfahrt: 'Von Taunusstein bin ich in rund 20 Minuten in der Wiesbadener Innenstadt.',
  },
  {
    slug: 'rheingau',
    name: 'Rheingau',
    praep: 'im Rheingau',
    title: 'Home Staging im Rheingau',
    description:
      'Home Staging im Rheingau: von Eltville bis Rüdesheim. Landhaus, Winzerhaus oder Wohnung mit Rheinblick verkaufsstark inszeniert. Jetzt Paket anfragen.',
    intro:
      'Rheinblick, Weinberge, Fachwerk und großzügige Landhäuser. Im Rheingau kaufen Menschen ein Lebensgefühl. Home Staging übersetzt dieses Gefühl in Räume, in denen man sich das eigene Leben sofort vorstellen kann.',
    markt: [
      'Viele Käufer im Rheingau kommen aus Wiesbaden, Mainz oder Frankfurt und suchen Ruhe mit Stil. Leere oder stark persönlich eingerichtete Häuser verschenken genau dieses Potenzial.',
      'Ich inszeniere regional stimmig: natürliche Materialien, warme Töne, ein ruhiges Farbkonzept, das Ausblick und Architektur in den Mittelpunkt stellt.',
    ],
    lagen: ['Eltville', 'Oestrich-Winkel', 'Geisenheim', 'Rüdesheim', 'Kiedrich', 'Walluf', 'Lorch'],
    anfahrt: 'Der Rheingau liegt direkt vor meiner Haustür. Kurze Wege, schnelle Termine.',
  },
  {
    slug: 'taunusstein',
    name: 'Taunusstein',
    praep: 'in Taunusstein',
    title: 'Home Staging Taunusstein',
    description:
      'Home Staging in Taunusstein und im Rheingau-Taunus-Kreis. Einfamilienhaus oder Wohnung verkaufsfertig inszeniert, persönlich und vor Ort. Pakete ab 290 €.',
    intro:
      'Taunusstein ist mein Zuhause. Ich kenne die Häuser, die Straßen und die Käufer, die hier suchen: Familien und Pendler, die Grün und Platz wollen und trotzdem schnell in Wiesbaden oder Frankfurt sind.',
    markt: [
      'Das typische Objekt hier ist das Einfamilien- oder Reihenhaus aus den 70ern bis 2000ern. Oft bewohnt, oft voller Erinnerungen. Für Käufer zählt aber, ob sie sich ihre eigene Familie darin vorstellen können.',
      'Mit einer Staging-Beratung oder einem Teil-Staging holen wir mit überschaubarem Budget das Maximum aus Wohnzimmer, Küche und Garten heraus.',
    ],
    lagen: ['Hahn', 'Wehen', 'Bleidenstadt', 'Neuhof', 'Orlen', 'Seitzenhahn', 'Bad Schwalbach', 'Idstein', 'Hohenstein'],
    anfahrt: 'Ich arbeite von Taunusstein aus. Ein Vor-Ort-Termin ist meist innerhalb weniger Tage möglich.',
  },
  {
    slug: 'mainz',
    name: 'Mainz',
    praep: 'in Mainz',
    title: 'Home Staging Mainz',
    description:
      'Home Staging in Mainz: Altbau in der Neustadt, Neubau am Zollhafen oder Haus in Gonsenheim. Professionell inszeniert für schnelleren Verkauf.',
    intro:
      'Mainz ist jung, gefragt und schnell. Studierende, junge Familien und Kapitalanleger schauen sich Wohnungen oft zuerst online an. Wer im Exposé nicht überzeugt, bekommt keinen Besichtigungstermin.',
    markt: [
      'Bei Eigentumswohnungen in Mainz entscheidet die Wirkung der Fotos über die Zahl der Anfragen. Ein leerer Raum zeigt keine Größe, ein gut gestellter Raum zeigt Möglichkeiten.',
      'Für Bauträger und Kapitalanleger biete ich zusätzlich virtuelles Home Staging an, um Grundrisse schon vor Fertigstellung erlebbar zu machen.',
    ],
    lagen: ['Neustadt', 'Altstadt', 'Gonsenheim', 'Zollhafen', 'Bretzenheim', 'Finthen', 'Hechtsheim', 'Mainz-Kastel'],
    anfahrt: 'Über die Schiersteiner Brücke bin ich in rund 30 Minuten in Mainz.',
  },
  {
    slug: 'frankfurt',
    name: 'Frankfurt',
    praep: 'in Frankfurt',
    title: 'Home Staging Frankfurt am Main',
    description:
      'Home Staging in Frankfurt am Main und im Vordertaunus: für Makler, Bauträger und Eigentümer, die schneller und zum besseren Preis verkaufen wollen.',
    intro:
      'In Frankfurt ist die Konkurrenz am Immobilienmarkt groß und die Käufer sind es gewohnt, hochwertige Präsentationen zu sehen. Ein leeres Penthouse oder eine kahle Altbauwohnung fällt hier sofort ab.',
    markt: [
      'Gerade im gehobenen Segment im Westend, Nordend oder Sachsenhausen erwarten Käufer ein Gesamtbild. Home Staging zeigt, wie sich Architektur und Lebensstil verbinden.',
      'Für Makler in Frankfurt und im Vordertaunus arbeite ich auf Wunsch als feste Partnerin mit kurzen Abstimmungswegen und klaren Preisen.',
    ],
    lagen: ['Westend', 'Nordend', 'Sachsenhausen', 'Bornheim', 'Europaviertel', 'Bockenheim', 'Riedberg', 'Höchst'],
    anfahrt: 'Frankfurt erreiche ich über die A66 schnell, für Termine in der Innenstadt plane ich direkt mit Ihnen.',
  },
  {
    slug: 'darmstadt',
    name: 'Darmstadt',
    praep: 'in Darmstadt',
    title: 'Home Staging Darmstadt',
    description:
      'Home Staging in Darmstadt: Altbau in Bessungen, Wohnung im Martinsviertel oder Neubau in der Lincoln-Siedlung verkaufsstark inszeniert. Pakete ab 290 €.',
    intro:
      'Darmstadt ist Wissenschaftsstadt und Pendlerstadt zugleich. Hier kaufen Fachkräfte, Familien und Kapitalanleger, die genau rechnen und sich trotzdem verlieben wollen. Home Staging zeigt beides: klare Grundrisse und echtes Wohngefühl.',
    markt: [
      'Zwischen Jugendstil auf der Mathildenhöhe, Gründerzeit in Bessungen und neuen Quartieren auf ehemaligen Konversionsflächen ist das Angebot in Darmstadt sehr unterschiedlich. Wer im Exposé nicht sofort überzeugt, verschwindet zwischen vergleichbaren Objekten.',
      'Gerade Neubau- und Bestandswohnungen für Pendler und junge Familien profitieren von einer Einrichtung, die Homeoffice, Kinderzimmer und Stauraum sichtbar macht.',
    ],
    lagen: ['Bessungen', 'Martinsviertel', 'Johannesviertel', 'Paulusviertel', 'Mathildenhöhe', 'Lincoln-Siedlung', 'Eberstadt', 'Arheilgen'],
    anfahrt: 'Darmstadt erreiche ich über die A3 und A5, Termine plane ich gebündelt und verlässlich.',
  },
  {
    slug: 'offenbach',
    name: 'Offenbach',
    praep: 'in Offenbach',
    title: 'Home Staging Offenbach am Main',
    description:
      'Home Staging in Offenbach am Main: Neubau am Hafen, Altbau im Westend oder Haus in Bürgel professionell inszeniert. Schneller verkaufen, besser verhandeln.',
    intro:
      'Offenbach hat sich verändert: Neue Quartiere am Main, gefragte Altbauten und eine junge Käuferschaft, die oft aus Frankfurt herüberschaut. Wer hier verkauft, konkurriert mit Neubauprojekten und braucht starke Bilder.',
    markt: [
      'Viele Interessenten in Offenbach vergleichen direkt mit Frankfurt. Eine inszenierte Wohnung zeigt, dass man hier nicht nur günstiger, sondern auch schöner wohnen kann.',
      'Für Bauträger am Hafen und in den neuen Quartieren biete ich Musterwohnungen und virtuelles Staging für den Vorvertrieb, für Eigentümer im Bestand die passenden Pakete.',
    ],
    lagen: ['Hafen', 'Westend', 'Nordend', 'Bürgel', 'Bieber', 'Rumpenheim', 'Tempelsee', 'Buchhügel'],
    anfahrt: 'Offenbach erreiche ich über die A66 und A3. Bei mehreren Objekten plane ich die Termine gebündelt.',
  },
  {
    slug: 'bad-homburg',
    name: 'Bad Homburg',
    praep: 'in Bad Homburg',
    title: 'Home Staging Bad Homburg & Hochtaunus',
    description:
      'Home Staging in Bad Homburg, Oberursel, Kronberg und Königstein: Villen, Häuser und Wohnungen im Hochtaunus hochwertig inszeniert. Jetzt Paket anfragen.',
    intro:
      'Kurstadt, Villen, Taunusblick. In Bad Homburg und im Vordertaunus kaufen Menschen mit hohen Ansprüchen. Sie erwarten nicht nur eine gute Lage, sondern eine Präsentation, die zum Niveau der Immobilie passt.',
    markt: [
      'Im gehobenen Segment entscheidet der Gesamteindruck. Leere Räume in einer großzügigen Villa wirken schnell kühl und schwer einschätzbar, eine stimmige Inszenierung macht Proportionen, Licht und Ausblick erlebbar.',
      'Ich arbeite mit hochwertigen Möbeln, Kunst und Lichtkonzept und stimme mich eng mit Ihrem Makler ab, damit Fototermin und Besichtigungen perfekt vorbereitet sind.',
    ],
    lagen: ['Bad Homburg', 'Gonzenheim', 'Kirdorf', 'Dornholzhausen', 'Oberursel', 'Kronberg', 'Königstein', 'Friedrichsdorf'],
    anfahrt: 'Der Hochtaunus liegt gut erreichbar zwischen Taunusstein und Frankfurt.',
  },
];
