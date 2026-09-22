# Structure de l'offre — la fiche

> **Marche : une tâche.** Première fiche écrite au gabarit de
> [`../POSITIONNEMENT.md`](../POSITIONNEMENT.md) § 6. Elle sert deux choses : montrer la
> réalisation, et **prouver que le gabarit tient** avant d'en écrire trois autres.
>
> **22 septembre 2026.** Tous les chiffres de la section « Ce qui est mesuré » sont
> rejoués par `mesurer.py`, livré avec le classeur. Un chiffre qu'on ne peut pas refaire
> est une affirmation.

---

## ⛔ État de publication — à lire avant de mettre en ligne

**Cette fiche n'est pas publiable en l'état.** Elle décrit le travail d'une maison dont
Vincent est salarié, et elle cite ses données d'exploitation.

| Ce qu'il faut | |
|---|---|
| **Un accord écrit de publication** | Il se demande, il ne se suppose pas |
| **À défaut — trois substitutions** | « une maison française de prêt-à-porter et maroquinerie » · les proportions plutôt que les volumes (« 86 % d'une colonne en erreur » plutôt que « 450 lignes sur 521 ») · aucune capture d'écran, aucun nom de référence, aucun code d'article |
| **Ce qui reste publiable sans rien demander** | La nature du problème, la raison pour laquelle personne ne l'avait automatisé, et la méthode de mesure. C'est déjà une fiche — plus courte, et qui tient |

---

## Le geste

Chaque saison, quelqu'un reprend à la main un export plat du système — une ligne par
référence-coloris — et le retourne en **matrice de présentation** : les produits en
colonnes, leurs attributs en lignes, groupés par catégorie commerciale. C'est le document
que lisent le merchandising et le commercial pour arbitrer une offre.

## Pourquoi personne ne l'avait automatisé

**Parce que la règle change chaque saison, et que personne ne sait l'écrire à l'avance.**

Une macro sait transposer un tableau. Elle ne sait pas :

- **découper en blocs de catégorie** quand le nombre de catégories, leur nom et leur ordre
  changent d'une saison à l'autre — *cabas coton*, *cabas lin*, *animations cabas textile*,
  *moon animation cuir*… ce sont des regroupements commerciaux, pas une colonne du fichier ;
- **décider ce qui monte en ligne et ce qui reste en colonne** selon la catégorie : un cabas
  et une trousse ne se présentent pas avec les mêmes attributs ;
- **reconnaître qu'une valeur est arrivée au mauvais endroit** — c'est exactement le défaut
  que la mesure ci-dessous a trouvé, et qu'aucune formule n'aurait signalé ;
- **rattraper un rapprochement qui a échoué** sans faire disparaître la ligne : une macro
  écrit `#N/A` et passe à la suivante.

> Une macro exécute des règles qu'on a su écrire.
> Ici, la règle est un jugement commercial qui se reprend à chaque saison.

## Ce qui a été construit

*(Section à compléter — voir « Ce qui n'est pas encore mesuré ».)*

Le principe retenu : **la transformation lit le fichier tel qu'il arrive**, reconstruit les
blocs de catégorie à partir du contenu plutôt que d'une position fixe, et **refuse de
produire une matrice dont un libellé ne décrit pas sa valeur** — le contrôle est dans la
chaîne, pas à côté.

## Ce qui est mesuré

*Classeur des accessoires, mesuré le 22/09/2026. Rejouable :* `python3 mesurer.py`.

### L'état du fichier produit à la main

| | |
|---|---:|
| Lignes de l'export source | **521** |
| Colonnes de l'export source | **13** |
| Matrice produite | **966 lignes × 49 colonnes** |
| Blocs de catégorie à reconstituer | **72** |
| Références placées dans la matrice | **373** |

### Les défauts que la mesure trouve

| Défaut | Mesure | Ce qu'il coûte |
|---|---:|---|
| **Les libellés sont décalés d'une ligne** | **373 valeurs sur 373** sous le libellé *prix de vente* sont un **code d'activité**, pas un prix | Le document se lit faux de bout en bout. La colonne *activité* manque dans les libellés, donc tout glisse à partir de là — et la dernière donnée, la quantité retail, **n'apparaît nulle part** |
| **Les quantités ne se rapprochent pas** | **86 %** de la colonne *quantité wholesale* et **66 %** de *quantité retail* sont en `#N/A` dans la source | Les arbitrages se font sur un tableau dont les deux tiers des quantités sont absents |
| **Les prix manquent en partie** | **13 %** de la colonne *prix de vente* en `#N/A` | — |
| **Les erreurs se propagent dans la matrice** | **653 cellules en erreur** — 334 `#N/A` et **319 `#VALUE!`** | Le `#VALUE!` n'existe pas dans la source : il **naît de la transformation elle-même** |
| **Un écart de périmètre non expliqué** | 521 références en source, **373** dans la matrice | 148 références sont hors matrice. Ce n'est pas nécessairement un défaut — mais rien dans le fichier ne dit pourquoi |

**Le premier défaut mérite qu'on s'y arrête, parce qu'il dit la thèse entière.** Le fichier
est *complet* : toutes les cellules sont remplies, aucune formule n'est cassée à cet
endroit, et un contrôle qui compte les cases vides l'aurait déclaré bon. Il est pourtant
**faux d'un bout à l'autre** — et il a fallu comparer le libellé de chaque ligne à la nature
de sa valeur pour le voir. C'est la même règle que sur les autres chantiers de la maison :

> Un contrôle doit mesurer ce qu'il affirme.
> Un vert qui ne mesure rien ment plus efficacement que l'absence de vert.

## Ce qui n'est pas mesuré

**Et il faut le lire avant le reste du tableau.**

| | |
|---|---|
| **Le temps gagné** | Non mesuré. Le temps que met une personne à produire la matrice **se chronomètre, il ne se déduit pas** — et c'est la seule mesure qui intéresse vraiment une direction. À faire sur la prochaine saison, montre en main |
| **L'après** | La transformation automatisée **n'a pas encore été mesurée sur ce fichier**. Les chiffres ci-dessus sont l'état de départ. Tant que la colonne « après » est vide, cette fiche décrit un problème, pas un résultat |
| **Les deux classeurs de saison** | 41 Mo et 82 Mo au format binaire `.xlsb`, non lus par l'outil de mesure. Seul le classeur des accessoires est chiffré ici |
| **Les formules** | Le classeur est lu en valeurs calculées. Une formule juste qui rend une valeur fausse n'est pas distinguée d'une valeur saisie |
| **Le taux d'erreur acceptable** | Aucun seuil n'a été convenu avec le métier. 86 % de quantités absentes est visiblement trop ; on ne sait pas dire à partir de quand c'est trop |

## Les mesures à produire pour que cette fiche soit complète

*Elles sont courtes, et ce sont elles qui transforment un constat en preuve.*

| # | La mesure | Comment |
|---|---|---|
| 1 | **Le temps, avant** | Chronométrer la production manuelle d'une matrice de saison |
| 2 | **Le temps, après** | Chronométrer la même sur le même fichier |
| 3 | **L'alignement, après** | Rejouer `mesurer.py` sur la matrice produite : le décalage doit tomber à **0 sur 373** |
| 4 | **Les erreurs nées de la transformation** | Les 319 `#VALUE!` doivent tomber à zéro — ils sont créés par la chaîne, donc ils dépendent d'elle |
| 5 | **Les rapprochements échoués** | Ils ne peuvent pas tomber à zéro — la donnée manque en amont. Mais ils doivent être **nommés** plutôt qu'écrits `#N/A` |
| 6 | **L'écart de périmètre** | Expliquer les 148 références, ou le faire disparaître |

---

## La marche

**Une tâche.** Un geste répété par une équipe, à chaque saison, sur un fichier.

Et ce qu'il annonce de la marche suivante : *les deux tiers des quantités manquent parce
que le rapprochement échoue en amont.* Automatiser la mise en forme ne les fera pas
apparaître. **C'est le cas d'école de l'escalier** — on entre par la tâche, on découvre que
le problème est une capacité, puis un système.

---

*Meridian Architecture · fiche de réalisation, gabarit v1.*
