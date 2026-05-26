import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import DevAvatar from "./components/DevAvatar";
import {
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCE,
  LEADERSHIP,
  NAV_LINKS,
  PROFILE,
  PROJECTS,
  TECH_STACK,
} from "./data/portfolio";

const ease = [0.25, 0.1, 0.25, 1] as const;

function Fade({
  children,
  className = "",
  delay = 0,
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Glass({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="text-accent-cyan text-xs font-semibold uppercase tracking-[0.35em] mb-3">
        {eyebrow}
      </p>
      <h2 className="hero-heading text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-tight">
        {title}
      </h2>
    </div>
  );
}

function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={PROFILE.github}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-pill hover:border-accent-cyan/40"
        aria-label="GitHub"
      >
        <Github size={18} />
        <span className="hidden sm:inline">GitHub</span>
      </a>
      <a
        href={PROFILE.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-pill hover:border-accent-cyan/40"
        aria-label="LinkedIn"
      >
        <Linkedin size={18} />
        <span className="hidden sm:inline">LinkedIn</span>
      </a>
      <a href={`mailto:${PROFILE.email}`} className="glass-pill hover:border-accent-cyan/40">
        <Mail size={18} />
        <span className="hidden sm:inline">Email</span>
      </a>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-[#0C0C0C]/80 backdrop-blur-xl border-b border-white/5" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-4">
        <a href="#hero" className="font-semibold tracking-tight text-[#D7E2EA] text-lg shrink-0">
          {PROFILE.firstName}
          <span className="text-accent-cyan">.</span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest text-[#D7E2EA]/70 hover:text-[#D7E2EA] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={PROFILE.resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium px-4 py-2 rounded-full border border-white/15 hover:bg-white/5 transition-colors"
        >
          <Download size={14} />
          Resume
        </a>
      </div>
      <nav className="lg:hidden max-w-6xl mx-auto px-5 sm:px-8 mt-3 flex gap-4 overflow-x-auto pb-1 scrollbar-hide">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/60 hover:text-[#D7E2EA] whitespace-nowrap shrink-0"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="hero-glow absolute inset-0 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <Fade delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-widest text-[#D7E2EA]/80 mb-6">
                <Sparkles size={14} className="text-accent-cyan" />
                {PROFILE.role}
              </div>
            </Fade>
            <Fade delay={0.1}>
              <h1 className="text-[clamp(2.5rem,7vw,4.75rem)] font-bold leading-[1.05] tracking-tight mb-4">
                <span className="hero-heading block">Hi, I&apos;m</span>
                <span className="text-[#D7E2EA] block mt-1">{PROFILE.name}</span>
              </h1>
            </Fade>
            <Fade delay={0.15}>
              <p className="text-[#D7E2EA]/75 text-lg md:text-xl leading-relaxed max-w-xl mb-6">
                I build production-grade web &amp; mobile products with{" "}
                <span className="text-[#D7E2EA]">React</span>,{" "}
                <span className="text-[#D7E2EA]">Node.js</span>, and{" "}
                <span className="text-[#D7E2EA]">PostgreSQL</span> — shipped for real users.
              </p>
            </Fade>
            <Fade delay={0.2}>
              <div className="flex flex-wrap items-center gap-4 text-sm text-[#D7E2EA]/60 mb-8">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={15} className="text-accent-cyan" />
                  {PROFILE.location}
                </span>
                <span className="text-white/20">|</span>
                <span>{PROFILE.relocation}</span>
              </div>
            </Fade>
            <Fade delay={0.25}>
              <SocialLinks className="mb-8" />
            </Fade>
            <Fade delay={0.3} className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Contact Me
                <ArrowUpRight size={16} />
              </a>
              <a
                href={PROFILE.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Download size={16} />
                Download Resume
              </a>
            </Fade>
          </div>
          <Fade delay={0.2} y={40} className="flex justify-center lg:justify-end">
            <DevAvatar size={320} glow className="max-w-[min(100%,360px)]" />
          </Fade>
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  const pills = useMemo(
    () => TECH_STACK.flatMap((g) => g.items.map((item) => ({ item, category: g.category }))),
    [],
  );

  return (
    <section id="stack" className="py-20 md:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Fade>
          <SectionTitle eyebrow="Technical Skills" title="Tech Stack" />
        </Fade>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {TECH_STACK.map((group, i) => (
            <Fade key={group.category} delay={i * 0.05}>
              <Glass className="p-5 h-full hover:border-accent-cyan/20 transition-colors">
                <h3 className="text-xs font-bold uppercase tracking-widest text-accent-cyan mb-4">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((skill) => (
                    <li key={skill} className="text-sm text-[#D7E2EA]/80">
                      {skill}
                    </li>
                  ))}
                </ul>
              </Glass>
            </Fade>
          ))}
        </div>
        <Fade>
          <div className="flex flex-wrap gap-2 justify-center">
            {pills.map(({ item }) => (
              <span key={item} className="tech-pill">
                {item}
              </span>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Fade>
          <SectionTitle eyebrow="Profile" title="About Me" />
        </Fade>
        <Fade delay={0.1}>
          <Glass className="p-8 md:p-12 max-w-4xl">
            <p className="text-[#D7E2EA]/85 text-lg leading-relaxed">{PROFILE.summary}</p>
            <div className="mt-8 pt-8 border-t border-white/10 grid sm:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs mb-1">Email</p>
                <a href={`mailto:${PROFILE.email}`} className="text-[#D7E2EA] hover:text-accent-cyan">
                  {PROFILE.email}
                </a>
              </div>
              <div>
                <p className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs mb-1">Phone</p>
                <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} className="text-[#D7E2EA] hover:text-accent-cyan inline-flex items-center gap-1">
                  <Phone size={14} />
                  {PROFILE.phone}
                </a>
              </div>
            </div>
          </Glass>
        </Fade>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-white/5 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Fade>
          <SectionTitle eyebrow="Career" title="Experience" />
        </Fade>
        <div className="space-y-6">
          {EXPERIENCE.map((job, i) => (
            <Fade key={job.company} delay={i * 0.08}>
              <Glass className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center shrink-0">
                      <Briefcase size={20} className="text-accent-cyan" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#D7E2EA]">{job.role}</h3>
                      <p className="text-accent-cyan/90 font-medium">{job.company}</p>
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 border border-white/10 px-3 py-1.5 rounded-full">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-3 pl-0 md:pl-[3.25rem]">
                  {job.points.map((point) => (
                    <li key={point.slice(0, 40)} className="flex gap-3 text-[#D7E2EA]/75 text-sm leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-cyan shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Glass>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Fade>
          <SectionTitle eyebrow="Selected Work" title="Projects" />
        </Fade>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <Fade key={project.name} delay={i * 0.06}>
              <Glass className="p-6 md:p-8 h-full flex flex-col hover:border-accent-cyan/25 transition-colors group">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent-cyan">
                    {project.year}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/40">
                    Production build
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-[#D7E2EA] mb-2 group-hover:text-accent-cyan transition-colors">
                  {project.name}
                </h3>
                <p className="text-[#D7E2EA]/70 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-pill text-[10px]">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 border-t border-white/10 pt-4">
                  {project.highlights.map((h) => (
                    <li key={h} className="text-xs text-[#D7E2EA]/65 flex gap-2">
                      <span className="text-accent-cyan">→</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </Glass>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

function MoreSection() {
  return (
    <section className="py-20 md:py-28 border-t border-white/5 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-3 gap-6">
        <Fade>
          <Glass className="p-6 md:p-8 lg:col-span-1 h-full">
            <GraduationCap className="text-accent-cyan mb-4" size={28} />
            <h3 className="text-lg font-semibold text-[#D7E2EA] mb-2">Education</h3>
            <p className="font-medium text-[#D7E2EA]/90">{EDUCATION.degree}</p>
            <p className="text-sm text-[#D7E2EA]/60 mt-1">{EDUCATION.school}</p>
            <p className="text-xs text-accent-cyan/80 mt-2 uppercase tracking-widest">
              {EDUCATION.period} · CGPA {EDUCATION.cgpa}
            </p>
            <p className="text-xs text-[#D7E2EA]/50 mt-4 leading-relaxed">{EDUCATION.coursework}</p>
          </Glass>
        </Fade>
        <Fade delay={0.08}>
          <Glass className="p-6 md:p-8 lg:col-span-1 h-full">
            <h3 className="text-lg font-semibold text-[#D7E2EA] mb-4">Certifications</h3>
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.title}>
                <p className="font-medium text-[#D7E2EA]/90">{cert.title}</p>
                <p className="text-sm text-[#D7E2EA]/60">{cert.issuer}</p>
                <p className="text-xs text-accent-cyan/80 mt-1 uppercase tracking-widest">{cert.period}</p>
                <p className="text-xs text-[#D7E2EA]/50 mt-3 leading-relaxed">{cert.detail}</p>
              </div>
            ))}
          </Glass>
        </Fade>
        <Fade delay={0.12}>
          <Glass className="p-6 md:p-8 lg:col-span-1 h-full">
            <h3 className="text-lg font-semibold text-[#D7E2EA] mb-2">Leadership</h3>
            <p className="font-medium text-accent-cyan/90 text-sm">{LEADERSHIP.role}</p>
            <p className="text-sm text-[#D7E2EA]/60">{LEADERSHIP.org}</p>
            <p className="text-xs text-[#D7E2EA]/40 mt-1 mb-4 uppercase tracking-widest">
              {LEADERSHIP.period}
            </p>
            <ul className="space-y-2">
              {LEADERSHIP.points.map((p) => (
                <li key={p.slice(0, 30)} className="text-xs text-[#D7E2EA]/65 leading-relaxed flex gap-2">
                  <span className="text-accent-cyan shrink-0">•</span>
                  {p}
                </li>
              ))}
            </ul>
          </Glass>
        </Fade>
      </div>
    </section>
  );
}

function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="hero-glow absolute inset-0 pointer-events-none opacity-60" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
        <Fade>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionTitle eyebrow="Get in touch" title="Let's Build Together" />
            <p className="text-[#D7E2EA]/70 -mt-8">
              Open to Full Stack, Frontend, Backend, and Mobile roles. Reach out for collaborations or
              opportunities.
            </p>
          </div>
        </Fade>
        <Fade delay={0.1}>
          <Glass className="p-8 md:p-12 max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <DevAvatar size={120} className="!w-[100px] !h-[115px] rounded-2xl" />
            </div>
            <h3 className="text-2xl font-semibold text-[#D7E2EA] mb-2">{PROFILE.name}</h3>
            <p className="text-[#D7E2EA]/60 mb-8">{PROFILE.role}</p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <SocialLinks />
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`mailto:${PROFILE.email}`} className="btn-primary">
                <Mail size={16} />
                Email Me
              </a>
              <button type="button" onClick={copyEmail} className="btn-secondary">
                {copied ? "Copied!" : "Copy Email"}
              </button>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </Glass>
        </Fade>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#D7E2EA]/50">
        <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href={PROFILE.github} className="hover:text-[#D7E2EA] transition-colors" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={PROFILE.linkedin} className="hover:text-[#D7E2EA] transition-colors" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA]">
      <Navbar />
      <main>
        <HeroSection />
        <TechStackSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <MoreSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
