# Meridian Architecture — repères de marque & recommandations

Document vivant. État de l'identité actuelle + pistes pour la renforcer.

> **Pages vivantes du site** : charte complète → `/styleguide` · concepts de logo → `/brand`.

## 1. Essence

**« Le logiciel comme architecture. »** On bâtit des écosystèmes logiciels sur-mesure,
propulsés par l'IA. L'univers visuel dit **architecture / luxe / précision** — la tech se
**devine** (elle n'est jamais criée). Différenciation clé : on ne ressemble pas à une *startup tech*.

## 2. Logo

**Aujourd'hui :** un mark géométrique (axe « méridien » + anneau + ticks de coordonnées) avec
un **point bleu pastel** au centre. Moderne, sobre, ownable. ✔️ Bonne base.

**Recommandations**
- En faire un **système** : (a) lockup complet *mark + « Meridian Architecture »*, (b) compact
  *mark + « Meridian »*, (c) **mark seul** (favicon, avatar, app), (d) **monogramme « M »** géométrique.
- Définir **zone de protection** (= hauteur du mark autour) et **taille minimale** (mark ≥ 20 px).
- Le **point bleu pastel** = la « signature couleur » : un seul point de couleur, à garder partout
  (favicon, curseur d'accent, puce de liste, état actif…). C'est le détail qui rend la marque reconnaissable.
- Exports propres en **SVG** (je peux générer `/public/brand/` : logo, mark, monogramme, versions noir/blanc).

## 3. Couleur

| Rôle | Valeur |
|---|---|
| Fond | Blanc `#ffffff` |
| Texte | Noir `#0e0e10` |
| Gris (secondaire / lignes) | `#43454a` · `#8a8d93` · filets `#e4e5e7` |
| **Accent (animations/détails seulement)** | **Bleu pastel `#9db8dd`** |

**Règles**
- Le bleu pastel **ne sert jamais à de grands aplats ni à du texte courant** — uniquement traits,
  états au survol, points, tracés animés. C'est ce qui garde la marque « non-tech ».
- Accessibilité : `#9db8dd` n'a pas un contraste suffisant pour du **texte** sur blanc → le réserver
  au décoratif. Pour un éventuel texte d'accent, utiliser un bleu plus profond (`#6f93c4` ou l'encre).

## 4. Typographie

**Hanken Grotesk** (une seule famille). Hiérarchie par **taille + graisse** (300 → 700), pas par
multiplication de polices. Surtitres en **capitales lettrées** (sans mono = moins « tech »).
Optionnel plus tard : un display plus signature pour les très grands titres (à licencier).

## 5. Langage graphique (le vrai capital de marque)

Le système géométrique est **distinctif et cohérent** — c'est lui qui fait l'identité :
- **Structures isométriques filaires** (l'« édifice »), **glyphes par domaine**, **pictos** de cartes,
  **compositions déstructurées** (fragments, arcs, plans).
- Motif récurrent : l'**axe vertical « méridien »** + le **point bleu pastel**.
- Détail signature : les **coordonnées** (`40.71°N 74.00°W`) et les **ticks d'angle** (codes de plan).

**Règles** : traits fins **1,2–1,4 px**, couleur **encre (currentColor)**, **un seul** accent pastel par
composition, formes **décalées / déstructurées**, beaucoup de **blanc**.

## 6. Mouvement

Signature : **les lignes se dessinent** (tracé), un **nœud bleu pastel s'allume**. Easing lent,
« architectural ». Micro-interactions discrètes (survol = souligné/léger glissement). À garder homogène partout.

## 7. Images & vidéos (quand tu en ajouteras)

Le site est **graphique** par défaut (zéro dépendance photo). Si tu ajoutes des médias :
- **Vidéo hero** : plan **lent, abstrait, architectural** (façade, lumière, intérieur NY), muet, court.
- **Photos** : calmes, géométriques ; appliquer un **traitement homogène** (léger désaturé / grade froid,
  voire duotone vers l'encre) pour qu'elles se fondent dans le blanc/noir/pastel.
- Toujours privilégier des médias **libres de droits ou t'appartenant**.

## 8. À produire ensuite (pistes)

- **Image de partage** (Open Graph, 1200×630) déclinant le langage graphique.
- **Page styleguide** sur le site (`/styleguide`) : couleurs, typo, logo, glyphes, pictos — vivante.
- **Modèles** : signature e-mail, gabarit de présentation (deck), entête de document — même système.
- **Exports logo** SVG/PNG dans `/public/brand/`.

## 9. Voix

Calme, précise, confiante — **un architecte, pas un vendeur**. Vocabulaire de l'architecture
(plan, structure, édifice, fondations, sur-mesure). La tech en filigrane.

## 10. Évolution « v2 » — Site & présentations (photographie)

La charte **documents** reste inchangée (elle fonctionne). Pour le **site et les présentations**,
expression plus **moderne et graphique**, inspiration **Guggenheim** :

- **Photographie d'architecture N&B** (courbes, spirales, lumière), **plein cadre**, gradée en
  **B&W contrasté** (ou duotone encre→bleu). Sujets calmes, sculpturaux : béton, escaliers, atriums.
- **Un seul accent** : le **point bleu pastel `#9db8dd`** sur le N&B. Rien d'autre en couleur.
- **Mise en page « musée »** : titres géants (Hanken), grand vide, **voile latéral** pour la lisibilité ;
  détails **coordonnées** (`40.71°N`) + **ticks d'angle** conservés.
- **Droits** : uniquement des images **libres de droits** (Pexels/Unsplash) ou à soi.
- Le langage géométrique droit (axe/ticks/iso) devient un **accent discret** par-dessus la photo.

Hero du site : `public/images/hero.jpg` (image gradée, ~contraste 1.25). Pour changer d'image :
remplacer ce fichier et rebuild.
