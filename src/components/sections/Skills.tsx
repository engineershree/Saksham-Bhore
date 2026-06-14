import React from 'react';
import { motion } from 'framer-motion';
import { TECH_STACK } from '../../data/portfolio';
import TiltCard from '../ui/TiltCard';

const Skills: React.FC = () => {
  return (
    <section id="stack" className="py-32 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-accent-cyan text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Technical Arsenal
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
            Comprehensive expertise across the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">entire product stack.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {TECH_STACK.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard className="group relative bg-[#0f0f0f] border border-white/5 rounded-3xl p-8 overflow-hidden hover:border-white/10 transition-colors h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <h3 className="text-xl font-bold text-white mb-8 flex items-center justify-between relative z-10">
                  {group.category}
                  <span className="w-8 h-[1px] bg-white/20 group-hover:bg-accent-cyan/50 transition-colors" />
                </h3>
                
                <div className="flex flex-wrap gap-2 relative z-10">
                  {group.items.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 bg-black border border-white/10 rounded-xl text-sm text-gray-400 group-hover:text-gray-300 hover:!border-accent-cyan/50 hover:!text-white transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
