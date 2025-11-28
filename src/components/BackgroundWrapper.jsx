import React from 'react';
import { motion } from 'framer-motion';

const BackgroundWrapper = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gray-950">
      {/* Fond principal avec gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black -z-10" />
      
      {/* Effets d'arrière-plan animés */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {/* Orbe bleu flottant */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-blue-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.4, 0.1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Orbe violet flottant */}
        <motion.div
          className="absolute top-2/3 right-1/5 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-purple-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
            x: [0, -40, 0],
            y: [0, 25, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Orbe orange subtil */}
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 rounded-full blur-3xl"
          style={{ 
            backgroundColor: 'rgba(240, 161, 59, 0.06)' // Couleur orange thématique
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.05, 0.2, 0.05],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
        
        {/* Particules flottantes */}
        <motion.div
          className="absolute top-1/5 right-1/3 w-2 h-2 bg-white/20 rounded-full"
          animate={{
            y: [-10, -50, -10],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1.2, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute top-3/5 left-1/4 w-1.5 h-1.5 bg-gray-200/30 rounded-full"
          animate={{
            y: [5, 40, 5],
            opacity: [0.3, 0.7, 0.3],
            scale: [0.8, 1.5, 0.8]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/6 w-1 h-1 bg-white/25 rounded-full"
          animate={{
            y: [-5, -35, -5],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.6, 1.3, 0.6]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        />
        
        {/* Effet de mesh subtle */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      {/* Contenu */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundWrapper;