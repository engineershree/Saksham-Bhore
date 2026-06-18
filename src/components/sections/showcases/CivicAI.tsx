import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Shield, Database, Code2, Layers } from 'lucide-react';
import { PROJECTS } from '../../../data/portfolio';

const CivicAI: React.FC = () => {
  const project = PROJECTS.find(p => p.id === 'civicai');
  if (!project) return null;

  return (
    <section className="py-32 relative bg-[#0a0a0a] overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-xs text-accent-cyan font-mono mb-6">
              <Shield size={14} /> Flagship Product
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {project.name}
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              {project.description}
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-lg">
                  <Database className="text-accent-cyan" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-lg">Robust Architecture</h4>
                  <p className="text-gray-400 leading-relaxed">PostgreSQL data modeling ensuring scalability for complex public grievance workflows and rigorous role-based access controls.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-lg">
                  <Layers className="text-accent-cyan" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-lg">AI-Assisted Routing</h4>
                  <p className="text-gray-400 leading-relaxed">Leveraging artificial intelligence to categorize and route issues to the correct department autonomously.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors flex items-center gap-2">
                Case Study <ArrowUpRight size={18} />
              </button>
              <button className="px-8 py-4 rounded-full bg-white/5 text-white font-bold text-sm border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2">
                <Github size={18} /> Architecture
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl border border-white/10 bg-[#0f0f0f] overflow-hidden shadow-2xl relative group">
              <img src={project.image} alt="Civic AI Dashboard" loading="lazy" decoding="async" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CivicAI;
