# Accueil — le relevé

> **22 septembre 2026.** Refonte de la page d'accueil au gabarit de
> [`../POSITIONNEMENT.md`](../POSITIONNEMENT.md) et de
> [`../PROMPT-REFONTE.md`](../PROMPT-REFONTE.md). Branche
> `claude/positionnement-trois-marches`.
>
> On applique à notre propre site la règle qu'on vend : **un contrôle doit
> mesurer ce qu'il affirme.** Tout ce qui suit est relevé par les instruments de
> la maison (`agent-ia-test/templates/verifier-ecran/`), pas jugé à l'œil. Ce qui
> n'est pas mesuré est nommé comme tel.

---

## Ce qui a été construit — cinq temps

| # | Temps | Ce qu'il dit | Panneau |
|---|-------|--------------|---------|
| 01 | **La frontière** | « Une macro exécute des règles qu'on a su écrire. Ce qui change, c'est d'automatiser ce dont personne n'a su écrire les règles. » | Hero plein cadre, photo étalonnée |
| 02 | **Les trois marches** | Une tâche → une capacité → un système. Pas trois domaines : un escalier, ordonné par l'ampleur de ce qu'on automatise. | Paper, escalier littéral (chaque marche s'avance) |
| 03 | **La preuve** | Un chiffre par marche, daté, rejouable. **373 → 0** ; les deux autres en « relevé en cours » / « accord à obtenir ». | Alt, trois colonnes |
| 04 | **La règle** | « Un vert qui ne mesure rien ment plus efficacement que l'absence de vert. » | Bandeau photo plein cadre |
| 05 | **Une seule action** | Échangeons sur votre cas. | CTA sombre |

La preuve **ne montre pas trois verts**. Elle montre un chiffre tenu (373 → 0),
un relevé en cours et un accord à obtenir — l'état réel, écrit, plutôt qu'un vert
qui mentirait.

---

## Le relevé — `verifier-ecran.mjs` (1440 px et 390 px)

**Tout est vert, sauf trois constats qui ne sont pas des défauts du site :**

| Contrôle | Résultat |
|---|---|
| Entrée en matière (la page bouge entre 0 et 800 ms) | ✓ |
| Cadres vides | ✓ 0 % |
| Appel à l'action générique (« en savoir plus »…) | ✓ aucun |
| Débordement horizontal | ✓ aucun |
| Contrastes AA du corps de page | ✓ (voir défaut corrigé plus bas) |

Trois ❌ restent au rapport — chacun expliqué, aucun n'est un défaut à corriger sur la page :

1. **« contrastes sous AA — 1.00:1 » sur les liens du header.** L'instrument lit
   le fond CSS calculé (transparent → blanc) contre un texte clair ; il ne sait
   pas échantillonner la photo qui passe dessous. Le contraste réel vient du
   voile (`hero__scrim`) et de la photo sombre. *Limite : c'est vrai pour la
   photo actuelle ; un voile de sécurité derrière le header le garantirait quelle
   que soit la photo — décision ouverte (voir plus bas).*
2. **« aucun lien tel: / prise de rendez-vous ».** Choix : cabinet de conseil,
   contact par mail et formulaire, pas de numéro publié. L'instrument est
   opiniâtre vers le CTA « réserver » ; c'est une décision, pas une faute.
   *Décision ouverte : veut-on un lien d'appel ?*
3. **« erreurs JavaScript ».** Il en restait deux, il en reste **une**, et elle
   est extérieure au site : le proxy du bac à sable bloque
   `googletagmanager.com` (Google Analytics 4, en Consent Mode). Sur le
   déploiement réel, le script se charge. L'autre erreur — Google Fonts — a été
   **supprimée** en auto-hébergeant la police (voir plus bas).

Poids transféré : **~183 Ko / 13 requêtes** (dont la typo auto-hébergée, 84 Ko).

## Le relevé — `relever.mjs` (mesurer le plafond, pas seulement le plancher)

| Grandeur | Valeur | Lecture |
|---|---|---|
| Comportements de section distincts | **4** | Un empilement plat vaudrait 1. |
| Moments plein cadre | **2** | La frontière et la règle. |
| Rapport d'échelle typographique | **4.3:1** | Corps 18 px → 77 px. Éditorial, pas plat. |
| Éléments animés | 4 | `panelRecede` (recul au défilement), Lenis. |

---

## Deux défauts trouvés par l'instrument, et corrigés — datés

1. **Contraste des libellés sous AA (22/09).** La couleur `--stone` (légendes,
   libellés de preuve, sources) mesurait **3,05:1** sur les fonds clairs — sous
   4,5:1. Un libellé qu'on ne peut pas lire est un défaut, pas un parti pris.
   `--stone` : `#8a8d93` → `#676a71` (même gris froid, ≥ 4,5:1 sur blanc **et**
   sur le fond alterné). Re-mesuré : le défaut a disparu. Corrige tout le site.
   *(commit `étalonnage AA de la couleur des légendes`)*
2. **Police tributaire d'un CDN (22/09).** Hanken Grotesk venait de Google Fonts :
   requête tierce, rendu dépendant du réseau, captures infidèles en environnement
   filtré, et une erreur console. Auto-hébergée en woff2 (84 Ko, graisses
   300–700), `@font-face` émis dans le `<head>` avec le préfixe de base,
   400/500 préchargées. *(commit `auto-héberger Hanken Grotesk`)*

---

## Ce qu'il faut dire à la main — les instruments ne le mesurent pas

- **Le point focal.** La deuxième ligne de la frontière —
  « **Ce qui change, c'est d'automatiser ce dont personne n'a su écrire les
  règles.** » — en grand, en blanc, sur la photo. C'est là que l'œil se pose ;
  tout le reste est en retrait (ligne A en gris, header discret).
- **Les trois états dessinés.** L'accueil est une page éditoriale statique : pas
  d'état de chargement asynchrone ni d'erreur réseau à dessiner. Les « trois
  états » de la maison se lisent ici dans **la preuve** : un chiffre tenu
  (`373 → 0`), un **relevé en cours** (la capacité), un **accord à obtenir** (le
  système). Le vide et le pas-encore sont dessinés — pas cachés.
- **Le test de substitution — cette page servirait-elle à une autre agence en ne
  changeant que le logo et les textes ? Non.** Elle repose sur des preuves
  propres à Meridian (le `373 → 0` daté et rejouable, les deux emplacements de
  preuve laissés honnêtement vides) qu'une agence générique ne pourrait pas
  remplir. Et la frontière est une thèse précise, pas une accroche
  interchangeable. La page le dit elle-même, dans la règle : *« la seule chose
  sur ce site qu'un concurrent ne peut pas copier demain — il lui faudrait
  l'avoir fait. »*
- **Le score Lighthouse mobile — non mesuré ici.** Lighthouse n'est pas installé
  dans cet environnement, et le proxy y bloque Google Analytics : un score local
  mesurerait le bac à sable, pas le site. **À relever sur le déploiement réel**
  (`meridian-architecture.com`) via Lighthouse / PageSpeed. Tant qu'il n'est pas
  relevé, on ne l'affirme pas.

---

## Décisions ouvertes — pour Vincent

- **L'URL du site headless** (client Meridian) : nécessaire pour transformer la
  preuve « capacité » de *relevé en cours* en chiffre tenu (Lighthouse, poids,
  parcours mesurés par les instruments).
- **Le consentement de publication** pour la preuve « système » (PLM · PIM · DAM)
  et pour les trois autres fiches : il se demande, il ne se suppose pas.
- **Un lien d'appel** (`tel:`) ou de prise de rendez-vous : le voulons-nous, ou
  reste-t-on mail + formulaire ?
- **Un voile de sécurité derrière le header** pour garantir la lisibilité de la
  navigation quelle que soit la photo (au-delà de la photo actuelle).

> **Pas de fusion vers `main` sans l'accord de Vincent.**
