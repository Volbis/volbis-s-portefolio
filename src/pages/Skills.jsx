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

const DefaultIcon = ({ gradientId }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-90"
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

const CodeIcon = ({ gradientId }) => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-90"
  >
    <path d="m18 16 4-4-4-4" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m6 8-4 4 4 4" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m14.5 4-5 16" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

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
  const IconComponent = iconMap[skill.icon] || DefaultIcon;
  
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.03,
        ease: [0.34, 1.56, 0.64, 1]
      }}
      whileHover={{ scale: 1.08, y: -4 }}
      whileTap={{ scale: 0.96 }}
      className="group relative"
    >
      {/* Lueur de fond */}
      <div 
        className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{
          background: `radial-gradient(circle at center, ${gradientColors.match(/rgb\(([^)]+)\)/)?.[0]}40, transparent 70%)`
        }}
      />
      
      {/* Badge principal */}
      <div className="relative flex items-center gap-2.5 px-5 py-3.5 rounded-2xl
        bg-gradient-to-br from-white/[0.08] to-white/[0.02]
        border border-white/[0.12]
        backdrop-blur-xl
        shadow-lg shadow-black/5
        group-hover:border-white/[0.25]
        group-hover:from-white/[0.12] group-hover:to-white/[0.04]
        transition-all duration-300"
      >
        {/* Icône */}
        <span className="relative flex-shrink-0 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
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
        <span className="text-sm font-bold text-white/95 whitespace-nowrap
          group-hover:text-white transition-colors duration-300"
        >
          {skill.name}
        </span>
      </div>
    </motion.button>
  );
};

const SkillCategory = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="relative"
    >
      {/* Titre avec effet néon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        className="flex justify-center mb-10"
      >
        <div className="group relative inline-block">
          {/* Lueur néon */}
          <div 
            className="absolute -inset-4 rounded-2xl opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            style={{ 
              background: `radial-gradient(ellipse at center, ${category.gradientColors.match(/rgb\(([^)]+)\)/)?.[0]}60, transparent 70%)`
            }}
          />
          
          {/* Badge du titre */}
          <div className="relative overflow-hidden rounded-2xl">
            {/* Fond avec gradient animé */}
            <div 
              className="absolute inset-0 opacity-90"
              style={{ 
                background: category.gradientColors
              }}
            />
            
            {/* Effet de brillance au survol */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
              -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            {/* Bordure lumineuse */}
            <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-b from-white/25 via-white/5 to-transparent" />
            
            {/* Contenu */}
            <div className="relative px-8 py-4">
              <h3 className="text-xl md:text-2xl font-black text-white tracking-tight
                drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              >
                {category.category}
              </h3>
            </div>

            {/* Particules flottantes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${15 + i * 15}%`,
                    bottom: '20%',
                  }}
                  animate={{
                    y: [-20, -60],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Grille de compétences avec effet de vague */}
      <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto px-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillBadge
            key={skill.name}
            skill={skill}
            index={skillIndex}
            gradientColors={category.gradientColors}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <div className="min-h-screen py-2 px-4 md:px-6 relative overflow-hidden">
      {/* NOTE: removed per-section full-screen radial background overlays so the global BackgroundWrapper
          provides a single unified background across sections. If you want subtle local accents, prefer
          small positioned elements (or lower-opacity non-full overlays) to avoid visible seams between sections. */}
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header amélioré */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              {/* réduction de la lueur du titre */}
              <div className="absolute -inset-2 rounded-full blur-xl opacity-15" />
              <h1 className="relative text-5xl md:text-7xl font-black bg-clip-text text-white ">
                Mes Skills
              </h1>
            </div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            Technologies et outils que je maîtrise pour créer des expériences numériques exceptionnelles
          </motion.p>
        </motion.div>

        {/* Catégories */}
        <div className="space-y-24 md:space-y-32">
          {skillsData.map((category, index) => (
            <SkillCategory 
              key={category.category} 
              category={category} 
              index={index}
            />
          ))}
        </div>

        {/* CTA Card améliorée */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-32 flex justify-center px-4"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -8 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="relative group max-w-4xl w-full"
          >
            {/* Lueur de fond réduite */}
            <div className="absolute -inset-6 bg-gradient-to-r from-orange-500/20 via-yellow-500/20 to-orange-500/20 
              rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
            
            {/* Card */}
            <div className="relative bg-gradient-to-br from-orange-600 to-yellow-600 rounded-3xl p-[2px] overflow-hidden">
              {/* Effet de brillance animé */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              
              <div className="relative bg-gradient-to-br from-orange-950/90 to-yellow-950/90 rounded-3xl p-10 md:p-14 backdrop-blur-xl">
                {/* Icône */}
                <motion.div 
                  className="w-16 h-16 mb-8"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-2xl">
                    <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" 
                      fill="url(#starGradient)" />
                    <defs>
                      <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgb(251, 191, 36)" />
                        <stop offset="100%" stopColor="rgb(249, 115, 22)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>

                {/* Contenu */}
                <div className="space-y-2 max-w-md md:max-w-lg lg:max-w-xl max-h-44 overflow-hidden">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight">
                    Toujours en apprentissage
                  </h3>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-full">
                    La technologie évolue constamment, et moi aussi. Je suis toujours curieux d'apprendre 
                    de nouvelles technologies et d'améliorer mes compétences existantes pour rester à la 
                    pointe du développement web moderne.
                  </p>

                  {/* CTA Button */}
                  <motion.a
                    href="#contact"
                    whileHover={{ x: 8 }}
                    className="inline-flex items-center gap-3 text-xl font-bold text-yellow-300 hover:text-yellow-200 
                      transition-colors duration-300 group/link mt-4"
                  >
                    Travaillons ensemble
                    <motion.span
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="text-2xl"
                    >
                      →
                    </motion.span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}