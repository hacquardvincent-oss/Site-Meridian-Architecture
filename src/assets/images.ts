import type { ImageMetadata } from 'astro';

/* =============================================================
   Photographies du site, importées comme assets Astro.

   Pourquoi ici et plus dans public/ : un asset importé passe par
   le pipeline d'Astro, qui le convertit en WebP, génère un srcset
   et injecte width/height dans le HTML. Un fichier laissé dans
   public/ est servi tel quel — 687 Ko de JPEG pour la photo
   d'accueil, et aucune dimension déclarée, donc du CLS.

   Les visuels encore dans public/images/ (concept.jpg) servent
   d'exemple aux emplacements à remplir de PageHero et Figure,
   qui acceptent un chemin public et restent inchangés.
   ============================================================= */

import hero from './images/hero.jpg';
import band from './images/band.jpg';
import about from './images/about.jpg';
import contact from './images/contact.jpg';
import method from './images/method.jpg';
import home from './images/home.jpg';
import solutions from './images/solutions.jpg';
import conceptAlt from './images/concept-alt.jpg';

export const photos = { hero, band, about, contact, method, home, solutions, conceptAlt };

/** Palier de largeurs pour un visuel plein cadre. */
const FULL_BLEED_STEPS = [640, 960, 1280, 1600, 2000] as const;

/**
 * Plafond volontaire à 2000 px, alors que les sources montent à 2400.
 * Ces photos sont décoratives : elles portent un voile sombre et du
 * texte par-dessus. À 2400 px, la variante WebP pèse 486 Ko contre
 * 288 Ko à 2000 px, pour une différence invisible sous le voile.
 * Le mobile, lui, prend la variante 640 ou 960 — 18 à 45 Ko.
 */
const FULL_BLEED_MAX = 2000;

/**
 * Largeurs de srcset pour un visuel plein cadre.
 * On ne dépasse jamais la largeur de la source : agrandir un JPEG
 * ne fait qu'alourdir le fichier sans rien ajouter.
 */
export function fullBleedWidths(img: ImageMetadata): number[] {
  const steps = FULL_BLEED_STEPS.filter((w) => w < fullBleedWidth(img));
  return [...steps, fullBleedWidth(img)];
}

/**
 * Largeur du `src` de repli, à passer en `width` au composant Image.
 * Sans cela, Astro génère le repli à la taille de la source : `widths`
 * ne pilote que le srcset. Aucun navigateur moderne ne télécharge ce
 * repli — mais il est tout de même produit et déployé, soit 1,2 Mo de
 * fichiers morts sur les trois plus grandes photos.
 */
export function fullBleedWidth(img: ImageMetadata): number {
  return Math.min(img.width, FULL_BLEED_MAX);
}

/** Ces visuels couvrent toute la largeur du viewport, sans exception. */
export const FULL_BLEED_SIZES = '100vw';

/**
 * Qualité WebP. 72 est suffisant pour des photos de fond portant un
 * voile sombre et du texte par-dessus ; monter plus haut alourdit
 * sans différence visible à cette taille d'affichage.
 */
export const PHOTO_QUALITY = 72;
