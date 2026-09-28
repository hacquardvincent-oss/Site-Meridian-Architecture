// @ts-check
import { defineConfig } from 'astro/config';

// Site & base pilotables par variables d'environnement.
// Par défaut : domaine final, servi à la racine.
// En CI (GitHub Pages), on passe SITE_URL + BASE_PATH pour servir sous /Site-Meridian-Architecture.
const SITE_URL = process.env.SITE_URL || 'https://meridian-architecture.com';
const BASE_PATH = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  i18n: {
    defaultLocale: 'fr',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  // Le concept est fusionné dans « Ce que nous automatisons ».
  redirects: {
    '/concept/': '/solutions/',
    '/en/concept/': '/en/solutions/',
  },
});
