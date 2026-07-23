import type { Locale } from './routes';

/* =============================================================
   Contenu rédactionnel bilingue. Le français fait foi (shape),
   l'anglais doit en respecter la structure (satisfies typeof fr).
   ============================================================= */

const fr = {
  common: {
    skip: 'Aller au contenu',
    menu: 'Menu',
    close: 'Fermer',
    ctaPrimary: 'Échangeons sur votre cas',
    ctaSecondary: 'Découvrir le concept',
    switchLang: 'English',
    switchLangAria: 'Switch to English',
    footerTagline:
      'Nous rendons concrètes les idées de vos équipes — prototypées à l’IA, testées et adoptées en temps réel.',
    footerNav: 'Navigation',
    footerContact: 'Contact',
    footerLegal: 'Mentions légales',
    rights: 'Tous droits réservés.',
    backToTop: 'Haut de page',
    builtNote: 'Conçu et développé sur-mesure.',
  },
  site: {
    name: 'Meridian Architecture',
    short: 'Meridian',
    tagline:
      'De l’idée à l’outil, en temps réel : le prototypage sur-mesure propulsé par l’IA, sans conduite du changement.',
    metaDescription:
      'Meridian Architecture prototype à l’IA les idées de vos équipes et les transforme en outils sur-mesure — testés et adoptés en temps réel, sans conduite du changement. Deux angles : chiffre d’affaires et productivité.',
    email: 'vincent@meridian-architecture.com',
    location: 'France · à distance',
  },

  modules: [
    { abbr: 'BI', name: 'Business Intelligence', text: 'Vos données réunies, lisibles, pilotables. Des tableaux de bord qui parlent à vos équipes — pas l’inverse.' },
    { abbr: 'ERP', name: 'Gestion intégrée', text: 'Le cœur opérationnel : ventes, achats, stocks, finance, production — orchestrés selon vos process réels.' },
    { abbr: 'PLM', name: 'Cycle de vie produit', text: 'De l’idée au référencement : concevez, versionnez et faites évoluer vos produits sans perdre le fil.' },
    { abbr: 'PIM', name: 'Information produit', text: 'Une source unique et fiable pour toutes vos fiches produit, diffusée partout sans ressaisie.' },
    { abbr: 'WEB', name: 'Sites & portails', text: 'Sites, espaces clients et portails partenaires, connectés en direct à vos données.' },
  ],

  home: {
    meta: {
      title: 'Meridian Architecture — de l’idée à l’outil, en temps réel',
      description:
        'Nous prototypons à l’IA les idées de vos équipes et les transformons en outils sur-mesure — testés et adoptés en temps réel, sans conduite du changement.',
    },
    hero: {
      eyebrow: 'Prototypage sur-mesure · propulsé par l’IA',
      titleA: 'De l’idée à l’outil,',
      titleB: 'en temps réel.',
      subtitle:
        'Nous partons des idées de vos équipes et les rendons concrètes : prototypées à l’IA, testées et adaptées en temps réel par celles et ceux qui s’en serviront, jusqu’à la mise en production. L’humain reste au centre, l’adoption est intégrée — sans conduite du changement.',
      scrollHint: 'Faites défiler',
    },
    figures: [
      { value: 'Jours', label: 'pour prototyper une idée' },
      { value: '2', label: 'angles : chiffre d’affaires · productivité' },
      { value: '0', label: 'conduite du changement' },
      { value: 'IA', label: 'au service de vos équipes' },
    ],
    problem: {
      eyebrow: 'Le constat',
      title: 'Vos meilleures idées restent dans un tiroir.',
      intro:
        'Entre l’idée d’une équipe et l’outil qui la sert, il y a des mois de projet — et souvent un logiciel générique qu’il faut ensuite faire adopter de force. Trop long, trop lourd, trop risqué.',
      items: [
        { title: 'Jamais testées', text: 'Faute de temps et de budget pour les prototyper, les idées ne voient pas le jour.' },
        { title: 'Trop génériques', text: 'On plie son métier au logiciel, au lieu de l’inverse.' },
        { title: 'Trop longues', text: 'Specs, développement, recette : des mois avant la moindre valeur.' },
        { title: 'Mal adoptées', text: 'L’outil arrive d’en haut ; les équipes le subissent plus qu’elles ne l’utilisent.' },
      ],
    },
    vision: {
      eyebrow: 'La différence',
      title: 'L’humain au centre. L’IA en soutien.',
      lead:
        'L’IA ne remplace pas vos équipes : elle rend leurs idées concrètes, plus vite que quiconque.',
      body:
        'On prototype avec celles et ceux qui utiliseront l’outil, on teste en temps réel, on ajuste avec eux. Quand on met en production, l’outil est déjà adopté — parce qu’ils l’ont construit. Plus de conduite du changement, plus de projet qui échoue à l’usage.',
      points: [
        'On part des idées de vos équipes, jamais d’un cahier des charges.',
        'L’IA fluidifie, accélère et gomme les frictions du quotidien.',
        'L’adoption est intégrée : zéro conduite du changement.',
      ],
    },
    pillars: {
      eyebrow: 'L’aboutissement',
      title: 'Les outils qui finissent par s’assembler.',
      intro:
        'Rien n’est imposé d’emblée. À mesure que vos prototypes s’éprouvent, ils s’interconnectent autour d’un socle commun — jusqu’à un écosystème taillé à votre métier.',
      note: 'Et tout ce dont vos équipes ont besoin, au-delà de ces cinq domaines.',
    },
    ecosystem: {
      eyebrow: 'L’interconnexion',
      title: 'À la fin, tout est relié.',
      caption:
        'Au centre, votre socle de données. Autour, vos outils éprouvés. Survolez une pièce pour voir ses liaisons s’éclairer.',
    },
    method: {
      eyebrow: 'La méthode',
      title: 'De l’idée à la prod, avec vos équipes.',
      intro: 'Une boucle courte où vos équipes co-construisent à chaque étape — c’est ce qui rend la conduite du changement inutile.',
      steps: [
        { n: '01', title: 'Prototyper', text: 'L’idée d’une équipe devient un outil réel en quelques jours.' },
        { n: '02', title: 'Tester en live', text: 'Vos équipes l’utilisent en conditions réelles, tout de suite.' },
        { n: '03', title: 'Recetter', text: 'On vérifie que l’outil fait le job, sans angle mort.' },
        { n: '04', title: 'Itérer', text: 'On ajuste en temps réel, avec celles et ceux qui s’en servent.' },
        { n: '05', title: 'Valider', text: 'L’outil colle au besoin ; l’adoption est déjà là.' },
        { n: '06', title: 'Mettre en prod', text: 'Déployé avec les équipes, sans conduite du changement.' },
      ],
    },
    why: {
      eyebrow: 'Pourquoi ça marche',
      title: 'Rapide, sur-mesure, adopté.',
      items: [
        { title: 'Rapide', text: 'L’IA effondre les délais : un prototype en jours, pas en mois.' },
        { title: 'Sur-mesure', text: 'L’outil épouse vos process, votre vocabulaire, votre réalité.' },
        { title: 'Adopté d’emblée', text: 'Construit avec les équipes, donc utilisé dès le premier jour.' },
      ],
    },
    useCases: {
      eyebrow: 'Par où on commence',
      title: 'Deux questions à poser à vos équipes.',
      items: [
        { tag: 'Booster le chiffre d’affaires', title: 'Quels outils vous manquent pour vendre plus ?', text: 'Data & BI pour décider, CRM pour convertir, sites vitrines et e-commerce pour vendre, POS pour encaisser — prototypés à votre métier.' },
        { tag: 'Gagner en productivité', title: 'Quels outils vous manquent pour aller plus vite ?', text: 'PLM, PIM et vos outils métier : on prototype les facilitateurs qui suppriment les tâches à faible valeur et les frictions du quotidien.' },
      ],
    },
    about: {
      eyebrow: 'À propos',
      title: 'Une conviction : vos outils doivent ressembler à votre métier.',
      text: 'Meridian Architecture est né d’un constat simple — les entreprises méritent mieux qu’un assemblage de logiciels qui les contraignent. Nous bâtissons l’alternative, un prototype à la fois.',
      cta: 'Notre vision',
    },
    finalCta: {
      eyebrow: 'Parlons-en',
      title: 'Décrivez une idée. On vous en fait un prototype.',
      text: 'Un premier échange suffit pour repérer, avec vos équipes, l’outil qui vous manque — et en esquisser le prototype. Sans engagement.',
      button: 'Échangeons sur votre cas',
      micro: 'Réponse sous 48 h ouvrées.',
    },
  },

  concept: {
    meta: {
      title: 'Le concept — Meridian Architecture',
      description: 'Le prototype comme point de départ : un outil fonctionnel qui confronte l’idée au réel, à la place d’un cahier des charges et de mois de développement à l’aveugle.',
    },
    hero: {
      eyebrow: 'Le concept',
      title: 'Le prototype comme point de départ.',
      lead: 'On ne conçoit plus un logiciel sur plan. On le prototype — un outil réel, cliquable, qui confronte l’idée au réel avant tout engagement.',
    },
    sections: [
      {
        eyebrow: 'Le point de départ',
        title: 'Le cahier des charges est un pari',
        body: 'Spécifier un outil sur le papier, c’est parier des mois de développement sur des hypothèses jamais confrontées au réel. Les vrais besoins se révèlent trop tard — quand le budget est déjà engagé et l’outil déjà rigide. La complexité n’est pas dans votre métier : elle est dans cette façon de faire.',
      },
      {
        eyebrow: 'Le déplacement',
        title: 'Du plan figé au prototype vivant',
        body: 'Meridian renverse la logique. Au lieu de spécifier puis construire, on prototype d’abord. L’IA permet de matérialiser un prototype fonctionnel en quelques jours — un objet réel qu’on manipule, teste et corrige. Le prototype devient le vrai plan : il révèle le besoin, réduit le risque, et sert de socle à l’outil final.',
      },
      {
        eyebrow: 'La nuance',
        title: 'Un prototype, pas une maquette',
        body: 'Une maquette illustre ; un prototype fonctionne. Le nôtre embarque la vraie logique métier, les vrais parcours, des données de test réalistes — assez abouti pour trancher une décision, assez léger pour être jeté sans regret. C’est cette différence qui transforme une intuition en certitude.',
      },
    ],
    principles: {
      eyebrow: 'Les principes',
      title: 'Quatre partis pris',
      items: [
        { title: 'Prototyper, pas spécifier', text: 'On conçoit en construisant : un prototype fonctionnel plutôt qu’un document d’hypothèses.' },
        { title: 'Confronter au réel', text: 'Le prototype se teste sur votre vrai workflow, entre de vraies mains — la décision s’appuie sur des faits.' },
        { title: 'Propulsé par l’IA', text: 'L’IA matérialise le prototype en jours, pas en mois : on peut tester chaque idée, vite.' },
        { title: 'Du prototype à l’écosystème', text: 'Le prototype éprouvé devient l’outil de référence, puis une brique de votre écosystème.' },
      ],
    },
  },

  solutions: {
    meta: {
      title: 'L’offre — Meridian Architecture',
      description: 'Nous prototypons à l’IA les idées de vos équipes et les transformons en outils sur-mesure, testés et adoptés en temps réel. Deux angles : chiffre d’affaires et productivité.',
    },
    hero: {
      eyebrow: 'L’offre',
      title: 'De l’idée à l’outil, sur-mesure.',
      lead: 'Nous partons des idées de vos équipes et les rendons concrètes : prototypées à l’IA, testées et adaptées en temps réel, jusqu’à la mise en production — sans conduite du changement.',
    },
    builder: {
      eyebrow: 'Le prototypage',
      title: 'Le prototypage sur-mesure, propulsé par l’IA.',
      body: 'On ne spécifie plus un outil : on le prototype avec celles et ceux qui l’utiliseront. L’IA matérialise l’idée en quelques jours ; vos équipes testent et ajustent en temps réel. Quand on met en production, l’outil est déjà adopté — parce qu’elles l’ont construit.',
      points: [
        'On part des idées de vos équipes, jamais d’un cahier des charges.',
        'Ce qui coûtait des mois se prototype en quelques jours.',
        'L’adoption est intégrée : zéro conduite du changement.',
      ],
    },
    method: {
      eyebrow: 'La méthode',
      title: 'De l’idée à la prod, en six temps.',
      steps: [
        { n: '01', title: 'Prototyper', text: 'L’idée d’une équipe devient un outil réel et cliquable en quelques jours.' },
        { n: '02', title: 'Tester en live', text: 'Vos équipes l’utilisent en conditions réelles, tout de suite.' },
        { n: '03', title: 'Recetter', text: 'On vérifie, avec elles, que l’outil fait le job — sans angle mort.' },
        { n: '04', title: 'Itérer', text: 'On ajuste en temps réel avec celles et ceux qui s’en servent.' },
        { n: '05', title: 'Valider', text: 'L’outil colle au besoin ; l’adoption est déjà là.' },
        { n: '06', title: 'Mettre en prod', text: 'Déployé avec les équipes, sans conduite du changement.' },
      ],
    },
    profiles: {
      eyebrow: 'Par où on commence',
      title: 'Deux questions à poser à vos équipes.',
      items: [
        {
          tag: 'Data/BI · CRM · e-commerce · POS',
          kicker: 'Booster le chiffre d’affaires',
          title: 'Quels outils vous manquent pour vendre plus ?',
          text: 'Data & BI pour décider sur des faits, CRM pour convertir et fidéliser, sites vitrines et e-commerce pour vendre, POS pour encaisser — chaque brique prototypée à votre métier et testée par vos équipes.',
          example: 'Cas concret : un tableau de bord réunissant ventes, marge et stock en temps réel, prototypé en quelques jours et adopté sans formation.',
        },
        {
          tag: 'PLM · PIM · outils métier',
          kicker: 'Gagner en productivité',
          title: 'Quels outils vous manquent pour aller plus vite ?',
          text: 'PLM, PIM et vos outils métier : on prototype les facilitateurs qui suppriment les ressaisies, les tâches à faible valeur et les frictions du quotidien — au plus près de vos process.',
          example: 'Cas concret : un générateur de fiches produit branché sur votre PIM, qui fait gagner des heures à chaque mise en marché.',
        },
      ],
    },
    endgame: {
      eyebrow: 'L’aboutissement',
      title: 'Quand les prototypes tiennent, l’écosystème émerge.',
      text: 'Rien n’est imposé d’emblée. À mesure que vos outils s’éprouvent, ils s’interconnectent autour d’un socle de données commun — jusqu’à remplacer le patchwork de logiciels rigides par un ensemble unique, taillé à votre métier.',
    },
    interconnect: {
      eyebrow: 'Le liant',
      title: 'L’interconnexion n’est pas une option. C’est l’aboutissement.',
      text: 'Une fois éprouvés, vos outils partagent le même socle de données. Une commande saisie met à jour le stock, déclenche la facturation, alimente vos tableaux de bord et informe le portail client — sans aucune ressaisie. C’est là que se gagne le temps, et la sérénité.',
    },
  },

  methode: {
    meta: {
      title: 'La méthode — Meridian Architecture',
      description: 'De l’idée à la prod avec vos équipes : prototyper, tester en live, recetter, itérer, valider, mettre en prod — un livrable concret à chaque temps.',
    },
    hero: {
      eyebrow: 'La méthode',
      title: 'De l’idée à la prod, avec vos équipes.',
      lead: 'Une boucle courte et transparente : à chaque temps, un livrable concret que vos équipes voient, testent et valident — c’est ce qui rend la conduite du changement inutile.',
    },
    deliverableLabel: 'Livrable',
    steps: [
      { n: '01', title: 'Prototyper', text: 'On part de l’idée d’une équipe et l’IA la matérialise en un outil réel, cliquable, en quelques jours.', deliverable: 'Un prototype cliquable de l’idée.' },
      { n: '02', title: 'Tester en live', text: 'Vos équipes l’utilisent en conditions réelles, tout de suite — pas dans six mois.', deliverable: 'Des retours réels de vos utilisateurs.' },
      { n: '03', title: 'Recetter', text: 'On vérifie, avec elles, que l’outil fait le job — sans angle mort.', deliverable: 'Une liste de vérifications passée.' },
      { n: '04', title: 'Itérer', text: 'On ajuste en temps réel avec celles et ceux qui s’en servent. La boucle tourne vite.', deliverable: 'Une version affinée à chaque tour.' },
      { n: '05', title: 'Valider', text: 'L’outil colle au besoin ; comme les équipes l’ont construit, l’adoption est déjà là.', deliverable: 'Une version de référence approuvée par les équipes.' },
      { n: '06', title: 'Mettre en prod', text: 'On déploie avec les équipes — sans conduite du changement, puisqu’elles l’utilisent déjà.', deliverable: 'L’outil en production, déjà adopté.' },
    ],
    principles: {
      eyebrow: 'Nos engagements',
      title: 'Comment nous travaillons',
      items: [
        { title: 'L’humain au centre', text: 'On construit avec vos équipes, jamais à leur place. L’outil leur ressemble.' },
        { title: 'Temps réel', text: 'On livre par boucles courtes. Vous voyez et testez de la valeur dès les premiers jours.' },
        { title: 'Vous restez maître', text: 'C’est votre outil, votre donnée, votre code. Pas de dépendance subie.' },
      ],
    },
  },

  about: {
    meta: {
      title: 'À propos — Meridian Architecture',
      description: 'La conviction derrière Meridian Architecture : le meilleur cahier des charges est un prototype qui fonctionne.',
    },
    hero: {
      eyebrow: 'À propos',
      title: 'Concevoir en prototypant.',
      lead: 'Meridian Architecture est né d’une conviction : le meilleur cahier des charges est un prototype qui fonctionne.',
    },
    story: {
      eyebrow: 'Pourquoi Meridian',
      title: 'Le prototype change tout',
      body: 'Pendant des années, tester une idée logicielle imposait des mois de spécifications et de développement — un luxe réservé aux grands groupes. L’IA rebat les cartes : on matérialise un prototype fonctionnel en quelques jours, on le confronte au réel, on l’affine jusqu’à une version de référence. Meridian Architecture est né pour saisir ce basculement — réunir product, design et développement dans une seule main, et transformer vos intuitions en outils éprouvés.',
    },
    values: {
      eyebrow: 'Ce qui nous guide',
      title: 'Nos repères',
      items: [
        { title: 'Le prototype d’abord', text: 'On tranche sur un objet qui marche, jamais sur un document.' },
        { title: 'Le métier avant l’outil', text: 'On part de votre réalité, votre vocabulaire, vos parcours — jamais d’un produit à caser.' },
        { title: 'La durée', text: 'Un prototype éprouvé devient une version de référence qui évolue, pas un chantier à refaire.' },
      ],
    },
    founderNote: 'Note : cette page sera personnalisée avec le parcours et la photo du fondateur.',
  },

  contact: {
    meta: {
      title: 'Contact — Meridian Architecture',
      description: 'Parlons de votre écosystème. Décrivez votre métier, nous esquissons votre édifice cible.',
    },
    hero: {
      eyebrow: 'Contact',
      title: 'Parlons de votre écosystème.',
      lead: 'Décrivez votre métier et vos irritants : on vous propose une première lecture de votre édifice cible. Sans engagement.',
    },
    form: {
      name: 'Nom',
      company: 'Entreprise',
      email: 'E-mail',
      sector: 'Secteur',
      message: 'Votre besoin en quelques lignes',
      submit: 'Envoyer',
      placeholderMessage: 'Quels outils utilisez-vous aujourd’hui ? Qu’est-ce qui vous freine ?',
      orEmail: 'Ou écrivez-nous directement :',
      success: 'Merci — formulaire à connecter à votre service d’envoi (voir note).',
      note: 'Formulaire de démonstration : à brancher sur Formspree, Netlify Forms ou votre CRM lors de la mise en ligne.',
    },
    details: {
      eyebrow: 'Coordonnées',
      emailLabel: 'E-mail',
      areaLabel: 'Zone',
      responseLabel: 'Délai de réponse',
      response: 'Sous 48 h ouvrées',
    },
  },
};

const en = {
  common: {
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    ctaPrimary: 'Let’s talk about your case',
    ctaSecondary: 'Explore the concept',
    switchLang: 'Français',
    switchLangAria: 'Passer en français',
    footerTagline:
      'We turn your teams’ ideas into working tools — prototyped with AI, tested and adopted in real time.',
    footerNav: 'Navigation',
    footerContact: 'Contact',
    footerLegal: 'Legal',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
    builtNote: 'Designed and developed bespoke.',
  },
  site: {
    name: 'Meridian Architecture',
    short: 'Meridian',
    tagline: 'From idea to tool, in real time: bespoke prototyping powered by AI, with no change management.',
    metaDescription:
      'Meridian Architecture prototypes your teams’ ideas with AI and turns them into bespoke tools — tested and adopted in real time, with no change management. Two angles: revenue and productivity.',
    email: 'vincent@meridian-architecture.com',
    location: 'France · remote',
  },

  modules: [
    { abbr: 'BI', name: 'Business Intelligence', text: 'All your data, unified and readable. Dashboards that speak your team’s language — not the other way around.' },
    { abbr: 'ERP', name: 'Integrated operations', text: 'The operational core: sales, purchasing, inventory, finance, production — orchestrated around your real processes.' },
    { abbr: 'PLM', name: 'Product lifecycle', text: 'From idea to listing: design, version and evolve your products without losing the thread.' },
    { abbr: 'PIM', name: 'Product information', text: 'One reliable source for every product sheet, distributed everywhere with zero re-keying.' },
    { abbr: 'WEB', name: 'Sites & portals', text: 'Websites, client areas and partner portals, wired straight to your data.' },
  ],

  home: {
    meta: {
      title: 'Meridian Architecture — from idea to tool, in real time',
      description:
        'We prototype your teams’ ideas with AI and turn them into bespoke tools — tested and adopted in real time, with no change management.',
    },
    hero: {
      eyebrow: 'Bespoke prototyping · powered by AI',
      titleA: 'From idea to tool,',
      titleB: 'in real time.',
      subtitle:
        'We start from your teams’ ideas and make them real: prototyped with AI, tested and adapted in real time by the very people who’ll use them, all the way to production. People stay at the centre, adoption is built in — with no change management.',
      scrollHint: 'Scroll',
    },
    figures: [
      { value: 'Days', label: 'to prototype an idea' },
      { value: '2', label: 'angles: revenue · productivity' },
      { value: '0', label: 'change management' },
      { value: 'AI', label: 'serving your teams' },
    ],
    problem: {
      eyebrow: 'The reality',
      title: 'Your best ideas stay in a drawer.',
      intro:
        'Between a team’s idea and the tool that serves it lie months of project work — and often a generic piece of software that then has to be forced into use. Too long, too heavy, too risky.',
      items: [
        { title: 'Never tested', text: 'For lack of time and budget to prototype them, ideas never see the light.' },
        { title: 'Too generic', text: 'You bend your business to the software, instead of the reverse.' },
        { title: 'Too long', text: 'Specs, development, testing: months before any value.' },
        { title: 'Poorly adopted', text: 'The tool comes from the top; teams endure it more than they use it.' },
      ],
    },
    vision: {
      eyebrow: 'The difference',
      title: 'People at the centre. AI in support.',
      lead: 'AI doesn’t replace your teams: it makes their ideas real, faster than anyone.',
      body:
        'We prototype with the very people who’ll use the tool, test in real time, and adjust with them. By the time we go to production, the tool is already adopted — because they built it. No more change management, no more project that fails on contact with real use.',
      points: [
        'We start from your teams’ ideas, never from a spec sheet.',
        'AI smooths, accelerates and removes everyday friction.',
        'Adoption is built in: zero change management.',
      ],
    },
    pillars: {
      eyebrow: 'The outcome',
      title: 'The tools that end up assembling.',
      intro:
        'Nothing is imposed upfront. As your prototypes prove themselves, they interconnect around a shared core — until an ecosystem cut to your business.',
      note: 'And whatever else your teams need, beyond these five domains.',
    },
    ecosystem: {
      eyebrow: 'The interconnection',
      title: 'In the end, everything connects.',
      caption:
        'At the centre, your data core. Around it, your proven tools. Hover a room to light up its links.',
    },
    method: {
      eyebrow: 'The method',
      title: 'From idea to production, with your teams.',
      intro: 'A short loop where your teams co-build at every step — that’s what makes change management unnecessary.',
      steps: [
        { n: '01', title: 'Prototype', text: 'A team’s idea becomes a real tool in a matter of days.' },
        { n: '02', title: 'Test live', text: 'Your teams use it in real conditions, right away.' },
        { n: '03', title: 'Review', text: 'We check the tool does the job, with no blind spots.' },
        { n: '04', title: 'Iterate', text: 'We adjust in real time, with the people who use it.' },
        { n: '05', title: 'Validate', text: 'The tool fits the need; adoption is already there.' },
        { n: '06', title: 'Ship', text: 'Deployed with the teams, with no change management.' },
      ],
    },
    why: {
      eyebrow: 'Why it works',
      title: 'Fast, bespoke, adopted.',
      items: [
        { title: 'Fast', text: 'AI collapses timelines: a prototype in days, not months.' },
        { title: 'Bespoke', text: 'The tool fits your processes, your vocabulary, your reality.' },
        { title: 'Adopted from day one', text: 'Built with the teams, so used from the very first day.' },
      ],
    },
    useCases: {
      eyebrow: 'Where to start',
      title: 'Two questions to ask your teams.',
      items: [
        { tag: 'Boost revenue', title: 'Which tools are you missing to sell more?', text: 'Data & BI to decide, CRM to convert, showcase and e-commerce sites to sell, POS to take payment — prototyped to your business.' },
        { tag: 'Gain productivity', title: 'Which tools are you missing to move faster?', text: 'PLM, PIM and your line-of-business tools: we prototype the enablers that remove low-value tasks and everyday friction.' },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'One conviction: your tools should look like your business.',
      text: 'Meridian Architecture grew from a simple observation — companies deserve better than a pile of software that constrains them. We build the alternative, one prototype at a time.',
      cta: 'Our vision',
    },
    finalCta: {
      eyebrow: 'Let’s talk',
      title: 'Describe an idea. We’ll prototype it.',
      text: 'A first conversation is enough to spot, with your teams, the tool you’re missing — and sketch its prototype. No commitment.',
      button: 'Let’s talk about your case',
      micro: 'Reply within 48 business hours.',
    },
  },

  concept: {
    meta: {
      title: 'The concept — Meridian Architecture',
      description: 'The prototype as starting point: a working tool that confronts the idea with reality, instead of a spec sheet and months of blind development.',
    },
    hero: {
      eyebrow: 'The concept',
      title: 'The prototype as starting point.',
      lead: 'We no longer design software on paper. We prototype it — a real, clickable tool that confronts the idea with reality before any commitment.',
    },
    sections: [
      {
        eyebrow: 'The starting point',
        title: 'A spec sheet is a bet',
        body: 'Specifying a tool on paper means betting months of development on assumptions never confronted with reality. The real needs surface too late — once the budget is committed and the tool is already rigid. The complexity isn’t in your business: it’s in that way of working.',
      },
      {
        eyebrow: 'The shift',
        title: 'From a frozen plan to a living prototype',
        body: 'Meridian flips the logic. Instead of specifying then building, we prototype first. AI lets us materialise a working prototype in days — a real object you handle, test and correct. The prototype becomes the true plan: it reveals the need, cuts the risk, and grounds the final tool.',
      },
      {
        eyebrow: 'The nuance',
        title: 'A prototype, not a mock-up',
        body: 'A mock-up illustrates; a prototype works. Ours carries the real business logic, the real journeys, realistic test data — polished enough to settle a decision, light enough to be thrown away without regret. That difference is what turns a hunch into a certainty.',
      },
    ],
    principles: {
      eyebrow: 'The principles',
      title: 'Four commitments',
      items: [
        { title: 'Prototype, don’t spec', text: 'We design by building: a working prototype rather than a document of assumptions.' },
        { title: 'Confront with reality', text: 'The prototype is tested on your real workflow, in real hands — decisions rest on facts.' },
        { title: 'AI-powered', text: 'AI materialises the prototype in days, not months: you can test every idea, fast.' },
        { title: 'From prototype to ecosystem', text: 'The proven prototype becomes the reference tool, then a brick of your ecosystem.' },
      ],
    },
  },

  solutions: {
    meta: {
      title: 'The offer — Meridian Architecture',
      description: 'We prototype your teams’ ideas with AI and turn them into bespoke tools, tested and adopted in real time. Two angles: revenue and productivity.',
    },
    hero: {
      eyebrow: 'The offer',
      title: 'From idea to tool, bespoke.',
      lead: 'We start from your teams’ ideas and make them real: prototyped with AI, tested and adapted in real time, all the way to production — with no change management.',
    },
    builder: {
      eyebrow: 'The prototyping',
      title: 'Bespoke prototyping, powered by AI.',
      body: 'We no longer spec a tool: we prototype it with the very people who’ll use it. AI materialises the idea in days; your teams test and adjust in real time. By the time we go to production, the tool is already adopted — because they built it.',
      points: [
        'We start from your teams’ ideas, never from a spec sheet.',
        'What used to take months is prototyped in days.',
        'Adoption is built in: zero change management.',
      ],
    },
    method: {
      eyebrow: 'The method',
      title: 'From idea to production, in six steps.',
      steps: [
        { n: '01', title: 'Prototype', text: 'A team’s idea becomes a real, clickable tool in a matter of days.' },
        { n: '02', title: 'Test live', text: 'Your teams use it in real conditions, right away.' },
        { n: '03', title: 'Review', text: 'We check, with them, that the tool does the job — with no blind spots.' },
        { n: '04', title: 'Iterate', text: 'We adjust in real time with the people who use it.' },
        { n: '05', title: 'Validate', text: 'The tool fits the need; adoption is already there.' },
        { n: '06', title: 'Ship', text: 'Deployed with the teams, with no change management.' },
      ],
    },
    profiles: {
      eyebrow: 'Where to start',
      title: 'Two questions to ask your teams.',
      items: [
        {
          tag: 'Data/BI · CRM · e-commerce · POS',
          kicker: 'Boost revenue',
          title: 'Which tools are you missing to sell more?',
          text: 'Data & BI to decide on facts, CRM to convert and retain, showcase and e-commerce sites to sell, POS to take payment — each brick prototyped to your business and tested by your teams.',
          example: 'Real case: a dashboard bringing sales, margin and stock together in real time, prototyped in days and adopted with no training.',
        },
        {
          tag: 'PLM · PIM · line-of-business tools',
          kicker: 'Gain productivity',
          title: 'Which tools are you missing to move faster?',
          text: 'PLM, PIM and your line-of-business tools: we prototype the enablers that remove re-keying, low-value tasks and everyday friction — as close as possible to your processes.',
          example: 'Real case: a product-sheet generator wired to your PIM, saving hours at every launch.',
        },
      ],
    },
    endgame: {
      eyebrow: 'The outcome',
      title: 'When the prototypes hold, the ecosystem emerges.',
      text: 'Nothing is imposed upfront. As your tools prove themselves, they interconnect around a shared data core — until the patchwork of rigid software gives way to a single whole, cut to your business.',
    },
    interconnect: {
      eyebrow: 'The connective tissue',
      title: 'Interconnection isn’t an option. It’s the outcome.',
      text: 'Once proven, your tools share the same data core. An order updates stock, triggers invoicing, feeds your dashboards and informs the client portal — with no re-keying. That’s where the time, and the peace of mind, is won.',
    },
  },

  methode: {
    meta: {
      title: 'The method — Meridian Architecture',
      description: 'From idea to production with your teams: prototype, test live, review, iterate, validate, ship — a concrete deliverable at every step.',
    },
    hero: {
      eyebrow: 'The method',
      title: 'From idea to production, with your teams.',
      lead: 'A short, transparent loop: at every step, a concrete deliverable your teams see, test and validate — that’s what makes change management unnecessary.',
    },
    deliverableLabel: 'Deliverable',
    steps: [
      { n: '01', title: 'Prototype', text: 'We start from a team’s idea and AI materialises it into a real, clickable tool in a matter of days.', deliverable: 'A clickable prototype of the idea.' },
      { n: '02', title: 'Test live', text: 'Your teams use it in real conditions, right away — not in six months.', deliverable: 'Real feedback from your users.' },
      { n: '03', title: 'Review', text: 'We check, with them, that the tool does the job — with no blind spots.', deliverable: 'A checklist passed.' },
      { n: '04', title: 'Iterate', text: 'We adjust in real time with the people who use it. The loop turns fast.', deliverable: 'A refined version at every turn.' },
      { n: '05', title: 'Validate', text: 'The tool fits the need; as the teams built it, adoption is already there.', deliverable: 'A reference version approved by the teams.' },
      { n: '06', title: 'Ship', text: 'We deploy with the teams — with no change management, since they already use it.', deliverable: 'The tool in production, already adopted.' },
    ],
    principles: {
      eyebrow: 'Our commitments',
      title: 'How we work',
      items: [
        { title: 'People at the centre', text: 'We build with your teams, never in their place. The tool looks like them.' },
        { title: 'Real time', text: 'We ship in short loops. You see and test value in the first days.' },
        { title: 'You stay in control', text: 'It’s your tool, your data, your code. No lock-in endured.' },
      ],
    },
  },

  about: {
    meta: {
      title: 'About — Meridian Architecture',
      description: 'The conviction behind Meridian Architecture: the best spec sheet is a prototype that works.',
    },
    hero: {
      eyebrow: 'About',
      title: 'Designing by prototyping.',
      lead: 'Meridian Architecture grew from one conviction: the best spec sheet is a prototype that works.',
    },
    story: {
      eyebrow: 'Why Meridian',
      title: 'The prototype changes everything',
      body: 'For years, testing a software idea meant months of specs and development — a luxury reserved for large groups. AI reshuffles the deck: we materialise a working prototype in days, confront it with reality, and refine it to a reference version. Meridian Architecture was born to seize that shift — bringing product, design and development into a single pair of hands, and turning your hunches into proven tools.',
    },
    values: {
      eyebrow: 'What guides us',
      title: 'Our compass',
      items: [
        { title: 'Prototype first', text: 'We settle decisions on an object that works, never on a document.' },
        { title: 'Business before tool', text: 'We start from your reality, your vocabulary, your journeys — never a product to place.' },
        { title: 'The long run', text: 'A proven prototype becomes a reference version that evolves, not a build to redo.' },
      ],
    },
    founderNote: 'Note: this page will be personalised with the founder’s background and photo.',
  },

  contact: {
    meta: {
      title: 'Contact — Meridian Architecture',
      description: 'Let’s talk about your ecosystem. Describe your business, we’ll sketch your target edifice.',
    },
    hero: {
      eyebrow: 'Contact',
      title: 'Let’s talk about your ecosystem.',
      lead: 'Describe your business and your pain points: we’ll offer a first read of your target edifice. No commitment.',
    },
    form: {
      name: 'Name',
      company: 'Company',
      email: 'Email',
      sector: 'Sector',
      message: 'Your need in a few lines',
      submit: 'Send',
      placeholderMessage: 'Which tools do you use today? What’s holding you back?',
      orEmail: 'Or write to us directly:',
      success: 'Thank you — form to be connected to your sending service (see note).',
      note: 'Demo form: to be wired to Formspree, Netlify Forms or your CRM at launch.',
    },
    details: {
      eyebrow: 'Details',
      emailLabel: 'Email',
      areaLabel: 'Area',
      responseLabel: 'Response time',
      response: 'Within 48 business hours',
    },
  },
} satisfies typeof fr;

export type SiteContent = typeof fr;

const content = { fr, en };

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}
