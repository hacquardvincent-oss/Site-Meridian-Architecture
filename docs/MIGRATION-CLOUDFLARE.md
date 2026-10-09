# Migration vers Cloudflare Pages — mode opératoire

> Décidé le 9 octobre 2026, suite à l'audit SEO/GEO.
> **Pourquoi :** GitHub Pages ne sait pas faire de redirection 301. Le fichier
> `public/_redirects` existe depuis le commit `4d94243` mais n'a jamais été actif,
> car c'est un format Netlify / Cloudflare. Résultat mesuré : `/fr/`,
> `/fr/solutions/`, `/concept/` renvoient **404** au lieu de 301.

Tout se fait depuis une interface web. Aucune commande à taper.

---

## Ce qui est déjà prêt dans le dépôt

| Fichier | Rôle | État |
|---|---|---|
| `public/_redirects` | 301 des anciennes URL (`/fr/*`, `/concept/`) | ✅ complété, couverture vérifiée |
| `public/_headers` | `Cache-Control`, `X-Content-Type-Options`, `Referrer-Policy` | ✅ créé |
| `astro.config.mjs` | `site` = domaine final par défaut | ✅ aucun changement requis |
| `.nvmrc` | Node 20 | ✅ lu par Cloudflare |
| `package.json` | `npm run build` → `dist` | ✅ détecté automatiquement |

---

## Étape 1 — Créer le projet Cloudflare Pages

1. Ouvrir **dash.cloudflare.com** → menu de gauche : **Workers & Pages** → **Create** → onglet **Pages** → **Connect to Git**.
2. Autoriser Cloudflare sur le compte GitHub `hacquardvincent-oss`, puis choisir le dépôt **`Site-Meridian-Architecture`**.
3. Renseigner la configuration de build :

   | Champ | Valeur |
   |---|---|
   | Project name | `meridian-architecture` |
   | Production branch | **`main`** |
   | Framework preset | **Astro** |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | *(laisser vide)* |

4. **Variables d'environnement : aucune à ajouter.** `astro.config.mjs` utilise
   déjà `https://meridian-architecture.com` par défaut. N'ajoutez **surtout pas**
   `BASE_PATH` : il n'existe que pour le sous-dossier de GitHub Pages et casserait
   tous les chemins.
5. **Save and Deploy.** Le premier build prend 1 à 2 minutes.

À la fin, Cloudflare donne une URL de test du type
`meridian-architecture.pages.dev`.

---

## Étape 2 — Vérifier sur l'URL `.pages.dev` AVANT de toucher au DNS

C'est l'étape qui évite toute coupure. Dans un navigateur, sur l'URL `.pages.dev` :

| À tester | Résultat attendu |
|---|---|
| `/fr/` | redirige vers `/` |
| `/fr/solutions/` | redirige vers `/solutions/` |
| `/concept/` | redirige vers `/solutions/` |
| `/outils/pim/` | s'affiche, et le code source contient `<link rel="canonical" href="https://meridian-architecture.com/outils/pim/">` |
| `/sitemap.xml` | 34 URL, chacune avec une balise `<lastmod>` |
| `/styleguide/` | le code source contient `<meta name="robots" content="noindex, follow">` |

> Pour lire le code source d'une page : clic droit → « Afficher le code source ».
> Puis `Ctrl+F` (ou `Cmd+F`) et chercher `canonical`.

**Si une seule de ces lignes échoue, ne pas basculer le DNS.** Me le signaler.

---

## Étape 3 — Basculer le domaine

### 3a. Déclarer le domaine côté Cloudflare

Dans le projet Pages → onglet **Custom domains** → **Set up a custom domain** →
saisir `meridian-architecture.com`, puis répéter pour `www.meridian-architecture.com`.

Cloudflare affiche alors l'enregistrement DNS à créer.

### 3b. Mettre à jour le DNS chez Gandi

Le domaine est chez **Gandi** (registrar vérifié par RDAP, serveurs
`ns-142-a.gandi.net` et suivants). Deux options :

- **Option recommandée — déléguer le DNS à Cloudflare.** Dans Cloudflare :
  **Add a site** → `meridian-architecture.com` → plan **Free**. Cloudflare donne
  deux serveurs de noms. Les reporter chez Gandi (Domaine → *Serveurs de noms* →
  remplacer ceux de Gandi). Propagation : de 1 h à 24 h. C'est l'option qui
  permettra ensuite les règles de redirection, le cache et les analytics.
- **Option minimale — garder le DNS chez Gandi.** Remplacer l'enregistrement du
  domaine racine par un `CNAME` (ou `ALIAS`/`ANAME` selon ce que propose Gandi)
  vers `meridian-architecture.pages.dev`, et faire de même pour `www`.
  Supprimer les anciens enregistrements `A` qui pointent sur GitHub Pages
  (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`).

### 3c. Après propagation

Vérifier que les six tests de l'étape 2 passent **sur le vrai domaine**.

---

## Étape 4 — Nettoyage, une fois Cloudflare en production

Dans cet ordre, et pas avant que le domaine réponde depuis Cloudflare :

1. Désactiver le workflow GitHub Pages — GitHub → onglet **Actions** →
   *Deploy to GitHub Pages* → **Disable workflow**. Il peut aussi rester
   actif sans nuire : sans DNS, il ne sert plus rien.
2. Supprimer `public/CNAME` (artefact propre à GitHub Pages, ignoré par Cloudflare).
3. Dans les paramètres GitHub du dépôt → **Pages** → passer la source à *None*.

---

## Étape 5 — Search Console : relancer l'indexation

Sans cette étape, la correction peut mettre des semaines à être prise en compte.

1. **search.google.com/search-console** → vérifier que la propriété
   `meridian-architecture.com` existe. Si ce n'est pas le cas : *Ajouter une
   propriété* → **Préfixe de l'URL** → vérification par **enregistrement DNS TXT**
   chez Gandi (couvre tout le domaine, et survit à la migration — contrairement
   à la balise HTML).
   > Si vous préférez la balise HTML : me donner le code, il se colle dans
   > `src/layouts/Base.astro`, constante `GOOGLE_SITE_VERIFICATION` (ligne 45,
   > actuellement vide).
2. **Sitemaps** → soumettre (ou re-soumettre) `https://meridian-architecture.com/sitemap.xml`.
3. **Inspection de l'URL** → tester une à une les 16 pages corrigées, et cliquer
   **Demander une indexation** pour chacune. Quota : environ 10 par jour, donc
   deux jours. Commencer par les 8 URL françaises, dans cet ordre :

   ```
   /outils/seo-geo/
   /outils/erp/
   /outils/pim/
   /outils/plm/
   /outils/data-bi/
   /outils/site-vitrine-ecommerce/
   /outils/crm-fidelisation/
   /outils/pos/
   ```

4. **Pages** (rapport d'indexation) → noter l'état de départ. Les 404 hérités de
   `/fr/*` doivent disparaître progressivement une fois les 301 actifs.
5. **M'envoyer l'export du rapport d'indexation** une fois les 301 en place :
   c'est la seule donnée qui permettra de mesurer l'effet réel plutôt que de
   l'estimer.

---

## Point de vigilance : la branche de déploiement

Le workflow actuel (`.github/workflows/deploy.yml`) se déclenche sur `main` et
sur `claude/eloquent-goodall-Zehcn` — **pas** sur la branche de travail
`claude/amazing-shannon-1m1mfw` qui porte les correctifs.

Même chose pour Cloudflare : la *production branch* configurée à l'étape 1 est
`main`.

**Conséquence : les correctifs sont dans le dépôt mais ne seront pas en ligne
tant qu'ils ne seront pas sur `main`.** Il faut donc, au choix :

- fusionner `claude/amazing-shannon-1m1mfw` dans `main` (je peux ouvrir la pull
  request sur demande) ;
- ou régler la *production branch* de Cloudflare sur la branche de travail —
  pratique pour tester, à ne pas laisser en place.
