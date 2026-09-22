# Structure de l'offre — la fiche

> **Marche : une tâche.** Première fiche écrite au gabarit de
> [`../POSITIONNEMENT.md`](../POSITIONNEMENT.md) § 6. Elle sert deux choses : montrer la
> réalisation, et **prouver que le gabarit tient** avant d'en écrire trois autres.
>
> **22 septembre 2026.** Tous les chiffres sont rejoués par l'outil lui-même
> (`so.py auditer`, `so.py verifier`). Un chiffre qu'on ne peut pas refaire est une
> affirmation.

---

## ⛔ État de publication — à lire avant de mettre en ligne

**Cette fiche n'est pas publiable en l'état.** Elle décrit le travail d'une maison dont
Vincent est salarié, et elle cite ses données d'exploitation.

| Ce qu'il faut | |
|---|---|
| **Un accord écrit de publication** | Il se demande, il ne se suppose pas |
| **À défaut — trois substitutions** | « une maison française de prêt-à-porter et maroquinerie » · les proportions plutôt que les volumes · aucune capture, aucun nom de référence, aucun code d'article |
| **Ce qui reste publiable sans rien demander** | La nature du problème, la raison pour laquelle personne ne l'avait automatisé, **le rapport 373 → 0**, et la méthode de contrôle. C'est déjà une fiche, et elle tient |

---

## Le geste

Chaque saison, quelqu'un reprend à la main un export plat du système — une ligne par
référence-coloris — et le retourne en **matrice de présentation** : les produits en
colonnes, leurs attributs en lignes, groupés par catégorie commerciale. C'est le document
que lisent le merchandising et le commercial pour arbitrer l'offre.

**Coût déclaré par l'équipe : cinq jours de travail par saison.**
*(Déclaré, non chronométré — voir « Ce qui n'est pas mesuré ».)*

## Pourquoi personne ne l'avait automatisé

**Parce que la règle de regroupement n'est écrite nulle part — et ce n'est pas une
impression, c'est vérifié sur le fichier.**

Les blocs de la matrice s'appellent *CABAS COTON*, *CABAS LIN*, *ANIMATIONS CABAS TEXTILE*,
*MOON CUIR*, *OTHILIA ANIMATIONS*… Aucune colonne de l'export ne les donne :

| Ce qu'on aurait pu croire | Ce que la mesure dit |
|---|---|
| « C'est l'activité » | Non — *CABAS COTON* et *CABAS LIN* ont la même : `CC1 : CABAS` |
| « C'est le préfixe de la référence » | Non — *CABAS COTON* et *TROUSSE COTON* partagent `0PVE01` |
| « C'est la matière » | La matière n'est dans **aucune** des treize colonnes |

S'y ajoute tout ce qu'une macro ne sait pas faire : rattraper un rapprochement qui a échoué
sans faire disparaître la ligne, reconnaître qu'une valeur est arrivée au mauvais endroit,
ou décider qu'un bloc est devenu trop large et doit se couper en deux.

> Une macro exécute des règles qu'on a su écrire.
> Ici, la règle est un jugement commercial, repris à chaque saison.

## Ce qui a été construit

Un outil en trois commandes — **auditer**, **générer**, **vérifier** — qui prend l'export
tel qu'il arrive.

**Il lit le vrai format de la maison.** Les classeurs de saison pèsent 41 et 82 Mo au format
binaire `.xlsb`. Exiger une conversion préalable aurait été déplacer d'un cran la ressaisie
qu'on prétend supprimer. Aucune colonne n'est attendue à une position donnée : les entêtes
sont normalisées puis rapprochées d'un vocabulaire. Un export dont l'ordre change ne casse
rien ; un export dont une colonne manque le dit.

**Il audite sur trois plans, et le troisième est celui qui manque partout** — complétude,
cohérence, puis **vraisemblance** : un prix nul, une quantité négative, ou une seule valeur
de prix sur tout un catalogue. Un contrôle de complétude déclare bon un fichier dont toutes
les cases sont remplies et fausses.

**Il range sans jamais jeter.** Il déduit la famille depuis le libellé, retrouve dans un
fichier de règles ce qui a déjà été décidé — la clé est l'*article*, donc ranger une fois
vaut pour tous les coloris — et **propose** pour le reste en le disant. Une référence non
rangée va dans un bloc `À RANGER` visible dans toutes les sorties.

**Il contrôle sa propre sortie avant d'écrire**, et refuse si le contrôle échoue.

**Il sort en Excel, PowerPoint et PDF.** Le classeur pour travailler, la présentation pour
le comité, le document pour laisser.

### La décision qui supprime le défaut plutôt que de le corriger

Dans la matrice faite à la main, les libellés de ligne et les valeurs venaient de deux
endroits différents : les libellés recopiés en tête de bloc, les valeurs collées ensuite.
Une colonne oubliée dans les libellés — *activité* — et tout glissait d'un cran.

Ici, **le libellé et la valeur sortent de la même liste ordonnée, dans la même boucle.**
Il n'y a plus deux sources à faire coïncider. Le décalage n'est pas rattrapé : il est
rendu impossible.

## Ce qui est mesuré

### Le contrôle d'alignement, posé sur les deux matrices par la même commande

*`so.py verifier`, sur le classeur des accessoires. La question : le libellé de cette ligne
décrit-il vraiment la valeur qu'on y trouve ?*

| | Valeurs mal placées | Références portées |
|---|---:|---:|
| **La matrice faite à la main** | **373 sur 1 492** | 373 |
| **La matrice produite par l'outil** | **0 sur 2 084** | **521** |

Les 373 valeurs mal placées étaient **100 %** de la ligne *prix de vente* : elle portait un
code d'activité, pas un prix. Et les **148 références** qui manquaient à la matrice faite à
la main y sont — aucune n'est perdue en route, l'outil le vérifie à chaque passage.

### Le temps de traitement

| Fichier | Poids | Ce qui est fait | Durée |
|---|---:|---|---:|
| Saison, par drop (`.xlsb`) | 41 Mo | lecture + audit | **0,1 s** |
| Saison, par catégorie (`.xlsb`) | 82 Mo | lecture, audit, matrice, **quatre sorties** | **3,8 s** |

### Ce que l'audit trouve dans les fichiers, et que personne ne voyait

| | Accessoires | Saison |
|---|---:|---:|
| Références lues | 521 | 699 – 701 |
| Lignes de séparation écartées **et comptées** | — | 107 |
| *Quantité wholesale* en erreur | **86 %** | 100 % vide |
| *Quantité retail* en erreur | **66 %** | **65 %** |
| *Prix de vente* en erreur | 13 % | **65 %** |
| Références à prix nul ou négatif | **4** | **7** |

**Ces défauts ne sont pas créés par l'outil : ils étaient déjà là.** La différence est
qu'ils sont maintenant comptés, nommés, et transportés dans une feuille d'audit qui voyage
avec le classeur — un chiffre sans sa réserve se recopie ailleurs et perd sa réserve en route.

### Trois défauts trouvés par le contrôle, pendant la construction

*Aucun n'aurait été vu à la relecture — et c'est le meilleur argument pour le contrôle.*

| | |
|---|---|
| **Le contrôle a refusé notre propre matrice** au premier classeur de saison : 910 valeurs `0x2a` là où un prix était attendu. La bibliothèque de lecture rendait les erreurs Excel sous leur code binaire, `0x2a` au lieu de `#N/A` — une cellule en erreur passait donc pour une valeur renseignée |
| **Les lignes de séparation comptaient comme des références** — un tiret dans la colonne SKU pour aérer à l'écran. Elles sont désormais écartées **et comptées**, jamais écartées en silence |
| **Le PDF ne sortait pas** : Chromium en ligne de commande échoue dans un conteneur sans dbus — il rend 2 et n'écrit rien, sans le dire |

## Ce qui n'est pas mesuré

**Et il faut le lire avant le reste.**

| | |
|---|---|
| **Le temps gagné** | **Cinq jours est un chiffre déclaré par l'équipe, pas chronométré.** Il se mesure montre en main sur une vraie saison, avant et après. C'est la seule mesure qui intéressera une direction, et c'est la seule qui manque |
| **Les regroupements réels** | Au premier passage, la famille seule donne des blocs trop larges — *CABAS* à 184 colonnes là où la maison en fait quatre. Le fichier de règles se remplit à l'usage ; **il n'a pas encore été rempli** |
| **La qualité des données en amont** | 86 % de quantités en erreur viennent d'un rapprochement qui échoue ailleurs. L'outil les compte ; il ne les répare pas, et rien ne dit à partir de quel taux c'est inacceptable |
| **L'adoption** | L'outil n'a pas encore été employé par l'équipe sur une saison entière |
| **Les formules** | Les classeurs sont lus en valeurs calculées |

## La marche

**Une tâche.** Un geste répété par une équipe, à chaque saison, sur un fichier.

Et ce qu'il annonce de la marche suivante : *les deux tiers des quantités manquent parce que
le rapprochement échoue en amont.* Retourner le tableau plus vite ne les fera pas apparaître.
**C'est le cas d'école de l'escalier** — on entre par la tâche, on découvre que le problème
est une capacité, puis un système.

---

*Meridian Architecture · fiche de réalisation, gabarit v1.*
