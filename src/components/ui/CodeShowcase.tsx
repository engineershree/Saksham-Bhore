import React from 'react';
import { motion } from 'framer-motion';

const codeSnippet = `
function buildFuture(developer, vision) {
  if (developer.passion >= Infinity) {
    return new TechStartup({
      founder: developer.name,
      impact: 'Global',
      stack: ['AI', 'React', 'Node.js', 'PostgreSQL'],
      status: 'Scaling'
    });
  }
  return null;
}

// Executing vision...
const saksham = new Engineer('Saksham Bhore');
buildFuture(saksham, 'Empower Communities');
`.trim();

const CodeShowcase: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-md mx-auto mt-10 rounded-xl overflow-hidden border border-white/10 bg-[#0f0f0f] shadow-2xl"
    >
      <div className="flex items-center px-4 py-3 border-b border-white/5 bg-[#151515]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <p className="ml-4 text-xs font-mono text-gray-500">vision.ts</p>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono leading-relaxed text-gray-300">
          <code>
            {codeSnippet.split('\n').map((line, i) => {
              // Basic syntax highlighting logic
              const highlighted = line
                .replace(/function/g, '<span class="text-accent-purple">function</span>')
                .replace(/return/g, '<span class="text-accent-purple">return</span>')
                .replace(/if/g, '<span class="text-accent-purple">if</span>')
                .replace(/const/g, '<span class="text-accent-cyan">const</span>')
                .replace(/new/g, '<span class="text-accent-cyan">new</span>')
                .replace(/'[^']*'/g, match => `<span class="text-yellow-300">${match}</span>`)
                .replace(/\/\/.*$/g, match => `<span class="text-gray-500">${match}</span>`);

              return (
                <div key={i} className="flex">
                  <span className="w-8 text-gray-600 select-none border-r border-white/5 mr-4 pr-2 text-right">{i + 1}</span>
                  <span dangerouslySetInnerHTML={{ __html: highlighted }} />
                </div>
              );
            })}
          </code>
        </pre>
      </div>
    </motion.div>
  );
};

export default CodeShowcase;
