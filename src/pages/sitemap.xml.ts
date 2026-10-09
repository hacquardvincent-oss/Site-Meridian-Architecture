import type { APIRoute } from 'astro';
import { routes, pathFor, withBase, CONTENT_UPDATED } from '../i18n/routes';
import { getTools } from '../i18n/tools';

const FALLBACK = new URL('https://meridian-architecture.com');

interface Entry {
  fr: string;
  en: string;
  lastmod: string;
}

export const GET: APIRoute = ({ site }) => {
  const base = site ?? FALLBACK;
  const abs = (path: string) => new URL(path, base).href;

  // Pages statiques (issues des routes déclarées).
  const routeEntries: Entry[] = routes.map((r) => ({
    fr: abs(pathFor(r.id, 'fr')),
    en: abs(pathFor(r.id, 'en')),
    lastmod: r.updated ?? CONTENT_UPDATED,
  }));

  // Pages dynamiques : une page de contexte par outil (FR + EN).
  // Les chemins doivent rester alignés sur altPaths dans outils/[slug].astro
  // et en/tools/[slug].astro — sitemap et canonical doivent dire la même chose.
  const toolEntries: Entry[] = getTools('fr').map((t) => ({
    fr: abs(withBase(`/outils/${t.slug}/`)),
    en: abs(withBase(`/en/tools/${t.slug}/`)),
    lastmod: t.updated ?? CONTENT_UPDATED,
  }));

  const entries = [...routeEntries, ...toolEntries]
    .flatMap(({ fr, en, lastmod }) => [fr, en].map((loc) => ({ loc, fr, en, lastmod })))
    .map(
      ({ loc, fr, en, lastmod }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <xhtml:link rel="alternate" hreflang="fr" href="${fr}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${fr}"/>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
