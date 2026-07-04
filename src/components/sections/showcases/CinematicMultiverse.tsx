import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Globe, Coins, Play, BookOpen, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../../data/portfolio';

type AnyProject = (typeof PROJECTS)[number];

interface CinematicMultiverseProps {
  onCaseStudy?: (project: AnyProject) => void;
}

const CinematicMultiverse: React.FC<CinematicMultiverseProps> = ({ onCaseStudy }) => {
  const project = PROJECTS.find(p => p.id === 'mcm');
  if (!project) return null;

  return (
    <section className="py-32 relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-square max-w-lg mx-auto rounded-full border border-white/5 bg-gradient-to-br from-[#111] to-[#050505] overflow-hidden shadow-2xl relative group flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(189,0,255,0.1)_0%,transparent_70%)]" />
              <img src={project.image} alt="Multiverse Concept" loading="lazy" decoding="async" className="w-full h-full object-cover rounded-full opacity-60 group-hover:opacity-100 transition-all duration-700 animate-[spin_60s_linear_infinite]" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all shadow-[0_0_50px_rgba(189,0,255,0.3)]">
                  <Play fill="currentColor" size={24} className="ml-1" />
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-xs text-accent-purple font-mono mb-6">
              <Sparkles size={14} /> Startup Innovation Concept
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              My Cinematic Multiverse
            </h2>
            <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {project.description}
            </p>
            
            <ul className="space-y-6 mb-12">
              <li className="flex items-start gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-lg bg-accent-purple/10 flex items-center justify-center shrink-0">
                  <Coins className="text-accent-purple" size={20} />
                </div>
                <div>
                  <strong className="block text-white mb-1">NFT Character Ownership</strong>
                  <span className="text-sm text-gray-400">Verifiable digital assets allowing users to own and trade narrative components.</span>
                </div>
              </li>
              <li className="flex items-start gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-lg bg-accent-purple/10 flex items-center justify-center shrink-0">
                  <Globe className="text-accent-purple" size={20} />
                </div>
                <div>
                  <strong className="block text-white mb-1">Community-Driven Storytelling</strong>
                  <span className="text-sm text-gray-400">Interactive universes driven by decentralized voting and AI-generated expansions.</span>
                </div>
              </li>
            </ul>

            {/* Case Study button */}
            <button
              onClick={() => onCaseStudy?.(project as unknown as AnyProject)}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: 'rgba(189,0,255,0.15)', border: '1px solid rgba(189,0,255,0.4)', color: '#bd00ff' }}
            >
              <BookOpen size={16} />
              View Case Study
              <ArrowUpRight size={14} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CinematicMultiverse;
