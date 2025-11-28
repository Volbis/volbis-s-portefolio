import p_maquis from '../assets/images/projects_img/maquis.jpeg';
import p_maquis2 from '../assets/images/projects_img/maquis2.jpeg';
import p_maquis3 from '../assets/images/projects_img/maquis3.jpeg';
import p_maquis4 from '../assets/images/projects_img/maquis4.jpeg';
import p_maquis5 from '../assets/images/projects_img/maquis5.jpeg';
import p_smartci1 from '../assets/images/projects_img/smartci1.jpeg';
import p_smartci2 from '../assets/images/projects_img/smartci2.jpeg';
import p_smartci3 from '../assets/images/projects_img/smartci3.jpeg';
import p_smartci4 from '../assets/images/projects_img/smartci4.jpeg';

// Source centralisée de tous les projets du portfolio
// featured: true = Projet phare affiché dans le carrousel

export const projects = [
  // PROJETS PHARES (Carrousel + Grille)

  {
    id: 1,
    featured: true,
    title: "Supermarket",
    description: "Logiciel desktop de suivi automatisé, intelligent et prédictif des ressources d'un supermarché.",
    fullDescription: "Supermarket assure un suivi automatisé, intelligent et prédictif des ressources d'un supermarché. Ce logiciel répond aux principaux défis de la gestion manuelle des stocks : ruptures, surplus et erreurs de prévision, en offrant une supervision en temps réel et une anticipation des besoins grâce à l'analyse des données historiques. Par exemple, lorsqu'un stock de farine passe sous le seuil critique, l'application envoie une alerte au gestionnaire, propose une quantité optimale à recommander selon les données historiques, puis envoie automatiquement la commande au fournisseur après validation du responsable.",
    image: "https://picsum.photos/id/1015/800/500",
    images: [
      "https://picsum.photos/id/1015/800/500",
      "https://picsum.photos/id/1016/800/500",
      "https://picsum.photos/id/1018/800/500"
    ],
    mediaType: "video", // "video" | "images" | "placeholder"
    videoUrl: "https://youtu.be/4ShST6OHD-8?si=SbBoZaonuASRO4hj",
    github: null,
    demo: "https://www.linkedin.com/posts/albert-coulibaly-2789a5324_gestiondesstocks-daezveloppementlogiciel-activity-7390037093961428992-BW90?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFIEOTwBIEUqUUzQAYyQFs-XK7KGx5fiapk",
    tech: ["Vue.js", "Electron", "Django", "Railway", "Figma", "Git"],
    features: [
      "Suivi en temps réel des stocks",
      "Notification automatique des seuils critiques",
      "Prévision de la demande selon les tendances passées",
      "Gestion simplifiée des fournisseurs et des commandes",
      "Commande automatique après validation",
      "Analyse des données historiques"
    ],
  },
    {
    id: 2,
    featured: true,
    title: "Climbie",
    description: "Application full-stack de gestion hôtelière complète développée avec NestJS et Prisma ORM.",
    fullDescription: "Climbie est une solution de gestion hôtelière professionnelle développée avec NestJS (TypeScript), Prisma ORM et MySQL. L'architecture modulaire robuste gère plus de 30 tables interconnectées pour couvrir l'ensemble des besoins opérationnels d'un groupe hôtelier. Le système intègre une gestion complète des réservations et hébergements, un système multi-utilisateurs avec rôles et permissions granulaires, une authentification JWT sécurisée avec blacklist, la gestion des stocks (commandes, livraisons), et l'upload de documents. L'architecture respecte une séparation claire des responsabilités avec DTOs pour la validation, guards personnalisés pour la sécurité, et une approche modulaire facilitant la maintenance et l'évolutivité.",
    image: "https://picsum.photos/id/1030/800/500",
    images: [
      "https://picsum.photos/id/1030/800/500",
      "https://picsum.photos/id/1031/800/500",
      "https://picsum.photos/id/1032/800/500"
    ],
    mediaType: "placeholder", // "video" | "images" | "placeholder"
    videoUrl: null,
    github: null,
    demo: null,
    tech: ["NestJS", "TypeScript", "Prisma ORM", "MySQL", "JWT", "REST API", "Guards", "DTOs"],
    features: [
      "Gestion complète des réservations et check-in/check-out",
      "Système multi-hôtels pour groupes hôteliers",
      "Gestion des chambres et hébergements (types, tarifs, disponibilités)",
      "Système multi-utilisateurs avec rôles et permissions granulaires",
      "Authentification JWT sécurisée avec blacklist",
      "Gestion des stocks (commandes, livraisons, inventaire)",
      "Upload et gestion de documents (factures, contrats)",
      "Architecture modulaire avec plus de 30 tables",
      "DTOs pour validation robuste des données",
      "Guards personnalisés pour la sécurité des routes",
      "Séparation claire des responsabilités (Controllers, Services, Repositories)",
      "API REST complète et documentée"
    ],
  },
  {
    id: 3,
    featured: true,
    title: "Abia Poubelle",
    description: "Poubelle connectée et intelligente combinant IoT et IA pour révolutionner la gestion des déchets urbains.",
    fullDescription: "Abia est bien plus qu'une poubelle : c'est une solution connectée et autonome, développée par une équipe de passionné(e)s que j'ai eu l'honneur de coordonner en tant que chef d'équipe. Cette poubelle intelligente équipée de capteurs Arduino et connectée via Wi-Fi à une application mobile Flutter détecte son taux de remplissage en temps réel, alerte automatiquement les services de collecte, améliore le tri des déchets grâce à l'intelligence artificielle et sensibilise les usagers à l'écologie via une interface intuitive et éducative. Abia combine objets connectés, IA et design durable pour répondre aux limites des systèmes classiques de gestion des déchets.",
    image: "https://picsum.photos/id/1019/800/500",
    images: [],
    mediaType: "video", // "video" | "images" | "placeholder"
    videoUrl: "https://youtu.be/dyPT4m9GyAw?si=RcrUsiXL85HGJh_J",
    github: "https://github.com/Volbis/Ai-app2",
    demo: "https://www.linkedin.com/posts/albert-coulibaly-2789a5324_greentech-iot-techforgood-ugcPost-7356437624158367744-lf59?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFIEOTwBIEUqUUzQAYyQFs-XK7KGx5fiapk",
    tech: ["Flutter", "Arduino", "IoT", "IA", "C", "PHP", "Flask", "OpenStreetMap"],
    features: [
      "Détection en temps réel du taux de remplissage",
      "Alertes automatiques aux services de collecte",
      "Tri intelligent des déchets par IA",
      "Géolocalisation précise via l'application mobile",
      "Interface éducative pour sensibiliser à l'écologie",
      "Design durable et accessible à tous"
    ]
  },

  // PROJETS ANDROID (Grille uniquement)
  {
    id: 4,
    featured: false,
    title: "Maquis Dev",
    description: "Application mobile Android pour la gestion et promotion de restaurants locaux.",
    fullDescription: "Maquis Dev est une solution complète destinée aux restaurateurs pour gérer leurs établissements. L'application permet de créer des menus numériques, gérer les commandes en temps réel, et promouvoir les spécialités locales auprès d'une clientèle connectée.",
    image: "https://picsum.photos/id/1016/800/500",
    images: [
      p_maquis,
      p_maquis2,
      p_maquis3,
      p_maquis4,
      p_maquis5
    ],
    mediaType: "images", // "video" | "images" | "placeholder"
    videoUrl: null,
    github: "https://github.com/Volbis/maquis_dev",
    demo: null,
    tech: ["Android", "Java", "Firebase", "REST API"],
    features: ["Menus numériques", "Gestion des commandes", "Promotion locale", "Interface intuitive"],
  },
  {
    id: 5,
    featured: true,
    title: "ParkoNova",
    description: "Application desktop intelligente de gestion automatisée de parkings.",
    fullDescription: "ParkoNova est une solution desktop qui résout les problèmes quotidiens de gestion de parkings : manque de visibilité sur les places disponibles, suivi peu fiable des entrées/sorties, absence de statistiques. Développée avec JavaFX/Maven et connectée à MySQL, l'application offre une gestion simple et automatisée des parkings en temps réel.",
    image: "https://picsum.photos/id/1018/800/500",
    images: [
      "https://picsum.photos/id/1018/800/500",
      "https://picsum.photos/id/1019/800/500",
      "https://picsum.photos/id/1020/800/500"
    ],
    mediaType: "video", // "video" | "images" | "placeholder"
    videoUrl: "https://youtu.be/zirdNtYABsQ?si=7LmB83guPkf_q97a",
    github: "https://github.com/Volbis/ParkoNova",
    demo: "https://www.linkedin.com/posts/albert-coulibaly-2789a5324_java-javafx-mysql-activity-7317521095052390400-ydbn?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFIEOTwBIEUqUUzQAYyQFs-XK7KGx5fiapk",
    tech: ["JavaFX", "Maven", "MySQL", "Java", "POO"],
    features: ["Visualisation en temps réel des places disponibles", "Ajout/suppression dynamique de véhicules", "Enregistrement des mouvements (entrée/sortie)", "Statistiques de gestion d'espace", "Interface graphique intuitive"],
  },

  {
    id: 6,
    featured: false,
    title: "Vendor",
    description: "Application mobile complète de gestion de station de lavage automobile avec React Native/Expo.",
    fullDescription: "Vendor est une solution tout-en-un développée avec React Native, Expo et TypeScript pour gérer l'ensemble des opérations d'une station de lavage automobile. L'architecture scalable intègre une gestion clients avancée, un système de réservations en temps réel, un inventaire dynamique, une boutique complète avec paiement mobile intégré, ainsi qu'un portefeuille digital avec suivi financier détaillé. Cette application full-stack mobile offre une expérience utilisateur fluide et professionnelle pour les gestionnaires et clients.",
    image: "https://picsum.photos/id/1021/800/500",
    images: [
      "https://picsum.photos/id/1021/800/500",
      "https://picsum.photos/id/1020/800/500",
      "https://picsum.photos/id/1015/800/500"
    ],
    mediaType: "placeholder", // "video" | "images" | "placeholder"
    videoUrl: null,
    github: null,
    demo: null,
    tech: ["React Native", "TypeScript", "Expo", "Redux", "REST API", "JWT", "Mobile Payment"],
    features: [
      "Gestion complète des clients et profils",
      "Système de réservations en temps réel",
      "Inventaire dynamique et suivi des stocks",
      "Boutique intégrée avec catalogue produits",
      "Paiement mobile sécurisé (Mobile Money, cartes)",
      "Portefeuille digital avec historique des transactions",
      "Suivi financier et reporting détaillé",
      "Notifications push pour réservations et promotions",
      "Architecture modulaire et scalable",
      "Interface responsive et intuitive"
    ],
  },
  {
    id: 7,
    featured: true,
    title: "GL Bot",
    description: "Bot Telegram intelligent pour la gestion et le téléchargement automatisé de fichiers académiques via Google Drive.",
    fullDescription: "GL Bot est un assistant conversationnel développé pour révolutionner l'accès aux documents académiques. Fini les recherches interminables dans les conversations ou les dossiers éparpillés ! Le bot utilise l'API Google Drive pour rechercher et télécharger n'importe quel fichier (devoirs, cours, etc.) en quelques secondes. Cette automatisation fait gagner un temps précieux et améliore considérablement l'organisation quotidienne des étudiants.",
    image: "https://picsum.photos/id/1020/800/500",
    images: [],
    mediaType: "video", // "video" | "images" | "placeholder"
    videoUrl: "https://youtu.be/rwTxcJk_UIs?si=hqABl_DpMvlCIB9b",
    github: "https://github.com/Volbis/Corro_Gl_Telegram_Bot",
    demo: "https://www.linkedin.com/posts/albert-coulibaly-2789a5324_python-bottelegram-automatisation-activity-7305720222856925187-_E2J?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFIEOTwBIEUqUUzQAYyQFs-XK7KGx5fiapk",
    tech: ["Python", "Telegram API", "Google Drive API", "NLP"],
    features: [
      "Recherche instantanée de fichiers",
      "Téléchargement automatisé depuis Google Drive",
      "Interface conversationnelle intuitive",
      "Gestion intelligente des documents académiques",
      "Gain de temps considérable",
      "Support 24/7"
    ],
  },


  // PROJETS WEB / FULL STACK (Grille uniquement)
  {
    id: 8,
    featured: false,
    title: "ESATIC Register",
    description: "Système web de gestion d'inscriptions et d'étudiants pour établissement académique.",
    fullDescription: "ESATIC Register est une plateforme complète développée avec Django pour gérer l'ensemble du processus d'inscription universitaire. Le système permet aux étudiants de s'inscrire en ligne, aux administrateurs de gérer les dossiers, et offre un suivi académique complet.",
    image: "https://picsum.photos/id/1022/800/500",
    images: [
      "https://picsum.photos/id/1022/800/500",
      "https://picsum.photos/id/1015/800/500",
      "https://picsum.photos/id/1016/800/500"
    ],
    mediaType: "placeholder", // "video" | "images" | "placeholder"
    videoUrl: null,
    github: "https://github.com/Volbis/Esatic-resgister",
    demo: null,
    tech: ["Django", "Python", "SQlite", "HTML/CSS", "AWS", "EC2"],
    features: ["Inscription en ligne", "Gestion des dossiers", "Suivi académique", "Dashboard admin"],
  },
  {
    id: 9,
    featured: false,
    title: "RestauPilot",
    description: "Solution de digitalisation pour restaurants avec gestion des commandes et réservations.",
    fullDescription: "RestauPilot modernise la gestion des restaurants en offrant un système intégré de gestion des menus, commandes et réservations. L'application propose un dashboard administrateur complet et une interface client intuitive pour une expérience culinaire optimale.",
    image: "https://picsum.photos/id/1023/800/500",
    images: [],
    mediaType: "video", // | "images" | "placeholder"
    videoUrl: "https://youtu.be/jfjPDaNc4c0?si=m33upXNrYQt4r2Zq",
    github: "https://github.com/Volbis/RestauPilot",
    demo: "https://restau-pilot-y5di.vercel.app/",
    tech: ["Django", "React", "MySQL", "WebSocket"],
    features: ["Gestion des menus", "Commandes en ligne", "Réservations", "Dashboard admin"],
  },
  {
    id: 10,
    featured: false,
    title: "SmarterCIE",
    description: "Application web intelligente d'optimisation de la consommation électrique.",
    fullDescription: "SmarterCIE est une plateforme innovante pour suivre et optimiser la consommation électrique. Intégrant des algorithmes d'IA, l'application analyse les patterns de consommation et propose des recommandations personnalisées pour réduire les coûts énergétiques.",
    image: "https://picsum.photos/id/1024/800/500",
    images: [
      p_smartci1,
      p_smartci2,
      p_smartci3,
      p_smartci4
    ],
    mediaType: "images", // "video" | "images" | "placeholder"
    videoUrl: null,
    github: "https://github.com/Volbis/SmarterCIE",
    demo: null,
    tech: ["Django", "React", "AI/ML", "Chart.js"],
    features: ["Suivi de consommation", "Analyses IA", "Recommandations", "Graphiques interactifs"],
  },

  // PROJETS IA / BOTS (Grille uniquement)
  {
    id: 11,
    featured: false,
    title: "AI App 2",
    description: "Application d'intelligence artificielle pour l'assistance et l'analyse de contenu.",
    fullDescription: "AI App 2 est une expérimentation avancée en intelligence artificielle offrant des fonctionnalités d'assistant virtuel, d'analyse de texte et de génération de contenu. L'application utilise les dernières technologies d'IA pour fournir des réponses contextuelles et pertinentes.",
    image: "https://picsum.photos/id/1025/800/500",
    images: [
      "https://picsum.photos/id/1025/800/500",
      "https://picsum.photos/id/1020/800/500",
      "https://picsum.photos/id/1015/800/500"
    ],
    mediaType: "placeholder", // "video" | "images" | "placeholder"
    videoUrl: null,
    github: "https://github.com/Volbis/Ai-app2",
    demo: "https://www.linkedin.com/posts/albert-coulibaly-2789a5324_abiaslides-activity-7341142093995589633-fOJl?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFIEOTwBIEUqUUzQAYyQFs-XK7KGx5fiapk",
    tech: ["Python", "OpenAI API", "NLP", "Flask"],
    features: ["Assistant IA", "Analyse de texte", "Génération de contenu", "API REST"],
  },

  // JEU VIDÉO (Grille uniquement)
  {
    id: 12,
    featured: false,
    title: "App 1 - Jeu Vidéo",
    description: "Projet de jeu mobile ou PC avec gameplay innovant et graphismes modernes.",
    fullDescription: "App 1 est un projet de jeu vidéo expérimental développé pour explorer les possibilités du game design moderne. Le jeu propose une expérience immersive avec des mécaniques de gameplay innovantes et une direction artistique soignée.",
    image: "",
    images: [
    ],
    mediaType: "placeholder", // "video" | "images" | "placeholder"
    videoUrl: null,
    github: "https://github.com/Volbis/APP-Game-KORWASIRI",
    demo: null,
    tech: ["Unity", "C#", "Android SDK", "Game Design"],
    features: ["Gameplay innovant", "Graphismes modernes", "Multi-plateforme", "Optimisation performance"],
  },
  {
    id: 13,
    featured: true,
    title: "AcadHub",
    description: "Plateforme académique complète pour centraliser et automatiser les processus scolaires.",
    fullDescription: "AcadHub simplifie la gestion des activités académiques pour les établissements scolaires et universitaires. Développé en C++ avec le framework Qt pour une interface riche et performante, et stylé via QSS pour une personnalisation avancée, AcadHub s'appuie sur MySQL pour un stockage structuré des données. La plateforme gère les inscriptions et connexions (étudiants, enseignants, administrateurs), la gestion des cours, des salles, des matières, des notes, et propose des outils d'automatisation et de suivi en temps réel.",
    image: "https://img.icons8.com/fluency/800/school.png",
    images: [
      "https://img.icons8.com/fluency/800/school.png",
      "https://img.icons8.com/fluency/800/graduation-cap.png"
    ],
    mediaType: "video",
    videoUrl: "https://youtu.be/nO1YMtaEDsI?si=5M8T74yCgkKca58Y",
    github: null,
    demo: "https://www.linkedin.com/posts/albert-coulibaly-2789a5324_acadhub-gestionacademique-c-activity-7288655308984393728-TAw5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFIEOTwBIEUqUUzQAYyQFs-XK7KGx5fiapk",
    tech: ["C++", "Qt", "QSS", "MySQL"],
    features: [
      "Gestion des inscriptions et authentification multi-rôles (étudiants/enseignants/admin)",
      "Administration des cours, matières et plannings de salles",
      "Saisie et gestion des notes avec calculs automatisés de moyennes",
      "Tableaux de bord pour le suivi en temps réel des activités",
      "Personnalisation de l'interface via QSS",
      "Architecture orientée performance et robustesse (C++/Qt)",
      "Base de données MySQL pour stockage sécurisé et structuré"
    ],
  },
];

// Fonctions helper pour filtrer les projets
export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getAllProjects = () => projects;
export const getProjectById = (id) => projects.find(p => p.id === id);
