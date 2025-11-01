"use client";

import { motion } from "framer-motion";

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
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white/10 text-white text-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            Code
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(249, 115, 22, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Démo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function GridProjects() {
  return (
    <section className="py-12 md:py-2 text-white relative">
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
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
