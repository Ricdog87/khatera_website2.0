// Findet Vorher/Nachher-Paare in src/assets/images/vorher-nachher/ (name-vorher.jpg + name-nachher.jpg).
// name-vorher-digital.jpg kennzeichnet ein digital nachgestelltes Vorher-Bild, es wird auf der Website als solches ausgewiesen.
import type { ImageMetadata } from 'astro';

const dateien = import.meta.glob<{ default: ImageMetadata }>('../assets/images/vorher-nachher/*.{jpg,jpeg,png,webp}', { eager: true });

export type VorherNachherPaar = { slug: string; titel: string; vorher: ImageMetadata; nachher: ImageMetadata; digital: boolean };

export function vorherNachherPaare(): VorherNachherPaar[] {
  const paare = new Map<string, Partial<VorherNachherPaar>>();
  for (const [pfad, modul] of Object.entries(dateien)) {
    const m = pfad.match(/\/([^/]+)-(vorher|nachher)(-digital)?\.\w+$/i);
    if (!m) continue;
    const [, slug, art, digital] = m;
    const p = paare.get(slug) ?? { slug, digital: false, titel: slug.replace(/-/g, ' ').replace(/\b\p{L}/gu, (c) => c.toUpperCase()) };
    p[art.toLowerCase() as 'vorher' | 'nachher'] = modul.default;
    if (digital) p.digital = true;
    paare.set(slug, p);
  }
  return [...paare.values()].filter((p): p is VorherNachherPaar => Boolean(p.vorher && p.nachher)).sort((a, b) => a.slug.localeCompare(b.slug));
}
