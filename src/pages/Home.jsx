import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import backgroundImage from '../assets/images/maskbg.png';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 250], [1, 1/6]);
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const navItems = [
    { 
      id: 'home', 
      label: 'Home',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house">
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        </svg>
      )
    },
    { 
      id: 'profile', 
      label: 'Profile',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-icon lucide-user-round">
          <circle cx="12" cy="8" r="5"/>
          <path d="M20 21a8 8 0 0 0-16 0"/>
        </svg>
      )
    },
    { 
      id: 'grid-projects', 
      label: 'Projects',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-code-icon lucide-folder-code">
          <path d="M10 10.5 8 13l2 2.5"/>
          <path d="m14 10.5 2 2.5-2 2.5"/>
          <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"/>
        </svg>
      )
    },
    { 
      id: 'skills', 
      label: 'Skills',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles">
          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
          <path d="M20 3v4"/>
          <path d="M22 5h-4"/>
          <path d="M4 17v2"/>
          <path d="M5 18H3"/>
        </svg>
      )
    },
    { 
      id: 'contact', 
      label: 'Contact',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail">
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/>
          <rect x="2" y="4" width="20" height="16" rx="2"/>
        </svg>
      )
    },
    { 
      id: 'linkedin', 
      label: 'LinkedIn',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect width="4" height="12" x="2" y="9"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
      external: true,
      url: 'https://linkedin.com/in/votre-profil'
    },
    { 
      id: 'github', 
      label: 'GitHub',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
          <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
      ),
      external: true,
      url: 'https://github.com/votre-profil'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) { 
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleItemClick = (item) => {
    if (item.external) {
      window.open(item.url, '_blank');
    } else {
      scrollToSection(item.id);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      
      {/* Navigation Bar - Indépendante */}
      <div className="fixed top-4 mt-3 sm:top-6 left-2 right-2 sm:left-0 sm:right-0 z-50 flex justify-center">
        <motion.div 
          className="inline-block"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div 
            className="inline-flex items-center gap-1 sm:gap-2 px-2 py-1.5 mb-12 bg-white/3 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 shadow-lg"
            style={{
              boxShadow: "inset 0 0.5px hsla(0, 0%, 100%, 0.6), inset 0 -1px 2px 0 hsla(0, 0%, 0%, 0.8), 0px 4px 20px -4px hsla(0 0% 0% / 0.3)"
            }}
          >
            <div className="flex items-center justify-center space-x-2 sm:space-x-4">
              {navItems.map((item) => (
                <div key={item.id} className="relative flex justify-center">
                  <motion.button
                    onClick={() => handleItemClick(item)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative p-1.5 sm:p-2 rounded-full transition-all duration-300 text-gray-400 hover:text-white hover:bg-white/15 hover:shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6">
                      {React.cloneElement(item.icon, { 
                        width: "100%", 
                        height: "100%",
                        className: "w-full h-full"
                      })}
                    </div>
                  </motion.button>

                  {/* Tooltip */}
                  <AnimatePresence>
                    {hoveredItem === item.id && (
                      <motion.div
                        key={item.id}
                        className="absolute top-full mr-2 mt-2 -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg shadow-xl whitespace-nowrap z-[99999]"
                        initial={{ 
                          opacity: 0, 
                          scale: 0, 
                          y: -20,
                          filter: "blur(4px)"
                        }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1, 
                          y: 0,
                          filter: "blur(0px)"
                        }}
                        exit={{ 
                          opacity: 0, 
                          scale: 0, 
                          y: -20,
                          filter: "blur(4px)"
                        }}
                        transition={{ 
                          duration: 0.2, 
                          ease: [0.25, 0.46, 0.45, 0.94],
                          type: "spring",
                          stiffness: 400,
                          damping: 25
                        }}
                        style={{
                          boxShadow: "0 4px 16px 4px rgba(0, 0, 0, 0.15)"
                        }}
                      >
                        {item.label}
                        {/* Flèche avec rotation fluide */}
                        <motion.div 
                          className="absolute bottom-full left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-gray-800 transform rotate-45"
                          style={{
                            marginBottom: "-0.2rem",
                            borderTopLeftRadius: "0.175rem"
                          }}
                          initial={{ scale: 0, rotate: 0 }}
                          animate={{ scale: 1, rotate: 45 }}
                          exit={{ scale: 0, rotate: 0 }}
                          transition={{ 
                            duration: 0.2, 
                            delay: 0.05,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Contenu principal */}
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-4 mb-8 sm:mb-11 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center mt-44 gap-2 sm:gap-3 px-4 sm:px-6 py-6 sm:py-3 mb-8 sm:mb-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs sm:text-sm text-gray-300 relative overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
          style={{
            boxShadow: "inset 0 0.5px hsl(0, 0%, 100%), inset 0 -1px 2px 0 hsl(0, 0%, 0%), 0px 4px 10px -4px hsla(0, 0%, 0%, 0.3)"
          }}
        >
          {/* Effet de brillance radial */}
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: `
                radial-gradient(at 51% 89%, hsla(120, 60%, 80%, 0.25) 0px, transparent 50%),
                radial-gradient(at 100% 100%, hsla(120, 50%, 70%, 0.15) 0px, transparent 50%),
                radial-gradient(at 22% 91%, hsla(120, 50%, 70%, 0.15) 0px, transparent 50%)
              `
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />

          {/* Effet shimmer principal */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full pointer-events-none"
            initial={{ x: "-120%" }}
            animate={{ x: "120%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 2.5,
              ease: "easeInOut",
              delay: 0.8
            }}
          />

          {/* Contenu du badge */}
          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-green-400 rounded-full animate-pulse relative z-10" />
          <span className="relative z-10 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent font-medium">
            <span className="hidden sm:inline">En quête de nouveaux défis !</span>
            <span className="sm:hidden">En quête de nouveaux défis !</span>
          </span>
        </motion.div>

        {/* Titre */}
        <motion.h1 
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 sm:mb-8 tracking-tight px-2 sm:px-0"
        >
          <span className="block mb-4 text-xl text-white"> Hey, moi c'est</span>
          <div className="relative inline-block">
            <motion.span 
              className="text-gray-100 font-semibold text-md bg-gradient-to-r from-gray-200 via-white to-gray-200 bg-clip-text text-transparent font-eagle relative z-10"
              initial={{ opacity: 0, y: 30, rotateX: -30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                delay: 0.5, 
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                y: -6,
                textShadow: "0 0 20px rgba(255, 255, 255, 0.67)",
                transition: { duration: 0.3 }
              }}
            >
              ALBERT NAHOUO COULIBALY
            </motion.span>
            
            {/* Particules flottantes */}
            <motion.div
              className="absolute -top-2 -left-2 w-2 h-2 bg-white/40 rounded-full"
              animate={{
                y: [-5, -15, -5],
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                delay: 2,
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute -top-1 right-10 w-1.5 h-1.5 bg-gray-200/50 rounded-full"
              animate={{
                y: [-3, -12, -3],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                delay: 2.5,
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute -bottom-2 left-1/3 w-1 h-1 bg-white/30 rounded-full"
              animate={{
                y: [3, 10, 3],
                opacity: [0.2, 0.6, 0.2],
                scale: [0.6, 1.1, 0.6]
              }}
              transition={{
                delay: 3,
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
        >
          Je suis{' '}
          ,{' '}
          <motion.span 
            className="font-medium relative"
            style={{ color: "#F0A13B" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              filter: "brightness(1.1)"
            }}
          >
            Software Developer
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 opacity-60"
              style={{ 
                background: `linear-gradient(to right, #F0A13B, ${`#F0A13B`}CC)`
              }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
          </motion.span>
          , je crée des solutions numériques performantes, évolutives et centrées sur l'utilisateur !
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row mx-4 sm:mx-0 gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8"
        >
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="group relative w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-black font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-white/25 text-sm sm:text-base"
            whileHover={{ 
              scale: 1.02, 
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              👋 Let's Connect
            </span>
          </motion.button>
          
          <motion.button
            className="group w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-transparent border border-gray-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/5 hover:border-white/30 text-sm sm:text-base"
            whileHover={{ 
              scale: 1.02, 
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center justify-center gap-2">
              Mon CV 
              <motion.svg 
                className="inline-block w-4 h-4"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>

        {/* Indicateur de scroll */}
        <motion.div 
          className="mt-2 sm:mt-6 flex flex-col items-center cursor-pointer group"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ opacity: scrollIndicatorOpacity }}
        >
          {/* Icône de souris */}
          <div className="relative">
            <div 
              className="w-5 h-10 border-2 border-gray-300 group-hover:border-white rounded-full flex justify-center transition-colors duration-300"
              style={{ background: 'transparent' }}
            >
              <motion.div
                className="w-2 h-2 bg-gray-300 group-hover:bg-white rounded-full mt-1.5 transition-colors duration-300"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  y: [-5, 5, -5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>

        </motion.div>
      </motion.div>

      {/* Fond */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-end justify-center">
        <img 
          src={backgroundImage}
          alt="Background"
          className="w-full mt-32 sm:mt-70 h-auto object-cover opacity-50"
          style={{ transform: 'translateY(18%)' }}
        />
      </div>
    </div>
  );
}
