// Inhalte für llms.txt / llms-full.txt: dieselben Daten wie auf der Website, als Klartext für KI-Assistenten
import { getCollection } from 'astro:content';
import { company, extras, orte, pakete, partnerHinweis } from '../config/site';
import { faqAllgemein, faqKosten } from '../content/faq';

const euro = (n: number) => `${n.toLocaleString('de-DE')} €`;

export function kurzprofil(site: URL) {
  const u = (p: string) => new URL(p, site).href;
  return `# ${company.name}

> ${company.name} ist ein Home-Staging-Studio aus ${company.city} (Hessen), gegründet und geführt von ${company.owner}. Es inszeniert Häuser und Wohnungen für Eigentümer, Makler und Investoren im gesamten Rhein-Main-Gebiet, damit Immobilien schneller und zu einem besseren Preis verkauft werden. Musterwohnungen für Bauträger und Projektentwickler richtet ${company.owner} bundesweit ein. Pakete beginnen bei ${euro(pakete[0].preisAb!)} (netto).

Wichtige Fakten:
- Inhaberin: ${company.owner}, Home Stagerin, Premium-Mitglied der Staging Community
- Sitz: ${company.street}, ${company.zip} ${company.city}
- Einsatzgebiet: gesamtes Rhein-Main-Gebiet (u. a. ${orte.map((o) => o.name).join(', ')}); Musterwohnungen bundesweit
- Leistungen: Home Staging für leere und bewohnte Immobilien, Staging-Beratung, Musterwohnungen, Restanten-Staging, virtuelles Home Staging, Home Staging für Fix & Flip
- Pakete: ${pakete.map((p) => `${p.name} ab ${euro(p.preisAb!)} (${p.preisHinweis})`).join('; ')}
- Ablauf: kostenloses Erstgespräch, Festpreisangebot innerhalb von 48 Stunden, Aufbau meist an einem Tag, Abbau nach dem Notartermin
- Kontakt: Telefon ${company.phone}, E-Mail ${company.email}, Anfrageformular ${u('/kontakt')}

## Leistungen

- [Home Staging für Eigentümer](${u('/home-staging')}): Leere oder bewohnte Häuser und Wohnungen verkaufsstark inszenieren
- [Pakete & Preise](${u('/home-staging-kosten')}): Staging-Beratung, Teil-Staging, Komplett-Staging mit Startpreisen und Preisfaktoren
- [Musterwohnungen](${u('/musterwohnungen')}): Musterwohnungen, Restanten- und virtuelles Staging für Bauträger, bundesweit
- [Fix & Flip](${u('/fix-and-flip')}): Home Staging für Immobilieninvestoren, mit Rechenbeispiel zu Haltekosten
- [Für Makler](${u('/makler-bautraeger')}): Partnermodell mit festen Konditionen und Kostenbeteiligung bis 50 %

## Regionen

${orte.map((o) => `- [${o.title}](${u(`/home-staging-${o.slug}`)}): ${o.description}`).join('\n')}

## Über das Studio

- [Über Khatera Gross](${u('/ueber-mich')}): Werdegang, Haltung, Mitgliedschaft in der Staging Community
- [Projekte](${u('/projekte')}): Referenzen mit Fotos
- [Kontakt](${u('/kontakt')}): Anfrage mit Paketauswahl

## Ratgeber

- [Ratgeber-Übersicht](${u('/ratgeber')})

## Optional

- [Vollständige Fakten, FAQ und Ratgeber im Klartext](${u('/llms-full.txt')})
`;
}

export async function volltext(site: URL) {
  const u = (p: string) => new URL(p, site).href;
  const artikel = (await getCollection('ratgeber')).sort((a, b) => b.data.datum.valueOf() - a.data.datum.valueOf());
  const fragen = [...faqAllgemein, ...faqKosten.filter((f) => !faqAllgemein.includes(f))];
  return `${kurzprofil(site)}
---

# Pakete im Detail

${pakete
  .map(
    (p) => `## ${p.name} (ab ${euro(p.preisAb!)} netto)

${p.claim} ${p.fuer}. ${p.preisHinweis}. Umfang: ${p.dauer}.

${p.leistungen.map((l) => `- ${l}`).join('\n')}`,
  )
  .join('\n\n')}

${partnerHinweis.titel}: ${partnerHinweis.text}

Zusatzleistungen: ${extras.map((e) => `${e.name} (${e.text})`).join('; ')}

# Häufige Fragen

${fragen.map((f) => `## ${f.frage}\n\n${f.antwort}`).join('\n\n')}

# Regionen im Detail

${orte
  .map(
    (o) => `## ${o.title}

${o.intro}

${o.markt.join('\n\n')}

Lagen: ${o.lagen.join(', ')}. ${o.anfahrt}
Seite: ${u(`/home-staging-${o.slug}`)}`,
  )
  .join('\n\n')}

# Ratgeber

${artikel.map((a) => `## ${a.data.title}\n\nQuelle: ${u(`/ratgeber/${a.id}`)}\nVeröffentlicht: ${a.data.datum.toISOString().slice(0, 10)}, Autorin: ${company.owner}\n\n${(a.body ?? '').trim()}`).join('\n\n')}
`;
}
