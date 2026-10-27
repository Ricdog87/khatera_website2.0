// Vorschaubild 1200 × 630 für Social Media und Messenger aus einem Seitenbild
import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

export async function ogBild(src: ImageMetadata) {
  const img = await getImage({ src, width: 1200, height: 630, fit: 'cover', format: 'jpg', quality: 80 });
  return img.src;
}
