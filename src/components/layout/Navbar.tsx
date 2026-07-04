import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, Sun, Moon } from 'lucide-react';
import { PROFILE, NAV_LINKS } from '../../data/portfolio';
import { useTheme } from '../../context/ThemeContext';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();

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
          scrolled ? 'py-4 backdrop-blur-xl border-b' : 'py-6 bg-transparent'
        }`}
        style={scrolled ? { background: 'var(--navbar-bg)', borderColor: 'var(--border-color)' } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <motion.a 
            href="#hero" 
            className="text-xl font-bold tracking-tight flex items-center gap-1"
            style={{ color: 'var(--text-primary)' }}
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
                className="text-sm font-medium uppercase tracking-widest transition-colors hover:text-accent-cyan"
                style={{ color: 'var(--text-muted)' }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-3">
            {/* Dark / Light Mode Toggle */}
            <motion.button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{
                background: 'var(--glass-bg)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-secondary)',
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ rotate: -30, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 30, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-indigo-500" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <motion.a
              href="#resume"
              aria-label="View Resume Versions"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border text-accent-cyan text-sm uppercase tracking-widest transition-all backdrop-blur-sm font-semibold"
              style={{
                borderColor: 'rgba(0, 245, 255, 0.3)',
                background: 'rgba(0, 245, 255, 0.08)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(0, 245, 255, 0.18)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0, 245, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(0, 245, 255, 0.08)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0, 245, 255, 0.3)';
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Download size={16} />
              Resume
            </motion.a>

            <button 
              className="md:hidden p-2 transition-colors"
              style={{ color: 'var(--text-muted)' }}
              aria-label="Open Mobile Menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-[60] backdrop-blur-xl flex flex-col items-center justify-center"
            style={{ background: isDark ? 'rgba(10,10,10,0.97)' : 'rgba(248,250,252,0.97)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button 
              className="absolute top-6 right-6 p-2 transition-colors"
              style={{ color: 'var(--text-muted)' }}
              aria-label="Close Mobile Menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-2xl font-bold uppercase tracking-widest transition-colors hover:text-accent-cyan"
                  style={{ color: 'var(--text-primary)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-4 mt-4">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-6 py-3 rounded-full transition-all"
                  style={{ background: 'var(--glass-bg)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}
                >
                  {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-500" />}
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </button>
                <a
                  href="#resume"
                  className="flex items-center gap-2 px-8 py-4 rounded-full bg-accent-cyan text-[#0a0a0a] font-bold uppercase tracking-widest"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Download size={20} />
                  Resume
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
