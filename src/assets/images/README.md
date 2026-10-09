# Photographies du site

Les photos vivent **ici**, dans `src/assets/images/`, et plus dans `public/images/`.

## Pourquoi ce déplacement

Une image dans `public/` est servie telle quelle : le JPEG d'origine, sans
dimensions déclarées dans le HTML. Mesuré avant correction sur la page
d'accueil : **687 Ko** pour `hero.jpg`, chargés à l'identique sur un téléphone
et sur un écran 27 pouces, et aucun attribut `width`/`height` sur les 8 images
du site — donc du décalage de mise en page au chargement (CLS).

Importée depuis `src/assets/`, la même image passe par le pipeline d'Astro :
conversion en WebP, génération d'un `srcset` de 640 à 2000 px, et injection
automatique de `width` et `height`.

| | Avant | Après |
|---|---|---|
| Chemin critique de l'accueil, mobile | 737 Ko | **95 Ko** (−87 %) |
| Chemin critique de l'accueil, desktop | 737 Ko | **338 Ko** (−54 %) |
| Images avec `width`/`height` | 0 / 8 | **8 / 8** |

## Ajouter ou remplacer une photo

1. Déposer le fichier ici, en `.jpg`, **2400 px de large minimum** pour une
   photo plein cadre (le pipeline réduit, il n'agrandit jamais).
2. Déclarer l'import dans `src/assets/images.ts`.
3. L'utiliser dans un composant :

```astro
import { Image } from 'astro:assets';
import { photos, fullBleedWidth, fullBleedWidths, FULL_BLEED_SIZES, PHOTO_QUALITY } from '../../assets/images';

<Image class="hero__img" src={photos.hero}
       width={fullBleedWidth(photos.hero)} widths={fullBleedWidths(photos.hero)}
       sizes={FULL_BLEED_SIZES} format="webp" quality={PHOTO_QUALITY}
       alt="" fetchpriority="high" loading="eager" decoding="async" />
```

## Deux pièges, vérifiés en production

- **`<Image>` met `loading="lazy"` par défaut.** Sur l'image la plus grande de
  l'écran d'accueil — celle que Google mesure comme LCP — c'est l'inverse de ce
  qu'on veut, et ça contredit un `fetchpriority="high"`. Toute photo visible
  sans faire défiler prend `loading="eager"` explicitement. Les bandeaux plus
  bas gardent `loading="lazy"`.
- **`decoding` reste sur `async` partout**, y compris sur le hero. `sync` est
  parfois conseillé pour l'image LCP, mais il fait décoder sur le thread
  principal : sur une variante de 288 Ko, c'est un risque réel sur l'INP pour
  un gain LCP marginal et débattu. `loading` et `fetchpriority` sont les deux
  leviers qui comptent ; `decoding` n'en est pas un.
- **`widths` ne pilote que le `srcset`.** Sans `width`, Astro génère aussi un
  `src` de repli à la taille de la source : 486 Ko que personne ne télécharge
  mais qui sont tout de même produits et déployés. D'où le `width` explicite.

## Fichiers actuellement utilisés

| Fichier | Où |
|---|---|
| `hero.jpg` | Accueil — hero plein cadre |
| `band.jpg` | Accueil — bandeau photo |
| `about.jpg` | À propos — hero |
| `contact.jpg` | Contact — hero |
| `method.jpg` | La méthode — hero |
| `home.jpg` | La méthode — bandeau photo |
| `solutions.jpg` | Le savoir-faire — hero |
| `concept-alt.jpg` | Le savoir-faire — bandeau photo |

## Droits

Privilégier des images **libres de droits ou vous appartenant**. Les photos de
listings immobiliers et de bâtiments signés sont sous droits, et le site est
une mise en ligne commerciale.
