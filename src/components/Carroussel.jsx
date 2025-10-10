"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const projects = [
  {
    title: "Crypto Dashboard",
    description: "Un dashboard moderne avec suivi en temps réel des cryptomonnaies et analyses prédictives.",
    image: "https://picsum.photos/id/1015/800/500",
    github: "#",
    demo: "#",
    tech: ["React", "Tailwind", "Web3", "Chart.js"],
  },
  {
    title: "AcadHub",
    description: "Application de gestion académique complète avec Qt et base de données optimisée.",
    image: "https://picsum.photos/id/1016/800/500",
    github: "#",
    demo: "#",
    tech: ["Qt", "C++", "SQLite", "QML"],
  },
  {
    title: "ReproConnect",
    description: "Application santé reproductive intelligente avec suivi personnalisé et notifications.",
    image: "https://picsum.photos/id/1018/800/500",
    github: "#",
    demo: "#",
    tech: ["Python", "Flask", "MySQL", "AI"],
  },
  {
    title: "E-Commerce Platform",
    description: "Plateforme e-commerce moderne avec panier intelligent et paiements sécurisés.",
    image: "https://picsum.photos/id/1019/800/500",
    github: "#",
    demo: "#",
    tech: ["React", "Node.js", "Stripe", "MongoDB"],
  },
  {
    title: "Task Manager Pro",
    description: "Gestionnaire de tâches collaboratif avec drag & drop et synchronisation temps réel.",
    image: "https://picsum.photos/id/1020/800/500",
    github: "#",
    demo: "#",
    tech: ["Vue.js", "Socket.io", "PostgreSQL", "Redis"],
  },
];

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-black group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
      
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 sm:h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-white text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-200 text-sm mb-4 leading-relaxed line-clamp-2">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-white/10 text-white text-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Code
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(249, 115, 22, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Démo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ProjectCarousel() {
  return (
    <section className="py-20 text-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            🚀 Ma sélection de projets
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Une sélection de projets innovants qui démontrent mes compétences techniques et ma créativité
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            loopFillGroupWithBlank={false}
            speed={1200}
            autoplay={{ 
              delay: 2700, 
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              reverseDirection: false,
              stopOnLastSlide: false
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 3
            }}
            navigation={true}
            grabCursor={true}
            slideToClickedSlide={true}
            allowTouchMove={true}
            watchSlidesProgress={true}
            watchSlidesVisibility={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 20,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 25,
                centeredSlides: true,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: true,
              }
            }}
            className="project-swiper !pb-16"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Styles CSS optimisés pour la carte centrale dominante */}
      <style jsx>{`
        .project-swiper {
          padding: 20px 0;
          overflow: visible;
        }
        
        .project-swiper .swiper-slide {
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          opacity: 0.5;
          transform: scale(0.75) translateY(30px);
          filter: blur(2px);
          pointer-events: auto;
          cursor: pointer;
        }
        
        .project-swiper .swiper-slide:hover {
          cursor: pointer;
        }
        
        .project-swiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1.22) translateY(0);
          z-index: 20;
          filter: blur(0);
          pointer-events: auto;
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
        }
        
        .project-swiper .swiper-slide-next,
        .project-swiper .swiper-slide-prev {
          opacity: 0.7;
          transform: scale(0.85) translateY(15px);
          filter: blur(1px);
          z-index: 10;
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
        }
        
        .project-swiper .swiper-slide:hover:not(.swiper-slide-active) {
          opacity: 0.8;
          transform: scale(0.8) translateY(20px);
          filter: blur(0.5px);
          transition: all 0.6s ease;
          cursor: pointer;
        }
        
        .project-swiper .swiper-slide-active:hover {
          transform: scale(1.28) translateY(-5px);
          transition: all 0.6s ease;
          cursor: pointer;
        }
        
        /* Effet de perspective pour les cartes latérales */
        .project-swiper .swiper-slide:not(.swiper-slide-active) {
          transform-origin: center center;
        }
        
        .project-swiper .swiper-slide-duplicate-active {
          opacity: 1;
          transform: scale(1.25) translateY(0);
          z-index: 20;
          filter: blur(0);
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
        }
        
        .project-swiper .swiper-pagination {
          bottom: 0px;
          padding: 20px 0;
        }
        
        .project-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border: 1px solid transparent;
        }
        
        .project-swiper .swiper-pagination-bullet-active {
          background: rgba(255, 255, 255, 1);
          transform: scale(1.2);
          border-color: rgba(255, 255, 255, 0.6);
          box-shadow: 0 3px 12px rgba(255, 255, 255, 0.3);
        }
        
        .project-swiper .swiper-button-next,
        .project-swiper .swiper-button-prev {
          color: transparent;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 20px;
          width: 50px;
          height: 50px;
          top: 50%;
          margin-top: 0;
          transform: translateY(-50%);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15), 
                      0 4px 16px rgba(0, 0, 0, 0.12),
                      inset 0 1px 0 rgba(255, 255, 255, 0.2);
          z-index: 30;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          cursor: pointer;
          overflow: hidden;
        }
        
        .project-swiper .swiper-button-next {
          right: 20px;
        }
        
        .project-swiper .swiper-button-prev {
          left: 20px;
        }
        
        .project-swiper .swiper-button-next:hover,
        .project-swiper .swiper-button-prev:hover {
          background: linear-gradient(135deg, rgba(249, 115, 22, 0.3), rgba(234, 88, 12, 0.2));
          border-color: rgba(249, 115, 22, 0.4);
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 12px 40px rgba(249, 115, 22, 0.25), 
                      0 6px 20px rgba(0, 0, 0, 0.15),
                      inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }
        
        .project-swiper .swiper-button-next::after,
        .project-swiper .swiper-button-prev::after {
          display: none;
        }
        
        .project-swiper .swiper-button-next::before,
        .project-swiper .swiper-button-prev::before {
          content: '';
          display: flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white' stroke-width='2.5'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M9 5l7 7-7 7'/%3E%3C/svg%3E") no-repeat center center;
          background-size: 18px 18px;
          transition: all 0.3s ease;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        
        .project-swiper .swiper-button-prev::before {
          transform: translate(-50%, -50%) rotate(180deg);
        }
        
        .project-swiper .swiper-button-next:hover::before,
        .project-swiper .swiper-button-prev:hover::before {
          transform: translate(-50%, -50%) scale(1.1);
          filter: drop-shadow(0 4px 8px rgba(249, 115, 22, 0.3));
        }
        
        .project-swiper .swiper-button-prev:hover::before {
          transform: translate(-50%, -50%) rotate(180deg) scale(1.1);
        }
        
        .project-swiper .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
          pointer-events: none;
        }
        
        /* Responsive optimizations */
        @media (max-width: 1024px) {
          .project-swiper .swiper-button-next,
          .project-swiper .swiper-button-prev {
            width: 45px;
            height: 45px;
            border-radius: 18px;
          }
          
          .project-swiper .swiper-button-next {
            right: 15px;
          }
          
          .project-swiper .swiper-button-prev {
            left: 15px;
          }
          
          .project-swiper .swiper-button-next::before,
          .project-swiper .swiper-button-prev::before {
            width: 16px;
            height: 16px;
          }
          
          .project-swiper .swiper-slide-active {
            transform: scale(1.1) translateY(0);
          }
          
          .project-swiper .swiper-slide {
            transform: scale(0.8) translateY(20px);
          }
          
          .project-swiper .swiper-slide-next,
          .project-swiper .swiper-slide-prev {
            transform: scale(0.88) translateY(10px);
          }
        }
        
        @media (max-width: 768px) {
          .project-swiper .swiper-button-next,
          .project-swiper .swiper-button-prev {
            width: 40px;
            height: 40px;
            border-radius: 16px;
          }
          
          .project-swiper .swiper-button-next {
            right: 10px;
          }
          
          .project-swiper .swiper-button-prev {
            left: 10px;
          }
          
          .project-swiper .swiper-button-next:hover,
          .project-swiper .swiper-button-prev:hover {
            transform: translateY(-50%) scale(1.05);
          }
          
          .project-swiper .swiper-button-next::before,
          .project-swiper .swiper-button-prev::before {
            width: 14px;
            height: 14px;
          }
          
          .project-swiper .swiper-slide {
            transform: scale(1) translateY(0);
            opacity: 1;
            filter: none;
          }
          
          .project-swiper .swiper-slide-active {
            transform: scale(1) translateY(0);
            opacity: 1;
            filter: none;
          }
          
          .project-swiper .swiper-slide-next,
          .project-swiper .swiper-slide-prev {
            transform: scale(1) translateY(0);
            opacity: 1;
            filter: none;
          }
          
          .project-swiper .swiper-slide-active:hover {
            transform: scale(1.05) translateY(-3px);
          }
        }
        
        @media (max-width: 640px) {
          .project-swiper {
            padding: 20px 10px;
          }
          
          .project-swiper .swiper-slide {
            transform: scale(1) translateY(0);
            opacity: 1;
            filter: none;
          }
          
          .project-swiper .swiper-slide-active {
            transform: scale(1) translateY(0);
            opacity: 1;
            filter: none;
          }
          
          .project-swiper .swiper-slide-next,
          .project-swiper .swiper-slide-prev {
            transform: scale(1) translateY(0);
            opacity: 1;
            filter: none;
          }
        }
        
        @media (max-width: 480px) {
          .project-swiper .swiper-button-next,
          .project-swiper .swiper-button-prev {
            width: 35px;
            height: 35px;
            border-radius: 14px;
          }
          
          .project-swiper .swiper-button-next {
            right: 8px;
          }
          
          .project-swiper .swiper-button-prev {
            left: 8px;
          }
          
          .project-swiper .swiper-button-next::before,
          .project-swiper .swiper-button-prev::before {
            width: 12px;
            height: 12px;
          }
          
          .project-swiper {
            padding: 20px 10px;
            margin: 0 -10px;
          }
          
          .project-swiper .swiper-slide {
            transform: scale(1);
            opacity: 1;
            filter: none;
          }
          
          .project-swiper .swiper-slide-active {
            transform: scale(1);
            opacity: 1;
            filter: none;
          }
          
          .project-swiper .swiper-slide-next,
          .project-swiper .swiper-slide-prev {
            transform: scale(1);
            opacity: 1;
            filter: none;
          }
          
          .project-swiper .swiper-slide-active:hover {
            transform: scale(1.02);
          }
        }
        
        @media (max-width: 380px) {
          .project-swiper .swiper-slide {
            transform: scale(1);
            opacity: 1;
            filter: none;
          }
          
          .project-swiper .swiper-slide-active {
            transform: scale(1);
            opacity: 1;
            filter: none;
          }
          
          .project-swiper .swiper-button-next,
          .project-swiper .swiper-button-prev {
            width: 30px;
            height: 30px;
            border-radius: 12px;
          }
          
          .project-swiper .swiper-button-next::before,
          .project-swiper .swiper-button-prev::before {
            width: 10px;
            height: 10px;
          }
          
          .project-swiper {
            padding: 15px 5px;
          }
        }
        
        /* Animation pour les transitions */
        .project-swiper .swiper-slide {
          will-change: transform, opacity, filter;
        }
        
        /* Assure que les cartes latérales sont cliquables avec curseur main */
        .project-swiper .swiper-slide:not(.swiper-slide-active) {
          cursor: pointer;
        }
        
        .project-swiper .swiper-slide:not(.swiper-slide-active):hover {
          opacity: 0.85 !important;
          cursor: pointer;
        }
        
        /* Curseur main pour toutes les cartes */
        .project-swiper .swiper-slide * {
          cursor: pointer;
        }
        
        /* Curseur main pour les éléments interactifs à l'intérieur des cartes */
        .project-swiper .swiper-slide a {
          cursor: pointer;
        }
        
        .project-swiper .swiper-slide button {
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}
