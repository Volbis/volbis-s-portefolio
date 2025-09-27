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
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "contact@volbis.dev",
      href: "mailto:contact@volbis.dev"
    },
    {
      icon: "📱",
      title: "Téléphone",
      value: "+33 6 12 34 56 78",
      href: "tel:+33612345678"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/volbis",
      href: "https://linkedin.com/in/volbis"
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "github.com/volbis",
      href: "https://github.com/volbis"
    }
  ];

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
            Travaillons <span className="text-gradient">Ensemble</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-dark-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Vous avez un projet en tête ? Une idée à développer ? 
            N'hésitez pas à me contacter pour en discuter !
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold text-dark-primary mb-6"
            >
              Mes coordonnées
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  variants={itemVariants}
                  className="group p-6 bg-dark-background/30 backdrop-blur-sm border border-dark-secondary/20 rounded-xl hover:border-dark-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-text group-hover:text-dark-primary transition-colors duration-300">
                        {method.title}
                      </h3>
                      <p className="text-dark-secondary text-sm">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 p-6 bg-dark-background/20 backdrop-blur-sm border border-dark-secondary/20 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-dark-primary mb-3">
                Temps de réponse
              </h3>
              <p className="text-dark-secondary">
                Je réponds généralement dans les <span className="text-dark-primary font-semibold">24 heures</span>. 
                Pour les projets urgents, n'hésitez pas à me contacter directement par téléphone.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold text-dark-primary mb-6"
            >
              Envoyez-moi un message
            </motion.h2>

            <motion.form 
              onSubmit={handleSubmit}
              variants={itemVariants}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-text mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-background/50 border border-dark-secondary/30 rounded-lg focus:border-dark-primary focus:outline-none transition-colors duration-300 text-dark-text"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-text mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-background/50 border border-dark-secondary/30 rounded-lg focus:border-dark-primary focus:outline-none transition-colors duration-300 text-dark-text"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark-text mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-background/50 border border-dark-secondary/30 rounded-lg focus:border-dark-primary focus:outline-none transition-colors duration-300 text-dark-text"
                  placeholder="De quoi souhaitez-vous parler ?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-text mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-background/50 border border-dark-secondary/30 rounded-lg focus:border-dark-primary focus:outline-none transition-colors duration-300 text-dark-text resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-dark-primary text-dark-background font-bold py-4 px-6 rounded-lg hover:bg-dark-accent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-dark-background border-t-transparent rounded-full animate-spin" />
                    <span>Envoi en cours...</span>
                  </div>
                ) : (
                  'Envoyer le message'
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>

        {/* Success Modal */}
        <Dialog.Root open={showSuccess} onOpenChange={setShowSuccess}>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark-background border border-dark-secondary/20 p-8 rounded-2xl shadow-2xl z-50 max-w-md w-full mx-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-dark-primary mb-4">
                Message envoyé !
              </h3>
              <p className="text-dark-secondary mb-6">
                Merci pour votre message. Je vous répondrai dans les plus brefs délais.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="bg-dark-primary text-dark-background font-bold py-3 px-6 rounded-lg hover:bg-dark-accent transition-all duration-300"
              >
                Fermer
              </button>
            </motion.div>
          </Dialog.Content>
        </Dialog.Root>
      </div>
    </div>
  );
}
