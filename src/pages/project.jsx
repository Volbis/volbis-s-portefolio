import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ProjectCarousel from '../components/Carroussel';
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
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-4"
        >
          <h1 className="relative py-10 text-5xl md:text-7xl font-black bg-clip-text text-white ">
            Mes Projets
          </h1>
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
