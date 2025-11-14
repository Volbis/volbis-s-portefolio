"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { getAllProjects } from "../data/projects";
import ProjectModal from "./ProjectModal";

const projects = getAllProjects();

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

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
      />

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
