import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Layers, Lightbulb, Target, AlertTriangle, BookOpen,
  TrendingUp, CheckCircle2
} from 'lucide-react';

interface ImpactMetric { metric: string; label: string; }
interface CaseStudy {
  problem: string;
  solution: string;
  architecture: string[];
  impact: ImpactMetric[];
  challenges: string;
  learnings: string;
}
interface Project {
  id: string;
  name: string;
  category: string;
  stack: readonly string[];
  description: string;
  image: string;
  caseStudy: CaseStudy;
}
interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

const METRIC_ACCENTS = ['#00f5ff', '#bd00ff', '#22c55e', '#f59e0b'];

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    // Lock the page scroll while modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        /*
         * Backdrop: fixed full-screen, overflow-y-auto
         * This makes THE MODAL ITSELF scroll — you scroll inside the dark overlay.
         * The panel grows to its natural height, centered, with top/bottom padding.
         */
        <motion.div
          key="cs-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[300] overflow-y-auto"
          style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(16px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          {/* 
            Centering wrapper — flex column, min-h-full, padding so content
            never touches screen edge. Clicking the wrapper (not the panel) closes.
          */}
          <div
            className="flex min-h-full items-start justify-center px-4 py-12"
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
          >
            <motion.div
              key="cs-panel"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl rounded-3xl overflow-hidden"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                boxShadow: '0 40px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,245,255,0.06)',
              }}
            >
              {/* ── Hero Banner ── */}
              <div className="relative h-52 sm:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(160deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.82) 100%)' }}
                />
                {/* Glow accent */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                  style={{ background: 'rgba(0,245,255,0.18)', filter: 'blur(70px)' }}
                />

                {/* Close button — sticky inside the hero */}
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center z-10
                             transition-all hover:scale-110 active:scale-95"
                  style={{
                    background: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.25)',
                  }}
                >
                  <X size={16} className="text-white" />
                </button>

                {/* Project meta */}
                <div className="absolute bottom-5 left-6 right-14 z-10">
                  <span
                    className="inline-block px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold mb-2"
                    style={{
                      background: 'rgba(0,245,255,0.18)',
                      border: '1px solid rgba(0,245,255,0.35)',
                      color: '#00f5ff',
                    }}
                  >
                    {project.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                    {project.name}
                  </h2>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.stack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: 'rgba(255,255,255,0.1)',
                          color: 'rgba(255,255,255,0.75)',
                          backdropFilter: 'blur(4px)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 5 && (
                      <span
                        className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }}
                      >
                        +{project.stack.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* ── Body content — no height limit, grows naturally ── */}
              <div className="p-5 sm:p-8 space-y-8">

                {/* Impact Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.caseStudy.impact.map((item, idx) => (
                    <div
                      key={item.label}
                      className="rounded-2xl p-3 sm:p-4 text-center relative overflow-hidden"
                      style={{
                        background: 'var(--glass-bg)',
                        border: `1px solid ${METRIC_ACCENTS[idx % 4]}33`,
                      }}
                    >
                      <div
                        className="absolute inset-0 opacity-[0.07] rounded-2xl"
                        style={{ background: `radial-gradient(circle at 50% 0%, ${METRIC_ACCENTS[idx % 4]}, transparent)` }}
                      />
                      <div
                        className="text-xl sm:text-2xl font-extrabold mb-1 relative z-10"
                        style={{ color: METRIC_ACCENTS[idx % 4] }}
                      >
                        {item.metric}
                      </div>
                      <div
                        className="text-[10px] uppercase tracking-widest leading-tight relative z-10"
                        style={{ color: 'var(--text-subtle)' }}
                      >
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Problem & Solution */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div
                    className="rounded-2xl p-5"
                    style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)' }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-lg bg-red-500/15 flex items-center justify-center">
                        <AlertTriangle size={14} className="text-red-400" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-red-400">The Problem</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {project.caseStudy.problem}
                    </p>
                  </div>

                  <div
                    className="rounded-2xl p-5"
                    style={{ background: 'rgba(0,245,255,0.04)', border: '1px solid rgba(0,245,255,0.2)' }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-lg bg-accent-cyan/15 flex items-center justify-center">
                        <Lightbulb size={14} className="text-accent-cyan" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-accent-cyan">The Solution</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {project.caseStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Architecture */}
                <div
                  className="rounded-2xl p-5"
                  style={{ background: 'rgba(189,0,255,0.04)', border: '1px solid rgba(189,0,255,0.2)' }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-accent-purple/15 flex items-center justify-center">
                      <Layers size={14} className="text-accent-purple" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-accent-purple">
                      Technical Architecture
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {project.caseStudy.architecture.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="text-accent-purple mt-0.5 flex-shrink-0" />
                        <span
                          className="text-xs sm:text-sm leading-relaxed"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenge + Learnings */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div
                    className="rounded-2xl p-5"
                    style={{ background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.2)' }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-lg bg-amber-500/15 flex items-center justify-center">
                        <Target size={14} className="text-amber-400" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Key Challenge</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {project.caseStudy.challenges}
                    </p>
                  </div>

                  <div
                    className="rounded-2xl p-5"
                    style={{ background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.2)' }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-lg bg-green-500/15 flex items-center justify-center">
                        <BookOpen size={14} className="text-green-400" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-green-400">Key Learnings</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {project.caseStudy.learnings}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div
                  className="flex items-center justify-between pt-4 border-t"
                  style={{ borderColor: 'var(--border-color)' }}
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp size={14} className="text-accent-cyan" />
                    <span className="text-xs font-mono" style={{ color: 'var(--text-subtle)' }}>
                      Case Study · {project.name}
                    </span>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-xs font-semibold px-4 py-2 rounded-full transition-all hover:scale-105 active:scale-95"
                    style={{
                      background: 'var(--glass-bg)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    Close  <kbd className="opacity-50">esc</kbd>
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyModal;
