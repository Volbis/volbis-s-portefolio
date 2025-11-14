"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  // Projets Android
  {
    title: "Maquis Dev",
    description: "Application mobile Android pour la gestion et promotion de restaurants locaux (Maquis).",
    fullDescription: "Maquis Dev aide les maquis à gérer leurs établissements : menus numériques, commandes en temps réel et promotion des spécialités locales. Développée en sur l'architechture MVVM pour une meilleure maintenabilité.",
    image: "https://picsum.photos/id/1015/800/500",
    images: [
      "https://picsum.photos/id/1015/800/500",
      "https://picsum.photos/id/1016/800/500",
      "https://picsum.photos/id/1018/800/500"
    ],
    github: "https://github.com/Volbis/maquis_dev",
    demo: null,
    tech: ["Android", "Kotlin", "Room Database", "Gradle"],
    features: ["Menus numériques", "Gestion des commandes", "Promotion locale", "Interface intuitive", "Gestion des rôles"],
  },
  {
    title: "Abia Poubelle",
    description: "Poubelle connectée et intelligente combinant IoT et IA pour révolutionner la gestion des déchets urbains.",
    fullDescription: "Abia est bien plus qu'une poubelle : c'est une solution connectée et autonome, développée par une équipe de passionné(e)s que j'ai eu l'honneur de coordonner en tant que chef d'équipe. Cette poubelle intelligente équipée de capteurs Arduino et connectée via Wi-Fi à une application mobile Flutter détecte son taux de remplissage en temps réel, alerte automatiquement les services de collecte, améliore le tri des déchets grâce à l'intelligence artificielle et sensibilise les usagers à l'écologie via une interface intuitive et éducative. Abia combine objets connectés, IA et design durable pour répondre aux limites des systèmes classiques de gestion des déchets.",
    image: "https://picsum.photos/id/1019/800/500",
    images: [
      "https://picsum.photos/id/1019/800/500",
      "https://picsum.photos/id/1020/800/500",
      "https://picsum.photos/id/1015/800/500"
    ],
    github: "https://github.com/Volbis/Ai-app2",
    demo: null,
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

  // {
  //   title: "VendorrApp",
  //   description: "Plateforme mobile de commerce pour vendeurs avec gestion de stock et commandes.",
  //   fullDescription: "VendorrApp facilite la vie des vendeurs en leur offrant un outil complet de gestion commerciale. L'application permet de suivre les stocks en temps réel, gérer les commandes clients, et analyser les ventes avec des tableaux de bord intuitifs.",
  //   image: "https://picsum.photos/id/1016/800/500",
  //   images: [
  //     "https://picsum.photos/id/1016/800/500",
  //     "https://picsum.photos/id/1018/800/500",
  //     "https://picsum.photos/id/1019/800/500"
  //   ],
  //   github: "https://github.com/Volbis/VendorrApp",
  //   demo: null,
  //   tech: ["Android", "Kotlin", "MySQL", "Firebase"],
  //   features: ["Gestion de stock", "Suivi des commandes", "Tableau de bord", "Base de données synchronisée"],
  // },

  // Desktop
  {
    title: "ParkoNova",
    description: "Application desktop intelligente de gestion automatisée de parkings.",
    fullDescription: "ParkoNova est une solution desktop qui résout les problèmes quotidiens de gestion de parkings : manque de visibilité sur les places disponibles, suivi peu fiable des entrées/sorties, absence de statistiques. Développée avec JavaFX/Maven et connectée à MySQL, l'application offre une gestion simple et automatisée des parkings en temps réel.",
    image: "https://picsum.photos/id/1018/800/500",
    images: [
      "https://picsum.photos/id/1018/800/500",
      "https://picsum.photos/id/1019/800/500",
      "https://picsum.photos/id/1020/800/500"
    ],
    github: "https://github.com/Volbis/ParkoNova",
    demo: null,
    tech: ["JavaFX", "Maven", "MySQL", "Java", "POO"],
    features: ["Visualisation en temps réel des places disponibles", "Ajout/suppression dynamique de véhicules", "Enregistrement des mouvements (entrée/sortie)", "Statistiques de gestion d'espace", "Interface graphique intuitive"],
  },
  // {
  //   title: "Climbie",
  //   description: "Application mobile sociale pour la progression personnelle et le développement.",
  //   fullDescription: "Climbie est une plateforme sociale innovante qui encourage ses utilisateurs à progresser dans leurs objectifs personnels. Inspirée du concept d'ascension, l'application propose des défis, un suivi de progression et une communauté motivante.",
  //   image: "https://picsum.photos/id/1019/800/500",
  //   images: [
  //     "https://picsum.photos/id/1019/800/500",
  //     "https://picsum.photos/id/1020/800/500",
  //     "https://picsum.photos/id/1015/800/500"
  //   ],
  //   github: "https://github.com/Volbis/Climbie",
  //   demo: null,
  //   tech: ["Android", "Kotlin", "Firebase", "Social API"],
  //   features: ["Défis personnalisés", "Suivi de progression", "Réseau social", "Système de récompenses"],
  // },
  
  // Projets Web / Full Stack
  {
    title: "ESATIC Register",
    description: "Système web de gestion d'inscriptions et d'étudiants pour l'ESATIC.",
    fullDescription: "ESATIC Register est une plateforme complète développée avec Django pour gérer l'ensemble du processus d'inscription universitaire. Le système permet aux étudiants de s'inscrire en ligne, aux administrateurs de gérer les dossiers, et offre un suivi académique complet.",
    image: "https://picsum.photos/id/1020/800/500",
    images: [
      "https://picsum.photos/id/1020/800/500",
      "https://picsum.photos/id/1015/800/500",
      "https://picsum.photos/id/1016/800/500"
    ],
    github: "https://github.com/Volbis/Esatic-Register",
    demo: null,
    tech: ["Django", "Python", "PostgreSQL", "HTML/CSS"],
    features: ["Inscription en ligne", "Gestion des dossiers", "Suivi académique", "Dashboard admin"],
  },
  {
    title: "Supermarket",
    description: "Logiciel desktop de suivi automatisé, intelligent et prédictif des ressources d'un supermarché.",
    fullDescription: "Supermarket assure un suivi automatisé, intelligent et prédictif des ressources d'un supermarché. Ce logiciel répond aux principaux défis de la gestion manuelle des stocks : ruptures, surplus et erreurs de prévision, en offrant une supervision en temps réel et une anticipation des besoins grâce à l'analyse des données historiques. Par exemple, lorsqu'un stock de farine passe sous le seuil critique, l'application envoie une alerte au gestionnaire, propose une quantité optimale à recommander selon les données historiques, puis envoie automatiquement la commande au fournisseur après validation du responsable.",
    image: "https://picsum.photos/id/1015/800/500",
    images: [
      "https://picsum.photos/id/1015/800/500",
      "https://picsum.photos/id/1016/800/500",
      "https://picsum.photos/id/1018/800/500"
    ],
    github: "https://github.com/Volbis/Supermarket",
    demo: null,
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
    title: "RestauPilot",
    description: "L'outil qui aide les restaurants à respirer : moins de stress, plus de contrôle.",
    fullDescription: "RestauPilot est bien plus qu'un simple logiciel de gestion : c'est votre partenaire pour reprendre le contrôle de votre restaurant. Pendant que d'autres galèrent avec les papiers, vous avancez avec clarté grâce à des commandes rapides et sans erreur, un stock qui se met à jour automatiquement, vos ventes en temps réel, une comptabilité déjà prête, et surtout : plus de clients servis, sans prise de tête. RestauPilot modernise la gestion des restaurants en offrant un système intégré de gestion des menus, commandes, réservations et paiement en ligne avec un dashboard administrateur complet et une interface client intuitive pour une expérience culinaire optimale.",
    image: "https://picsum.photos/id/1016/800/500",
    images: [
      "https://picsum.photos/id/1016/800/500",
      "https://picsum.photos/id/1018/800/500",
      "https://picsum.photos/id/1019/800/500"
    ],
    github: "https://github.com/Volbis/RestauPilot",
    demo: null,
    tech: ["Django", "React", "MySQL", "WebSocket"],
    features: [
      "Commandes rapides et sans erreur",
      "Stock à jour automatiquement",
      "Ventes en temps réel",
      "Comptabilité déjà prête",
      "Gestion des menus",
      "Réservations en ligne",
      "Dashboard admin complet"
    ],
  },
  {
    title: "SmarterCIE",
    description: "Application mobile intelligente d'optimisation de la consommation électrique en Côte d'Ivoire.",
    fullDescription: "SmarterCIE est une plateforme innovante pour suivre et optimiser la consommation électrique. Intégrant des algorithmes d'IA, l'application analyse les patterns de consommation et propose des recommandations personnalisées pour réduire les coûts énergétiques.",
    image: "https://picsum.photos/id/1018/800/500",
    images: [
      "https://picsum.photos/id/1018/800/500",
      "https://picsum.photos/id/1019/800/500",
      "https://picsum.photos/id/1020/800/500"
    ],
    github: "https://github.com/Volbis/SmarterCIE",
    demo: null,
    tech: ["Django", "React", "AI/ML", "Chart.js"],
    features: ["Suivi de consommation", "Analyses IA", "Recommandations", "Graphiques interactifs"],
  },
  
  // Projets IA / Bots
  {
    title: "AI de reconnaissance visuelle de déchets",
    description: "Application web d'intelligence artificielle pour l'assistance et l'analyse des déchets en fonction de leurs catégories.",
    fullDescription: "AI App Déchets est une application web d'intelligence artificielle qui identifie, classe et analyse les déchets selon leurs catégories pour améliorer le tri et la gestion écologique.",
    image: "https://picsum.photos/id/1019/800/500",
    images: [
      "https://picsum.photos/id/1019/800/500",
      "https://picsum.photos/id/1020/800/500",
      "https://picsum.photos/id/1015/800/500"
    ],
    github: "https://github.com/Volbis/Ai-app2",
    demo: null,
    tech: ["Python", "TensorFlow", "Computer Vision", "Flask"],
    features: ["Reconnaissance visuelle", "Classification automatique", "Analyse écologique", "Interface web intuitive"],
  },
  {
    title: "GL Bot",
    description: "Bot Telegram intelligent pour la gestion et le téléchargement automatisé de fichiers académiques via Google Drive.",
    fullDescription: "GL Bot est un assistant conversationnel développé pour révolutionner l'accès aux documents académiques. Fini les recherches interminables dans les conversations ou les dossiers éparpillés ! Le bot utilise l'API Google Drive pour rechercher et télécharger n'importe quel fichier (devoirs, cours, etc.) en quelques secondes. Cette automatisation fait gagner un temps précieux et améliore considérablement l'organisation quotidienne des étudiants.",
    image: "https://picsum.photos/id/1020/800/500",
    images: [
      "https://picsum.photos/id/1020/800/500",
      "https://picsum.photos/id/1015/800/500",
      "https://picsum.photos/id/1016/800/500"
    ],
    github: "https://github.com/Volbis/GL-bot",
    demo: null,
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
  {
    title: "AcadHub",
    description: "Plateforme desktop de gestion académique complète pour étudiants, enseignants et administrateurs.",
    fullDescription: "AcadHub est une plateforme conçue pour simplifier et centraliser la gestion des processus académiques. Développée avec C++ et le framework Qt, elle offre une interface utilisateur fluide et professionnelle. La plateforme permet la gestion des inscriptions, le suivi des cours, des salles de classe, des matières et des notes en temps réel, avec une automatisation complète des processus académiques.",
    image: "https://picsum.photos/id/1021/800/500",
    images: [
      "https://picsum.photos/id/1021/800/500",
      "https://picsum.photos/id/1022/800/500",
      "https://picsum.photos/id/1023/800/500"
    ],
    github: "https://github.com/Volbis/AcadHub",
    demo: null,
    tech: ["C++", "Qt Framework", "QSS", "MySQL", "POO"],
    features: [
      "Gestion des inscriptions et connexions multi-rôles",
      "Suivi des données en temps réel",
      "Automatisation des processus académiques",
      "Gestion des cours et salles de classe",
      "Gestion des matières et des notes",
      "Interface fluide et professionnelle",
      "Design attrayant avec QSS",
      "Stockage sécurisé avec MySQL"
    ],
    },
  
  // Jeu vidéo
  {
    "title": "Korwhasiri - Jeu Vidéo Desktop",
    "description": "Jeu desktop développé avec Unity et C# visant à promouvoir la culture africaine, et plus particulièrement la culture Sénoufo, à travers une expérience immersive et éducative.",
    "fullDescription": "Korwhasiri est un jeu vidéo développé avec Unity et C#, où le joueur incarne un Dozo, un chasseur traditionnel sénoufo. Le jeu combine gameplay interactif et narration immersive pour transmettre les valeurs, traditions et savoirs de la culture sénoufo. Chaque niveau et interaction est conçu pour éduquer le joueur tout en offrant une expérience ludique et captivante. Les graphismes, minimalistes et soignés, mettent en avant des éléments visuels typiques de l'Afrique de l'Ouest, créant un pont entre divertissement et patrimoine culturel.",
    "image": "https://picsum.photos/id/1015/800/500",
    "images": [
      "https://picsum.photos/id/1015/800/500",
      "https://picsum.photos/id/1016/800/500",
      "https://picsum.photos/id/1018/800/500"
    ],
    "github": "https://github.com/Volbis/App1-game",
    "demo": null,
    "tech": ["Unity", "C#", "Game Design", "Narration interactive", "Graphismes 2D/3D"],
    "features": [
      "Incarner un Dozo pour explorer la culture sénoufo",
      "Gameplay immersif et éducatif",
      "Graphismes modernes et culturels",
      "Optimisation pour PC desktop"
    ]
  }
];

function ProjectModal({ project, isOpen, onClose, onNext, onPrevious }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl max-w-6xl w-full my-8 overflow-hidden border border-white/10"
          >
            {/* Bouton fermer */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg>
            </button>

            {/* Layout horizontal : Image à gauche, Contenu à droite */}
            <div className="flex flex-col lg:flex-row gap-0">
              {/* Partie gauche - Image */}
              <div className="lg:w-[45%] p-6 lg:p-8 flex items-center justify-center bg-gradient-to-br from-gray-800/30 to-transparent">
                {/* Carrousel d'images - Style écran */}
                <div className="relative w-full">
                  {/* Cadre de l'écran */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-gray-800 bg-gray-900">
                    {/* Barre supérieure de l'écran */}
                    <div className="bg-gray-800 h-8 flex items-center px-4 gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    
                    {/* Image */}
                    <div className="relative h-72 lg:h-96 bg-black">
                      <motion.img
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        src={project.images[currentImageIndex]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Navigation du carrousel */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={previousImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 bg-black/60 hover:bg-black/80 rounded-full transition-all duration-300 hover:scale-110 z-10"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m15 18-6-6 6-6"/>
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-black/60 hover:bg-black/80 rounded-full transition-all duration-300 hover:scale-110 z-10"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m9 18 6-6-6-6"/>
                        </svg>
                      </button>

                      {/* Indicateurs */}
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              index === currentImageIndex ? "bg-orange-500 w-8" : "bg-white/30 w-2"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Partie droite - Contenu */}
              <div className="lg:w-[55%] p-6 lg:p-8 overflow-y-auto max-h-[85vh] lg:max-h-[600px]">
                {/* Titre et description */}
                <div className="mb-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2 uppercase tracking-wide">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
                      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                    </svg>
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Fonctionnalités */}
                <div className="mb-8">
                  <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2 uppercase tracking-wide">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
                      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
                    </svg>
                    Fonctionnalités clés
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400 flex-shrink-0 mt-0.5">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex flex-wrap gap-3 pt-6 border-t border-white/10">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300 border border-white/20 flex items-center justify-center gap-2 font-medium text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                        <path d="M9 18c-4.51 2-5-2-7-2"/>
                      </svg>
                      Code source
                    </motion.a>
                  )}

                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-lg shadow-orange-500/30 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" x2="21" y1="14" y2="3"/>
                      </svg>
                      Voir la démo
                    </motion.a>
                  )}
                </div>

                {/* Boutons de navigation en bas */}
                <div className="flex gap-3 mt-6 pt-6 border-t border-white/10">
                  <motion.button
                    onClick={onPrevious}
                    className="flex-1 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300 border border-white/20 flex items-center justify-center gap-2 font-medium text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m15 18-6-6 6-6"/>
                    </svg>
                    Précédent
                  </motion.button>

                  <motion.button
                    onClick={onNext}
                    className="flex-1 px-5 py-2.5 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 hover:from-orange-500/30 hover:to-yellow-500/30 text-orange-300 rounded-xl transition-all duration-300 border border-orange-500/30 flex items-center justify-center gap-2 font-medium shadow-lg shadow-orange-500/20 text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Prochain projet
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-black group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 md:p-6 flex flex-col justify-end z-20">
        <h3 className="text-white text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-200 text-sm mb-4 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <motion.button
            onClick={onClick}
            className="px-4 py-2 bg-white/10 text-white text-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            Voir le projet
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function GridProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const goToNextProject = () => {
    const currentIndex = projects.findIndex(p => p.title === selectedProject.title);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const goToPreviousProject = () => {
    const currentIndex = projects.findIndex(p => p.title === selectedProject.title);
    const previousIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[previousIndex]);
  };

  return (
    <section className="py-12 md:py-2 text-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-1"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent hidden md:block"
          >
            <span className="text-white">📂</span> Tous mes Projets
          </motion.h2>
          <motion.p className="text-gray-300 h-28 text-lg max-w-2xl mx-auto leading-relaxed hidden md:block">
            Une présentation complète de tous mes projets en disposition grille.
          </motion.p>
        </motion.div>

        {/* Grille responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} onClick={() => openModal(project)} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
        onNext={goToNextProject}
        onPrevious={goToPreviousProject}
      />
    </section>
  );
}
