"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  // Projets Android
  {
    title: "Maquis Dev",
    description: "Application mobile Android pour la gestion et promotion de restaurants locaux.",
    fullDescription: "Maquis Dev est une solution complète destinée aux restaurateurs pour gérer leurs établissements. L'application permet de créer des menus numériques, gérer les commandes en temps réel, et promouvoir les spécialités locales auprès d'une clientèle connectée.",
    image: "https://picsum.photos/id/1015/800/500",
    images: [
      "https://picsum.photos/id/1015/800/500",
      "https://picsum.photos/id/1016/800/500",
      "https://picsum.photos/id/1018/800/500"
    ],
    github: "https://github.com/Volbis/maquis_dev",
    demo: null,
    tech: ["Android", "Java", "Firebase", "REST API"],
    features: ["Menus numériques", "Gestion des commandes", "Promotion locale", "Interface intuitive"],
  },
  {
    title: "VendorrApp",
    description: "Plateforme mobile de commerce pour vendeurs avec gestion de stock et commandes.",
    fullDescription: "VendorrApp facilite la vie des vendeurs en leur offrant un outil complet de gestion commerciale. L'application permet de suivre les stocks en temps réel, gérer les commandes clients, et analyser les ventes avec des tableaux de bord intuitifs.",
    image: "https://picsum.photos/id/1016/800/500",
    images: [
      "https://picsum.photos/id/1016/800/500",
      "https://picsum.photos/id/1018/800/500",
      "https://picsum.photos/id/1019/800/500"
    ],
    github: "https://github.com/Volbis/VendorrApp",
    demo: null,
    tech: ["Android", "Kotlin", "MySQL", "Firebase"],
    features: ["Gestion de stock", "Suivi des commandes", "Tableau de bord", "Base de données synchronisée"],
  },
  {
    title: "ParkoNova",
    description: "Application intelligente de gestion de stationnement avec géolocalisation.",
    fullDescription: "ParkoNova révolutionne le stationnement urbain en permettant aux utilisateurs de localiser, réserver et payer leur place de parking en quelques clics. L'application utilise la géolocalisation en temps réel pour offrir une expérience fluide et moderne.",
    image: "https://picsum.photos/id/1018/800/500",
    images: [
      "https://picsum.photos/id/1018/800/500",
      "https://picsum.photos/id/1019/800/500",
      "https://picsum.photos/id/1020/800/500"
    ],
    github: "https://github.com/Volbis/ParkoNova",
    demo: null,
    tech: ["Android", "Google Maps API", "Géolocalisation", "Payment API"],
    features: ["Localisation en temps réel", "Réservation de places", "Paiement intégré", "Navigation GPS"],
  },
  {
    title: "Climbie",
    description: "Application mobile sociale pour la progression personnelle et le développement.",
    fullDescription: "Climbie est une plateforme sociale innovante qui encourage ses utilisateurs à progresser dans leurs objectifs personnels. Inspirée du concept d'ascension, l'application propose des défis, un suivi de progression et une communauté motivante.",
    image: "https://picsum.photos/id/1019/800/500",
    images: [
      "https://picsum.photos/id/1019/800/500",
      "https://picsum.photos/id/1020/800/500",
      "https://picsum.photos/id/1015/800/500"
    ],
    github: "https://github.com/Volbis/Climbie",
    demo: null,
    tech: ["Android", "Kotlin", "Firebase", "Social API"],
    features: ["Défis personnalisés", "Suivi de progression", "Réseau social", "Système de récompenses"],
  },
  
  // Projets Web / Full Stack
  {
    title: "ESATIC Register",
    description: "Système web de gestion d'inscriptions et d'étudiants pour établissement académique.",
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
    description: "Plateforme e-commerce complète pour la gestion de supermarché en ligne.",
    fullDescription: "Supermarket est une solution e-commerce moderne permettant aux supermarchés de digitaliser leurs opérations. La plateforme offre une expérience d'achat fluide, la gestion des stocks, le traitement des commandes et un système de paiement sécurisé.",
    image: "https://picsum.photos/id/1015/800/500",
    images: [
      "https://picsum.photos/id/1015/800/500",
      "https://picsum.photos/id/1016/800/500",
      "https://picsum.photos/id/1018/800/500"
    ],
    github: "https://github.com/Volbis/Supermarket",
    demo: null,
    tech: ["Django", "React", "Stripe", "PostgreSQL"],
    features: ["Catalogue produits", "Panier intelligent", "Paiement sécurisé", "Gestion des stocks"],
  },
  {
    title: "RestauPilot",
    description: "Solution de digitalisation pour restaurants avec gestion des commandes et réservations.",
    fullDescription: "RestauPilot modernise la gestion des restaurants en offrant un système intégré de gestion des menus, commandes et réservations. L'application propose un dashboard administrateur complet et une interface client intuitive pour une expérience culinaire optimale.",
    image: "https://picsum.photos/id/1016/800/500",
    images: [
      "https://picsum.photos/id/1016/800/500",
      "https://picsum.photos/id/1018/800/500",
      "https://picsum.photos/id/1019/800/500"
    ],
    github: "https://github.com/Volbis/RestauPilot",
    demo: null,
    tech: ["Django", "React", "MySQL", "WebSocket"],
    features: ["Gestion des menus", "Commandes en ligne", "Réservations", "Dashboard admin"],
  },
  {
    title: "SmarterCIE",
    description: "Application web intelligente d'optimisation de la consommation électrique.",
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
    title: "AI App 2",
    description: "Application d'intelligence artificielle pour l'assistance et l'analyse de contenu.",
    fullDescription: "AI App 2 est une expérimentation avancée en intelligence artificielle offrant des fonctionnalités d'assistant virtuel, d'analyse de texte et de génération de contenu. L'application utilise les dernières technologies d'IA pour fournir des réponses contextuelles et pertinentes.",
    image: "https://picsum.photos/id/1019/800/500",
    images: [
      "https://picsum.photos/id/1019/800/500",
      "https://picsum.photos/id/1020/800/500",
      "https://picsum.photos/id/1015/800/500"
    ],
    github: "https://github.com/Volbis/Ai-app2",
    demo: null,
    tech: ["Python", "OpenAI API", "NLP", "Flask"],
    features: ["Assistant IA", "Analyse de texte", "Génération de contenu", "API REST"],
  },
  {
    title: "GL Bot",
    description: "Chatbot intelligent pour l'assistance académique et services étudiants.",
    fullDescription: "GL Bot est un assistant conversationnel développé pour faciliter la vie étudiante. Le bot répond aux questions fréquentes, aide à la navigation dans les services universitaires, et offre un support 24/7 grâce au traitement du langage naturel.",
    image: "https://picsum.photos/id/1020/800/500",
    images: [
      "https://picsum.photos/id/1020/800/500",
      "https://picsum.photos/id/1015/800/500",
      "https://picsum.photos/id/1016/800/500"
    ],
    github: "https://github.com/Volbis/GL-bot",
    demo: null,
    tech: ["Python", "NLP", "Telegram API", "Django"],
    features: ["Réponses automatiques", "Support 24/7", "Traitement NLP", "Intégration Telegram"],
  },
  
  // Jeu vidéo
  {
    title: "App 1 - Jeu Vidéo",
    description: "Projet de jeu mobile ou PC avec gameplay innovant et graphismes modernes.",
    fullDescription: "App 1 est un projet de jeu vidéo expérimental développé pour explorer les possibilités du game design moderne. Le jeu propose une expérience immersive avec des mécaniques de gameplay innovantes et une direction artistique soignée.",
    image: "https://picsum.photos/id/1015/800/500",
    images: [
      "https://picsum.photos/id/1015/800/500",
      "https://picsum.photos/id/1016/800/500",
      "https://picsum.photos/id/1018/800/500"
    ],
    github: "https://github.com/Volbis/App1-game",
    demo: null,
    tech: ["Unity", "C#", "Android SDK", "Game Design"],
    features: ["Gameplay innovant", "Graphismes modernes", "Multi-plateforme", "Optimisation performance"],
  },
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
