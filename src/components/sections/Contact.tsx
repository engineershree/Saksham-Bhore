import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Calendar } from 'lucide-react';
import { PROFILE } from '../../data/portfolio';
import Button from '../ui/Button';

// Calendly type definition to avoid TS errors
declare global {
  interface Window {
    Calendly: any;
  }
}

const Contact: React.FC = () => {
  useEffect(() => {
    // Dynamically load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Also load the CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ 
        // REPLACE THIS URL WITH YOUR ACTUAL CALENDLY URL
        url: 'https://calendly.com/sakshambhore8902' 
      });
    } else {
      alert("Scheduling system is currently loading. Please try again in a moment.");
    }
  };

  return (
    <section id="contact" className="py-32 relative bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <p className="text-accent-cyan text-sm font-semibold uppercase tracking-[0.3em] mb-4">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">your next idea?</span>
            </h2>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
              Whether you are looking for a co-founder, a lead engineer, or someone to architect your next big platform—my inbox is open.
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-6 text-gray-400 hover:text-white group transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent-cyan/10 group-hover:border-accent-cyan/30 transition-all shadow-lg">
                  <Mail size={24} className="group-hover:text-accent-cyan transition-colors" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-gray-500 mb-1">Direct Email</p>
                  <p className="font-medium text-lg">{PROFILE.email}</p>
                </div>
              </a>

              {/* Calendly Booking Button */}
              <div 
                onClick={openCalendly}
                className="flex items-center gap-6 text-gray-400 group transition-colors cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent-purple/10 group-hover:border-accent-purple/30 transition-all shadow-lg">
                  <Calendar size={24} className="group-hover:text-accent-purple transition-colors" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-gray-500 mb-1">Schedule Call</p>
                  <p className="font-medium text-lg text-white">Book a Discovery Call</p>
                </div>
              </div>
              
              <div className="flex gap-4 pt-6 mt-6 border-t border-white/10">
                <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all">
                  <Github size={20} />
                </a>
                <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-[#0f0f0f] border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/10 blur-[80px]" />
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-accent-cyan/50 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-accent-cyan/50 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-accent-cyan/50 transition-colors resize-none"
                  placeholder="How can we collaborate?"
                />
              </div>
              <Button type="submit" className="w-full py-5 text-base" icon={<Send size={18} />}>
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
