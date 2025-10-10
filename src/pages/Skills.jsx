import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Frontend Development",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    gradientColors: "linear-gradient(135deg, rgb(59, 130, 246), rgb(6, 182, 212))",
    skills: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "JAVASCRIPT", icon: "js" },
      { name: "REACT", icon: "react" },
      { name: "NEXT JS", icon: "next" },
      { name: "ZUSTAND", icon: "zustand" },
      { name: "TAILWIND CSS", icon: "tailwind" },
      { name: "FRAMER MOTION", icon: "framer" }
    ]
  },
  {
    category: "Backend & Database",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    gradientColors: "linear-gradient(135deg, rgb(168, 85, 247), rgb(236, 72, 153))",
    skills: [
      { name: "NODE", icon: "node" },
      { name: "BUN", icon: "bun" },
      { name: "EXPRESS", icon: "express" },
      { name: "REST API", icon: "api" },
      { name: "ZOD VALIDATION", icon: "zod" },
      { name: "JWT/OAUTH", icon: "jwt" },
      { name: "SQL", icon: "sql" },
      { name: "POSTGRES", icon: "postgres" },
      { name: "PRISMA ORM", icon: "prisma" },
      { name: "DB MODELING", icon: "db" },
      { name: "STRIPE PAYMENTS", icon: "stripe" }
    ]
  },
  {
    category: "Tools & Technologies",
    color: "from-orange-500/20 to-yellow-500/20",
    borderColor: "border-orange-500/30",
    gradientColors: "linear-gradient(135deg, rgb(249, 115, 22), rgb(234, 179, 8))",
    skills: [
      { name: "JAVASCRIPT", icon: "js" },
      { name: "TYPESCRIPT", icon: "ts" },
      { name: "PYTHON", icon: "python" },
      { name: "GO", icon: "go" },
      { name: "REACT NATIVE", icon: "react" },
      { name: "GIT", icon: "git" },
      { name: "GITHUB", icon: "github" },
      { name: "LINUX", icon: "linux" },
      { name: "WORDPRESS", icon: "wordpress" },
      { name: "VPS", icon: "server" },
      { name: "VERCEL", icon: "vercel" }
    ]
  },
  {
    category: "Design & UI/UX",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    gradientColors: "linear-gradient(135deg, rgb(34, 197, 94), rgb(16, 185, 129))",
    skills: [
      { name: "UX/UI DESIGN", icon: "design" },
      { name: "PRODUCT DESIGN", icon: "product" },
      { name: "FIGMA", icon: "figma" },
      { name: "ADOBE XD", icon: "xd" },
      { name: "WIREFRAME", icon: "wireframe" },
      { name: "DOM", icon: "dom" },
      { name: "UNIT TEST", icon: "test" },
      { name: "PERFORMANCE OPTIMIZE", icon: "performance" },
      { name: "SSR", icon: "ssr" }
    ]
  }
];

// Icône par défaut (étoile)
const DefaultIcon = ({ gradientId }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-80"
  >
    <path
      d="M11.5268 2.29489C11.5706 2.20635 11.6383 2.13183 11.7223 2.07972C11.8062 2.02761 11.903 2 12.0018 2C12.1006 2 12.1974 2.02761 12.2813 2.07972C12.3653 2.13183 12.433 2.20635 12.4768 2.29489L14.7868 6.97389C14.939 7.28186 15.1636 7.5483 15.4414 7.75035C15.7192 7.95239 16.0419 8.08401 16.3818 8.13389L21.5478 8.88989C21.6457 8.90408 21.7376 8.94537 21.8133 9.00909C21.8889 9.07282 21.9452 9.15644 21.9758 9.2505C22.0064 9.34456 22.0101 9.4453 21.9864 9.54133C21.9627 9.63736 21.9126 9.72485 21.8418 9.79389L18.1058 13.4319C17.8594 13.672 17.6751 13.9684 17.5686 14.2955C17.4622 14.6227 17.4369 14.9708 17.4948 15.3099L18.3768 20.4499C18.3941 20.5477 18.3835 20.6485 18.3463 20.7406C18.3091 20.8327 18.2467 20.9125 18.1663 20.9709C18.086 21.0293 17.9908 21.0639 17.8917 21.0708C17.7926 21.0777 17.6935 21.0566 17.6058 21.0099L12.9878 18.5819C12.6835 18.4221 12.345 18.3386 12.0013 18.3386C11.6576 18.3386 11.3191 18.4221 11.0148 18.5819L6.3978 21.0099C6.31013 21.0563 6.2112 21.0772 6.11225 21.0701C6.0133 21.0631 5.91832 21.0285 5.83809 20.9701C5.75787 20.9118 5.69563 20.8321 5.65846 20.7401C5.62128 20.6482 5.61066 20.5476 5.6278 20.4499L6.5088 15.3109C6.567 14.9716 6.54178 14.6233 6.43534 14.2959C6.32889 13.9686 6.14441 13.672 5.8978 13.4319L2.1618 9.79489C2.09039 9.72593 2.03979 9.63829 2.01576 9.54197C1.99173 9.44565 1.99524 9.34451 2.02588 9.25008C2.05652 9.15566 2.11307 9.07174 2.18908 9.00788C2.26509 8.94402 2.3575 8.90279 2.4558 8.88889L7.6208 8.13389C7.96106 8.08439 8.28419 7.95295 8.56238 7.75088C8.84058 7.54881 9.0655 7.28216 9.2178 6.97389L11.5268 2.29489Z"
      fill={`url(#${gradientId})`}
      stroke={`url(#${gradientId})`}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Icône Code/HTML
const CodeIcon = ({ gradientId }) => (
  <svg 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-80"
  >
    <path d="m18 16 4-4-4-4" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m6 8-4 4 4 4" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m14.5 4-5 16" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Map des icônes
const iconMap = {
  html: CodeIcon,
  css: DefaultIcon,
  js: CodeIcon,
  react: DefaultIcon,
  next: DefaultIcon,
  zustand: DefaultIcon,
  tailwind: DefaultIcon,
  framer: DefaultIcon,
  node: DefaultIcon,
  bun: DefaultIcon,
  express: DefaultIcon,
  api: DefaultIcon,
  zod: DefaultIcon,
  jwt: DefaultIcon,
  sql: DefaultIcon,
  postgres: DefaultIcon,
  prisma: DefaultIcon,
  db: DefaultIcon,
  stripe: DefaultIcon,
  ts: DefaultIcon,
  python: DefaultIcon,
  go: DefaultIcon,
  git: DefaultIcon,
  github: DefaultIcon,
  linux: DefaultIcon,
  wordpress: DefaultIcon,
  server: DefaultIcon,
  vercel: DefaultIcon,
  design: DefaultIcon,
  product: DefaultIcon,
  figma: DefaultIcon,
  xd: DefaultIcon,
  wireframe: DefaultIcon,
  dom: DefaultIcon,
  test: DefaultIcon,
  performance: DefaultIcon,
  ssr: DefaultIcon,
};


const SkillBadge = ({ skill, index, gradientColors }) => {
  const gradientId = `gradient-${skill.name.replace(/\s+/g, '-')}`;
  
  // Récupérer l'icône correspondante ou utiliser l'icône par défaut
  const IconComponent = iconMap[skill.icon] || DefaultIcon;
  
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group relative overflow-hidden"
    >
      {/* Bordure avec gradient subtil */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ 
          background: gradientColors,
          padding: '1px'
        }}
      />
      
      {/* Contenu du badge */}
      <span className="flex items-center justify-center gap-2 relative px-4 py-3 m-1 rounded-full
        dark:bg-[#0a0a0a] bg-neutral-50/60
        border border-white/10 dark:border-white/10
        transition-all duration-300
        group-hover:border-white/30 dark:group-hover:border-white/30
        group-hover:shadow-lg group-hover:shadow-black/20
        group-hover:scale-[1.02]
        backdrop-blur-sm"
      >
        {/* Icône avec gradient */}
        <span className="relative flex-shrink-0 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-105">
          <svg width="0" height="0">
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                {gradientColors.match(/rgb\(([^)]+)\)/g)?.slice(0, 2).map((color, i) => (
                  <stop key={i} offset={`${i * 100}%`} stopColor={color} />
                )) || (
                  <>
                    <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                    <stop offset="100%" stopColor="rgb(6, 182, 212)" />
                  </>
                )}
              </linearGradient>
            </defs>
          </svg>
          <IconComponent gradientId={gradientId} />
        </span>

        {/* Texte */}
        <span className="text-sm font-semibold
          dark:text-white text-neutral-950
          transition-all duration-300
          group-hover:tracking-normal"
        >
          {skill.name}
        </span>
      </span>

      {/* Effet de lueur au hover */}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${gradientColors.match(/rgb\(([^)]+)\)/)?.[0] || 'rgb(59, 130, 246)'}15, transparent 70%)`,
          filter: 'blur(20px)'
        }}
      />
    </motion.button>
  );
};



const SkillCategory = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="w-full"
    >
      {/* Ligne de connexion pour desktop */}
      {/* <div className="hidden lg:flex justify-center mb-6">
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1.2, 
            delay: index * 0.15 + 0.2,
            ease: "easeInOut"
          }}
          className={`w-px h-20 bg-gradient-to-b ${category.color} origin-top opacity-40`}
        />
      </div> */}

      {/* Container de la catégorie */}
      <div className="relative">
        {/* Titre de catégorie */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
          className="flex justify-center mb-8"
        >
          <div className="group relative inline-flex items-center justify-center overflow-visible rounded-xl transition-all duration-300 hover:scale-[1.03] active:scale-95">
            {/* Gradient de fond principal */}
            <div 
              className="absolute inset-0 rounded-xl opacity-90"
              style={{ 
                background: `radial-gradient(65% 65% at 50% 100%, ${category.gradientColors.match(/rgb\(([^)]+)\)/)?.[0]}99 0%, ${category.gradientColors.match(/rgb\(([^)]+)\)/)?.[0]}00 100%), ${category.gradientColors}`
              }}
            />
            
            {/* Bordure brillante */}
            <div className="absolute inset-[1px] rounded-xl bg-gradient-to-b from-white/30 via-white/10 to-transparent" />
            
            {/* Fond intérieur */}
            <div 
              className="absolute inset-[2px] rounded-[11px]"
              style={{ 
                background: `radial-gradient(65% 65% at 50% 100%, ${category.gradientColors.match(/rgb\(([^)]+)\)/)?.[0]}CC 0%, ${category.gradientColors.match(/rgb\(([^)]+)\)/)?.[0]}66 100%), ${category.gradientColors}`
              }}
            />

            {/* Coin plié - Sans partie blanche */}
            <div className="absolute top-0 right-0 h-5 w-5 transition-all duration-500 ease-out group-hover:-mt-5 group-hover:-mr-5 z-10">
              {/* Fond du coin plié avec gradient plus sombre */}
              <div 
                className="absolute inset-0 rounded-bl-[8px] shadow-lg overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${category.gradientColors.match(/rgb\(([^)]+)\)/)?.[0]}BB 0%, ${category.gradientColors.match(/rgb\(([^)]+)\)/)?.[0]}77 100%)`,
                  boxShadow: `0 2px 8px ${category.gradientColors.match(/rgb\(([^)]+)\)/)?.[0]}44, inset -1px -1px 3px rgba(0,0,0,0.2)`
                }}
              />
            </div>

            {/* Lueur externe au hover */}
            <div 
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
              style={{
                background: `radial-gradient(circle at center, ${category.gradientColors.match(/rgb\(([^)]+)\)/)?.[0]}66 0%, transparent 70%)`
              }}
            />

            {/* Particules flottantes - Améliorées */}
            <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none z-[1]">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bottom-0 w-1 h-1 bg-white/80 rounded-full opacity-0 animate-float-up shadow-sm"
                  style={{
                    left: `${12 + i * 12}%`,
                    animationDuration: `${1.8 + Math.random() * 0.8}s`,
                    animationDelay: `${Math.random() * 0.6}s`,
                    opacity: 0.7 + Math.random() * 0.3,
                    boxShadow: '0 0 4px rgba(255,255,255,0.5)'
                  }}
                />
              ))}
            </div>

            {/* Contenu */}
            <div className="relative z-[2] px-8 py-3.5">
              <h3 className="text-lg md:text-xl font-bold text-white text-center whitespace-nowrap transition-all duration-200 drop-shadow-lg">
                {category.category}
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Grille de compétences */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto px-4">
          {category.skills.map((skill, skillIndex) => (
            <SkillBadge
              key={skill.name}
              skill={skill}
              index={skillIndex}
              gradientColors={category.gradientColors}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  // Injection du CSS pour l'animation des particules
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float-up {
        0% {
          transform: translateY(0);
          opacity: 0.6;
        }
        85% {
          opacity: 0;
        }
        100% {
          transform: translateY(-55px);
          opacity: 0;
        }
      }
      .animate-float-up {
        animation: float-up infinite ease-in-out;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="min-h-screen py-4 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Mes <span className="text-gradient">Skills</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-dark-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Technologies et outils que je maîtrise pour créer des expériences numériques exceptionnelles
          </motion.p>
        </motion.div>

        {/* Arbre de compétences */}
        <div className="relative space-y-16 md:space-y-20">
          {/* Ligne centrale pour desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-0.5 h-full bg-gradient-to-b from-transparent via-blue-500/20 via-purple-500/20 via-orange-500/20 to-transparent origin-top"
            />
          </div>

          {/* Catégories de compétences */}
          {skillsData.map((category, index) => (
            <SkillCategory 
              key={category.category} 
              category={category} 
              index={index}
            />
          ))}
        </div>

        {/* Section finale - Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-32 flex justify-center items-center px-4 py-12"
        >
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ 
              duration: 0.48, 
              ease: [0.23, 1, 0.32, 1] 
            }}
            className="relative group w-full max-w-3xl mx-auto"
          >
            {/* Carte principale */}
            <div className="relative flex flex-col gap-6 p-8 md:p-10 lg:p-12 rounded-3xl text-white overflow-hidden border border-white/10 backdrop-blur-sm">
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icône statique */}
              <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-lg"
                >
                  <path 
                    d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" 
                    fill="white" 
                    fillOpacity="0.95"
                  />
                </svg>
              </div>

              {/* Contenu */}
              <div className="relative z-10 space-y-5">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  Toujours en apprentissage
                </h3>
                <p className="text-white/95 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">
                  La technologie évolue constamment, et moi aussi. Je suis toujours curieux d'apprendre 
                  de nouvelles technologies et d'améliorer mes compétences existantes pour rester à la 
                  pointe du développement web moderne.
                </p>
              </div>

              {/* Lien optionnel */}
              <motion.a
                href="#contact"
                whileHover={{ x: 6, scale: 1.02 }}
                className="relative z-10 text-orange-800 font-semibold text-lg inline-flex items-center gap-2 hover:underline w-fit group/link"
              >
                Travaillons ensemble
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  →
                </motion.span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}