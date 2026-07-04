import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../../data/portfolio';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 border-t" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold tracking-tight mb-2" style={{ color: 'var(--text-primary)' }}>
            {PROFILE.name}<span className="text-accent-cyan">.</span>
          </h3>
          <p className="text-sm uppercase tracking-widest" style={{ color: 'var(--text-subtle)' }}>
            {PROFILE.role}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:text-accent-cyan hover:scale-110"
            style={{ border: '1px solid var(--border-color)', background: 'var(--glass-bg)', color: 'var(--text-muted)' }}
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:text-accent-cyan hover:scale-110"
            style={{ border: '1px solid var(--border-color)', background: 'var(--glass-bg)', color: 'var(--text-muted)' }}
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:text-accent-cyan hover:scale-110"
            style={{ border: '1px solid var(--border-color)', background: 'var(--glass-bg)', color: 'var(--text-muted)' }}
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className="text-sm text-center md:text-right" style={{ color: 'var(--text-subtle)' }}>
          <p>&copy; {new Date().getFullYear()} {PROFILE.name}.</p>
          <p className="text-xs mt-1">Built with React & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
