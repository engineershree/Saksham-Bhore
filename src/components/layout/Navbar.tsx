import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { PROFILE, NAV_LINKS } from '../../data/portfolio';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-4 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <motion.a 
            href="#hero" 
            className="text-xl font-bold tracking-tight text-white flex items-center gap-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {PROFILE.firstName}<span className="text-accent-cyan">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-sm font-medium uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Resume CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <motion.a
              href={PROFILE.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Download size={16} />
              Resume
            </motion.a>

            <button 
              className="md:hidden text-gray-300 hover:text-white p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          className="fixed inset-0 z-[60] bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button 
            className="absolute top-6 right-6 text-gray-400 hover:text-white p-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          <nav className="flex flex-col items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-2xl font-bold uppercase tracking-widest text-white hover:text-accent-cyan transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={PROFILE.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 px-8 py-4 rounded-full bg-accent-cyan text-[#0a0a0a] font-bold uppercase tracking-widest"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download size={20} />
              Resume
            </a>
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
