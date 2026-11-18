import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCE, ExperienceItem } from '../../data/portfolio';
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  TrendingUp,
  Layers,
  Sparkles,
  Award,
} from 'lucide-react';

const Experience: React.FC = () => {
  // Store expanded state per job id; default first one expanded
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'rsl-solutions': true,
    'dxrad': false,
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="experience" className="py-28 relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-semibold tracking-wider uppercase mb-4"
            style={{
              borderColor: 'var(--border-color)',
              background: 'var(--glass-bg)',
              color: 'var(--text-primary)',
            }}
          >
            <Briefcase size={13} className="text-accent-cyan" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Professional Experience
          </h2>
          <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Chronological engineering track record highlighting production systems, API integrations, database optimizations, and cross-functional Scrum leadership.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Guide Line */}
          <div
            className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2"
            style={{
              background: 'linear-gradient(180deg, rgba(0,245,255,0.6) 0%, rgba(189,0,255,0.6) 50%, rgba(0,245,255,0.2) 100%)',
            }}
          />

          <div className="space-y-12">
            {EXPERIENCE.map((job: ExperienceItem, index: number) => {
              const isExpanded = !!expandedIds[job.id];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node Icon */}
                  <div
                    className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                    style={{
                      background: 'var(--bg-card)',
                      border: '2px solid #00f5ff',
                      boxShadow: '0 0 16px rgba(0, 245, 255, 0.4)',
                    }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-accent-cyan animate-pulse" />
                  </div>

                  {/* Spacer for two-column desktop balance */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Experience Card */}
                  <div className="w-full pl-12 md:pl-0 md:w-1/2 md:px-8">
                    <div
                      className="rounded-3xl p-6 sm:p-8 transition-all duration-300 relative group"
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-color)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                      }}
                    >
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium"
                          style={{
                            background: 'var(--glass-bg)',
                            border: '1px solid var(--border-color)',
                            color: 'var(--text-primary)',
                          }}
                        >
                          <Calendar size={12} className="text-accent-cyan" />
                          {job.duration}
                        </span>

                        <div className="flex items-center gap-2 text-xs font-mono" style={{ color: 'var(--text-subtle)' }}>
                          <span className="flex items-center gap-1">
                            <MapPin size={11} /> {job.location}
                          </span>
                          <span>•</span>
                          <span className="font-semibold text-accent-cyan">{job.type}</span>
                        </div>
                      </div>

                      {/* Job Title & Company */}
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-1" style={{ color: 'var(--text-primary)' }}>
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-base font-semibold text-accent-cyan">{job.company}</span>
                      </div>

                      {/* Summary */}
                      <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
                        {job.summary}
                      </p>

                      {/* Key Impact Metric Chips */}
                      <div className="grid grid-cols-2 gap-2.5 mb-5">
                        {job.metrics.slice(0, 2).map((m) => (
                          <div
                            key={m.label}
                            className="rounded-xl p-3 text-center"
                            style={{
                              background: 'var(--glass-bg)',
                              border: '1px solid var(--border-color)',
                            }}
                          >
                            <div className="text-lg font-extrabold text-accent-cyan">{m.metric}</div>
                            <div className="text-[10px] uppercase font-mono tracking-wider leading-tight" style={{ color: 'var(--text-subtle)' }}>
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {job.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded-lg font-mono transition-colors"
                            style={{
                              background: 'var(--glass-bg)',
                              border: '1px solid var(--border-color)',
                              color: 'var(--text-muted)',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                        {job.technologies.length > 5 && (
                          <span
                            className="text-xs px-2 py-1 rounded-lg font-mono"
                            style={{ background: 'var(--glass-bg)', color: 'var(--text-subtle)' }}
                          >
                            +{job.technologies.length - 5}
                          </span>
                        )}
                      </div>

                      {/* Core Highlights List */}
                      <ul className="space-y-2.5 text-sm mb-5" style={{ color: 'var(--text-muted)' }}>
                        {job.responsibilities.slice(0, 3).map((resp, i) => (
                          <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                            <CheckCircle2 size={15} className="text-accent-cyan shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Expand / Collapse Button */}
                      <button
                        onClick={() => toggleExpand(job.id)}
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all hover:bg-accent-cyan/10 hover:text-accent-cyan"
                        style={{
                          background: 'var(--glass-bg)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        <span>{isExpanded ? 'Collapse Details' : 'Expand Detailed Contributions & Metrics'}</span>
                        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>

                      {/* Expandable Detailed Section */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                            className="overflow-hidden pt-5 mt-5 border-t space-y-5"
                            style={{ borderColor: 'var(--border-color)' }}
                          >
                            {/* All Metrics Grid */}
                            <div>
                              <h4 className="text-xs uppercase font-mono font-bold tracking-wider mb-2.5 flex items-center gap-1.5 text-accent-cyan">
                                <TrendingUp size={13} />
                                Measurable Achievements
                              </h4>
                              <div className="grid grid-cols-2 gap-2">
                                {job.metrics.map((m) => (
                                  <div
                                    key={m.label}
                                    className="p-2.5 rounded-lg text-center"
                                    style={{
                                      background: 'var(--glass-bg)',
                                      border: '1px solid var(--border-color)',
                                    }}
                                  >
                                    <div className="text-base font-bold text-accent-cyan">{m.metric}</div>
                                    <div className="text-[10px] leading-tight" style={{ color: 'var(--text-muted)' }}>
                                      {m.label}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Full Responsibilities */}
                            <div>
                              <h4 className="text-xs uppercase font-mono font-bold tracking-wider mb-2.5 flex items-center gap-1.5 text-accent-cyan">
                                <CheckCircle2 size={13} />
                                Core Responsibilities & Impact
                              </h4>
                              <ul className="space-y-2 text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                                {job.responsibilities.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span className="text-accent-cyan font-bold">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Key Engineering Contributions */}
                            {job.keyContributions && job.keyContributions.length > 0 && (
                              <div>
                                <h4 className="text-xs uppercase font-mono font-bold tracking-wider mb-2.5 flex items-center gap-1.5 text-accent-purple">
                                  <Sparkles size={13} />
                                  Key Engineering Contributions
                                </h4>
                                <ul className="space-y-2 text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                                  {job.keyContributions.map((contrib, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <span className="text-accent-purple font-bold">✦</span>
                                      <span>{contrib}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Complete Technologies List */}
                            <div>
                              <h4 className="text-xs uppercase font-mono font-bold tracking-wider mb-2 flex items-center gap-1.5 text-accent-cyan">
                                <Layers size={13} />
                                Technology Stack
                              </h4>
                              <div className="flex flex-wrap gap-1.5">
                                {job.technologies.map((t) => (
                                  <span
                                    key={t}
                                    className="text-[11px] px-2.5 py-0.5 rounded font-mono"
                                    style={{
                                      background: 'var(--glass-bg)',
                                      border: '1px solid var(--border-color)',
                                      color: 'var(--text-primary)',
                                    }}
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
