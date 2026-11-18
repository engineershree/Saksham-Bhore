import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Mic2 } from 'lucide-react';
import { LEADERSHIP } from '../../data/portfolio';

const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-24 relative" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-cyan text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Community
          </p>
          <h2 className="text-3xl md:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Leadership & Mentorship
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-3 rounded-3xl p-8 md:p-12"
            style={{ background: 'var(--glass-bg)', border: '1px solid var(--border-color)' }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="w-16 h-16 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center shrink-0">
                <Users className="text-accent-cyan" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{LEADERSHIP.role}</h3>
                <p className="mb-2" style={{ color: 'var(--text-muted)' }}>{LEADERSHIP.org}</p>
                <span className="inline-block px-3 py-1 rounded text-xs uppercase tracking-wider" style={{ background: 'var(--glass-bg)', color: 'var(--text-subtle)' }}>
                  {LEADERSHIP.period}
                </span>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {LEADERSHIP.points.map((point, index) => (
                <div key={index} className="p-6 rounded-2xl flex flex-col justify-between" style={{ background: 'var(--glass-bg)', border: '1px solid var(--border-color)' }}>
                  {index === 0 && <Award className="text-yellow-500 mb-4" size={24} />}
                  {index === 1 && <Users className="text-accent-cyan mb-4" size={24} />}
                  {index === 2 && <Mic2 className="text-accent-purple mb-4" size={24} />}
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
