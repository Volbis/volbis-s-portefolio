"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { getFeaturedProjects } from "../data/projects";
import ProjectModal from "./ProjectModal";
import { useState } from "react";
import EyeIcon from "../assets/eye.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const projects = getFeaturedProjects(); 

// Illustrations personnalisées pour chaque projet
function ProjectIllustration({ project }) {
  const illustrations = {
    "ParkoNova": {
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2"/>
          <path d="M9 8h6"/>
          <path d="M9 12h6"/>
          <path d="M9 16h6"/>
        </svg>
      ),
      shapes: <><circle cx="20%" cy="20%" r="60" fill="white" opacity="0.1"/><circle cx="80%" cy="80%" r="40" fill="white" opacity="0.05"/></>
    },
    "Supermarket": {
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="21" r="1"/>
          <circle cx="19" cy="21" r="1"/>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
        </svg>
      ),
      shapes: <><rect x="10%" y="15%" width="80" height="80" rx="10" fill="white" opacity="0.08" transform="rotate(15)"/><circle cx="70%" cy="30%" r="50" fill="white" opacity="0.05"/></>
    },
    "GL Bot": {
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8V4H8"/>
          <rect width="16" height="12" x="4" y="8" rx="2"/>
          <path d="M2 14h2"/>
          <path d="M20 14h2"/>
          <path d="M15 13v2"/>
          <path d="M9 13v2"/>
        </svg>
      ),
      shapes: <><polygon points="30,10 60,30 40,60 10,40" fill="white" opacity="0.06"/><circle cx="75%" cy="25%" r="45" fill="white" opacity="0.08"/></>
    },
    "Abia Poubelle": {
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18"/>
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
          <line x1="10" x2="10" y1="11" y2="17"/>
          <line x1="14" x2="14" y1="11" y2="17"/>
        </svg>
      ),
      shapes: <><rect x="15%" y="20%" width="70" height="70" rx="8" fill="white" opacity="0.07"/><circle cx="25%" cy="75%" r="35" fill="white" opacity="0.05"/></>
    }
  };

  const config = illustrations[project.title] || illustrations["ParkoNova"];

  return (
    <div className="relative w-full h-64 sm:h-56 md:h-64 overflow-hidden">
      {/* Dégradé de fond */}
      <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-90`}></div>
      
      {/* Formes décoratives */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {config.shapes}
      </svg>

      {/* Grille de fond */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>

      {/* Icône principale */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-white drop-shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {config.icon}
        </motion.div>
      </div>

      {/* Overlay brillant */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10"></div>
    </div>
  );
}

function ProjectCard({ project, onClick }) {
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
      
      <ProjectIllustration project={project} />
      
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
            <motion.button
              onClick={onClick}
              className="px-2 py-1 bg-white/10 backdrop-blur-md text-white text-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center gap-2 cursor-pointer shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={EyeIcon} alt="eye" width="15" height="15" className="inline-block brightness-0 invert" />
              Voir le projet
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ProjectCarousel() {
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

  const handleNext = () => {
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const previousIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[previousIndex]);
  };

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
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          > 
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block"
            >
              <defs>
                <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ede6e3ff" />
                  <stop offset="100%" stopColor="#decdc5ff" />
                </linearGradient>
              </defs>
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill="url(#starGradient)"
                stroke="url(#starGradient)"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              /> 
            </svg>
            Ma sélection de projets
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
                <ProjectCard project={project} onClick={() => openModal(project)} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
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
