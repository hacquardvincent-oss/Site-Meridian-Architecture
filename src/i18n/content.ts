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
      title: 'Meridian Architecture — automatiser ce dont personne n’a su écrire les règles',
      description:
        'Une macro exécute des règles qu’on a su écrire. Meridian automatise ce dont personne n’a su écrire les règles — à trois échelles : une tâche, une capacité, un système. Chaque réalisation est mesurée.',
    },
    // Temps 1 — la frontière
    frontiere: {
      eyebrow: 'Automatisation sur-mesure',
      lineA: 'Une macro exécute des règles qu’on a su écrire.',
      lineB: 'Ce qui change, c’est d’automatiser ce dont personne n’a su écrire les règles.',
      cue: 'Faites défiler',
    },
    // Temps 2 — les trois marches
    marches: {
      eyebrow: 'Trois marches',
      title: 'La taille de ce qu’on automatise.',
      intro:
        'Pas trois domaines — un escalier. Chaque marche est une décision plus engageante que la précédente, et l’on ne monte au système qu’après avoir su tenir la tâche.',
      col: { automatise: 'Ce qu’on automatise', decide: 'Qui décide', ampleur: 'Ordre de grandeur' },
      items: [
        { n: '01', name: 'Une tâche', automatise: 'un geste répété par une équipe', decide: 'un responsable d’équipe', ampleur: 'quelques jours' },
        { n: '02', name: 'Une capacité', automatise: 'ce que votre outil ne sait pas faire', decide: 'un responsable digital', ampleur: 'quelques semaines' },
        { n: '03', name: 'Un système', automatise: 'ce qui ne circule pas entre vos outils', decide: 'la direction générale', ampleur: 'quelques mois' },
      ],
    },
    // Temps 3 — une preuve par marche
    preuves: {
      eyebrow: 'La preuve, pas la promesse',
      title: 'Un chiffre par marche. Daté. Rejouable.',
      intro:
        'Chaque réalisation porte des chiffres qu’on peut refaire — et le détail de ce qui n’est pas mesuré. Deux des trois attendent encore leur relevé ou l’accord du client : on le dit plutôt que de l’afficher en vert.',
      items: [
        { marche: 'Une tâche', value: '373 → 0', label: 'valeurs mal placées sur le classeur d’une collection, audité et retourné en 3,8 s.', source: 'Structure de l’offre · sept. 2026', pending: '' },
        { marche: 'Une capacité', value: 'Mesure en cours', label: 'sites headless en production chez des clients de Meridian — relevé Lighthouse, poids, parcours en préparation.', source: 'Sites headless', pending: 'relevé en cours' },
        { marche: 'Un système', value: 'Sous accord', label: 'un plan de collection accéléré, une saison traversée sur ses douze maillons. Mesuré, publication en attente d’accord.', source: 'PLM · PIM · DAM', pending: 'accord à obtenir' },
      ],
      link: 'Voir les réalisations',
    },
    // Temps 4 — la règle de la maison
    regle: {
      eyebrow: 'La règle de la maison',
      quoteA: 'Un contrôle doit mesurer ce qu’il affirme.',
      quoteB: 'Un vert qui ne mesure rien ment plus efficacement que l’absence de vert.',
      body:
        'C’est pourquoi chaque réalisation dit aussi ce qu’elle ne mesure pas. C’est la seule chose de ce site qu’un concurrent ne peut pas recopier demain — il faudrait qu’il l’ait fait.',
    },
    // Temps 5 — une seule action
    action: {
      eyebrow: 'Une seule action',
      title: 'Décrivez un geste que vous répétez.',
      text: 'On vous dit si c’est une tâche, une capacité ou un système — et ce qu’il faudrait pour l’automatiser.',
      button: 'Parler d’un cas précis',
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
      description: 'La conviction derrière Meridian Architecture : remettre l’humain au cœur du besoin et transformer les idées des équipes en outils déjà adoptés.',
    },
    hero: {
      eyebrow: 'À propos',
      title: 'L’humain au cœur, l’IA en soutien.',
      lead: 'Meridian Architecture est né d’une conviction : le meilleur cahier des charges est un prototype qui fonctionne — construit avec celles et ceux qui l’utiliseront.',
    },
    story: {
      eyebrow: 'Pourquoi Meridian',
      title: 'Remettre l’humain au cœur du besoin',
      body: 'Pendant des années, sortir un outil imposait des mois de spécifications, de développement et de conduite du changement — pour finir souvent subi par les équipes. L’IA rebat les cartes : on prototype les idées en quelques jours, on les fait tester et adapter en temps réel par celles et ceux qui s’en serviront. Meridian Architecture est né pour ça — partir de vos équipes, sous deux angles (vendre plus, produire mieux), et transformer leurs idées en outils déjà adoptés.',
    },
    values: {
      eyebrow: 'Ce qui nous guide',
      title: 'Nos repères',
      items: [
        { title: 'L’humain au centre', text: 'On construit avec vos équipes, jamais à leur place. L’outil leur ressemble, l’adoption est intégrée.' },
        { title: 'Deux angles', text: 'On part du concret : quels outils pour booster le chiffre d’affaires, quels outils pour gagner en productivité.' },
        { title: 'Zéro conduite du changement', text: 'Quand les équipes co-construisent, l’outil est adopté avant même la mise en production.' },
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
      title: 'Meridian Architecture — automating what no one could write the rules for',
      description:
        'A macro runs rules someone knew how to write. Meridian automates what no one could write the rules for — at three scales: a task, a capability, a system. Every case study is measured.',
    },
    // Temps 1 — the frontier
    frontiere: {
      eyebrow: 'Bespoke automation',
      lineA: 'A macro runs rules someone knew how to write.',
      lineB: 'What changes is automating what no one could write the rules for.',
      cue: 'Scroll',
    },
    // Temps 2 — the three steps
    marches: {
      eyebrow: 'Three steps',
      title: 'The size of what you automate.',
      intro:
        'Not three domains — a staircase. Each step is a bigger commitment than the last, and you only climb to the system once you can hold the task.',
      col: { automatise: 'What you automate', decide: 'Who decides', ampleur: 'Order of magnitude' },
      items: [
        { n: '01', name: 'A task', automatise: 'a gesture a team repeats', decide: 'a team lead', ampleur: 'a few days' },
        { n: '02', name: 'A capability', automatise: 'what your tool can’t do', decide: 'a digital lead', ampleur: 'a few weeks' },
        { n: '03', name: 'A system', automatise: 'what won’t flow between your tools', decide: 'the executive team', ampleur: 'a few months' },
      ],
    },
    // Temps 3 — one proof per step
    preuves: {
      eyebrow: 'Proof, not promise',
      title: 'One number per step. Dated. Replayable.',
      intro:
        'Every case study carries numbers you can re-run — and the detail of what isn’t measured. Two of the three still await their reading or the client’s consent: we say so, rather than showing it green.',
      items: [
        { marche: 'A task', value: '373 → 0', label: 'misplaced values in a collection’s workbook, audited and turned around in 3.8 s.', source: 'Offer structure · Sept. 2026', pending: '' },
        { marche: 'A capability', value: 'Measuring', label: 'headless sites live for Meridian clients — Lighthouse, weight and journey readings in preparation.', source: 'Headless sites', pending: 'reading in progress' },
        { marche: 'A system', value: 'Pending consent', label: 'a collection plan made faster, one season carried across its twelve links. Measured; publication awaiting consent.', source: 'PLM · PIM · DAM', pending: 'consent to obtain' },
      ],
      link: 'See the case studies',
    },
    // Temps 4 — the house rule
    regle: {
      eyebrow: 'The house rule',
      quoteA: 'A control must measure what it claims.',
      quoteB: 'A green that measures nothing lies more effectively than no green at all.',
      body:
        'That’s why every case study also states what it doesn’t measure. It’s the one thing on this site a competitor can’t copy tomorrow — they’d have to have done it.',
    },
    // Temps 5 — a single action
    action: {
      eyebrow: 'A single action',
      title: 'Describe a gesture you repeat.',
      text: 'We’ll tell you whether it’s a task, a capability or a system — and what it would take to automate it.',
      button: 'Talk about a specific case',
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
      description: 'The conviction behind Meridian Architecture: put people back at the heart of the need, and turn teams’ ideas into tools that are already adopted.',
    },
    hero: {
      eyebrow: 'About',
      title: 'People at the heart, AI in support.',
      lead: 'Meridian Architecture grew from one conviction: the best spec sheet is a prototype that works — built with the very people who’ll use it.',
    },
    story: {
      eyebrow: 'Why Meridian',
      title: 'Putting people back at the heart of the need',
      body: 'For years, shipping a tool meant months of specs, development and change management — only to end up endured by the teams. AI reshuffles the deck: we prototype ideas in days, then have them tested and adapted in real time by the very people who’ll use them. Meridian Architecture was born for this — start from your teams, under two angles (sell more, work better), and turn their ideas into tools that are already adopted.',
    },
    values: {
      eyebrow: 'What guides us',
      title: 'Our compass',
      items: [
        { title: 'People at the centre', text: 'We build with your teams, never in their place. The tool looks like them, adoption is built in.' },
        { title: 'Two angles', text: 'We start from the concrete: which tools to boost revenue, which tools to gain productivity.' },
        { title: 'Zero change management', text: 'When teams co-build, the tool is adopted before it even ships.' },
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
