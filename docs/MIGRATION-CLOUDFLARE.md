# Migration vers Cloudflare Pages — mode opératoire

> Décidé le 9 octobre 2026, suite à l'audit SEO/GEO.
> **Pourquoi :** GitHub Pages ne sait pas faire de redirection 301. Le fichier
> `public/_redirects` existe depuis le commit `4d94243` mais n'a jamais été actif,
> car c'est un format Netlify / Cloudflare. Résultat mesuré : `/fr/`,
> `/fr/solutions/`, `/concept/` renvoient **404** au lieu de 301.

Tout se fait depuis une interface web. Aucune commande à taper.

---

## État réel au 9 octobre 2026, après vérification

Le mode opératoire a d'abord été écrit en supposant qu'il fallait créer le
projet Cloudflare. **C'est déjà fait.** Vérifié sur la pull request : le projet
`site-meridian-architecture` est connecté au dépôt, construit à chaque commit,
et publie une prévisualisation.

| Élément | État |
|---|---|
| Projet Cloudflare Pages connecté au dépôt | ✅ existe (`site-meridian-architecture`) |
| Build automatique sur chaque commit | ✅ fonctionne |
| `public/_redirects` — 9 règles de 301 | ✅ **testées sur le déploiement réel, toutes en 301** |
| `public/_headers` — cache et sécurité | ✅ corrigé après test (voir plus bas) |
| `astro.config.mjs` — `site` = domaine final | ✅ aucun changement requis |
| `.nvmrc` — Node 20 | ✅ lu par Cloudflare |
| **Domaine `meridian-architecture.com`** | ❌ **sert encore depuis GitHub Pages** (`server: GitHub.com`) |

C'est la dernière ligne qui bloque : tant que le DNS pointe sur GitHub, aucune
redirection 301 n'est active en production. Vérifié à l'instant : `/fr/` renvoie
toujours 404 sur le vrai domaine.

### Tests déjà passés sur la prévisualisation Cloudflare

Ce sont les tests de l'étape 2 ci-dessous. Ils ont été exécutés sur
`claude-amazing-shannon-1m1mf.site-meridian-architecture.pages.dev` :

```
/fr/              301 -> /                 /concept/      301 -> /solutions/
/fr               301 -> /                 /concept       301 -> /solutions/
/fr/solutions/    301 -> /solutions/        /en/concept/   301 -> /en/solutions/
/fr/outils/pim/   301 -> /outils/pim/       /en/concept    301 -> /en/solutions/
/fr/methode/      301 -> /methode/
/outils/pim/      200, canonical = https://meridian-architecture.com/outils/pim/
/styleguide/      200, noindex, follow, aucun canonical
/sitemap.xml      200, 34 <lastmod>
/page-inexistante/ 404
```

Rien à revérifier avant la bascule : il reste le domaine et le DNS.

### Un piège trouvé en testant, et corrigé

**Cloudflare Pages cumule toutes les règles `_headers` qui correspondent à une
URL.** Ce n'est pas « première règle gagnante » comme dans `_redirects`. Une
directive `Cache-Control` placée dans le bloc `/*` s'ajoutait donc à celles des
blocs spécifiques :

```
/fonts/*.woff2  cache-control: public, max-age=31536000, immutable,
                               public, max-age=0, must-revalidate
```

Un en-tête avec deux `max-age` est invalide, et le plus restrictif l'emporte en
pratique : polices et images n'étaient pas mises en cache du tout — pire que de
ne rien déclarer. Le bloc `/*` ne porte plus que les en-têtes de sécurité, et
l'avertissement est consigné en tête du fichier.

Cela n'aurait pas été visible en relisant le fichier. C'est l'argument pour
tester sur la plateforme plutôt que sur le code.

---

## Si le projet Cloudflare devait être recréé

1. **dash.cloudflare.com** → **Workers & Pages** → **Create** → onglet **Pages** → **Connect to Git**.
2. Autoriser Cloudflare sur le compte GitHub `hacquardvincent-oss`, puis choisir **`Site-Meridian-Architecture`**.

   | Champ | Valeur |
   |---|---|
   | Project name | `meridian-architecture` |
   | Production branch | **`claude/eloquent-goodall-Zehcn`** |
   | Framework preset | **Astro** |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | *(laisser vide)* |

   > ⚠️ **Il n'y a pas de branche `main` dans ce dépôt.** La branche par défaut,
   > et la seule effectivement déployée aujourd'hui, est
   > `claude/eloquent-goodall-Zehcn`. C'est elle qu'il faut déclarer comme
   > *production branch*.

3. **Variables d'environnement : aucune à ajouter.** `astro.config.mjs` utilise
   déjà `https://meridian-architecture.com` par défaut. N'ajoutez **surtout pas**
   `BASE_PATH` : il n'existe que pour le sous-dossier de GitHub Pages et casserait
   tous les chemins.

---

## Étape 2 — Vérifier sur l'URL `.pages.dev` AVANT de toucher au DNS

**Déjà fait** pour la branche de travail (résultats ci-dessus). À refaire une
fois la branche fusionnée, sur l'URL de production `.pages.dev`, avant de
toucher au DNS. C'est l'étape qui évite toute coupure.

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

État réel du dépôt au 9 octobre 2026 :

```
claude/amazing-shannon-1m1mfw        <- branche de travail, porte les correctifs
claude/eloquent-goodall-Zehcn        <- branche par défaut, c'est elle qui est déployée
claude/positionnement-trois-marches
```

**La branche `main` n'existe pas.** Le workflow
`.github/workflows/deploy.yml` se déclenche sur `main` *et* sur
`claude/eloquent-goodall-Zehcn` : seule la seconde condition sert réellement.

À retenir :

- La *production branch* de Cloudflare doit être **`claude/eloquent-goodall-Zehcn`**.
- Les correctifs ne seront en ligne qu'une fois fusionnés dans cette branche.
- À terme, renommer la branche par défaut en `main` clarifierait l'ensemble —
  le workflow est déjà écrit pour l'accepter. À faire à froid, pas pendant la
  migration.
