// Source unique de tout le contenu éditorial (textes + chiffres) du site.
// Un chiffre, un titre, une bio : une seule place où le modifier.

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  initials: string;
}

export interface PillarItem {
  title: string;
  text: string;
}

// Page d'accueil entièrement alignée sur la fiche projet officielle de l'association
// (PDF « Collège de la Neurodiversité », 2 pages). Rien ici qui ne vienne de ce document.
export const hero = {
  topEyebrow: '10–18 ans · TND : TSA, TDAH, DYS, etc.',
  title: 'Collège de la Neurodiversité',
  lead: 'Permettre à chaque jeune d’accéder aux apprentissages, de développer ses propres talents, et de trouver sa place en société.',
  ctaPrimary: { href: '/soutenir', label: 'Soutenir le projet' },
  ctaSecondary: { href: '#projet', label: 'Découvrir le projet' },
  intentionText: 'Projet d’établissement éducatif et inclusif pour adolescents adapté aux profils neuro-atypiques. Ouverture pour septembre 2027.'
};

// « Notre ambition / Nous bâtissons » : reprise intégrale de la fiche projet (page 1).
export const ambition = {
  eyebrow: 'Nous bâtissons',
  title: 'Notre ambition',
  items: [
    'Une société qui accueille la neurodiversité.',
    'La neurodivergence non plus perçue comme déficit, mais comme un fonctionnement différent.',
    'Plus d’adaptations pour moins de situations de handicap.',
    'La valorisation des différences avec leurs compétences spécifiques.',
    'L’intelligence collective pour relever les défis de demain.'
  ]
};

export const besoin = {
  eyebrow: 'Pour les jeunes de 10 à 18 ans',
  title: 'Pour les jeunes de 10 à 18 ans',
  paragraphs: [
    'Dans un contexte de déscolarisation qui s’intensifie au collège, liée aux difficultés, au manque d’aménagements et aux enjeux identitaires exposant la santé mentale, l’Association du Collège de la Neurodiversité souhaite :'
  ],
  bullets: [
    'Donner accès et du sens aux apprentissages,',
    'Donner les clés pour se connaître, se comprendre soi et les autres,',
    'Permettre de construire son projet, se valoriser et participer à la vie en société.'
  ]
};

export const projet = {
  eyebrow: 'Ce que le projet met en œuvre',
  title: 'Un modèle innovant pour répondre aux besoins',
  pillars: [
    { title: 'Une réponse éducative concrète', text: 'Effectifs réduits et apprentissages adaptés.' },
    { title: 'Une approche par projets', text: 'Expérimenter et fabriquer, coopérer ensemble, donner du sens.' },
    { title: 'Vers l’autonomie', text: 'Connaissance de soi, compétences psychosociales, orientation et projet pro.' },
    { title: 'Une logique d’inclusion réciproque', text: 'Vie collective partagée et interactions sociales.' }
  ] satisfies PillarItem[]
};

export const porteurs = {
  eyebrow: 'Gouvernance',
  title: 'Gouvernance de l’association',
  // Source : brief « Contenu site Internet », page association, partie 3.
  board: [
    { name: 'Pascaline Ravera', role: 'Présidente',
      bio: '40 ans, mère d’un garçon de 10 ans au profil autistique. Responsable projets synergie dans la distribution. Souhaite prévenir la santé mentale des jeunes aux profils neuro-atypiques.',
      initials: 'PR' },
    { name: 'Frédéric Bonniot', role: 'Co-président',
      bio: '50 ans, profil autistique et parcours atypique. Data scientist autodidacte, jury en ingénierie d’IA et coach auprès d’adultes TSA. Souhaite offrir aux jeunes une scolarité digne et sécurisante.',
      initials: 'FB' },
    { name: 'Maëlys Garcia', role: 'Trésorière',
      bio: '29 ans, profil autistique au parcours atypique. Psychologie, sciences pédagogiques, logistique, gestion de projet et recherche de financements ; missions humanitaires et associatives pour l’éducation, l’égalité des chances et l’aide aux jeunes en situation de pauvreté.',
      initials: 'MG' },
    { name: 'Louis Glandières', role: 'Membre du conseil d’administration',
      bio: '26 ans, profil autistique et scientifique. Développeur Python et créateur de jeux numériques, passionné de science ; a étudié à l’École Supérieure Pour les Talents Atypiques (ESPTA, Cergy).',
      initials: 'LG' }
  ] satisfies TeamMember[],
  benefactorsIntro: 'Notre association a la chance de pouvoir aussi compter sur ses membres bienfaiteurs pour concrétiser les projets :',
  benefactors: [
    { name: 'Inès Ramdani', role: 'Soutien et participation à la co-construction du projet du collège, créatrice du logo de l’association',
      bio: '30 ans, profil autistique et artistique. Talent prononcé pour le dessin, elle réalise et expose de nombreuses œuvres destinées au grand public. Créatrice du logo de l’association.',
      initials: 'IR' },
    { name: 'Lionel Monbrison', role: 'Soutien et participation à la co-construction du projet du collège, référent pédagogique', initials: 'LM' },
    { name: 'Gaby', role: 'Créateur du site Internet', initials: 'G' }
  ] satisfies TeamMember[],
  note: 'Les bandeaux colorés sont des emplacements photo, à remplacer par les portraits.'
};

// ————————————————————————————————————————————————————————————————
// Pages internes (arborescence du site). Une page = une entrée du menu.
// Un bloc avec `body` est rédigé ; un bloc `todo` affiche un encadré
// « à compléter » ; `custom` insère un module existant (équipe, tableau…).
// ————————————————————————————————————————————————————————————————

export interface PageBlock {
  id: string;
  title: string;
  /** Paragraphes rédigés. */
  body?: string[];
  /** Liens d’action affichés sous le texte. */
  links?: { href: string; label: string }[];
  /** Module riche à insérer : 'team' | 'pillars' | 'budget' | 'impact' | 'map' | 'contact'. */
  custom?: 'team' | 'pillars' | 'budget' | 'impact' | 'map' | 'contact';
  /** Note personnalisée pour l’encadré « à compléter ». */
  todo?: string;
  /** Mention de sources, affichée en petit sous le contenu du bloc. */
  sources?: string;
  /** Citation affichée en tête de bloc. */
  quote?: { text: string; author: string };
  /** Image affichée avant le texte (src = version pleine taille, srcSmall = 800px). */
  figure?: { src: string; srcSmall?: string; width: number; height: number; alt: string };
  /** Liste à puces (après `body`), précédée d'une phrase d'introduction optionnelle. */
  listIntro?: string;
  list?: string[];
  /** 'cards' : la liste s'affiche en grille de cartes colorées numérotées. */
  listStyle?: 'cards';
  /** 'cards' : les sous-parties s'affichent en grille de cartes (2 colonnes). */
  subsectionsLayout?: 'cards';
  /** 'callout' : le texte du bloc est posé dans un encadré coloré. */
  variant?: 'callout';
  /** Sous-parties (titre de niveau 3), affichées après le reste du bloc. */
  subsections?: PageSubsection[];
}

// Dans tous les textes de page : **gras** et *italique* (voir lib/rich.ts).
export interface PageSubsection {
  title: string;
  /** Pictogramme décoratif (masqué aux lecteurs d'écran). */
  icon?: string;
  body?: string[];
  list?: string[];
  listStyle?: 'cards';
  /** 'note' : encadré teinté (ex. définition). */
  variant?: 'note';
  /** Pleine largeur dans une grille de cartes. */
  wide?: boolean;
  custom?: 'schedule';
}

export interface SitePage {
  navLabel: string;
  route: string;
  title: string;
  eyebrow: string;
  intro?: string;
  blocks: PageBlock[];
}

export const associationPage: SitePage = {
  navLabel: 'L’association',
  route: '/association',
  title: 'L’association',
  eyebrow: 'Notre structure',
  // Source : brief « Contenu site Internet », page association (parties 1 à 3 + rapports d’activité).
  blocks: [
    {
      id: 'qui-sommes-nous',
      title: 'Qui sommes-nous ?',
      quote: {
        text: 'Pour que les personnes neurodivergentes puissent vivre de manière authentique tout en arrivant à participer à la société. Arrêter de survivre en mode camouflé et commencer à s’épanouir vraiment, en étant soi sans peur. Arrêter de cacher ses particularités (stims, façon de parler, sensibilités sensorielles, etc.) pour éviter le rejet, les jugements ou la discrimination.',
        author: 'Inès, membre de l’association'
      },
      body: [
        'Le Collège de la Neurodiversité est une association à but non lucratif régie par la loi du 1er juillet 1901 et le décret du 16 août 1901, fondée par un groupe de personnes aux profils neuro-atypiques et neurotypiques. Tous directement ou indirectement concernés, l’association veut porter une vision juste et proche de la réalité afin de proposer des solutions concrètes et respectueuses des individus.',
        'L’association a pour objet de **créer les conditions favorables à la neurodiversité dans notre société**, autrement dit d’aider les personnes aux profils neurodivergents à se faire une place dans la société et de lutter contre leur exclusion sociale, qu’elles soient ou non reconnues en situation de handicap.',
        'L’association est ouverte à toutes les personnes, quel que soit leur profil, **sans discrimination**.'
      ]
    },
    {
      id: 'philosophie-principes',
      title: 'Philosophie et principes',
      quote: {
        text: 'Il existe des mondes intérieurs si riches, si sensibles, si lumineux, qu’ils apprennent souvent à se cacher pour survivre. Si nous apprenons à mieux voir une autre manière d’être au monde, nous serons capables d’accomplir les plus belles choses.',
        author: 'Josef Schovanec, écrivain, philosophe autiste'
      },
      body: [
        'Le **Collège de la Neurodiversité** défend une société dans laquelle chaque personne, quel que soit son fonctionnement neurocognitif ou sensoriel, peut vivre de manière authentique, accéder à ses droits, développer ses talents et participer pleinement à la vie sociale.',
        'La **neurodiversité** est considérée comme une **composante de la diversité humaine**.',
        'Sans nier les situations de handicap ou les grandes difficultés rencontrées par certains, notre ambition est de **réduire les situations de handicap en développant l’approche de la neurodiversité dans la société, résultant en un environnement physique et social plus adapté**.'
      ],
      listStyle: 'cards',
      listIntro: 'Nos projets sont guidés par les grands principes suivants :',
      list: [
        '**Reconnaissance de la neurodiversité** : reconnaître la diversité des fonctionnements cognitifs, sensoriels et attentionnels.',
        '**Respect des individualités** : privilégier la valorisation des singularités plutôt que la recherche d’uniformité, adapter l’accompagnement aux besoins et aux aptitudes de chacun.',
        '**Adaptation de l’environnement** : agir sur les conditions d’aménagement de l’espace, organisationnelles, matérielles, relationnelles, etc. plutôt que de faire reposer toute l’adaptation sur la personne au profil neuro-atypique.',
        '**Inclusion réciproque** : favoriser la collaboration et les interactions entre le milieu neurotypique et neuro-atypique en co-construisant un monde ouvert et adapté à tous.',
        '**Autodétermination** : permettre à chacun de participer aux choix qui concernent ses besoins, son parcours et ses projets.',
        '**Citoyenneté** : vivre avec les autres, respecter les droits d’autrui et contribuer à la vie collective.'
      ],
      subsections: [
        {
          title: 'Définition',
          variant: 'note',
          body: [
            '*Est entendue par « neurodiversité » la variabilité naturelle du fonctionnement neurologique de l’être humain. La neurodivergence s’exprime par des différences cognitives et sensorielles significatives chez des individus s’éloignant de la moyenne de la population générale. Les troubles du neurodéveloppement en sont des exemples (comme l’autisme, les troubles de l’attention avec ou sans hyperactivité, les troubles dys, etc.). D’autres différences neurologiques peuvent également être considérées dans l’approche de la neurodiversité, telles que la trisomie 21 par exemple. Ces différences peuvent créer des situations de handicap et des inégalités des chances face à l’éducation et à l’emploi, excluant ces personnes de la société. Vivre dans la neurodiversité, c’est accepter les différences neurocognitives et sensorielles de chacun en respectant leurs besoins spécifiques et en considérant leurs qualités et leurs talents, même s’ils ne sont pas ancrés dans la conformité.*'
          ]
        }
      ]
    },
    {
      id: 'gouvernance',
      title: 'Gouvernance de l’association',
      body: [
        'Notre Conseil d’Administration réunit des femmes et des hommes engagés, aux parcours et aux expériences variés. Ensemble, ils veillent à la cohérence du projet, à une gouvernance responsable et au développement durable de l’association. Grâce à leurs expertises, ils orientent les choix stratégiques et s’assurent que notre mission se concrétise au quotidien.'
      ],
      custom: 'team'
    },
    {
      id: 'rapports-activite',
      title: 'Rapports d’activité',
      variant: 'callout',
      body: [
        'L’association fêtera sa première année en juillet 2027.',
        'L’exercice social de l’association commence le 1er septembre de chaque année et prend fin le 31 août de l’année civile suivante. Nous mettrons à disposition son premier rapport d’activité en septembre 2027.'
      ]
    }
  ]
};

export const collegePage: SitePage = {
  navLabel: 'Le collège',
  route: '/college',
  title: 'Le collège',
  eyebrow: 'Le projet éducatif',
  // Source : brief « Contenu site Internet », page collège.
  blocks: [
    {
      id: 'pour-qui',
      title: 'Pour qui ?',
      figure: {
        src: '/images/schema-modele-college.webp',
        srcSmall: '/images/schema-modele-college-800.webp',
        width: 1254,
        height: 1254,
        alt: 'Schéma « Un collège, ensemble, pour chaque jeune ». Au centre : le jeune, au cœur de notre projet. Autour de lui, trois partenaires : les parents, des partenaires au quotidien ; les enseignants, une pédagogie bienveillante ; les intervenants, des expertises complémentaires. Sur le cercle extérieur, six actions : écouter pour comprendre, comprendre pour mieux agir, adapter aux besoins de chacun, accompagner chaque jeune dans son projet, partager dans l’intelligence collective, construire ensemble un avenir serein.'
      },
      body: [
        'Au **Collège de la Neurodiversité**, nous accueillons des **jeunes de 10 à 18 ans**, qu’ils soient neuro-atypiques ou neurotypiques. **Notre pédagogie s’adapte à tous : elle respecte les rythmes, les besoins et les forces de chaque élève, notamment pour les jeunes présentant un TSA, un TDAH, des troubles dys, un haut potentiel ou d’autres particularités du neurodéveloppement.** Chacun peut y trouver un environnement bienveillant et ajusté.',
        'Notre établissement n’est pas un lieu médico-social. Nous recevons donc des jeunes capables de participer à la vie quotidienne du collège en autonomie.',
        'L’admission se construit en douceur, à travers plusieurs rencontres avec le jeune et sa famille. Elles permettent de comprendre ses besoins, de vérifier l’adhésion à notre pédagogie individualisée, à l’autonomie dans les apprentissages et au principe d’autodétermination.',
        'Une période d’immersion vient ensuite confirmer que le jeune se sent bien au collège et que nous pouvons répondre pleinement à ses besoins.'
      ]
    },
    {
      id: 'pour-quoi-faire',
      title: 'Pour quoi faire ?',
      body: [
        'Au **Collège de la Neurodiversité**, nous voulons offrir à chaque jeune un lieu où il peut **grandir, s’épanouir et découvrir sa propre manière d’apprendre**. Un lieu où l’on cultive la curiosité, la confiance, l’autonomie et la joie de construire son avenir.'
      ],
      subsections: [
        {
          title: 'Une pédagogie qui révèle les talents',
          icon: '🌟',
          listStyle: 'cards',
          list: [
            '**Acquérir le socle commun** de connaissances et de compétences, en respectant le rythme et les forces de chacun.',
            '**Redonner du sens aux apprentissages** grâce à une approche individualisée et à des projets concrets, qui permettent d’explorer, créer, expérimenter.',
            '**Développer les compétences psychosociales** : apprendre à mieux se connaître, à se réguler, à coopérer, à prendre sa place.',
            '**Encourager l’autonomie**, dans les études comme dans la vie quotidienne, pour devenir acteur de ses choix et de son parcours.',
            '**Construire pas à pas un projet d’orientation** et un projet socioprofessionnel qui ressemble vraiment au jeune, à ses envies, à ses talents.',
            '**Favoriser les rencontres et la diversité**, en permettant à des jeunes aux fonctionnements différents de travailler ensemble et de s’ouvrir à la communauté locale.'
          ]
        }
      ]
    },
    {
      id: 'comment',
      title: 'Comment ?',
      subsectionsLayout: 'cards',
      subsections: [
        {
          title: 'Une pédagogie individualisée et portée par les projets',
          icon: '🌟',
          wide: true,
          body: ['Au **Collège de la Neurodiversité**, nous croyons que chaque jeune apprend différemment — et que cette diversité est une richesse. Notre pédagogie individualisée et par projets offre un cadre où l’on explore, où l’on crée, où l’on comprend en faisant. Ici, les apprentissages prennent vie.']
        },
        {
          title: 'Des fondamentaux solides, appris autrement',
          icon: '📚',
          body: [
            'Le **socle commun** reste notre boussole pour les apprentissages essentiels : français, mathématiques, langues, sciences, histoire-géographie, EMC…',
            'Mais les chemins pour y parvenir sont adaptés aux profils, aux centres d’intérêt et au rythme de chaque jeune.'
          ]
        },
        {
          title: 'Apprendre en expérimentant',
          icon: '🔧',
          body: [
            'Dans le **fablab**, on manipule, on teste, on fabrique, on résout des problèmes.',
            'Les projets — individuels ou collectifs — permettent de donner du sens aux connaissances et de les réinvestir dans des situations concrètes. On apprend en faisant, en collaborant, en imaginant.'
          ]
        },
        {
          title: 'Grandir en tant que personne',
          icon: '🌱',
          body: [
            'Les **compétences psychosociales** sont au cœur de notre approche : mieux se connaître, comprendre ses émotions, communiquer, coopérer, gérer les situations sociales.',
            'Parce qu’apprendre, c’est aussi devenir soi.'
          ]
        },
        {
          title: 'Construire son avenir pas à pas',
          icon: '🎯',
          body: [
            'L’**orientation** se fait progressivement : découverte de métiers en lien avec les centres d’intérêt, rencontres avec des professionnels, manipulation, expériences, stages, etc.',
            'Chaque jeune construit un **projet personnalisé**, en accord avec ses envies, ses talents et ses perspectives.'
          ]
        },
        {
          title: 'L’évaluation à travers l’observation',
          icon: '🌈',
          body: ['Nous savons à quel point le sentiment d’être jugé peut bloquer. Nous observons les **progrès individuels**, les compétences acquises et l’atteinte des objectifs personnels.']
        },
        {
          title: 'Une expertise en neurodiversité au cœur de l’approche',
          icon: '💡',
          body: [
            'Notre modèle s’inspire des **pédagogies actives** (Montessori, Freinet, Korczak), de la pédagogie par projets, de l’expérimentation, ainsi que d’approches spécifiques aux TSA comme **TEACCH**.',
            'Chaque jeune bénéficie d’un environnement pensé pour lui, avec une équipe formée à la diversité des fonctionnements.'
          ]
        },
        {
          title: 'Notre semaine type',
          icon: '🗓️',
          wide: true,
          body: ['Semaine aménagée de 4 jours d’école avec pause le mercredi, afin de respecter un temps de repos et de déconnexion essentiel pour les jeunes.'],
          custom: 'schedule'
        },
        {
          title: 'Des experts pour accompagner les talents des jeunes',
          icon: '🌟',
          body: ['Au **Collège de la Neurodiversité**, les projets prennent vie grâce à l’accompagnement d’**intervenants experts** dans les domaines concernés. Leur rôle n’est pas de faire à la place des élèves, mais de **les guider, les encourager et les aider à développer leurs compétences**. Ils deviennent des partenaires de progression, présents à chaque étape, pour soutenir l’autonomie et nourrir la curiosité.']
        },
        {
          title: 'Des partenariats qui ouvrent le monde',
          icon: '🤝',
          body: [
            'Pour les projets collectifs, le collège s’appuie sur des **entreprises, des associations et des acteurs locaux**. Ces collaborations, souvent menées dans le cadre de mécénats de compétences ou de partenariats, permettent aux jeunes d’être accompagnés dans les aspects techniques, créatifs ou de production.',
            'Certaines étapes peuvent être confiées à des partenaires spécialisés, qui partagent leur savoir-faire avec les élèves, que ce soit en **observation** ou en **participation**, selon les capacités de chacun.'
          ]
        },
        {
          title: 'Une communauté qui crée ensemble',
          icon: '🌍',
          wide: true,
          body: [
            'Des **bénévoles** peuvent également rejoindre les projets collectifs, notamment au sein de l’atelier de fabrication collaborative. L’objectif est d’ouvrir cet espace à la population locale, en proposant de **nouveaux loisirs créatifs et de fabrication** autour des projets initiés par les élèves.',
            'Cette dynamique crée une véritable **inclusion vécue** : les jeunes travaillent aux côtés de citoyens, échangent, transmettent, apprennent. Ils occupent une place utile dans la réalisation des projets, et deviennent acteurs d’une communauté qui crée, innove et avance ensemble.'
          ]
        }
      ]
    },
    { id: 'organisation-participative', title: 'Organisation participative', todo: 'Le brief annonce cette partie sans la rédiger : texte à fournir.' }
  ]
};

// « Notre semaine type » (brief page collège) : mercredi libre. Une ligne = un créneau ;
// `all` = activité commune aux 4 jours, `days` = une matière par jour (lundi, mardi, jeudi, vendredi).
export const semaineType = {
  caption: 'Notre semaine type : lundi, mardi, jeudi et vendredi, mercredi libre',
  days: ['Lundi', 'Mardi', 'Jeudi', 'Vendredi'],
  slots: [
    { time: '8h30', all: 'Accueil des élèves' },
    { time: '9h00', all: 'Module connaissance et développement de soi (neuroscientifique)' },
    { time: '9h30', all: 'Météo du jour' },
    { time: '10h00', days: ['Cours pédagogique : français', 'Cours pédagogique : maths', 'Cours pédagogique : français', 'Cours pédagogique : maths'] },
    { time: '11h00', days: ['Cours pédagogique : histoire-géographie et éducation morale et civique', 'Cours pédagogique : langues vivantes et technologie', 'Cours pédagogique : artistique et sciences et vie de la terre', 'Cours pédagogique : éducation sportive et physique-chimie'] },
    { time: '12h00', all: 'Déjeuner' },
    { time: '13h00', all: 'Ateliers de groupe' },
    { time: '13h30', all: 'Interventions sujets sociétaux' },
    { time: '14h00 – 15h30', all: 'Projets collectifs – socle commun' },
    { time: '15h45 – 17h00', all: 'Projets individuels – socle commun' },
    { time: '17h30', all: 'Fin des cours – « séance détente » – débrief de la journée' }
  ] as { time: string; all?: string; days?: string[] }[]
};

export const soutenirPage: SitePage = {
  navLabel: 'Nous soutenir',
  route: '/soutenir',
  title: 'Agir et nous soutenir',
  eyebrow: 'Construisons ensemble',
  intro: 'Le projet a besoin de locaux, de financements et de compétences. Chaque contribution compte.',
  blocks: [
    {
      id: 'dons-financiers',
      title: 'Dons financiers',
      body: ['Votre don soutient directement l’ouverture et le fonctionnement du collège-lycée.'],
      todo: 'Intégrer le module de dons en ligne (HelloAsso ou équivalent) et préciser la déductibilité fiscale.'
    },
    {
      id: 'dons-en-nature',
      title: 'Dons en nature',
      body: ['Mise à disposition de locaux, mobilier, matériel informatique, équipement de fablab : les dons en nature sont précieux.']
    },
    { id: 'taxe-apprentissage', title: 'Taxe d’apprentissage', todo: 'Préciser si l’association est habilitée à percevoir la taxe d’apprentissage et comment la flécher.' },
    {
      id: 'benevolat-competences',
      title: 'Bénévolat et mécénat de compétences',
      body: ['Nous recherchons des partenaires pour : la mise à disposition des locaux ; un soutien financier ; l’accompagnement des travaux et des normes ERP ; un partenariat territorial durable.']
    },
    { id: 'contact', title: 'Échangeons', custom: 'contact' }
  ]
};

export const sitePages: SitePage[] = [
  associationPage,
  collegePage,
  soutenirPage
];

export const lieuSite = {
  eyebrow: 'Implantation',
  title: 'Un site à reconnecter à son territoire',
  paragraphs: [
    'La Base régionale de loisirs du Port aux Cerises est au croisement de trois communes densément peuplées, dans un environnement calme et connecté à la nature.',
    'Des locaux inoccupés depuis plusieurs années pourraient être rénovés et mis aux normes ERP pour accueillir salles de classe, espaces de vie et de détente, bibliothèque, fablab et espace forme.'
  ],
  mapTitle: 'Carte de la Base de loisirs du Port aux Cerises'
};

export const modele = {
  eyebrow: 'Transparence',
  title: 'Un modèle économique lisible',
  budgetCaption: 'Prévision pour 15 élèves',
  budgetRows: [
    { label: 'Budget annuel prévisionnel', prefix: '~', count: 345, suffix: ' k€' },
    { label: 'Participation des familles', prefix: '', count: 75, suffix: ' k€', highlight: true },
    { label: 'Financement public/privé à mobiliser', prefix: '~', count: 270, suffix: ' k€' }
  ],
  orgBlock: {
    title: 'Organisation prévisionnelle',
    paragraphs: [
      '5 ETP, un mi-temps, un expert-comptable et un bénévolat complémentaire.',
      'École hors contrat : l’objectif est un autofinancement progressif à terme, avec une participation des familles plafonnée à 5 000 € par an et par élève.'
    ]
  }
};

export const impact = {
  eyebrow: 'Pour Draveil',
  title: 'Un projet utile à tout le territoire',
  captionSr: 'Bénéfices, impacts attendus et indicateurs proposés',
  columns: ['Bénéfices', 'Impacts attendus', 'Indicateurs proposés'],
  rows: [
    { benefit: 'Territoire démonstrateur', impactText: 'Une réponse inclusive reconnue', indicator: 'Partenariats territoriaux engagés' },
    { benefit: 'Passerelles locales', impactText: 'Éducation, santé, handicap, emploi et entreprises reliés', indicator: 'Actions et acteurs mobilisés', highlight: true },
    { benefit: 'Patrimoine et attractivité', impactText: 'Locaux revalorisés, familles et jeunesse accompagnées', indicator: 'Locaux remis en usage, projets menés' }
  ]
};

// Nouvelle section homepage (source : fiche projet officielle, page 2).
export const pourquoiSoutenir = {
  eyebrow: 'Pour soutenir le projet',
  title: 'Pourquoi soutenir le projet ?',
  reasons: [
    'Prévenir les ruptures de parcours et le décrochage scolaire.',
    'Réduire l’isolement et favoriser la socialisation.',
    'Permettre aux familles de disposer d’une solution éducative stable.',
    'Offrir des perspectives d’emploi choisies par intérêt et non subies.',
    'Développer un écosystème pour une société plus inclusive et plus solidaire.',
    'Favoriser la collaboration avec les personnes neuro-atypiques.'
  ],
  mecenat: {
    title: 'Mécénat',
    text: 'Mettre à disposition des biens immobiliers ou mobiliers. Soutenir les investissements pour l’installation de l’école, les frais de scolarité des élèves ou le projet pédagogique.'
  },
  benevolat: {
    title: 'Bénévolat',
    text: 'Proposer son expertise et savoir-faire utiles aux jeunes et à l’équipe.'
  },
  more: { href: '/soutenir', label: 'Agir et nous soutenir' }
};

export const soutenir = {
  eyebrow: 'Construisons ensemble',
  title: 'Nous soutenir',
  needsIntro: 'Nous recherchons des partenaires pour :',
  needs: [
    'la mise à disposition des locaux ;',
    'un soutien financier ;',
    'l’accompagnement des travaux et normes ERP ;',
    'un partenariat territorial durable.'
  ],
  pdfButtonLabel: 'Télécharger le dossier de présentation',
  pdfButtonNote: '(PDF, lien à configurer)',
  formTitle: 'Échangeons',
  formIntro: 'Le formulaire est prêt à relier à Formspree.',
  formSubmitLabel: 'Envoyer le message'
};

export const footer = {
  accessibilityNote: 'Déclaration d’accessibilité : site conçu pour viser WCAG 2.1 AA. Sources citées dans chaque section.',
  backToTopLabel: 'Haut de page',
  contactLabel: 'Contact'
};
