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
  // Toutes les redirections (concept fusionné + ancien préfixe /fr) sont dans
  // public/_redirects — de vrais 301 côté Cloudflare, avec joker /fr/*.
});
