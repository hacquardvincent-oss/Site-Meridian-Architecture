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
      'Nous construisons à l’IA le pilote fonctionnel qui confronte votre idée au réel — puis l’outil sur-mesure qui en découle.',
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
      'Le pilote fonctionnel qui transforme votre intuition en décision — construit à l’IA, taillé à votre métier.',
    metaDescription:
      'Meridian Architecture construit à l’IA le pilote fonctionnel qui confronte votre idée au réel, l’éprouve et l’intègre — puis l’assemble en écosystème sur-mesure.',
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
      title: 'Meridian Architecture — le pilote fonctionnel qui transforme une intuition en décision',
      description:
        'Nous construisons à l’IA, en quelques jours, le pilote fonctionnel qui confronte votre idée au réel — puis l’outil sur-mesure que vos logiciels du marché ne savent pas livrer.',
    },
    hero: {
      eyebrow: 'Builder Product · sur-mesure propulsé par l’IA',
      titleA: 'Un pilote fonctionnel,',
      titleB: 'pas un cahier des charges.',
      subtitle:
        'Nous construisons à l’IA, en quelques jours, l’outil réel et cliquable qui confronte votre idée au concret — avant d’engager le moindre chantier.',
      scrollHint: 'Faites défiler',
    },
    figures: [
      { value: '5', label: 'temps, du croquis à l’écosystème' },
      { value: '1', label: 'interlocuteur : PO · design · UX' },
      { value: 'Jours', label: 'pour un pilote — pas des mois' },
      { value: 'IA', label: 'au cœur de la construction' },
    ],
    problem: {
      eyebrow: 'Le constat',
      title: 'Tester une idée coûte trop cher, trop tard.',
      intro:
        'Entre l’intuition métier et le premier outil utilisable, l’ancien monde impose des spécifications, des semaines de développement et des cycles de validation. Résultat : on n’ose plus tester, on subit des logiciels rigides, et la facture monte.',
      items: [
        { title: 'Trop lent', text: 'Des mois entre l’idée et la première version que l’on peut vraiment essayer.' },
        { title: 'Trop rigide', text: 'Vous pliez vos process pour entrer dans des logiciels génériques.' },
        { title: 'Trop risqué', text: 'On engage un chantier lourd sans avoir confronté le besoin au réel.' },
        { title: 'Trop cher', text: 'Des licences empilées pour des outils que vous n’utilisez qu’à moitié.' },
      ],
    },
    vision: {
      eyebrow: 'La réponse Meridian',
      title: 'Concevoir en construisant.',
      lead:
        'On ne spécifie plus un outil : on le construit, et on le confronte au réel.',
      body:
        'Un seul interlocuteur réunit product owner, designer et UX researcher, et s’appuie sur l’IA pour matérialiser un pilote fonctionnel en quelques jours. La décision se prend sur une maquette qui marche — jamais sur un document. Ce qui tient, on l’éprouve, on l’intègre, puis on l’assemble.',
      points: [
        'Votre besoin métier se confronte au réel, tout de suite.',
        'Ce qui coûtait des mois se teste en quelques jours.',
        'L’outil épouse vos process — jamais l’inverse.',
      ],
    },
    pillars: {
      eyebrow: 'L’aboutissement',
      title: 'Les briques qui finissent par s’assembler.',
      intro:
        'Rien n’est imposé d’emblée. À mesure que vos pilotes s’éprouvent, ils s’interconnectent autour d’un socle commun — jusqu’à un écosystème unique, taillé à votre métier.',
      note: 'Et tout ce dont votre métier a besoin, au-delà de ces cinq domaines.',
    },
    ecosystem: {
      eyebrow: 'L’interconnexion',
      title: 'À la fin, tout est relié.',
      caption:
        'Au centre, votre socle de données. Autour, vos modules éprouvés. Survolez une pièce pour voir ses liaisons s’éclairer.',
    },
    method: {
      eyebrow: 'La méthode',
      title: 'Cinq temps, du croquis à l’écosystème.',
      intro: 'Une démarche claire et jalonnée, du premier pilote à l’écosystème — vous voyez de la valeur dès les premiers jours.',
      steps: [
        { n: '01', title: 'Cadrage éclair', text: 'On confronte votre besoin à un artefact réel, pas à un cahier des charges.' },
        { n: '02', title: 'Pilote fonctionnel', text: 'Un outil cliquable, construit à l’IA, qui affronte votre vrai workflow.' },
        { n: '03', title: 'Éprouvé & itéré', text: 'Affiné entre les mains de vos utilisateurs, jusqu’à une version de référence.' },
        { n: '04', title: 'Intégration', text: 'On le branche à vos systèmes et on le déploie pour vos équipes.' },
        { n: '05', title: 'Écosystème', text: 'Éprouvées, vos briques s’assemblent en un ensemble cohérent.' },
      ],
    },
    why: {
      eyebrow: 'Pourquoi maintenant',
      title: 'Le sur-mesure, enfin à votre portée.',
      items: [
        { title: 'Rapide', text: 'L’IA effondre les délais : un pilote se construit en jours là où il fallait des mois.' },
        { title: 'Exactement votre métier', text: 'Aucun compromis avec un logiciel générique : l’outil épouse vos process, votre vocabulaire, votre réalité.' },
        { title: 'Sans risque', text: 'On valide sur une maquette qui marche avant d’investir dans un chantier lourd.' },
      ],
    },
    useCases: {
      eyebrow: 'À qui ça s’adresse',
      title: 'Deux portes d’entrée, un même savoir-faire.',
      items: [
        { tag: 'PME · ETI · grands comptes', title: 'Tester une idée avant le chantier lourd', text: 'Un besoin que les logiciels du marché servent mal ? On construit le pilote qui le confronte au réel, puis on l’intègre — et on livre la fonction que votre éditeur ne sort pas assez vite.' },
        { tag: 'TPE · cabinets · indépendants', title: 'Des fonctions de grand groupe, à votre échelle', text: 'Site vitrine ultra-fluide, SEO embarqué, CRM sur-mesure : les briques réservées aux grandes structures, taillées pour la vôtre.' },
        { tag: 'À terme', title: 'Un écosystème qui émerge', text: 'Les pilotes éprouvés s’interconnectent autour d’un socle commun — l’écosystème sur-mesure arrive en dernier, une fois le terrain sûr.' },
      ],
    },
    about: {
      eyebrow: 'À propos',
      title: 'Une conviction : vos outils doivent ressembler à votre métier.',
      text: 'Meridian Architecture est né d’un constat simple — les entreprises méritent mieux qu’un assemblage de logiciels qui les contraignent. Nous bâtissons l’alternative, un pilote à la fois.',
      cta: 'Notre vision',
    },
    finalCta: {
      eyebrow: 'Parlons-en',
      title: 'Décrivez votre idée. On vous en construit le pilote.',
      text: 'Un premier échange suffit pour cadrer votre besoin et esquisser le pilote qui le confrontera au réel. Sans engagement.',
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
        { title: 'Propulsé par l’IA', text: 'L’IA matérialise le prototype en jours, pas en mois. Itérer devient presque gratuit.' },
        { title: 'Du prototype à l’écosystème', text: 'Le prototype éprouvé devient l’outil de référence, puis une brique de votre écosystème.' },
      ],
    },
  },

  solutions: {
    meta: {
      title: 'L’offre — Meridian Architecture',
      description: 'Un pilote fonctionnel construit à l’IA en quelques jours pour confronter votre idée au réel, l’éprouver, l’intégrer — puis l’assembler en écosystème.',
    },
    hero: {
      eyebrow: 'L’offre',
      title: 'Un pilote fonctionnel, pas un cahier des charges.',
      lead: 'Là où l’ancien monde enchaînait spécifications, semaines de développement et cycles de validation, nous construisons — à l’IA — un outil réel et cliquable en quelques jours. Vous confrontez votre idée au concret avant d’engager quoi que ce soit.',
    },
    builder: {
      eyebrow: 'Le métier',
      title: 'Builder Product : concevoir en construisant.',
      body: 'Un seul interlocuteur réunit ce qui demandait hier trois métiers — product owner, product designer, UX researcher — et s’appuie sur l’IA pour matérialiser l’outil, pas seulement le spécifier. La décision se prend sur une maquette qui fonctionne, jamais sur un document.',
      points: [
        'Votre besoin métier se confronte au réel, tout de suite.',
        'Ce qui coûtait des mois se teste en quelques jours.',
        'L’outil épouse vos process — jamais l’inverse.',
      ],
    },
    method: {
      eyebrow: 'La méthode',
      title: 'Cinq temps, du croquis à l’écosystème.',
      steps: [
        { n: '01', title: 'Cadrage éclair', text: 'On confronte votre besoin métier à un artefact réel, pas à un cahier des charges. Quelques jours, pas des semaines.' },
        { n: '02', title: 'Pilote fonctionnel', text: 'Un outil cliquable, construit à l’IA, qui affronte votre vrai workflow. Assez léger pour être jeté — donc chaque décision est dé-risquée.' },
        { n: '03', title: 'Éprouvé & itéré', text: 'Mis entre les mains de vos utilisateurs, affiné jusqu’à une version de référence. Un onboarding plus rapide qu’un chantier classique.' },
        { n: '04', title: 'Intégration', text: 'Une fois l’outil validé, on le branche à vos systèmes et on le déploie pour vos équipes.' },
        { n: '05', title: 'Écosystème', text: 'Éprouvées chez un ou plusieurs clients, vos briques s’assemblent en un ensemble cohérent. L’aboutissement, pas le point de départ.' },
      ],
    },
    profiles: {
      eyebrow: 'À qui ça s’adresse',
      title: 'Deux portes d’entrée, un même savoir-faire.',
      items: [
        {
          tag: 'PME · ETI · grands comptes',
          kicker: 'Porte d’entrée',
          title: 'Testez une idée avant d’engager un chantier lourd.',
          text: 'Un besoin métier que les logiciels du marché servent mal — trop lourds, trop lents à faire évoluer. On construit le pilote qui le confronte au réel, on l’affine avec vos équipes, puis on l’intègre. Vous livrez la fonctionnalité que votre éditeur ne priorisera jamais.',
          example: 'Cas concret : un PLM leader trop lourd à déployer. Un pilote éprouve le besoin, évolue jusqu’à une version de référence et embarque un générateur de descriptifs qu’aucun éditeur ne sort assez vite.',
        },
        {
          tag: 'TPE · cabinets · indépendants premium',
          kicker: 'Moteur récurrent',
          title: 'Des fonctionnalités de grand groupe, à votre échelle.',
          text: 'Un site vitrine à l’animation ultra-fluide, un écosystème SEO embarqué, un CRM sur-mesure : les briques d’habitude réservées aux grandes structures, taillées pour la vôtre. Le pilote est proche du produit final, la mise en œuvre est rapide.',
          example: 'Cas concret : une maîtrise d’œuvre en copropriété gagne un site premium, un moteur de contenu SEO et un back-office sur-mesure — là où ses concurrents s’arrêtent à un site vitrine générique.',
        },
      ],
    },
    endgame: {
      eyebrow: 'L’aboutissement',
      title: 'Quand les pilotes tiennent, l’écosystème émerge.',
      text: 'Rien n’est imposé d’emblée. À mesure que vos outils s’éprouvent, ils s’interconnectent autour d’un socle de données commun — jusqu’à remplacer le patchwork de logiciels rigides par un ensemble unique, taillé à votre métier.',
    },
    interconnect: {
      eyebrow: 'Le liant',
      title: 'L’interconnexion n’est pas une option. C’est l’aboutissement.',
      text: 'Une fois éprouvés, vos modules partagent le même socle de données. Une commande saisie met à jour le stock, déclenche la facturation, alimente vos tableaux de bord et informe le portail client — sans aucune ressaisie. C’est là que se gagne le temps, et la sérénité.',
    },
  },

  methode: {
    meta: {
      title: 'La méthode — Meridian Architecture',
      description: 'Cinq temps, du pilote fonctionnel à l’écosystème : cadrage éclair, pilote, itération, intégration, écosystème — un livrable concret à chaque temps.',
    },
    hero: {
      eyebrow: 'La méthode',
      title: 'Du pilote à l’écosystème, sans boîte noire.',
      lead: 'Une démarche claire et jalonnée : à chaque temps, un livrable concret que vous pouvez voir, tester et valider.',
    },
    deliverableLabel: 'Livrable',
    steps: [
      { n: '01', title: 'Cadrage éclair', text: 'On confronte votre besoin métier à un artefact réel, pas à un cahier des charges. Quelques jours, pas des semaines.', deliverable: 'Une cible partagée et le périmètre du pilote.' },
      { n: '02', title: 'Pilote fonctionnel', text: 'Un outil cliquable, construit à l’IA, qui affronte votre vrai workflow. Assez léger pour être jeté — donc chaque décision est dé-risquée.', deliverable: 'Un outil cliquable, testé sur votre workflow réel.' },
      { n: '03', title: 'Éprouvé & itéré', text: 'Mis entre les mains de vos utilisateurs, affiné jusqu’à une version de référence. Un onboarding plus rapide qu’un chantier classique.', deliverable: 'Une version de référence validée par vos équipes.' },
      { n: '04', title: 'Intégration', text: 'Une fois l’outil validé, on le branche à vos systèmes et on le déploie pour vos équipes.', deliverable: 'L’outil connecté à vos systèmes, en production.' },
      { n: '05', title: 'Écosystème', text: 'Éprouvées chez un ou plusieurs clients, vos briques s’assemblent en un ensemble cohérent. L’aboutissement, pas le point de départ.', deliverable: 'Des briques réutilisables qui s’assemblent, à votre rythme.' },
    ],
    principles: {
      eyebrow: 'Nos engagements',
      title: 'Comment nous travaillons',
      items: [
        { title: 'Transparence', text: 'Vous comprenez ce qui est construit, et pourquoi, à chaque temps.' },
        { title: 'Itératif', text: 'On livre par incréments utiles. Vous voyez de la valeur dès les premiers jours.' },
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
      'We build, with AI, the working pilot that confronts your idea with reality — then the bespoke tool that follows.',
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
    tagline: 'The working pilot that turns your hunch into a decision — built with AI, cut to your business.',
    metaDescription:
      'Meridian Architecture builds, with AI, the working pilot that confronts your idea with reality, proves it and integrates it — then assembles it into a bespoke ecosystem.',
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
      title: 'Meridian Architecture — the working pilot that turns a hunch into a decision',
      description:
        'We build, with AI, in days, the working pilot that confronts your idea with reality — then the bespoke tool your market software can’t deliver.',
    },
    hero: {
      eyebrow: 'Product Builder · bespoke, powered by AI',
      titleA: 'A working pilot,',
      titleB: 'not a spec sheet.',
      subtitle:
        'We build, with AI, in days, the real, clickable tool that confronts your idea with reality — before you commit to any build.',
      scrollHint: 'Scroll',
    },
    figures: [
      { value: '5', label: 'acts, from sketch to ecosystem' },
      { value: '1', label: 'partner: PO · design · UX' },
      { value: 'Days', label: 'for a pilot — not months' },
      { value: 'AI', label: 'at the core of the build' },
    ],
    problem: {
      eyebrow: 'The reality',
      title: 'Testing an idea costs too much, too late.',
      intro:
        'Between the business hunch and the first usable tool, the old world imposes specs, weeks of development and validation cycles. The result: you stop daring to test, you endure rigid software, and the bill climbs.',
      items: [
        { title: 'Too slow', text: 'Months between the idea and the first version you can actually try.' },
        { title: 'Too rigid', text: 'You bend your processes to fit into generic software.' },
        { title: 'Too risky', text: 'You commit to a heavy build without confronting the need with reality.' },
        { title: 'Too costly', text: 'Stacked licences for tools you only half use.' },
      ],
    },
    vision: {
      eyebrow: 'The Meridian answer',
      title: 'Designing by building.',
      lead: 'We no longer spec a tool: we build it, and confront it with reality.',
      body:
        'A single partner combines product owner, designer and UX researcher, and leans on AI to materialise a working pilot in days. The decision is made on a mock-up that works — never on a document. What holds, we prove, integrate, then assemble.',
      points: [
        'Your business need meets reality, right away.',
        'What used to take months is tested in days.',
        'The tool fits your processes — never the reverse.',
      ],
    },
    pillars: {
      eyebrow: 'The outcome',
      title: 'The bricks that end up assembling.',
      intro:
        'Nothing is imposed upfront. As your pilots prove themselves, they interconnect around a shared core — until a single ecosystem, cut to your business.',
      note: 'And whatever else your business needs, beyond these five domains.',
    },
    ecosystem: {
      eyebrow: 'The interconnection',
      title: 'In the end, everything connects.',
      caption:
        'At the centre, your data core. Around it, your proven modules. Hover a room to light up its links.',
    },
    method: {
      eyebrow: 'The method',
      title: 'Five acts, from sketch to ecosystem.',
      intro: 'A clear, staged approach, from the first pilot to the ecosystem — you see value in the first days.',
      steps: [
        { n: '01', title: 'Rapid framing', text: 'We confront your need with a real artefact, not a spec sheet.' },
        { n: '02', title: 'Working pilot', text: 'A clickable tool, built with AI, that faces your real workflow.' },
        { n: '03', title: 'Proven & iterated', text: 'Refined in your users’ hands, up to a reference version.' },
        { n: '04', title: 'Integration', text: 'We wire it into your systems and deploy it for your teams.' },
        { n: '05', title: 'Ecosystem', text: 'Proven, your bricks assemble into a coherent whole.' },
      ],
    },
    why: {
      eyebrow: 'Why now',
      title: 'Bespoke, finally within reach.',
      items: [
        { title: 'Fast', text: 'AI collapses timelines: a pilot is built in days where it used to take months.' },
        { title: 'Exactly your business', text: 'No compromise with generic software: the tool fits your processes, your vocabulary, your reality.' },
        { title: 'No risk', text: 'We validate on a mock-up that works before investing in a heavy build.' },
      ],
    },
    useCases: {
      eyebrow: 'Who it’s for',
      title: 'Two front doors, one craft.',
      items: [
        { tag: 'SMEs · mid-market · large accounts', title: 'Test an idea before the heavy build', text: 'A need your market software serves poorly? We build the pilot that confronts it with reality, then integrate it — and ship the feature your vendor won’t release fast enough.' },
        { tag: 'Micro-businesses · firms · independents', title: 'Large-group features, at your scale', text: 'Ultra-smooth showcase site, embedded SEO, bespoke CRM: the bricks reserved for large organisations, cut for yours.' },
        { tag: 'In time', title: 'An ecosystem that emerges', text: 'Proven pilots interconnect around a shared core — the bespoke ecosystem comes last, once the ground is safe.' },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'One conviction: your tools should look like your business.',
      text: 'Meridian Architecture grew from a simple observation — companies deserve better than a pile of software that constrains them. We build the alternative, one pilot at a time.',
      cta: 'Our vision',
    },
    finalCta: {
      eyebrow: 'Let’s talk',
      title: 'Describe your idea. We’ll build you the pilot.',
      text: 'A first conversation is enough to frame your need and sketch the pilot that will confront it with reality. No commitment.',
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
        { title: 'AI-powered', text: 'AI materialises the prototype in days, not months. Iterating becomes almost free.' },
        { title: 'From prototype to ecosystem', text: 'The proven prototype becomes the reference tool, then a brick of your ecosystem.' },
      ],
    },
  },

  solutions: {
    meta: {
      title: 'The offer — Meridian Architecture',
      description: 'A working pilot built with AI in days to confront your idea with reality, prove it, integrate it — then assemble it into an ecosystem.',
    },
    hero: {
      eyebrow: 'The offer',
      title: 'A working pilot, not a spec sheet.',
      lead: 'Where the old world chained specifications, weeks of development and validation cycles, we build — with AI — a real, clickable tool in a matter of days. You confront your idea with reality before committing to anything.',
    },
    builder: {
      eyebrow: 'The craft',
      title: 'Product Builder: designing by building.',
      body: 'A single partner combines what used to take three roles — product owner, product designer, UX researcher — and leans on AI to materialise the tool, not just specify it. The decision is made on a mock-up that works, never on a document.',
      points: [
        'Your business need meets reality, right away.',
        'What used to take months is tested in days.',
        'The tool fits your processes — never the reverse.',
      ],
    },
    method: {
      eyebrow: 'The method',
      title: 'Five acts, from sketch to ecosystem.',
      steps: [
        { n: '01', title: 'Rapid framing', text: 'We confront your business need with a real artefact, not a spec sheet. Days, not weeks.' },
        { n: '02', title: 'Working pilot', text: 'A clickable tool, built with AI, that faces your real workflow. Light enough to throw away — so every decision is de-risked.' },
        { n: '03', title: 'Proven & iterated', text: 'Put in your users’ hands, refined to a reference version. Onboarding faster than a traditional build.' },
        { n: '04', title: 'Integration', text: 'Once the tool is validated, we wire it into your systems and deploy it for your teams.' },
        { n: '05', title: 'Ecosystem', text: 'Proven across one or several clients, your bricks assemble into a coherent whole. The outcome, not the starting point.' },
      ],
    },
    profiles: {
      eyebrow: 'Who it’s for',
      title: 'Two front doors, one craft.',
      items: [
        {
          tag: 'SMEs · mid-market · large accounts',
          kicker: 'Front door',
          title: 'Test an idea before committing to a heavy build.',
          text: 'A business need that market software serves poorly — too heavy, too slow to evolve. We build the pilot that confronts it with reality, refine it with your teams, then integrate it. You ship the feature your vendor will never prioritise.',
          example: 'Real case: a leading PLM too heavy to roll out. A pilot proves the need, evolves to a reference version and ships a description generator no vendor releases fast enough.',
        },
        {
          tag: 'Micro-businesses · firms · premium independents',
          kicker: 'Recurring engine',
          title: 'Large-group features, at your scale.',
          text: 'A showcase site with ultra-smooth motion, an embedded SEO ecosystem, a bespoke CRM: the bricks usually reserved for large organisations, cut for yours. The pilot is close to the final product, delivery is fast.',
          example: 'Real case: a property-management firm gains a premium site, an SEO content engine and a bespoke back-office — where its competitors stop at a generic showcase site.',
        },
      ],
    },
    endgame: {
      eyebrow: 'The outcome',
      title: 'When the pilots hold, the ecosystem emerges.',
      text: 'Nothing is imposed upfront. As your tools prove themselves, they interconnect around a shared data core — until the patchwork of rigid software gives way to a single whole, cut to your business.',
    },
    interconnect: {
      eyebrow: 'The connective tissue',
      title: 'Interconnection isn’t an option. It’s the outcome.',
      text: 'Once proven, your modules share the same data core. An order updates stock, triggers invoicing, feeds your dashboards and informs the client portal — with no re-keying. That’s where the time, and the peace of mind, is won.',
    },
  },

  methode: {
    meta: {
      title: 'The method — Meridian Architecture',
      description: 'Five acts, from working pilot to ecosystem: rapid framing, pilot, iteration, integration, ecosystem — a concrete deliverable at every act.',
    },
    hero: {
      eyebrow: 'The method',
      title: 'From pilot to ecosystem, no black box.',
      lead: 'A clear, staged approach: at every act, a concrete deliverable you can see, test and validate.',
    },
    deliverableLabel: 'Deliverable',
    steps: [
      { n: '01', title: 'Rapid framing', text: 'We confront your business need with a real artefact, not a spec sheet. Days, not weeks.', deliverable: 'A shared target and the pilot’s scope.' },
      { n: '02', title: 'Working pilot', text: 'A clickable tool, built with AI, that faces your real workflow. Light enough to throw away — so every decision is de-risked.', deliverable: 'A clickable tool, tested on your real workflow.' },
      { n: '03', title: 'Proven & iterated', text: 'Put in your users’ hands, refined to a reference version. Onboarding faster than a traditional build.', deliverable: 'A reference version validated by your teams.' },
      { n: '04', title: 'Integration', text: 'Once the tool is validated, we wire it into your systems and deploy it for your teams.', deliverable: 'The tool connected to your systems, in production.' },
      { n: '05', title: 'Ecosystem', text: 'Proven across one or several clients, your bricks assemble into a coherent whole. The outcome, not the starting point.', deliverable: 'Reusable bricks that assemble, at your pace.' },
    ],
    principles: {
      eyebrow: 'Our commitments',
      title: 'How we work',
      items: [
        { title: 'Transparency', text: 'You understand what is being built, and why, at every act.' },
        { title: 'Iterative', text: 'We ship in useful increments. You see value in the first days.' },
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
