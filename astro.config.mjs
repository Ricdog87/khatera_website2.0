// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';

// Zwei Ziele: Vercel (Vorschau/Demo) oder IONOS-Webspace (Live). IONOS: npm run build:ionos → dist/
const ionos = process.env.DEPLOY_TARGET === 'ionos';

// Alte Framer-URLs dauerhaft auf die neuen Seiten umleiten, damit Rankings und Links erhalten bleiben
const redirects = {
  '/about-us': '/ueber-mich',
  '/contact': '/kontakt',
  '/imprint': '/impressum',
  '/project': '/projekte',
  '/project/einrichtung-einer-einliegerwohnung': '/projekte',
  '/project/rustic-retreat-a-cozy-cabin-getaway': '/projekte',
  '/project/classic-elegance-timeless-every-detail': '/projekte',
  '/project/coastal-elegance-serene-seaside-living': '/projekte',
  '/project/minimalist-marvel-zen-inspired-urban': '/projekte',
  '/project/industrial-chic-reimagn-warehouse': '/projekte',
  '/blog': '/ratgeber',
  '/blog/was-ist-home-staging-und-woher-kommt-es': '/ratgeber/was-ist-home-staging',
  '/blog/die-vorteile-von-home-staging': '/ratgeber/vorteile-von-home-staging',
  '/blog/home-staging-tipps-und-tricks': '/ratgeber/home-staging-tipps',
  '/blog/fachbegriffe-aus-dem-home-staging-einfach-erklärt': '/ratgeber/home-staging-fachbegriffe',
  '/blog/fachbegriffe-aus-dem-home-staging-einfach-erkl%C3%A4rt': '/ratgeber/home-staging-fachbegriffe',
  '/old-home': '/',
  '/home-backup': '/',
  '/makler': '/makler-bautraeger',
};

/**
 * .htaccess für Apache bei IONOS: HTTPS, ohne www, 301-Weiterleitungen, URLs ohne .html, Caching
 * @returns {import('astro').AstroIntegration}
 */
function htaccess() {
  return {
    name: 'ionos-htaccess',
    hooks: {
      'astro:build:done': ({ dir }) => {
        if (!ionos) return;
        /** @param {string} s */
        const esc = (s) => s.replace(/^\//, '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const rules = Object.entries(redirects)
          .filter(([from]) => !from.includes('%'))
          .map(([from, to]) => `RewriteRule ^${esc(from)}/?$ ${to} [R=301,L]`);
        const body = [
          '# Erzeugt von astro.config.mjs (npm run build:ionos), nicht von Hand bearbeiten',
          'Options -MultiViews -Indexes',
          'DirectorySlash Off',
          'ErrorDocument 404 /404.html',
          'AddDefaultCharset UTF-8',
          'RewriteEngine On',
          '',
          '# HTTPS und ohne www',
          'RewriteCond %{HTTPS} off [OR]',
          'RewriteCond %{HTTP_HOST} ^www\\. [NC]',
          'RewriteRule ^ https://khatera-gross.de%{REQUEST_URI} [R=301,L]',
          '',
          '# Alte URLs der Framer-Seite',
          ...rules,
          '',
          '# Abschließenden Schrägstrich entfernen (/ratgeber/ → /ratgeber)',
          'RewriteRule ^(.+)/$ /$1 [R=301,L]',
          '',
          '# Saubere URLs: /kontakt liefert kontakt.html, /ratgeber liefert ratgeber.html (trotz gleichnamigem Ordner)',
          'RewriteCond %{REQUEST_FILENAME} !-f',
          'RewriteCond %{REQUEST_FILENAME}.html -f',
          'RewriteRule ^(.+)$ $1.html [L]',
          '',
          '<IfModule mod_headers.c>',
          '  Header always set X-Content-Type-Options "nosniff"',
          '  Header always set Referrer-Policy "strict-origin-when-cross-origin"',
          '  <FilesMatch "\\.(avif|webp|jpg|jpeg|png|svg|woff2|js|css)$">',
          '    Header set Cache-Control "public, max-age=31536000, immutable"',
          '  </FilesMatch>',
          '  <FilesMatch "\\.(html|xml|txt)$">',
          '    Header set Cache-Control "public, max-age=0, must-revalidate"',
          '  </FilesMatch>',
          '</IfModule>',
          '',
          '<IfModule mod_deflate.c>',
          '  AddOutputFilterByType DEFLATE text/html text/css application/javascript image/svg+xml application/xml text/plain',
          '</IfModule>',
          '',
        ].join('\n');
        fs.writeFileSync(new URL('.htaccess', dir), body);
      },
    },
  };
}

export default defineConfig({
  site: 'https://khatera-gross.de',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  adapter: ionos ? undefined : vercel({ webAnalytics: { enabled: false } }),
  integrations: [sitemap({ filter: (page) => !page.includes('/danke') }), htaccess()],
  redirects,

  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Cormorant Garamond',
      cssVariable: '--font-cormorant',
      fallbacks: ['serif'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/cormorant-garamond-latin-wght-normal.woff2'], weight: '300 700', style: 'normal' },
          { src: ['./src/assets/fonts/cormorant-garamond-latin-wght-italic.woff2'], weight: '300 700', style: 'italic' },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Jost',
      cssVariable: '--font-jost',
      fallbacks: ['sans-serif'],
      options: { variants: [{ src: ['./src/assets/fonts/jost-latin-wght-normal.woff2'], weight: '100 900', style: 'normal' }] },
    },
  ],
  image: {
    breakpoints: [480, 768, 1080, 1440, 1920, 2400],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
