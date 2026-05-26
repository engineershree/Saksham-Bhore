export const PROFILE = {
  name: "Saksham Bhore",
  firstName: "Saksham",
  role: "Full Stack Software Developer",
  location: "Pune, Maharashtra",
  relocation: "Open to Relocation",
  email: "sakshambhore8902@gmail.com",
  phone: "+91 9511785344",
  linkedin: "https://www.linkedin.com/in/sakshambhore/",
  github: "https://github.com/engineershree",
  resumePath: "/Saksham_Bhore_I2 (3).pdf",
  avatar: "/assets/Saksham1.jpeg",
  summary:
    "Full Stack Software Developer with hands-on experience building and shipping production-grade web and mobile applications using React.js, Node.js, PostgreSQL, and React Native. Delivered live projects used by real users, optimised backend performance, and secured APIs using JWT and RBAC. Certified Java Full Stack Developer with a strong foundation in RESTful API design, database modelling, and Agile delivery.",
};

export const TECH_STACK = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "Python", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs"],
  },
  {
    category: "Mobile",
    items: ["React Native (Android)"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MySQL", "Indexing", "Query Optimization"],
  },
  {
    category: "Security",
    items: ["JWT Authentication", "RBAC"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "Figma"],
  },
  {
    category: "Practices",
    items: ["Agile", "Scrum", "SDLC", "Code Reviews"],
  },
] as const;

export const EXPERIENCE = [
  {
    role: "Software Developer",
    company: "RSL Solution Pvt Ltd",
    period: "Dec 2025 – Present",
    points: [
      "Owned and delivered 4+ production-grade modules across CRM and Fitness platforms, end-to-end from design to deployment, actively used by live users.",
      "Architected 8+ reusable React.js components, improving feature development speed by 25% across sprint cycles.",
      "Integrated 10+ REST APIs with JWT authentication and RBAC, eliminating unauthorised endpoint access across staging and production.",
      "Resolved frontend rendering bottlenecks using memoisation and optimised component structure for faster page loads.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "DX RAD Pvt Ltd",
    period: "Feb 2024 – Mar 2025",
    points: [
      "Delivered 5+ end-to-end full-stack features using React.js and Node.js with RESTful API integration across an 11-month internship.",
      "Rewrote slow MySQL queries using indexing and pagination, reducing backend response time by an estimated 30–40%.",
      "Improved frontend load performance with lazy loading and code splitting across key views.",
      "Collaborated through Git workflows including pull requests, branch management, and peer code reviews.",
    ],
  },
] as const;

export const PROJECTS = [
  {
    year: "2026",
    name: "Civic Care AI",
    stack: ["React.js", "Node.js", "PostgreSQL"],
    description:
      "Civic issue reporting platform with real-time complaint tracking and role-based workflows.",
    highlights: [
      "Secure REST APIs with JWT authentication and multi-user access",
      "PostgreSQL data modelling for complaint workflows",
    ],
  },
  {
    year: "2026",
    name: "Fitness Tracker App",
    stack: ["React Native", "Node.js"],
    description:
      "Cross-platform fitness app to track workouts and daily activity with offline-first UX.",
    highlights: [
      "Offline data sync for consistent experience without network",
      "Optimized API interactions for mobile performance",
    ],
  },
  {
    year: "2025",
    name: "AI Mentor Platform",
    stack: ["React.js", "Node.js"],
    description:
      "AI-driven learning platform delivering personalized study recommendations.",
    highlights: [
      "Modular frontend architecture with secure role-based flows",
      "Optimized React rendering and state management",
    ],
  },
  {
    year: "2024",
    name: "GitHub Dashboard",
    stack: ["React.js", "GitHub API"],
    description:
      "Developer dashboard to track repository activity, commits, and issues in real time.",
    highlights: [
      "Real-time updates using React hooks without full page reload",
      "GitHub API integration for repository metrics",
    ],
  },
] as const;

export const EDUCATION = {
  degree: "B.Tech — Computer Science and Engineering",
  school: "AITRC, Vita",
  period: "2021 – 2025",
  cgpa: "7.89",
  coursework:
    "Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, OOP",
};

export const CERTIFICATIONS = [
  {
    title: "Java Full Stack Development",
    issuer: "QSpiders, Wakad, Pune",
    period: "Mar 2025 – Dec 2025",
    detail:
      "Core Java, OOP, Spring Boot fundamentals, RESTful APIs, SQL, Git, and React.js integration.",
  },
] as const;

export const LEADERSHIP = {
  role: "Technical Head",
  org: "CESA — Computer Engineering Students' Association",
  period: "2023 – 2024",
  points: [
    "Organised 3+ inter-college coding competitions and hackathons, growing participation by ~40% year-on-year.",
    "Mentored 15+ junior developers in React.js, Git workflows, and project structuring.",
    "Coordinated technical workshops on web development and API design.",
  ],
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;
