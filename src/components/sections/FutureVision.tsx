import React from 'react';
import { motion } from 'framer-motion';
import { FUTURE_VISION } from '../../data/portfolio';

const FutureVision: React.FC = () => {
  return (
    <section id="vision" className="py-32 relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-accent-cyan/5 to-accent-purple/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-accent-cyan text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Long-term Ambition
          </p>
          <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight" style={{ color: 'var(--text-primary)' }}>
            Building Technology for the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">Next Generation</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FUTURE_VISION.map((vision, index) => (
            <motion.div
              key={vision.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
            >
              <div className="w-12 h-12 rounded-2xl mb-6 flex items-center justify-center" style={{ background: 'var(--glass-bg)', border: '1px solid var(--border-color)' }}>
                <span className="text-xl font-serif italic text-white/50">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>{vision.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {vision.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureVision;
