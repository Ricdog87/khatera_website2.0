// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://khatera-gross.de',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  adapter: vercel({ webAnalytics: { enabled: false } }),
  integrations: [sitemap({ filter: (page) => !page.includes('/danke') })],
  // Alte Framer-URLs dauerhaft auf die neuen Seiten umleiten, damit Rankings und Links erhalten bleiben
  redirects: {
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
  },
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
