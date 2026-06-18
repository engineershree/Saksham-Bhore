export const PROFILE = {
  name: "Saksham Bhore",
  firstName: "Saksham",
  role: "Software Engineer | Java Full Stack Developer",
  location: "Pune, Maharashtra",
  email: "sakshambhore8902@gmail.com",
  linkedin: "https://www.linkedin.com/in/sakshambhore/",
  github: "https://github.com/engineershree",
  resumePath: "/Saksham_Bhore_I2 (3).pdf",
  avatar: "/assets/Saksham1.jpeg", // Note: Keep existing or update
  summary:
    "I architect and scale robust backend systems and modern full-stack applications. With deep expertise in the Java ecosystem (Spring Boot) and React, I focus on performance optimization, secure API design, and building maintainable, production-ready software that solves complex business problems.",
};

export const TECH_STACK = [
  {
    category: "Languages",
    items: ["Java", "TypeScript", "JavaScript", "SQL", "Python"],
  },
  {
    category: "Backend & Architecture",
    items: ["Spring Boot", "Node.js", "Express.js", "RESTful APIs", "Microservices", "JWT Auth", "RBAC"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "HTML5", "CSS3", "TailwindCSS"],
  },
  {
    category: "Database & Cloud",
    items: ["PostgreSQL", "MySQL", "Query Optimization", "Database Design", "AWS (Basic)"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Android Development"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub Actions", "Docker", "Postman", "Linux"],
  },
] as const;

export const EXPERIENCE = [
  {
    role: "Software Developer",
    company: "RSL Solutions Pvt Ltd",
    period: "Dec 2025 – Present",
    points: [
      "Architected and deployed production-grade CRM and Fitness modules, reducing complex business workflow completion time by 40%.",
      "Engineered secure, scalable RESTful APIs utilizing Java Spring Boot and Node.js with strict RBAC and JWT Authentication.",
      "Optimized PostgreSQL database schemas and queries, decreasing API response latency by up to 35% under high concurrent load.",
      "Spearheaded the migration to a reusable React architecture, cutting down frontend feature delivery time by 25%.",
      "Collaborated in cross-functional Agile teams, implementing rigorous code reviews and CI/CD pipelines to ensure zero-downtime deployments.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "DX RAD Pvt Ltd",
    period: "Feb 2024 – Mar 2025",
    points: [
      "Designed and developed scalable backend microservices and seamless frontend interfaces using Java, Node.js, and React.",
      "Identified and resolved critical database bottlenecks by optimizing complex SQL queries, vastly improving application throughput.",
      "Integrated secure third-party payment and messaging APIs, expanding the core platform's functional capabilities.",
      "Wrote comprehensive unit and integration tests, increasing overall code coverage and reducing production bugs by 20%.",
      "Actively contributed to system architecture discussions and Agile sprint planning sessions.",
    ],
  },
] as const;

export const PROJECTS = [
  {
    id: "civicai",
    category: "Flagship Product",
    name: "CivicAI",
    stack: ["Java Spring Boot", "React", "PostgreSQL", "Microservices"],
    description: "An enterprise-grade civic engagement platform designed to handle high-throughput public reporting and automated department routing.",
    highlights: [
      "Architected scalable backend services processing thousands of concurrent requests",
      "Implemented intelligent routing reducing ticket resolution time by 30%",
      "Designed secure Role-Based Access Control (RBAC) for administrative dashboards",
      "Optimized relational database schemas for real-time status aggregation"
    ],
    vision: "Transform public grievance management into a transparent, efficient, and technology-driven ecosystem.",
    image: "/assets/civic_ai_dashboard.png"
  },
  {
    id: "civiccare",
    category: "Platform",
    name: "Civic Care AI",
    stack: ["Node.js", "React", "PostgreSQL", "Redis"],
    description: "A high-performance system for categorizing and tracking municipal issues, heavily utilizing backend optimizations for fast load times.",
    highlights: [
      "Engineered secure authentication workflows with JWT",
      "Implemented aggressive caching strategies reducing database load",
      "Built complex analytical dashboards for city administrators"
    ],
    image: "/assets/civic_ai_dashboard.png" // Reusing Civic AI image for related project
  },
  {
    id: "aimentor",
    category: "EdTech Platform",
    name: "Personalized AI Mentor",
    stack: ["Java", "Spring Boot", "React", "OAuth2"],
    description: "A robust learning management system providing adaptive roadmaps, requiring complex state management and seamless API integrations.",
    highlights: [
      "Designed resilient REST APIs for real-time progress synchronization",
      "Integrated generative AI APIs with exponential backoff and retry mechanisms",
      "Built a highly responsive and accessible React frontend"
    ],
    image: "/assets/ai_mentor_platform.png"
  },
  {
    id: "fitnesstracker",
    category: "Mobile Application",
    name: "Fitness Tracker App",
    stack: ["React Native", "Node.js", "SQLite", "Offline-First"],
    description: "A cross-platform mobile application featuring an offline-first architecture with robust local data synchronization strategies.",
    highlights: [
      "Implemented conflict-free replicated data types for offline sync",
      "Optimized mobile bundle size and render performance (60fps)",
      "Designed an extensible backend API for future wearable integrations"
    ],
    image: "/assets/fitness_tracker.png"
  },
  {
    id: "mcm",
    category: "Web3 Concept",
    name: "My Cinematic Multiverse",
    stack: ["React", "Node.js", "Web3.js", "Smart Contracts"],
    description: "A decentralized storytelling platform exploring blockchain integration and secure digital asset ownership architectures.",
    highlights: [
      "Integrated secure Web3 wallet authentication",
      "Architected a scalable backend to sync on-chain data with traditional databases",
      "Built complex UI flows for minting and trading digital assets"
    ],
    image: "/assets/cinematic_multiverse.png"
  },
  {
    id: "githubdash",
    category: "Developer Tool",
    name: "GitHub Dashboard",
    stack: ["React", "TypeScript", "GraphQL", "Data Vis"],
    description: "A performance-focused developer analytics tool that aggregates and visualizes massive amounts of repository data via GitHub's API.",
    highlights: [
      "Optimized GraphQL queries to minimize network payloads",
      "Implemented complex data visualizations with Canvas/SVG",
      "Built custom React hooks for efficient data fetching and caching"
    ],
    image: "/assets/civic_ai_dashboard.png" // Placeholder
  },
  {
    id: "infinitynature",
    category: "Digital Platform",
    name: "Infinity Click of Nature's",
    stack: ["React", "Vite", "TailwindCSS"],
    description: "A highly optimized frontend platform demonstrating advanced CSS architectures, responsive design, and superior Web Vitals scores.",
    highlights: [
      "Achieved 95+ Lighthouse scores across all metrics",
      "Implemented advanced lazy loading and image optimization",
      "Built a fully accessible, WCAG-compliant interface"
    ],
    image: "/assets/ai_mentor_platform.png" // Placeholder
  },
  {
    id: "pharma",
    category: "Healthcare Platform",
    name: "Pharma Website",
    stack: ["React", "Node.js", "PostgreSQL", "SEO"],
    description: "A scalable B2B healthcare platform focusing on extreme reliability, fast page loads, and stringent data security practices.",
    highlights: [
      "Engineered SEO-friendly Server-Side Rendering patterns",
      "Implemented strict data validation and sanitization pipelines",
      "Designed a highly maintainable component library"
    ],
    image: "/assets/ai_mentor_platform.png" // Placeholder
  }
] as const;

export const LEADERSHIP = {
  role: "Technical Head",
  org: "CESA — Computer Engineering Students' Association",
  period: "Past",
  points: [
    "Orchestrated large-scale technical workshops and knowledge-sharing sessions.",
    "Mentored junior developers and students in modern web technologies and engineering practices.",
    "Organized competitive coding events, hackathons, and community-building initiatives.",
    "Demonstrated strong team leadership and fostered a culture of collaborative innovation."
  ],
} as const;

export const FUTURE_VISION = [
  {
    title: "AI Products",
    description: "Building autonomous systems that augment human capabilities and solve complex analytical problems."
  },
  {
    title: "Civic Technology",
    description: "Creating transparent, efficient ecosystems that bridge the gap between citizens and authorities."
  },
  {
    title: "Education Technology",
    description: "Democratizing learning through highly personalized, AI-driven mentorship platforms."
  },
  {
    title: "Startup Ecosystem",
    description: "Scaling innovative concepts into robust, production-ready tech companies."
  }
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Showcase", href: "#showcases" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
] as const;
