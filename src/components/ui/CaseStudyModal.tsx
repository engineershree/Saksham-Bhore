import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Layers,
  Lightbulb,
  Target,
  AlertTriangle,
  BookOpen,
  TrendingUp,
  CheckCircle2,
  Github,
  ExternalLink,
  Code2,
  Cpu,
  Calendar,
  Clock,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Project } from '../../data/portfolio';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

const METRIC_ACCENTS = ['#00f5ff', '#bd00ff', '#10b981', '#f59e0b'];

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'engineering'>('overview');

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    // Lock background scroll while modal is active
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  // Reset tab when project changes
  useEffect(() => {
    setActiveTab('overview');
  }, [project?.id]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <motion.div
        key="cs-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[300] overflow-y-auto"
        style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(16px)' }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div
          className="flex min-h-full items-start justify-center px-4 py-8 sm:py-12"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            key="cs-panel"
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl rounded-3xl overflow-hidden"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              boxShadow: '0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(0,245,255,0.1)',
            }}
          >
            {/* 1. Header & Hero Preview */}
            <div className="relative h-60 sm:h-72 overflow-hidden bg-black/60">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover opacity-80"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(5,5,5,0.7) 60%, var(--bg-card) 100%)',
                }}
              />

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center z-20 transition-all hover:scale-110 active:scale-95"
                style={{
                  background: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  color: '#ffffff',
                }}
              >
                <X size={18} />
              </button>

              {/* Meta Overlay */}
              <div className="absolute bottom-4 left-6 right-6 z-10">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-mono font-semibold"
                    style={{
                      background: 'rgba(0,245,255,0.15)',
                      border: '1px solid rgba(0,245,255,0.4)',
                      color: '#00f5ff',
                    }}
                  >
                    {project.category}
                  </span>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                      project.status === 'Completed'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/40'
                        : project.status === 'Ongoing'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                    }`}
                  >
                    ● {project.status}
                  </span>

                  <span className="text-xs font-mono text-gray-300 flex items-center gap-1">
                    <Calendar size={12} /> {project.developmentDate}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                  {project.name}
                </h2>
              </div>
            </div>

            {/* Quick Action Navigation Bar */}
            <div
              className="flex flex-wrap items-center justify-between px-6 py-3.5 border-b gap-3"
              style={{ background: 'var(--glass-bg)', borderColor: 'var(--border-color)' }}
            >
              {/* Tabs */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-black/20">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'overview'
                      ? 'bg-accent-cyan text-black shadow'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Overview & Problem
                </button>
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'architecture'
                      ? 'bg-accent-cyan text-black shadow'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Architecture & Features
                </button>
                <button
                  onClick={() => setActiveTab('engineering')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'engineering'
                      ? 'bg-accent-cyan text-black shadow'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Challenges & Impact
                </button>
              </div>

              {/* External Links */}
              <div className="flex items-center gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all hover:scale-105"
                    style={{
                      background: 'var(--glass-bg)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <Github size={13} />
                    <span>Repository</span>
                    <ExternalLink size={11} className="opacity-60" />
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-white bg-accent-cyan/20 border border-accent-cyan/50 hover:bg-accent-cyan/30 transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={11} />
                  </a>
                )}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* 9. Results and Impact Metrics — Always prominent at the top */}
              {caseStudy.impact && caseStudy.impact.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase font-mono font-bold tracking-wider mb-3 flex items-center gap-1.5 text-accent-cyan">
                    <TrendingUp size={13} />
                    Measurable Results & Engineering Metrics
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {caseStudy.impact.map((item, idx) => (
                      <div
                        key={item.label}
                        className="rounded-2xl p-4 text-center relative overflow-hidden"
                        style={{
                          background: 'var(--glass-bg)',
                          border: `1px solid ${METRIC_ACCENTS[idx % 4]}33`,
                        }}
                      >
                        <div
                          className="absolute inset-0 opacity-[0.05] rounded-2xl pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at 50% 0%, ${METRIC_ACCENTS[idx % 4]}, transparent)`,
                          }}
                        />
                        <div
                          className="text-2xl font-extrabold mb-1 relative z-10"
                          style={{ color: METRIC_ACCENTS[idx % 4] }}
                        >
                          {item.metric}
                        </div>
                        <div
                          className="text-[10px] uppercase font-mono tracking-wider leading-tight relative z-10"
                          style={{ color: 'var(--text-subtle)' }}
                        >
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 1: OVERVIEW & PROBLEM */}
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* 1. Project Overview */}
                  <div
                    className="rounded-2xl p-6"
                    style={{ background: 'var(--glass-bg)', border: '1px solid var(--border-color)' }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-accent-cyan/15 flex items-center justify-center">
                        <BookOpen size={16} className="text-accent-cyan" />
                      </div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-accent-cyan">
                        1. Project Overview
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {caseStudy.overview || project.description}
                    </p>
                  </div>

                  {/* 2 & 3. Problem Statement & Solution */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Problem */}
                    <div
                      className="rounded-2xl p-5"
                      style={{
                        background: 'rgba(239, 68, 68, 0.05)',
                        border: '1px solid rgba(239, 68, 68, 0.2)',
                      }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-7 h-7 rounded-lg bg-red-500/15 flex items-center justify-center">
                          <AlertTriangle size={14} className="text-red-400" />
                        </div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-red-400">
                          2. Problem Statement
                        </h4>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        {caseStudy.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div
                      className="rounded-2xl p-5"
                      style={{
                        background: 'rgba(0, 245, 255, 0.05)',
                        border: '1px solid rgba(0, 245, 255, 0.2)',
                      }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-7 h-7 rounded-lg bg-accent-cyan/15 flex items-center justify-center">
                          <Lightbulb size={14} className="text-accent-cyan" />
                        </div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-accent-cyan">
                          3. Engineering Solution
                        </h4>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        {caseStudy.solution}
                      </p>
                    </div>
                  </div>

                  {/* 6. Technology Stack */}
                  <div
                    className="rounded-2xl p-5"
                    style={{ background: 'var(--glass-bg)', border: '1px solid var(--border-color)' }}
                  >
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-3 text-accent-purple flex items-center gap-2">
                      <Code2 size={14} />
                      6. Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-mono font-medium"
                          style={{
                            background: 'var(--bg-primary)',
                            border: '1px solid var(--border-color)',
                            color: 'var(--text-primary)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: ARCHITECTURE & KEY FEATURES */}
              {activeTab === 'architecture' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* 4. Architecture */}
                  <div
                    className="rounded-2xl p-6"
                    style={{
                      background: 'rgba(189, 0, 255, 0.04)',
                      border: '1px solid rgba(189, 0, 255, 0.2)',
                    }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-accent-purple/15 flex items-center justify-center">
                        <Layers size={16} className="text-accent-purple" />
                      </div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-accent-purple">
                        4. Technical Architecture
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {caseStudy.architecture.map((step, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-3 rounded-xl"
                          style={{ background: 'var(--glass-bg)', border: '1px solid var(--border-color)' }}
                        >
                          <span className="w-6 h-6 rounded-full bg-accent-purple/20 text-accent-purple font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                            {i + 1}
                          </span>
                          <span className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 5. Key Features */}
                  <div
                    className="rounded-2xl p-6"
                    style={{ background: 'var(--glass-bg)', border: '1px solid var(--border-color)' }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-accent-cyan/15 flex items-center justify-center">
                        <Sparkles size={16} className="text-accent-cyan" />
                      </div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-accent-cyan">
                        5. Key Features &amp; Implementation Status
                      </h3>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {caseStudy.keyFeatures.map((feat, i) => {
                        const isUpcoming = feat.toLowerCase().includes('[upcoming]');
                        const isCompleted = feat.toLowerCase().includes('[completed]');
                        const cleanText = feat.replace(/\[completed\]|\[upcoming\]/gi, '').trim();

                        return (
                          <div
                            key={i}
                            className="p-3.5 rounded-xl flex items-start gap-3"
                            style={{
                              background: isUpcoming
                                ? 'rgba(245, 158, 11, 0.04)'
                                : 'var(--glass-bg)',
                              border: isUpcoming
                                ? '1px dashed rgba(245, 158, 11, 0.3)'
                                : '1px solid var(--border-color)',
                            }}
                          >
                            {isUpcoming ? (
                              <Clock size={16} className="text-amber-400 mt-0.5 shrink-0" />
                            ) : (
                              <CheckCircle2 size={16} className="text-accent-cyan mt-0.5 shrink-0" />
                            )}
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                {isUpcoming && (
                                  <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-amber-500/20 text-amber-300">
                                    Upcoming
                                  </span>
                                )}
                                {isCompleted && (
                                  <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-green-500/20 text-green-300">
                                    Completed
                                  </span>
                                )}
                              </div>
                              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                                {cleanText}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: CHALLENGES, IMPLEMENTATION & LEARNINGS */}
              {activeTab === 'engineering' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* 7. Engineering Challenges */}
                  <div
                    className="rounded-2xl p-5"
                    style={{
                      background: 'rgba(245, 158, 11, 0.04)',
                      border: '1px solid rgba(245, 158, 11, 0.25)',
                    }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-lg bg-amber-500/15 flex items-center justify-center">
                        <Target size={14} className="text-amber-400" />
                      </div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
                        7. Engineering Challenges Solved
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {caseStudy.challenges}
                    </p>
                  </div>

                  {/* 8. Implementation Details */}
                  <div
                    className="rounded-2xl p-5"
                    style={{ background: 'var(--glass-bg)', border: '1px solid var(--border-color)' }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-lg bg-blue-500/15 flex items-center justify-center">
                        <Cpu size={14} className="text-blue-400" />
                      </div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400">
                        8. Implementation Details
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {caseStudy.implementationDetails}
                    </p>
                  </div>

                  {/* Key Learnings */}
                  {caseStudy.learnings && (
                    <div
                      className="rounded-2xl p-5"
                      style={{
                        background: 'rgba(16, 185, 129, 0.04)',
                        border: '1px solid rgba(16, 185, 129, 0.25)',
                      }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-7 h-7 rounded-lg bg-green-500/15 flex items-center justify-center">
                          <CheckCircle2 size={14} className="text-green-400" />
                        </div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-green-400">
                          Key Architectural Takeaway
                        </h4>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        {caseStudy.learnings}
                      </p>
                    </div>
                  )}

                  {/* 10. GitHub / Live Demo */}
                  <div
                    className="rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,245,255,0.08) 0%, rgba(189,0,255,0.08) 100%)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    <div>
                      <h4 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                        10. Code &amp; Project Repository
                      </h4>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        Inspect the implementation, commits, and architecture on GitHub.
                      </p>
                    </div>
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-accent-cyan hover:bg-white transition-all shadow-lg"
                      >
                        <Github size={15} />
                        View on GitHub
                        <ArrowRight size={13} />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-gray-400">Source code upon request</span>
                    )}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Modal Footer */}
            <div
              className="flex items-center justify-between px-6 py-4 border-t"
              style={{ borderColor: 'var(--border-color)', background: 'var(--glass-bg)' }}
            >
              <span className="text-xs font-mono" style={{ color: 'var(--text-subtle)' }}>
                Case Study · {project.name}
              </span>
              <button
                onClick={onClose}
                className="text-xs font-semibold px-4 py-2 rounded-xl transition-all hover:bg-white/10 active:scale-95"
                style={{
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                }}
              >
                Close <kbd className="ml-1 opacity-50 font-mono text-[10px]">esc</kbd>
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CaseStudyModal;
