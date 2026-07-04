import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Github, Linkedin, Send, Calendar,
  CheckCircle, AlertCircle, Loader, XCircle
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { PROFILE } from '../../data/portfolio';

declare global { interface Window { Calendly: any; } }

/* ─── EmailJS config ─── 
   Fill these in your .env.local file.
   See .env.example for key names.
   Keys starting with VITE_ are exposed to the browser bundle.
*/
const EJS_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string | undefined;
const EJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EJS_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string | undefined;
const EMAILJS_CONFIGURED = !!(EJS_SERVICE && EJS_TEMPLATE && EJS_KEY);

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface FD { name: string; email: string; message: string; }
interface FE { name?: string; email?: string; message?: string; }

const validate = (d: FD): FE => {
  const e: FE = {};
  if (!d.name.trim())           e.name    = 'Name is required.';
  else if (d.name.trim().length < 2) e.name = 'Name must be ≥ 2 characters.';
  if (!d.email.trim())          e.email   = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = 'Enter a valid email.';
  if (!d.message.trim())        e.message = 'Message is required.';
  else if (d.message.trim().length < 20) e.message = 'Message must be ≥ 20 characters.';
  return e;
};

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [fd, setFd]       = useState<FD>({ name: '', email: '', message: '' });
  const [errs, setErrs]   = useState<FE>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus]   = useState<Status>('idle');
  const [errMsg, setErrMsg]   = useState('');

  // Load Calendly
  useEffect(() => {
    const s = document.createElement('script');
    s.src = 'https://assets.calendly.com/assets/external/widget.js';
    s.async = true;
    document.body.appendChild(s);
    const l = document.createElement('link');
    l.href = 'https://assets.calendly.com/assets/external/widget.css';
    l.rel  = 'stylesheet';
    document.head.appendChild(l);
    return () => {
      if (document.body.contains(s))  document.body.removeChild(s);
      if (document.head.contains(l))  document.head.removeChild(l);
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) window.Calendly.initPopupWidget({ url: 'https://calendly.com/sakshambhore8902' });
    else alert('Scheduling system loading. Try again in a moment.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFd(p => ({ ...p, [name]: value }));
    if (touched[name]) {
      const v = validate({ ...fd, [name]: value });
      setErrs(p => ({ ...p, [name]: v[name as keyof FE] }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(p => ({ ...p, [name]: true }));
    setErrs(p => ({ ...p, [name]: validate(fd)[name as keyof FE] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const v = validate(fd);
    if (Object.keys(v).length > 0) { setErrs(v); return; }

    setStatus('submitting');
    setErrMsg('');

    try {
      if (EMAILJS_CONFIGURED && formRef.current) {
        // ── EmailJS path ──
        await emailjs.sendForm(EJS_SERVICE!, EJS_TEMPLATE!, formRef.current, { publicKey: EJS_KEY! });
      } else {
        // ── mailto fallback ──
        await new Promise(r => setTimeout(r, 700));
        const sub  = encodeURIComponent(`Portfolio Contact from ${fd.name}`);
        const body = encodeURIComponent(`Name: ${fd.name}\nEmail: ${fd.email}\n\nMessage:\n${fd.message}`);
        window.location.href = `mailto:${PROFILE.email}?subject=${sub}&body=${body}`;
      }
      setStatus('success');
      setFd({ name: '', email: '', message: '' });
      setTouched({});
      setErrs({});
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err: any) {
      setStatus('error');
      setErrMsg(err?.text || err?.message || 'Something went wrong. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputStyle = (field: keyof FE) => ({
    background: 'var(--input-bg)',
    borderColor:
      touched[field] && errs[field]     ? '#ef4444'
      : touched[field] && !errs[field]  ? 'rgba(0,245,255,0.45)'
      : 'var(--border-color)',
    color: 'var(--text-primary)',
  });

  return (
    <section
      id="contact"
      className="py-32 relative border-t"
      style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* ─── Left info column ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <p className="text-accent-cyan text-sm font-semibold uppercase tracking-[0.3em] mb-4">Get in Touch</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
              Ready to scale{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">
                your next idea?
              </span>
            </h2>
            <p className="mb-10 text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Whether you are looking for a co-founder, a lead engineer, or someone to architect your next big platform—my inbox is open.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-6 group transition-colors" style={{ color: 'var(--text-muted)' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-lg group-hover:scale-110"
                  style={{ background: 'var(--glass-bg)', border: '1px solid var(--border-color)' }}>
                  <Mail size={24} className="group-hover:text-accent-cyan transition-colors" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest mb-1" style={{ color: 'var(--text-subtle)' }}>Direct Email</p>
                  <p className="font-medium text-lg hover:text-accent-cyan transition-colors" style={{ color: 'var(--text-primary)' }}>{PROFILE.email}</p>
                </div>
              </a>

              <div onClick={openCalendly} className="flex items-center gap-6 group transition-colors cursor-pointer" style={{ color: 'var(--text-muted)' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-lg group-hover:scale-110"
                  style={{ background: 'var(--glass-bg)', border: '1px solid var(--border-color)' }}>
                  <Calendar size={24} className="group-hover:text-accent-purple transition-colors" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest mb-1" style={{ color: 'var(--text-subtle)' }}>Schedule Call</p>
                  <p className="font-medium text-lg" style={{ color: 'var(--text-primary)' }}>Book a Discovery Call</p>
                </div>
              </div>

              <div className="flex gap-4 pt-6 mt-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
                {[
                  { href: PROFILE.github,   icon: <Github size={20} />,   label: 'GitHub' },
                  { href: PROFILE.linkedin, icon: <Linkedin size={20} />, label: 'LinkedIn' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:text-accent-cyan"
                    style={{ background: 'var(--glass-bg)', border: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                    {s.icon}
                  </a>
                ))}
              </div>

              {/* EmailJS status badge */}
              <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-subtle)' }}>
                <span className={`w-2 h-2 rounded-full ${EMAILJS_CONFIGURED ? 'bg-green-400' : 'bg-amber-400'}`} />
                {EMAILJS_CONFIGURED ? 'EmailJS connected — messages sent directly' : 'Add EmailJS keys in .env.local for direct sending'}
              </div>
            </div>
          </motion.div>

          {/* ─── Right form column ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 rounded-[2rem] p-8 md:p-12 relative overflow-hidden shadow-2xl"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/10 blur-[80px] pointer-events-none" />

            <AnimatePresence mode="wait">

              {/* ── Success ── */}
              {status === 'success' && (
                <motion.div key="success"
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  className="relative z-10 flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-6">
                    <CheckCircle size={40} className="text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Message Sent! 🎉</h3>
                  <p style={{ color: 'var(--text-muted)' }}>
                    {EMAILJS_CONFIGURED
                      ? "Your message has been delivered. I'll reply within 24 hours!"
                      : "Your email client opened with the message pre-filled. I'll reply within 24 hours!"}
                  </p>
                </motion.div>
              )}

              {/* ── Error ── */}
              {status === 'error' && (
                <motion.div key="error"
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  className="relative z-10 flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-6">
                    <XCircle size={40} className="text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-red-400">Failed to send</h3>
                  <p className="mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>{errMsg}</p>
                  <button onClick={() => setStatus('idle')}
                    className="px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-80"
                    style={{ background: 'var(--glass-bg)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
                    Try Again
                  </button>
                </motion.div>
              )}

              {/* ── Form ── */}
              {(status === 'idle' || status === 'submitting') && (
                <motion.form
                  key="form" ref={formRef}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="space-y-8 relative z-10"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-subtle)' }}>
                        Your Name
                      </label>
                      <input
                        type="text" name="name" value={fd.name}
                        onChange={handleChange} onBlur={handleBlur}
                        className="w-full rounded-2xl px-5 py-4 focus:outline-none transition-all border"
                        style={inputStyle('name')}
                        placeholder="Enter your name"
                      />
                      {touched.name && errs.name && (
                        <p className="mt-2 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle size={12} /> {errs.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-subtle)' }}>
                        Email Address
                      </label>
                      <input
                        type="email" name="email" value={fd.email}
                        onChange={handleChange} onBlur={handleBlur}
                        className="w-full rounded-2xl px-5 py-4 focus:outline-none transition-all border"
                        style={inputStyle('email')}
                        placeholder="Enter your email"
                      />
                      {touched.email && errs.email && (
                        <p className="mt-2 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle size={12} /> {errs.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-subtle)' }}>
                      Message
                    </label>
                    <textarea
                      rows={5} name="message" value={fd.message}
                      onChange={handleChange} onBlur={handleBlur}
                      className="w-full rounded-2xl px-5 py-4 focus:outline-none transition-all resize-none border"
                      style={inputStyle('message')}
                      placeholder="How can we collaborate? (min. 20 characters)"
                    />
                    {touched.message && errs.message && (
                      <p className="mt-2 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={12} /> {errs.message}
                      </p>
                    )}
                    {fd.message.length > 0 && !errs.message && (
                      <p className="mt-2 text-xs" style={{ color: 'var(--text-subtle)' }}>{fd.message.length} characters</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full py-5 text-base disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {status === 'submitting' ? (
                      <><Loader size={18} className="animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={18} /> {EMAILJS_CONFIGURED ? 'Send via EmailJS' : 'Send Message'}</>
                    )}
                  </button>

                  {!EMAILJS_CONFIGURED && (
                    <p className="text-center text-xs" style={{ color: 'var(--text-subtle)' }}>
                      💡 Add your EmailJS keys to <code className="px-1 py-0.5 rounded text-accent-cyan" style={{ background: 'var(--glass-bg)' }}>.env.local</code> to send directly without opening email client.
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
