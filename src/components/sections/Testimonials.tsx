import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Saksham is an exceptional developer who consistently delivers high-quality code. His ability to optimize backend performance while maintaining clean architecture is remarkable.",
      author: "Rushikesh Mhetre",
      role: "Software Engineer",
      company: ""
    },
    {
      text: "Working with Saksham was a great experience. He takes ownership of his projects, communicates effectively, and always keeps the end-user in mind.",
      author: "Suraj More",
      role: "Colleague",
      company: ""
    },
    {
      text: "A true problem solver. Saksham's work significantly improved our workflows and application performance. Highly recommended.",
      author: "Jaypal Tupare",
      role: "Full Stack Developer",
      company: ""
    },
    {
      text: "Saksham writes incredibly clean, bug-free code that is a pleasure to test. His attention to edge cases and system reliability makes him a standout engineer.",
      author: "Pratham Bagnikar",
      role: "Software Tester",
      company: ""
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gray-400 text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Endorsements
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            What People Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 relative hover:bg-white/[0.04] transition-colors"
            >
              <div className="text-6xl text-white/10 font-serif absolute top-4 left-6">"</div>
              <p className="text-gray-300 text-sm leading-relaxed mb-8 relative z-10">
                {t.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center text-white font-bold text-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">{t.author}</h4>
                  <p className="text-xs text-gray-500">{t.role}{t.company ? `, ${t.company}` : ''}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
