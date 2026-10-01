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
      title: 'Meridian Architecture — les logiciels sur-mesure que votre métier n’a pas encore',
      description:
        'On construit les outils que votre métier n’a pas encore : automatisation, logiciels métier sur-mesure, e-commerce — propulsés par l’IA, adoptés par vos équipes. Chaque réalisation est mesurée.',
    },
    // Temps 1 — l'accroche
    frontiere: {
      eyebrow: 'Architecture logicielle · propulsée par l’IA',
      title: 'On construit les outils que votre métier n’a pas encore.',
      sub: 'Automatisation, logiciels métier, e-commerce — propulsés par l’IA, adoptés par vos équipes.',
      cue: 'Faites défiler',
    },
    // Temps 2 — les trois piliers
    piliers: {
      eyebrow: 'Trois piliers',
      title: 'Un savoir-faire, trois terrains.',
      intro: 'Le même fil partout : du logiciel sur-mesure, propulsé par l’IA. Trois endroits où il change tout.',
      link: 'Le savoir-faire en détail',
      items: [
        { n: '01', name: 'Automatisation', what: 'Le travail répétitif, rendu à la machine.', examples: 'Mise en forme de fichiers, remplacer Excel, présentations automatiques, traitement de données, data-visualisation.' },
        { n: '02', name: 'Middleware', what: 'Vos logiciels métier, développés sur-mesure.', examples: 'PLM, PIM, BI, DAM, CRM, workflow shooting, demandes d’asset.' },
        { n: '03', name: 'E-commerce', what: 'Tout ce qui fait vendre en ligne.', examples: 'Site vitrine, e-commerce, moteur de recherche, merch auto, landing pages, espace client.' },
      ],
    },
    // Temps 3 — une preuve par pilier
    preuves: {
      eyebrow: 'La preuve, pas la promesse',
      title: 'Un chiffre par pilier. Daté. Rejouable.',
      intro:
        'Chaque réalisation porte des chiffres qu’on peut refaire — et le détail de ce qui n’est pas mesuré. Deux des trois attendent encore leur relevé ou l’accord du client : on le dit plutôt que de l’afficher en vert.',
      items: [
        { marche: 'Automatisation', value: '373 → 0', label: 'valeurs mal placées sur le classeur d’une collection, audité et retourné en 3,8 s.', source: 'Structure de l’offre · sept. 2026', pending: '' },
        { marche: 'E-commerce', value: 'Mesure en cours', label: 'sites headless en production chez des clients de Meridian — relevé Lighthouse, poids, parcours en préparation.', source: 'Sites headless', pending: 'relevé en cours' },
        { marche: 'Middleware', value: 'Sous accord', label: 'un plan de collection accéléré, une saison traversée sur ses douze maillons. Mesuré, publication en attente d’accord.', source: 'PLM · PIM · DAM', pending: 'accord à obtenir' },
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
      title: 'Décrivez ce qui vous fait perdre du temps.',
      text: 'On vous dit de quel pilier ça relève — automatisation, middleware ou e-commerce — et par où commencer.',
      button: 'Parler d’un cas précis',
      micro: 'Réponse sous 48 h ouvrées.',
    },
  },

  solutions: {
    meta: {
      title: 'Le savoir-faire — Meridian Architecture',
      description: 'Trois piliers : automatisation, logiciels métier sur-mesure (middleware) et e-commerce — développés sur-mesure, propulsés par l’IA. Voici, concrètement, ce que nous construisons.',
    },
    hero: {
      eyebrow: 'Le savoir-faire',
      title: 'Trois piliers, un seul sur-mesure.',
      lead: 'Automatisation, logiciels métier, e-commerce — développés à votre métier et propulsés par l’IA. Voici, concrètement, ce qu’on construit.',
    },
    axes: {
      eyebrow: 'Comment lire cette page',
      title: 'Un fil, trois terrains.',
      body: 'Le même savoir-faire partout : le logiciel sur-mesure, propulsé par l’IA. On commence par le pilier qui règle votre problème — et souvent, l’un appelle les autres.',
    },
    band: {
      eyebrow: 'De la brique à l’ensemble',
      line: 'Chaque outil éprouvé devient une brique de votre écosystème.',
    },
    pillars: [
      {
        slug: 'automatisation',
        name: 'Automatisation',
        gloss: 'le travail répétitif, rendu à la machine',
        what: 'On enlève les tâches qui mangent du temps — y compris ce qu’on ne savait pas automatiser avant. Ce que faisait un humain sans valeur ajoutée, la machine le fait, vite et sans erreur.',
        itemsLabel: 'Ce qu’on automatise',
        items: [
          'Mise en forme de fichiers : le document qui se met en page seul, à la bonne charte.',
          'Remplacer Excel : les classeurs bricolés deviennent un outil fiable, sans formule cachée.',
          'Présentations automatiques : le deck qui se régénère depuis vos données, toujours à jour.',
          'Traitement de données : croiser, nettoyer, repérer les écarts — sans ressaisie.',
          'Data-visualisation : vos chiffres lisibles d’un coup d’œil, pas noyés dans un tableau.',
        ],
        proof: 'Preuve : 373 valeurs mal placées sur le classeur d’une collection, repérées et corrigées en 3,8 s — l’audit prenait une demi-journée.',
      },
      {
        slug: 'middleware',
        name: 'Middleware',
        gloss: 'vos logiciels métier, développés sur-mesure',
        what: 'Quand l’outil n’existe pas sur étagère — ou coûte une fortune et impose ses process — on le développe à votre métier. Les logiciels se parlent enfin, la ressaisie disparaît.',
        itemsLabel: 'Ce qu’on développe sur-mesure',
        items: [
          'PLM — le cycle de vie produit, de l’idée au référencement.',
          'PIM — l’information produit, une source unique diffusée partout.',
          'BI — vos données réunies, lisibles, pilotables.',
          'DAM — vos visuels et médias, rangés et distribués sans ressaisie.',
          'CRM — la relation client centralisée, du prospect à la fidélité.',
          'Workflow shooting, demandes d’asset — vos circuits métier outillés, bout en bout.',
        ],
        proof: '',
      },
      {
        slug: 'e-commerce',
        name: 'E-commerce',
        gloss: 'tout ce qui fait vendre en ligne',
        what: 'Le canal de vente et tout ce qui l’entoure, prototypé sur-mesure et connecté à vos données. Chaque brique se mesure en conversion.',
        itemsLabel: 'Ce qui fait vendre',
        items: [
          'Site vitrine & e-commerce : rapides, soignés, connectés à vos outils.',
          'Moteur de recherche : qui comprend vos produits — synonymes, fautes, intention.',
          'Merchandising automatique : mise en avant selon stock et marge, « souvent achetés ensemble ».',
          'Création de landing pages : des pages de campagne montées vite, à votre charte.',
          'Espace client : commandes, SAV, documents — un portail qui déleste vos équipes.',
        ],
        proof: '',
      },
    ],
    endgame: {
      eyebrow: 'L’horizon',
      title: 'Quand les briques tiennent, l’écosystème émerge.',
      text: 'Rien n’est imposé d’emblée. À mesure que vos outils s’éprouvent, ils s’interconnectent autour d’un socle de données commun — jusqu’à remplacer le patchwork de logiciels rigides par un ensemble unique, taillé à votre métier.',
    },
    interconnect: {
      eyebrow: 'Le liant',
      title: 'L’interconnexion n’est pas une option. C’est l’horizon.',
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
    band: {
      eyebrow: 'Pourquoi ça tient',
      line: 'Vos équipes l’ont construit. C’est pour ça qu’elles l’adoptent.',
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
      success: 'Merci — votre message est bien parti. On vous répond sous 48 h ouvrées.',
      error: 'L’envoi a échoué. Réessayez, ou écrivez-nous directement à l’adresse ci-contre.',
      note: 'Vos données ne servent qu’à vous répondre. Jamais de revente, jamais de spam.',
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
      title: 'Meridian Architecture — the bespoke software your business doesn’t have yet',
      description:
        'We build the tools your business doesn’t have yet: automation, bespoke line-of-business software, e-commerce — powered by AI, adopted by your teams. Every case study is measured.',
    },
    // Temps 1 — the hook
    frontiere: {
      eyebrow: 'Software architecture · powered by AI',
      title: 'We build the tools your business doesn’t have yet.',
      sub: 'Automation, line-of-business software, e-commerce — powered by AI, adopted by your teams.',
      cue: 'Scroll',
    },
    // Temps 2 — the three pillars
    piliers: {
      eyebrow: 'Three pillars',
      title: 'One craft, three grounds.',
      intro: 'The same thread everywhere: bespoke software, powered by AI. Three places where it changes everything.',
      link: 'The craft in detail',
      items: [
        { n: '01', name: 'Automation', what: 'Repetitive work, handed back to the machine.', examples: 'Formatting files, replacing Excel, automatic presentations, data processing, data visualisation.' },
        { n: '02', name: 'Middleware', what: 'Your line-of-business software, built bespoke.', examples: 'PLM, PIM, BI, DAM, CRM, shoot workflows, asset requests.' },
        { n: '03', name: 'E-commerce', what: 'Everything that sells online.', examples: 'Showcase site, e-commerce, search engine, auto-merchandising, landing pages, client area.' },
      ],
    },
    // Temps 3 — one proof per pillar
    preuves: {
      eyebrow: 'Proof, not promise',
      title: 'One number per pillar. Dated. Replayable.',
      intro:
        'Every case study carries numbers you can re-run — and the detail of what isn’t measured. Two of the three still await their reading or the client’s consent: we say so, rather than showing it green.',
      items: [
        { marche: 'Automation', value: '373 → 0', label: 'misplaced values in a collection’s workbook, audited and turned around in 3.8 s.', source: 'Offer structure · Sept. 2026', pending: '' },
        { marche: 'E-commerce', value: 'Measuring', label: 'headless sites live for Meridian clients — Lighthouse, weight and journey readings in preparation.', source: 'Headless sites', pending: 'reading in progress' },
        { marche: 'Middleware', value: 'Pending consent', label: 'a collection plan made faster, one season carried across its twelve links. Measured; publication awaiting consent.', source: 'PLM · PIM · DAM', pending: 'consent to obtain' },
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
      title: 'Describe what’s eating your time.',
      text: 'We’ll tell you which pillar it falls under — automation, middleware or e-commerce — and where to start.',
      button: 'Talk about a specific case',
      micro: 'Reply within 48 business hours.',
    },
  },

  solutions: {
    meta: {
      title: 'The craft — Meridian Architecture',
      description: 'Three pillars: automation, bespoke line-of-business software (middleware) and e-commerce — built bespoke, powered by AI. Here, concretely, is what we build.',
    },
    hero: {
      eyebrow: 'The craft',
      title: 'Three pillars, one bespoke.',
      lead: 'Automation, line-of-business software, e-commerce — built to your business and powered by AI. Here, concretely, is what we build.',
    },
    axes: {
      eyebrow: 'How to read this page',
      title: 'One thread, three grounds.',
      body: 'The same craft everywhere: bespoke software, powered by AI. We start from the pillar that solves your problem — and often, one calls for the others.',
    },
    band: {
      eyebrow: 'From brick to whole',
      line: 'Each proven tool becomes a brick of your ecosystem.',
    },
    pillars: [
      {
        slug: 'automatisation',
        name: 'Automation',
        gloss: 'repetitive work, handed back to the machine',
        what: 'We remove the tasks that eat time — including what couldn’t be automated before. The no-value work a human used to do, the machine does, fast and without error.',
        itemsLabel: 'What we automate',
        items: [
          'Formatting files: the document that lays itself out, to the right style.',
          'Replacing Excel: hacked-together workbooks become a reliable tool, with no hidden formula.',
          'Automatic presentations: the deck that regenerates from your data, always up to date.',
          'Data processing: cross, clean, spot the gaps — with no re-keying.',
          'Data visualisation: your figures readable at a glance, not buried in a table.',
        ],
        proof: 'Proof: 373 misplaced values in a collection’s workbook, caught and corrected in 3.8 s — the audit used to take half a day.',
      },
      {
        slug: 'middleware',
        name: 'Middleware',
        gloss: 'your line-of-business software, built bespoke',
        what: 'When the tool doesn’t exist off the shelf — or costs a fortune and imposes its processes — we build it to your business. Your software finally talks, re-keying disappears.',
        itemsLabel: 'What we build bespoke',
        items: [
          'PLM — the product lifecycle, from idea to listing.',
          'PIM — product information, one source distributed everywhere.',
          'BI — your data unified, readable, steerable.',
          'DAM — your visuals and media, organised and distributed with no re-keying.',
          'CRM — the customer relationship centralised, from lead to loyalty.',
          'Shoot workflows, asset requests — your business circuits tooled, end to end.',
        ],
        proof: '',
      },
      {
        slug: 'e-commerce',
        name: 'E-commerce',
        gloss: 'everything that sells online',
        what: 'The sales channel and everything around it, prototyped bespoke and connected to your data. Every brick is measured in conversion.',
        itemsLabel: 'What drives sales',
        items: [
          'Showcase & e-commerce sites: fast, polished, connected to your tools.',
          'Search engine: one that understands your products — synonyms, typos, intent.',
          'Automatic merchandising: promotion by stock and margin, “often bought together”.',
          'Landing page creation: campaign pages built fast, to your style.',
          'Client area: orders, support, documents — a portal that offloads your teams.',
        ],
        proof: '',
      },
    ],
    endgame: {
      eyebrow: 'The horizon',
      title: 'When the bricks hold, the ecosystem emerges.',
      text: 'Nothing is imposed upfront. As your tools prove themselves, they interconnect around a shared data core — until the patchwork of rigid software gives way to a single whole, cut to your business.',
    },
    interconnect: {
      eyebrow: 'The connective tissue',
      title: 'Interconnection isn’t an option. It’s the horizon.',
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
    band: {
      eyebrow: 'Why it holds',
      line: 'Your teams built it. That’s why they adopt it.',
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
      success: 'Thank you — your message is on its way. We’ll reply within 48 business hours.',
      error: 'Sending failed. Please try again, or email us directly at the address opposite.',
      note: 'Your details are only used to reply to you. Never resold, never spammed.',
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
