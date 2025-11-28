import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/images/Laye.png';

export default function Profile() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen py-1 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Image de profil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center w-full h-auto mb-12 mt-18"
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute inset-11 rounded-full bg-gradient-to-r from-blue-500/40 via-purple-500/30 to-pink-500/40 blur-2xl opacity-70 -z-10"
              animate={{
                scale: [1, 1.2, 0.9, 1],              
                rotate: [0, 10, -10, 0],
                opacity: [0.4, 0.8, 0.5, 0.7],
                filter: ["blur(20px)", "blur(35px)", "blur(20px)"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.img 
              src={profile}
              alt="Albert Nahouo Coulibaly"
              className="w-44 h-44 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain mx-auto rounded-lg relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-8 max-w-4xl mx-auto"
        >
          {[
            { count: 15, label: "Projets terminés", icon: "🚀" },
            { count: 8, label: "Certifications obtenues", icon: "📜" },
            { count: 24, label: "Technologies", icon: "⚡" },
            { count: 5, label: "Utilisateurs impactés", icon: "⭐" },
            { count: 5, label: "Compétitions", icon: "🏆" },
            { count: 2500, label: "Abonnés LinkedIn", icon: "👥" },
            { count: 1088, label: "Contributions github", icon: "💻" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              className="flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-orange-600/5 backdrop-blur-sm border border-orange-300/20 rounded-full px-3 py-2 text-xs font-semibold"
            >
              <span className="text-sm">{stat.icon}</span>
              <span className="text-orange-400">+{stat.count}</span>
              <span className="text-slate-300">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
