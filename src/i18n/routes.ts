/** Routage bilingue FR (par défaut, sans préfixe) / EN (préfixe /en). */

export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export interface RouteDef {
  id: string;
  fr: string;
  en: string;
  labelFr: string;
  labelEn: string;
}

/** Pages du site, dans l'ordre de la navigation. */
export const routes: RouteDef[] = [
  { id: 'home', fr: '/', en: '/en/', labelFr: 'Accueil', labelEn: 'Home' },
  { id: 'concept', fr: '/concept/', en: '/en/concept/', labelFr: 'Le concept', labelEn: 'Concept' },
  { id: 'solutions', fr: '/solutions/', en: '/en/solutions/', labelFr: 'Solutions', labelEn: 'Solutions' },
  { id: 'methode', fr: '/methode/', en: '/en/method/', labelFr: 'La méthode', labelEn: 'Method' },
  { id: 'about', fr: '/a-propos/', en: '/en/about/', labelFr: 'À propos', labelEn: 'About' },
  { id: 'contact', fr: '/contact/', en: '/en/contact/', labelFr: 'Contact', labelEn: 'Contact' },
];

export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
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
    .filter((r) => r.id !== 'home')
    .map((r) => ({ href: withBase(locale === 'en' ? r.en : r.fr), label: locale === 'en' ? r.labelEn : r.labelFr, id: r.id }));
}
