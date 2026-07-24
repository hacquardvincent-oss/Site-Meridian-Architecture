import type { Locale } from './routes';

/* =============================================================
   Page pilier SEO/GEO : « Prototyper une idée ».
   Cible le cluster le plus stratégique (prototyper / tester une idée /
   MVP / outil sur-mesure). Contenu structuré + FAQ pour Google et les IA.
   ============================================================= */

export interface Pillar {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lead: string };
  problem: { title: string; body: string };
  what: { title: string; body: string };
  how: { title: string; intro: string; steps: { n: string; title: string; text: string }[] };
  angles: { title: string; intro: string; items: { tag: string; text: string }[] };
  withMeridian: { eyebrow: string; body: string };
  faqTitle: string;
  faq: { q: string; a: string }[];
}

const fr: Pillar = {
  meta: {
    title: 'Prototyper une idée rapidement : tester un outil métier avec l’IA — Meridian',
    description: 'Comment prototyper une idée ou un outil métier en quelques jours grâce à l’IA, le faire tester par vos équipes en temps réel, et le mettre en production — sans conduite du changement.',
  },
  hero: {
    eyebrow: 'Prototyper une idée',
    title: 'Testez votre idée en quelques jours, pas en quelques mois.',
    lead: 'Une idée d’outil, d’automatisation, de service ? Au lieu d’un cahier des charges et de mois d’attente, on la prototype à l’IA, vos équipes la testent en temps réel, et on la met en production une fois validée.',
  },
  problem: {
    title: 'Pourquoi tester une idée prend trop de temps',
    body: 'Dans l’ancien monde, entre l’idée et le premier outil utilisable : des spécifications, des semaines de développement, une recette, puis une conduite du changement pour faire adopter un outil que personne n’a vu naître. Résultat : on n’ose plus tester, et les meilleures idées restent dans un tiroir.',
  },
  what: {
    title: 'Prototyper, c’est confronter l’idée au réel',
    body: 'Un prototype n’est pas une maquette qui illustre : c’est un outil qui fonctionne, avec la vraie logique métier et des données de test réalistes. Assez abouti pour trancher une décision, assez léger pour être jeté sans regret. C’est ce qui transforme une intuition en certitude.',
  },
  how: {
    title: 'Comment on prototype votre idée',
    intro: 'Une boucle courte, avec vos équipes à chaque étape.',
    steps: [
      { n: '01', title: 'Prototyper', text: 'L’idée devient un outil réel et cliquable en quelques jours.' },
      { n: '02', title: 'Tester en live', text: 'Vos équipes l’utilisent en conditions réelles, tout de suite.' },
      { n: '03', title: 'Itérer', text: 'On ajuste en temps réel avec celles et ceux qui s’en servent.' },
      { n: '04', title: 'Mettre en prod', text: 'Déployé, déjà adopté — sans conduite du changement.' },
    ],
  },
  angles: {
    title: 'Quelles idées prototyper ?',
    intro: 'On part de deux questions simples, posées à vos équipes.',
    items: [
      { tag: 'Booster le chiffre d’affaires', text: 'Data & BI, CRM, site vitrine & e-commerce, POS, acquisition SEO/GEO.' },
      { tag: 'Gagner en productivité', text: 'PLM, PIM, ERP et vos outils métier.' },
    ],
  },
  withMeridian: {
    eyebrow: 'Avec Meridian',
    body: 'Un seul partenaire, l’IA pour aller vite, vos équipes au centre. On prototype, on éprouve, on met en prod — et ce qui tient s’assemble, à terme, en écosystème.',
  },
  faqTitle: 'Prototyper une idée — questions fréquentes',
  faq: [
    { q: 'Prototype ou MVP, quelle différence ?', a: 'Un prototype sert à valider une idée vite, quitte à le jeter ; un MVP est une première version réduite mais destinée à durer. On commence souvent par le prototype, puis on le fait évoluer vers une version de référence.' },
    { q: 'Combien de temps pour prototyper une idée ?', a: 'Quelques jours pour un premier prototype cliquable, puis des boucles courtes d’itération avec vos équipes.' },
    { q: 'Combien ça coûte de tester une idée ?', a: 'Bien moins qu’un chantier classique : le prototypage à l’IA réduit drastiquement les délais, donc le coût. On cadre le périmètre ensemble lors d’un premier échange.' },
    { q: 'Que devient le prototype une fois validé ?', a: 'On l’intègre à vos systèmes et on le déploie ; éprouvé, il devient votre outil de référence, puis une brique de votre écosystème.' },
  ],
};

const en: Pillar = {
  meta: {
    title: 'Prototype an idea fast: test a business tool with AI — Meridian',
    description: 'How to prototype an idea or business tool in days with AI, have your teams test it in real time, and ship it to production — with no change management.',
  },
  hero: {
    eyebrow: 'Prototype an idea',
    title: 'Test your idea in days, not months.',
    lead: 'An idea for a tool, an automation, a service? Instead of a spec sheet and months of waiting, we prototype it with AI, your teams test it in real time, and we ship it to production once validated.',
  },
  problem: {
    title: 'Why testing an idea takes too long',
    body: 'In the old world, between the idea and the first usable tool: specs, weeks of development, testing, then change management to make people adopt a tool no one saw born. The result: you stop daring to test, and the best ideas stay in a drawer.',
  },
  what: {
    title: 'Prototyping means confronting the idea with reality',
    body: 'A prototype isn’t a mock-up that illustrates: it’s a tool that works, with real business logic and realistic test data. Polished enough to settle a decision, light enough to throw away without regret. That’s what turns a hunch into a certainty.',
  },
  how: {
    title: 'How we prototype your idea',
    intro: 'A short loop, with your teams at every step.',
    steps: [
      { n: '01', title: 'Prototype', text: 'The idea becomes a real, clickable tool in a matter of days.' },
      { n: '02', title: 'Test live', text: 'Your teams use it in real conditions, right away.' },
      { n: '03', title: 'Iterate', text: 'We adjust in real time with the people who use it.' },
      { n: '04', title: 'Ship', text: 'Deployed, already adopted — with no change management.' },
    ],
  },
  angles: {
    title: 'Which ideas to prototype?',
    intro: 'We start from two simple questions, asked to your teams.',
    items: [
      { tag: 'Boost revenue', text: 'Data & BI, CRM, showcase & e-commerce site, POS, SEO/GEO acquisition.' },
      { tag: 'Gain productivity', text: 'PLM, PIM, ERP and your line-of-business tools.' },
    ],
  },
  withMeridian: {
    eyebrow: 'With Meridian',
    body: 'A single partner, AI to move fast, your teams at the centre. We prototype, prove, ship — and what holds assembles, in time, into an ecosystem.',
  },
  faqTitle: 'Prototyping an idea — frequently asked questions',
  faq: [
    { q: 'Prototype or MVP, what’s the difference?', a: 'A prototype validates an idea fast, even if it’s thrown away; an MVP is a reduced but lasting first version. We often start with the prototype, then evolve it into a reference version.' },
    { q: 'How long to prototype an idea?', a: 'A few days for a first clickable prototype, then short iteration loops with your teams.' },
    { q: 'How much does it cost to test an idea?', a: 'Far less than a traditional build: AI prototyping drastically cuts timelines, and therefore cost. We scope it together in a first conversation.' },
    { q: 'What happens to the prototype once validated?', a: 'We integrate it into your systems and deploy it; proven, it becomes your reference tool, then a brick of your ecosystem.' },
  ],
};

const pillar = { fr, en };

export function getPillar(locale: Locale): Pillar {
  return pillar[locale];
}
