import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Terminal, MapPin, Mail } from 'lucide-react';
import { PROFILE } from '../../data/portfolio';
import Button from '../ui/Button';

const ROLES = [
  "Software Engineer",
  "Java Full Stack Developer",
  "Backend Engineer",
  "Full Stack Developer"
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

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Role Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm text-sm text-accent-cyan font-mono mb-8"
              style={{ borderColor: 'var(--border-color)', background: 'var(--glass-bg)' }}
            >
              <Terminal size={16} />
              <div className="flex overflow-hidden h-5 items-center relative w-52">
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
              className="text-[clamp(2.5rem,5vw,4.8rem)] font-extrabold leading-[1.05] tracking-tighter mb-6"
            >
              <span className="block" style={{ color: 'var(--text-primary)' }}>Building Digital Products</span>
              <span className="block hero-heading">That Create Real-World Impact</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-2xl text-lg md:text-xl mb-4 leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              {PROFILE.summary}
            </motion.p>

            {/* Location + Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start"
            >
              <span className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-subtle)' }}>
                <MapPin size={14} className="text-accent-cyan" />
                {PROFILE.location}
              </span>
              <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 text-sm hover:text-accent-cyan transition-colors" style={{ color: 'var(--text-subtle)' }}>
                <Mail size={14} className="text-accent-cyan" />
                {PROFILE.email}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Button href="#showcases" as="a" icon={<ArrowRight size={18} />}>
                View Engineering Work
              </Button>
              <Button href="#contact" as="a" variant="secondary" icon={<Terminal size={18} />}>
                Let's Talk Tech
              </Button>
            </motion.div>
          </div>

          {/* Right: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 relative"
          >
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-accent-cyan/20 blur-2xl scale-110 animate-pulse" style={{ animationDuration: '4s' }} />

            {/* Decorative rings */}
            <div className="absolute -inset-3 rounded-full border border-accent-cyan/20 animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute -inset-6 rounded-full border border-accent-purple/10 animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />

            {/* Photo */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl"
              style={{ border: '3px solid rgba(0, 245, 255, 0.3)' }}>
              <img
                src={PROFILE.avatar}
                alt={PROFILE.name}
                className="w-full h-full object-cover object-top"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(0,245,255,0.08) 100%)' }} />
            </div>

            {/* Name badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full text-center whitespace-nowrap shadow-xl"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <p className="text-xs font-mono text-accent-cyan font-bold">{PROFILE.name}</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Live Metrics — below both columns */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full"
        >
          {[
            { value: '4+', label: 'Production Modules', color: 'text-accent-cyan' },
            { value: '8+', label: 'Major Projects', color: 'text-accent-purple' },
            { value: '10+', label: 'APIs Developed', color: 'text-white' },
            { value: '5+', label: 'Platforms & Tech', color: 'text-white' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl p-6 backdrop-blur-md flex flex-col items-center transition-all hover:-translate-y-1"
              style={{ background: 'var(--glass-bg)', border: '1px solid var(--border-color)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--glass-bg-hover)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--glass-bg)'; }}
            >
              <span className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</span>
              <span className="text-xs uppercase tracking-widest text-center font-medium" style={{ color: 'var(--text-subtle)' }}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
