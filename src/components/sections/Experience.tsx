import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { experiences } from '../../data/portfolio';

const Experience: React.FC = () => {
  const formatDate = (dateStr: string) => {
    if (!dateStr) return 'Presente';
    const [year, month] = dateStr.split('-');
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  const calculateDuration = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date();
    
    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                   (endDate.getMonth() - startDate.getMonth());
    
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years === 0) {
      return `${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
    } else if (remainingMonths === 0) {
      return `${years} ${years === 1 ? 'year' : 'years'}`;
    } else {
      return `${years} ${years === 1 ? 'year' : 'years'} and ${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
    }
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          icon="💼" 
          title="Experience" 
          subtitle="My professional journey"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left side - Company Logo */}
                  <motion.div
                    className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} flex justify-center md:justify-${index % 2 === 0 ? 'end' : 'start'}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative group">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                      
                      {/* Logo container */}
                      <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-2 border-gray-200 dark:border-gray-700 group-hover:border-cyan-400 transition-all duration-300">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-32 h-32 object-cover rounded-xl"
                        />
                        {exp.current && (
                          <motion.div
                            className="absolute -top-3 -right-3 bg-cyan-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + index * 0.2, type: 'spring' }}
                          >
                            Atual
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* Right side - Job Details */}
                  <motion.div
                    className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} space-y-4`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                  >
                    <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-cyan-400 transition-all duration-300 shadow-lg">
                      {/* Company & Position */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 text-cyan-400 mb-2">
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold hover:underline"
                          >
                            {exp.company}
                          </a>
                          <span className="text-gray-400 dark:text-gray-500">•</span>
                          <span className="text-gray-600 dark:text-gray-400 text-sm">{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span>{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</span>
                          <span>•</span>
                          <span>{calculateDuration(exp.startDate, exp.endDate)}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                          Responsabilidades:
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
                            >
                              <span className="text-cyan-400 mt-1">▹</span>
                              <span>{resp}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <motion.span
                              key={tech}
                              className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs font-medium border border-cyan-400/20"
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.5 + idx * 0.05 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-white dark:border-gray-950 shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.2, type: 'spring' }}
                  whileHover={{ scale: 1.5 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

