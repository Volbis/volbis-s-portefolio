import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, image, technologies, demoUrl, codeUrl, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Main Card */}
      <motion.div
        className="relative overflow-hidden bg-motion-gray-900/30 backdrop-blur-sm border border-motion-gray-800/50 rounded-2xl transition-all duration-500 w-full max-w-md mx-auto"
        whileHover={{ 
          y: -8,
          transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
        }}
      >
        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-motion opacity-0 blur-xl -z-10"
          animate={{ opacity: isHovered ? 0.1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Image Container */}
        <div className="relative h-32 overflow-hidden">
          <motion.img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-motion-dark via-transparent to-transparent opacity-60" />

          {/* Action Buttons */}
          <motion.div
            className="absolute top-4 right-4 flex gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8 
            }}
            transition={{ duration: 0.2 }}
          >
            {demoUrl && (
              <motion.a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            )}
            {codeUrl && (
              <motion.a
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
            )}
          </motion.div>

          {/* Status Badge */}
          <motion.div
            className="absolute top-4 left-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              x: isHovered ? 0 : -20 
            }}
            transition={{ duration: 0.2 }}
          >
            <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs text-green-400 font-medium">
              Live
            </span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-4">
          <motion.h3 
            className="text-base font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300"
            layoutId={`title-${index}`}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-motion-gray-400 mb-3 leading-relaxed text-xs"
            layoutId={`description-${index}`}
          >
            {description}
          </motion.p>

          {/* Technologies */}
          {technologies && (
            <motion.div 
              className="flex flex-wrap gap-1 mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {technologies.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  className="px-2 py-0.5 bg-motion-gray-800/50 border border-motion-gray-700/50 rounded-full text-xs text-motion-gray-300 font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + techIndex * 0.05 }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(96, 165, 250, 0.1)',
                    borderColor: 'rgba(96, 165, 250, 0.3)',
                    color: '#60A5FA'
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          )}

          {/* Footer */}
          <motion.div
            className="flex items-center justify-between pt-1"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-xs text-motion-gray-500 font-medium">
              View Project
            </span>
            <motion.svg
              className="w-4 h-4 text-motion-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.div>
        </div>

        {/* Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl border border-motion-blue-500/0 transition-all duration-300"
          animate={{ 
            borderColor: isHovered ? 'rgba(96, 165, 250, 0.3)' : 'rgba(96, 165, 250, 0)'
          }}
        />
      </motion.div>

      {/* Reflection Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ 
          background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)'
        }}
      />
    </motion.div>
  );
}
