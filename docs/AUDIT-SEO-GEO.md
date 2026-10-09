# Audit SEO / GEO — meridian-architecture.com

> Relevé du **9 octobre 2026**. Toutes les valeurs de ce document ont été mesurées
> sur le site en production (`curl`, RDAP, sitemap live), pas estimées.
> Hébergement constaté : **GitHub Pages** (`server: GitHub.com`).
> Dernier build en ligne : `last-modified: Thu, 01 Oct 2026 15:03:59 GMT` — à jour
> des commits du 1er octobre (vérifié : « Trois piliers » + champ téléphone présents).

---

## Verdict en une ligne

Les pages ne sont pas indexées **à 80 % à cause d'un seul bug**, pas d'un problème
de stratégie de contenu : les 16 pages construites *pour* le SEO déclarent une
URL canonique qui renvoie une 404.

---

## P0 — BLOQUANT : canonical vers une 404 sur 16 pages / 34

### Mesure

| URL testée (HTTP 200) | `<link rel="canonical">` déclaré | Code HTTP du canonical |
|---|---|---|
| `/outils/pim/` | `/fr/outils/pim/` | **404** |
| `/outils/erp/` | `/fr/outils/erp/` | **404** |
| `/outils/seo-geo/` | `/fr/outils/seo-geo/` | **404** |
| `/en/tools/pim/` | `/tools/pim/` | **404** |
| *(idem pour les 8 outils × 2 langues)* | | |

Les 18 autres URL du sitemap ont un canonical correct (vérifié une par une).

### Cause

`src/pages/outils/[slug].astro:12` et `src/pages/en/tools/[slug].astro:12` :

```js
const altPaths = { fr: `/fr/outils/${tool.slug}/`, en: `/tools/${tool.slug}/` };
```

Ces chemins datent de l'ancien schéma i18n. Le commit `c8f72bd`
(« refonte : le concept en cinq piliers, et le site en français par défaut ») a
déplacé le FR de `/fr/*` vers la racine et le EN sous `/en/*`. Les pages statiques
passent par `pathFor()` et ont suivi ; **les deux pages dynamiques utilisent
`altPaths` en dur et n'ont jamais été mises à jour.**

### Conséquence

- Google n'indexe pas une page dont le canonical déclaré n'existe pas. Dans la
  Search Console, ces 16 URL ressortent en *« Autre page avec balise canonique
  correcte »* ou *« Introuvable (404) »*.
- Le `hreflang` est cassé sur les mêmes pages (il pointe aussi vers des 404) :
  la grappe FR/EN est invalide.
- Le sitemap, lui, déclare les **bonnes** URL (`/outils/pim/`). Google est donc
  invité à explorer une page qui lui répond « la vraie version est ailleurs » —
  et cet ailleurs n'existe pas.

**Ces 16 pages sont exactement celles conçues pour le SEO et le GEO
(définitions + FAQ + JSON-LD `FAQPage`). 100 % de l'effort de contenu est neutralisé.**

### Correctif

```js
const altPaths = { fr: `/outils/${tool.slug}/`, en: `/en/tools/${tool.slug}/` };
```

Coût : 2 lignes. À faire avant toute autre action.

---

## P1 — Les redirections 301 ne fonctionnent pas (mauvais hébergeur)

`public/_redirects` est un fichier **Netlify / Cloudflare Pages**. Le site est servi
par **GitHub Pages**, qui ignore totalement ce fichier.

### Mesure

| URL | Attendu | Constaté |
|---|---|---|
| `/fr/` | 301 → `/` | **404** |
| `/fr/solutions/` | 301 → `/solutions/` | **404** |
| `/concept/` | 301 → `/solutions/` | **404** |
| `/solutions` (sans slash) | 301 → `/solutions/` | 301 ✅ *(natif GH Pages)* |
| `www.` → apex | 301 | 301 ✅ |

Toutes les anciennes URL précédemment indexées (schéma `/fr/*`, `/concept/`)
sont donc des **404 sèches**, sans redirection : le peu d'autorité accumulée est
perdu et la Search Console se remplit d'erreurs 404.

### Limite structurelle

GitHub Pages ne permet **aucun contrôle serveur** : pas de 301, pas d'en-têtes
personnalisés, pas de `cache-control`, pas de règles de redirection. C'est une
contrainte de fond pour le SEO, pas un détail de configuration.

---

## P2 — Autorité : la vraie raison pour laquelle rien ne classe

| Signal | Mesure | Lecture |
|---|---|---|
| Âge du domaine | créé le **2026-06-05** (RDAP Verisign) → **4 mois** | Pas d'historique |
| Visibilité marque | recherche `"meridian-architecture.com"` et `"Meridian Architecture"` + métier : **0 résultat du site** | Google ne connaît pas l'entité |
| `sameAs` dans le schéma | **vide** (commenté, `Base.astro:49`) | Aucune corroboration externe |
| Identité légale | mentions légales : **« SIREN : en cours d'immatriculation »** | E-E-A-T nul |
| Téléphone | `phone: ''` dans `content.ts` | Pas de NAP |

### Collision d'entité sur le nom

« Meridian Architecture » se lit comme un **cabinet d'architecture du bâtiment**.
La SERP sur le nom exact est occupée par Meridian Design Associates (NYC),
Meridian 105 Architecture (Denver), Meridian Architectural Works (Cincinnati).
Le `alternateName: 'Meridian — Architecture logicielle'` et le `knowsAbout`
du JSON-LD sont une bonne parade, mais la bataille d'entité se joue **sur votre
propre nom de marque** — c'est un handicap durable.

### Lecture commerciale

Un dirigeant de PME à qui l'on demande de signer un projet logiciel vérifie
l'immatriculation. « SIREN en cours » + zéro trace en ligne + nom ambigu = le
site peut être parfaitement optimisé, il ne convertira pas et ne classera pas.
**C'est le verrou n°1 après le bug P0.**

---

## P3 — Ciblage des mots-clés : le point que je remets le plus en question

Les 8 pages outils ciblent des requêtes **définitionnelles** :
« PIM : qu'est-ce que c'est », « ERP : qu'est-ce que c'est », etc.

### Volume de contenu réellement mesuré

| Page | Poids HTML | Mots de texte | H1 | H2 | Liens internes |
|---|---|---|---|---|---|
| `/` | 24 Ko | 487 | 1 | 3 | 15 |
| `/solutions/` | 32 Ko | 661 | 1 | 5 | 15 |
| `/outils/` | 28 Ko | 383 | 1 | 3 | 22 |
| `/outils/seo-geo/` | 36 Ko | 603 | 1 | 5 | 21 |
| `/outils/erp/` | 36 Ko | 577 | 1 | 5 | 21 |
| `/methode/` | 24 Ko | 435 | 1 | 8 | 15 |
| `/a-propos/` | 24 Ko | 405 | 1 | 3 | 14 |
| `/contact/` | 20 Ko | **228** | 1 | **0** | 15 |
| `/prototyper-une-idee/` | 36 Ko | 717 | 1 | 6 | 22 |

`/contact/` à 228 mots donne la mesure du **boilerplate** (header + footer + CTA)
≈ 200 mots. Le contenu **unique** d'une page outil est donc d'environ **380 mots**,
réparti sur 5 sections identiques d'une page à l'autre (`whatIs`, `whatFor`,
`steps`, `withMeridian`, `faq`) — structure gabarisée, signature classique du
*thin / templated content*.

### Quatre problèmes de fond

1. **Concurrence hors d'atteinte.** Ces SERP sont tenues par des éditeurs à forte
   autorité (Akeneo, Salsify, Quable, Sage, SAP, Cegid) avec des guides de
   2 000 à 4 000 mots. Un domaine de 4 mois avec 380 mots uniques n'a aucun chemin.
2. **Intention commerciale nulle.** Qui cherche « qu'est-ce qu'un PIM » apprend,
   il n'achète pas. Même classé, le lead est mauvais.
3. **Contenu trop mince.** Même une fois le P0 corrigé, ces pages basculeront
   probablement en *« Explorée, actuellement non indexée »*.
4. **Doublement en anglais.** 17 pages FR + 17 pages EN pour une activité
   déclarée « France · à distance ». La moitié du site est une traduction sans
   marché, sans backlink et sans demande : dilution du budget d'exploration et
   contenu quasi dupliqué pour une entité que Google n'a pas encore établie.

### Ce qui marche pour ce profil

Requêtes à **intention commerciale et faible concurrence**, pas des définitions :
`développement logiciel sur-mesure PME`, `automatisation Excel entreprise`,
`logiciel métier sur-mesure [secteur]`, `alternative à [éditeur]`.
Et des **pages de preuve** (cas clients chiffrés) — qui sont aussi, et ce n'est
pas un hasard, ce que le GEO récompense.

---

## P4 — GEO : ce que les données soutiennent réellement

Données, pas promesses du marché :

- **Les citations de ChatGPT et Perplexity passent par des index de recherche
  classiques, pas par les données d'entraînement.** Être indexé est donc un
  *prérequis* au GEO. Corriger le P0 **est** la première étape du plan GEO.
- Une revue de 45 études (juillet 2026, arXiv) ne retient que **3 facteurs** au
  niveau de preuve modéré à fort : la pertinence requête/document, la **position
  du passage** dans la fenêtre de contexte, et la présence de **preuves
  extractibles** (statistiques vérifiables).
- `llms.txt` : **aucune efficacité mesurable** à ce jour. À traiter comme 15 min
  de travail, pas comme un pilier.
- Pew Research : avec un résumé IA, l'internaute clique un résultat organique
  dans **8 %** des visites (contre 15 % sans), et une source citée dans **1 %**.
  → Le GEO apporte de l'**exposition de marque**, très peu de trafic. Attendre
  des leads du GEO en 2026 pour un site de 4 mois n'est pas réaliste.

### Déjà bon (à conserver)

- `robots.txt` en `Allow: /` — GPTBot, ClaudeBot, PerplexityBot ne sont pas bloqués.
- JSON-LD `FAQPage` sur les 16 pages outils (format Q/R = directement extractible).
- JSON-LD `Organization` avec `knowsAbout`, `alternateName`, `slogan` — bonne
  désambiguïsation sectorielle.
- Structure Hn propre : 1 seul H1 par page sur les 9 pages testées.

### Ce qui manque

**Des chiffres vérifiables et citables.** La home affiche « Mesure en cours » et
« Sous accord » sur 2 des 3 preuves. L'honnêteté est juste — et rare — mais un
LLM n'a rien à extraire. Le seul fait extractible du site entier est
**« 373 → 0, audité et retourné en 3,8 s »**. C'est l'actif le plus
GEO-exploitable du site, et il est enterré au milieu de la page d'accueil.

Manquent aussi : `BreadcrumbList`, `Service`, `WebSite`, `ProfessionalService`
avec adresse et téléphone.

---

## P5 — Technique, secondaire mais réel

| Point | Mesure | Impact |
|---|---|---|
| Poids images | `hero.jpg` = **702 575 o** ; 3 Mo de JPEG dans `public/images` | LCP mobile |
| Formats modernes | **0** fichier WebP / AVIF ; `astro:assets` / `<Image>` **non utilisé** | ~70 % de poids évitable |
| Chemin critique home | **~834 Ko** mesurés (HTML + hero + band + 2 polices) | Lent en 4G |
| Dimensions images | **0** balise `<img>` avec `width`/`height` | Risque de CLS |
| `lastmod` dans le sitemap | **0 occurrence** | Aucun signal de fraîcheur |
| `/styleguide/`, `/brand/` | HTTP 200, **aucune balise robots**, canonical → `/` | Pages de travail publiques |
| `/cadrage/`, `/deck/`, `/proposition/` | `noindex` ✅ | Correct |
| `GOOGLE_SITE_VERIFICATION` | **vide** (`Base.astro:45`) | GSC vérifiée par DNS ? à confirmer |
| GA4 | `G-1TEFJJ6EXB` actif, consentement RGPD « denied » par défaut | Conforme ✅ |
| Workflow de déploiement | déclenché sur `claude/eloquent-goodall-Zehcn` + `main` — **pas** sur la branche de travail courante | Risque de déploiement invisible |
| `/contact/` | 228 mots, **0 H2** | Page la plus mince = celle qui convertit |
| `404.astro` | `pageId="home"` → canonical vers `/` | À isoler |

---

## Plan d'action proposé

### Phase 0 — Débloquer (≈ 1/2 journée, non négociable)

1. Corriger `altPaths` dans les 2 pages dynamiques → **16 pages redeviennent indexables**.
2. Ajouter `noindex` sur `/styleguide/` et `/brand/`.
3. Ajouter `<lastmod>` dans `sitemap.xml.ts`.
4. Corriger le canonical de `404.astro`.
5. Confirmer la vérification Search Console, puis demander la ré-indexation des 16 URL.

*Effet attendu : c'est tout l'enjeu. Sans cette phase, rien d'autre ne sert.*

### Phase 1 — Décision d'hébergement (arbitrage à valider)

GitHub Pages ne sait pas faire de 301. Deux options :
- **Cloudflare Pages** (recommandé) : gratuit, `_redirects` déjà écrit et
  fonctionnel, vrais 301, en-têtes, CDN plus rapide. Migration ≈ 1 h.
- **Rester sur GH Pages** : redirections dégradées en `meta refresh` + canonical.
  Google les suit, mais moins bien, et aucun contrôle d'en-têtes.

### Phase 2 — Confiance et entité (1 à 2 semaines — le vrai déverrouillage)

1. Finaliser l'immatriculation et **publier le SIREN** dans les mentions légales.
2. Créer et remplir la **page LinkedIn entreprise**, la déclarer dans `sameAs`.
3. Ajouter une **identité réelle** sur `/a-propos/` : personne nommée, photo,
   parcours, références.
4. Passer le schéma en `ProfessionalService` avec adresse et téléphone.
5. Obtenir **5 à 10 citations honnêtes** (annuaires, profil Malt / Sortlist,
   Crunchbase, pages partenaires).

*Sans cette phase, aucun travail on-page ne classera : le site n'a aucune autorité.*

### Phase 3 — Contenu réorienté (à valider avant exécution)

1. **3 à 4 cas clients chiffrés.** Le « 373 → 0 en 3,8 s » vaut plus que les
   8 pages de définitions réunies : c'est unique, vérifiable et extractible par
   une IA. C'est le seul contenu que personne d'autre ne peut écrire.
2. **2 à 3 pages à intention commerciale** sur des requêtes atteignables.
3. **Arbitrer la version EN** : `noindex` ou suppression jusqu'à preuve de demande.
4. Étoffer `/contact/` (228 mots, 0 H2).

---

## Ce que je remets en question dans l'approche actuelle

1. **Le nom de marque.** « Meridian Architecture » vous place en concurrence
   d'entité avec des cabinets d'architecture établis, sur votre propre nom.
   Soit assumer et se battre (12 mois +), soit accoler systématiquement un
   qualifieur (« Meridian — Architecture logicielle ») partout, y compris dans
   les `<title>`.
2. **La version anglaise.** Qui est l'acheteur ? S'il n'y a pas de pipeline EN,
   ce sont 17 pages de dilution. Je recommande `noindex` ou suppression.
3. **Vendre du « SEO / GEO » (`/outils/seo-geo/`) alors que son propre site
   n'est pas indexé** — et que la page qui le vend est précisément l'une des 16
   cassées. Tout prospect qui vérifie le verra. Et les prospects vérifient.
4. **Les attentes GEO.** La valeur réaliste aujourd'hui est l'exposition de
   marque, pas le lead. Budgéter en conséquence.
5. **La stratégie « 8 pages de définitions »** : bon réflexe GEO sur la forme
   (FAQ structurée), mauvais choix de requêtes sur le fond.

---

## Sources externes consultées

- RDAP Verisign — date de création du domaine `meridian-architecture.com`
- *Optimizing Visibility in Generative Engines: A Critical Survey of GEO
  (2023-2026)* — arXiv 2607.14035
- Aggarwal et al., *GEO: Generative Engine Optimization* — Princeton / Georgia
  Tech / AI2, ACM KDD 2024
- Pew Research Center — comportement de clic en présence d'un résumé IA

---

## Journal de résolution

### 9 octobre 2026 — Phase 0 exécutée (arbitrage : « lance maintenant »)

| Anomalie | État | Correctif |
|---|---|---|
| **P0** canonical → 404 sur 16 pages | **Corrigé** | `altPaths` réalignés sur le schéma i18n courant dans `src/pages/outils/[slug].astro` et `src/pages/en/tools/[slug].astro`, avec un commentaire d'avertissement pour éviter la récidive |
| `/styleguide/`, `/brand/`, `404` indexables avec canonical vers `/` | **Corrigé** | Prop `noindex` ajoutée à `Base.astro`. Elle émet `noindex, follow` **et supprime canonical + hreflang** : un `noindex` accompagné d'un canonical pointant ailleurs risque de propager le noindex à la page cible — ici la page d'accueil |
| Sitemap sans `<lastmod>` | **Corrigé** | `CONTENT_UPDATED` dans `routes.ts` + champ `updated?` facultatif par route et par outil. Volontairement **pas** la date de build : un `lastmod` qui bouge sans que le contenu bouge finit par être ignoré par Google |
| **P1** redirections inactives | **Préparé, pas encore actif** | `public/_redirects` complété (`/concept` et `/en/concept` sans slash final n'étaient pas couverts ; cibles avec slash pour éviter les chaînes de deux 301) + `public/_headers` créé. **Inactif tant que le DNS pointe sur GitHub Pages** — voir `MIGRATION-CLOUDFLARE.md` |

#### Vérifications automatisées sur le build (40 pages)

```
39 pages analysées (index.html) — 0 anomalie
  · chaque canonical est auto-référent et résout vers une page existante
  · 0 problème de réciprocité hreflang
  · sitemap : 34 URL, 34 <lastmod>, 0 URL introuvable dans le build
  · pages indexables : 34 — 0 absente du sitemap
  · 404.html : noindex, follow + aucun canonical
  · dist/_redirects et dist/_headers présents
```

#### Arbitrages du client, contraires à ma recommandation

Consignés pour la mémoire du projet — à réévaluer sur données réelles.

1. **Version EN conservée à l'index** (je recommandais `noindex`). 17 pages de
   traduction pour une activité « France · à distance », sans backlink ni demande
   EN identifiée. À revoir si la Search Console montre ces pages en
   « Explorée, actuellement non indexée ».
2. **Approfondissement des 8 pages de définitions** (je recommandais le pivot
   vers des cas clients chiffrés). Concurrence : Akeneo, Quable, Sage, SAP, avec
   2 000 à 4 000 mots et une autorité établie ; domaine de 4 mois ; intention
   d'achat nulle sur ces requêtes. Reste à faire.

#### Non traité à ce stade

- Images : 702 Ko pour `hero.jpg`, 0 WebP/AVIF, `astro:assets` non utilisé,
  0 attribut `width`/`height` (CLS).
- Core Web Vitals réels : non mesurés (quota de l'API PageSpeed épuisé le 9 oct.).
- Phase 2 (confiance et entité) : SIREN, LinkedIn, `sameAs`, identité sur
  `/a-propos/`, schéma `ProfessionalService`. **C'est le verrou n°1 restant.**

### 9 octobre 2026 — Phase 3 exécutée (arbitrage : « approfondir les 8 pages, d'un coup »)

Les 8 pages outils ont été réécrites en FR et en EN, soit 16 pages.

#### Volume mesuré sur le build

| Page | Avant | Après | Facteur |
|---|---|---|---|
| `/outils/seo-geo/` | 603 mots | **1 736** | ×2,9 |
| `/outils/erp/` | 577 mots | **1 580** | ×2,7 |
| `/outils/data-bi/` | ~580 | **1 653** | ×2,8 |
| `/outils/plm/` | ~580 | **1 617** | ×2,8 |
| `/outils/site-vitrine-ecommerce/` | ~580 | **1 613** | ×2,8 |
| `/outils/crm-fidelisation/` | ~580 | **1 546** | ×2,7 |
| `/outils/pim/` | ~580 | **1 542** | ×2,7 |
| `/outils/pos/` | ~580 | **1 538** | ×2,7 |

Versions anglaises : 1 401 à 1 547 mots (l'anglais est naturellement plus
compact que le français, l'écart n'est pas une perte de contenu).

Structure par page : 1 `h1`, 11 `h2`, 10 `h3`, 8 liens internes vers d'autres
pages outils (3 pages liées explicitement + 5 autres).

#### Structure retenue, et pourquoi

L'ordre des sections suit les trois facteurs que la revue arXiv 2607.14035
(juillet 2026) retient au niveau de preuve modéré à fort : pertinence
requête/document, position du passage utile dans la page, présence de preuves
extractibles.

| Section | Intention |
|---|---|
| Qu'est-ce que c'est ? | Réponse directe, en tête de page — position favorable dans la fenêtre de contexte |
| Les signes que vous en avez besoin | Reconnaissance par le symptôme, pas par le vocabulaire technique |
| À quoi ça sert ? | Bénéfice, avec le coût ou la contrepartie quand il y en a une |
| Ne pas confondre | Désambiguïsation (PIM/PLM/DAM/ERP). Requêtes moins concurrentielles que les définitions nues, et format que les moteurs génératifs reprennent volontiers |
| Comment ça fonctionne ? | Étapes, numérotées |
| Les erreurs qui coûtent le plus cher | Signal d'expertise (E-E-A-T), et contenu que les éditeurs n'écrivent pas |
| Combien ça coûte, combien de temps | Qualitatif : ce qui fait monter le budget. **Aucun chiffre de prix inventé** |
| Quand vous n'en avez pas besoin | Honnêteté explicite. Différenciant, et bloc autonome facile à citer |
| Avec Meridian | Positionnement |
| Questions fréquentes | 6 questions au lieu de 2 — alimente le JSON-LD `FAQPage` |
| Glossaire | 4 termes définis — alimente le JSON-LD `DefinedTermSet` |

#### Balisage ajouté

Chaque page outil émet désormais 4 blocs JSON-LD valides, contre 2 :
`Organization`, `FAQPage` (6 questions), `BreadcrumbList`, `DefinedTermSet`.

#### Règle suivie sur les chiffres

Aucune statistique n'a été inventée. Les seuls chiffres publiés sont des
données externes vérifiables, citées sur la page `/outils/seo-geo/` :

- Pew Research Center — 8 % de clics sur un résultat organique en présence
  d'un résumé IA, contre 15 % sans ; 1 % sur une source citée.
- Revue de 45 études, arXiv 2607.14035, juillet 2026 — trois facteurs retenus.
- Aggarwal et al., GEO, ACM KDD 2024 — origine du terme.

Les sections « budget » restent qualitatives : ce qui fait varier le coût, pas
un tarif. Publier une grille de prix demande votre validation, pas la mienne.

#### Vérifications

```
Typecheck TypeScript (tsc --noEmit)         : 0 erreur
Build                                        : 40 pages
JSON-LD                                      : 4 blocs par page outil, tous valides
Non-régression canonical / hreflang          : 0 anomalie sur 39 pages
Sitemap                                      : 34 URL, 34 lastmod
```

#### Réserve maintenue

L'approfondissement rend ces pages crédibles. Il ne règle pas le problème de
fond : sur `PIM : qu'est-ce que c'est`, la concurrence est Akeneo, Quable, Sage
et SAP, avec une autorité de domaine sans commune mesure et des guides plus
longs. **1 600 mots sur un domaine de 4 mois sans backlink ne battent pas
4 000 mots sur un domaine installé.** Ce qui peut classer, en revanche, ce sont
les sections de désambiguïsation (« PIM ou PLM », « CRM ou ERP ») et les
sections d'erreurs : requêtes plus étroites, intention plus qualifiée,
concurrence plus faible.

À mesurer dans la Search Console sous 6 à 8 semaines, requête par requête,
plutôt qu'au volume global.

### 9 octobre 2026 — Validation sur déploiement Cloudflare réel

Découvert en ouvrant la pull request : **un projet Cloudflare Pages
(`site-meridian-architecture`) était déjà connecté au dépôt.** Le mode
opératoire a été corrigé en conséquence — l'étape de création n'était pas à
faire. Le domaine, lui, sert toujours depuis GitHub Pages (`server: GitHub.com`,
vérifié), donc les 301 restent inactifs en production.

Les 9 règles de `_redirects` ont été testées sur la prévisualisation Cloudflare
de la branche : **toutes répondent en 301**, vers la bonne cible, sans chaîne.

#### Anomalie trouvée en test, invisible à la relecture du code

**Cloudflare Pages cumule toutes les règles `_headers` qui correspondent à une
URL** — ce n'est pas « première règle gagnante » comme dans `_redirects`. Le
`Cache-Control` du bloc `/*` s'ajoutait à celui des blocs spécifiques :

```
avant   /fonts/*.woff2  cache-control: public, max-age=31536000, immutable,
                                       public, max-age=0, must-revalidate
        /images/*.jpg   cache-control: public, max-age=604800,
                                       public, max-age=0, must-revalidate

après   /fonts/*.woff2  cache-control: public, max-age=31536000, immutable
        /images/*.jpg   cache-control: public, max-age=604800
        /outils/pim/    cache-control: public, max-age=0, must-revalidate
```

Un en-tête à deux `max-age` est invalide et le plus restrictif l'emporte :
polices et images n'étaient pas mises en cache du tout. Pire que de ne rien
déclarer. Corrigé et revérifié sur le déploiement : une seule occurrence de
`max-age` par ressource.

**À retenir pour les prochains projets : un fichier `_headers` ou `_redirects`
ne se valide pas en le relisant, il se valide en interrogeant la plateforme.**

### 9 octobre 2026 — Images et Core Web Vitals

Les 8 photographies utilisées passent de `public/images/` à `src/assets/images/`,
et de `<img>` à `<Image>` d'`astro:assets`. Le DOM reste identique — une seule
balise `<img>`, pas d'enveloppe `<picture>` — pour écarter tout risque de
régression sur le CSS existant, qui cible des classes posées sur l'image.

#### Mesures

| | Avant | Après |
|---|---|---|
| Chemin critique accueil, **mobile** (HTML + hero + 2 polices) | 737 Ko | **95 Ko** · −87 % |
| Chemin critique accueil, **desktop** | 737 Ko | **338 Ko** · −54 % |
| `hero.jpg` servi | 687 Ko, taille unique | 18 / 45 / 89 / 162 / 288 Ko selon le viewport |
| Images avec `width`/`height` | **0 / 8** | **8 / 8** |
| Images avec `srcset` | 0 / 8 | 8 / 8 |
| Format | JPEG | WebP, qualité 72 |

#### Deux pièges rencontrés, tous deux invisibles à la relecture

**1. `<Image>` met `loading="lazy"` par défaut.** Première version livrée : les
5 heros portaient `fetchpriority="high"` *et* `loading="lazy"`. C'est
contradictoire, et le lazy l'emporte — soit un retard de découverte sur
l'élément LCP, exactement l'inverse de l'objectif. Corrigé en
`loading="eager" decoding="sync"` sur les heros ; les bandeaux sous la ligne de
flottaison gardent `lazy`/`async`.

**2. `widths` ne pilote que le `srcset`.** Astro génère en plus un `src` de
repli à la taille de la source. Résultat : des variantes de 486 Ko (hero),
361 Ko (about) et 338 Ko (contact) produites et déployées, qu'aucun navigateur
moderne ne télécharge. Corrigé par un `width` explicite — plus aucune variante
au-delà de 320 Ko.

#### Choix assumé : plafond à 2000 px

Les sources font 2400 px, le `srcset` s'arrête à 2000. Ces photos sont
décoratives : voile sombre et texte par-dessus. La variante 2400 px pèse 486 Ko
contre 288 Ko à 2000 px, pour une différence invisible sous le voile. Et le
signal de classement de Google se mesure majoritairement sur le terrain mobile,
qui prend de toute façon la variante 640 ou 960 px.

#### Trouvé au passage

`public/images/concept.jpg` (136 Ko) **n'est utilisé par aucune page** — la prop
`image` de `PageHero` et le composant `Figure` ne sont appelés nulle part. Le
fichier est conservé et signalé dans `public/images/README.md`, pas supprimé :
c'est un arbitrage de marque, pas technique.

#### Vérifications

```
tsc --noEmit                         : 0 erreur
Build                                : 40 pages, 48 variantes WebP
Variantes au-delà du plafond         : 0 (avant correctif : 3)
Heros en loading="eager"             : 5 / 5
Non-régression canonical             : 0 anomalie
Sitemap                              : 34 URL, 34 lastmod
Références /images/*.jpg cassées     : 0
```

#### Reste possible sur les images

- **AVIF** en plus du WebP : encore ~20 % de gain, mais impose une enveloppe
  `<picture>`, donc du CSS à reprendre sur les 5 heros. Rapport effet/risque
  moins bon que ce qui vient d'être fait — à faire seulement si la mesure
  terrain le justifie.
- **Core Web Vitals réels** : toujours pas mesurés (quota de l'API PageSpeed
  épuisé le 9 oct.). Les chiffres ci-dessus sont des poids de transfert, pas
  des LCP terrain. À confirmer dans la Search Console une fois le site basculé.
