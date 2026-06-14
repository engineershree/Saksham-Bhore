export const PROFILE = {
  name: "Saksham Bhore",
  firstName: "Saksham",
  role: "Software Engineer | AI Product Builder",
  location: "Pune, Maharashtra",
  email: "sakshambhore8902@gmail.com",
  linkedin: "https://www.linkedin.com/in/sakshambhore/",
  github: "https://github.com/engineershree",
  resumePath: "/Saksham_Bhore_I2 (3).pdf",
  avatar: "/assets/Saksham1.jpeg", // Note: Keep existing or update
  summary:
    "I design, develop, and scale modern web, mobile, and AI-powered applications that solve real problems and deliver meaningful experiences. Driven by a passion for software architecture and an unwavering problem-solving mindset, my goal is to build technology that impacts people.",
};

export const TECH_STACK = [
  {
    category: "Frontend",
    items: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "JWT Auth", "RBAC"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Android Development"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MySQL", "Database Design", "Query Optimization"],
  },
  {
    category: "AI & Data",
    items: ["Machine Learning", "Scikit-Learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Data Analysis"],
  },
  {
    category: "Languages",
    items: ["Java", "Python", "JavaScript", "SQL"],
  },
  {
    category: "Tools & Git",
    items: ["Git", "GitHub", "Postman", "Figma", "VS Code"],
  },
] as const;

export const EXPERIENCE = [
  {
    role: "Software Developer",
    company: "RSL Solutions Pvt Ltd",
    period: "Dec 2025 – Present",
    points: [
      "Built and deployed production-grade CRM and Fitness Platform modules handling complex business logic.",
      "Developed a robust, reusable React architecture that significantly accelerated feature delivery.",
      "Designed and integrated highly secure REST APIs featuring JWT Authentication and RBAC systems.",
      "Worked extensively with PostgreSQL, optimizing queries to improve overall application performance and scalability.",
      "Collaborated effectively in agile environments utilizing Git workflows and rigorous code reviews.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "DX RAD Pvt Ltd",
    period: "Feb 2024 – Mar 2025",
    points: [
      "Built end-to-end features spanning the frontend and backend of core applications.",
      "Worked intensively on React and Node.js to deliver seamless user experiences.",
      "Optimized complex SQL queries, vastly improving application performance and reducing latency.",
      "Integrated third-party and internal APIs to enhance functional capabilities.",
      "Collaborated closely within Agile teams to ensure timely delivery of software features.",
    ],
  },
] as const;

export const PROJECTS = [
  {
    id: "civicai",
    category: "Flagship Product",
    name: "CivicAI",
    stack: ["React", "Node.js", "PostgreSQL", "JWT Auth", "RBAC", "AI Integration"],
    description: "An AI-powered civic engagement platform designed to bridge the gap between citizens and government authorities.",
    highlights: [
      "Complaint Management & Issue Tracking",
      "Real-Time Status Updates & Notifications",
      "Role-Based Dashboards",
      "AI-Assisted Classification & Department Routing"
    ],
    vision: "Transform public grievance management into a transparent, efficient, and technology-driven ecosystem.",
    image: "/assets/civic_ai_dashboard.png"
  },
  {
    id: "civiccare",
    category: "Platform",
    name: "Civic Care AI",
    stack: ["React", "Node.js", "AI", "PostgreSQL"],
    description: "A smart civic issue reporting system that enables users to report public issues, track progress, and collaborate with authorities efficiently.",
    highlights: [
      "Complaint Reporting & Live Tracking",
      "Issue Categorization & Administrative Workflows",
      "Secure Authentication & Community Participation"
    ],
    image: "/assets/civic_ai_dashboard.png" // Reusing Civic AI image for related project
  },
  {
    id: "aimentor",
    category: "EdTech Innovation",
    name: "Personalized AI Mentor",
    stack: ["React", "Node.js", "Generative AI", "Data Analytics"],
    description: "An AI-powered learning platform providing personalized education, adaptive learning paths, study recommendations, and interactive mentoring.",
    highlights: [
      "AI Study Assistant & Personal Learning Space",
      "Adaptive Roadmaps & Progress Tracking",
      "Course Recommendations & Generative AI Integration"
    ],
    image: "/assets/ai_mentor_platform.png"
  },
  {
    id: "fitnesstracker",
    category: "Mobile Application",
    name: "Fitness Tracker App",
    stack: ["React Native", "Node.js", "Offline-First", "Local Storage"],
    description: "A cross-platform mobile application designed to help users monitor workouts, activity levels, fitness goals, and performance analytics.",
    highlights: [
      "Workout Tracking & Activity Monitoring",
      "Offline Data Synchronization",
      "Progress Analytics & Goal Tracking"
    ],
    image: "/assets/fitness_tracker.png"
  },
  {
    id: "mcm",
    category: "Startup Concept",
    name: "My Cinematic Multiverse (MCM)",
    stack: ["Web3", "NFT", "AI Generation", "React"],
    description: "A revolutionary Web3-powered storytelling ecosystem where users can own characters, influence story outcomes, and trade digital ownership assets.",
    highlights: [
      "NFT-based Character Ownership",
      "Community-driven Storytelling",
      "AI-generated Story Expansion & Interactive Universes"
    ],
    image: "/assets/cinematic_multiverse.png"
  },
  {
    id: "githubdash",
    category: "Developer Tool",
    name: "GitHub Dashboard",
    stack: ["React", "GitHub API", "Data Visualization"],
    description: "A developer productivity platform that visualizes repository activity, commits, issues, and contribution analytics using GitHub APIs.",
    highlights: [
      "Repository Insights & Commit Tracking",
      "Issue Monitoring & Real-Time Updates",
      "Developer Analytics"
    ],
    image: "/assets/civic_ai_dashboard.png" // Placeholder
  },
  {
    id: "infinitynature",
    category: "Digital Platform",
    name: "Infinity Click of Nature's",
    stack: ["React", "UI/UX", "Frontend Engineering"],
    description: "A digital platform focused on showcasing natural beauty, environmental awareness, and immersive user experiences through modern web technologies.",
    highlights: [
      "Immersive UI Design",
      "Advanced Frontend Engineering",
      "Optimized User Experience"
    ],
    image: "/assets/ai_mentor_platform.png" // Placeholder
  },
  {
    id: "pharma",
    category: "Healthcare Platform",
    name: "Pharma Website",
    stack: ["React", "Responsive Design", "Business UI"],
    description: "A professional healthcare and pharmaceutical platform focused on providing product information, business visibility, and customer engagement.",
    highlights: [
      "Responsive Medical Design",
      "Business-Oriented Development",
      "Professional UI/UX"
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
