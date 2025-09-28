import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import profile from '../assets/images/Laye.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

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
                  scale: [1, 1.2, 0.9, 1],              // zoom fluide
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
              { count: 2500, label: "Abonnés LinkedIn", icon: "👥" }
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


        {/* Triple Slider Carousel - Style exact de l'image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full mx-auto flex justify-center"
        >
          <div className="w-full max-w-7xl mx-auto relative">
            {/* Masque central fixe - Card toujours au centre */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto">
              <div className="w-[450px] scale-110">
                <ProjectCard 
                  {...projects[0]}
                  index={0}
                />
              </div>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView="auto"
              centeredSlides={false}
              centerInsufficientSlides={false}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={true}
              loop={true}
              grabCursor={true}
              initialSlide={0}
              slideToClickedSlide={false}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: "auto",
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: "auto",
                  spaceBetween: 30,
                },
              }}
              className="triple-slider !pb-16 w-full opacity-50"
            >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full"
                >
                  <ProjectCard 
                    {...project}
                    index={index}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
          
          {/* Styles CSS pour Triple Slider exact comme l'image */}
          <style jsx>{`
            .triple-slider {
              padding: 40px 0;
              position: relative;
              overflow: visible;
              width: 100%;
              display: flex;
              justify-content: center;
            }
            
            .triple-slider .swiper {
              width: 100%;
              max-width: 100vw;
              display: flex;
              justify-content: center;
            }
            
            .triple-slider .swiper-wrapper {
              align-items: center;
              display: flex;
              justify-content: center;
              width: 100%;
            }
            
            .triple-slider .swiper-container {
              overflow: visible;
              text-align: center;
              width: 100%;
            }
            
            .triple-slider .swiper-slide {
              transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
              opacity: 1;
              transform: scale(0.8);
              width: 320px !important;
              display: flex;
              justify-content: center;
            }
            
            .triple-slider .swiper-slide-active {
              opacity: 0;
              transform: scale(0);
              z-index: 1;
              width: 0px !important;
              display: none;
            }
            
            .triple-slider .swiper-slide-prev,
            .triple-slider .swiper-slide-next {
              opacity: 1;
              transform: scale(0.9);
              z-index: 5;
              width: 350px !important;
            }
            
            .triple-slider .swiper-slide:hover:not(.swiper-slide-active) {
              transform: scale(0.95);
              opacity: 1;
            }
            
            .triple-slider .swiper-slide-active:hover {
              opacity: 0;
            }
            
            .triple-slider .swiper-pagination {
              bottom: 20px;
            }
            
            .triple-slider .swiper-pagination-bullet {
              width: 12px;
              height: 12px;
              background: rgba(240, 161, 59, 0.3);
              opacity: 0.6;
              border-radius: 50%;
              transition: all 0.3s ease;
            }
            
            .triple-slider .swiper-pagination-bullet-active {
              background: #F0A13B;
              opacity: 1;
              transform: scale(1.2);
            }
            
            .triple-slider .swiper-button-next,
            .triple-slider .swiper-button-prev {
              width: 60px;
              height: 60px;
              margin-top: -30px;
              background: linear-gradient(135deg, rgba(240, 161, 59, 0.2), rgba(240, 161, 59, 0.1));
              border: 2px solid rgba(240, 161, 59, 0.3);
              border-radius: 50%;
              color: #F0A13B;
              backdrop-filter: blur(15px);
              transition: all 0.4s ease;
              box-shadow: 0 8px 32px rgba(240, 161, 59, 0.1);
            }
            
            .triple-slider .swiper-button-next:hover,
            .triple-slider .swiper-button-prev:hover {
              background: linear-gradient(135deg, rgba(240, 161, 59, 0.4), rgba(240, 161, 59, 0.2));
              border-color: rgba(240, 161, 59, 0.6);
              transform: scale(1.1);
              box-shadow: 0 12px 40px rgba(240, 161, 59, 0.25);
            }
            
            .triple-slider .swiper-button-next::after,
            .triple-slider .swiper-button-prev::after {
              font-size: 20px;
              font-weight: 900;
            }
            
            .triple-slider .swiper-button-prev {
              left: -30px;
            }
            
            .triple-slider .swiper-button-next {
              right: -30px;
            }
            

            
            @media (max-width: 1024px) {
              .triple-slider .swiper-button-next,
              .triple-slider .swiper-button-prev {
                width: 50px;
                height: 50px;
                margin-top: -25px;
              }
              
              .triple-slider .swiper-button-prev {
                left: -10px;
              }
              
              .triple-slider .swiper-button-next {
                right: -10px;
              }
            }
            
            @media (max-width: 768px) {
              .triple-slider .swiper-button-next,
              .triple-slider .swiper-button-prev {
                display: none;
              }
              
              .triple-slider .swiper-slide {
                opacity: 1;
                transform: scale(1) !important;
                width: 100% !important;
              }
              
              .triple-slider .swiper-slide-active {
                transform: scale(1) !important;
                width: 100% !important;
              }
            }
          `}</style>
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
