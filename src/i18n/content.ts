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
      description: 'Le logiciel comme architecture : un édifice unique, sur-mesure et interconnecté, à la place d’un patchwork d’outils rigides.',
    },
    hero: {
      eyebrow: 'Le concept',
      title: 'Le logiciel comme architecture.',
      lead: 'On ne meuble pas un appartement en empilant des cabanes. On le conçoit. Pourquoi en irait-il autrement de vos logiciels ?',
    },
    sections: [
      {
        eyebrow: 'Le point de départ',
        title: 'Le patchwork a atteint ses limites',
        body: 'À force d’ajouter un outil par besoin, les entreprises se retrouvent avec un empilement ingérable : des données en silos, des process tordus pour entrer dans des cases génériques, des ressaisies, et une facture de licences qui ne cesse de grimper. La complexité n’est pas dans votre métier — elle est dans vos outils.',
      },
      {
        eyebrow: 'Le déplacement',
        title: 'D’un assemblage subi à un édifice conçu',
        body: 'Meridian renverse la logique. Au lieu de choisir des logiciels et d’y plier votre entreprise, nous partons de votre métier et nous concevons l’écosystème qui lui correspond exactement. Un plan d’ensemble, des fondations communes, des espaces ouverts les uns sur les autres — comme un grand loft où tout circule et rien ne cloisonne.',
      },
    ],
    principles: {
      eyebrow: 'Les principes',
      title: 'Quatre partis pris',
      items: [
        { title: 'Sur-mesure', text: 'L’outil épouse votre métier, votre vocabulaire, vos process. Zéro compromis générique.' },
        { title: 'Interconnecté', text: 'Un socle de données commun. Une information saisie une fois, disponible partout.' },
        { title: 'Propulsé par l’IA', text: 'L’IA accélère la conception et le développement — le sur-mesure devient rapide et abordable.' },
        { title: 'Évolutif', text: 'Votre écosystème vit et grandit avec vous. On l’ajuste en continu, sans tout reconstruire.' },
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
      description: 'La vision derrière Meridian Architecture : redonner aux entreprises des outils qui ressemblent à leur métier.',
    },
    hero: {
      eyebrow: 'À propos',
      title: 'Des outils qui ressemblent enfin à votre métier.',
      lead: 'Meridian Architecture est né d’une conviction simple : les entreprises méritent mieux qu’un assemblage de logiciels qui les contraignent.',
    },
    story: {
      eyebrow: 'Pourquoi Meridian',
      title: 'La complexité doit être dans l’outil, pas chez vous',
      body: 'Pendant des années, le sur-mesure est resté un luxe — long, cher, réservé aux grands groupes. Tout le monde s’est donc rabattu sur des logiciels génériques, en pliant son métier pour y entrer. L’IA rebat les cartes : concevoir et développer du sur-mesure devient rapide et abordable. Meridian Architecture est né pour saisir ce basculement et le mettre au service des entreprises qui veulent des outils à leur exacte mesure.',
    },
    values: {
      eyebrow: 'Ce qui nous guide',
      title: 'Nos repères',
      items: [
        { title: 'Le métier d’abord', text: 'On part de votre réalité, jamais d’un produit à caser.' },
        { title: 'La cohérence', text: 'Un écosystème, pas une collection d’outils. Tout doit tenir ensemble.' },
        { title: 'La durée', text: 'On construit pour évoluer, pas pour refaire dans deux ans.' },
      ],
    },
    founderNote: 'Note : cette page sera personnalisée avec votre parcours et votre photo.',
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
      description: 'Software as architecture: a single, bespoke, interconnected edifice instead of a patchwork of rigid tools.',
    },
    hero: {
      eyebrow: 'The concept',
      title: 'Software as architecture.',
      lead: 'You don’t furnish an apartment by stacking sheds. You design it. Why should your software be any different?',
    },
    sections: [
      {
        eyebrow: 'The starting point',
        title: 'The patchwork has hit its limits',
        body: 'By adding one tool per need, companies end up with an unmanageable stack: siloed data, processes twisted to fit generic boxes, re-keying, and a licence bill that keeps climbing. The complexity isn’t in your business — it’s in your tools.',
      },
      {
        eyebrow: 'The shift',
        title: 'From an assembly endured to an edifice designed',
        body: 'Meridian flips the logic. Instead of picking software and bending your company to it, we start from your business and design the ecosystem that fits it exactly. A master plan, shared foundations, spaces that open onto one another — like a large loft where everything flows and nothing is walled off.',
      },
    ],
    principles: {
      eyebrow: 'The principles',
      title: 'Four commitments',
      items: [
        { title: 'Bespoke', text: 'The tool fits your business, your vocabulary, your processes. Zero generic compromise.' },
        { title: 'Interconnected', text: 'A shared data core. Information entered once, available everywhere.' },
        { title: 'AI-powered', text: 'AI accelerates design and development — bespoke becomes fast and affordable.' },
        { title: 'Evolving', text: 'Your ecosystem lives and grows with you. We adjust it continuously, without rebuilding everything.' },
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
      description: 'The vision behind Meridian Architecture: giving companies tools that look like their business again.',
    },
    hero: {
      eyebrow: 'About',
      title: 'Tools that finally look like your business.',
      lead: 'Meridian Architecture grew from a simple conviction: companies deserve better than a pile of software that constrains them.',
    },
    story: {
      eyebrow: 'Why Meridian',
      title: 'Complexity belongs in the tool, not in you',
      body: 'For years, bespoke stayed a luxury — slow, expensive, reserved for large groups. So everyone fell back on generic software, bending their business to fit. AI reshuffles the deck: designing and developing bespoke becomes fast and affordable. Meridian Architecture was born to seize that shift and put it to work for companies that want tools cut exactly to their size.',
    },
    values: {
      eyebrow: 'What guides us',
      title: 'Our compass',
      items: [
        { title: 'Business first', text: 'We start from your reality, never from a product to place.' },
        { title: 'Coherence', text: 'An ecosystem, not a collection of tools. Everything must hold together.' },
        { title: 'The long run', text: 'We build to evolve, not to redo in two years.' },
      ],
    },
    founderNote: 'Note: this page will be personalised with your background and photo.',
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
