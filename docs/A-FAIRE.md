# Meridian — À faire / points à développer

> Backlog vivant (on coche au fur et à mesure). Créé pour ne rien oublier entre deux sessions.

## SEO / GEO / Site
- [ ] **Google Search Console** — créer la propriété **« Domaine »** `meridian-architecture.com`,
      vérifier via **TXT chez Gandi** (`@` → `google-site-verification=…`), puis **soumettre le sitemap**
      (`https://meridian-architecture.com/sitemap.xml`). *(L'emplacement balise HTML est déjà prêt dans `Base.astro`.)*
- [ ] **JSON-LD `sameAs`** — ajouter les profils (LinkedIn, GitHub…) dans `Base.astro` → renforce l'entité (SEO + IA).
- [ ] **« Qui sommes-nous » + FAQ** lisibles par les IA (texte déclaratif « architecture **logicielle** » + `FAQPage` schema).
- [ ] **Hero** — remplacer le fond noir (photo NY étalonnée Meridian **ou** illustration stylisée). Mécanique déjà prête : `public/images/hero-poster.jpg`.
- [ ] **Enforce HTTPS** — cocher dans *Settings → Pages* une fois le certificat émis.

## Email
- [x] MX · SPF · DKIM · DMARC posés (Google Workspace).
- [ ] **Signature email on-brand** (logo dispo : `/brand/meridian-logo.png`).

## Sécurité (durcissement)
- [ ] **2FA** : Gandi, GitHub, Google Workspace.
- [ ] **Gandi** : verrou de transfert + renouvellement auto + (option) **DNSSEC**.

## Marque / Juridique
- [ ] Vérifier la marque **« Meridian Architecture »** (INPI / EUIPO) en **classe logiciel (9 & 42)** ; envisager le dépôt.
  *(Différent du cabinet d'archi du bâtiment `meridianarchitecture.com` — secteur distinct.)*

## Documents clients
- [ ] Décliner la base documentaire en **Google Docs natifs on-brand** (checklist EXXETUDE + suite).
