import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../../data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#050505]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-accent-purple text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Career
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Experience Timeline
          </h2>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
          {EXPERIENCE.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 relative pl-8 md:pl-12"
            >
              <div className="absolute w-4 h-4 bg-accent-cyan rounded-full -left-[8px] md:-left-[8px] top-1.5 shadow-[0_0_10px_rgba(0,245,255,0.5)] border-2 border-[#050505]" />
              
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-accent-cyan/30 transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors">{job.role}</h3>
                    <p className="text-gray-400 font-medium">{job.company}</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                
                <ul className="space-y-3 mt-6">
                  {job.points.map((point, i) => (
                    <li key={i} className="text-sm text-gray-400 leading-relaxed flex gap-3">
                      <span className="text-accent-purple mt-1 flex-shrink-0">✦</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
