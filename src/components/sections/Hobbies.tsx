import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { hobbies } from '../../data/portfolio';

const Hobbies: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="hobbies" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          icon="🎯" 
          title="Hobbies & Interests" 
          subtitle="What I love doing beyond code"
        />

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {hobbies.map((hobby) => (
            <motion.div
              key={hobby.id}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border-2 border-gray-700 group-hover:border-cyan-400 transition-all duration-300 h-full">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-purple-500/0 group-hover:from-cyan-400/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="text-6xl mb-6"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {hobby.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {hobby.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {hobby.description}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-cyan-400/20 group-hover:border-cyan-400/50 rounded-tr-2xl transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hobbies;

