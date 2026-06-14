import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Terminal, Mail, Download, User, Briefcase, Layers, Code2 } from 'lucide-react';
import { PROFILE } from '../../data/portfolio';

const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setIsOpen(false);
    alert('Email copied to clipboard!');
  };

  const navigateTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const commands = [
    { id: 'about', label: 'Go to About section', icon: <User size={16} />, action: () => navigateTo('about') },
    { id: 'experience', label: 'Go to Experience', icon: <Briefcase size={16} />, action: () => navigateTo('experience') },
    { id: 'stack', label: 'View Tech Stack', icon: <Code2 size={16} />, action: () => navigateTo('stack') },
    { id: 'showcases', label: 'View Projects', icon: <Layers size={16} />, action: () => navigateTo('showcases') },
    { id: 'copy-email', label: 'Copy Email Address', icon: <Mail size={16} />, action: copyEmail },
    { id: 'resume', label: 'Download Resume', icon: <Download size={16} />, action: () => { setIsOpen(false); window.open(PROFILE.resumePath, '_blank'); } },
  ];

  const filteredCommands = commands.filter(c => c.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      {/* Keyboard Shortcut Hint for Desktop */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-gray-400 text-xs">
        <Terminal size={12} />
        <span>Press</span>
        <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono font-bold">⌘K</kbd>
        <span>or</span>
        <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono font-bold">Ctrl K</kbd>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-lg bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-center px-4 py-3 border-b border-white/10">
                <Search className="text-gray-400 mr-3" size={20} />
                <input
                  type="text"
                  autoFocus
                  placeholder="Type a command or search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent text-white focus:outline-none placeholder-gray-600 text-lg"
                />
                <kbd className="hidden sm:inline-block px-2 py-1 rounded bg-white/5 border border-white/10 text-xs text-gray-500 font-mono">ESC</kbd>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-2">
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((cmd) => (
                    <button
                      key={cmd.id}
                      onClick={cmd.action}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-gray-300 hover:bg-accent-cyan/10 hover:text-accent-cyan transition-colors"
                    >
                      {cmd.icon}
                      {cmd.label}
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-8 text-center text-gray-500">
                    No commands found for "{query}"
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;
