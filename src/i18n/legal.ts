import type { Locale } from './routes';

/* =============================================================
   Pages légales : Mentions légales + Politique de confidentialité.
   Adaptées au statut « société en cours de constitution » (les
   identifiants définitifs — SIREN, forme, capital — seront portés
   à l'immatriculation). À faire valider par un professionnel.
   ============================================================= */

export interface LegalSection { title: string; paras?: string[]; bullets?: string[] }
export interface LegalDoc {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lead: string };
  updated: string;
  sections: LegalSection[];
}

const EMAIL = 'vincent@meridian-architecture.com';

const frMentions: LegalDoc = {
  meta: { title: 'Mentions légales — Meridian Architecture', description: 'Mentions légales du site meridian-architecture.com : éditeur, hébergeur, propriété intellectuelle, responsabilité.' },
  hero: { eyebrow: 'Informations légales', title: 'Mentions légales', lead: 'Informations relatives à l’éditeur et à l’hébergeur du site meridian-architecture.com.' },
  updated: 'Dernière mise à jour : juillet 2026.',
  sections: [
    { title: 'Éditeur du site', paras: [
      'Meridian Architecture — société en cours de constitution (forme juridique, capital social et numéros d’identification portés à l’immatriculation, prévue fin 2026), représentée par M. Vincent Hacquard, fondateur.',
      'Siège : 9 Grande Rue, 92310 Sèvres, France. Contact : ' + EMAIL + '. SIREN : en cours d’immatriculation.',
    ] },
    { title: 'Directeur de la publication', paras: ['M. Vincent Hacquard.'] },
    { title: 'Hébergeur', paras: [
      'Le site est hébergé par GitHub, Inc. (GitHub Pages), 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis — pages.github.com.',
    ] },
    { title: 'Propriété intellectuelle', paras: [
      'L’ensemble des contenus du site (textes, visuels, identité de marque, code) est la propriété de Meridian Architecture ou de ses ayants droit, sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable, est interdite.',
    ] },
    { title: 'Responsabilité', paras: [
      'Les informations publiées sont fournies à titre indicatif et peuvent évoluer sans préavis. Meridian Architecture ne saurait être tenue responsable des liens externes ni de l’usage fait des informations du site.',
    ] },
    { title: 'Droit applicable', paras: [
      'Le présent site est soumis au droit français. Tout litige relatif à son utilisation relève de la compétence des tribunaux français.',
    ] },
    { title: 'Données personnelles', paras: [
      'Le traitement de vos données personnelles est décrit dans notre Politique de confidentialité.',
    ] },
  ],
};

const frPrivacy: LegalDoc = {
  meta: { title: 'Politique de confidentialité — Meridian Architecture', description: 'Comment Meridian Architecture collecte et traite vos données personnelles : formulaire de contact, mesure d’audience, cookies, et vos droits (RGPD).' },
  hero: { eyebrow: 'Vos données', title: 'Politique de confidentialité', lead: 'Comment nous collectons, utilisons et protégeons vos données personnelles, dans le respect du RGPD.' },
  updated: 'Dernière mise à jour : juillet 2026.',
  sections: [
    { title: 'Responsable du traitement', paras: [
      'Meridian Architecture (société en cours de constitution), représentée par M. Vincent Hacquard — 9 Grande Rue, 92310 Sèvres. Pour toute question : ' + EMAIL + '.',
    ] },
    { title: 'Données collectées et finalités', paras: ['Nous collectons uniquement les données nécessaires aux finalités suivantes :'], bullets: [
      'Formulaire de contact : nom, e-mail, entreprise, secteur et message — pour répondre à votre demande. Base légale : votre consentement / mesures précontractuelles.',
      'Mesure d’audience (Google Analytics 4) : données de navigation (pages vues, type d’appareil, source de trafic), uniquement si vous y consentez via le bandeau. Base légale : votre consentement.',
    ] },
    { title: 'Cookies et consentement', paras: [
      'Le site utilise des cookies de mesure d’audience (Google Analytics 4). Par défaut, aucun cookie de mesure n’est déposé : le consentement est demandé via un bandeau, et rien n’est collecté tant que vous n’avez pas accepté (Consent Mode). Vous pouvez refuser sans conséquence sur l’usage du site, et revenir sur votre choix en effaçant les données de navigation de votre navigateur.',
    ] },
    { title: 'Destinataires et transferts', paras: [
      'Vos données peuvent être traitées par nos sous-traitants techniques : Google (mesure d’audience) et GitHub (hébergement), situés aux États-Unis. Ces transferts hors Union européenne sont encadrés par les garanties appropriées (clauses contractuelles types).',
    ] },
    { title: 'Durée de conservation', bullets: [
      'Données de contact : le temps de traiter votre demande, puis archivage dans une limite raisonnable.',
      'Données de mesure d’audience : 14 mois au maximum.',
    ] },
    { title: 'Vos droits', paras: ['Conformément au RGPD, vous disposez des droits d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité, ainsi que du droit de retirer votre consentement à tout moment.'], bullets: [
      'Pour exercer vos droits : ' + EMAIL + '.',
      'Vous pouvez également introduire une réclamation auprès de la CNIL (cnil.fr).',
    ] },
    { title: 'Évolution de la politique', paras: [
      'Cette politique peut être mise à jour. La date de dernière mise à jour est indiquée ci-dessus.',
    ] },
  ],
};

const enMentions: LegalDoc = {
  meta: { title: 'Legal notice — Meridian Architecture', description: 'Legal notice for meridian-architecture.com: publisher, host, intellectual property, liability.' },
  hero: { eyebrow: 'Legal information', title: 'Legal notice', lead: 'Information about the publisher and host of the meridian-architecture.com website.' },
  updated: 'Last updated: July 2026.',
  sections: [
    { title: 'Publisher', paras: [
      'Meridian Architecture — a company in the process of incorporation (legal form, share capital and registration numbers to be added at incorporation, expected end of 2026), represented by Mr Vincent Hacquard, founder.',
      'Registered office: 9 Grande Rue, 92310 Sèvres, France. Contact: ' + EMAIL + '. Company number: registration pending.',
    ] },
    { title: 'Publication director', paras: ['Mr Vincent Hacquard.'] },
    { title: 'Host', paras: [
      'The site is hosted by GitHub, Inc. (GitHub Pages), 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA — pages.github.com.',
    ] },
    { title: 'Intellectual property', paras: [
      'All content on this site (text, visuals, brand identity, code) is the property of Meridian Architecture or its rights holders, unless otherwise stated. Any reproduction, representation or distribution, in whole or in part, without prior written permission, is prohibited.',
    ] },
    { title: 'Liability', paras: [
      'The information published is provided for information only and may change without notice. Meridian Architecture cannot be held liable for external links or for the use made of the site’s information.',
    ] },
    { title: 'Governing law', paras: [
      'This site is governed by French law. Any dispute relating to its use falls under the jurisdiction of the French courts.',
    ] },
    { title: 'Personal data', paras: [
      'The processing of your personal data is described in our Privacy policy.',
    ] },
  ],
};

const enPrivacy: LegalDoc = {
  meta: { title: 'Privacy policy — Meridian Architecture', description: 'How Meridian Architecture collects and processes your personal data: contact form, analytics, cookies, and your rights (GDPR).' },
  hero: { eyebrow: 'Your data', title: 'Privacy policy', lead: 'How we collect, use and protect your personal data, in compliance with the GDPR.' },
  updated: 'Last updated: July 2026.',
  sections: [
    { title: 'Data controller', paras: [
      'Meridian Architecture (a company in the process of incorporation), represented by Mr Vincent Hacquard — 9 Grande Rue, 92310 Sèvres, France. For any question: ' + EMAIL + '.',
    ] },
    { title: 'Data collected and purposes', paras: ['We only collect the data needed for the following purposes:'], bullets: [
      'Contact form: name, email, company, sector and message — to answer your request. Legal basis: your consent / pre-contractual measures.',
      'Analytics (Google Analytics 4): browsing data (page views, device type, traffic source), only if you consent via the banner. Legal basis: your consent.',
    ] },
    { title: 'Cookies and consent', paras: [
      'The site uses analytics cookies (Google Analytics 4). By default, no analytics cookie is set: consent is requested via a banner, and nothing is collected until you accept (Consent Mode). You can decline with no impact on your use of the site, and change your choice by clearing your browser data.',
    ] },
    { title: 'Recipients and transfers', paras: [
      'Your data may be processed by our technical sub-processors: Google (analytics) and GitHub (hosting), located in the United States. These transfers outside the European Union are covered by appropriate safeguards (standard contractual clauses).',
    ] },
    { title: 'Retention period', bullets: [
      'Contact data: for the time needed to handle your request, then archived within a reasonable limit.',
      'Analytics data: 14 months maximum.',
    ] },
    { title: 'Your rights', paras: ['Under the GDPR, you have the rights of access, rectification, erasure, restriction, objection and portability, as well as the right to withdraw your consent at any time.'], bullets: [
      'To exercise your rights: ' + EMAIL + '.',
      'You may also lodge a complaint with the CNIL (cnil.fr).',
    ] },
    { title: 'Changes to this policy', paras: [
      'This policy may be updated. The last-updated date is shown above.',
    ] },
  ],
};

const legal = {
  fr: { mentions: frMentions, privacy: frPrivacy },
  en: { mentions: enMentions, privacy: enPrivacy },
};

export function getMentions(locale: Locale): LegalDoc { return legal[locale].mentions; }
export function getPrivacy(locale: Locale): LegalDoc { return legal[locale].privacy; }
