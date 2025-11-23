"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectMediaViewer({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  // Fonction pour extraire l'ID de la vidéo YouTube
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    
    // Gérer les différents formats d'URL YouTube
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }
    
    return null;
  };

  // PLACEHOLDER STYLÉ
  if (project.mediaType === "placeholder") {
    const illustrations = {
      "ParkoNova": { gradient: "from-blue-500 via-cyan-500 to-teal-500", icon: "📱" },
      "Supermarket": { gradient: "from-orange-500 via-amber-500 to-yellow-500", icon: "🛒" },
      "GL Bot": { gradient: "from-purple-500 via-pink-500 to-rose-500", icon: "🤖" },
      "Abia Poubelle": { gradient: "from-green-500 via-emerald-500 to-teal-500", icon: "♻️" },
      "Maquis Dev": { gradient: "from-red-500 via-orange-500 to-amber-500", icon: "🍴" },
      "VendorrApp": { gradient: "from-indigo-500 via-purple-500 to-pink-500", icon: "🛍️" },
      "Vendor": { gradient: "from-blue-600 via-indigo-600 to-purple-600", icon: "💳" },
      "Climbie": { gradient: "from-teal-600 via-emerald-600 to-green-600", icon: "📦" },
      "ESATIC Register": { gradient: "from-violet-500 via-fuchsia-500 to-pink-500", icon: "📝" },
      "RestauPilot": { gradient: "from-rose-500 via-red-500 to-orange-500", icon: "🍽️" },
      "SmarterCIE": { gradient: "from-yellow-500 via-lime-500 to-green-500", icon: "⚡" },
      "AI App 2": { gradient: "from-slate-500 via-gray-500 to-zinc-500", icon: "🧠" },
      "App 1 - Jeu Vidéo": { gradient: "from-fuchsia-500 via-purple-500 to-indigo-500", icon: "🎮" }
    };

    const config = illustrations[project.title] || {
      gradient: "from-gray-500 via-slate-500 to-zinc-500",
      icon: "💼"
    };

    return (
      <div className="relative w-full">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-gray-800 bg-gray-900">
          <div className="bg-gray-800 h-8 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          
          <div className="relative h-72 lg:h-96 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-90`}></div>
            
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <circle cx="20%" cy="20%" r="60" fill="white" opacity="0.1"/>
              <circle cx="80%" cy="80%" r="40" fill="white" opacity="0.05"/>
            </svg>

            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.div
                className="text-8xl mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {config.icon}
              </motion.div>
              <motion.p
                className="text-white/60 text-lg font-semibold"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Aperçu visuel à venir
              </motion.p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10"></div>
          </div>
        </div>
      </div>
    );
  }

  // VIDÉO YOUTUBE
  if (project.mediaType === "video" && project.videoUrl) {
    const embedUrl = getYouTubeEmbedUrl(project.videoUrl);
    
    return (
      <div className="relative w-full">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-gray-800 bg-gray-900">
          <div className="bg-gray-800 h-8 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          
          <div className="relative h-72 lg:h-96 bg-black">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title={project.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/60">
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2">
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                  </svg>
                  <p>URL vidéo invalide</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // CARROUSEL D'IMAGES (par défaut)
  return (
    <div className="relative w-full">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-gray-800 bg-gray-900">
        <div className="bg-gray-800 h-8 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        
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
  );
}
