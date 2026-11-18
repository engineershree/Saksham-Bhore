import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, Project } from '../../data/portfolio';
import {
  Layers,
  Calendar,
  Search,
  Filter,
  ArrowUpRight,
  Github,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  Clock,
  Sparkles,
  LayoutGrid,
  GitCommit,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import TiltCard from '../ui/TiltCard';
import CaseStudyModal from '../ui/CaseStudyModal';

type ViewMode = 'timeline' | 'grid';

const CATEGORIES = [
  'All',
  'AI / NLP',
  'Full Stack',
  'Enterprise & Geospatial',
  'Mobile Development',
];

const YEARS = ['All', '2026', '2025', '2024'];

const Showcases: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('timeline');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [expandedMilestones, setExpandedMilestones] = useState<Record<string, boolean>>({
    'ai-resume-screening': true,
    'life-engine': false,
    'sky-cadastral': false,
  });

  const toggleMilestoneExpand = (id: string) => {
    setExpandedMilestones((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const openCaseStudy = (project: Project) => setSelectedProject(project);
  const closeCaseStudy = () => setSelectedProject(null);

  // Filtered projects for Grid and Timeline
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      // Search matching
      const matchesSearch =
        searchQuery === '' ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.stack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category matching
      const matchesCategory =
        selectedCategory === 'All' ||
        (selectedCategory === 'AI / NLP' && project.category.includes('AI')) ||
        (selectedCategory === 'Full Stack' && project.category.includes('Full Stack')) ||
        (selectedCategory === 'Enterprise & Geospatial' &&
          (project.category.includes('Enterprise') || project.category.includes('Geospatial'))) ||
        (selectedCategory === 'Mobile Development' && project.category.includes('Mobile'));

      // Year matching
      const matchesYear =
        selectedYear === 'All' || project.year.includes(selectedYear);

      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [searchQuery, selectedCategory, selectedYear]);

  // Grouped projects by year for Timeline view
  const timelineGroups = useMemo(() => {
    const years = ['2026', '2025', '2024'];
    const groups: { year: string; projects: Project[] }[] = [];

    years.forEach((yr) => {
      if (selectedYear !== 'All' && selectedYear !== yr) return;
      const projs = filteredProjects.filter((p) => p.year.includes(yr));
      if (projs.length > 0) {
        groups.push({ year: yr, projects: projs });
      }
    });

    return groups;
  }, [filteredProjects, selectedYear]);

  return (
    <section id="projects" className="py-28 relative overflow-hidden border-t" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
      {/* Anchor for backward compatibility */}
      <div id="showcases" className="absolute top-0" />

      {/* Background glow orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-semibold tracking-wider uppercase mb-4"
            style={{
              borderColor: 'var(--border-color)',
              background: 'var(--glass-bg)',
              color: 'var(--text-primary)',
            }}
          >
            <Sparkles size={13} className="text-accent-cyan" />
            <span>Engineering Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            Complete Projects Timeline
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Explore my engineering journey chronologically or filter by technology and domain. Each project includes technical challenges, architecture, and verified metrics.
          </p>

          {/* View Mode Switcher: Timeline vs Grid */}
          <div className="inline-flex items-center p-1.5 rounded-2xl border mt-8 gap-1.5 shadow-sm"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
            <button
              onClick={() => setViewMode('timeline')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                viewMode === 'timeline'
                  ? 'bg-accent-cyan text-black font-bold shadow-md'
                  : 'hover:text-accent-cyan'
              }`}
              style={viewMode !== 'timeline' ? { color: 'var(--text-muted)' } : {}}
            >
              <GitCommit size={15} />
              <span>Timeline View</span>
            </button>

            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                viewMode === 'grid'
                  ? 'bg-accent-cyan text-black font-bold shadow-md'
                  : 'hover:text-accent-cyan'
              }`}
              style={viewMode !== 'grid' ? { color: 'var(--text-muted)' } : {}}
            >
              <LayoutGrid size={15} />
              <span>Project Grid View</span>
            </button>
          </div>
        </motion.div>

        {/* Filter Controls Bar */}
        <div
          className="rounded-2xl p-4 md:p-6 mb-12 border flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm font-medium outline-none transition-all focus:border-accent-cyan"
              style={{
                background: 'var(--glass-bg)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* Year Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <span className="text-xs font-mono font-semibold uppercase mr-1" style={{ color: 'var(--text-subtle)' }}>
              Year:
            </span>
            {YEARS.map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  selectedYear === yr
                    ? 'bg-accent-cyan text-black font-bold'
                    : 'hover:bg-white/10'
                }`}
                style={
                  selectedYear !== yr
                    ? {
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-muted)',
                      }
                    : {}
                }
              >
                {yr}
              </button>
            ))}
          </div>

          {/* Category Filter Pills (especially helpful in grid view) */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <span className="text-xs font-mono font-semibold uppercase mr-1" style={{ color: 'var(--text-subtle)' }}>
              Category:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-accent-purple text-white font-bold'
                    : 'hover:bg-white/10'
                }`}
                style={
                  selectedCategory !== cat
                    ? {
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-muted)',
                      }
                    : {}
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── MODE 1: TIMELINE VIEW ── */}
        {viewMode === 'timeline' && (
          <div className="relative">
            {/* Vertical connecting line */}
            <div
              className="absolute left-4 md:left-1/2 top-6 bottom-6 w-[2px] -translate-x-1/2 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, #00f5ff 0%, #bd00ff 50%, #00f5ff 100%)',
              }}
            />

            {timelineGroups.length === 0 ? (
              <div className="text-center py-20 text-sm" style={{ color: 'var(--text-muted)' }}>
                No projects found matching the selected filters.
              </div>
            ) : (
              <div className="space-y-16">
                {timelineGroups.map((group) => (
                  <div key={group.year} className="relative">
                    {/* Year Marker Badge */}
                    <div className="flex justify-start md:justify-center mb-8 pl-10 md:pl-0">
                      <div
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border shadow-lg z-20"
                        style={{
                          background: 'var(--bg-card)',
                          borderColor: 'var(--border-color)',
                          color: '#00f5ff',
                        }}
                      >
                        <Calendar size={14} className="text-accent-cyan" />
                        <span className="font-mono font-extrabold text-sm tracking-wider">
                          YEAR {group.year}
                        </span>
                        <span className="text-xs font-mono text-gray-400">
                          ({group.projects.length} {group.projects.length === 1 ? 'Milestone' : 'Milestones'})
                        </span>
                      </div>
                    </div>

                    {/* Milestones inside this year */}
                    <div className="space-y-12">
                      {group.projects.map((project, idx) => {
                        const isExpanded = !!expandedMilestones[project.id];
                        const isEven = idx % 2 === 0;

                        return (
                          <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`relative flex flex-col md:flex-row items-start ${
                              isEven ? 'md:flex-row-reverse' : ''
                            }`}
                          >
                            {/* Center Node on Timeline */}
                            <div
                              className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-125"
                              style={{
                                background: 'var(--bg-card)',
                                border: '2px solid #00f5ff',
                                boxShadow: '0 0 16px rgba(0, 245, 255, 0.4)',
                              }}
                            >
                              <div className="w-2.5 h-2.5 rounded-full bg-accent-cyan animate-pulse" />
                            </div>

                            {/* Spacer */}
                            <div className="hidden md:block md:w-1/2" />

                            {/* Milestone Card */}
                            <div className="w-full pl-12 md:pl-0 md:w-1/2 md:px-8">
                              <div
                                className="rounded-3xl p-6 sm:p-8 transition-all relative group"
                                style={{
                                  background: 'var(--bg-card)',
                                  border: '1px solid var(--border-color)',
                                  boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                                }}
                              >
                                {/* Milestone Header & Badges */}
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                  <span
                                    className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold"
                                    style={{
                                      background: 'rgba(0,245,255,0.12)',
                                      border: '1px solid rgba(0,245,255,0.3)',
                                      color: '#00f5ff',
                                    }}
                                  >
                                    {project.category}
                                  </span>

                                  <div className="flex items-center gap-2">
                                    <span
                                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold ${
                                        project.status === 'Completed'
                                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                          : project.status === 'Ongoing'
                                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                          : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                                      }`}
                                    >
                                      ● {project.status}
                                    </span>

                                    <span className="text-[11px] font-mono text-gray-400">
                                      {project.developmentDate}
                                    </span>
                                  </div>
                                </div>

                                {/* Title */}
                                <h3
                                  className="text-xl sm:text-2xl font-bold tracking-tight mb-2 group-hover:text-accent-cyan transition-colors"
                                  style={{ color: 'var(--text-primary)' }}
                                >
                                  {project.name}
                                </h3>

                                {/* Description */}
                                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                                  {project.description}
                                </p>

                                {/* Preview Thumbnail (Responsive) */}
                                <div className="aspect-video w-full rounded-2xl overflow-hidden mb-5 border relative bg-black/40"
                                  style={{ borderColor: 'var(--border-color)' }}>
                                  <img
                                    src={project.image}
                                    alt={project.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                </div>

                                {/* Tech Badges */}
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                  {project.stack.map((t) => (
                                    <span
                                      key={t}
                                      className="text-[11px] px-2.5 py-1 rounded-lg font-mono"
                                      style={{
                                        background: 'var(--glass-bg)',
                                        border: '1px solid var(--border-color)',
                                        color: 'var(--text-muted)',
                                      }}
                                    >
                                      {t}
                                    </span>
                                  ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                                  <button
                                    onClick={() => openCaseStudy(project)}
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/30 hover:bg-accent-cyan hover:text-black transition-all"
                                  >
                                    <BookOpen size={14} />
                                    <span>Explore Case Study</span>
                                    <ArrowUpRight size={13} />
                                  </button>

                                  <div className="flex items-center gap-2">
                                    {project.github && (
                                      <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub Repository"
                                        className="p-2 rounded-xl transition-all hover:bg-white/10"
                                        style={{
                                          background: 'var(--glass-bg)',
                                          border: '1px solid var(--border-color)',
                                          color: 'var(--text-primary)',
                                        }}
                                      >
                                        <Github size={15} />
                                      </a>
                                    )}

                                    <button
                                      onClick={() => toggleMilestoneExpand(project.id)}
                                      className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold transition-all hover:bg-white/10"
                                      style={{
                                        background: 'var(--glass-bg)',
                                        border: '1px solid var(--border-color)',
                                        color: 'var(--text-primary)',
                                      }}
                                    >
                                      <span>{isExpanded ? 'Less' : 'Details'}</span>
                                      {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                                    </button>
                                  </div>
                                </div>

                                {/* Expandable Details */}
                                <AnimatePresence>
                                  {isExpanded && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="overflow-hidden mt-5 pt-5 border-t space-y-4"
                                      style={{ borderColor: 'var(--border-color)' }}
                                    >
                                      {/* Key Highlights */}
                                      <div>
                                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-accent-cyan mb-2">
                                          Core Engineering Highlights
                                        </h4>
                                        <ul className="space-y-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
                                          {project.highlights.map((h, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                              <span className="text-accent-cyan font-bold">•</span>
                                              <span>{h}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>

                                      {/* Evolving Features distinction if applicable */}
                                      {project.evolvingPlatform && (
                                        <div className="grid sm:grid-cols-2 gap-3 text-xs pt-2">
                                          {project.completedFeatures && (
                                            <div
                                              className="p-3 rounded-xl"
                                              style={{
                                                background: 'rgba(16, 185, 129, 0.05)',
                                                border: '1px solid rgba(16, 185, 129, 0.2)',
                                              }}
                                            >
                                              <div className="font-bold text-green-400 mb-1 flex items-center gap-1">
                                                <CheckCircle2 size={13} />
                                                Completed Functionality
                                              </div>
                                              <ul className="space-y-1 text-gray-300">
                                                {project.completedFeatures.slice(0, 3).map((f, i) => (
                                                  <li key={i} className="leading-tight">• {f}</li>
                                                ))}
                                              </ul>
                                            </div>
                                          )}

                                          {project.upcomingFeatures && (
                                            <div
                                              className="p-3 rounded-xl"
                                              style={{
                                                background: 'rgba(245, 158, 11, 0.05)',
                                                border: '1px solid rgba(245, 158, 11, 0.2)',
                                              }}
                                            >
                                              <div className="font-bold text-amber-400 mb-1 flex items-center gap-1">
                                                <Clock size={13} />
                                                Active / Upcoming Phases
                                              </div>
                                              <ul className="space-y-1 text-gray-300">
                                                {project.upcomingFeatures.slice(0, 3).map((f, i) => (
                                                  <li key={i} className="leading-tight">• {f}</li>
                                                ))}
                                              </ul>
                                            </div>
                                          )}
                                        </div>
                                      )}
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
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── MODE 2: PROJECT GRID VIEW ── */}
        {viewMode === 'grid' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {filteredProjects.length === 0 ? (
              <div className="text-center py-20 text-sm" style={{ color: 'var(--text-muted)' }}>
                No projects found matching the selected filters.
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <TiltCard
                      className="rounded-3xl overflow-hidden group flex flex-col h-full transition-all relative"
                      style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
                    >
                      {/* Image Thumbnail */}
                      <div className="aspect-video overflow-hidden relative bg-black/50">
                        <img
                          src={project.image}
                          alt={project.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                          <span className="px-2.5 py-1 bg-black/70 backdrop-blur-md rounded-full text-[10px] font-mono text-white border border-white/10">
                            {project.category}
                          </span>

                          <span
                            className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold ${
                              project.status === 'Completed'
                                ? 'bg-green-500/80 text-white'
                                : project.status === 'Ongoing'
                                ? 'bg-amber-500/80 text-black font-bold'
                                : 'bg-purple-500/80 text-white'
                            }`}
                          >
                            {project.status}
                          </span>
                        </div>

                        {/* Bottom Year info */}
                        <div className="absolute bottom-3 left-3">
                          <span className="text-[11px] font-mono text-gray-300 bg-black/60 px-2 py-0.5 rounded">
                            {project.developmentDate}
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6 md:p-7 flex-1 flex flex-col">
                        <h3
                          className="text-xl font-bold mb-2.5 group-hover:text-accent-cyan transition-colors flex justify-between items-center"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          <span>{project.name}</span>
                          <ArrowUpRight
                            className="opacity-0 group-hover:opacity-100 transition-opacity text-accent-cyan shrink-0"
                            size={18}
                          />
                        </h3>

                        <p className="text-xs sm:text-sm leading-relaxed mb-5 flex-1 line-clamp-3" style={{ color: 'var(--text-muted)' }}>
                          {project.description}
                        </p>

                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.stack.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] px-2 py-0.5 rounded font-mono"
                              style={{
                                color: 'var(--text-subtle)',
                                background: 'var(--glass-bg)',
                                border: '1px solid var(--border-color)',
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                          {project.stack.length > 4 && (
                            <span
                              className="text-[11px] px-2 py-0.5 rounded font-mono"
                              style={{
                                color: 'var(--text-subtle)',
                                background: 'var(--glass-bg)',
                                border: '1px solid var(--border-color)',
                              }}
                            >
                              +{project.stack.length - 4}
                            </span>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: 'var(--border-color)' }}>
                          <button
                            onClick={() => openCaseStudy(project)}
                            className="flex items-center gap-1.5 text-xs font-bold text-accent-cyan hover:opacity-80 transition-all group/btn"
                          >
                            <BookOpen size={14} className="group-hover/btn:scale-110 transition-transform" />
                            View Case Study
                            <ArrowUpRight size={12} className="opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                          </button>

                          <div className="flex items-center gap-2">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Repo"
                                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                              >
                                <Github size={15} />
                              </a>
                            )}
                            {project.liveDemo && (
                              <a
                                href={project.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Live Demo"
                                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                              >
                                <ExternalLink size={15} />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* Case Study Modal with 10-point analysis */}
      <CaseStudyModal project={selectedProject} onClose={closeCaseStudy} />
    </section>
  );
};

export default Showcases;
