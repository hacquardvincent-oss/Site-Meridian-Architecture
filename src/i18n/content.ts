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
      'Nous remplaçons la multitude de logiciels rigides par un écosystème unique, sur-mesure et propulsé par l’IA.',
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
      'Un écosystème logiciel unique, sur-mesure, propulsé par l’IA — taillé exactement à votre réalité métier.',
    metaDescription:
      'Meridian Architecture remplace la multitude de logiciels rigides des entreprises par un écosystème unique, sur-mesure et propulsé par l’IA : BI, ERP, PLM, PIM, sites — interconnectés.',
    email: 'contact@meridian-architecture.com',
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
      title: 'Meridian Architecture — l’écosystème logiciel sur-mesure, propulsé par l’IA',
      description:
        'Nous remplaçons la multitude de logiciels rigides par un écosystème unique, sur-mesure et propulsé par l’IA : BI, ERP, PLM, PIM, sites — interconnectés.',
    },
    hero: {
      eyebrow: 'Architecture logicielle sur-mesure',
      titleA: 'Un seul édifice',
      titleB: 'pour tout votre métier.',
      subtitle:
        'Nous remplaçons la multitude de logiciels rigides de votre entreprise par un écosystème unique, conçu sur-mesure et propulsé par l’IA, pour coller exactement à votre réalité métier.',
      scrollHint: 'Faites défiler',
    },
    figures: [
      { value: '1', label: 'écosystème unifié' },
      { value: '5+', label: 'domaines : BI · ERP · PLM · PIM · Web' },
      { value: '100%', label: 'sur-mesure, à votre métier' },
      { value: 'IA', label: 'au cœur de la conception' },
    ],
    problem: {
      eyebrow: 'Le constat',
      title: 'Vous n’avez pas un problème de logiciels. Vous en avez trop.',
      intro:
        'Chaque besoin a fini par avoir son outil. Résultat : un patchwork qui ne se parle pas, vous contraint, et vous coûte cher — en licences comme en temps perdu.',
      items: [
        { title: 'Des silos', text: 'Vos données vivent dans dix outils différents, jamais d’accord entre eux.' },
        { title: 'De la rigidité', text: 'Vous pliez vos process pour entrer dans des logiciels génériques.' },
        { title: 'Des ressaisies', text: 'La même information saisie trois fois, avec trois fois plus d’erreurs.' },
        { title: 'Une facture qui monte', text: 'Des abonnements empilés pour des outils que vous n’utilisez qu’à moitié.' },
      ],
    },
    vision: {
      eyebrow: 'La réponse Meridian',
      title: 'Et si le logiciel se concevait comme un bâtiment ?',
      lead:
        'Un plan d’ensemble, des fondations solides, des espaces ouverts qui communiquent.',
      body:
        'Plutôt qu’empiler des outils, nous concevons un édifice unique et cohérent. Chaque domaine — BI, ERP, PLM, PIM, web — devient une pièce ouverte sur les autres. Pensé pour votre métier, propulsé par l’IA, évolutif dans le temps.',
      points: [
        'Sur-mesure : l’outil épouse votre métier, pas l’inverse.',
        'Interconnecté : une donnée saisie une fois, disponible partout.',
        'Propulsé par l’IA : conçu et construit vite, et juste.',
      ],
    },
    pillars: {
      eyebrow: 'Les pièces de l’édifice',
      title: 'Cinq domaines, un seul écosystème.',
      intro:
        'Chaque module est conçu sur-mesure et nativement connecté aux autres. Vous n’achetez pas des briques : vous habitez un ensemble cohérent.',
      note: 'Et tout ce dont votre métier a besoin, au-delà de ces cinq domaines.',
    },
    ecosystem: {
      eyebrow: 'L’interconnexion',
      title: 'Tout est relié. C’est tout l’intérêt.',
      caption:
        'Au centre, votre socle de données. Autour, vos modules. Survolez une pièce pour voir ses liaisons s’éclairer.',
    },
    method: {
      eyebrow: 'La méthode',
      title: 'Un plan avant de bâtir.',
      intro: 'Une démarche d’architecte, claire et transparente, du premier croquis à l’évolution continue.',
      steps: [
        { n: '01', title: 'Cadrage', text: 'On cartographie votre métier, vos process et vos irritants. On dessine la cible.' },
        { n: '02', title: 'Conception', text: 'On architecture l’écosystème : modules, données, parcours. Un plan avant de bâtir.' },
        { n: '03', title: 'Build avec l’IA', text: 'On construit vite et juste, l’IA démultipliant chaque étape du développement.' },
        { n: '04', title: 'Intégration', text: 'On connecte vos outils et données existants. Tout communique, rien ne se ressaisit.' },
        { n: '05', title: 'Évolution', text: 'Votre écosystème vit avec vous : on l’ajuste et on l’étend, en continu.' },
      ],
    },
    why: {
      eyebrow: 'Pourquoi maintenant',
      title: 'Le sur-mesure, enfin à votre portée.',
      items: [
        { title: 'Abordable', text: 'L’IA réduit drastiquement le coût et les délais du développement. Le sur-mesure n’est plus réservé aux grands groupes.' },
        { title: 'Exactement votre métier', text: 'Aucun compromis avec un logiciel générique : l’outil épouse vos process, votre vocabulaire, votre réalité.' },
        { title: 'Sans silos', text: 'Un seul écosystème interconnecté. Fini les doubles saisies et les données qui se contredisent.' },
      ],
    },
    useCases: {
      eyebrow: 'Cas d’usage',
      title: 'Ce que ça change, concrètement.',
      items: [
        { tag: 'Retail & distribution', title: 'Du catalogue à la vente, sans rupture', text: 'PIM, e-commerce et gestion synchronisés : fiches produit, stocks et commandes parlent enfin d’une seule voix.' },
        { tag: 'Services B2B', title: 'Vos process métier, outillés sur-mesure', text: 'BI, gestion et portail client : pilotez vos missions, automatisez l’administratif, offrez une vraie expérience.' },
        { tag: 'Industrie', title: 'Du bureau d’études à l’atelier', text: 'PLM et ERP connectés : produits, nomenclatures et ordres de fabrication suivent le même fil.' },
      ],
    },
    about: {
      eyebrow: 'À propos',
      title: 'Une conviction : vos outils doivent ressembler à votre métier.',
      text: 'Meridian Architecture est né d’un constat simple — les entreprises méritent mieux qu’un assemblage de logiciels qui les contraignent. Nous bâtissons l’alternative.',
      cta: 'Notre vision',
    },
    finalCta: {
      eyebrow: 'Parlons-en',
      title: 'Décrivez votre métier. On vous montre l’édifice.',
      text: 'Un premier échange suffit pour cartographier vos irritants et esquisser votre écosystème cible. Sans engagement.',
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
      title: 'Solutions — Meridian Architecture',
      description: 'BI, ERP, PLM, PIM, sites & portails : cinq domaines conçus sur-mesure et nativement interconnectés.',
    },
    hero: {
      eyebrow: 'Solutions',
      title: 'Cinq domaines. Un seul édifice.',
      lead: 'Des modules sur-mesure, pensés pour fonctionner ensemble dès le premier jour. Et tout ce que votre métier réclame en plus.',
    },
    detail: [
      { abbr: 'BI', name: 'Business Intelligence', text: 'Vos données réunies, lisibles, pilotables.', more: 'Des tableaux de bord clairs, des indicateurs qui comptent vraiment, une lecture en temps réel de votre activité. La décision, enfin appuyée sur des faits — pas sur un export Excel d’il y a trois semaines.' },
      { abbr: 'ERP', name: 'Gestion intégrée', text: 'Le cœur opérationnel de votre entreprise.', more: 'Ventes, achats, stocks, finance, production : orchestrés selon vos process réels, pas selon ceux d’un éditeur. L’ossature qui fait tenir tout le reste.' },
      { abbr: 'PLM', name: 'Cycle de vie produit', text: 'De l’idée au référencement.', more: 'Concevez, versionnez et faites évoluer vos produits sans perdre le fil. Chaque évolution tracée, chaque version maîtrisée, du premier croquis à la mise sur le marché.' },
      { abbr: 'PIM', name: 'Information produit', text: 'Une source unique et fiable.', more: 'Toutes vos fiches produit centralisées, enrichies une fois et diffusées partout — site, marketplaces, catalogues. Fini les ressaisies et les fiches qui se contredisent d’un canal à l’autre.' },
      { abbr: 'WEB', name: 'Sites & portails', text: 'Votre vitrine et vos espaces connectés.', more: 'Sites, espaces clients, portails partenaires — branchés en direct sur vos données. Ce que voit le client est toujours à jour, parce que c’est la même source.' },
    ],
    interconnect: {
      eyebrow: 'Le liant',
      title: 'L’interconnexion n’est pas une option. C’est le projet.',
      text: 'Chaque module partage le même socle de données. Une commande saisie met à jour le stock, déclenche la facturation, alimente vos tableaux de bord et informe le portail client — sans aucune ressaisie. C’est là que se gagne le temps, et la sérénité.',
    },
  },

  methode: {
    meta: {
      title: 'La méthode — Meridian Architecture',
      description: 'Une démarche d’architecte : cadrage, conception, build avec l’IA, intégration, évolution.',
    },
    hero: {
      eyebrow: 'La méthode',
      title: 'Un plan avant de bâtir.',
      lead: 'Pas de boîte noire. Une démarche d’architecte, claire et jalonnée, où vous voyez l’édifice se dessiner à chaque étape.',
    },
    principles: {
      eyebrow: 'Nos engagements',
      title: 'Comment nous travaillons',
      items: [
        { title: 'Transparence', text: 'Vous comprenez ce qui est construit, et pourquoi, à chaque jalon.' },
        { title: 'Itératif', text: 'On livre par incréments utiles. Vous voyez de la valeur tôt, pas au bout de six mois.' },
        { title: 'Vous restez maître', text: 'C’est votre écosystème, votre donnée, votre code. Pas de dépendance subie.' },
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
      'We replace the clutter of rigid software with a single, custom-built ecosystem powered by AI.',
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
    tagline: 'A single, custom-built software ecosystem powered by AI — shaped exactly to your business reality.',
    metaDescription:
      'Meridian Architecture replaces the clutter of rigid business software with a single, custom-built ecosystem powered by AI: BI, ERP, PLM, PIM, websites — all interconnected.',
    email: 'contact@meridian-architecture.com',
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
      title: 'Meridian Architecture — the custom software ecosystem, powered by AI',
      description:
        'We replace the clutter of rigid software with a single, custom-built ecosystem powered by AI: BI, ERP, PLM, PIM, websites — interconnected.',
    },
    hero: {
      eyebrow: 'Custom software architecture',
      titleA: 'One edifice',
      titleB: 'for your whole business.',
      subtitle:
        'We replace the clutter of rigid software in your company with a single ecosystem, custom-built and powered by AI, shaped exactly to your business reality.',
      scrollHint: 'Scroll',
    },
    figures: [
      { value: '1', label: 'unified ecosystem' },
      { value: '5+', label: 'domains: BI · ERP · PLM · PIM · Web' },
      { value: '100%', label: 'tailored to your business' },
      { value: 'AI', label: 'at the core of the build' },
    ],
    problem: {
      eyebrow: 'The reality',
      title: 'You don’t have a software problem. You have too many.',
      intro:
        'Every need ended up with its own tool. The result: a patchwork that doesn’t talk to itself, constrains you, and costs you dearly — in licences and in wasted time.',
      items: [
        { title: 'Silos', text: 'Your data lives in ten different tools that never agree with each other.' },
        { title: 'Rigidity', text: 'You bend your processes to fit into generic software.' },
        { title: 'Re-keying', text: 'The same information entered three times, with three times the errors.' },
        { title: 'A rising bill', text: 'Stacked subscriptions for tools you only half use.' },
      ],
    },
    vision: {
      eyebrow: 'The Meridian answer',
      title: 'What if software were designed like a building?',
      lead: 'A master plan, solid foundations, open spaces that connect.',
      body:
        'Instead of stacking tools, we design a single, coherent edifice. Each domain — BI, ERP, PLM, PIM, web — becomes a room that opens onto the others. Built for your business, powered by AI, designed to evolve.',
      points: [
        'Bespoke: the tool fits your business, not the reverse.',
        'Interconnected: data entered once, available everywhere.',
        'AI-powered: designed and built fast, and right.',
      ],
    },
    pillars: {
      eyebrow: 'The rooms of the edifice',
      title: 'Five domains, one ecosystem.',
      intro:
        'Every module is custom-built and natively connected to the others. You don’t buy bricks: you live in a coherent whole.',
      note: 'And whatever else your business needs, beyond these five domains.',
    },
    ecosystem: {
      eyebrow: 'The interconnection',
      title: 'Everything is connected. That’s the whole point.',
      caption:
        'At the centre, your data core. Around it, your modules. Hover a room to light up its links.',
    },
    method: {
      eyebrow: 'The method',
      title: 'A plan before we build.',
      intro: 'An architect’s approach — clear and transparent, from the first sketch to continuous evolution.',
      steps: [
        { n: '01', title: 'Framing', text: 'We map your business, processes and pain points. We draw the target.' },
        { n: '02', title: 'Design', text: 'We architect the ecosystem: modules, data, journeys. A plan before we build.' },
        { n: '03', title: 'AI-powered build', text: 'We build fast and right, AI amplifying every step of development.' },
        { n: '04', title: 'Integration', text: 'We connect your existing tools and data. Everything talks, nothing is re-keyed.' },
        { n: '05', title: 'Evolution', text: 'Your ecosystem lives with you: we adjust and extend it, continuously.' },
      ],
    },
    why: {
      eyebrow: 'Why now',
      title: 'Bespoke, finally within reach.',
      items: [
        { title: 'Affordable', text: 'AI drastically cuts the cost and time of development. Bespoke is no longer reserved for large groups.' },
        { title: 'Exactly your business', text: 'No compromise with generic software: the tool fits your processes, your vocabulary, your reality.' },
        { title: 'No silos', text: 'A single interconnected ecosystem. No more double entry, no more data that contradicts itself.' },
      ],
    },
    useCases: {
      eyebrow: 'Use cases',
      title: 'What it changes, concretely.',
      items: [
        { tag: 'Retail & distribution', title: 'From catalogue to sale, seamlessly', text: 'PIM, e-commerce and operations in sync: product sheets, stock and orders finally speak with one voice.' },
        { tag: 'B2B services', title: 'Your processes, tooled bespoke', text: 'BI, operations and a client portal: run your engagements, automate admin, deliver a real experience.' },
        { tag: 'Industry', title: 'From design office to workshop', text: 'PLM and ERP connected: products, bills of materials and work orders follow the same thread.' },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'One conviction: your tools should look like your business.',
      text: 'Meridian Architecture grew from a simple observation — companies deserve better than a pile of software that constrains them. We build the alternative.',
      cta: 'Our vision',
    },
    finalCta: {
      eyebrow: 'Let’s talk',
      title: 'Describe your business. We’ll show you the edifice.',
      text: 'A first conversation is enough to map your pain points and sketch your target ecosystem. No commitment.',
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
      title: 'Solutions — Meridian Architecture',
      description: 'BI, ERP, PLM, PIM, sites & portals: five domains built bespoke and natively interconnected.',
    },
    hero: {
      eyebrow: 'Solutions',
      title: 'Five domains. One edifice.',
      lead: 'Bespoke modules designed to work together from day one. And whatever else your business calls for.',
    },
    detail: [
      { abbr: 'BI', name: 'Business Intelligence', text: 'Your data, unified and readable.', more: 'Clear dashboards, indicators that actually matter, a real-time read on your activity. Decisions finally grounded in facts — not in an Excel export from three weeks ago.' },
      { abbr: 'ERP', name: 'Integrated operations', text: 'The operational core of your company.', more: 'Sales, purchasing, inventory, finance, production: orchestrated around your real processes, not a vendor’s. The frame that holds everything else together.' },
      { abbr: 'PLM', name: 'Product lifecycle', text: 'From idea to listing.', more: 'Design, version and evolve your products without losing the thread. Every change traced, every version controlled, from first sketch to market.' },
      { abbr: 'PIM', name: 'Product information', text: 'One reliable source.', more: 'All your product sheets centralised, enriched once and distributed everywhere — website, marketplaces, catalogues. No more re-keying, no more sheets that contradict each other across channels.' },
      { abbr: 'WEB', name: 'Sites & portals', text: 'Your storefront and connected spaces.', more: 'Websites, client areas, partner portals — wired straight to your data. What the client sees is always up to date, because it’s the same source.' },
    ],
    interconnect: {
      eyebrow: 'The connective tissue',
      title: 'Interconnection isn’t an option. It’s the project.',
      text: 'Every module shares the same data core. An order updates stock, triggers invoicing, feeds your dashboards and informs the client portal — with no re-keying. That’s where the time, and the peace of mind, is won.',
    },
  },

  methode: {
    meta: {
      title: 'The method — Meridian Architecture',
      description: 'An architect’s approach: framing, design, AI-powered build, integration, evolution.',
    },
    hero: {
      eyebrow: 'The method',
      title: 'A plan before we build.',
      lead: 'No black box. An architect’s approach — clear and staged — where you watch the edifice take shape at every step.',
    },
    principles: {
      eyebrow: 'Our commitments',
      title: 'How we work',
      items: [
        { title: 'Transparency', text: 'You understand what is being built, and why, at every milestone.' },
        { title: 'Iterative', text: 'We ship in useful increments. You see value early, not six months in.' },
        { title: 'You stay in control', text: 'It’s your ecosystem, your data, your code. No lock-in endured.' },
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
