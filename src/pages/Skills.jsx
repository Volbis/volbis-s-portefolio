import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90, icon: "⚛️" },
      { name: "JavaScript", level: 85, icon: "🟨" },
      { name: "TypeScript", level: 80, icon: "🔷" },
      { name: "Tailwind CSS", level: 95, icon: "🎨" },
      { name: "Framer Motion", level: 85, icon: "🎭" },
    ]
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js", level: 75, icon: "🟢" },
      { name: "Supabase", level: 80, icon: "🔋" },
      { name: "PostgreSQL", level: 70, icon: "🐘" },
      { name: "REST APIs", level: 85, icon: "🔗" },
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", level: 90, icon: "🌿" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "Figma", level: 75, icon: "🎨" },
      { name: "Vercel", level: 80, icon: "▲" },
    ]
  }
];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-dark-background/50 backdrop-blur-sm border border-dark-secondary/20 rounded-xl p-6 hover:border-dark-primary/50 transition-all duration-300"
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{skill.icon}</span>
          <h3 className="text-lg font-semibold text-dark-text">{skill.name}</h3>
        </div>
        <span className="text-dark-primary font-bold">{skill.level}%</span>
      </div>
      
      <div className="w-full bg-dark-secondary/20 rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-primary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
      <div className="max-w-6xl mx-auto">
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
            Mes <span className="text-gradient">Compétences</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-dark-secondary max-w-2xl mx-auto"
          >
            Technologies et outils que j'utilise pour créer des expériences numériques exceptionnelles
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h2 className="text-2xl font-bold text-dark-primary mb-6 text-center">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <SkillCard 
                    key={skill.name} 
                    skill={skill} 
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-dark-background/30 backdrop-blur-sm border border-dark-secondary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-dark-primary mb-4">
              Toujours en apprentissage
            </h3>
            <p className="text-dark-secondary leading-relaxed">
              La technologie évolue constamment, et moi aussi. Je suis toujours curieux d'apprendre 
              de nouvelles technologies et d'améliorer mes compétences existantes pour rester à la 
              pointe du développement web moderne.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}