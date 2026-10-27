import type { APIRoute } from 'astro';
import { indexable } from '../config/site';

// KI-Suchdienste ausdrücklich zulassen, damit die Seite in ChatGPT, Perplexity, Claude und Gemini zitiert werden kann
const aiCrawler = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Bingbot'];

// Vorschau-Builds sperren Suchmaschinen aus. Erst mit PUBLIC_INDEXABLE=true (Go-live) wird indexiert.
export const GET: APIRoute = ({ site }) => {
  const body = indexable
    ? [
        'User-agent: *',
        'Allow: /',
        'Disallow: /danke',
        '',
        ...aiCrawler.flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', '']),
        `Sitemap: ${new URL('sitemap-index.xml', site).href}`,
        '',
        '# Kompakte Fakten für KI-Assistenten',
        `# ${new URL('llms.txt', site).href}`,
        '',
      ].join('\n')
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
