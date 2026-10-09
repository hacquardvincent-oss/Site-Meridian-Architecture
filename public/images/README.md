# `public/images/` — emplacements à remplir

**Les photographies du site ne sont plus ici.** Elles vivent dans
`src/assets/images/`, pour passer par le pipeline d'optimisation d'Astro
(WebP, `srcset`, `width`/`height` automatiques). Voir le README de ce dossier.

Ce dossier ne sert plus qu'aux composants qui acceptent un **chemin public**
pour un emplacement photo non encore rempli : le hero photo de `PageHero.astro`
et le composant `Figure.astro`. Tant que le fichier est absent, ils affichent
un placeholder ; déposer le fichier au bon nom l'active, sans optimisation.

| Fichier | État |
|---|---|
| `concept.jpg` | **Non utilisé par aucune page.** Conservé comme exemple pour la prop `image` de `PageHero`. À supprimer si cette prop ne sert jamais. |

Une image servie depuis ce dossier n'est **ni convertie en WebP, ni
redimensionnée, ni dotée de `width`/`height`**. Dès qu'un emplacement est
vraiment utilisé, déplacer le fichier dans `src/assets/images/` et le passer
en `<Image>`.
