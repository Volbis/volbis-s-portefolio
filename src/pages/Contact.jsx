import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Dialog from '@radix-ui/react-dialog';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  }

  const contactMethods = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      ),
      title: "Email",
      value: "coulibalynahouoalbert@gmail.com",
      href: "mailto:coulibalynahouoalbert@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect width="4" height="12" x="2" y="9"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
      title: "LinkedIn",
      value: "linkedin.com/in/albert-coulibaly",
      href: "https://www.linkedin.com/in/albert-coulibaly-2789a5324/",
      gradient: "from-blue-600 to-blue-400"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
          <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
      ),
      title: "GitHub",
      value: "github.com/volbis",
      href: "https://github.com/volbis",
      gradient: "from-gray-600 to-gray-400"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: "Téléphone",
      value: "+225 0757406710",
      href: "tel:+2250757406710",
      gradient: "from-green-500 to-emerald-500"
    }
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <div className="absolute -inset-3 rounded-full blur-xl opacity-15 bg-gradient-to-r from-blue-500/20 to-pink-500/20" />
                <h1 className="relative text-5xl md:text-7xl font-black text-white">
            Travaillons Ensemble
                </h1>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
            >
              Vous avez un projet en tête ? Une idée à développer ?<br/>
              <span className="text-white/80">N'hésitez pas à me contacter pour en discuter.</span>
            </motion.p>
          </motion.div>

          <div className="flex justify-center">
            
            {/* Section Coordonnées - Glass Cards Centrée */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 max-w-3xl w-full"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
            >
              Mes coordonnées
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  {/* Lueur de fond au survol */}
                  <div 
                    className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-xl bg-gradient-to-r ${method.gradient}`}
                  />
                  
                  {/* Card principale avec effet glass */}
                  <div 
                    className="relative p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20"
                    style={{
                      boxShadow: "inset 0 0.5px hsla(0, 0%, 100%, 0.6), inset 0 -1px 2px 0 hsla(0, 0%, 0%, 0.8), 0px 4px 20px -4px hsla(0, 0%, 0%, 0.3)"
                    }}
                  >
                    <div className="flex items-center gap-4">
                      {/* Icône avec gradient dans un cercle glass */}
                      <div 
                        className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-all duration-300"
                        style={{
                          boxShadow: "inset 0 0.5px hsla(0, 0%, 100%, 0.3), inset 0 -1px 1px 0 hsla(0, 0%, 0%, 0.5)"
                        }}
                      >
                        <div className={`w-6 h-6`}>
                          {React.cloneElement(method.icon, { 
                            className: `w-6 h-6`,
                            style: { 
                              stroke: `url(#gradient-${index})`,
                            }
                          })}
                          <svg width="0" height="0">
                            <defs>
                              <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                {method.gradient === 'from-blue-500 to-cyan-500' && (
                                  <>
                                    <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                                    <stop offset="100%" stopColor="rgb(6, 182, 212)" />
                                  </>
                                )}
                                {method.gradient === 'from-blue-600 to-blue-400' && (
                                  <>
                                    <stop offset="0%" stopColor="rgb(37, 99, 235)" />
                                    <stop offset="100%" stopColor="rgb(96, 165, 250)" />
                                  </>
                                )}
                                {method.gradient === 'from-gray-600 to-gray-400' && (
                                  <>
                                    <stop offset="0%" stopColor="rgb(75, 85, 99)" />
                                    <stop offset="100%" stopColor="rgb(156, 163, 175)" />
                                  </>
                                )}
                                {method.gradient === 'from-green-500 to-emerald-500' && (
                                  <>
                                    <stop offset="0%" stopColor="rgb(34, 197, 94)" />
                                    <stop offset="100%" stopColor="rgb(16, 185, 129)" />
                                  </>
                                )}
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>

                      {/* Texte */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-white/90 mb-0.5 group-hover:text-white transition-colors">
                          {method.title}
                        </h3>
                        <p className="text-xs text-white/50 group-hover:text-white/70 transition-colors truncate">
                          {method.value}
                        </p>
                      </div>

                      {/* Flèche */}
                      <motion.div
                        className="text-white/30 group-hover:text-white/70 transition-colors duration-300"
                        initial={{ x: 0 }}
                        animate={{ x: 0 }}
                        whileHover={{ x: 3 }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17L17 7M17 7H7M17 7V17"/>
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Info temps de réponse - Card glass */}
            <motion.div 
              variants={itemVariants}
              className="relative group mt-8"
            >
              <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-xl bg-gradient-to-r from-emerald-500/30 to-teal-500/30" />
              
              <div 
                className="relative p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:bg-white/10"
                style={{
                  boxShadow: "inset 0 0.5px hsla(0, 0%, 100%, 0.6), inset 0 -1px 2px 0 hsla(0, 0%, 0%, 0.8), 0px 4px 20px -4px hsla(0, 0%, 0%, 0.3)"
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="p-2.5 rounded-full bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20"
                    style={{
                      boxShadow: "inset 0 0.5px hsla(120, 60%, 50%, 0.3), inset 0 -1px 1px 0 hsla(0, 0%, 0%, 0.5)"
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1.5">
                      Temps de réponse
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Je réponds généralement dans les <span className="text-emerald-400 font-semibold">24 heures</span>. 
                      Pour les projets urgents, contactez-moi directement par téléphone.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>


      </div>
    </div>
  );
}
