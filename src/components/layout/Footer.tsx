import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../../data/portfolio';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold tracking-tight text-white mb-2">
            {PROFILE.name}<span className="text-accent-cyan">.</span>
          </h3>
          <p className="text-sm text-gray-500 uppercase tracking-widest">
            {PROFILE.role}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-cyan/50 hover:bg-accent-cyan/10 transition-all"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-cyan/50 hover:bg-accent-cyan/10 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-cyan/50 hover:bg-accent-cyan/10 transition-all"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className="text-sm text-gray-500 text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} {PROFILE.name}.</p>
          <p className="text-xs mt-1">Built with React & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
