import type { APIRoute } from 'astro';
import { routes, pathFor, withBase } from '../i18n/routes';
import { getTools } from '../i18n/tools';

const FALLBACK = new URL('https://meridian-architecture.com');

export const GET: APIRoute = ({ site }) => {
  const base = site ?? FALLBACK;
  const abs = (path: string) => new URL(path, base).href;

  // Pages statiques (issues des routes déclarées).
  const routePairs = routes.map((r) => ({ fr: abs(pathFor(r.id, 'fr')), en: abs(pathFor(r.id, 'en')) }));

  // Pages dynamiques : une page de contexte par outil (FR + EN).
  const toolPairs = getTools('fr').map((t) => ({
    fr: abs(withBase(`/fr/outils/${t.slug}/`)),
    en: abs(withBase(`/tools/${t.slug}/`)),
  }));

  const entries = [...routePairs, ...toolPairs]
    .flatMap(({ fr, en }) => [fr, en].map((loc) => ({ loc, fr, en })))
    .map(
      ({ loc, fr, en }) => `  <url>
    <loc>${loc}</loc>
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
