import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

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

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Une plateforme e-commerce moderne avec panier, paiement intégré et gestion des stocks en temps réel.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Tailwind', 'Supabase', 'Stripe'],
      demoUrl: 'https://demo.com',
      codeUrl: 'https://github.com/volbis/ecommerce'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Tableau de bord interactif avec graphiques animés pour visualiser les données business en temps réel.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Framer Motion', 'Chart.js', 'PostgreSQL'],
      demoUrl: 'https://demo.com',
      codeUrl: 'https://github.com/volbis/dashboard'
    },
    {
      title: 'Task Management App',
      description: 'Application de gestion de tâches collaborative avec drag & drop et notifications en temps réel.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Radix UI', 'Supabase', 'WebSockets'],
      demoUrl: 'https://demo.com',
      codeUrl: 'https://github.com/volbis/tasks'
    },
    {
      title: 'Social Media Clone',
      description: 'Clone de réseau social avec posts, likes, commentaires et système de followers complet.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Tailwind', 'Supabase', 'Real-time'],
      demoUrl: 'https://demo.com',
      codeUrl: 'https://github.com/volbis/social'
    },
    {
      title: 'Weather App',
      description: 'Application météo avec géolocalisation, prévisions 7 jours et animations fluides.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'OpenWeather API', 'Framer Motion'],
      demoUrl: 'https://demo.com',
      codeUrl: 'https://github.com/volbis/weather'
    },
    {
      title: 'Portfolio Designer',
      description: 'Générateur de portfolios avec templates personnalisables et déploiement automatique.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Tailwind', 'Vercel API', 'Templates'],
      demoUrl: 'https://demo.com',
      codeUrl: 'https://github.com/volbis/portfolio-generator'
    }
  ];

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
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
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
            className="text-xl text-dark-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Une sélection de projets que j'ai créés, allant des applications web modernes 
            aux outils innovants. Chaque projet reflète ma passion pour le design et la technologie.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { number: "15+", label: "Projets terminés" },
            { number: "5+", label: "Technologies" },
            { number: "100%", label: "Satisfaction client" },
            { number: "24/7", label: "Support technique" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-dark-background/30 backdrop-blur-sm border border-dark-secondary/20 rounded-xl hover:border-dark-primary/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-dark-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-dark-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
              index={index}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-dark-background/30 backdrop-blur-sm border border-dark-secondary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-dark-primary mb-4">
              Vous avez un projet en tête ?
            </h3>
            <p className="text-dark-secondary mb-6 leading-relaxed">
              Je suis toujours ouvert à de nouveaux défis et collaborations. 
              Discutons de votre projet et créons quelque chose d'exceptionnel ensemble.
            </p>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="bg-dark-primary text-dark-background font-bold py-3 px-8 rounded-lg hover:bg-dark-accent transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Démarrer un projet
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
