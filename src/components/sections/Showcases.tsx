import React from 'react';
import CivicAI from './showcases/CivicAI';
import CinematicMultiverse from './showcases/CinematicMultiverse';
import { motion } from 'framer-motion';
import { PROJECTS } from '../../data/portfolio';
import { ArrowUpRight } from 'lucide-react';
import TiltCard from '../ui/TiltCard';

const Showcases: React.FC = () => {
  // Filter out the two deep dives
  const otherProjects = PROJECTS.filter(p => p.id !== 'civicai' && p.id !== 'mcm');

  return (
    <>
      <div id="showcases">
        <CivicAI />
        <CinematicMultiverse />
      </div>

      {/* Grid for the rest of the enterprise projects */}
      <section className="py-32 relative bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              More Featured Work
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A collection of production-ready applications, mobile ecosystems, and platforms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <TiltCard className="bg-[#0f0f0f] border border-white/5 rounded-3xl overflow-hidden group hover:border-white/10 transition-colors flex flex-col h-full">
                  <div className="aspect-video overflow-hidden relative">
                    <img src={project.image} alt={project.name} loading="lazy" decoding="async" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-mono text-white border border-white/10">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors flex justify-between items-center">
                      {project.name}
                      <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-accent-cyan" size={20} />
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 4).map(tech => (
                        <span key={tech} className="text-xs text-gray-500 bg-white/[0.02] border border-white/5 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && <span className="text-xs text-gray-500 bg-white/[0.02] border border-white/5 px-2 py-1 rounded">+{project.stack.length - 4}</span>}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcases;
