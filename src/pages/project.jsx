import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ProjectCarousel from '../components/Carroussel';
import profile from '../assets/images/Laye.png';
import GridProjects from '../components/gridProjects';

export default function Projects() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }; 

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
                                rotate: [0, 10, -10, 0],              // petite oscillation
                                opacity: [0.4, 0.8, 0.5, 0.7],        // pulsation plus vivante
                                filter: ["blur(20px)", "blur(35px)", "blur(20px)"], // respiration du halo
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

                {/* Header */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-center mb-16"
            >
                <motion.h1 
                    variants={itemVariants}
                    className="text-4xl md:text-6xl font-bold mb-6"
                >
                    Mes <span className="text-gradient">Projets</span>
                </motion.h1>
                <motion.p 
                    variants={itemVariants}
                    className="text-lg text-dark-secondary max-w-2xl mx-auto leading-relaxed"
                >
                    Une sélection de projets que j'ai créés. Chaque projet reflète ma passion pour le design et la technologie.
                </motion.p>
            </motion.div>


            {/* Desktop : Carrousel + Grille */}
            <div className="hidden md:block">
                <ProjectCarousel />
                <GridProjects />
            </div>

            {/* Mobile : Grille simple uniquement */}
            <div className="block md:hidden">
                <GridProjects />
            </div>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center mt"
            >
                <div className="p-8 max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold text-white-primary mb-4">
                        Vous avez un projet en tête ?
                    </h3>
                    <p className="text-dark-secondary mb-6 leading-relaxed">
                        Je suis toujours ouvert à de nouveaux défis et collaborations. 
                        Discutons de votre projet et créons quelque chose d'exceptionnel ensemble.
                    </p>
                    <motion.button
                        onClick={() => scrollToSection('contact')}
                        className="group relative w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-black font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-white/25 text-sm sm:text-base"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            👋 Me contacter
                        </span>
                    </motion.button>
                </div>
            </motion.div>
        </div>
    </div>
);
}
