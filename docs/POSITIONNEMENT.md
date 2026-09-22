# Positionnement et arborescence — la révision de septembre 2026

> Écrit le 22 septembre 2026, à partir du mindset posé par Vincent : **automatiser ce qui
> ne pouvait pas l'être sans l'IA**, et des trois piliers qui s'en dégagent.
>
> Ce document remplace le positionnement porté aujourd'hui par `src/i18n/content.ts`
> (section `solutions`). Il dit ce qui change, pourquoi, et quelle arborescence en découle.

---

## 1. Le mindset est meilleur que le positionnement actuel — et voici pourquoi

Le site dit aujourd'hui : *« Nous prototypons à l'IA les idées de vos équipes »*,
*« sans conduite du changement »*, *« de l'idée à l'outil, sur-mesure »*.

**C'est une promesse de méthode.** Elle décrit comment Meridian travaille. Trois défauts :

- Elle est **invérifiable avant d'acheter**. Un prospect ne peut pas la tester contre sa
  propre situation.
- Elle est **dite par tout le monde**. En 2026, « propulsé par l'IA » et « sans conduite du
  changement » sont des mots de brochure, pas des arguments.
- Elle **ne dit pas à qui elle s'adresse**. « Les idées de vos équipes » vaut pour un
  directeur général comme pour une assistante de gestion.

**Le mindset, lui, est une promesse de frontière.** *Automatiser ce qui ne pouvait pas l'être
sans l'IA* nomme une limite qui vient de bouger. Un prospect peut immédiatement la tester
contre sa propre liste de « on n'a jamais pu ». C'est ce qui rend la phrase bonne : elle
provoque une question chez celui qui la lit.

---

## 2. Les trois piliers — ce qui cloche, et la réparation

### Le défaut : ils ne sont pas au même niveau logique

| Pilier | Ce qu'il nomme en réalité |
|---|---|
| Automatiser vos besoins métiers | un **type de livrable** — remplacer une tâche faite à la main |
| Accélérer sur le digital | un **domaine** — le e-commerce, le site |
| Structurer l'entreprise | une **ampleur** — le système d'information |

Un type, un domaine, une ampleur. **Un prospect ne peut pas se situer** : un classeur
automatisé dans l'équipe e-commerce relève du 1 ou du 2 ? Un middleware qui automatise au
passage une tâche relève du 1 ou du 3 ? Trois portes qui se chevauchent valent moins qu'une.

### La réparation : une colonne vertébrale unique — *la taille de ce qu'on automatise*

Les trois piliers restent, avec leurs exemples. Ce qui change est l'axe qui les ordonne.

| | **Une tâche** | **Une capacité** | **Un système** |
|---|---|---|---|
| **Ce qu'on automatise** | un geste répété par une équipe | ce que votre outil ne sait pas faire | ce qui ne circule pas entre vos outils |
| **La preuve** | Structure de l'offre — un classeur transformé | Moteur de recherche — une fonction absente du site | PLM · PIM · DAM et le middleware vers l'ERP |
| **Qui décide** | un responsable d'équipe | un responsable digital | la direction générale |
| **Ordre de grandeur** | quelques jours | quelques semaines | quelques mois |
| **Ce que ça remplace** | des heures de ressaisie | un module qu'on aurait loué | un projet d'éditeur |

**Trois bénéfices immédiats de cet axe.**

**Le prospect se place tout seul.** Il sait si son problème est une tâche, une capacité ou un
système. C'est la seule chose qu'une page d'offre doit réussir.

**C'est un escalier, et donc un entonnoir commercial.** Chaque marche est une décision plus
engageante que la précédente — et la première se prend en séance. C'est exactement la logique
retenue sur le chiffrage PLM : *le lot de cadrage se vend seul, et il fait tomber
l'incertitude de tout ce qui suit.* Le site doit raconter la même chose que le devis.

**Aucun pilier ne se vend sans les autres, et c'est l'argument.** Celui qui automatise une
tâche découvre que la donnée manque en amont ; celui qui ajoute une capacité découvre qu'elle
doit parler à l'ERP. **Meridian est le seul à pouvoir suivre le client d'une marche à
l'autre** — un prestataire de macro ne monte pas au SI, un intégrateur de SI ne descend pas
au classeur.

---

## 3. « Sans l'IA » se dit mieux en ne disant pas « IA »

**« Fini les macros Excel » est un mauvais angle**, même si c'est vrai. Il positionne contre
un outil, et il vexe la personne qui a écrit la macro — souvent la plus compétente de
l'équipe, et souvent présente dans la pièce.

La bonne formulation dit la **frontière**, et elle est précise :

> ### Une macro exécute des règles qu'on a su écrire.
> ### Ce qui change, c'est d'automatiser ce dont personne n'a su écrire les règles.

C'est la définition exacte de « ce qui ne pouvait pas l'être sans l'IA », et elle se prouve
sur les trois piliers :

| Ce dont personne ne savait écrire les règles | Où c'est fait |
|---|---|
| Lire un classeur dont la structure change à chaque saison | Structure de l'offre |
| Rapprocher du texte libre d'un référentiel — « cabas L noir » de l'it-bag | Moteur de recherche |
| Juger qu'une donnée présente est **invraisemblable** — un poids à 0,5 kg pour 1 883 références | PIM |
| Traduire le vocabulaire d'une maison dans celui d'un ERP de vingt ans | Middleware Orli / Cegid |

**Aucune de ces quatre lignes ne se code en règles.** C'est ce qui rend la phrase défendable
plutôt que publicitaire — et c'est ce que la page d'accueil doit montrer en premier.

---

## 4. Ce qui manque au mindset, et qui est le vrai différenciateur

Dire « je fais ce que les autres ne peuvent pas » est une affirmation. Tout le monde en fait
une. **Ce que personne n'écrit sur son site, c'est comment il le prouve.**

Or c'est la signature réelle de Meridian, et elle est partout dans les dépôts :

| Chantier | Ce qui est mesuré, et publié |
|---|---|
| Moteur de recherche | **120 requêtes de vérité terrain gelée**, empreinte SHA-256, tirées de **29 730 recherches réelles** sur 90 jours. Position 1 : **73,3 % → 90 %**. Un réglage n'est conservé que s'il progresse **sans dégrader les requêtes gelées** |
| PLM | Plan de collection **4 228 ms → 508 ms**. Une saison traversée sur ses 12 maillons avec les comptes réels des métiers : 5 passent, 3 cassent — **et on le dit** |
| Sites | Un contrôle qui **refuse la page** tant qu'une police n'est pas chargée, qu'une hauteur déborde ou qu'un contraste tombe sous le seuil |

Et surtout, la règle qui les gouverne tous les trois :

> **Un contrôle doit mesurer ce qu'il affirme. Un vert qui ne mesure rien ment plus
> efficacement que l'absence de vert.**

**Ce n'est pas un quatrième pilier — c'est le sol sous les trois.** Et je le mettrais sur la
page d'accueil, pas dans « la méthode » : c'est la seule chose du site qu'un concurrent ne
peut pas recopier le lendemain, parce qu'il faudrait qu'il l'ait fait.

**Corollaire, et il doit être assumé** : si le site promet la preuve, alors chaque fiche de
réalisation porte des chiffres datés et sourcés, **y compris ce qui n'a pas été mesuré**. Une
seule fiche sans chiffre ruine la promesse des autres.

---

## 5. L'arborescence proposée

### Ce qu'il y a aujourd'hui

```
Accueil · Le concept · L'offre · Outils · La méthode · À propos · Contact
```

Sept entrées, dont **trois disent la même chose** — *le concept*, *l'offre* et *la méthode*
parlent toutes du prototypage à l'IA, dans des mots différents. Un visiteur ne sait pas
laquelle ouvrir, donc il n'en ouvre aucune. Et *Outils*, qui est ce qui ressemble le plus à
une preuve, arrive en quatrième position.

### Ce que je propose

```
Accueil
│   la frontière, les trois marches, et la preuve — en une page
│
Ce que nous automatisons          ← remplace « L'offre » et absorbe « Le concept »
│   ├── Une tâche                 ← pilier 1
│   ├── Une capacité              ← pilier 2
│   └── Un système                ← pilier 3
│
Réalisations                      ← remplace « Outils »
│   ├── Structure de l'offre
│   ├── Moteur de recherche
│   ├── PLM · PIM · DAM
│   ├── Sites headless
│   └── …
│
La méthode                        ← comment on prouve, et ce qu'on refuse de livrer
À propos
Contact
```

**Cinq entrées au lieu de sept.**

| Décision | Motif |
|---|---|
| **« Le concept » disparaît** | Son contenu est la frontière, et elle appartient à l'accueil. Une page « concept » est une page qu'on lit quand on hésite — or on hésite moins avec trois marches qu'avec un concept |
| **« L'offre » devient « Ce que nous automatisons »** | Un verbe plutôt qu'un nom. Et le titre porte déjà la promesse |
| **« Outils » devient « Réalisations »** | **Un outil sans client n'est pas une preuve.** Le mot « outils » vend un catalogue ; « réalisations » vend un résultat chez quelqu'un |
| **« La méthode » reste, mais change d'objet** | Elle ne raconte plus le prototypage — elle raconte **la discipline de mesure** : la vérité terrain gelée, le contrôle qui refuse, ce qu'on écrit comme non mesuré |
| Les trois piliers sont des **ancres**, pas des pages | Trois pages diluent. Une page qui se parcourt donne l'escalier d'un seul regard. Elles deviendront des pages le jour où chacune aura trois réalisations à montrer |

### La page d'accueil, en cinq temps

1. **La frontière** — la phrase sur la macro, et rien d'autre à l'écran.
2. **Les trois marches** — tâche, capacité, système, avec l'ordre de grandeur et qui décide.
3. **Une preuve chiffrée par marche** — un chiffre, sa date, et le lien vers la fiche.
4. **La règle de la maison** — « un contrôle doit mesurer ce qu'il affirme », et ce qu'on
   refuse de livrer.
5. **Une seule action** — parler d'un cas précis, pas « nous contacter ».

---

## 6. Le gabarit d'une fiche de réalisation

C'est la pièce qui fait vivre tout le reste, et elle doit être **la même pour toutes**,
sinon la comparaison ne se fait pas.

| Bloc | Contenu | Longueur |
|---|---|---|
| **Le geste** | Ce qui se faisait à la main, en une phrase | 1 ligne |
| **Pourquoi personne ne l'avait automatisé** | La règle qu'on ne savait pas écrire | 2–3 lignes |
| **Ce qui a été construit** | Sans jargon, sans nom de technologie | 3–4 lignes |
| **Ce qui est mesuré** | Avant / après, avec la date et la méthode | un tableau |
| **Ce qui n'est pas mesuré** | Écrit noir sur blanc | 1–2 lignes |
| **La marche** | Tâche · Capacité · Système | une étiquette |

**Le bloc « ce qui n'est pas mesuré » n'est pas une faiblesse : c'est la preuve que les
autres chiffres sont vrais.** Sur le moteur de recherche, ce serait : *« l'impact commercial
— chiffre d'affaires par session avec recherche — n'a pas été mesuré ; c'est une autre
mesure, et elle reste à faire. »* Personne n'écrit ça, et c'est pour ça que ça se remarque.

---

## 7. ⚠️ Ce qui bloque la publication, et qu'il faut régler avant d'écrire une ligne

**Les trois meilleures preuves viennent du même client, et vous en êtes salarié.**

| | |
|---|---|
| **Accord** | Publier « moteur de recherche pour Vanessa Bruno » engage la maison. Il faut son accord écrit, et il se demande — il ne se suppose pas |
| **Les chiffres** | 29 730 recherches, 571 produits, le taux de position 1 : ce sont **ses** données d'exploitation. Même anonymisées, elles se publient avec accord |
| **Le repli** | À défaut : *« une maison française de prêt-à-porter et maroquinerie »*, les chiffres relatifs plutôt qu'absolus (les progressions, pas les volumes), et aucune capture d'écran reconnaissable |
| **Le calendrier** | Ces trois fiches sont les plus convaincantes du site. **Elles sont aussi celles qui ne peuvent pas sortir maintenant.** Prévoir une version 1 du site qui tient sans elles |

**Et un point de structure** : le pilier 3 décrit un produit qui a vocation à vivre dans une
autre société que Meridian. Tant que la frontière n'est pas posée, le site peut les porter
tous les deux — mais **ne nommez pas encore de marque produit**. Un nom déposé sur une page
publique est une revendication de propriété, et c'est précisément le point qui n'est pas
tranché.

---

## 8. Ce que je ferais, dans l'ordre

1. **Arrêter la phrase de frontière.** Tout le reste en découle, et elle tient en deux lignes.
2. **Écrire une seule fiche de réalisation**, complète, au gabarit du § 6 — celle qui est
   publiable sans accord, ou anonymisée. Elle sert de preuve que le gabarit tient.
3. **Refondre l'accueil** en cinq temps, avec les trois marches.
4. **Fusionner concept et offre** en une page, et renommer *Outils* en *Réalisations*.
5. **Demander l'accord de publication** pour les trois chantiers — en parallèle, pas avant :
   la demande est plus facile à porter quand on montre le gabarit fini.

**Ce que je ne ferais pas** : ouvrir trois pages piliers tout de suite. Trois pages avec une
réalisation chacune se lisent comme un site vide. Une page avec trois marches et trois
preuves se lit comme un site dense. C'est le même contenu, et ce n'est pas la même impression.

---

*Meridian Architecture · document de cadrage, à remplacer plutôt qu'à corriger s'il est périmé.*
