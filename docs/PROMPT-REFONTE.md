# Refonte du site — le brief de la session

> À copier au premier message de la session qui refait le site.
> **22 septembre 2026.** L'axe a été validé par Vincent ; la première fiche de réalisation
> est écrite et mesurée. Ce document dit ce qui est arrêté, ce qui reste ouvert, et dans
> quel ordre travailler.

---

## Lis d'abord, dans cet ordre

1. **[`POSITIONNEMENT.md`](POSITIONNEMENT.md)** — le raisonnement complet : pourquoi le
   positionnement actuel ne tient pas, l'axe retenu, l'arborescence, le gabarit de fiche.
2. **[`realisations/structure-de-l-offre.md`](realisations/structure-de-l-offre.md)** — la
   première fiche, complète et chiffrée. **C'est la preuve que le gabarit tient.** Toute
   autre fiche se calque dessus.
3. `CADRAGE.md` et `BRANDING.md` — la direction artistique en place. **Elle ne change pas.**
   Cette refonte porte sur la structure et le discours, pas sur le style.

---

## 1. Ce qui est arrêté et ne se rediscute pas

### La frontière — la phrase d'accueil

> ### Une macro exécute des règles qu'on a su écrire.
> ### Ce qui change, c'est d'automatiser ce dont personne n'a su écrire les règles.

C'est la promesse du site. Elle remplace *« nous prototypons à l'IA les idées de vos
équipes »* et *« sans conduite du changement »*, qui décrivaient une méthode — invérifiable
avant d'acheter, et dite par tout le monde.

**Ne jamais écrire « fini les macros Excel ».** Ça vexe la personne qui a écrit la macro,
souvent la plus compétente de l'équipe et souvent dans la pièce.

### L'axe — la taille de ce qu'on automatise

| | **Une tâche** | **Une capacité** | **Un système** |
|---|---|---|---|
| Ce qu'on automatise | un geste répété par une équipe | ce que votre outil ne sait pas faire | ce qui ne circule pas entre vos outils |
| Qui décide | un responsable d'équipe | un responsable digital | la direction générale |
| Ordre de grandeur | quelques jours | quelques semaines | quelques mois |

**Trois marches, pas trois domaines.** C'est un escalier : chaque marche est une décision
plus engageante, et l'argument de vente en découle — *un prestataire de macro ne monte pas
au système, un intégrateur de système ne descend pas au classeur.*

### Le sol sous les trois — la preuve

> **Un contrôle doit mesurer ce qu'il affirme.
> Un vert qui ne mesure rien ment plus efficacement que l'absence de vert.**

Ce n'est pas un quatrième pilier : **c'est ce qui va sur l'accueil**, parce que c'est la
seule chose du site qu'un concurrent ne peut pas recopier le lendemain — il faudrait qu'il
l'ait fait.

**Corollaire non négociable** : chaque fiche porte des chiffres datés, rejouables, **et un
bloc « ce qui n'est pas mesuré »**. Une seule fiche sans chiffre ruine la promesse des
autres.

### L'arborescence

```
Accueil                         la frontière · les trois marches · la preuve
Ce que nous automatisons        remplace « L'offre », absorbe « Le concept »
   ancres : Une tâche · Une capacité · Un système
Réalisations                    remplace « Outils »
La méthode                      change d'objet : la discipline de mesure
À propos
Contact
```

**Cinq entrées au lieu de sept.** Aujourd'hui *le concept*, *l'offre* et *la méthode* disent
la même chose dans des mots différents — un visiteur ne sait pas laquelle ouvrir, donc il
n'en ouvre aucune.

Les trois marches sont des **ancres sur une page**, pas trois pages. Trois pages avec une
réalisation chacune se lisent comme un site vide ; une page avec trois marches et trois
preuves se lit comme un site dense. Même contenu, impression opposée.

---

## 2. L'état réel des preuves — et c'est ce qui fixe le calendrier

| Marche | Réalisation | État de la preuve | Publiable ? |
|---|---|---|---|
| **Une tâche** | **Structure de l'offre** | ✅ **Fiche écrite et mesurée** — 373 valeurs mal placées → **0**, 82 Mo traités en 3,8 s | ⛔ accord à obtenir |
| **Une capacité** | **Moteur de recherche** | ✅ Mesuré — vérité terrain **gelée** à empreinte SHA-256, 120 requêtes tirées de 29 730 réelles, position 1 **73,3 % → 90 %**. **Fiche à écrire** | ⛔ accord à obtenir |
| **Une capacité** | **Sites headless** | ⚠️ En production chez de vrais clients Meridian. Mesures à relever (Lighthouse, poids, parcours). **Fiche à écrire** | ✅ **oui** — ce sont les clients de Meridian |
| **Un système** | **PLM · PIM · DAM + middleware** | ✅ Mesuré — plan de collection **4 228 ms → 508 ms**, une saison traversée sur ses 12 maillons. **Fiche à écrire** | ⛔ accord à obtenir |

### ⚠️ La contrainte qui commande tout le calendrier

**Trois des quatre preuves viennent du même client, dont Vincent est salarié.** Elles citent
ses données d'exploitation. Il faut un accord écrit — il se demande, il ne se suppose pas.

**Donc : la version 1 du site doit tenir sans elles.**

Et elle le peut, parce que **les sites headless sont des clients de Meridian**, pas de cette
maison. C'est sur eux que repose la version 1 — d'où l'ordre de travail ci-dessous.

À défaut d'accord, chaque fiche a son repli, écrit dans son en-tête : *« une maison française
de prêt-à-porter et maroquinerie »*, les proportions plutôt que les volumes, aucune capture
reconnaissable. **Le rapport 373 → 0 reste publiable même anonymisé** : il ne dit rien du
catalogue.

### Et une interdiction de forme

**Ne nommer aucune marque produit** pour la brique PLM/PIM/DAM. Un nom déposé sur une page
publique est une revendication de propriété, et c'est précisément le point qui n'est pas
tranché.

---

## 3. Le gabarit d'une fiche — le même pour toutes

*Sinon la comparaison ne se fait pas. Modèle vivant :
[`realisations/structure-de-l-offre.md`](realisations/structure-de-l-offre.md).*

| Bloc | Contenu | Longueur |
|---|---|---|
| **Le geste** | Ce qui se faisait à la main | 1 ligne |
| **Pourquoi personne ne l'avait automatisé** | La règle qu'on ne savait pas écrire — **et la preuve qu'elle n'était écrite nulle part** | 3–6 lignes |
| **Ce qui a été construit** | Sans jargon, sans nom de technologie | 4–6 lignes |
| **Ce qui est mesuré** | Avant / après, avec la date et la commande qui le rejoue | un tableau |
| **Ce qui n'est pas mesuré** | Écrit noir sur blanc | 3–5 lignes |
| **La marche** | Tâche · Capacité · Système, et ce qu'elle annonce de la suivante | une étiquette |

**Le bloc « ce qui n'est pas mesuré » n'est pas une faiblesse : c'est la preuve que les
autres chiffres sont vrais.** Sur la première fiche, c'est *« cinq jours est un chiffre
déclaré par l'équipe, pas chronométré »* — l'aveu le plus utile de la page, parce que
personne n'écrit ça.

---

## 4. Ce qui reste ouvert, et qui te revient

| | |
|---|---|
| **Le titre de la page 2** | *« Ce que nous automatisons »* est une proposition, pas un arrêt. Le critère : un verbe, et la promesse dans le titre |
| **Le nom de la troisième marche** | *« Un système »* est juste mais froid. *« Votre système d'information »* est exact et lourd. À trancher à l'écriture |
| **La place de la preuve sur l'accueil** | Elle doit y être. Où exactement — quatrième temps, ou tressée dans les trois marches — se juge à la maquette |
| **Le sort de `/outils/[slug]`** | Le gabarit existe déjà et sert les fiches. Vérifier s'il se réemploie tel quel sous `/realisations/` |
| **Bilingue** | Les routes FR/EN existent (`src/i18n/routes.ts`). La frontière se traduit mal mot à mot — la version anglaise se réécrit, elle ne se traduit pas |

---

## 5. L'ordre de travail

1. **La page d'accueil, en cinq temps** — la frontière, les trois marches, une preuve
   chiffrée par marche, la règle de la maison, une seule action. C'est la page qui décide
   de tout le reste.
2. **Fusionner *concept* et *offre*** en une page à trois ancres, et renommer *Outils* en
   *Réalisations*.
3. **Écrire la fiche des sites headless** — c'est la seule publiable aujourd'hui sans rien
   demander, et c'est elle qui tient la marche « une capacité » en version 1.
4. **Relever ses mesures** avant de l'écrire : Lighthouse, poids, profondeur de parcours,
   culs-de-sac. Les instruments existent dans `agent-IA-test/templates/verifier-ecran/`.
5. **Préparer les trois autres fiches en version anonymisée**, prêtes à basculer en version
   nominative le jour où l'accord tombe.

**Ce qu'il ne faut pas faire** : ouvrir trois pages piliers tout de suite, et publier une
fiche sans chiffres « en attendant ». Les deux détruisent la promesse que le site vient de
faire.

---

## 6. Les preuves attendues à la livraison

Comme sur tout projet de la maison, un ✓ que tu te décernes ne vaut rien.

- [ ] Captures **1440 × 900** et **390 × 844**, réellement rendues
- [ ] Sorties brutes de `verifier-ecran.mjs`, `relever.mjs` et `parcourir.mjs`
- [ ] Score **Lighthouse mobile**, chiffré
- [ ] **Zéro chiffre sans source** sur l'ensemble du site — la règle s'applique au site
      lui-même, pas seulement à ce qu'il raconte
- [ ] La réponse écrite à : *cette page pourrait-elle servir à une autre agence en ne
      changeant que le logo ?*

« Non mesuré » est une réponse admise. « Conforme » sans preuve ne l'est pas.

---

*Meridian Architecture · brief de refonte, à remplacer plutôt qu'à corriger s'il est périmé.*
