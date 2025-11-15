import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { skills } from '../../data/portfolio';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  // Tech stack for the scrolling marquee
  const techStack = [
    { name: 'React', icon: '⚛️', color: 'cyan' },
    { name: 'Node.js', icon: '💚', color: 'green' },
    { name: 'TypeScript', icon: '📘', color: 'blue' },
    { name: 'Next.js', icon: '▲', color: 'purple' },
    { name: 'Vue.js', icon: '💚', color: 'green' },
    { name: 'Angular', icon: '🅰️', color: 'red' },
    { name: 'Express.js', icon: '🚂', color: 'cyan' },
    { name: 'MongoDB', icon: '🍃', color: 'green' },
    { name: 'PostgreSQL', icon: '🐘', color: 'blue' },
    { name: 'Docker', icon: '🐳', color: 'cyan' },
    { name: 'AWS', icon: '☁️', color: 'purple' },
    { name: 'Git', icon: '📦', color: 'orange' },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedTechStack = [...techStack, ...techStack];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          icon="🚀"
          title="Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category);

            return (
              <motion.div
                key={category}
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <motion.h3
                  className="text-2xl font-bold text-cyan-400 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {category}
                </motion.h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <motion.span
                          className="text-cyan-400 text-sm"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 + skillIndex * 0.05 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>

                      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + skillIndex * 0.05, ease: 'easeOut' }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Tags */}
        {/* Horizontal Scrolling Tech Cards */}
        <div className="mt-16 overflow-hidden">
          <div className='bg-cyan-400/5 p-4 rounded-lg border border-cyan-400/10'>
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTechStack.map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 w-40 h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 flex flex-col items-center justify-center gap-4 shadow-lg hover:shadow-cyan-400/20"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-5xl">{tech.icon}</div>
                  <span className="text-sm font-semibold text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

