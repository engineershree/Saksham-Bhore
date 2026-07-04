import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  ExternalLink,
  FileText,
  ChevronRight,
  Briefcase,
  Code2,
  Server,
  Brain,
  Globe,
  Coffee,
  Layers,
} from 'lucide-react';

interface ResumeVariant {
  id: string;
  label: string;
  sublabel: string;
  description: string;
  fileName: string;
  icon: React.ReactNode;
  accentColor: string;
  borderColor: string;
  glowColor: string;
  tags: string[];
}

const RESUME_VARIANTS: ResumeVariant[] = [
  {
    id: 'general',
    label: 'General',
    sublabel: 'All-Round',
    description: 'A comprehensive resume covering all engineering domains — backend, frontend, and architecture. Best for broad software engineering roles.',
    fileName: '/Saksham_Bhore_I2 (3).pdf',
    icon: <Layers size={22} />,
    accentColor: 'text-white',
    borderColor: 'border-white/20',
    glowColor: 'rgba(255,255,255,0.1)',
    tags: ['Software Engineer', 'Full Stack', 'All Roles'],
  },
  {
    id: 'fullstack',
    label: 'Full Stack',
    sublabel: 'React + Spring Boot',
    description: 'Highlights end-to-end product development with Java Spring Boot on the backend and React.js on the frontend — ideal for product companies.',
    fileName: '/Saksham_Bhore_fullstack.pdf',
    icon: <Code2 size={22} />,
    accentColor: 'text-accent-cyan',
    borderColor: 'border-accent-cyan/30',
    glowColor: 'rgba(0,255,255,0.08)',
    tags: ['React', 'Spring Boot', 'Full Stack'],
  },
  {
    id: 'java-fullstack',
    label: 'Java Full Stack',
    sublabel: 'Enterprise Grade',
    description: 'Specialized for enterprise Java roles — emphasizing Spring ecosystem, microservices architecture, and production-grade backend engineering.',
    fileName: '/Saksham_Java_FullStack.pdf',
    icon: <Coffee size={22} />,
    accentColor: 'text-amber-400',
    borderColor: 'border-amber-400/30',
    glowColor: 'rgba(251,191,36,0.08)',
    tags: ['Java', 'Spring Boot', 'Microservices'],
  },
  {
    id: 'backend',
    label: 'Backend Developer',
    sublabel: 'APIs & Systems',
    description: 'Focused on API design, database optimization, and scalable backend architecture. Perfect for backend-heavy engineering positions.',
    fileName: '/Saksham_Bhore_BackendDeveloper.pdf',
    icon: <Server size={22} />,
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-400/30',
    glowColor: 'rgba(52,211,153,0.08)',
    tags: ['Node.js', 'APIs', 'PostgreSQL'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    sublabel: 'UI & Experience',
    description: 'Showcases UI/UX sensibility, component architecture, and performance optimization — tailored for frontend and design-centric roles.',
    fileName: '/Saksham_Frontend.pdf',
    icon: <Globe size={22} />,
    accentColor: 'text-pink-400',
    borderColor: 'border-pink-400/30',
    glowColor: 'rgba(244,114,182,0.08)',
    tags: ['React', 'TypeScript', 'UI/UX'],
  },
  {
    id: 'python',
    label: 'Python Developer',
    sublabel: 'Scripting & Automation',
    description: 'Highlights Python experience across automation, scripting, and data-driven applications — suited for Python-first engineering teams.',
    fileName: '/Saksham_Bhore_PythonDeveloper.pdf',
    icon: <Briefcase size={22} />,
    accentColor: 'text-blue-400',
    borderColor: 'border-blue-400/30',
    glowColor: 'rgba(96,165,250,0.08)',
    tags: ['Python', 'Automation', 'Scripting'],
  },
  {
    id: 'aiml',
    label: 'AI / ML Engineer',
    sublabel: 'Intelligent Systems',
    description: 'Emphasizes experience with AI/ML integrations, intelligent platform building, and data-driven engineering — for cutting-edge AI-first companies.',
    fileName: '/Saksham_Bhore_AIML.pdf',
    icon: <Brain size={22} />,
    accentColor: 'text-accent-purple',
    borderColor: 'border-accent-purple/30',
    glowColor: 'rgba(139,92,246,0.08)',
    tags: ['AI', 'ML', 'LLM Integration'],
  },
];

const Resume: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('fullstack');
  const activeResume = RESUME_VARIANTS.find((r) => r.id === activeId)!;

  return (
    <section id="resume" className="py-32 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-cyan text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Tailored Resumes
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Download the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">
              Right Resume
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Every role is different. Pick the resume version that best matches the
            position you are hiring for — each is precision-crafted for its domain.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Card Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-3">
            {RESUME_VARIANTS.map((variant, i) => (
              <motion.button
                key={variant.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                onClick={() => setActiveId(variant.id)}
                className={`group w-full text-left flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                  activeId === variant.id
                    ? `${variant.borderColor} bg-white/[0.06] shadow-lg`
                    : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10'
                }`}
                style={
                  activeId === variant.id
                    ? { boxShadow: `0 0 30px ${variant.glowColor}` }
                    : {}
                }
              >
                {/* Glow overlay on active */}
                {activeId === variant.id && (
                  <div
                    className="absolute inset-0 opacity-30 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 20% 50%, ${variant.glowColor}, transparent 70%)`,
                    }}
                  />
                )}

                {/* Icon */}
                <div
                  className={`relative z-10 w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all duration-300 ${
                    activeId === variant.id
                      ? `${variant.borderColor} bg-white/10 ${variant.accentColor}`
                      : 'border-white/10 bg-white/5 text-gray-400 group-hover:text-gray-200'
                  }`}
                >
                  {variant.icon}
                </div>

                {/* Text */}
                <div className="relative z-10 flex-1 min-w-0">
                  <p
                    className={`font-semibold text-sm transition-colors ${
                      activeId === variant.id
                        ? 'text-white'
                        : 'text-gray-300 group-hover:text-white'
                    }`}
                  >
                    {variant.label}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{variant.sublabel}</p>
                </div>

                {/* Arrow */}
                <ChevronRight
                  size={16}
                  className={`relative z-10 flex-shrink-0 transition-all duration-300 ${
                    activeId === variant.id
                      ? `${variant.accentColor} translate-x-0`
                      : 'text-gray-600 -translate-x-1 group-hover:translate-x-0 group-hover:text-gray-400'
                  }`}
                />
              </motion.button>
            ))}
          </div>

          {/* Right: Preview Panel */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative rounded-[2rem] border border-white/10 bg-[#0f0f0f] overflow-hidden shadow-2xl"
                style={{ boxShadow: `0 0 60px ${activeResume.glowColor}` }}
              >
                {/* Glow top-right */}
                <div
                  className="absolute top-0 right-0 w-72 h-72 blur-[80px] pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${activeResume.glowColor}, transparent)` }}
                />

                {/* Header */}
                <div className="relative z-10 p-8 md:p-10 border-b border-white/[0.06]">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center border ${activeResume.borderColor} bg-white/5 ${activeResume.accentColor} text-2xl`}
                    >
                      {activeResume.icon}
                    </div>
                    <div className="flex gap-3">
                      {/* View Button */}
                      <a
                        href={activeResume.fileName}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-all backdrop-blur-sm"
                        aria-label={`View ${activeResume.label} resume`}
                      >
                        <ExternalLink size={15} />
                        <span className="hidden sm:inline">View</span>
                      </a>
                      {/* Download Button */}
                      <a
                        href={activeResume.fileName}
                        download
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                          activeResume.accentColor
                        } ${activeResume.borderColor} bg-white/5 hover:bg-white/10 backdrop-blur-sm`}
                        aria-label={`Download ${activeResume.label} resume`}
                      >
                        <Download size={15} />
                        Download
                      </a>
                    </div>
                  </div>

                  <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${activeResume.accentColor}`}>
                    {activeResume.label}
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-medium mb-4">
                    {activeResume.sublabel}
                  </p>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {activeResume.description}
                  </p>
                </div>

                {/* Tags & File Info */}
                <div className="relative z-10 p-8 md:p-10">
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-medium">
                      Best For
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activeResume.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-3 py-1.5 rounded-full border font-medium ${activeResume.borderColor} bg-white/5 ${activeResume.accentColor}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* File info row */}
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <FileText size={18} className="text-gray-500 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-400 truncate font-mono">
                        {activeResume.fileName.replace('/', '')}
                      </p>
                      <p className="text-xs text-gray-600 mt-0.5">PDF · Ready to share</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium flex-shrink-0">
                      Latest
                    </span>
                  </div>
                </div>

                {/* Bottom CTA bar */}
                <div className="relative z-10 px-8 md:px-10 pb-8 md:pb-10">
                  <a
                    href={activeResume.fileName}
                    download
                    className={`group flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-semibold text-base border transition-all duration-300 ${activeResume.borderColor} bg-white/5 hover:bg-white/10 ${activeResume.accentColor}`}
                  >
                    <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                    Download {activeResume.label} Resume
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm">
            All resumes are up-to-date and ATS-friendly.{' '}
            <a
              href="mailto:sakshambhore8902@gmail.com"
              className="text-accent-cyan hover:text-white transition-colors underline underline-offset-4"
            >
              Request a custom version
            </a>{' '}
            if needed.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
