import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github,
  Mail, 
  ExternalLink, 
  Code, 
  Database, 
  Layers, 
  Shield, 
  Terminal, 
  Cpu, 
  Smartphone, 
  ChevronRight,
  Menu,
  X,
  FileText,
  Briefcase,
  User,
  Coffee,
  CheckCircle2
} from 'lucide-react';

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const Linkedin = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

// Using constants for Saksham's data
const PERSONAL_INFO = {
  name: "Saksham Bhore",
  location: "Maharashtra, India",
  email: "sakshambhore8902@gmail.com",
  tagline: "Building Production-Ready Systems with Scalable Architecture",
  summary: "Results-oriented Software Developer with hands-on experience in building scalable full-stack applications using React.js, JavaScript, and Node.js. Delivered 4+ production-ready modules and optimized backend performance by 30-40%. Expert in REST API integration, JWT-based authentication, and modular system design with a strong focus on measurable business impact.",
  resumeLink: "/assets/Saksham_Bhore_I2_20(1).pdf",
  keyStack: ["React.js", "Node.js", "PostgreSQL", "JavaScript"]
};

const SKILLS = [
  { category: "Languages", items: ["JavaScript", "Java", "Python", "SQL"], icon: <Code className="w-5 h-5 text-accentCyan" /> },
  { category: "Frontend", items: ["React.js", "HTML5", "CSS3", "Bootstrap"], icon: <Layers className="w-5 h-5 text-accentPurple" /> },
  { category: "Backend", items: ["Node.js", "RESTful API Design"], icon: <Terminal className="w-5 h-5 text-accentCyan" /> },
  { category: "Mobile", items: ["React Native"], icon: <Smartphone className="w-5 h-5 text-accentPurple" /> },
  { category: "Database", items: ["PostgreSQL", "MySQL"], icon: <Database className="w-5 h-5 text-accentCyan" /> },
  { category: "Security", items: ["JWT Authentication", "RBAC"], icon: <Shield className="w-5 h-5 text-accentPurple" /> },
  { category: "Tools & Practices", items: ["Git", "GitHub", "Postman", "Figma", "Agile", "Scrum", "SDLC"], icon: <Cpu className="w-5 h-5 text-accentCyan" /> }
];

const EXPERIENCE = [
  {
    role: "Software Developer",
    company: "RSL Solution Pvt. Ltd.",
    period: "Dec 2024 – Present",
    type: "Full-time",
    points: [
      "Delivered 4+ production-grade modules for CRM and Fitness applications, ensuring high availability and performance.",
      "Developed 8+ reusable UI components, reducing development time by 25% across multiple projects.",
      "Integrated 10+ REST APIs with secure JWT-based authentication and role-based access control (RBAC).",
      "Identified and resolved critical performance bottlenecks, improving system response times by 20%."
    ],
    color: "accentCyan"
  },
  {
    role: "Full Stack Developer Intern",
    company: "DX RAD Pvt. Ltd.",
    period: "Apr 2024 – Nov 2024",
    type: "Internship",
    points: [
      "Delivered 5+ critical features for the core platform using React.js and Node.js.",
      "Optimized backend logic and MySQL queries, resulting in a 30-40% improvement in data retrieval speeds.",
      "Implemented lazy loading and code splitting, reducing initial load time by 1.5 seconds.",
      "Collaborated in an Agile environment to deliver bi-weekly sprints on schedule."
    ],
    color: "accentPurple"
  }
];

const PROJECTS = [
  {
    title: "Civic Care AI",
    problem: "Inefficient communication between citizens and local government for infrastructure issues.",
    features: "Real-time issue tracking, AI-powered categorization, and automated status updates.",
    stack: ["React.js", "Node.js", "PostgreSQL", "AI"],
    impact: "Designed a system capable of handling 1000+ reports daily with 95% classification accuracy.",
    id: "civic-care-ai"
  },
  {
    title: "Fitness Tracker App",
    problem: "Lack of personalized tracking and progress visualization for daily workouts.",
    features: "Custom workout plans, real-time activity tracking, and visual progress charts.",
    stack: ["React Native", "Node.js", "PostgreSQL"],
    impact: "Deployed to 500+ beta users; reduced data entry friction by 40% using intuitive UI.",
    id: "fitness-tracker"
  },
  {
    title: "AI Mentor Platform",
    problem: "Difficulties in accessing personalized learning resources and mentorship.",
    features: "AI-driven course recommendations, secure session handling, and real-time chat.",
    stack: ["React.js", "Node.js", "OpenAI API"],
    impact: "Delivered a high-performance learning platform using Agile methodologies.",
    id: "ai-mentor"
  },
  {
    title: "GitHub Dashboard",
    problem: "Manual tracking of repository metrics and automated workflow statuses.",
    features: "Real-time tracking of PRs, commits, and workflow health via GitHub APIs.",
    stack: ["Node.js", "GitHub API", "React.js"],
    impact: "Improved visibility of development metrics for teams by 60%.",
    id: "github-dashboard"
  }
];

const CERTIFICATIONS = [
  {
    title: "Java Full Stack Developer",
    issuer: "QSpiders",
    date: "2024"
  }
];

const LEADERSHIP = [
  {
    role: "Technical Head",
    organization: "CESA (Computer Engineering Students Association)",
    impact: [
      "Organized 3+ major coding competitions with 200+ participants.",
      "Achieved a 40% growth in student participation through strategic outreach.",
      "Mentored 15+ junior developers in web technologies and competitive coding."
    ]
  }
];

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="brand">
          SAKSHAM<span className="text-accentCyan text-glow-cyan">.</span>BHORE
        </motion.div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="nav-link group">
              {item.name}
              <span className="nav-link-indicator"></span>
            </a>
          ))}
          <a 
            href={PERSONAL_INFO.resumeLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-outline border-white/10 hover:border-accentCyan/50"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-darkBg border-b border-white/10 flex flex-col items-center py-6 gap-6"
          >
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="nav-link text-lg" onClick={() => setIsOpen(false)}>
                {item.name}
              </a>
            ))}
            <a href={PERSONAL_INFO.resumeLink} className="btn-primary py-2 text-sm">Resume</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="glow-orb-purple"></div>
        <div className="glow-orb-cyan"></div>
        <div className="hero-mesh"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-accentCyan text-[10px] font-black mb-8 uppercase tracking-[0.3em]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentCyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accentCyan"></span>
                </span>
                Full Stack Developer & AI Engineer
              </div>
              <h1 className="text-5xl md:text-[7rem] font-black mb-8 tracking-tighter leading-[0.9]">
                <span className="block italic opacity-40 text-2xl md:text-3xl font-medium mb-4 tracking-normal">Hello, I'm</span>
                <span className="reveal-text cursor-default">SAKSHAM</span> <br />
                <span className="text-accentCyan text-glow-cyan">BHORE</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-xl font-medium leading-relaxed">
                "{PERSONAL_INFO.tagline}"
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                {PERSONAL_INFO.keyStack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-gray-400">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8">
                <a href="#projects" className="btn-primary group flex items-center gap-3">
                  VIEW WORK
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex items-center gap-8 text-gray-500">
                    <a href="https://github.com/engineershree" className="hover:text-white transition-all transform hover:scale-110"><GithubIcon /></a>
                    <a href="https://www.linkedin.com/in/sakshambhore/" className="hover:text-white transition-all transform hover:scale-110"><Linkedin /></a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring" }}
              className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            >
                <div className="hero-image-container group">
                    <div className="image-glow-aura"></div>
                    <div className="hero-image-wrapper relative group overflow-hidden rounded-[2rem] border border-white/10 w-full max-w-sm aspect-[4/5]">
                        <img 
                          src="/assets/Saksham1.jpeg" 
                          alt="Saksham Bhore" 
                          className="hero-image h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60"></div>
                    </div>
                    {/* Floating elements */}
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl z-20 border-accentCyan/30">
                        <Code className="text-accentCyan w-5 h-5" />
                    </motion.div>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-xl z-20 border-accentPurple/30">
                        <Database className="text-accentPurple w-5 h-5" />
                    </motion.div>
                </div>
            </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator with glow */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-400 group cursor-pointer hidden md:block"
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center p-1.5 hover:border-accentCyan/50 transition-colors">
            <motion.div 
              animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }} 
              transition={{ repeat: Infinity, duration: 1.5 }} 
              className="w-1 h-2.5 bg-accentCyan rounded-full shadow-[0_0_8px_rgba(0,245,255,0.6)]"
            ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2"
                >
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-accentCyan/20 to-accentPurple/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
                        <img 
                          src="/assets/Saksham2.jpeg" 
                          alt="Saksham Bhore" 
                          className="relative rounded-2xl w-full max-w-md mx-auto object-cover md:h-[500px] brightness-90 group-hover:brightness-100 transition-all duration-700 shadow-2xl border border-white/10"
                        />
                        <div className="absolute bottom-6 -right-6 lg:-right-10 bg-darkBg border border-white/10 p-6 rounded-2xl shadow-2xl hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-accentCyan/10 rounded-xl">
                                    <Briefcase className="text-accentCyan" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400">Software Dev</div>
                                    <div className="font-bold">@ RSL Solution</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div 
                   initial={{ opacity: 0, x: 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="w-full lg:w-1/2"
                >
                    <div className="flex items-center gap-2 text-accentPurple font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
                        <User size={14} /> ABOUT ME
                    </div>
                    <h2 className="section-title">Architecting Digital <span className="text-accentPurple">Excellence</span></h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        I am a <strong>Full Stack Developer / Product Engineer</strong> focused on delivering real-world impact through scalable architecture and performance-driven solutions. With a problem-solving mindset, I transform complex requirements into production-ready systems.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        {PERSONAL_INFO.summary}
                    </p>
                    <div className="grid grid-cols-2 gap-8 mb-10">
                        <div>
                            <div className="text-3xl font-black text-accentCyan">Expert</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider font-bold">In Full-Stack</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-accentPurple">15+</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider font-bold">Success Stories</div>
                        </div>
                    </div>
                    <p className="text-gray-300 italic mb-8 border-l-4 border-accentCyan/50 pl-6 py-2">
                        "I don't just write code; I architect systems that solve real-world problems with high efficiency and modular design."
                    </p>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-darkBg/50 backdrop-blur-sm border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="text-accentCyan font-bold uppercase tracking-widest text-xs mb-4 flex justify-center items-center gap-2">
                        <Layers size={16} /> TECHNICAL EXPERTISE
                    </div>
                    <h2 className="section-title">My Tech Stack</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SKILLS.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="glass-card p-8 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accentCyan/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-accentCyan/10 transition-colors"></div>
                            <div className="mb-6 p-4 bg-white/5 rounded-2xl inline-block group-hover:scale-110 transition-transform bg-gradient-to-br from-white/5 to-white/10">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, i) => (
                                    <span key={i} className="skill-badge hover:text-accentCyan border-white/5">{item}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="text-accentPurple font-bold uppercase tracking-widest text-xs mb-4 flex justify-center items-center gap-2">
                        <Briefcase size={16} /> PROFESSIONAL JOURNEY
                    </div>
                    <h2 className="section-title">Work Experience</h2>
                </div>
                
                <div className="max-w-4xl mx-auto space-y-12">
                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          className="relative pl-12 md:pl-0"
                        >
                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10"></div>
                            
                            <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="md:w-1/2 w-full p-8 glass-card border-none bg-gradient-to-r from-white/5 to-transparent relative">
                                    <div className={`absolute top-0 bottom-0 w-1 ${exp.color === 'accentCyan' ? 'bg-accentCyan shadow-[0_0_15px_rgba(0,245,255,0.4)]' : 'bg-accentPurple shadow-[0_0_15px_rgba(189,0,255,0.4)]'} left-0 rounded-full`}></div>
                                    <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl font-black text-white">{exp.role}</h3>
                                            <div className="text-accentCyan font-medium">{exp.company}</div>
                                        </div>
                                        <div className="px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-gray-400 border border-white/10 uppercase tracking-tighter">
                                            {exp.period}
                                        </div>
                                    </div>
                                    <ul className="space-y-3">
                                        {exp.points.map((point, i) => (
                                            <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accentCyan flex-shrink-0"></div>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-12 h-12 glass rounded-full flex items-center justify-center p-3 border-2 border-white/10 z-10 bg-darkBg">
                                    {exp.color === 'accentCyan' ? <Terminal className="text-accentCyan" /> : <Layers className="text-accentPurple" />}
                                </div>
                                <div className="md:w-1/2 hidden md:block"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-darkBg/50 backdrop-blur-sm border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <div className="text-accentCyan font-bold uppercase tracking-[0.3em] text-[10px] mb-6 flex items-center gap-2">
                            <Cpu size={14} /> PORTFOLIO
                        </div>
                        <h2 className="section-title mb-0">Featured <span className="text-accentCyan">Projects</span></h2>
                    </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-10">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="group relative"
                        >
                            <div className="glass-card p-10 h-full border border-white/5 hover:border-accentCyan/30 transition-all duration-500 bg-gradient-to-br from-white/5 to-transparent relative z-10 overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity">
                                    <Code size={120} />
                                </div>
                                
                                <div className="flex gap-2 mb-6">
                                    {project.stack.map((s, i) => (
                                        <span key={i} className="text-[10px] font-bold text-accentCyan/70 border border-accentCyan/30 px-2 py-0.5 rounded uppercase">{s}</span>
                                    ))}
                                </div>
                                
                                <h3 className="text-2xl font-black mb-4 group-hover:text-accentCyan transition-colors">{project.title}</h3>
                                
                                <div className="space-y-4 mb-8">
                                    <div>
                                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter mb-1">PROBLEM</div>
                                        <div className="text-sm text-gray-300 leading-relaxed italic">"{project.problem}"</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter mb-1">KEY FEATURES</div>
                                        <div className="text-sm text-gray-300">{project.features}</div>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4 p-4 bg-accentCyan/5 rounded-xl mb-8 border border-accentCyan/10">
                                    <CheckCircle2 className="w-5 h-5 text-accentCyan flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-[10px] font-bold text-accentCyan/70 uppercase tracking-tighter mb-1">IMPACT</div>
                                        <div className="text-sm text-gray-200 font-bold">{project.impact}</div>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4 mt-auto">
                                    <a href="#" className="flex items-center gap-2 text-sm font-bold text-white hover:text-accentCyan transition-colors">
                                        View Case Study <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const LeadershipAndCerts = () => {
    return (
        <section id="leadership" className="py-24 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Leadership */}
                    <div>
                        <div className="text-accentCyan font-bold uppercase tracking-[0.3em] text-[10px] mb-6 flex items-center gap-2">
                            <User size={14} /> LEADERSHIP
                        </div>
                        <h2 className="text-4xl font-black mb-12">Technical <span className="text-accentCyan">Leadership</span></h2>
                        <div className="space-y-8">
                            {LEADERSHIP.map((lead, idx) => (
                                <div key={idx} className="glass-card p-8 border-none bg-gradient-to-br from-white/5 to-transparent">
                                    <h3 className="text-xl font-bold mb-2">{lead.role}</h3>
                                    <div className="text-accentCyan text-sm font-medium mb-6">{lead.organization}</div>
                                    <ul className="space-y-4">
                                        {lead.impact.map((point, i) => (
                                            <li key={i} className="flex gap-3 text-gray-400 text-sm">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accentCyan flex-shrink-0"></div>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <div className="text-accentPurple font-bold uppercase tracking-[0.3em] text-[10px] mb-6 flex items-center gap-2">
                            <Shield size={14} /> CERTIFICATIONS
                        </div>
                        <h2 className="text-4xl font-black mb-12">Professional <span className="text-accentPurple">Certs</span></h2>
                        <div className="space-y-4">
                            {CERTIFICATIONS.map((cert, idx) => (
                                <div key={idx} className="glass flex items-center justify-between p-6 hover:bg-white/5 transition-colors group">
                                    <div className="flex items-center gap-6">
                                        <div className="p-3 bg-accentPurple/10 rounded-xl group-hover:bg-accentPurple/20 transition-colors">
                                            <Briefcase className="text-accentPurple w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-lg">{cert.title}</div>
                                            <div className="text-sm text-gray-500">{cert.issuer}</div>
                                        </div>
                                    </div>
                                    <div className="text-xs font-bold text-gray-600 uppercase tracking-widest">{cert.date}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accentCyan/5 blur-[120px] rounded-full"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto glass rounded-[40px] p-12 md:p-20 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accentPurple/10 blur-[80px] rounded-full"></div>
                    
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black mb-8">Let's build something <span className="text-accentCyan italic">extraordinary</span>.</h2>
                        <p className="text-gray-400 text-lg mb-12">
                            I'm currently looking for new opportunities and collaborations in product engineering and full-stack development. Feel free to reach out for a technical chat or a business query.
                        </p>
                        
                        <div className="flex flex-col md:flex-row gap-12 w-full justify-center">
                            <div className="flex flex-col items-center gap-4 group">
                                <div className="w-16 h-16 glass flex items-center justify-center rounded-2xl group-hover:bg-accentCyan/20 transition-all border border-white/10 group-hover:border-accentCyan/30">
                                    <Mail className="text-accentCyan w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email Me</div>
                                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xl font-bold hover:text-accentCyan transition-colors">{PERSONAL_INFO.email}</a>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-4 group">
                                <div className="w-16 h-16 glass flex items-center justify-center rounded-2xl group-hover:bg-accentPurple/20 transition-all border border-white/10 group-hover:border-accentPurple/30">
                                    <Linkedin className="text-accentPurple w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Network</div>
                                    <a href="https://www.linkedin.com/in/sakshambhore/" className="text-xl font-bold hover:text-accentPurple transition-colors">LinkedIn Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="brand flex items-center gap-2">
                        SAKSHAM<span className="text-accentCyan text-glow-cyan">.</span>BHORE
                        <div className="w-2 h-2 rounded-full bg-accentCyan animate-pulse shadow-[0_0_10px_rgba(0,245,255,0.8)]"></div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-12 text-gray-500 text-xs font-bold uppercase tracking-widest">
                        <a href="#about" className="hover:text-white transition-colors">About</a>
                        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                    </div>
                    <div className="flex items-center gap-8">
                        <a href="https://github.com/engineershree" className="text-gray-500 hover:text-white transition-all transform hover:scale-110"><GithubIcon /></a>
                        <a href="https://www.linkedin.com/in/sakshambhore/" className="text-gray-500 hover:text-white transition-all transform hover:scale-110"><Linkedin /></a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white/5 gap-4">
                    <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em]">
                        © {new Date().getFullYear()} Saksham Bhore. All Rights Reserved.
                    </p>
                    <div className="text-[10px] text-gray-700 font-bold uppercase tracking-[0.5em]">
                        BUILT WITH REACT • TAILWIND • INTENT
                    </div>
                </div>
            </div>
        </footer>
    );
};

function App() {
  return (
    <div className="app-container">
      {/* Background Noise/Overlay */}
      <div className="grainy-overlay"></div>
      <div className="dynamic-mesh"></div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <LeadershipAndCerts />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
