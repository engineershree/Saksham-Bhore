import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../../data/portfolio';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import TiltCard from '../ui/TiltCard';
import CaseStudyModal from '../ui/CaseStudyModal';
import CivicAIShowcase from './showcases/CivicAI';
import CinematicMultiverse from './showcases/CinematicMultiverse';

type AnyProject = (typeof PROJECTS)[number];

const Showcases: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<AnyProject | null>(null);

  // Filter out the two deep-dive showcases that have their own full-page sections
  const otherProjects = PROJECTS.filter(p => p.id !== 'civicai' && p.id !== 'mcm');

  const openCaseStudy = (project: AnyProject) => setSelectedProject(project);
  const closeCaseStudy = () => setSelectedProject(null);

  return (
    <>
      <div id="showcases">
        {/* Pass the openCaseStudy callback so the flagship sections can trigger the modal too */}
        <CivicAIShowcase onCaseStudy={openCaseStudy} />
        <CinematicMultiverse onCaseStudy={openCaseStudy} />
      </div>

      {/* Grid for the rest of the enterprise projects */}
      <section className="py-32 relative border-t" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              More Featured Work
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              A collection of production-ready applications, mobile ecosystems, and platforms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <TiltCard
                  className="rounded-3xl overflow-hidden group flex flex-col h-full transition-all"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-mono text-white border border-white/10">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <h3
                      className="text-2xl font-bold mb-3 group-hover:text-accent-cyan transition-colors flex justify-between items-center"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {project.name}
                      <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-accent-cyan" size={20} />
                    </h3>
                    <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--text-muted)' }}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.slice(0, 4).map(tech => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded"
                          style={{ color: 'var(--text-subtle)', background: 'var(--glass-bg)', border: '1px solid var(--border-color)' }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span
                          className="text-xs px-2 py-1 rounded"
                          style={{ color: 'var(--text-subtle)', background: 'var(--glass-bg)', border: '1px solid var(--border-color)' }}
                        >
                          +{project.stack.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Case Study Button — always shown, all projects have caseStudy */}
                    <button
                      onClick={() => openCaseStudy(project)}
                      className="flex items-center gap-2 text-sm font-semibold text-accent-cyan hover:opacity-80 transition-all group/btn"
                    >
                      <BookOpen size={15} className="group-hover/btn:scale-110 transition-transform" />
                      View Case Study
                      <ArrowUpRight size={13} className="opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </button>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Case Study Modal */}
      <CaseStudyModal project={selectedProject as any} onClose={closeCaseStudy} />
    </>
  );
};

export default Showcases;
