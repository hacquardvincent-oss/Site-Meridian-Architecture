import type { APIRoute } from 'astro';
import { routes, pathFor } from '../i18n/routes';

const FALLBACK = new URL('https://meridian-architecture.com');

export const GET: APIRoute = ({ site }) => {
  const base = site ?? FALLBACK;
  const abs = (path: string) => new URL(path, base).href;

  const entries = routes
    .flatMap((r) => {
      const fr = abs(pathFor(r.id, 'fr'));
      const en = abs(pathFor(r.id, 'en'));
      return [fr, en].map((loc) => ({ loc, fr, en }));
    })
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
