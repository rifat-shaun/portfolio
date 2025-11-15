import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { personalInfo } from '../../data/portfolio';
import fullImage from '../../assets/my-full-picture.jpeg';

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

          {/* Right Content - Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative z-10 flex justify-center md:justify-end md:pr-12">
              <div className="relative">
                {/* Profile Image Container */}
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-3xl blur-2xl opacity-30" />
                  
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={fullImage}
                      alt={personalInfo.name}
                      className="relative w-88 h-[28rem] md:w-[28rem] md:h-[36rem] object-cover rounded-3xl border-4 border-cyan-400/30 shadow-2xl"
                    />
                    
                    {/* Animated Border Overlay */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl border-2 border-cyan-400"
                      animate={{
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>

                  {/* Floating Tech Badges on image border */}
                  <motion.div
                    className="absolute -top-4 right-8 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg text-cyan-400 text-sm font-bold border border-cyan-400/30 shadow-xl"
                    animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    React ⚛️
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-4 left-8 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg text-green-400 text-sm font-bold border border-green-400/30 shadow-xl"
                    animate={{ y: [0, -10, 0], rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 3.5, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    Node.js 💚
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-20 -left-6 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg text-blue-400 text-sm font-bold border border-blue-400/30 shadow-xl"
                    animate={{ x: [0, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    TypeScript
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 -right-6 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg text-purple-400 text-sm font-bold border border-purple-400/30 shadow-xl"
                    animate={{ y: [0, -12, 0], rotate: [0, 6, -6, 0] }}
                    transition={{ duration: 3.8, delay: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    Next.js
                  </motion.div>

                  <motion.div
                    className="absolute bottom-20 -right-6 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg text-amber-500 text-sm font-bold border border-amber-500/30 shadow-xl"
                    animate={{ rotate: [0, 10, -10, 0], scale: [1.2, 1.5, 1.2] }}
                    transition={{ duration: 3.2, delay: 0.3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    ☕
                  </motion.div>
                </motion.div>

                {/* Floating Glow Orbs */}
                <motion.div 
                  className="absolute -top-8 -left-8 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div 
                  className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 5, delay: 1.5, repeat: Infinity, ease: 'easeInOut' }}
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

