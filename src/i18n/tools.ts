import type { Locale } from './routes';

/* =============================================================
   Outils / domaines que nous prototypons.
   Chaque entrée alimente : la grille de la home, la page /outils,
   et une page de contexte SEO + GEO (/outils/[slug]) — pensée pour
   être trouvée sur Google ET citée par les IA (FAQ + définitions).
   Le slug est identique FR/EN (routing : /outils/[slug] ↔ /tools/[slug]).
   ============================================================= */

export interface ToolFaq { q: string; a: string; }
export interface Tool {
  slug: string;
  need: string;      // besoin court (label de la tuile)
  angle: string;     // 'Chiffre d’affaires' | 'Productivité'
  name: string;      // nom complet
  short: string;     // accroche une ligne (tuile)
  meta: { title: string; description: string };
  lead: string;      // chapô de la page
  whatIs: string;    // Qu’est-ce que c’est ?
  whatFor: string;   // À quoi ça sert ?
  steps: string[];   // Comment ça fonctionne ?
  withMeridian: string; // Avec Meridian
  faq: ToolFaq[];
}

const fr: Tool[] = [
  {
    slug: 'data-bi',
    need: 'Décision',
    angle: 'Chiffre d’affaires',
    name: 'Data & Business Intelligence (BI)',
    short: 'Décider sur des faits, en temps réel.',
    meta: {
      title: 'Data & BI : qu’est-ce que c’est, à quoi ça sert ? — Meridian',
      description: 'La Business Intelligence (BI) réunit vos données pour piloter votre activité en temps réel. Définition, utilité, fonctionnement — et comment prototyper un tableau de bord sur-mesure.',
    },
    lead: 'Réunir vos données éparpillées et les rendre lisibles, pour décider sur des faits plutôt que sur une intuition.',
    whatIs: 'La Business Intelligence (BI) désigne les outils qui collectent, croisent et visualisent les données de votre entreprise — ventes, marge, stock, trésorerie — dans des tableaux de bord clairs. La donnée cesse d’être un export figé pour devenir une lecture vivante de votre activité.',
    whatFor: 'À décider vite et juste : repérer un produit qui décroche, une marge qui s’érode, un canal qui performe. La BI transforme des chiffres dispersés en décisions concrètes, à tous les niveaux de l’entreprise.',
    steps: [
      'On connecte vos sources : ERP, e-commerce, CRM, tableurs.',
      'On modélise les indicateurs qui comptent vraiment pour vous.',
      'On restitue dans des tableaux de bord temps réel, lisibles par vos équipes.',
    ],
    withMeridian: 'On prototype votre tableau de bord en quelques jours, avec vos équipes, sur vos vraies données — puis on l’affine jusqu’à ce qu’il soit adopté sans formation.',
    faq: [
      { q: 'Quelle différence entre la BI et un simple reporting ?', a: 'Le reporting décrit le passé ; la BI permet d’explorer, de croiser et de décider en temps réel, à la demande.' },
      { q: 'Faut-il beaucoup de données pour faire de la BI ?', a: 'Non. Même une PME gagne à réunir ventes, marge et stock au même endroit — c’est souvent là que se cachent les décisions les plus rentables.' },
    ],
  },
  {
    slug: 'plm',
    need: 'Produit',
    angle: 'Productivité',
    name: 'PLM — Gestion du cycle de vie produit',
    short: 'De l’idée au référencement, sans perdre le fil.',
    meta: {
      title: 'PLM : qu’est-ce que c’est, à quoi ça sert ? — Meridian',
      description: 'Le PLM (Product Lifecycle Management) gère le cycle de vie de vos produits, de l’idée au référencement. Définition, utilité, fonctionnement — et comment le prototyper sur-mesure.',
    },
    lead: 'Concevoir, versionner et faire évoluer vos produits sans perdre le fil, de la première idée à la mise sur le marché.',
    whatIs: 'Le PLM (Product Lifecycle Management) est l’outil qui suit un produit tout au long de sa vie : conception, versions, matières, coûts, validations, mises à jour. Toute l’information produit est tracée et partagée entre les équipes.',
    whatFor: 'À éviter les erreurs coûteuses et les allers-retours : chaque équipe travaille sur la bonne version, au bon moment. Le PLM raccourcit le time-to-market et sécurise la qualité.',
    steps: [
      'On cartographie votre process produit réel, de l’idée au lancement.',
      'On structure les données, versions et validations au bon niveau.',
      'On outille les étapes qui vous font perdre du temps aujourd’hui.',
    ],
    withMeridian: 'Les PLM du marché sont souvent trop lourds pour une PME. On prototype le vôtre au plus près de votre métier — et on y ajoute les fonctions qu’aucun éditeur ne priorise, comme un générateur de descriptifs.',
    faq: [
      { q: 'PLM ou PIM, quelle différence ?', a: 'Le PLM gère la conception et la vie du produit (versions, matières, coûts) ; le PIM gère l’information de diffusion (fiches, visuels, canaux). Les deux se complètent.' },
      { q: 'Le PLM est-il réservé à l’industrie ?', a: 'Non. Toute entreprise qui conçoit et fait évoluer des produits — mode, retail, agroalimentaire — y gagne.' },
    ],
  },
  {
    slug: 'pim',
    need: 'Time to market',
    angle: 'Productivité',
    name: 'PIM — Gestion de l’information produit',
    short: 'Une source unique, diffusée partout.',
    meta: {
      title: 'PIM : qu’est-ce que c’est, à quoi ça sert ? — Meridian',
      description: 'Le PIM (Product Information Management) centralise vos fiches produit et les diffuse partout sans ressaisie. Définition, utilité, fonctionnement — et comment le prototyper.',
    },
    lead: 'Une source unique et fiable pour toutes vos fiches produit, diffusée sur tous vos canaux sans ressaisie.',
    whatIs: 'Le PIM (Product Information Management) centralise toutes les informations de vos produits — descriptions, visuels, caractéristiques, prix — et les diffuse vers vos canaux (site, marketplaces, catalogues) depuis une seule source.',
    whatFor: 'À accélérer la mise en marché et à en finir avec les fiches qui se contredisent d’un canal à l’autre. Enrichie une fois, l’information part partout, à jour.',
    steps: [
      'On centralise vos fiches produit au même endroit.',
      'On définit qui enrichit quoi, et les règles de qualité.',
      'On branche la diffusion vers vos canaux, sans ressaisie.',
    ],
    withMeridian: 'On prototype un PIM taillé à votre catalogue et à vos canaux — avec, si besoin, un générateur de fiches à l’IA pour gagner des heures à chaque lancement.',
    faq: [
      { q: 'Ai-je besoin d’un PIM si j’ai déjà un e-commerce ?', a: 'Souvent oui : dès que vous vendez sur plusieurs canaux, le PIM évite les ressaisies et les incohérences entre eux.' },
      { q: 'Combien de temps pour mettre en place un PIM ?', a: 'Avec le prototypage, on met un premier PIM utile entre vos mains en quelques jours, puis on l’étend.' },
    ],
  },
  {
    slug: 'site-vitrine-ecommerce',
    need: 'Vente & présence',
    angle: 'Chiffre d’affaires',
    name: 'Site vitrine & e-commerce',
    short: 'Être vu, être trouvé, vendre.',
    meta: {
      title: 'Site vitrine & e-commerce : à quoi ça sert, comment ça marche ? — Meridian',
      description: 'Site vitrine et e-commerce sur-mesure : présence, image et vente en ligne. Définition, utilité, fonctionnement — et comment prototyper le vôtre, connecté à vos outils.',
    },
    lead: 'Votre présence en ligne et votre canal de vente, prototypés sur-mesure et connectés à vos données.',
    whatIs: 'Le site vitrine présente votre entreprise et vos offres ; l’e-commerce y ajoute la vente en ligne. Bien conçus, ils sont le point de contact n°1 avec vos clients et un moteur d’acquisition.',
    whatFor: 'À exister aux yeux de vos prospects, à inspirer confiance et à vendre — 24 h/24. Un bon site transforme une visite en contact ou en commande.',
    steps: [
      'On prototype les pages clés et le parcours, avec vos équipes.',
      'On soigne l’image, la vitesse et le mobile — d’emblée.',
      'On connecte le site à vos données (stock, PIM, CRM) pour qu’il reste à jour.',
    ],
    withMeridian: 'On prototype un site à l’animation fluide et au SEO embarqué, connecté à vos outils — pas une vitrine générique déconnectée du reste.',
    faq: [
      { q: 'Site vitrine ou e-commerce, par quoi commencer ?', a: 'Par ce qui sert votre objectif : la présence et les contacts (vitrine) ou la vente directe (e-commerce). On peut prototyper l’un puis l’étendre à l’autre.' },
      { q: 'Un nouveau site va-t-il m’aider à être trouvé sur Google ?', a: 'Oui, si le SEO est intégré dès la conception — structure, contenus, performance. C’est notre parti pris.' },
    ],
  },
  {
    slug: 'seo-geo',
    need: 'Acquisition',
    angle: 'Chiffre d’affaires',
    name: 'Acquisition — SEO & GEO',
    short: 'Être trouvé sur Google et les IA.',
    meta: {
      title: 'SEO & GEO : être trouvé sur Google et les IA — Meridian',
      description: 'Le SEO vous rend visible sur Google ; le GEO vous rend citable par les IA (ChatGPT, Gemini, Perplexity). Définition, utilité, fonctionnement — et comment on l’intègre à votre site.',
    },
    lead: 'Être trouvé quand vos clients cherchent — sur Google (SEO) comme dans les réponses des IA (GEO).',
    whatIs: 'Le SEO (référencement naturel) optimise votre visibilité sur les moteurs de recherche. Le GEO (Generative Engine Optimization) fait en sorte que les IA génératives — ChatGPT, Gemini, Perplexity — citent votre entreprise dans leurs réponses. Deux faces d’un même enjeu : être trouvé.',
    whatFor: 'À capter une demande qui existe déjà : les gens qui cherchent un outil, un service, une réponse. Bien fait, c’est le canal d’acquisition le plus rentable dans la durée.',
    steps: [
      'On identifie les questions et besoins que vos clients tapent réellement.',
      'On produit des pages de contenu claires qui y répondent (comme celle-ci).',
      'On structure le site pour Google et pour les IA (données, réponses, FAQ).',
    ],
    withMeridian: 'On embarque le SEO dans le site dès la conception, et on ajoute des pages de contexte pensées pour le GEO — pour que les recherches sur vos besoins tombent sur vous.',
    faq: [
      { q: 'Le GEO, est-ce différent du SEO ?', a: 'Complémentaire : le SEO vise le classement sur Google, le GEO vise la citation par les IA. Les bonnes pratiques se recoupent — un contenu clair, structuré et fiable.' },
      { q: 'Combien de temps avant des résultats en SEO ?', a: 'Quelques semaines à quelques mois selon la concurrence. Le GEO peut vous faire citer plus vite si votre contenu répond précisément à une question.' },
    ],
  },
  {
    slug: 'crm-fidelisation',
    need: 'Fidélisation',
    angle: 'Chiffre d’affaires',
    name: 'CRM & fidélisation',
    short: 'Convertir, puis retenir.',
    meta: {
      title: 'CRM & fidélisation : qu’est-ce que c’est, à quoi ça sert ? — Meridian',
      description: 'Le CRM centralise vos relations clients pour convertir et fidéliser. Définition, utilité, fonctionnement — et comment prototyper un CRM et un programme de fidélité sur-mesure.',
    },
    lead: 'Centraliser vos relations clients pour convertir plus, puis fidéliser — là où se gagne la marge.',
    whatIs: 'Le CRM (Customer Relationship Management) réunit l’historique et le suivi de vos clients et prospects : contacts, échanges, opportunités, relances. Le programme de fidélité y ajoute des mécaniques pour faire revenir vos clients.',
    whatFor: 'À ne perdre aucune opportunité et à faire revenir vos clients : un prospect relancé au bon moment, un client récompensé, une relation suivie. Fidéliser coûte moins cher qu’acquérir.',
    steps: [
      'On modélise votre parcours client réel, de la piste à la fidélité.',
      'On outille les relances et le suivi au bon moment.',
      'On connecte le CRM à vos ventes et à votre site pour tout garder à jour.',
    ],
    withMeridian: 'On prototype un CRM à votre process — pas une usine à gaz générique — avec les automatisations et le programme de fidélité qui comptent pour vous.',
    faq: [
      { q: 'Un CRM est-il utile pour une petite structure ?', a: 'Oui : dès que vous suivez plus de clients que votre mémoire ne le permet, le CRM évite les opportunités perdues.' },
      { q: 'Peut-on relier le CRM à mon site et à mes ventes ?', a: 'Oui — c’est même le but : une donnée client unique, partagée entre le site, les ventes et les relances.' },
    ],
  },
  {
    slug: 'pos',
    need: 'Encaissement',
    angle: 'Chiffre d’affaires',
    name: 'POS — Point de vente',
    short: 'Encaisser, en boutique comme en ligne.',
    meta: {
      title: 'POS (point de vente) : qu’est-ce que c’est, à quoi ça sert ? — Meridian',
      description: 'Le POS (point de vente) encaisse et relie boutique et en ligne. Définition, utilité, fonctionnement — et comment prototyper une caisse sur-mesure, connectée à vos stocks et à votre CRM.',
    },
    lead: 'Encaisser simplement — en boutique comme en ligne — et relier chaque vente à vos stocks et à vos clients.',
    whatIs: 'Le POS (Point of Sale, ou point de vente) est le système qui enregistre et encaisse vos ventes : caisse, paiements, tickets. Moderne, il relie la vente physique et en ligne, et met à jour stock et fichier client à chaque transaction.',
    whatFor: 'À vendre vite et sans friction, et à ne plus séparer boutique et web : le même stock, les mêmes clients, la même donnée. Chaque encaissement nourrit votre pilotage.',
    steps: [
      'On cartographie votre parcours d’encaissement réel : boutique, web, mobile.',
      'On prototype une caisse simple, rapide, adaptée à vos produits.',
      'On la connecte à vos stocks, votre CRM et vos tableaux de bord.',
    ],
    withMeridian: 'On prototype un POS taillé à votre façon de vendre — connecté à votre stock et à votre CRM — plutôt qu’une caisse générique déconnectée du reste de vos outils.',
    faq: [
      { q: 'POS et e-commerce, est-ce la même chose ?', a: 'Non : l’e-commerce vend en ligne, le POS encaisse (souvent en boutique). Reliés, ils partagent stock et clients — c’est l’omnicanal.' },
      { q: 'Un POS peut-il se connecter à mon stock et à mon CRM ?', a: 'Oui, et c’est tout l’intérêt : chaque vente met à jour le stock et enrichit la fiche client, sans ressaisie.' },
    ],
  },
  {
    slug: 'erp',
    need: 'Opérations',
    angle: 'Productivité',
    name: 'ERP — Gestion intégrée',
    short: 'Le cœur opérationnel, orchestré.',
    meta: {
      title: 'ERP : qu’est-ce que c’est, à quoi ça sert ? — Meridian',
      description: 'L’ERP orchestre le cœur opérationnel de l’entreprise : ventes, achats, stocks, finance, production. Définition, utilité, fonctionnement — et comment le prototyper à vos process, par briques.',
    },
    lead: 'Le cœur opérationnel de votre entreprise — ventes, achats, stocks, finance — orchestré selon vos process réels.',
    whatIs: 'L’ERP (Enterprise Resource Planning, ou progiciel de gestion intégré) réunit dans un même système les fonctions clés de l’entreprise : ventes, achats, stocks, finance, production. Une donnée saisie une fois circule partout.',
    whatFor: 'À faire tenir tout le reste : l’ERP est l’ossature qui relie les opérations, supprime les doubles saisies et donne une vue unique de l’activité. Moins d’erreurs, plus de temps.',
    steps: [
      'On part de vos process réels, pas de ceux d’un éditeur.',
      'On prototype d’abord les modules qui vous font le plus mal.',
      'On les relie progressivement, sans big-bang risqué.',
    ],
    withMeridian: 'Les ERP du marché imposent leurs process et coûtent cher. On prototype le vôtre par briques utiles, adopté au fur et à mesure — sans le chantier de plusieurs années.',
    faq: [
      { q: 'ERP ou logiciels séparés ?', a: 'Des logiciels séparés créent des silos et des ressaisies. L’ERP réunit les opérations autour d’une donnée commune — mais on peut y arriver par briques, sans tout remplacer d’un coup.' },
      { q: 'Un ERP est-il réservé aux grandes entreprises ?', a: 'Non. Le prototypage rend le sur-mesure accessible aux PME, sans le budget ni les délais d’un ERP traditionnel.' },
    ],
  },
];

const en: Tool[] = [
  {
    slug: 'data-bi',
    need: 'Decision',
    angle: 'Revenue',
    name: 'Data & Business Intelligence (BI)',
    short: 'Decide on facts, in real time.',
    meta: {
      title: 'Data & BI: what it is, what it’s for — Meridian',
      description: 'Business Intelligence (BI) brings your data together to steer your business in real time. Definition, purpose, how it works — and how to prototype a bespoke dashboard.',
    },
    lead: 'Bring your scattered data together and make it readable, to decide on facts rather than on a hunch.',
    whatIs: 'Business Intelligence (BI) is the set of tools that collect, cross-reference and visualise your company’s data — sales, margin, stock, cash — in clear dashboards. Data stops being a frozen export and becomes a live read on your activity.',
    whatFor: 'To decide fast and well: spot a product that’s slipping, a margin that’s eroding, a channel that’s performing. BI turns scattered figures into concrete decisions, at every level of the company.',
    steps: [
      'We connect your sources: ERP, e-commerce, CRM, spreadsheets.',
      'We model the indicators that truly matter to you.',
      'We deliver real-time dashboards your teams can read.',
    ],
    withMeridian: 'We prototype your dashboard in days, with your teams, on your real data — then refine it until it’s adopted with no training.',
    faq: [
      { q: 'What’s the difference between BI and plain reporting?', a: 'Reporting describes the past; BI lets you explore, cross-reference and decide in real time, on demand.' },
      { q: 'Do you need a lot of data to do BI?', a: 'No. Even an SME gains from bringing sales, margin and stock into one place — that’s often where the most profitable decisions hide.' },
    ],
  },
  {
    slug: 'plm',
    need: 'Product',
    angle: 'Productivity',
    name: 'PLM — Product Lifecycle Management',
    short: 'From idea to listing, without losing the thread.',
    meta: {
      title: 'PLM: what it is, what it’s for — Meridian',
      description: 'PLM (Product Lifecycle Management) manages your products’ lifecycle, from idea to listing. Definition, purpose, how it works — and how to prototype it bespoke.',
    },
    lead: 'Design, version and evolve your products without losing the thread, from the first idea to market.',
    whatIs: 'PLM (Product Lifecycle Management) is the tool that follows a product throughout its life: design, versions, materials, costs, approvals, updates. All product information is traced and shared across teams.',
    whatFor: 'To avoid costly mistakes and back-and-forth: every team works on the right version, at the right time. PLM shortens time-to-market and secures quality.',
    steps: [
      'We map your real product process, from idea to launch.',
      'We structure data, versions and approvals at the right level.',
      'We tool the steps that cost you time today.',
    ],
    withMeridian: 'Market PLMs are often too heavy for an SME. We prototype yours as close as possible to your business — and add the features no vendor prioritises, like a description generator.',
    faq: [
      { q: 'PLM or PIM, what’s the difference?', a: 'PLM manages the design and life of the product (versions, materials, costs); PIM manages the distribution information (sheets, visuals, channels). They complement each other.' },
      { q: 'Is PLM only for manufacturing?', a: 'No. Any company that designs and evolves products — fashion, retail, food — benefits.' },
    ],
  },
  {
    slug: 'pim',
    need: 'Time to market',
    angle: 'Productivity',
    name: 'PIM — Product Information Management',
    short: 'One single source, distributed everywhere.',
    meta: {
      title: 'PIM: what it is, what it’s for — Meridian',
      description: 'PIM (Product Information Management) centralises your product sheets and distributes them everywhere with no re-keying. Definition, purpose, how it works — and how to prototype it.',
    },
    lead: 'One reliable source for every product sheet, distributed across all your channels with no re-keying.',
    whatIs: 'PIM (Product Information Management) centralises all your products’ information — descriptions, visuals, attributes, prices — and distributes it to your channels (website, marketplaces, catalogues) from a single source.',
    whatFor: 'To speed up go-to-market and end sheets that contradict each other across channels. Enriched once, information goes everywhere, up to date.',
    steps: [
      'We centralise your product sheets in one place.',
      'We define who enriches what, and the quality rules.',
      'We wire distribution to your channels, with no re-keying.',
    ],
    withMeridian: 'We prototype a PIM cut to your catalogue and channels — with, if needed, an AI sheet generator to save hours at every launch.',
    faq: [
      { q: 'Do I need a PIM if I already have e-commerce?', a: 'Often yes: as soon as you sell across several channels, a PIM prevents re-keying and inconsistencies between them.' },
      { q: 'How long to set up a PIM?', a: 'With prototyping, we put a first useful PIM in your hands in days, then extend it.' },
    ],
  },
  {
    slug: 'site-vitrine-ecommerce',
    need: 'Sales & presence',
    angle: 'Revenue',
    name: 'Showcase site & e-commerce',
    short: 'Be seen, be found, sell.',
    meta: {
      title: 'Showcase site & e-commerce: what they’re for, how they work — Meridian',
      description: 'Bespoke showcase and e-commerce sites: presence, image and online sales. Definition, purpose, how it works — and how to prototype yours, connected to your tools.',
    },
    lead: 'Your online presence and sales channel, prototyped bespoke and connected to your data.',
    whatIs: 'A showcase site presents your company and offers; e-commerce adds online sales. Done well, they are the number-one point of contact with your customers and an acquisition engine.',
    whatFor: 'To exist in your prospects’ eyes, inspire trust and sell — 24/7. A good site turns a visit into a contact or an order.',
    steps: [
      'We prototype the key pages and the journey, with your teams.',
      'We get image, speed and mobile right — from the start.',
      'We connect the site to your data (stock, PIM, CRM) so it stays up to date.',
    ],
    withMeridian: 'We prototype a site with smooth motion and embedded SEO, connected to your tools — not a generic showcase cut off from the rest.',
    faq: [
      { q: 'Showcase or e-commerce, where to start?', a: 'With what serves your goal: presence and leads (showcase) or direct sales (e-commerce). We can prototype one, then extend to the other.' },
      { q: 'Will a new site help me be found on Google?', a: 'Yes, if SEO is built in from the design — structure, content, performance. That’s our stance.' },
    ],
  },
  {
    slug: 'seo-geo',
    need: 'Acquisition',
    angle: 'Revenue',
    name: 'Acquisition — SEO & GEO',
    short: 'Be found on Google and AI.',
    meta: {
      title: 'SEO & GEO: be found on Google and AI — Meridian',
      description: 'SEO makes you visible on Google; GEO makes you citable by AI (ChatGPT, Gemini, Perplexity). Definition, purpose, how it works — and how we build it into your site.',
    },
    lead: 'Be found when your customers search — on Google (SEO) and in AI answers (GEO).',
    whatIs: 'SEO (search engine optimisation) improves your visibility on search engines. GEO (Generative Engine Optimization) makes generative AIs — ChatGPT, Gemini, Perplexity — cite your company in their answers. Two sides of one goal: being found.',
    whatFor: 'To capture demand that already exists: people looking for a tool, a service, an answer. Done well, it’s the most profitable acquisition channel over time.',
    steps: [
      'We identify the questions and needs your customers actually type.',
      'We produce clear content pages that answer them (like this one).',
      'We structure the site for Google and for AI (data, answers, FAQ).',
    ],
    withMeridian: 'We build SEO into the site from the design, and add context pages made for GEO — so searches about your needs land on you.',
    faq: [
      { q: 'Is GEO different from SEO?', a: 'Complementary: SEO targets ranking on Google, GEO targets citation by AI. The good practices overlap — clear, structured, trustworthy content.' },
      { q: 'How long before SEO results?', a: 'A few weeks to a few months depending on competition. GEO can get you cited faster if your content answers a question precisely.' },
    ],
  },
  {
    slug: 'crm-fidelisation',
    need: 'Retention',
    angle: 'Revenue',
    name: 'CRM & loyalty',
    short: 'Convert, then keep.',
    meta: {
      title: 'CRM & loyalty: what it is, what it’s for — Meridian',
      description: 'A CRM centralises your customer relationships to convert and retain. Definition, purpose, how it works — and how to prototype a bespoke CRM and loyalty programme.',
    },
    lead: 'Centralise your customer relationships to convert more, then retain — where the margin is won.',
    whatIs: 'A CRM (Customer Relationship Management) brings together the history and follow-up of your customers and prospects: contacts, exchanges, opportunities, reminders. A loyalty programme adds mechanics to bring customers back.',
    whatFor: 'To lose no opportunity and bring customers back: a prospect followed up at the right time, a customer rewarded, a relationship tracked. Retaining costs less than acquiring.',
    steps: [
      'We model your real customer journey, from lead to loyalty.',
      'We tool follow-ups and tracking at the right moment.',
      'We connect the CRM to your sales and your site to keep everything up to date.',
    ],
    withMeridian: 'We prototype a CRM to your process — not a generic behemoth — with the automations and loyalty programme that matter to you.',
    faq: [
      { q: 'Is a CRM useful for a small business?', a: 'Yes: as soon as you track more customers than memory allows, a CRM prevents lost opportunities.' },
      { q: 'Can the CRM connect to my site and sales?', a: 'Yes — that’s the point: a single customer record, shared between the site, sales and follow-ups.' },
    ],
  },
  {
    slug: 'pos',
    need: 'Checkout',
    angle: 'Revenue',
    name: 'POS — Point of sale',
    short: 'Take payment, in store and online.',
    meta: {
      title: 'POS (point of sale): what it is, what it’s for — Meridian',
      description: 'A POS (point of sale) takes payment and links store and online. Definition, purpose, how it works — and how to prototype a bespoke till connected to your stock and CRM.',
    },
    lead: 'Take payment simply — in store and online — and link every sale to your stock and your customers.',
    whatIs: 'The POS (Point of Sale) is the system that records and takes payment for your sales: till, payments, receipts. Modern POS links physical and online sales, and updates stock and customer records on every transaction.',
    whatFor: 'To sell fast and friction-free, and stop separating store and web: same stock, same customers, same data. Every payment feeds your steering.',
    steps: [
      'We map your real checkout journey: store, web, mobile.',
      'We prototype a simple, fast till suited to your products.',
      'We connect it to your stock, CRM and dashboards.',
    ],
    withMeridian: 'We prototype a POS cut to the way you sell — connected to your stock and CRM — rather than a generic till cut off from your other tools.',
    faq: [
      { q: 'Are POS and e-commerce the same thing?', a: 'No: e-commerce sells online, the POS takes payment (often in store). Linked, they share stock and customers — that’s omnichannel.' },
      { q: 'Can a POS connect to my stock and CRM?', a: 'Yes, and that’s the point: each sale updates stock and enriches the customer record, with no re-keying.' },
    ],
  },
  {
    slug: 'erp',
    need: 'Operations',
    angle: 'Productivity',
    name: 'ERP — Integrated operations',
    short: 'The operational core, orchestrated.',
    meta: {
      title: 'ERP: what it is, what it’s for — Meridian',
      description: 'An ERP orchestrates the operational core of the company: sales, purchasing, stock, finance, production. Definition, purpose, how it works — and how to prototype it to your processes, brick by brick.',
    },
    lead: 'The operational core of your company — sales, purchasing, stock, finance — orchestrated around your real processes.',
    whatIs: 'An ERP (Enterprise Resource Planning) brings the company’s key functions into one system: sales, purchasing, stock, finance, production. Data entered once flows everywhere.',
    whatFor: 'To hold everything together: the ERP is the frame that links operations, removes double entry and gives a single view of the business. Fewer errors, more time.',
    steps: [
      'We start from your real processes, not a vendor’s.',
      'We prototype first the modules that hurt most.',
      'We connect them progressively, with no risky big bang.',
    ],
    withMeridian: 'Market ERPs impose their processes and cost a lot. We prototype yours in useful bricks, adopted step by step — without the multi-year project.',
    faq: [
      { q: 'ERP or separate tools?', a: 'Separate tools create silos and re-keying. An ERP unites operations around shared data — but you can get there brick by brick, without replacing everything at once.' },
      { q: 'Is an ERP only for large companies?', a: 'No. Prototyping makes bespoke accessible to SMEs, without the budget or timeline of a traditional ERP.' },
    ],
  },
];

const tools = { fr, en };

export function getTools(locale: Locale): Tool[] {
  return tools[locale];
}

export function getTool(locale: Locale, slug: string): Tool | undefined {
  return tools[locale].find((t) => t.slug === slug);
}
