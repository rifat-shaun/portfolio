import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { personalInfo } from '../../data/portfolio';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="space-y-2" 
              variants={itemVariants}
              transition={{ duration: 0.6 }}
            >
              <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
                {personalInfo.tagline}
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                {personalInfo.name}
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-gray-400 text-lg leading-relaxed max-w-lg"
              variants={itemVariants}
              transition={{ duration: 0.6 }}
            >
              {personalInfo.description}
            </motion.p>

            <motion.div 
              className="pt-4" 
              variants={itemVariants}
              transition={{ duration: 0.6 }}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
              >
                Baixar Currículo
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative z-10 flex justify-center">
              <div className="relative">
                {/* Developer Illustration Container */}
                <motion.div 
                  className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-80 h-80 flex items-center justify-center">
                    {/* Code Elements */}
                    <motion.div
                      className="absolute top-4 right-4 bg-gray-800 px-3 py-1 rounded text-cyan-400 text-sm font-mono border border-cyan-400/30"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      HTML
                    </motion.div>
                    <motion.div
                      className="absolute top-16 right-8 bg-gray-800 px-3 py-1 rounded text-cyan-400 text-sm font-mono border border-cyan-400/30"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, delay: 0.3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      CSS
                    </motion.div>
                    <motion.div
                      className="absolute top-8 left-8 bg-gray-800 px-3 py-1 rounded text-cyan-400 text-sm font-mono border border-cyan-400/30"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, delay: 0.6, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      JS
                    </motion.div>
                    
                    {/* Central Developer Icon */}
                    <motion.div 
                      className="text-9xl"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      👨‍💻
                    </motion.div>
                    
                    {/* Bottom Elements */}
                    <motion.div
                      className="absolute bottom-8 left-12 text-4xl"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      ☕
                    </motion.div>
                    <motion.div
                      className="absolute bottom-12 right-16 text-3xl"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      💻
                    </motion.div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div 
                  className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

