import React from 'react';
import { motion } from 'framer-motion';
import BackgroundWrapper from './components/BackgroundWrapper';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BackgroundWrapper>
      <div className="min-h-screen text-white">
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen">
        <Home />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-5">
        <Projects />
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20">
        <Skills />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="border-t border-motion-gray-800 bg-motion-darker">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gradient-motion text-xl font-bold">
              Volbis
            </div>
            
            <div className="flex items-center gap-6 text-sm text-motion-gray-400">
              <span>© 2024 Volbis. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <motion.a 
                  href="#" 
                  className="hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  GitHub
                </motion.a>
                <motion.a 
                  href="#" 
                  className="hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  LinkedIn
                </motion.a>
                <motion.a 
                  href="#" 
                  className="hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Twitter
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </BackgroundWrapper>
  );
};

export default App;