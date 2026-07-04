import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../../data/portfolio';
import CodeShowcase from '../ui/CodeShowcase';
import { MapPin, Briefcase, GraduationCap, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative" style={{ background: 'var(--bg-primary)' }}>
      <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-accent-cyan/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden relative group shadow-2xl"
              style={{ border: '1px solid var(--border-color)' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 bg-accent-cyan/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700" />
              <img 
                src={PROFILE.avatar} 
                alt={PROFILE.name} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <p className="text-accent-cyan font-mono text-sm mb-2">// THE BUILDER</p>
                <h3 className="text-2xl font-bold text-white">{PROFILE.name}</h3>
                <p className="text-gray-400 text-sm">{PROFILE.role}</p>
              </div>
            </div>

            {/* Quick info cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 grid grid-cols-2 gap-4"
            >
              {[
                { icon: <MapPin size={16} />, label: 'Location', value: 'Pune, India' },
                { icon: <Briefcase size={16} />, label: 'Status', value: 'Open to Work' },
                { icon: <GraduationCap size={16} />, label: 'Degree', value: 'B.E. CS' },
                { icon: <Rocket size={16} />, label: 'Goal', value: 'Tech Founder' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl p-4 transition-all"
                  style={{ background: 'var(--glass-bg)', border: '1px solid var(--border-color)' }}>
                  <div className="flex items-center gap-2 mb-1" style={{ color: 'var(--text-subtle)' }}>
                    <span className="text-accent-cyan">{item.icon}</span>
                    <span className="text-xs uppercase tracking-wider">{item.label}</span>
                  </div>
                  <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{item.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <p className="text-accent-cyan text-sm font-semibold uppercase tracking-[0.3em] mb-6">
              My Story
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight" style={{ color: 'var(--text-primary)' }}>
              From an engineering student <br className="hidden md:block" />
              <span style={{ color: 'var(--text-muted)' }}>to a production system architect.</span>
            </h2>

            <div className="space-y-6 text-lg leading-relaxed font-light" style={{ color: 'var(--text-muted)' }}>
              <p>
                My journey into technology wasn't just about learning to write code—it was driven by an insatiable curiosity about how things work under the hood. As an engineering student, I realized early on that software is the most powerful lever we have to solve real-world problems.
              </p>
              <p>
                This curiosity quickly evolved into a passion for software architecture. I transitioned from building simple academic projects to architecting robust, production-ready systems at <span style={{ color: 'var(--text-primary)' }} className="font-medium">RSL Solutions</span> and <span style={{ color: 'var(--text-primary)' }} className="font-medium">DX RAD</span>. I learned that true engineering isn't just about making things work; it's about making them scalable, secure, and maintainable.
              </p>
              <p>
                Today, I am deeply focused on the intersection of <span className="text-accent-cyan font-medium">Software Engineering</span> and <span className="text-accent-purple font-medium">Artificial Intelligence</span>. I build AI-powered platforms and complex web/mobile applications that empower communities and enhance learning.
              </p>
              <p>
                Beyond the code, I am a leader and a future founder. Having led technical communities like CESA, I understand the value of mentorship and building great teams. My ultimate ambition is to launch my own tech startup, building innovative products that leave a lasting impact on the world.
              </p>
            </div>
            
            <div className="mt-12 hidden md:block">
              <CodeShowcase />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
