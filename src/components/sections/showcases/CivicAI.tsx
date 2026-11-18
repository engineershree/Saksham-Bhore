import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Shield, Database, Layers, BookOpen } from 'lucide-react';
import { PROJECTS } from '../../../data/portfolio';

type AnyProject = (typeof PROJECTS)[number];

interface CivicAIProps {
  onCaseStudy?: (project: AnyProject) => void;
}

const CivicAI: React.FC<CivicAIProps> = ({ onCaseStudy }) => {
  const project = PROJECTS.find(p => p.id === 'civiccare-ai' || p.id === 'civicai');
  if (!project) return null;

  return (
    <section className="py-32 relative overflow-hidden border-t" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-xs text-accent-cyan font-mono mb-6">
              <Shield size={14} /> Flagship Product
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              {project.name}
            </h2>
            <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {project.description}
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg"
                  style={{ background: 'var(--glass-bg)', border: '1px solid var(--border-color)' }}>
                  <Database className="text-accent-cyan" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-lg" style={{ color: 'var(--text-primary)' }}>Robust Architecture</h4>
                  <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    PostgreSQL data modeling ensuring scalability for complex public grievance workflows and rigorous role-based access controls.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg"
                  style={{ background: 'var(--glass-bg)', border: '1px solid var(--border-color)' }}>
                  <Layers className="text-accent-cyan" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-lg" style={{ color: 'var(--text-primary)' }}>AI-Assisted Routing</h4>
                  <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    Leveraging artificial intelligence to categorize and route issues to the correct department autonomously.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onCaseStudy?.(project as unknown as AnyProject)}
                className="px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-all flex items-center gap-2 hover:-translate-y-0.5"
                style={{ background: 'var(--text-primary)', color: 'var(--bg-primary)' }}
              >
                <BookOpen size={16} />
                Case Study
                <ArrowUpRight size={16} />
              </button>
              <button
                className="px-8 py-4 rounded-full font-bold text-sm transition-all flex items-center gap-2 hover:-translate-y-0.5"
                style={{ background: 'var(--glass-bg)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
              >
                <Github size={18} /> Architecture
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative group"
              style={{ border: '1px solid var(--border-color)', background: 'var(--bg-card)' }}>
              <img
                src={project.image}
                alt="Civic AI Dashboard"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CivicAI;
