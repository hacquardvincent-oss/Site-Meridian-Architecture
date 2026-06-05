# Meridian Architecture — site vitrine

Site vitrine de **Meridian Architecture** : un écosystème logiciel unique, sur-mesure et propulsé
par l'IA (BI, ERP, PLM, PIM, sites — interconnectés).

Site **multi-pages, bilingue (FR/EN)**, construit avec [Astro](https://astro.build/).
Direction artistique « clair & galerie » : rigueur du design suisse/digital + matières d'un loft
new-yorkais (béton, chêne, laiton, lumière). Voir le cadrage complet dans [`docs/CADRAGE.md`](docs/CADRAGE.md).

## Prévisualiser en local

Prérequis : [Node.js](https://nodejs.org) 20 ou plus.

```bash
npm install        # installe les dépendances (une seule fois)
npm run dev        # serveur de dev → http://localhost:4321
```

Pour tester le rendu de production :

```bash
npm run build      # génère le site statique dans dist/
npm run preview    # sert dist/ → http://localhost:4321
```

## Structure

```
src/
  styles/
    tokens.css          → CHARTE GRAPHIQUE (couleurs, typo, espacements)
    global.css          → base CSS + utilitaires
  i18n/
    routes.ts           → pages & routage bilingue (URLs, libellés)
    content.ts          → TOUT LE CONTENU rédactionnel (FR + EN)
  components/
    Logo.astro, Header.astro, Footer.astro, EcosystemDiagram.astro, …
    pages/              → un composant par page (HomePage, ConceptPage, …)
  layouts/Base.astro    → <head> (SEO, OG, hreflang, polices), header/footer
  pages/                → routes FR (/) et EN (/en/)
public/                 → favicon, robots.txt, fichiers statiques
```

### Où modifier quoi

- **Couleurs / typo / espacements** → `src/styles/tokens.css`
- **Textes (FR et EN)** → `src/i18n/content.ts`
- **Pages / libellés de navigation / URLs** → `src/i18n/routes.ts`
- **Logo** → `src/components/Logo.astro` · **favicon** → `public/favicon.svg`

## Déploiement

Le site est **100 % statique** (dossier `dist/`). Options recommandées :

- **Vercel** — importer le dépôt GitHub, Astro est détecté automatiquement. Config : `vercel.json`.
- **Netlify** — connecter le dépôt, build `npm run build`, publication `dist`. Config : `netlify.toml`.
- **GitHub Pages** — possible via GitHub Actions (nécessite de configurer le domaine pour servir à la racine).

Brancher ensuite le domaine **meridian-architecture.com** sur l'hébergeur choisi (DNS).

## À personnaliser

- **Formulaire de contact** : démo non connectée. À brancher sur Formspree, Netlify Forms ou un CRM
  (voir `src/components/pages/ContactPage.astro`).
- **Page « À propos »** : à compléter avec le parcours et la photo du fondateur.
- **Image Open Graph** : ajouter `public/og-meridian.png` (aperçu lors des partages réseaux sociaux).
