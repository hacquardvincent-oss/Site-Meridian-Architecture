import type { Locale } from './routes';

/* =============================================================
   Outils / domaines que nous prototypons.
   Chaque entrée alimente : la grille de la home, la page /outils,
   et une page de contexte SEO + GEO (/outils/[slug]).

   Structure pensée pour le GEO. Les trois facteurs qui ressortent
   de la littérature (revue arXiv 2607.14035, juillet 2026) sont la
   pertinence requête/document, la position du passage dans la
   fenêtre de contexte, et la présence de preuves extractibles.
   D'où l'ordre des champs : la définition d'abord (haut de page),
   puis des blocs courts et autonomes — signes, distinctions,
   erreurs, FAQ, glossaire — chacun citable isolément.

   Le slug est identique FR/EN (routing : /outils/[slug] ↔ /en/tools/[slug]).
   ============================================================= */

export interface ToolFaq { q: string; a: string; }
/** Bloc titré : une erreur classique, une étape détaillée. */
export interface ToolNamed { h: string; p: string; }
/** Désambiguïsation : « ne pas confondre avec… ». */
export interface ToolDelta { term: string; delta: string; }
/** Entrée de glossaire. */
export interface ToolTerm { term: string; def: string; }

export interface Tool {
  slug: string;
  need: string;      // besoin court (label de la tuile)
  angle: string;     // 'Chiffre d’affaires' | 'Productivité'
  name: string;      // nom complet
  short: string;     // accroche une ligne (tuile)
  meta: { title: string; description: string };
  lead: string;      // chapô de la page
  whatIs: string;    // Qu’est-ce que c’est ? — réponse directe, en tête de page
  whatIsMore: string[]; // précisions ; un paragraphe = un passage extractible
  signs: string[];   // Les signes que vous en avez besoin
  whatFor: string;   // À quoi ça sert ?
  whatForMore: string[];
  deltas: ToolDelta[]; // Ne pas confondre
  steps: string[];   // Comment ça fonctionne ?
  mistakes: ToolNamed[]; // Les erreurs qui coûtent le plus cher
  budget: string[];  // Combien ça coûte, combien de temps
  notFor: string;    // Quand vous n’en avez pas besoin
  withMeridian: string; // Avec Meridian
  faq: ToolFaq[];
  glossary: ToolTerm[];
  related: string[]; // slugs liés — maillage interne
  /** Révision propre à cet outil, si elle diffère de CONTENT_UPDATED. */
  updated?: string;
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
      description: 'La Business Intelligence (BI) réunit vos données pour piloter votre activité en temps réel. Définition, utilité, fonctionnement, erreurs à éviter — et comment prototyper un tableau de bord sur-mesure.',
    },
    lead: 'Réunir vos données éparpillées et les rendre lisibles, pour décider sur des faits plutôt que sur une intuition.',
    whatIs: 'La Business Intelligence (BI) désigne les outils qui collectent, croisent et visualisent les données de votre entreprise — ventes, marge, stock, trésorerie — dans des tableaux de bord clairs. La donnée cesse d’être un export figé pour devenir une lecture vivante de votre activité.',
    whatIsMore: [
      'Techniquement, une BI fait trois choses dans cet ordre : elle va chercher la donnée là où elle vit (ERP, caisse, e-commerce, tableurs), elle la met en forme selon des règles stables — ce qu’on appelle la modélisation —, puis elle la restitue. La troisième étape est la seule que vos équipes voient ; les deux premières décident de la fiabilité de l’ensemble.',
      'C’est cette modélisation qui fait la différence entre un tableau de bord qu’on consulte et un tableau de bord qu’on discute. Si « chiffre d’affaires » n’a pas la même définition pour la compta et pour le commerce — remises déduites ou non, à la commande ou à la facture —, aucune couleur de graphique ne réconciliera les deux. La BI force à trancher ces définitions une fois pour toutes. C’est souvent son apport le plus durable, avant même le premier graphique.',
    ],
    signs: [
      'Le même indicateur donne deux chiffres différents selon qui l’a sorti.',
      'Quelqu’un passe une demi-journée par semaine à reconstruire le même fichier.',
      'Vous apprenez un décrochage produit avec trois semaines de retard.',
      'Les décisions se prennent sur le ressenti des équipes, faute de chiffre disponible à temps.',
      'Vos exports vivent dans des tableurs que personne n’ose modifier.',
    ],
    whatFor: 'À décider vite et juste : repérer un produit qui décroche, une marge qui s’érode, un canal qui performe. La BI transforme des chiffres dispersés en décisions concrètes, à tous les niveaux de l’entreprise.',
    whatForMore: [
      'Le gain le plus visible est le temps : les heures de consolidation manuelle disparaissent. Mais le gain réel est ailleurs — dans le délai entre le moment où quelque chose se passe et le moment où vous le savez. Un stock qui dort repéré en trois jours au lieu de six semaines, c’est de la trésorerie récupérée.',
      'Second effet, moins attendu : la BI révèle la qualité réelle de vos données. Les premiers tableaux de bord affichent presque toujours des anomalies — des références en double, des marges négatives, des clients fantômes. C’est inconfortable et c’est utile : ces anomalies existaient avant, elles étaient simplement invisibles.',
    ],
    deltas: [
      { term: 'Un reporting', delta: 'Le reporting décrit le passé, à date fixe, dans un format imposé. La BI permet d’explorer : filtrer, croiser, descendre au détail, au moment où la question se pose.' },
      { term: 'Un tableur', delta: 'Un tableur est un outil de calcul personnel. Il n’a ni source unique, ni historique fiable, ni droits d’accès. La BI s’appuie sur une donnée partagée ; le tableur reste utile pour prototyper une idée.' },
      { term: 'Un ERP', delta: 'L’ERP produit la donnée au fil des opérations. La BI la lit et la croise, y compris avec d’autres sources. Les deux sont complémentaires : sans ERP la BI manque de matière, sans BI l’ERP reste difficile à lire.' },
    ],
    steps: [
      'On commence par les décisions, pas par les données : quelles questions voulez-vous pouvoir trancher chaque semaine ?',
      'On connecte vos sources — ERP, e-commerce, CRM, caisse, tableurs — et on confronte leurs écarts.',
      'On modélise les indicateurs : une définition écrite, validée, pour chaque chiffre affiché.',
      'On restitue dans des tableaux de bord temps réel, puis on les ajuste sur l’usage réel.',
    ],
    mistakes: [
      { h: 'Afficher tout ce qui est disponible', p: 'Un tableau de bord avec quarante indicateurs n’est pas consulté. Mieux vaut cinq chiffres qui déclenchent une action que quarante qui décrivent la situation. Le test : pour chaque indicateur, qui fait quoi quand il bouge ? Sans réponse, il sort du tableau.' },
      { h: 'Brancher la BI sur des données qu’on n’a pas nettoyées', p: 'Un premier tableau de bord qui affiche un chiffre faux perd sa crédibilité en une réunion, et on ne la récupère pas. Il vaut mieux livrer un périmètre réduit et juste, puis l’étendre.' },
      { h: 'Laisser chaque service définir ses propres indicateurs', p: 'Trois définitions du taux de marge produisent trois vérités et des réunions d’arbitrage sans fin. La définition se tranche en amont, une fois, et s’écrit quelque part.' },
      { h: 'Confondre outil et adoption', p: 'La BI la plus élégante ne sert à rien si personne ne l’ouvre. L’adoption se joue sur deux détails : le temps de chargement et le fait que le chiffre affiché corresponde à ce que l’équipe a en tête.' },
    ],
    budget: [
      'Le coût d’une BI se répartit grossièrement en trois tiers : la connexion aux sources, la modélisation, la restitution. C’est le deuxième tiers — invisible — qui est systématiquement sous-estimé, et celui qui décide du résultat.',
      'Les variables qui font vraiment bouger le budget : le nombre de sources à connecter, l’état de propreté des données existantes, et le nombre de définitions d’indicateurs à arbitrer entre services. Le nombre de graphiques, lui, compte peu.',
      'Le périmètre est le seul levier réellement efficace. Un premier tableau de bord sur une question précise se prototype en quelques jours ; une BI qui couvre toute l’entreprise d’emblée est un projet de plusieurs mois, avec un risque d’abandon proportionnel.',
    ],
    notFor: 'Si vos décisions reposent sur moins d’une dizaine de chiffres que vous connaissez de tête, et que vos données vivent dans un seul outil qui les affiche correctement, la BI n’a rien à vous apporter. Le besoin apparaît quand les sources se multiplient, ou quand la décision passe de vous à une équipe.',
    withMeridian: 'On prototype votre tableau de bord en quelques jours, avec vos équipes, sur vos vraies données — puis on l’affine jusqu’à ce qu’il soit adopté sans formation.',
    faq: [
      { q: 'Quelle différence entre la BI et un simple reporting ?', a: 'Le reporting décrit le passé dans un format figé ; la BI permet d’explorer, de croiser et de décider en temps réel, à la demande. La différence pratique : avec un reporting vous recevez une réponse, avec une BI vous posez une question.' },
      { q: 'Faut-il beaucoup de données pour faire de la BI ?', a: 'Non. Même une PME gagne à réunir ventes, marge et stock au même endroit — c’est souvent là que se cachent les décisions les plus rentables. Le volume importe moins que le nombre de sources à réconcilier.' },
      { q: 'Combien de temps avant d’avoir un premier tableau de bord utile ?', a: 'Quelques jours pour un premier tableau sur une question précise, à condition que la donnée source soit accessible. Ce qui allonge les délais, ce n’est presque jamais la visualisation : c’est l’accès aux données et l’arbitrage des définitions.' },
      { q: 'Faut-il remplacer nos tableurs ?', a: 'Pas nécessairement. L’objectif est de supprimer les tableurs qui servent de source de vérité — ceux que plusieurs personnes recopient. Un tableur qui sert à tester une hypothèse reste parfaitement légitime.' },
      { q: 'Nos données sont en désordre : faut-il tout nettoyer d’abord ?', a: 'Non, et c’est même contre-productif : un chantier de nettoyage sans objectif ne finit jamais. On part d’une question précise, on nettoie ce qu’elle exige, et l’exercice révèle au passage ce qui mérite d’être corrigé en priorité.' },
      { q: 'Qui doit maintenir la BI une fois livrée ?', a: 'Quelqu’un chez vous doit pouvoir modifier une définition d’indicateur sans appeler un prestataire. C’est un critère de conception, pas une option : une BI que vous ne pouvez pas faire évoluer se périme en six mois.' },
    ],
    glossary: [
      { term: 'Modélisation', def: 'L’étape où l’on décide ce que chaque chiffre signifie exactement : périmètre, règle de calcul, moment de comptabilisation. Invisible dans le résultat, déterminante pour sa fiabilité.' },
      { term: 'Source de vérité', def: 'L’endroit unique qui fait foi pour une donnée. Sans source de vérité désignée, deux outils affichent deux chiffres et personne ne peut trancher.' },
      { term: 'Temps réel', def: 'En pratique, un rafraîchissement assez fréquent pour que la décision soit encore possible. Pour un stock, quelques minutes ; pour une marge mensuelle, la journée suffit.' },
      { term: 'ETL', def: 'Extract, Transform, Load : la mécanique qui va chercher la donnée, la met en forme et la dépose là où la BI la lit.' },
    ],
    related: ['erp', 'pim', 'crm-fidelisation'],
  },
  {
    slug: 'plm',
    need: 'Produit',
    angle: 'Productivité',
    name: 'PLM — Gestion du cycle de vie produit',
    short: 'De l’idée au référencement, sans perdre le fil.',
    meta: {
      title: 'PLM : qu’est-ce que c’est, à quoi ça sert ? — Meridian',
      description: 'Le PLM (Product Lifecycle Management) gère le cycle de vie de vos produits, de l’idée au référencement. Définition, différence avec le PIM, erreurs à éviter — et comment le prototyper sur-mesure.',
    },
    lead: 'Concevoir, versionner et faire évoluer vos produits sans perdre le fil, de la première idée à la mise sur le marché.',
    whatIs: 'Le PLM (Product Lifecycle Management) est l’outil qui suit un produit tout au long de sa vie : conception, versions, matières, coûts, validations, mises à jour. Toute l’information produit est tracée et partagée entre les équipes.',
    whatIsMore: [
      'Un PLM répond à une question simple et redoutable : quelle est la version qui fait foi, et qui l’a validée ? Dans une entreprise qui conçoit des produits, cette information circule le plus souvent par mail, par fichiers nommés à la main et par mémoire collective. Le PLM la rend explicite.',
      'Il ne s’agit donc pas d’un logiciel de dessin ni d’un répertoire partagé mieux rangé. Un PLM porte trois choses que ni l’un ni l’autre ne sait porter : l’historique des versions, le circuit de validation, et le lien entre un produit et tout ce qui le compose — matières, composants, fournisseurs, coûts.',
      'C’est pour cette raison que le PLM est souvent l’outil le plus structurant d’une entreprise produit, et le plus difficile à installer : il ne se contente pas de ranger l’information, il oblige à nommer qui décide quoi, et à quel moment.',
    ],
    signs: [
      'Deux équipes travaillent sur deux versions différentes du même produit, sans le savoir.',
      'Vous retrouvez des fichiers nommés « final_v3_OK_vraimentfinal ».',
      'Personne ne sait dire avec certitude quelle matière a été validée pour une référence.',
      'Un changement de composant se répercute à la main, dans plusieurs fichiers, par plusieurs personnes.',
      'Le lancement d’une collection ou d’une gamme se joue toujours dans l’urgence des dernières semaines.',
    ],
    whatFor: 'À éviter les erreurs coûteuses et les allers-retours : chaque équipe travaille sur la bonne version, au bon moment. Le PLM raccourcit le time-to-market et sécurise la qualité.',
    whatForMore: [
      'Le bénéfice le plus concret est la fin des erreurs de version. Ce sont les plus chères, parce qu’elles se découvrent tard — en production, chez le fournisseur, parfois après livraison. Une matière non validée partie en fabrication, c’est une série à refaire.',
      'Le second bénéfice est la capacité à répondre vite à une question de traçabilité : d’où vient ce composant, qui a validé cette modification, quelle était la version en vigueur à telle date. Sur des marchés réglementés, ou simplement en cas de litige fournisseur, cette capacité change la nature de la discussion.',
    ],
    deltas: [
      { term: 'Un PIM', delta: 'Le PLM gère la conception et la vie du produit — versions, matières, coûts, validations. Le PIM gère l’information de diffusion — fiches, visuels, canaux de vente. Le PLM précède le PIM : l’un décide ce que le produit est, l’autre raconte ce qu’il est. Les deux se complètent et se chaînent.' },
      { term: 'Un DAM', delta: 'Le DAM (Digital Asset Management) gère les fichiers médias : photos, vidéos, visuels. Il répond à « où est le bon visuel », pas à « quelle est la bonne version du produit ».' },
      { term: 'Un ERP', delta: 'L’ERP gère le produit une fois qu’il existe : stock, achats, production, facturation. Le PLM gère la période où le produit n’existe pas encore. Beaucoup d’entreprises tentent de faire porter le PLM par leur ERP ; ça fonctionne tant que les versions sont rares.' },
    ],
    steps: [
      'On cartographie votre process produit réel, de l’idée au lancement — avec ses raccourcis et ses points de blocage.',
      'On identifie les étapes de validation qui comptent, et celles qui n’existent que sur le papier.',
      'On structure les données, versions et validations au bon niveau de détail — ni trop fin, ni trop vague.',
      'On outille d’abord les étapes qui vous font perdre du temps aujourd’hui, puis on étend.',
    ],
    mistakes: [
      { h: 'Vouloir tout modéliser avant de commencer', p: 'Un PLM conçu pour couvrir tous les cas possibles n’est jamais mis en service. On part des deux ou trois étapes où les erreurs coûtent le plus cher, et le reste suit sur l’usage.' },
      { h: 'Imposer un circuit de validation que personne ne suivra', p: 'Si le circuit officiel est plus lent que le contournement par mail, c’est le mail qui gagne — et le PLM devient une coquille vide tenue à jour après coup. Le circuit doit être plus rapide que le contournement, pas plus rigoureux.' },
      { h: 'Négliger la reprise de l’existant', p: 'Un PLM vide pendant que l’information de référence reste dans les anciens fichiers crée deux sources de vérité, soit exactement le problème qu’on voulait régler. La reprise de l’historique utile fait partie du projet, pas de la suite.' },
      { h: 'Acheter un PLM d’éditeur dimensionné pour l’industrie lourde', p: 'Les PLM du marché viennent souvent de l’aéronautique ou de l’automobile. Leur richesse fonctionnelle est réelle, et devient un coût de paramétrage et de formation hors de proportion pour une PME.' },
    ],
    budget: [
      'Sur un PLM, ce n’est pas la licence qui domine le coût total mais le paramétrage et la reprise de données. Un outil peu cher mal paramétré coûte plus qu’un outil cher bien cadré.',
      'Les variables qui comptent : le nombre d’étapes de validation à modéliser, la profondeur de la nomenclature produit, et l’état de l’information existante. Le nombre de références, lui, a un effet moindre qu’on ne le croit.',
      'Le levier principal est le séquencement. Outiller une étape de validation puis une autre permet de mesurer l’adoption avant d’engager la suite — et d’arrêter si l’outil ne prend pas.',
    ],
    notFor: 'Si vos produits changent peu, que les versions sont rares et que deux personnes suffisent à savoir où en est chaque référence, un PLM est une complexité ajoutée. Le besoin naît du nombre de versions et du nombre de personnes qui doivent les connaître, pas du chiffre d’affaires.',
    withMeridian: 'Les PLM du marché sont souvent trop lourds pour une PME. On prototype le vôtre au plus près de votre métier — et on y ajoute les fonctions qu’aucun éditeur ne priorise, comme un générateur de descriptifs.',
    faq: [
      { q: 'PLM ou PIM, quelle différence ?', a: 'Le PLM gère la conception et la vie du produit (versions, matières, coûts, validations) ; le PIM gère l’information de diffusion (fiches, visuels, canaux). Le PLM décide ce que le produit est, le PIM raconte ce qu’il est. Les deux se chaînent.' },
      { q: 'Le PLM est-il réservé à l’industrie ?', a: 'Non. Toute entreprise qui conçoit et fait évoluer des produits — mode, retail, agroalimentaire, cosmétique — y gagne. Le critère n’est pas le secteur mais la fréquence des versions.' },
      { q: 'Peut-on démarrer un PLM sans reprendre tout l’historique ?', a: 'Oui, à condition de trancher : on reprend l’historique des références encore actives, et on archive le reste en lecture seule. Ce qui est à éviter, c’est de laisser l’information de référence vivre à deux endroits.' },
      { q: 'Notre ERP ne peut-il pas faire office de PLM ?', a: 'Tant que les versions sont rares, souvent oui. L’ERP décroche quand il faut tracer plusieurs versions simultanées d’un même produit, avec des validations par étape — ce n’est pas ce pour quoi il est conçu.' },
      { q: 'Combien de temps pour mettre un PLM en service ?', a: 'Avec le prototypage, une première étape de validation outillée en quelques semaines. Un PLM complet se compte en mois, et c’est précisément pourquoi on ne le livre pas d’un bloc.' },
      { q: 'Qui doit porter le projet en interne ?', a: 'Quelqu’un qui a l’autorité de trancher les circuits de validation. Un PLM piloté par la seule informatique se heurte au premier arbitrage métier et s’arrête là.' },
    ],
    glossary: [
      { term: 'Nomenclature', def: 'La liste structurée de tout ce qui compose un produit : composants, matières, quantités. On parle aussi de BOM, pour Bill of Materials.' },
      { term: 'Versionnage', def: 'Le fait de conserver l’historique des états successifs d’un produit, en sachant lequel fait foi à un instant donné.' },
      { term: 'Time-to-market', def: 'Le délai entre la décision de faire un produit et sa mise sur le marché. C’est l’indicateur que le PLM cherche à réduire.' },
      { term: 'Circuit de validation', def: 'La suite d’accords nécessaires pour qu’une modification devienne officielle : qui valide quoi, dans quel ordre.' },
    ],
    related: ['pim', 'erp', 'data-bi'],
  },
  {
    slug: 'pim',
    need: 'Time to market',
    angle: 'Productivité',
    name: 'PIM — Gestion de l’information produit',
    short: 'Une source unique, diffusée partout.',
    meta: {
      title: 'PIM : qu’est-ce que c’est, à quoi ça sert ? — Meridian',
      description: 'Le PIM (Product Information Management) centralise vos fiches produit et les diffuse partout sans ressaisie. Définition, différence avec le PLM et le DAM, erreurs à éviter — et comment le prototyper.',
    },
    lead: 'Une source unique et fiable pour toutes vos fiches produit, diffusée sur tous vos canaux sans ressaisie.',
    whatIs: 'Le PIM (Product Information Management) centralise toutes les informations de vos produits — descriptions, visuels, caractéristiques, prix — et les diffuse vers vos canaux (site, marketplaces, catalogues) depuis une seule source.',
    whatIsMore: [
      'Le principe tient en une phrase : on enrichit une fois, on diffuse partout. Sans PIM, chaque canal a sa propre version de la fiche produit, et chacune dérive à son rythme. Au bout d’un an, personne ne sait laquelle est juste.',
      'Un PIM fait trois choses. Il stocke l’information produit dans une structure commune. Il organise qui enrichit quoi — le marketing écrit, le produit valide, la traduction suit. Et il exporte vers chaque canal dans le format que ce canal attend, ce qui n’est jamais le même d’une marketplace à l’autre.',
      'La valeur du PIM est donc moins dans le stockage que dans ce dernier point : absorber les exigences de format de chaque canal pour que vos équipes n’aient pas à les connaître. C’est aussi ce qui le rend indispensable dès qu’on vend sur plus de deux canaux.',
    ],
    signs: [
      'La même référence n’a pas la même description sur votre site et sur une marketplace.',
      'Chaque lancement produit mobilise plusieurs jours de ressaisie de fiches.',
      'Vous avez déjà vendu un produit avec une caractéristique fausse.',
      'Vos traductions sont systématiquement en retard sur le catalogue français.',
      'Ouvrir un nouveau canal de vente est repoussé à cause du travail de saisie que ça représente.',
    ],
    whatFor: 'À accélérer la mise en marché et à en finir avec les fiches qui se contredisent d’un canal à l’autre. Enrichie une fois, l’information part partout, à jour.',
    whatForMore: [
      'Le gain immédiat est du temps de saisie, et il est facile à chiffrer : comptez le nombre d’heures passées à remplir des fiches sur chaque canal à chaque lancement. Mais le gain durable est ailleurs : l’ouverture d’un nouveau canal cesse d’être un projet pour devenir un paramétrage.',
      'Il y a aussi un effet direct sur les ventes, moins discuté. Une fiche complète et exacte convertit mieux, et les marketplaces pénalisent les fiches incomplètes dans leur classement interne. Un PIM améliore la qualité moyenne des fiches simplement en rendant visible ce qui manque.',
    ],
    deltas: [
      { term: 'Un PLM', delta: 'Le PLM gère la conception du produit — versions, matières, coûts. Le PIM gère sa diffusion — descriptions, visuels, canaux. Le PLM dit ce que le produit est, le PIM le raconte au client. L’un alimente l’autre.' },
      { term: 'Un DAM', delta: 'Le DAM gère les fichiers médias : photos, vidéos, déclinaisons. Le PIM gère l’information textuelle et structurée. Les deux se branchent ensemble, et beaucoup de PIM intègrent un DAM simplifié — suffisant jusqu’à quelques milliers de visuels.' },
      { term: 'Un e-commerce', delta: 'Votre boutique en ligne est un canal de diffusion parmi d’autres. Y stocker la fiche de référence revient à faire dépendre tout votre catalogue d’un seul canal — et à recommencer à zéro le jour où vous le changez.' },
    ],
    steps: [
      'On inventorie vos canaux et ce que chacun exige comme format et comme champs.',
      'On centralise vos fiches produit au même endroit, dans une structure commune.',
      'On définit qui enrichit quoi, et les règles de qualité qui bloquent une fiche incomplète.',
      'On branche la diffusion vers vos canaux, sans ressaisie, puis on ajoute les canaux suivants.',
    ],
    mistakes: [
      { h: 'Reproduire la structure d’un canal dans le PIM', p: 'Si le PIM est modelé sur les champs de votre marketplace principale, chaque nouveau canal devient une exception. La structure doit être la vôtre, et la diffusion s’adapter aux canaux — jamais l’inverse.' },
      { h: 'Importer tout le catalogue sans trier', p: 'Reprendre les références mortes et les doublons revient à payer pour transporter un problème. Un PIM qui démarre propre sur 80 % du catalogue vaut mieux qu’un PIM complet et sale.' },
      { h: 'Oublier de définir ce qu’est une fiche complète', p: 'Sans règle de complétude, le PIM range mieux une information qui reste insuffisante. Les règles de qualité sont ce qui transforme un référentiel en levier commercial.' },
      { h: 'Traiter la traduction comme une étape finale', p: 'Si la traduction arrive après validation, elle devient systématiquement le goulot d’étranglement du lancement. Elle se modélise comme une étape d’enrichissement parmi les autres, parallélisable.' },
    ],
    budget: [
      'Le poste principal d’un projet PIM n’est ni la licence ni le développement : c’est le travail de structuration du catalogue et la reprise de l’existant. C’est un travail métier, qui mobilise vos équipes produit.',
      'Les variables qui pèsent : le nombre de canaux à alimenter, la diversité des typologies produit — un catalogue homogène se structure vite, un catalogue hétérogène demande plusieurs modèles —, et le niveau d’exigence des marketplaces visées.',
      'Le séquencement par canal est le levier le plus sûr : un canal branché et fiable, puis le suivant. Chaque canal ajouté coûte moins que le précédent, ce qui rend le retour sur investissement croissant dans le temps.',
    ],
    notFor: 'Si vous vendez sur un seul canal et que votre catalogue tient en quelques dizaines de références stables, votre e-commerce fait déjà office de PIM, et c’est très bien ainsi. Le besoin apparaît au deuxième canal, ou quand la ressaisie devient un poste de travail à part entière.',
    withMeridian: 'On prototype un PIM taillé à votre catalogue et à vos canaux — avec, si besoin, un générateur de fiches à l’IA pour gagner des heures à chaque lancement.',
    faq: [
      { q: 'Ai-je besoin d’un PIM si j’ai déjà un e-commerce ?', a: 'Souvent oui, dès que vous vendez sur plusieurs canaux : le PIM évite les ressaisies et les incohérences entre eux. Avec un seul canal, votre e-commerce suffit généralement.' },
      { q: 'Combien de temps pour mettre en place un PIM ?', a: 'Avec le prototypage, on met un premier PIM utile entre vos mains en quelques jours, puis on l’étend canal par canal. Ce qui prend du temps n’est pas l’outil : c’est la structuration du catalogue.' },
      { q: 'PIM et DAM, faut-il les deux ?', a: 'Pas forcément. Beaucoup de PIM embarquent une gestion de médias suffisante jusqu’à quelques milliers de visuels. Un DAM dédié se justifie quand les déclinaisons de visuels se multiplient — shootings, formats, saisons.' },
      { q: 'Peut-on générer les descriptions produit avec de l’IA ?', a: 'Oui, et c’est un des gains les plus rapides sur un catalogue volumineux. À deux conditions : partir de caractéristiques fiables, et garder une validation humaine. Une IA branchée sur des données fausses produit des fiches fausses, plus vite.' },
      { q: 'Que se passe-t-il si je change de plateforme e-commerce ?', a: 'C’est précisément l’intérêt du PIM : votre catalogue de référence ne bouge pas, seul le connecteur de diffusion change. Sans PIM, un changement de plateforme implique une migration complète du catalogue.' },
      { q: 'Faut-il un PIM avant ou après un PLM ?', a: 'Le plus souvent le PIM d’abord : son retour est plus rapide et plus visible. Le PLM se justifie ensuite, quand c’est la conception — et non la diffusion — qui bloque.' },
    ],
    glossary: [
      { term: 'Complétude', def: 'Le taux de remplissage d’une fiche produit au regard de ce qu’un canal exige. Un PIM sait dire quelles fiches ne sont pas diffusables, et pourquoi.' },
      { term: 'Référentiel', def: 'La base qui fait autorité pour une information. Le PIM est le référentiel de l’information produit destinée au client.' },
      { term: 'Canal', def: 'Tout endroit où vos produits sont présentés : site, marketplace, catalogue imprimé, portail revendeur, flux publicitaire.' },
      { term: 'Enrichissement', def: 'Le travail d’ajout d’information sur une fiche : description, caractéristiques, visuels, traduction. C’est l’activité principale dans un PIM.' },
    ],
    related: ['plm', 'site-vitrine-ecommerce', 'data-bi'],
  },
  {
    slug: 'site-vitrine-ecommerce',
    need: 'Vente & présence',
    angle: 'Chiffre d’affaires',
    name: 'Site vitrine & e-commerce',
    short: 'Être vu, être trouvé, vendre.',
    meta: {
      title: 'Site vitrine & e-commerce : à quoi ça sert, comment ça marche ? — Meridian',
      description: 'Site vitrine et e-commerce sur-mesure : présence, image et vente en ligne. Définition, différences, erreurs à éviter, budget — et comment prototyper le vôtre, connecté à vos outils.',
    },
    lead: 'Votre présence en ligne et votre canal de vente, prototypés sur-mesure et connectés à vos données.',
    whatIs: 'Le site vitrine présente votre entreprise et vos offres ; l’e-commerce y ajoute la vente en ligne. Bien conçus, ils sont le point de contact n°1 avec vos clients et un moteur d’acquisition.',
    whatIsMore: [
      'La distinction entre les deux est moins technique qu’économique. Un site vitrine a un objectif de contact : il doit convaincre et donner envie d’écrire ou d’appeler. Un e-commerce a un objectif de transaction : il doit lever les objections une par une jusqu’au paiement. Les deux ne se conçoivent pas de la même manière, et un e-commerce raté est souvent un site vitrine auquel on a ajouté un panier.',
      'Techniquement, un site moderne se juge sur trois choses que l’on peut mesurer : sa vitesse d’affichage, sa lisibilité sur mobile, et la propreté de sa structure pour les moteurs de recherche. Ces trois critères ne sont pas des finitions : ils déterminent combien de visiteurs restent, et combien de pages Google accepte d’indexer.',
      'Le quatrième critère, lui, ne se voit pas : la connexion aux données. Un site dont le stock, les prix et le catalogue se mettent à jour à la main est un site qui affiche des informations fausses une partie du temps.',
    ],
    signs: [
      'Votre site affiche des produits en stock que vous n’avez plus.',
      'Mettre à jour un prix ou une page demande de passer par un prestataire.',
      'Le site est lent sur mobile — et vous le savez sans avoir jamais mesuré.',
      'Les prospects vous demandent au téléphone des informations qui devraient être sur le site.',
      'Vous ne savez pas combien de contacts ou de ventes le site génère réellement.',
    ],
    whatFor: 'À exister aux yeux de vos prospects, à inspirer confiance et à vendre — 24 h/24. Un bon site transforme une visite en contact ou en commande.',
    whatForMore: [
      'Un site est le seul commercial qui travaille sans interruption, et le seul dont on peut mesurer précisément le taux d’échec. C’est ce qui en fait un investissement rationnel : chaque point de friction retiré se lit dans les chiffres.',
      'Pour une PME, le site a aussi une fonction de preuve. Un prospect qui hésite entre deux prestataires regarde les deux sites, et en tire des conclusions sur le sérieux, la taille et la modernité de chacun — justes ou fausses. C’est une inférence que vous ne contrôlez pas, mais que vous pouvez orienter.',
    ],
    deltas: [
      { term: 'Un site vitrine', delta: 'Objectif contact. On y juge la clarté de l’offre et la facilité à vous joindre. Quelques pages bien écrites suffisent ; le volume n’est pas un critère.' },
      { term: 'Un e-commerce', delta: 'Objectif transaction. Il faut en plus gérer le catalogue, le stock, le paiement, la livraison et le service après-vente. L’écart de complexité avec un site vitrine est considérable, et souvent sous-estimé.' },
      { term: 'Une marketplace', delta: 'Vendre sur une marketplace vous apporte du trafic immédiat, en échange d’une commission et d’une relation client que vous ne possédez pas. Les deux sont complémentaires : la marketplace pour le volume, votre site pour la marge et la relation.' },
    ],
    steps: [
      'On prototype les pages clés et le parcours, avec vos équipes, avant d’écrire du code définitif.',
      'On soigne l’image, la vitesse et le mobile — d’emblée, pas en fin de projet.',
      'On embarque la structure SEO dès la conception : titres, canoniques, données structurées, plan de site.',
      'On connecte le site à vos données — stock, PIM, CRM — pour qu’il reste juste sans intervention.',
    ],
    mistakes: [
      { h: 'Traiter la performance comme une finition', p: 'La vitesse se décide à la conception : poids des images, nombre de scripts, polices. Elle se rattrape mal après coup, et une image de 700 ko sur une page d’accueil suffit à perdre une partie des visiteurs mobiles.' },
      { h: 'Reporter le SEO à après la mise en ligne', p: 'La structure d’URL, les balises canoniques et le plan de site sont des choix d’architecture. Les corriger après indexation coûte des semaines de reprise — et parfois la perte de l’antériorité acquise.' },
      { h: 'Déconnecter le site du reste des outils', p: 'Un site alimenté à la main affiche des informations fausses dès la première semaine de rush. La connexion aux données n’est pas un confort : c’est ce qui fait la différence entre une vitrine et un canal de vente.' },
      { h: 'Confondre refonte graphique et refonte de parcours', p: 'Un site plus beau avec le même parcours convertit généralement comme avant. Ce qui déplace les chiffres, c’est l’ordre dans lequel on répond aux objections, pas la palette de couleurs.' },
    ],
    budget: [
      'Pour un site vitrine, le coût se concentre sur la conception et la rédaction : ce sont les pages écrites, pas les pages affichées, qui demandent du travail. Un site de cinq pages bien pensées coûte souvent plus cher qu’un site de vingt pages génériques, et rapporte davantage.',
      'Pour un e-commerce, les postes qui dominent sont le catalogue, les connexions — paiement, transport, stock — et le travail de conversion. Le développement du site lui-même est rarement le poste principal.',
      'Le facteur de coût le plus souvent ignoré est la maintenance : un site vit, se met à jour et se surveille. Un budget de création sans budget d’évolution produit un site qui se dégrade en douze mois.',
    ],
    notFor: 'Si votre activité tourne entièrement sur la recommandation et que vous refusez déjà des clients, un nouveau site ne changera rien à votre chiffre d’affaires — au mieux il protégera votre image. La question utile n’est pas « ai-je besoin d’un site » mais « quelle demande existante je ne capte pas aujourd’hui ».',
    withMeridian: 'On prototype un site à l’animation fluide et au SEO embarqué, connecté à vos outils — pas une vitrine générique déconnectée du reste.',
    faq: [
      { q: 'Site vitrine ou e-commerce, par quoi commencer ?', a: 'Par ce qui sert votre objectif : la présence et les contacts (vitrine) ou la vente directe (e-commerce). On peut prototyper l’un puis l’étendre à l’autre — l’inverse est plus coûteux.' },
      { q: 'Un nouveau site va-t-il m’aider à être trouvé sur Google ?', a: 'Oui si le SEO est intégré dès la conception — structure, contenus, performance. Un site refait sans travail de structure peut même perdre du terrain, en cassant les URL déjà indexées.' },
      { q: 'Combien de temps pour un site ?', a: 'Quelques semaines pour un site vitrine prototypé avec vous ; davantage pour un e-commerce, selon le catalogue et les connexions. Ce qui allonge les délais est presque toujours la production des contenus, pas le développement.' },
      { q: 'Faut-il partir d’un CMS existant ou d’un développement sur-mesure ?', a: 'Un CMS standard convient à un besoin standard, et c’est souvent le bon choix. Le sur-mesure se justifie quand le site doit s’intégrer à vos outils métier, ou quand la performance et le parcours sont des arguments commerciaux.' },
      { q: 'Comment savoir si mon site actuel est lent ?', a: 'En le mesurant plutôt qu’en le ressentant : les Core Web Vitals de Google donnent trois indicateurs chiffrés, dont le temps d’affichage du contenu principal. Un diagnostic prend quelques minutes et ne coûte rien.' },
      { q: 'Qui écrit les contenus ?', a: 'Vous détenez la matière, nous la mettons en forme. Un site dont les textes sont écrits par un prestataire sans accès au métier se reconnaît au premier paragraphe — et les prospects le voient aussi.' },
    ],
    glossary: [
      { term: 'Core Web Vitals', def: 'Trois indicateurs chiffrés de Google sur l’expérience réelle d’une page : vitesse d’affichage du contenu principal, stabilité visuelle, réactivité aux clics.' },
      { term: 'Headless', def: 'Architecture où l’affichage du site est séparé de la gestion du contenu. Elle permet de changer l’un sans refaire l’autre, et d’afficher très vite.' },
      { term: 'Taux de conversion', def: 'La part des visiteurs qui réalisent l’action visée : commande, demande de devis, prise de contact.' },
      { term: 'Balise canonique', def: 'L’instruction qui désigne l’adresse de référence d’une page. Mal renseignée, elle empêche l’indexation — c’est une des erreurs techniques les plus coûteuses.' },
    ],
    related: ['seo-geo', 'pim', 'pos'],
  },
  {
    slug: 'seo-geo',
    need: 'Acquisition',
    angle: 'Chiffre d’affaires',
    name: 'Acquisition — SEO & GEO',
    short: 'Être trouvé sur Google et les IA.',
    meta: {
      title: 'SEO & GEO : être trouvé sur Google et les IA — Meridian',
      description: 'Le SEO vous rend visible sur Google ; le GEO vous rend citable par les IA (ChatGPT, Gemini, Perplexity). Définition, ce que disent les études, erreurs à éviter — et comment on l’intègre à votre site.',
    },
    lead: 'Être trouvé quand vos clients cherchent — sur Google (SEO) comme dans les réponses des IA (GEO).',
    whatIs: 'Le SEO (référencement naturel) optimise votre visibilité sur les moteurs de recherche. Le GEO (Generative Engine Optimization) fait en sorte que les IA génératives — ChatGPT, Gemini, Perplexity — citent votre entreprise dans leurs réponses. Deux faces d’un même enjeu : être trouvé.',
    whatIsMore: [
      'Le point le plus utile à comprendre, et le moins connu : les assistants IA ne citent pas leurs sources depuis leur mémoire d’entraînement. Quand ils répondent à une question d’actualité ou commerciale, ils lancent une recherche et lisent des pages — via des index de recherche classiques. Conséquence directe : une page non indexée par les moteurs n’a aucune chance d’être citée par une IA. Le GEO ne remplace donc pas le SEO, il en dépend.',
      'Le terme vient d’un travail de recherche de Princeton, Georgia Tech et l’Allen Institute, présenté à la conférence ACM KDD en 2024. Une revue de la littérature publiée en juillet 2026 a examiné quarante-cinq études sur le sujet : elle ne retient que trois facteurs au niveau de preuve modéré à fort — la pertinence entre la question et le contenu, la position du passage utile dans la page, et la présence de preuves extractibles comme des chiffres vérifiables.',
      'Tout le reste — les gains annoncés en pourcentages, les seuils de nombre de mots, les fichiers de déclaration comme llms.txt — relève pour l’instant du discours commercial plutôt que de la donnée établie. Nous préférons le dire.',
    ],
    signs: [
      'Vous n’apparaissez pas sur votre propre nom d’entreprise.',
      'Vos concurrents sortent en premier sur les requêtes qui décrivent votre métier.',
      'Vous avez des pages publiées depuis des mois que Google n’a jamais indexées.',
      'Quand on interroge un assistant IA sur votre domaine, d’autres noms que le vôtre sortent.',
      'Votre trafic vient presque entièrement de la recommandation ou de la publicité payante.',
    ],
    whatFor: 'À capter une demande qui existe déjà : les gens qui cherchent un outil, un service, une réponse. Bien fait, c’est le canal d’acquisition le plus rentable dans la durée.',
    whatForMore: [
      'La particularité du SEO est son profil économique : l’effort est en amont, le rendement s’accumule. Une page qui classe continue de travailler sans coût marginal, là où la publicité s’arrête le jour où le budget s’arrête. C’est aussi ce qui le rend lent à démarrer — et inadapté à un besoin de résultat immédiat.',
      'Sur le GEO, il faut avoir en tête ce que mesure le Pew Research Center : en présence d’un résumé généré par IA, les internautes cliquent un résultat classique dans 8 % des visites, contre 15 % sans résumé, et une source citée dans le résumé dans 1 % des cas. Autrement dit, être cité par une IA apporte aujourd’hui beaucoup d’exposition de marque et très peu de trafic. C’est un objectif de notoriété, pas un canal d’acquisition — et toute promesse contraire mérite méfiance.',
    ],
    deltas: [
      { term: 'La publicité payante', delta: 'Le SEA achète une position immédiate, qui disparaît avec le budget. Le SEO construit une position qui reste. Les deux se combinent bien : la publicité pour valider une demande, le SEO pour la capter durablement.' },
      { term: 'Les réseaux sociaux', delta: 'Les réseaux sociaux créent la demande auprès de gens qui ne cherchaient rien. Le SEO capte une demande déjà formulée. Le premier est un travail d’attention, le second un travail de réponse.' },
      { term: 'Le GEO', delta: 'Le GEO ne s’oppose pas au SEO et ne le remplace pas. Il suppose d’être indexé, puis ajoute un travail de forme : réponses directes, passages autonomes, chiffres vérifiables — ce qu’un modèle peut extraire sans réécrire.' },
    ],
    steps: [
      'On vérifie d’abord l’indexation : une page que Google n’indexe pas ne classera jamais, et ne sera jamais citée par une IA.',
      'On identifie les questions et besoins que vos clients tapent réellement — pas ceux qu’on suppose.',
      'On produit des pages claires qui y répondent directement, dès le premier paragraphe.',
      'On structure le site pour les moteurs et pour les IA : données structurées, FAQ, passages extractibles, chiffres sourcés.',
    ],
    mistakes: [
      { h: 'Travailler le contenu avant d’avoir vérifié l’indexation', p: 'C’est l’erreur la plus coûteuse, et la plus fréquente. Une balise canonique mal renseignée, un noindex oublié, un plan de site incohérent : la page peut être excellente, elle reste invisible. Le diagnostic technique passe avant la rédaction.' },
      { h: 'Viser des requêtes de définition très concurrentielles', p: 'Se positionner sur « qu’est-ce qu’un ERP » revient à affronter des éditeurs installés, sur une requête dont l’intention d’achat est nulle. Mieux vaut des requêtes plus étroites, où la personne qui cherche a un problème et un budget.' },
      { h: 'Confondre volume et valeur', p: 'Mille visites de curieux valent moins que dix visites de prospects qualifiés. Le bon indicateur n’est pas le trafic mais le nombre de contacts entrants qu’il produit.' },
      { h: 'Attendre du GEO ce qu’il ne donne pas', p: 'Les données disponibles montrent une exposition de marque réelle et un trafic marginal. Construire un plan d’acquisition sur la citation par les IA, c’est financer de la notoriété en croyant acheter des leads.' },
    ],
    budget: [
      'Le SEO se décompose en trois postes très différents : la correction technique, ponctuelle et souvent la plus rentable ; la production de contenu, récurrente ; et l’acquisition de notoriété — mentions, citations, présence — qui est la plus lente et la moins contrôlable.',
      'Pour un site récent, l’ordre de priorité est presque toujours le même : d’abord la technique, parce qu’une erreur d’indexation annule tout le reste ; ensuite l’identité et la crédibilité de l’entreprise, parce qu’un domaine jeune sans aucun signal externe ne classe pas, quel que soit le contenu ; le contenu en troisième.',
      'Le facteur de coût qu’on ne peut pas acheter est le temps. Quelques semaines à quelques mois selon la concurrence, et un domaine récent démarre plus lentement qu’un domaine installé. Toute offre qui promet un classement rapide sur une requête concurrentielle promet quelque chose qu’elle ne contrôle pas.',
    ],
    notFor: 'Si vos clients ne cherchent pas votre service sur un moteur — parce qu’il se vend par appel d’offres, par réseau ou par prescription —, le SEO n’est pas votre levier. Autant investir là où la décision se prend réellement.',
    withMeridian: 'On embarque le SEO dans le site dès la conception, et on ajoute des pages de contexte pensées pour le GEO — pour que les recherches sur vos besoins tombent sur vous.',
    faq: [
      { q: 'Le GEO, est-ce différent du SEO ?', a: 'Complémentaire, et dépendant : le SEO vise le classement sur Google, le GEO la citation par les IA. Comme les assistants IA passent par des index de recherche pour citer leurs sources, une page non indexée ne peut pas être citée. Le GEO suppose donc le SEO.' },
      { q: 'Combien de temps avant des résultats en SEO ?', a: 'Quelques semaines à quelques mois selon la concurrence et l’ancienneté du domaine. Un correctif technique peut produire un effet en quelques jours ; gagner une position sur une requête disputée se compte en mois.' },
      { q: 'Faut-il publier un fichier llms.txt pour être cité par les IA ?', a: 'Rien ne permet aujourd’hui de l’affirmer : son efficacité n’est pas démontrée. Le coût est faible, l’effet incertain. Nous ne le présentons pas comme un levier.' },
      { q: 'Comment savoir si mes pages sont indexées ?', a: 'Par la Search Console de Google, gratuite : son rapport d’indexation liste les pages connues, celles qui sont exclues, et la raison de chaque exclusion. C’est le premier outil à ouvrir, avant toute décision de contenu.' },
      { q: 'Les contenus écrits par IA sont-ils pénalisés ?', a: 'Ce que les moteurs sanctionnent est le contenu sans valeur ajoutée, quelle qu’en soit l’origine. Une page générée qui n’apporte rien ne classe pas ; une page assistée par IA mais nourrie d’expérience réelle classe comme une autre.' },
      { q: 'Combien de pages faut-il publier ?', a: 'Aucun seuil ne tient. Quelques pages qui répondent précisément à une question valent mieux que cinquante pages génériques — qui diluent le site et consomment le budget d’exploration des moteurs.' },
    ],
    glossary: [
      { term: 'Indexation', def: 'Le fait qu’un moteur ait enregistré une page et accepte de la proposer en résultat. Sans indexation, ni classement ni citation possible.' },
      { term: 'Search Console', def: 'L’outil gratuit de Google qui montre comment il voit votre site : pages indexées, exclusions et leur motif, requêtes d’arrivée.' },
      { term: 'Données structurées', def: 'Un balisage lisible par les machines qui décrit explicitement le contenu d’une page — organisation, questions-réponses, produit. Il aide moteurs et IA à extraire la bonne information.' },
      { term: 'Passage extractible', def: 'Un paragraphe autonome, qui répond à une question sans dépendre du reste de la page. C’est la forme que les modèles reprennent le plus volontiers.' },
    ],
    related: ['site-vitrine-ecommerce', 'data-bi', 'crm-fidelisation'],
  },
  {
    slug: 'crm-fidelisation',
    need: 'Fidélisation',
    angle: 'Chiffre d’affaires',
    name: 'CRM & fidélisation',
    short: 'Convertir, puis retenir.',
    meta: {
      title: 'CRM & fidélisation : qu’est-ce que c’est, à quoi ça sert ? — Meridian',
      description: 'Le CRM centralise vos relations clients pour convertir et fidéliser. Définition, différence avec l’ERP, erreurs à éviter, budget — et comment prototyper un CRM et un programme de fidélité sur-mesure.',
    },
    lead: 'Centraliser vos relations clients pour convertir plus, puis fidéliser — là où se gagne la marge.',
    whatIs: 'Le CRM (Customer Relationship Management) réunit l’historique et le suivi de vos clients et prospects : contacts, échanges, opportunités, relances. Le programme de fidélité y ajoute des mécaniques pour faire revenir vos clients.',
    whatIsMore: [
      'Un CRM sert d’abord à répondre à trois questions qu’une mémoire humaine ne tient pas au-delà d’une certaine volumétrie : où en est cette affaire, qui doit faire quoi ensuite, et qu’est-ce qu’on s’est déjà dit. Tout le reste — segmentation, scoring, automatisations — vient après, et ne vaut rien si ces trois réponses ne sont pas fiables.',
      'La fidélisation est un sujet distinct, souvent confondu avec le CRM parce qu’elle s’appuie sur les mêmes données. Le CRM gère la relation ; le programme de fidélité organise la récurrence — par des avantages, des statuts, des relances déclenchées par le comportement d’achat.',
      'Un CRM se juge sur un seul critère : est-ce que les commerciaux le remplissent ? Un CRM à jour et pauvre vaut mieux qu’un CRM riche et abandonné. Cela a une conséquence de conception : chaque champ obligatoire ajouté réduit le taux de remplissage.',
    ],
    signs: [
      'Un prospect vous relance et vous ne retrouvez pas l’historique de l’échange.',
      'Les informations clients vivent dans les boîtes mail personnelles de chacun.',
      'Un départ dans l’équipe commerciale emporte une partie du portefeuille avec lui.',
      'Vous ne savez pas dire combien d’affaires sont en cours, ni à quelle étape.',
      'Vos clients les plus fidèles ne sont pas traités différemment des nouveaux.',
    ],
    whatFor: 'À ne perdre aucune opportunité et à faire revenir vos clients : un prospect relancé au bon moment, un client récompensé, une relation suivie. Fidéliser coûte moins cher qu’acquérir.',
    whatForMore: [
      'Le gain le plus mesurable est sur les affaires perdues par oubli — celles où personne n’a relancé. C’est une déperdition silencieuse, que personne ne porte, et qui disparaît dès qu’une relance se déclenche automatiquement plutôt que par mémoire.',
      'Le second gain porte sur la connaissance client. Dès que l’historique est centralisé, des régularités apparaissent : quels clients reviennent, à quel rythme, après quel type de contact. C’est la matière première d’un programme de fidélité qui ne se résume pas à une remise généralisée.',
    ],
    deltas: [
      { term: 'Un ERP', delta: 'L’ERP gère la transaction — commande, facture, livraison. Le CRM gère la relation avant et après : échanges, opportunités, suivi. Un ERP sait ce que le client a acheté, un CRM sait pourquoi et ce qu’il envisage d’acheter ensuite.' },
      { term: 'Un outil d’emailing', delta: 'L’emailing envoie des messages à des listes. Le CRM suit des relations individuelles. Les deux se branchent : le CRM définit qui doit recevoir quoi, l’emailing l’exécute.' },
      { term: 'Un tableur de suivi', delta: 'Un tableur partagé fonctionne jusqu’à deux ou trois commerciaux et quelques dizaines d’affaires. Il décroche sur l’historique des échanges, les relances datées et les droits d’accès.' },
    ],
    steps: [
      'On modélise votre parcours client réel, de la piste à la fidélité — avec les étapes qui existent vraiment.',
      'On réduit la saisie au minimum : ce qui n’est pas utilisé pour décider ne doit pas être demandé.',
      'On outille les relances et le suivi au bon moment, par déclenchement plutôt que par rappel manuel.',
      'On connecte le CRM à vos ventes et à votre site pour tout garder à jour sans ressaisie.',
    ],
    mistakes: [
      { h: 'Demander trop d’informations à la saisie', p: 'Chaque champ obligatoire ajouté fait baisser le taux de remplissage. Un CRM conçu pour produire des rapports complets finit vide — et ne produit aucun rapport.' },
      { h: 'Installer le CRM sans décider qui est responsable de quoi', p: 'Un CRM ne crée pas de process commercial, il en révèle l’absence. Si les étapes d’une affaire ne sont pas définies hors outil, l’outil ne les inventera pas.' },
      { h: 'Lancer un programme de fidélité avant d’avoir des données d’achat fiables', p: 'Une mécanique de fidélité branchée sur des historiques incomplets récompense les mauvais clients et oublie les bons. L’effet sur l’image est pire que l’absence de programme.' },
      { h: 'Réduire la fidélisation à une remise', p: 'Une remise permanente devient un prix. Les mécaniques qui tiennent dans le temps reposent sur de l’accès, du service ou de la reconnaissance — pas sur l’érosion de la marge.' },
    ],
    budget: [
      'Le coût d’un CRM est rarement dans l’outil : il est dans l’adoption. Un déploiement réussi suppose du temps d’accompagnement commercial, et une reprise de l’existant — ne serait-ce que des contacts dispersés dans les boîtes mail.',
      'Les variables qui pèsent : le nombre d’utilisateurs, le degré d’automatisation visé, et surtout le nombre de connexions à d’autres outils. Chaque connexion ajoutée est à la fois le plus gros poste de coût et la principale source de valeur.',
      'Le levier le plus efficace est de commencer par un seul usage mesurable — la relance des devis sans réponse, par exemple. Un gain visible en quelques semaines achète l’adhésion nécessaire au reste.',
    ],
    notFor: 'Si vous avez une dizaine de clients que vous connaissez personnellement et aucune prospection en cours, un CRM ajoutera de la saisie sans rien apporter. Le besoin naît du nombre d’affaires simultanées et du nombre de personnes qui doivent les suivre.',
    withMeridian: 'On prototype un CRM à votre process — pas une usine à gaz générique — avec les automatisations et le programme de fidélité qui comptent pour vous.',
    faq: [
      { q: 'Un CRM est-il utile pour une petite structure ?', a: 'Oui dès que vous suivez plus de clients que votre mémoire ne le permet, ou dès que vous êtes plusieurs à suivre les mêmes affaires. En dessous, il ajoute de la saisie sans contrepartie.' },
      { q: 'Peut-on relier le CRM à mon site et à mes ventes ?', a: 'Oui, et c’est le but : une donnée client unique, partagée entre le site, les ventes et les relances. Sans cette connexion, le CRM devient un deuxième endroit à tenir à jour à la main.' },
      { q: 'Quelle différence entre un CRM et un ERP ?', a: 'L’ERP gère la transaction — commande, facture, stock. Le CRM gère la relation — échanges, opportunités, relances. Les deux partagent le client mais ne répondent pas aux mêmes questions.' },
      { q: 'Faut-il un CRM du marché ou un CRM sur-mesure ?', a: 'Un CRM du marché convient à un cycle de vente standard, et c’est souvent le bon choix. Le sur-mesure se justifie quand votre process est votre différenciation, ou quand le CRM doit s’intégrer étroitement à vos outils métier.' },
      { q: 'Comment faire adopter un CRM par une équipe commerciale ?', a: 'En leur faisant gagner du temps dès la première semaine. Un CRM qui demande de la saisie avant de rendre service est rejeté — et il a raison de l’être. On commence par ce qui leur fait gagner une relance, pas par le reporting de la direction.' },
      { q: 'Un programme de fidélité est-il rentable pour une PME ?', a: 'À condition de viser la récurrence plutôt que la remise, et de s’appuyer sur des données d’achat fiables. Une mécanique mal calibrée coûte de la marge sans changer le comportement.' },
    ],
    glossary: [
      { term: 'Pipeline', def: 'L’ensemble des affaires en cours, réparties par étape d’avancement. C’est la vue qui permet d’anticiper le chiffre d’affaires à venir.' },
      { term: 'Lead', def: 'Un contact entrant pas encore qualifié. Il devient opportunité quand un besoin et un budget sont identifiés.' },
      { term: 'Cycle de vente', def: 'Le délai moyen entre le premier contact et la signature. Il détermine le nombre d’affaires à entretenir simultanément.' },
      { term: 'Rétention', def: 'La part de clients qui reviennent sur une période donnée. C’est l’indicateur que vise un programme de fidélité.' },
    ],
    related: ['erp', 'data-bi', 'seo-geo'],
  },
  {
    slug: 'pos',
    need: 'Encaissement',
    angle: 'Chiffre d’affaires',
    name: 'POS — Point de vente',
    short: 'Encaisser, en boutique comme en ligne.',
    meta: {
      title: 'POS (point de vente) : qu’est-ce que c’est, à quoi ça sert ? — Meridian',
      description: 'Le POS (point de vente) encaisse et relie boutique et en ligne. Définition, différence avec l’e-commerce, erreurs à éviter — et comment prototyper une caisse connectée à vos stocks et à votre CRM.',
    },
    lead: 'Encaisser simplement — en boutique comme en ligne — et relier chaque vente à vos stocks et à vos clients.',
    whatIs: 'Le POS (Point of Sale, ou point de vente) est le système qui enregistre et encaisse vos ventes : caisse, paiements, tickets. Moderne, il relie la vente physique et en ligne, et met à jour stock et fichier client à chaque transaction.',
    whatIsMore: [
      'Une caisse a deux métiers qui n’ont rien à voir. Le premier est l’encaissement : il doit être rapide, fiable et fonctionner même quand le réseau tombe. Le second est la remontée d’information : chaque vente alimente le stock, le fichier client et le pilotage. Le premier se juge en secondes, le second en qualité de données.',
      'C’est cette double nature qui explique pourquoi les caisses génériques déçoivent souvent. Elles encaissent correctement et remontent mal — ou l’inverse. Un POS utile pour une entreprise qui vend aussi en ligne doit être pensé comme un point d’entrée de données autant que comme un terminal de paiement.',
      'La contrainte technique la plus structurante est le mode hors ligne. Une caisse qui dépend d’une connexion internet pour encaisser s’arrête en même temps que la connexion, un samedi après-midi.',
    ],
    signs: [
      'Le stock boutique et le stock du site ne correspondent jamais.',
      'Vous vendez en ligne un article déjà parti en magasin.',
      'Un client connu en boutique est un inconnu sur le site, et réciproquement.',
      'Le chiffre du jour se reconstitue le lendemain, à la main.',
      'Une panne de connexion arrête l’encaissement.',
    ],
    whatFor: 'À vendre vite et sans friction, et à ne plus séparer boutique et web : le même stock, les mêmes clients, la même donnée. Chaque encaissement nourrit votre pilotage.',
    whatForMore: [
      'Le bénéfice immédiat est commercial : un stock juste permet de vendre ce qu’on a, et de promettre ce qu’on peut tenir. Les ventes manquées pour cause de stock faux et les annulations pour cause de stock inexistant coûtent toutes les deux, et les secondes coûtent aussi de la réputation.',
      'Le bénéfice de fond est l’unification du client. Dès que la vente boutique alimente la même fiche que la vente en ligne, la connaissance client devient exploitable — et un programme de fidélité devient possible, ce qui n’est pas le cas avec deux bases séparées.',
    ],
    deltas: [
      { term: 'Un e-commerce', delta: 'L’e-commerce vend en ligne, le POS encaisse — le plus souvent en boutique. Reliés, ils partagent stock et clients : c’est ce qu’on appelle l’omnicanal. Séparés, ils produisent deux vérités sur le même stock.' },
      { term: 'Un terminal de paiement', delta: 'Le terminal exécute le paiement par carte. Le POS gère la vente dans son ensemble : panier, remises, ticket, stock, client. Le terminal est un composant du POS, pas un substitut.' },
      { term: 'Un ERP', delta: 'L’ERP orchestre l’arrière-boutique : achats, stock, finance. Le POS est le point de contact avec le client. Le POS alimente l’ERP en temps réel ; sans cette liaison, le stock de l’ERP est faux dès la première vente.' },
    ],
    steps: [
      'On cartographie votre parcours d’encaissement réel : boutique, web, mobile, événements.',
      'On prototype une caisse simple et rapide, adaptée à vos produits et à vos remises.',
      'On traite le mode hors ligne dès le départ : encaisser doit rester possible sans réseau.',
      'On la connecte à vos stocks, votre CRM et vos tableaux de bord, dans les deux sens.',
    ],
    mistakes: [
      { h: 'Négliger le mode hors ligne', p: 'Une caisse qui ne fonctionne pas sans connexion arrête la vente au pire moment. La synchronisation différée doit être prévue à la conception, pas ajoutée après le premier incident.' },
      { h: 'Multiplier les écrans au moment du paiement', p: 'Chaque question posée à l’encaissement allonge la file. Les informations qu’on peut récupérer autrement — email, fidélité — ne doivent pas bloquer la transaction.' },
      { h: 'Laisser le stock se synchroniser une fois par jour', p: 'Avec un stock synchronisé la nuit, le site vend toute la journée des articles déjà partis. La synchronisation doit être continue, ou alors le site doit afficher une marge de sécurité.' },
      { h: 'Oublier la reprise d’inventaire', p: 'Un POS branché sur un stock théorique faux produit des données fausses plus vite. L’inventaire physique fait partie du projet.' },
    ],
    budget: [
      'Le coût d’un POS se répartit entre le logiciel, le matériel — terminaux, imprimantes, lecteurs — et les connexions. Le matériel est le poste le plus visible et rarement le plus lourd ; les connexions au stock et au CRM sont le poste décisif.',
      'Les variables qui comptent : le nombre de points de vente, la complexité des règles de remise et de prix, et le niveau d’exigence sur le temps réel du stock. Le volume de transactions, lui, change peu le coût de mise en œuvre.',
      'Le levier habituel est de démarrer sur un point de vente, de stabiliser le fonctionnement hors ligne et la synchronisation, puis de déployer. Un déploiement simultané multiplie les incidents par le nombre de boutiques.',
    ],
    notFor: 'Si vous ne vendez qu’en ligne, le POS n’a pas d’objet. Et si vous avez une boutique unique sans vente en ligne, une caisse du marché bien choisie suffit généralement : le sur-mesure se justifie quand il faut réconcilier plusieurs canaux ou des règles de prix particulières.',
    withMeridian: 'On prototype un POS taillé à votre façon de vendre — connecté à votre stock et à votre CRM — plutôt qu’une caisse générique déconnectée du reste de vos outils.',
    faq: [
      { q: 'POS et e-commerce, est-ce la même chose ?', a: 'Non : l’e-commerce vend en ligne, le POS encaisse, le plus souvent en boutique. Reliés, ils partagent stock et clients — c’est l’omnicanal. Séparés, ils affichent deux stocks différents pour les mêmes articles.' },
      { q: 'Un POS peut-il se connecter à mon stock et à mon CRM ?', a: 'Oui, et c’est tout l’intérêt : chaque vente met à jour le stock et enrichit la fiche client, sans ressaisie. C’est cette liaison qui distingue un POS moderne d’une caisse enregistreuse.' },
      { q: 'Que se passe-t-il si internet tombe ?', a: 'Un POS correctement conçu continue d’encaisser hors ligne et synchronise ensuite. Si ce n’est pas le cas, la caisse s’arrête avec la connexion — c’est le premier point à vérifier sur une solution du marché.' },
      { q: 'Peut-on garder notre caisse actuelle et juste la connecter ?', a: 'Parfois, si elle expose une interface d’échange. Beaucoup de caisses anciennes n’en ont pas, ou seulement en export de fichier — ce qui interdit le temps réel et limite l’omnicanal.' },
      { q: 'Faut-il un POS pour vendre sur des marchés ou des salons ?', a: 'Un POS mobile avec mode hors ligne y prend tout son sens : les ventes alimentent le même stock et le même fichier client que la boutique, au lieu de vivre dans un carnet.' },
      { q: 'Comment réconcilier les stocks boutique et en ligne ?', a: 'En désignant une source de vérité unique — le plus souvent l’ERP ou le POS — et en faisant du reste des consommateurs de cette donnée. Deux systèmes qui se corrigent mutuellement divergent toujours.' },
    ],
    glossary: [
      { term: 'Omnicanal', def: 'Le fait de partager stock, clients et historique entre tous les canaux de vente, physiques et en ligne, pour que le client vive une seule relation.' },
      { term: 'Mode hors ligne', def: 'La capacité d’une caisse à encaisser sans connexion, puis à synchroniser une fois le réseau revenu.' },
      { term: 'Click and collect', def: 'Commande en ligne, retrait en boutique. Elle suppose un stock partagé et fiable entre les deux canaux.' },
      { term: 'Panier moyen', def: 'Le montant moyen d’une transaction. Suivi par canal, il révèle où se joue réellement la marge.' },
    ],
    related: ['site-vitrine-ecommerce', 'erp', 'crm-fidelisation'],
  },
  {
    slug: 'erp',
    need: 'Opérations',
    angle: 'Productivité',
    name: 'ERP — Gestion intégrée',
    short: 'Le cœur opérationnel, orchestré.',
    meta: {
      title: 'ERP : qu’est-ce que c’est, à quoi ça sert ? — Meridian',
      description: 'L’ERP orchestre le cœur opérationnel de l’entreprise : ventes, achats, stocks, finance, production. Définition, erreurs à éviter, budget — et comment le prototyper à vos process, par briques.',
    },
    lead: 'Le cœur opérationnel de votre entreprise — ventes, achats, stocks, finance — orchestré selon vos process réels.',
    whatIs: 'L’ERP (Enterprise Resource Planning, ou progiciel de gestion intégré) réunit dans un même système les fonctions clés de l’entreprise : ventes, achats, stocks, finance, production. Une donnée saisie une fois circule partout.',
    whatIsMore: [
      'L’idée fondatrice de l’ERP est l’unicité de la donnée. Une commande saisie une fois engage le stock, déclenche l’achat, prépare la facture et alimente la comptabilité, sans qu’aucune information ne soit retapée. Tout le bénéfice vient de là, et toute la difficulté aussi : pour que la donnée circule, les services doivent accepter une définition commune.',
      'C’est pourquoi un projet ERP est d’abord un projet d’organisation. Le logiciel ne fait qu’inscrire dans le marbre des arbitrages qui, le plus souvent, n’avaient jamais été posés : qui crée un article, quand une commande est ferme, qui a le droit de modifier un prix.',
      'Les ERP du marché portent déjà ces arbitrages, pris pour d’autres. Les adopter signifie adopter les process d’un éditeur ; s’en écarter signifie payer du paramétrage. Cet arbitrage-là est la vraie décision d’un projet ERP, bien avant le choix du produit.',
    ],
    signs: [
      'La même information est saisie dans deux outils différents par deux personnes.',
      'Le stock théorique et le stock réel divergent en permanence.',
      'Facturer demande de rassembler des informations venues de trois endroits.',
      'Personne ne peut dire où en est une commande sans appeler quelqu’un.',
      'Chaque fin de mois mobilise plusieurs jours de réconciliation manuelle.',
    ],
    whatFor: 'À faire tenir tout le reste : l’ERP est l’ossature qui relie les opérations, supprime les doubles saisies et donne une vue unique de l’activité. Moins d’erreurs, plus de temps.',
    whatForMore: [
      'Le gain mesurable est la disparition des doubles saisies, et avec elles des écarts qu’elles produisent. Ce sont des erreurs coûteuses parce qu’elles se découvrent tard : à la facturation, à l’inventaire, ou au bilan.',
      'Le gain structurel est la traçabilité. Pouvoir répondre en quelques secondes à « où en est cette commande » change la relation client, et permet de tenir des engagements de délai qu’on évitait de prendre.',
      'Il faut toutefois être lucide sur le coût : un ERP contraint. Il interdit certains raccourcis qui faisaient gagner du temps à une personne, au bénéfice de la fiabilité collective. Ce transfert est le cœur de la résistance au changement sur ce type de projet.',
    ],
    deltas: [
      { term: 'Un CRM', delta: 'Le CRM gère la relation avant la vente — échanges, opportunités, relances. L’ERP gère l’exécution après : commande, stock, facture, comptabilité. Les deux se branchent autour du client.' },
      { term: 'Une BI', delta: 'L’ERP produit la donnée au fil des opérations. La BI la lit et la croise pour décider. Un ERP sans BI reste difficile à lire ; une BI sans donnée opérationnelle fiable n’a rien à montrer.' },
      { term: 'Un logiciel de comptabilité', delta: 'La comptabilité enregistre les écritures. L’ERP gère les opérations qui les produisent. Beaucoup de PME partent d’un outil comptable et l’étendent : ça fonctionne jusqu’à ce que le stock ou la production devienne le sujet.' },
    ],
    steps: [
      'On part de vos process réels, pas de ceux d’un éditeur — et on note explicitement ceux qui devront changer.',
      'On prototype d’abord les modules qui vous font le plus mal, mesurés en temps perdu.',
      'On fait circuler la donnée entre ces modules avant d’en ajouter d’autres.',
      'On les relie progressivement, sans big-bang risqué, avec un retour en arrière toujours possible.',
    ],
    mistakes: [
      { h: 'Lancer un projet global d’un seul tenant', p: 'Le « big bang » ERP est la configuration où les projets échouent le plus souvent : tout change en même temps, et le moindre problème devient bloquant pour toute l’entreprise. Par briques, un échec reste local.' },
      { h: 'Paramétrer l’outil pour conserver tous les usages existants', p: 'Reproduire chaque exception historique produit un ERP impossible à maintenir et à faire évoluer. Une partie des usages doit changer ; l’enjeu est de choisir lesquels, pas de les éviter tous.' },
      { h: 'Sous-estimer la reprise de données', p: 'Articles en double, clients obsolètes, stocks faux : un ERP démarré sur des données sales amplifie le désordre au lieu de le corriger. La reprise est un chantier à part entière, à chiffrer comme tel.' },
      { h: 'Traiter la formation comme une ligne budgétaire ajustable', p: 'Un ERP non maîtrisé est contourné, et les contournements recréent exactement les silos qu’on voulait supprimer. C’est la première économie qu’on fait, et la plus chère.' },
    ],
    budget: [
      'Sur un ERP, la licence est presque toujours la partie visible la plus faible du coût total. Les postes dominants sont le paramétrage, la reprise de données, l’intégration aux outils conservés, et la formation.',
      'Les variables qui pèsent : le nombre de modules activés, le niveau d’écart entre vos process et ceux de l’outil, et le nombre de systèmes à conserver et donc à connecter. Le nombre d’utilisateurs a surtout un effet sur la licence, rarement sur la mise en œuvre.',
      'Le levier décisif est le découpage. Outiller un périmètre, mesurer l’adoption, puis étendre : c’est plus long sur le papier et beaucoup plus court en pratique, parce qu’on ne recommence pas. Un ERP traditionnel se compte en mois voire en années ; une brique utile se compte en semaines.',
    ],
    notFor: 'Si vos opérations tiennent dans deux outils qui se parlent correctement, un ERP est une réponse disproportionnée. Le besoin naît du nombre de ressaisies et du nombre de systèmes qui prétendent détenir la même information — pas de la taille de l’entreprise.',
    withMeridian: 'Les ERP du marché imposent leurs process et coûtent cher. On prototype le vôtre par briques utiles, adopté au fur et à mesure — sans le chantier de plusieurs années.',
    faq: [
      { q: 'ERP ou logiciels séparés ?', a: 'Des logiciels séparés créent des silos et des ressaisies. L’ERP réunit les opérations autour d’une donnée commune — mais on peut y arriver par briques, sans tout remplacer d’un coup.' },
      { q: 'Un ERP est-il réservé aux grandes entreprises ?', a: 'Non. Le prototypage rend le sur-mesure accessible aux PME, sans le budget ni les délais d’un ERP traditionnel. Le critère n’est pas la taille mais le nombre de doubles saisies que vous subissez.' },
      { q: 'Combien de temps pour mettre un ERP en service ?', a: 'Un ERP d’éditeur se compte en mois, parfois en années. Une brique utile prototypée sur un périmètre précis se compte en semaines. C’est précisément pourquoi nous ne livrons pas d’un bloc.' },
      { q: 'Faut-il remplacer notre comptabilité ?', a: 'Pas nécessairement, et souvent pas en premier. La comptabilité est le domaine le mieux servi par les outils existants ; l’ERP gagne à démarrer là où le désordre coûte le plus cher — généralement le stock ou la production.' },
      { q: 'Que faire si nos process ne sont pas écrits ?', a: 'C’est le cas le plus fréquent, et l’ERP les révélera de toute façon. Mieux vaut les cartographier au début du projet — c’est souvent l’étape qui produit le plus de valeur, avant même la première ligne de code.' },
      { q: 'Peut-on revenir en arrière si ça ne fonctionne pas ?', a: 'Par briques, oui : chaque périmètre reste réversible tant que l’ancien système n’est pas éteint. C’est l’argument principal contre le déploiement global, où le retour en arrière est en pratique impossible.' },
    ],
    glossary: [
      { term: 'Progiciel', def: 'Un logiciel standard, vendu paramétrable, par opposition à un développement spécifique. Un ERP du marché est un progiciel.' },
      { term: 'Module', def: 'Un périmètre fonctionnel de l’ERP : ventes, achats, stock, production, finance. On les active rarement tous en même temps.' },
      { term: 'Reprise de données', def: 'Le transfert de l’information existante vers le nouveau système, avec le nettoyage que cela exige. Poste systématiquement sous-estimé.' },
      { term: 'Big bang', def: 'Le basculement de toute l’entreprise sur le nouvel ERP à une date unique. Rapide sur le papier, c’est la configuration la plus risquée.' },
    ],
    related: ['data-bi', 'plm', 'crm-fidelisation'],
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
      description: 'Business Intelligence (BI) brings your data together so you can steer the business in real time. Definition, purpose, how it works, mistakes to avoid — and how to prototype a bespoke dashboard.',
    },
    lead: 'Bring your scattered data together and make it readable, so decisions rest on facts rather than instinct.',
    whatIs: 'Business Intelligence (BI) refers to the tools that collect, cross-reference and visualise your company’s data — sales, margin, stock, cash — in clear dashboards. Data stops being a frozen export and becomes a live reading of your business.',
    whatIsMore: [
      'Technically, BI does three things in this order: it fetches data where it lives (ERP, till, e-commerce, spreadsheets), it shapes it according to stable rules — what is called modelling — then it presents it. The third step is the only one your teams see; the first two decide how reliable the whole thing is.',
      'That modelling is what separates a dashboard people consult from a dashboard people argue about. If “revenue” does not mean the same thing to finance and to sales — discounts in or out, at order or at invoice — no chart colour will reconcile the two. BI forces those definitions to be settled once and for all. That is often its most lasting contribution, before the first chart even exists.',
    ],
    signs: [
      'The same indicator gives two different numbers depending on who pulled it.',
      'Someone spends half a day a week rebuilding the same file.',
      'You learn about a product slowdown three weeks late.',
      'Decisions rest on how the team feels, for want of a number available in time.',
      'Your exports live in spreadsheets nobody dares touch.',
    ],
    whatFor: 'To decide quickly and correctly: spot a product losing ground, a margin eroding, a channel performing. BI turns scattered numbers into concrete decisions, at every level of the company.',
    whatForMore: [
      'The most visible gain is time: the hours of manual consolidation disappear. But the real gain lies elsewhere — in the delay between something happening and you knowing about it. Dead stock spotted in three days rather than six weeks is cash recovered.',
      'A second, less expected effect: BI reveals the actual quality of your data. The first dashboards almost always surface anomalies — duplicate references, negative margins, ghost customers. That is uncomfortable and useful: those anomalies existed before, they were simply invisible.',
    ],
    deltas: [
      { term: 'Reporting', delta: 'Reporting describes the past, on a fixed schedule, in a fixed format. BI lets you explore: filter, cross-reference, drill down, at the moment the question arises.' },
      { term: 'A spreadsheet', delta: 'A spreadsheet is a personal calculation tool. It has no single source, no reliable history, no access rights. BI rests on shared data; the spreadsheet stays useful for testing an idea.' },
      { term: 'An ERP', delta: 'The ERP produces data as operations happen. BI reads and cross-references it, including with other sources. The two are complementary: without an ERP, BI lacks material; without BI, the ERP stays hard to read.' },
    ],
    steps: [
      'We start from decisions, not data: which questions do you want to settle every week?',
      'We connect your sources — ERP, e-commerce, CRM, till, spreadsheets — and confront their discrepancies.',
      'We model the indicators: a written, agreed definition for every number displayed.',
      'We deliver real-time dashboards, then adjust them against actual use.',
    ],
    mistakes: [
      { h: 'Showing everything that is available', p: 'A dashboard with forty indicators goes unread. Five numbers that trigger an action beat forty that describe a situation. The test: for each indicator, who does what when it moves? No answer, and it leaves the dashboard.' },
      { h: 'Plugging BI into data nobody has cleaned', p: 'A first dashboard showing a wrong number loses its credibility in a single meeting, and does not get it back. Better to ship a narrow, correct scope and widen it.' },
      { h: 'Letting each department define its own indicators', p: 'Three definitions of margin produce three truths and endless reconciliation meetings. The definition is settled upstream, once, and written down somewhere.' },
      { h: 'Mistaking the tool for adoption', p: 'The most elegant BI is worthless if nobody opens it. Adoption turns on two details: load time, and whether the number shown matches what the team has in mind.' },
    ],
    budget: [
      'The cost of BI splits roughly into thirds: connecting the sources, modelling, presenting. It is the second third — invisible — that is consistently underestimated, and the one that decides the outcome.',
      'The variables that really move the budget: how many sources to connect, how clean the existing data is, and how many indicator definitions must be settled between departments. The number of charts matters little.',
      'Scope is the only genuinely effective lever. A first dashboard on a precise question can be prototyped in days; BI covering the whole company at once is a multi-month project, with a matching risk of being abandoned.',
    ],
    notFor: 'If your decisions rest on fewer than ten numbers you know by heart, and your data lives in a single tool that displays them correctly, BI has nothing to offer you. The need appears when sources multiply, or when the decision moves from you to a team.',
    withMeridian: 'We prototype your dashboard in days, with your teams, on your real data — then refine it until it is adopted without training.',
    faq: [
      { q: 'What is the difference between BI and plain reporting?', a: 'Reporting describes the past in a fixed format; BI lets you explore, cross-reference and decide in real time, on demand. In practice: with reporting you receive an answer, with BI you ask a question.' },
      { q: 'Do you need a lot of data to do BI?', a: 'No. Even a small company gains from putting sales, margin and stock in one place — that is often where the most profitable decisions hide. Volume matters less than the number of sources to reconcile.' },
      { q: 'How long before a first useful dashboard?', a: 'A few days for a first dashboard on a precise question, provided the source data is accessible. What stretches timelines is almost never the visualisation: it is data access and settling definitions.' },
      { q: 'Do we have to replace our spreadsheets?', a: 'Not necessarily. The aim is to remove the spreadsheets that act as a source of truth — the ones several people copy from. A spreadsheet used to test a hypothesis remains perfectly legitimate.' },
      { q: 'Our data is a mess: should we clean it all first?', a: 'No, and it is counterproductive: a cleaning project without an objective never ends. We start from a precise question, clean what it requires, and the exercise reveals what deserves fixing first.' },
      { q: 'Who maintains the BI once delivered?', a: 'Someone on your side must be able to change an indicator definition without calling a supplier. That is a design requirement, not an option: a BI you cannot evolve goes stale in six months.' },
    ],
    glossary: [
      { term: 'Modelling', def: 'The step where you decide exactly what each number means: scope, calculation rule, when it counts. Invisible in the result, decisive for its reliability.' },
      { term: 'Source of truth', def: 'The single place that is authoritative for a given piece of data. Without one, two tools show two numbers and nobody can settle it.' },
      { term: 'Real time', def: 'In practice, a refresh frequent enough for the decision still to be possible. For stock, minutes; for a monthly margin, daily is enough.' },
      { term: 'ETL', def: 'Extract, Transform, Load: the machinery that fetches data, shapes it and drops it where BI reads it.' },
    ],
    related: ['erp', 'pim', 'crm-fidelisation'],
  },
  {
    slug: 'plm',
    need: 'Product',
    angle: 'Productivity',
    name: 'PLM — Product Lifecycle Management',
    short: 'From idea to listing, without losing track.',
    meta: {
      title: 'PLM: what it is, what it’s for — Meridian',
      description: 'PLM (Product Lifecycle Management) manages your products’ lifecycle, from idea to listing. Definition, how it differs from PIM, mistakes to avoid — and how to prototype it bespoke.',
    },
    lead: 'Design, version and evolve your products without losing track, from first idea to market launch.',
    whatIs: 'PLM (Product Lifecycle Management) is the tool that follows a product throughout its life: design, versions, materials, costs, approvals, updates. All product information is traced and shared across teams.',
    whatIsMore: [
      'A PLM answers one simple, formidable question: which version is authoritative, and who approved it? In a company that designs products, that information usually travels by email, hand-named files and collective memory. PLM makes it explicit.',
      'So it is not a drawing tool, nor a better-organised shared folder. A PLM carries three things neither of those can: version history, the approval circuit, and the link between a product and everything that composes it — materials, components, suppliers, costs.',
      'That is why PLM is often the most structuring tool in a product company, and the hardest to install: it does not merely file information, it forces you to name who decides what, and when.',
    ],
    signs: [
      'Two teams are working on two different versions of the same product without knowing it.',
      'You find files named “final_v3_OK_reallyfinal”.',
      'Nobody can say with certainty which material was approved for a given reference.',
      'A component change is propagated by hand, across several files, by several people.',
      'Launching a collection or a range always comes down to the last few frantic weeks.',
    ],
    whatFor: 'To avoid costly mistakes and back-and-forth: every team works on the right version, at the right time. PLM shortens time-to-market and protects quality.',
    whatForMore: [
      'The most concrete benefit is the end of version errors. They are the most expensive kind, because they surface late — in production, at the supplier, sometimes after delivery. An unapproved material that went into manufacturing means a batch to redo.',
      'The second benefit is being able to answer a traceability question quickly: where does this component come from, who approved this change, which version was in force on a given date. In regulated markets, or simply in a supplier dispute, that capability changes the nature of the conversation.',
    ],
    deltas: [
      { term: 'A PIM', delta: 'PLM manages design and product life — versions, materials, costs, approvals. PIM manages distribution information — descriptions, visuals, sales channels. PLM comes first: one decides what the product is, the other tells customers what it is. They complement and chain together.' },
      { term: 'A DAM', delta: 'A DAM (Digital Asset Management) manages media files: photos, videos, visuals. It answers “where is the right image”, not “which is the right product version”.' },
      { term: 'An ERP', delta: 'The ERP manages the product once it exists: stock, purchasing, production, invoicing. PLM manages the period when the product does not exist yet. Many companies try to make their ERP carry PLM; it works as long as versions are rare.' },
    ],
    steps: [
      'We map your real product process, from idea to launch — including its shortcuts and bottlenecks.',
      'We identify the approval steps that matter, and those that exist only on paper.',
      'We structure data, versions and approvals at the right level of detail — neither too fine nor too vague.',
      'We tool the steps that cost you time today first, then extend.',
    ],
    mistakes: [
      { h: 'Trying to model everything before starting', p: 'A PLM designed to cover every possible case never goes live. Start from the two or three steps where errors cost most, and let the rest follow actual use.' },
      { h: 'Imposing an approval circuit nobody will follow', p: 'If the official circuit is slower than the email workaround, email wins — and the PLM becomes an empty shell updated after the fact. The circuit must be faster than the workaround, not stricter.' },
      { h: 'Neglecting migration of what already exists', p: 'An empty PLM while the reference information stays in the old files creates two sources of truth — exactly the problem you set out to solve. Migrating the useful history is part of the project, not a follow-up.' },
      { h: 'Buying a vendor PLM sized for heavy industry', p: 'Market PLMs often come from aerospace or automotive. Their functional richness is real, and turns into configuration and training costs out of all proportion for a smaller company.' },
    ],
    budget: [
      'On a PLM, the licence does not dominate total cost — configuration and data migration do. A cheap tool badly configured costs more than an expensive one properly scoped.',
      'The variables that count: how many approval steps to model, how deep the product bill of materials goes, and the state of existing information. The number of references matters less than people assume.',
      'Sequencing is the main lever. Tooling one approval step, then another, lets you measure adoption before committing to the rest — and stop if the tool does not take.',
    ],
    notFor: 'If your products change little, versions are rare and two people are enough to know where every reference stands, a PLM is added complexity. The need comes from the number of versions and the number of people who must know them, not from revenue.',
    withMeridian: 'Market PLMs are often too heavy for a smaller company. We prototype yours close to your trade — and add the functions no vendor prioritises, such as a description generator.',
    faq: [
      { q: 'PLM or PIM — what is the difference?', a: 'PLM manages design and product life (versions, materials, costs, approvals); PIM manages distribution information (listings, visuals, channels). PLM decides what the product is, PIM tells customers what it is. They chain together.' },
      { q: 'Is PLM only for industry?', a: 'No. Any company that designs and evolves products — fashion, retail, food, cosmetics — benefits. The criterion is not the sector but how often versions change.' },
      { q: 'Can we start a PLM without migrating all our history?', a: 'Yes, provided you decide: migrate the history of references still active, and archive the rest read-only. What to avoid is letting reference information live in two places.' },
      { q: 'Could our ERP act as a PLM?', a: 'While versions are rare, often yes. The ERP breaks down when you need to trace several simultaneous versions of one product, with step-by-step approvals — that is not what it is built for.' },
      { q: 'How long to put a PLM into service?', a: 'With prototyping, a first approval step tooled within weeks. A complete PLM is measured in months, which is precisely why we do not deliver it in one block.' },
      { q: 'Who should own the project internally?', a: 'Someone with the authority to settle approval circuits. A PLM driven by IT alone hits the first business decision and stops there.' },
    ],
    glossary: [
      { term: 'Bill of materials', def: 'The structured list of everything a product is made of: components, materials, quantities. Also called BOM.' },
      { term: 'Versioning', def: 'Keeping the history of a product’s successive states, while knowing which one is authoritative at any given moment.' },
      { term: 'Time-to-market', def: 'The delay between deciding to make a product and putting it on the market. It is the metric PLM sets out to reduce.' },
      { term: 'Approval circuit', def: 'The sequence of sign-offs needed for a change to become official: who approves what, in what order.' },
    ],
    related: ['pim', 'erp', 'data-bi'],
  },
  {
    slug: 'pim',
    need: 'Time to market',
    angle: 'Productivity',
    name: 'PIM — Product Information Management',
    short: 'One source, distributed everywhere.',
    meta: {
      title: 'PIM: what it is, what it’s for — Meridian',
      description: 'PIM (Product Information Management) centralises your product listings and distributes them everywhere without re-keying. Definition, how it differs from PLM and DAM, mistakes to avoid — and how to prototype it.',
    },
    lead: 'A single, reliable source for all your product information, distributed across every channel without re-keying.',
    whatIs: 'PIM (Product Information Management) centralises all your product information — descriptions, visuals, attributes, prices — and distributes it to your channels (website, marketplaces, catalogues) from a single source.',
    whatIsMore: [
      'The principle fits in one sentence: enrich once, distribute everywhere. Without a PIM, every channel has its own version of the product listing, and each drifts at its own pace. After a year, nobody knows which one is right.',
      'A PIM does three things. It stores product information in a common structure. It organises who enriches what — marketing writes, product approves, translation follows. And it exports to each channel in the format that channel expects, which is never the same from one marketplace to the next.',
      'So the value of a PIM lies less in storage than in that last point: absorbing each channel’s format requirements so your teams never have to learn them. It is also what makes it indispensable as soon as you sell on more than two channels.',
    ],
    signs: [
      'The same reference has a different description on your site and on a marketplace.',
      'Every product launch costs several days of re-keying listings.',
      'You have already sold a product with a wrong attribute.',
      'Your translations are systematically behind the main catalogue.',
      'Opening a new sales channel keeps getting postponed because of the data entry involved.',
    ],
    whatFor: 'To speed up time to market and put an end to listings that contradict each other from one channel to the next. Enriched once, information goes everywhere, up to date.',
    whatForMore: [
      'The immediate gain is data-entry time, and it is easy to quantify: count the hours spent filling listings on each channel at every launch. But the lasting gain is elsewhere: opening a new channel stops being a project and becomes a configuration.',
      'There is also a direct, less-discussed effect on sales. A complete, accurate listing converts better, and marketplaces penalise incomplete listings in their internal ranking. A PIM improves average listing quality simply by making what is missing visible.',
    ],
    deltas: [
      { term: 'A PLM', delta: 'PLM manages product design — versions, materials, costs. PIM manages its distribution — descriptions, visuals, channels. PLM says what the product is, PIM tells the customer about it. One feeds the other.' },
      { term: 'A DAM', delta: 'A DAM manages media files: photos, videos, variants. A PIM manages structured, textual information. The two connect, and many PIMs include a simplified DAM — enough up to a few thousand visuals.' },
      { term: 'An e-commerce platform', delta: 'Your online shop is one distribution channel among others. Storing the reference listing there makes your whole catalogue depend on a single channel — and means starting from scratch the day you change it.' },
    ],
    steps: [
      'We inventory your channels and what each one requires as format and fields.',
      'We centralise your product listings in one place, in a common structure.',
      'We define who enriches what, and the quality rules that block an incomplete listing.',
      'We connect distribution to your channels, without re-keying, then add the next channels.',
    ],
    mistakes: [
      { h: 'Reproducing a channel’s structure inside the PIM', p: 'If the PIM is modelled on your main marketplace’s fields, every new channel becomes an exception. The structure must be yours, and distribution must adapt to channels — never the other way round.' },
      { h: 'Importing the whole catalogue without sorting', p: 'Bringing over dead references and duplicates means paying to transport a problem. A PIM that starts clean on 80% of the catalogue beats a complete, dirty one.' },
      { h: 'Forgetting to define what a complete listing is', p: 'Without a completeness rule, the PIM merely files insufficient information more tidily. Quality rules are what turn a repository into a commercial lever.' },
      { h: 'Treating translation as a final step', p: 'If translation comes after approval, it systematically becomes the launch bottleneck. It should be modelled as one enrichment step among others, run in parallel.' },
    ],
    budget: [
      'The main cost item in a PIM project is neither the licence nor the development: it is structuring the catalogue and migrating what exists. That is business work, and it involves your product teams.',
      'The variables that weigh: how many channels to feed, how diverse your product types are — a homogeneous catalogue structures quickly, a heterogeneous one needs several models — and how demanding the target marketplaces are.',
      'Sequencing channel by channel is the safest lever: one channel connected and reliable, then the next. Each additional channel costs less than the one before, which makes the return on investment grow over time.',
    ],
    notFor: 'If you sell on a single channel and your catalogue is a few dozen stable references, your e-commerce platform already acts as your PIM, and that is fine. The need appears at the second channel, or when re-keying becomes a job in its own right.',
    withMeridian: 'We prototype a PIM shaped to your catalogue and your channels — with, if useful, an AI listing generator to save hours at every launch.',
    faq: [
      { q: 'Do I need a PIM if I already have an e-commerce platform?', a: 'Often yes, as soon as you sell on several channels: the PIM removes re-keying and inconsistencies between them. With a single channel, your platform is usually enough.' },
      { q: 'How long does it take to put a PIM in place?', a: 'With prototyping, a first useful PIM in your hands within days, then extended channel by channel. What takes time is not the tool: it is structuring the catalogue.' },
      { q: 'PIM and DAM — do we need both?', a: 'Not necessarily. Many PIMs include media handling that is sufficient up to a few thousand visuals. A dedicated DAM becomes justified when visual variants multiply — shoots, formats, seasons.' },
      { q: 'Can product descriptions be generated with AI?', a: 'Yes, and it is one of the fastest gains on a large catalogue. On two conditions: start from reliable attributes, and keep a human approval step. AI plugged into wrong data produces wrong listings, faster.' },
      { q: 'What happens if I change e-commerce platform?', a: 'That is precisely the point of a PIM: your reference catalogue does not move, only the distribution connector changes. Without a PIM, changing platform means a full catalogue migration.' },
      { q: 'PIM before or after a PLM?', a: 'Usually PIM first: its return is faster and more visible. PLM becomes justified next, when it is design — not distribution — that is the bottleneck.' },
    ],
    glossary: [
      { term: 'Completeness', def: 'How fully a product listing is filled in against what a channel requires. A PIM can tell you which listings are not fit to publish, and why.' },
      { term: 'Repository', def: 'The database that is authoritative for a piece of information. The PIM is the repository for customer-facing product information.' },
      { term: 'Channel', def: 'Anywhere your products are presented: website, marketplace, print catalogue, reseller portal, advertising feed.' },
      { term: 'Enrichment', def: 'The work of adding information to a listing: description, attributes, visuals, translation. It is the main activity inside a PIM.' },
    ],
    related: ['plm', 'site-vitrine-ecommerce', 'data-bi'],
  },
  {
    slug: 'site-vitrine-ecommerce',
    need: 'Sales & presence',
    angle: 'Revenue',
    name: 'Website & e-commerce',
    short: 'Be seen, be found, sell.',
    meta: {
      title: 'Website & e-commerce: what they’re for, how they work — Meridian',
      description: 'Bespoke website and e-commerce: presence, image and online sales. Definition, differences, mistakes to avoid, budget — and how to prototype yours, connected to your tools.',
    },
    lead: 'Your online presence and your sales channel, prototyped bespoke and connected to your data.',
    whatIs: 'A website presents your company and your offer; e-commerce adds online selling. Well designed, they are the number one point of contact with your customers and an acquisition engine.',
    whatIsMore: [
      'The distinction between the two is less technical than economic. A website has a contact objective: it must convince and make someone want to write or call. An e-commerce has a transaction objective: it must clear objections one by one, all the way to payment. The two are not designed the same way, and a failed e-commerce is often a website with a basket bolted on.',
      'Technically, a modern site is judged on three measurable things: display speed, readability on mobile, and how clean its structure is for search engines. None of them is a finishing touch: together they determine how many visitors stay, and how many pages Google agrees to index.',
      'The fourth criterion is invisible: the connection to your data. A site where stock, prices and catalogue are updated by hand is a site that displays wrong information part of the time.',
    ],
    signs: [
      'Your site shows products in stock that you no longer have.',
      'Changing a price or a page requires going through a supplier.',
      'The site is slow on mobile — and you know it without ever having measured.',
      'Prospects call you for information that should be on the site.',
      'You cannot say how many contacts or sales the site actually generates.',
    ],
    whatFor: 'To exist in your prospects’ eyes, to inspire trust and to sell — around the clock. A good site turns a visit into a contact or an order.',
    whatForMore: [
      'A site is the only salesperson that works without interruption, and the only one whose failure rate can be measured precisely. That is what makes it a rational investment: every point of friction removed shows up in the numbers.',
      'For a smaller company, the site also serves as proof. A prospect hesitating between two suppliers looks at both sites, and draws conclusions about the seriousness, size and modernity of each — right or wrong. That inference is not something you control, but it is something you can steer.',
    ],
    deltas: [
      { term: 'A website', delta: 'Contact objective. It is judged on how clear the offer is and how easy you are to reach. A few well-written pages are enough; volume is not a criterion.' },
      { term: 'An e-commerce', delta: 'Transaction objective. On top, you must handle catalogue, stock, payment, delivery and after-sales. The gap in complexity with a website is considerable, and often underestimated.' },
      { term: 'A marketplace', delta: 'Selling on a marketplace brings immediate traffic, in exchange for a commission and a customer relationship you do not own. The two are complementary: marketplace for volume, your own site for margin and relationship.' },
    ],
    steps: [
      'We prototype the key pages and the journey, with your teams, before writing final code.',
      'We get image, speed and mobile right from the start — not at the end of the project.',
      'We build SEO structure in from the design stage: titles, canonicals, structured data, sitemap.',
      'We connect the site to your data — stock, PIM, CRM — so it stays accurate without intervention.',
    ],
    mistakes: [
      { h: 'Treating performance as a finishing touch', p: 'Speed is decided at design time: image weight, number of scripts, fonts. It is hard to claw back afterwards, and a single 700 kB image on a homepage is enough to lose a share of mobile visitors.' },
      { h: 'Postponing SEO until after launch', p: 'URL structure, canonical tags and the sitemap are architectural choices. Fixing them after indexing costs weeks of rework — and sometimes the loss of accumulated standing.' },
      { h: 'Leaving the site disconnected from the other tools', p: 'A site fed by hand shows wrong information from the first busy week. Connecting to data is not a convenience: it is what separates a shop window from a sales channel.' },
      { h: 'Confusing a visual redesign with a journey redesign', p: 'A prettier site with the same journey generally converts the same. What moves the numbers is the order in which you answer objections, not the colour palette.' },
    ],
    budget: [
      'For a website, cost concentrates on design and copy: it is the pages written, not the pages displayed, that take work. A thoughtful five-page site often costs more than a generic twenty-page one, and earns more.',
      'For e-commerce, the dominant items are the catalogue, the connections — payment, shipping, stock — and conversion work. Building the site itself is rarely the main line.',
      'The most frequently ignored cost factor is maintenance: a site lives, gets updated and needs watching. A build budget with no evolution budget produces a site that degrades within twelve months.',
    ],
    notFor: 'If your business runs entirely on referral and you are already turning clients away, a new site will not change your revenue — at best it will protect your image. The useful question is not “do I need a site” but “which existing demand am I failing to capture”.',
    withMeridian: 'We prototype a site with fluid motion and SEO built in, connected to your tools — not a generic shop window disconnected from everything else.',
    faq: [
      { q: 'Website or e-commerce — where to start?', a: 'With whatever serves your objective: presence and contacts (website) or direct selling (e-commerce). You can prototype one then extend to the other — the reverse is more expensive.' },
      { q: 'Will a new site help me be found on Google?', a: 'Yes if SEO is built in from the design stage — structure, content, performance. A site rebuilt without structural work can even lose ground, by breaking URLs that were already indexed.' },
      { q: 'How long does a site take?', a: 'A few weeks for a website prototyped with you; longer for e-commerce, depending on catalogue and connections. What stretches timelines is almost always content production, not development.' },
      { q: 'Should we start from an existing CMS or build bespoke?', a: 'A standard CMS suits a standard need, and is often the right call. Bespoke becomes justified when the site must integrate with your business tools, or when performance and journey are commercial arguments.' },
      { q: 'How do I know if my current site is slow?', a: 'By measuring rather than sensing: Google’s Core Web Vitals give three numbers, including the time to display the main content. A diagnosis takes minutes and costs nothing.' },
      { q: 'Who writes the content?', a: 'You hold the material, we shape it. A site whose copy is written by a supplier with no access to the trade is recognisable from the first paragraph — and prospects see it too.' },
    ],
    glossary: [
      { term: 'Core Web Vitals', def: 'Three of Google’s measured indicators of real page experience: how fast the main content appears, visual stability, responsiveness to clicks.' },
      { term: 'Headless', def: 'An architecture where the site’s display is separated from content management. It lets you change one without rebuilding the other, and display very fast.' },
      { term: 'Conversion rate', def: 'The share of visitors who complete the intended action: order, quote request, getting in touch.' },
      { term: 'Canonical tag', def: 'The instruction that designates a page’s reference address. Set wrongly, it prevents indexing — one of the most expensive technical mistakes there is.' },
    ],
    related: ['seo-geo', 'pim', 'pos'],
  },
  {
    slug: 'seo-geo',
    need: 'Acquisition',
    angle: 'Revenue',
    name: 'Acquisition — SEO & GEO',
    short: 'Be found on Google and by AI.',
    meta: {
      title: 'SEO & GEO: being found on Google and by AI — Meridian',
      description: 'SEO makes you visible on Google; GEO makes you citable by AI engines (ChatGPT, Gemini, Perplexity). Definition, what the research actually shows, mistakes to avoid — and how we build it into your site.',
    },
    lead: 'Be found when your customers search — on Google (SEO) and inside AI answers (GEO).',
    whatIs: 'SEO (search engine optimisation) improves your visibility on search engines. GEO (Generative Engine Optimization) makes generative AI engines — ChatGPT, Gemini, Perplexity — cite your company in their answers. Two sides of the same problem: being found.',
    whatIsMore: [
      'The most useful thing to understand, and the least known: AI assistants do not cite sources from their training memory. When answering a current or commercial question, they run a search and read pages — through conventional search indexes. The direct consequence: a page search engines have not indexed has no chance of being cited by an AI. GEO therefore does not replace SEO, it depends on it.',
      'The term comes from research by Princeton, Georgia Tech and the Allen Institute, presented at the ACM KDD conference in 2024. A literature review published in July 2026 examined forty-five studies on the subject: it retains only three factors at moderate-to-strong evidence level — relevance between question and content, the position of the useful passage within the page, and the presence of extractable evidence such as verifiable figures.',
      'Everything else — the percentage gains announced, the word-count thresholds, declaration files such as llms.txt — is for now commercial narrative rather than established data. We would rather say so.',
    ],
    signs: [
      'You do not appear on your own company name.',
      'Competitors come up first on the queries that describe your trade.',
      'You have pages published for months that Google has never indexed.',
      'When an AI assistant is asked about your field, names other than yours come up.',
      'Your traffic comes almost entirely from referral or paid advertising.',
    ],
    whatFor: 'To capture demand that already exists: people looking for a tool, a service, an answer. Done well, it is the most profitable acquisition channel over time.',
    whatForMore: [
      'What makes SEO distinctive is its economics: the effort is up front, the return accumulates. A page that ranks keeps working at no marginal cost, where advertising stops the day the budget stops. That is also what makes it slow to start — and unsuited to a need for immediate results.',
      'On GEO, keep in mind what the Pew Research Center measures: in the presence of an AI-generated summary, users click a conventional result on 8% of visits, against 15% without a summary, and click a source cited in the summary on 1%. In other words, being cited by an AI today brings plenty of brand exposure and very little traffic. It is a visibility objective, not an acquisition channel — and any claim to the contrary deserves suspicion.',
    ],
    deltas: [
      { term: 'Paid search', delta: 'Paid search buys an immediate position that disappears with the budget. SEO builds a position that stays. The two combine well: advertising to validate demand, SEO to capture it durably.' },
      { term: 'Social media', delta: 'Social media creates demand among people who were not looking for anything. SEO captures demand already expressed. The first is attention work, the second is answer work.' },
      { term: 'GEO', delta: 'GEO does not oppose or replace SEO. It presupposes being indexed, then adds work on form: direct answers, self-contained passages, verifiable figures — what a model can extract without rewriting.' },
    ],
    steps: [
      'We check indexing first: a page Google does not index will never rank, and will never be cited by an AI.',
      'We identify the questions and needs your customers actually type — not the ones we assume.',
      'We produce clear pages that answer them directly, from the first paragraph.',
      'We structure the site for engines and for AI: structured data, FAQ, extractable passages, sourced figures.',
    ],
    mistakes: [
      { h: 'Working on content before checking indexing', p: 'This is the most expensive mistake, and the most common. A wrong canonical tag, a forgotten noindex, an inconsistent sitemap: the page can be excellent and still be invisible. Technical diagnosis comes before writing.' },
      { h: 'Targeting highly competitive definition queries', p: 'Ranking for “what is an ERP” means taking on established vendors, on a query with no purchase intent. Narrower queries, where the person searching has a problem and a budget, are worth more.' },
      { h: 'Confusing volume with value', p: 'A thousand visits from curious readers are worth less than ten from qualified prospects. The right metric is not traffic but the number of inbound contacts it produces.' },
      { h: 'Expecting from GEO what it does not deliver', p: 'The available data show real brand exposure and marginal traffic. Building an acquisition plan on AI citation means funding visibility while believing you are buying leads.' },
    ],
    budget: [
      'SEO splits into three very different items: technical correction, one-off and often the most profitable; content production, recurring; and building standing — mentions, citations, presence — which is the slowest and least controllable.',
      'For a recent site, the order of priority is almost always the same: technical first, because an indexing error cancels everything else; then the company’s identity and credibility, because a young domain with no external signal does not rank whatever the content; content third.',
      'The cost factor you cannot buy is time. A few weeks to a few months depending on competition, and a recent domain starts more slowly than an established one. Any offer promising fast ranking on a competitive query is promising something it does not control.',
    ],
    notFor: 'If your customers do not search for your service on an engine — because it sells through tenders, networks or referral — SEO is not your lever. Better to invest where the decision is actually made.',
    withMeridian: 'We build SEO into the site from the design stage, and add context pages designed for GEO — so that searches about your needs land on you.',
    faq: [
      { q: 'Is GEO different from SEO?', a: 'Complementary, and dependent: SEO targets ranking on Google, GEO targets citation by AI. Since AI assistants go through search indexes to cite sources, a page that is not indexed cannot be cited. GEO therefore presupposes SEO.' },
      { q: 'How long before SEO results?', a: 'A few weeks to a few months, depending on competition and how old the domain is. A technical fix can show an effect within days; winning a position on a contested query is measured in months.' },
      { q: 'Should we publish an llms.txt file to be cited by AI?', a: 'Nothing currently supports that claim: its effectiveness is not demonstrated. The cost is low, the effect uncertain. We do not present it as a lever.' },
      { q: 'How do I know whether my pages are indexed?', a: 'Through Google Search Console, which is free: its indexing report lists known pages, excluded ones, and the reason for each exclusion. It is the first tool to open, before any content decision.' },
      { q: 'Is AI-written content penalised?', a: 'What engines penalise is content with no added value, whatever its origin. A generated page that brings nothing does not rank; a page assisted by AI but fed by real experience ranks like any other.' },
      { q: 'How many pages should we publish?', a: 'No threshold holds up. A few pages that answer a question precisely beat fifty generic ones — which dilute the site and consume the engines’ crawl budget.' },
    ],
    glossary: [
      { term: 'Indexing', def: 'The fact that an engine has recorded a page and is willing to return it as a result. Without indexing, neither ranking nor citation is possible.' },
      { term: 'Search Console', def: 'Google’s free tool showing how it sees your site: indexed pages, exclusions and their reasons, the queries people arrive on.' },
      { term: 'Structured data', def: 'Machine-readable markup that explicitly describes a page’s content — organisation, questions and answers, product. It helps engines and AI extract the right information.' },
      { term: 'Extractable passage', def: 'A self-contained paragraph that answers a question without depending on the rest of the page. It is the form models reuse most readily.' },
    ],
    related: ['site-vitrine-ecommerce', 'data-bi', 'crm-fidelisation'],
  },
  {
    slug: 'crm-fidelisation',
    need: 'Retention',
    angle: 'Revenue',
    name: 'CRM & loyalty',
    short: 'Convert, then retain.',
    meta: {
      title: 'CRM & loyalty: what they are, what they’re for — Meridian',
      description: 'A CRM centralises your customer relationships so you convert and retain. Definition, how it differs from an ERP, mistakes to avoid, budget — and how to prototype a bespoke CRM and loyalty programme.',
    },
    lead: 'Centralise your customer relationships to convert more, then retain — where the margin is won.',
    whatIs: 'A CRM (Customer Relationship Management) brings together the history and follow-up of your customers and prospects: contacts, exchanges, opportunities, follow-ups. A loyalty programme adds mechanics to bring customers back.',
    whatIsMore: [
      'A CRM exists first to answer three questions a human memory cannot hold beyond a certain volume: where does this deal stand, who does what next, and what have we already said to each other. Everything else — segmentation, scoring, automation — comes after, and is worthless if those three answers are not reliable.',
      'Loyalty is a separate subject, often confused with CRM because it draws on the same data. The CRM manages the relationship; the loyalty programme organises recurrence — through benefits, status, follow-ups triggered by purchasing behaviour.',
      'A CRM is judged on one criterion: do the salespeople fill it in? A CRM that is up to date and sparse beats one that is rich and abandoned. That has a design consequence: every mandatory field added lowers the completion rate.',
    ],
    signs: [
      'A prospect follows up and you cannot find the history of the exchange.',
      'Customer information lives in everyone’s personal mailbox.',
      'Someone leaving the sales team takes part of the portfolio with them.',
      'You cannot say how many deals are in progress, or at what stage.',
      'Your most loyal customers are treated no differently from new ones.',
    ],
    whatFor: 'To lose no opportunity and bring customers back: a prospect followed up at the right moment, a customer rewarded, a relationship maintained. Retaining costs less than acquiring.',
    whatForMore: [
      'The most measurable gain is on deals lost by oversight — the ones nobody followed up. It is a silent leak that nobody owns, and it disappears as soon as a follow-up is triggered automatically rather than remembered.',
      'The second gain is customer knowledge. Once history is centralised, patterns appear: which customers come back, at what rhythm, after what kind of contact. That is the raw material for a loyalty programme that amounts to more than a blanket discount.',
    ],
    deltas: [
      { term: 'An ERP', delta: 'The ERP manages the transaction — order, invoice, delivery. The CRM manages the relationship before and after: exchanges, opportunities, follow-up. An ERP knows what the customer bought; a CRM knows why, and what they are considering next.' },
      { term: 'An emailing tool', delta: 'Emailing sends messages to lists. A CRM tracks individual relationships. The two connect: the CRM decides who should receive what, emailing executes it.' },
      { term: 'A tracking spreadsheet', delta: 'A shared spreadsheet works up to two or three salespeople and a few dozen deals. It breaks down on exchange history, dated follow-ups and access rights.' },
    ],
    steps: [
      'We model your real customer journey, from lead to loyalty — with the stages that genuinely exist.',
      'We cut data entry to the minimum: what is not used to decide should not be asked for.',
      'We tool follow-ups and tracking at the right moment, by trigger rather than manual reminder.',
      'We connect the CRM to your sales and your site so everything stays current without re-keying.',
    ],
    mistakes: [
      { h: 'Asking for too much information at entry', p: 'Every mandatory field added lowers the completion rate. A CRM designed to produce complete reports ends up empty — and produces no reports at all.' },
      { h: 'Installing the CRM without deciding who owns what', p: 'A CRM does not create a sales process, it reveals the absence of one. If the stages of a deal are not defined outside the tool, the tool will not invent them.' },
      { h: 'Launching loyalty before purchase data is reliable', p: 'Loyalty mechanics plugged into incomplete history reward the wrong customers and overlook the right ones. The effect on your image is worse than having no programme.' },
      { h: 'Reducing loyalty to a discount', p: 'A permanent discount becomes a price. The mechanics that last rest on access, service or recognition — not on eroding margin.' },
    ],
    budget: [
      'The cost of a CRM is rarely in the tool: it is in adoption. A successful rollout needs sales coaching time, and migration of what exists — if only the contacts scattered across mailboxes.',
      'The variables that weigh: number of users, how much automation you want, and above all how many connections to other tools. Each connection added is both the largest cost item and the main source of value.',
      'The most effective lever is to start with a single measurable use — chasing unanswered quotes, for instance. A visible gain within weeks buys the buy-in the rest of the project needs.',
    ],
    notFor: 'If you have a dozen customers you know personally and no prospecting under way, a CRM adds data entry and brings nothing. The need comes from the number of simultaneous deals and the number of people who must follow them.',
    withMeridian: 'We prototype a CRM shaped to your process — not a generic machine — with the automations and the loyalty programme that matter to you.',
    faq: [
      { q: 'Is a CRM useful for a small organisation?', a: 'Yes, as soon as you track more customers than memory allows, or as soon as several of you follow the same deals. Below that, it adds data entry with nothing in return.' },
      { q: 'Can the CRM be connected to my site and my sales?', a: 'Yes, and that is the point: one set of customer data, shared between site, sales and follow-ups. Without that connection, the CRM becomes a second place to keep up to date by hand.' },
      { q: 'What is the difference between a CRM and an ERP?', a: 'The ERP manages the transaction — order, invoice, stock. The CRM manages the relationship — exchanges, opportunities, follow-ups. Both share the customer but answer different questions.' },
      { q: 'Off-the-shelf CRM or bespoke?', a: 'An off-the-shelf CRM suits a standard sales cycle, and is often the right call. Bespoke becomes justified when your process is your differentiation, or when the CRM must integrate closely with your business tools.' },
      { q: 'How do you get a sales team to adopt a CRM?', a: 'By saving them time in the first week. A CRM that demands data entry before rendering a service gets rejected — rightly so. Start with what wins them a follow-up, not with management reporting.' },
      { q: 'Is a loyalty programme worthwhile for a smaller company?', a: 'Provided it targets recurrence rather than discounting, and rests on reliable purchase data. Badly calibrated mechanics cost margin without changing behaviour.' },
    ],
    glossary: [
      { term: 'Pipeline', def: 'All deals in progress, grouped by stage. It is the view that lets you anticipate upcoming revenue.' },
      { term: 'Lead', def: 'An inbound contact not yet qualified. It becomes an opportunity once a need and a budget are identified.' },
      { term: 'Sales cycle', def: 'The average time between first contact and signature. It determines how many deals you must keep warm at once.' },
      { term: 'Retention', def: 'The share of customers who come back over a given period. It is the metric a loyalty programme targets.' },
    ],
    related: ['erp', 'data-bi', 'seo-geo'],
  },
  {
    slug: 'pos',
    need: 'Checkout',
    angle: 'Revenue',
    name: 'POS — Point of sale',
    short: 'Take payment, in store and online.',
    meta: {
      title: 'POS (point of sale): what it is, what it’s for — Meridian',
      description: 'A POS takes payment and links store and online. Definition, how it differs from e-commerce, mistakes to avoid — and how to prototype a till connected to your stock and your CRM.',
    },
    lead: 'Take payment simply — in store and online — and link every sale to your stock and your customers.',
    whatIs: 'A POS (point of sale) is the system that records and takes payment for your sales: till, payments, receipts. A modern one links physical and online selling, and updates stock and customer records with every transaction.',
    whatIsMore: [
      'A till has two jobs that have nothing to do with each other. The first is taking payment: it must be fast, reliable and keep working when the network goes down. The second is feeding information back: every sale updates stock, customer records and reporting. The first is judged in seconds, the second in data quality.',
      'That dual nature explains why generic tills so often disappoint. They take payment correctly and report badly — or the reverse. A POS that is useful to a company also selling online has to be designed as a data entry point as much as a payment terminal.',
      'The most structuring technical constraint is offline mode. A till that depends on an internet connection to take payment stops at the same time as the connection, on a Saturday afternoon.',
    ],
    signs: [
      'Store stock and website stock never match.',
      'You sell online an item that has already left the shop.',
      'A customer known in store is a stranger online, and vice versa.',
      'The day’s takings are reconstructed the next morning, by hand.',
      'A connection outage stops you taking payment.',
    ],
    whatFor: 'To sell fast and without friction, and to stop separating store and web: the same stock, the same customers, the same data. Every transaction feeds your reporting.',
    whatForMore: [
      'The immediate benefit is commercial: accurate stock lets you sell what you have, and promise what you can deliver. Sales missed because stock was wrong and cancellations because stock did not exist both cost money, and the second also costs reputation.',
      'The underlying benefit is unifying the customer. Once an in-store sale feeds the same record as an online one, customer knowledge becomes usable — and a loyalty programme becomes possible, which it is not with two separate databases.',
    ],
    deltas: [
      { term: 'An e-commerce', delta: 'E-commerce sells online, the POS takes payment — usually in store. Linked, they share stock and customers: that is what omnichannel means. Separate, they produce two truths about the same stock.' },
      { term: 'A card terminal', delta: 'The terminal executes the card payment. The POS manages the sale as a whole: basket, discounts, receipt, stock, customer. The terminal is a component of the POS, not a substitute.' },
      { term: 'An ERP', delta: 'The ERP orchestrates the back office: purchasing, stock, finance. The POS is the point of contact with the customer. The POS feeds the ERP in real time; without that link, the ERP’s stock is wrong from the first sale.' },
    ],
    steps: [
      'We map your real checkout journey: store, web, mobile, events.',
      'We prototype a simple, fast till, fitted to your products and your discount rules.',
      'We handle offline mode from the start: taking payment must remain possible without a network.',
      'We connect it to your stock, your CRM and your dashboards, in both directions.',
    ],
    mistakes: [
      { h: 'Neglecting offline mode', p: 'A till that does not work without a connection stops selling at the worst possible moment. Deferred synchronisation must be designed in, not added after the first incident.' },
      { h: 'Multiplying screens at the moment of payment', p: 'Every question asked at checkout lengthens the queue. Information you can collect another way — email, loyalty — must not block the transaction.' },
      { h: 'Letting stock synchronise once a day', p: 'With stock synchronised overnight, the website spends all day selling items that have already gone. Synchronisation must be continuous, or the site must display a safety margin.' },
      { h: 'Forgetting the stock count', p: 'A POS plugged into a wrong theoretical stock produces wrong data faster. The physical stock count is part of the project.' },
    ],
    budget: [
      'POS cost splits between software, hardware — terminals, printers, scanners — and connections. Hardware is the most visible item and rarely the heaviest; the connections to stock and CRM are the decisive one.',
      'The variables that count: number of points of sale, complexity of discount and pricing rules, and how strict your real-time stock requirement is. Transaction volume changes implementation cost very little.',
      'The usual lever is to start on one point of sale, stabilise offline operation and synchronisation, then roll out. A simultaneous rollout multiplies incidents by the number of stores.',
    ],
    notFor: 'If you only sell online, a POS has no purpose. And if you have a single store with no online selling, a well-chosen off-the-shelf till is usually enough: bespoke becomes justified when several channels must be reconciled, or when pricing rules are unusual.',
    withMeridian: 'We prototype a POS shaped to how you actually sell — connected to your stock and your CRM — rather than a generic till disconnected from the rest of your tools.',
    faq: [
      { q: 'Are POS and e-commerce the same thing?', a: 'No: e-commerce sells online, the POS takes payment, usually in store. Linked, they share stock and customers — that is omnichannel. Separate, they show two different stock figures for the same items.' },
      { q: 'Can a POS connect to my stock and my CRM?', a: 'Yes, and that is the whole point: every sale updates stock and enriches the customer record, with no re-keying. That link is what distinguishes a modern POS from a cash register.' },
      { q: 'What happens if the internet goes down?', a: 'A properly designed POS keeps taking payment offline and synchronises afterwards. If it does not, the till stops with the connection — that is the first thing to check on an off-the-shelf solution.' },
      { q: 'Can we keep our current till and just connect it?', a: 'Sometimes, if it exposes an interface for exchange. Many older tills do not, or only through file export — which rules out real time and limits omnichannel.' },
      { q: 'Do we need a POS to sell at markets or trade shows?', a: 'A mobile POS with offline mode makes full sense there: those sales feed the same stock and the same customer records as the store, instead of living in a notebook.' },
      { q: 'How do you reconcile store and online stock?', a: 'By designating a single source of truth — usually the ERP or the POS — and making everything else a consumer of that data. Two systems that correct each other always diverge.' },
    ],
    glossary: [
      { term: 'Omnichannel', def: 'Sharing stock, customers and history across every sales channel, physical and online, so the customer experiences a single relationship.' },
      { term: 'Offline mode', def: 'A till’s ability to take payment without a connection, then synchronise once the network returns.' },
      { term: 'Click and collect', def: 'Order online, collect in store. It presupposes shared, reliable stock between the two channels.' },
      { term: 'Average basket', def: 'The average value of a transaction. Tracked by channel, it reveals where margin is actually made.' },
    ],
    related: ['site-vitrine-ecommerce', 'erp', 'crm-fidelisation'],
  },
  {
    slug: 'erp',
    need: 'Operations',
    angle: 'Productivity',
    name: 'ERP — Integrated management',
    short: 'The operational core, orchestrated.',
    meta: {
      title: 'ERP: what it is, what it’s for — Meridian',
      description: 'An ERP orchestrates the operational core of the company: sales, purchasing, stock, finance, production. Definition, mistakes to avoid, budget — and how to prototype it to your processes, brick by brick.',
    },
    lead: 'The operational core of your company — sales, purchasing, stock, finance — orchestrated around your real processes.',
    whatIs: 'An ERP (Enterprise Resource Planning) brings the company’s key functions into one system: sales, purchasing, stock, finance, production. Data entered once flows everywhere.',
    whatIsMore: [
      'The founding idea of the ERP is single-instance data. An order entered once commits stock, triggers purchasing, prepares the invoice and feeds accounting, without any information being retyped. All the benefit comes from that, and so does all the difficulty: for data to flow, departments must accept a common definition.',
      'That is why an ERP project is first an organisational project. The software merely sets in stone decisions that, more often than not, had never been made explicitly: who creates an item, when an order is firm, who may change a price.',
      'Market ERPs already carry those decisions, made for someone else. Adopting them means adopting a vendor’s processes; departing from them means paying for configuration. That trade-off is the real decision in an ERP project, well before the choice of product.',
    ],
    signs: [
      'The same information is entered into two different tools by two people.',
      'Theoretical stock and actual stock diverge permanently.',
      'Invoicing means gathering information from three places.',
      'Nobody can say where an order stands without calling someone.',
      'Every month-end takes several days of manual reconciliation.',
    ],
    whatFor: 'To hold everything together: the ERP is the frame that links operations, removes double entry and gives a single view of the business. Fewer errors, more time.',
    whatForMore: [
      'The measurable gain is the disappearance of double entry, and with it the discrepancies it produces. These are expensive errors because they surface late: at invoicing, at stock count, or at year end.',
      'The structural gain is traceability. Being able to answer “where does this order stand” in seconds changes the customer relationship, and lets you commit to lead times you used to avoid promising.',
      'It is worth being clear about the cost, though: an ERP constrains. It forbids shortcuts that used to save one person time, in favour of collective reliability. That transfer is the heart of the resistance to change on this kind of project.',
    ],
    deltas: [
      { term: 'A CRM', delta: 'The CRM manages the relationship before the sale — exchanges, opportunities, follow-ups. The ERP manages execution after: order, stock, invoice, accounting. The two connect around the customer.' },
      { term: 'BI', delta: 'The ERP produces data as operations happen. BI reads and cross-references it to support decisions. An ERP without BI stays hard to read; BI without reliable operational data has nothing to show.' },
      { term: 'Accounting software', delta: 'Accounting records entries. The ERP manages the operations that produce them. Many smaller companies start from an accounting tool and extend it: that works until stock or production becomes the issue.' },
    ],
    steps: [
      'We start from your real processes, not a vendor’s — and note explicitly which ones will have to change.',
      'We prototype first the modules that hurt most, measured in time lost.',
      'We make data flow between those modules before adding others.',
      'We connect them progressively, with no risky big bang, keeping a way back at every step.',
    ],
    mistakes: [
      { h: 'Launching one global, single-shot project', p: 'The ERP “big bang” is the configuration in which projects fail most often: everything changes at once, and the slightest problem becomes blocking for the whole company. Brick by brick, a failure stays local.' },
      { h: 'Configuring the tool to preserve every existing habit', p: 'Reproducing every historical exception produces an ERP that cannot be maintained or evolved. Some habits must change; the task is choosing which, not avoiding all of them.' },
      { h: 'Underestimating data migration', p: 'Duplicate items, obsolete customers, wrong stock: an ERP started on dirty data amplifies the disorder instead of correcting it. Migration is a project in its own right, to be costed as such.' },
      { h: 'Treating training as an adjustable budget line', p: 'An ERP nobody masters gets worked around, and the workarounds recreate exactly the silos you set out to remove. It is the first saving people make, and the most expensive.' },
    ],
    budget: [
      'On an ERP, the licence is almost always the smallest visible part of total cost. The dominant items are configuration, data migration, integration with the tools you keep, and training.',
      'The variables that weigh: how many modules you activate, how far your processes diverge from the tool’s, and how many systems you keep and therefore have to connect. The number of users mainly affects the licence, rarely the implementation.',
      'The decisive lever is scoping. Tool one perimeter, measure adoption, then extend: longer on paper and much shorter in practice, because you do not start over. A traditional ERP is measured in months or years; a useful brick is measured in weeks.',
    ],
    notFor: 'If your operations fit in two tools that talk to each other properly, an ERP is a disproportionate answer. The need comes from the number of re-keyings and the number of systems that each claim to hold the same information — not from company size.',
    withMeridian: 'Market ERPs impose their processes and cost a lot. We prototype yours in useful bricks, adopted step by step — without the multi-year project.',
    faq: [
      { q: 'ERP or separate tools?', a: 'Separate tools create silos and re-keying. An ERP unites operations around shared data — but you can get there brick by brick, without replacing everything at once.' },
      { q: 'Is an ERP only for large companies?', a: 'No. Prototyping makes bespoke accessible to smaller companies, without the budget or timeline of a traditional ERP. The criterion is not size but how much double entry you put up with.' },
      { q: 'How long to put an ERP into service?', a: 'A vendor ERP is measured in months, sometimes years. A useful brick prototyped on a precise perimeter is measured in weeks. That is exactly why we do not deliver it in one block.' },
      { q: 'Do we have to replace our accounting?', a: 'Not necessarily, and usually not first. Accounting is the area best served by existing tools; an ERP is better started where disorder costs most — generally stock or production.' },
      { q: 'What if our processes are not written down?', a: 'That is the most common case, and the ERP will reveal them anyway. Better to map them at the start of the project — often the step that produces the most value, before a single line of code.' },
      { q: 'Can we go back if it does not work?', a: 'Brick by brick, yes: each perimeter stays reversible as long as the old system is not switched off. That is the main argument against a global rollout, where going back is in practice impossible.' },
    ],
    glossary: [
      { term: 'Off-the-shelf software', def: 'Standard software sold to be configured, as opposed to bespoke development. A market ERP is off-the-shelf software.' },
      { term: 'Module', def: 'A functional perimeter of the ERP: sales, purchasing, stock, production, finance. They are rarely all activated at once.' },
      { term: 'Data migration', def: 'Transferring existing information into the new system, with the cleaning that requires. Systematically underestimated.' },
      { term: 'Big bang', def: 'Switching the whole company onto the new ERP on a single date. Fast on paper, it is the riskiest configuration.' },
    ],
    related: ['data-bi', 'plm', 'crm-fidelisation'],
  },
];

const tools = { fr, en };

export function getTools(locale: Locale): Tool[] {
  return tools[locale];
}

export function getTool(locale: Locale, slug: string): Tool | undefined {
  return tools[locale].find((t) => t.slug === slug);
}

/* ---- Rattachement aux cinq piliers (« Ce que nous automatisons ») ----
   Chaque domaine se range sur une forme, ordonnée par ampleur. La liste
   des piliers vit dans content.ts ; ici on ne garde que le rattachement. */
export interface PillarRef { slug: string; order: number; name: string; note: string }

interface PillarDef { slug: string; order: number; fr: string; en: string; noteFr: string; noteEn: string }
const PILLARS: PillarDef[] = [
  { slug: 'automatisation', order: 1, fr: 'Automatisation', en: 'Automation', noteFr: 'le temps repris à la machine', noteEn: 'time won back' },
  { slug: 'middleware', order: 2, fr: 'Middleware', en: 'Middleware', noteFr: 'vos logiciels métier, sur-mesure', noteEn: 'bespoke line-of-business software' },
  { slug: 'e-commerce', order: 3, fr: 'E-commerce', en: 'E-commerce', noteFr: 'ce qui fait vendre en ligne', noteEn: 'what drives online sales' },
];

const DEFAULT_PILLAR = 'middleware';
const PILLAR_BY_TOOL: Record<string, string> = {
  'data-bi': 'middleware',
  'pim': 'middleware',
  'plm': 'middleware',
  'crm-fidelisation': 'middleware',
  'erp': 'middleware',
  'site-vitrine-ecommerce': 'e-commerce',
  'seo-geo': 'e-commerce',
  'pos': 'e-commerce',
};

function refOf(locale: Locale, def: PillarDef): PillarRef {
  return { slug: def.slug, order: def.order, name: locale === 'fr' ? def.fr : def.en, note: locale === 'fr' ? def.noteFr : def.noteEn };
}

export function pillarOf(locale: Locale, slug: string): PillarRef {
  const def = PILLARS.find((p) => p.slug === (PILLAR_BY_TOOL[slug] ?? DEFAULT_PILLAR))!;
  return refOf(locale, def);
}

/** Les domaines groupés par pilier, dans l'ordre des piliers (pour la page Réalisations). */
export function toolsByPillar(locale: Locale): { pillar: PillarRef; tools: Tool[] }[] {
  return PILLARS
    .map((def) => ({
      pillar: refOf(locale, def),
      tools: getTools(locale).filter((t) => (PILLAR_BY_TOOL[t.slug] ?? DEFAULT_PILLAR) === def.slug),
    }))
    .filter((g) => g.tools.length > 0)
    .sort((a, b) => a.pillar.order - b.pillar.order);
}
