import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { achievements } from '../../data/portfolio';

const Achievements: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  return (
    <section id="achievements" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          icon="🏆" 
          title="Achievements" 
          subtitle="Milestones and recognition"
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Image */}
              {achievement.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-cyan-400/10 backdrop-blur-sm border border-cyan-400/30 rounded-lg flex items-center justify-center text-2xl">
                    {achievement.icon}
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Category & Date */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    {achievement.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {formatDate(achievement.date)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {achievement.description}
                </p>

                {/* Link */}
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors"
                  >
                    View Details
                    <svg
                      className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                )}
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-purple-500/0 group-hover:from-cyan-400/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { value: '10+', label: 'Awards Won', icon: '🏆' },
            { value: '500+', label: 'Open Source Commits', icon: '💻' },
            { value: '5', label: 'Certifications', icon: '🎓' },
            { value: '10K+', label: 'Article Views', icon: '📝' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(34, 211, 238, 0.5)' }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;

