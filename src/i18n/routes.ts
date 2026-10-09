/** Routage bilingue FR (par défaut, sans préfixe) / EN (préfixe /en). */

export const locales = ['en', 'fr'] as const;

/**
 * Date de dernière révision éditoriale du site (format ISO court).
 * Sert de `<lastmod>` par défaut dans le sitemap. À remonter quand le
 * contenu change réellement — pas à chaque build : un lastmod qui bouge
 * sans que le contenu bouge finit par être ignoré par Google.
 */
export const CONTENT_UPDATED = '2026-10-09';
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export interface RouteDef {
  id: string;
  fr: string;
  en: string;
  labelFr: string;
  labelEn: string;
  /** Masqué de la navigation (mais crawlable : canonical, hreflang, sitemap). */
  hidden?: boolean;
  /** Révision propre à cette page, si elle diffère de CONTENT_UPDATED. */
  updated?: string;
}

/** Pages du site, dans l'ordre de la navigation. */
export const routes: RouteDef[] = [
  { id: 'home', fr: '/', en: '/en/', labelEn: 'Home', labelFr: 'Accueil' },
  { id: 'solutions', fr: '/solutions/', en: '/en/solutions/', labelEn: 'The craft', labelFr: 'Le savoir-faire' },
  { id: 'outils', fr: '/outils/', en: '/en/tools/', labelEn: 'Case studies', labelFr: 'Réalisations' },
  { id: 'methode', fr: '/methode/', en: '/en/method/', labelEn: 'Method', labelFr: 'La méthode' },
  { id: 'about', fr: '/a-propos/', en: '/en/about/', labelEn: 'About', labelFr: 'À propos' },
  { id: 'contact', fr: '/contact/', en: '/en/contact/', labelEn: 'Contact', labelFr: 'Contact' },
  { id: 'prototyper', fr: '/prototyper-une-idee/', en: '/en/prototyping-an-idea/', labelEn: 'Prototype an idea', labelFr: 'Prototyper une idée', hidden: true },
  { id: 'mentions', fr: '/mentions-legales/', en: '/en/legal-notice/', labelEn: 'Legal notice', labelFr: 'Mentions légales', hidden: true },
  { id: 'confidentialite', fr: '/confidentialite/', en: '/en/privacy/', labelEn: 'Privacy', labelFr: 'Confidentialité', hidden: true },
];

export function getLocaleFromUrl(url: URL): Locale {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');
  const path = base && url.pathname.startsWith(base) ? url.pathname.slice(base.length) : url.pathname;
  const [, first] = path.split('/');
  return first === 'en' ? 'en' : 'fr';
}

export function routeById(id: string): RouteDef {
  const r = routes.find((route) => route.id === id);
  if (!r) throw new Error(`Route inconnue : ${id}`);
  return r;
}

const BASE = import.meta.env.BASE_URL || '/';

/** Préfixe un chemin absolu par la base du site (utile pour un hébergement en sous-dossier). */
export function withBase(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  if (BASE === '/' || BASE === '') return p;
  const b = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  return `${b}${p}`;
}

export function pathFor(id: string, locale: Locale): string {
  const r = routeById(id);
  return withBase(locale === 'en' ? r.en : r.fr);
}

export function labelFor(id: string, locale: Locale): string {
  const r = routeById(id);
  return locale === 'en' ? r.labelEn : r.labelFr;
}

export function navItems(locale: Locale) {
  return routes
    .filter((r) => r.id !== 'home' && !r.hidden)
    .map((r) => ({ href: withBase(locale === 'en' ? r.en : r.fr), label: locale === 'en' ? r.labelEn : r.labelFr, id: r.id }));
}
