import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Terminal } from 'lucide-react';
import { PROFILE } from '../../data/portfolio';
import Button from '../ui/Button';

const ROLES = [
  "Software Engineer",
  "Full Stack Developer",
  "Mobile App Developer",
  "AI Product Builder",
  "Future Tech Founder"
];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-accent-cyan font-mono mb-8"
        >
          <Terminal size={16} />
          <div className="flex overflow-hidden h-5 items-center relative w-48">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 right-0 text-center font-bold"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[1.05] tracking-tighter mb-6 max-w-5xl"
        >
          <span className="block text-white">Building Digital Products</span>
          <span className="block hero-heading">That Create Real-World Impact</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed"
        >
          {PROFILE.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#showcases" as="a" icon={<ArrowRight size={18} />}>
            Explore Projects
          </Button>
          <Button href="#contact" as="a" variant="secondary" icon={<Terminal size={18} />}>
            Let's Build Something
          </Button>
        </motion.div>

        {/* Live Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-4xl"
        >
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 backdrop-blur-md flex flex-col items-center hover:bg-white/[0.04] transition-colors">
            <span className="text-3xl md:text-4xl font-bold text-accent-cyan mb-2">4+</span>
            <span className="text-xs uppercase tracking-widest text-gray-500 text-center font-medium">Production Modules</span>
          </div>
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 backdrop-blur-md flex flex-col items-center hover:bg-white/[0.04] transition-colors">
            <span className="text-3xl md:text-4xl font-bold text-accent-purple mb-2">8+</span>
            <span className="text-xs uppercase tracking-widest text-gray-500 text-center font-medium">Major Projects</span>
          </div>
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 backdrop-blur-md flex flex-col items-center hover:bg-white/[0.04] transition-colors">
            <span className="text-3xl md:text-4xl font-bold text-white mb-2">10+</span>
            <span className="text-xs uppercase tracking-widest text-gray-500 text-center font-medium">APIs Developed</span>
          </div>
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 backdrop-blur-md flex flex-col items-center hover:bg-white/[0.04] transition-colors">
            <span className="text-3xl md:text-4xl font-bold text-white mb-2">5+</span>
            <span className="text-xs uppercase tracking-widest text-gray-500 text-center font-medium">Platforms & Tech</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
