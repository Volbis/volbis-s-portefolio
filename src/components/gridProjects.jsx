"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { getAllProjects } from "../data/projects";
import ProjectModal from "./ProjectModal";

const projects = getAllProjects();

// Illustrations personnalisées pour chaque projet
function ProjectIllustration({ project }) {
  const illustrations = {
    "ParkoNova": {
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18"/>
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
          <line x1="10" x2="10" y1="11" y2="17"/>
          <line x1="14" x2="14" y1="11" y2="17"/>
        </svg>
      ),
      shapes: <><rect x="15%" y="20%" width="70" height="70" rx="8" fill="white" opacity="0.07"/><circle cx="25%" cy="75%" r="35" fill="white" opacity="0.05"/></>
    },
    "Maquis Dev": {
      gradient: "from-red-500 via-orange-500 to-amber-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
          <path d="M7 2v20"/>
          <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
        </svg>
      ),
      shapes: <><circle cx="30%" cy="30%" r="50" fill="white" opacity="0.08"/><rect x="60%" y="50%" width="60" height="60" rx="8" fill="white" opacity="0.05"/></>
    },
    "VendorrApp": {
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
          <path d="M3 6h18"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
      ),
      shapes: <><polygon points="20,20 70,25 65,70 15,65" fill="white" opacity="0.06"/><circle cx="80%" cy="20%" r="40" fill="white" opacity="0.07"/></>
    },
    "Vendor": {
      gradient: "from-blue-600 via-indigo-600 to-purple-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h3"/>
          <path d="M17 6h.01"/>
          <rect width="18" height="12" x="3" y="4" rx="2"/>
          <circle cx="12" cy="13" r="5"/>
          <path d="M12 13h.01"/>
        </svg>
      ),
      shapes: <><circle cx="25%" cy="75%" r="55" fill="white" opacity="0.08"/><rect x="55%" y="15%" width="75" height="75" rx="12" fill="white" opacity="0.06" transform="rotate(20)"/></>
    },
    "Climbie": {
      gradient: "from-teal-600 via-emerald-600 to-green-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/>
          <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/>
          <path d="M12 3v6"/>
          <path d="M9 14h6"/>
          <path d="M9 18h6"/>
        </svg>
      ),
      shapes: <><rect x="20%" y="20%" width="60" height="60" rx="10" fill="white" opacity="0.08" transform="rotate(25)"/><circle cx="70%" cy="70%" r="45" fill="white" opacity="0.05"/></>
    },
    "ESATIC Register": {
      gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
          <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
          <path d="M10 9H8"/>
          <path d="M16 13H8"/>
          <path d="M16 17H8"/>
        </svg>
      ),
      shapes: <><circle cx="25%" cy="25%" r="55" fill="white" opacity="0.07"/><rect x="60%" y="60%" width="70" height="70" rx="8" fill="white" opacity="0.06"/></>
    },
    "RestauPilot": {
      gradient: "from-rose-500 via-red-500 to-orange-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
          <path d="M7 2v20"/>
          <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
        </svg>
      ),
      shapes: <><polygon points="25,15 65,20 60,70 20,65" fill="white" opacity="0.07"/><circle cx="75%" cy="30%" r="50" fill="white" opacity="0.05"/></>
    },
    "SmarterCIE": {
      gradient: "from-yellow-500 via-lime-500 to-green-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      shapes: <><circle cx="30%" cy="70%" r="45" fill="white" opacity="0.08"/><polygon points="60,10 90,40 75,75 45,60" fill="white" opacity="0.05"/></>
    },
    "AI App 2": {
      gradient: "from-slate-500 via-gray-500 to-zinc-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8V4H8"/>
          <rect width="16" height="12" x="4" y="8" rx="2"/>
          <path d="M2 14h2"/>
          <path d="M20 14h2"/>
          <path d="M15 13v2"/>
          <path d="M9 13v2"/>
        </svg>
      ),
      shapes: <><rect x="15%" y="15%" width="70" height="70" rx="10" fill="white" opacity="0.09" transform="rotate(30)"/><circle cx="75%" cy="75%" r="40" fill="white" opacity="0.06"/></>
    },
    "App 1 - Jeu Vidéo": {
      gradient: "from-fuchsia-500 via-purple-500 to-indigo-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 11h4"/>
          <path d="M8 9v4"/>
          <path d="M15 12h.01"/>
          <path d="M18 10h.01"/>
          <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/>
        </svg>
      ),
      shapes: <><circle cx="25%" cy="25%" r="50" fill="white" opacity="0.08"/><circle cx="75%" cy="75%" r="60" fill="white" opacity="0.05"/></>
    }
  };

  const config = illustrations[project.title] || {
    gradient: "from-gray-500 via-slate-500 to-zinc-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
      </svg>
    ),
    shapes: <circle cx="50%" cy="50%" r="50" fill="white" opacity="0.05"/>
  };

  return (
    <div className="relative w-full h-48 md:h-64 overflow-hidden">
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
      <div className="absolute top-4 right-4">
        <motion.div
          className="text-white drop-shadow-2xl"
          initial={{ scale: 0.8, opacity: 0, x: 20, y: -20 }}
          animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.15, rotate: 5, transition: { duration: 0.3 } }}
        >
          <div className="scale-100">
            {config.icon}
          </div>
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
      whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-black group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

      <ProjectIllustration project={project} />

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
    <section id="grid-projects" className="py-12 md:py-2 text-white relative">
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
