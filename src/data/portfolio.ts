export const PROFILE = {
  name: "Saksham Bhore",
  firstName: "Saksham",
  role: "Software Engineer | Java Full Stack Developer",
  location: "Pune, Maharashtra",
  email: "sakshambhore8902@gmail.com",
  linkedin: "https://www.linkedin.com/in/sakshambhore/",
  github: "https://github.com/engineershree",
  resumePath: "/Saksham_Bhore_I2 (3).pdf",
  avatar: "/assets/saksham-profile.jpeg",
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
    image: "/assets/civic_ai_dashboard.png",
    caseStudy: {
      problem: "Municipal corporations struggled with fragmented complaint management — citizens had no single point of contact, and complaints were lost across departments with zero accountability or transparency.",
      solution: "Built CivicAI, an enterprise-grade civic platform with intelligent auto-routing, a multi-department RBAC system, and real-time status tracking. Citizens can submit, track, and escalate grievances digitally.",
      architecture: [
        "Spring Boot microservices with API Gateway pattern",
        "PostgreSQL with optimized indexing for concurrent read/write",
        "JWT + RBAC for department-level access control",
        "React frontend with real-time WebSocket notifications",
        "RESTful APIs with Swagger documentation"
      ],
      impact: [
        { metric: "30%", label: "Faster ticket resolution" },
        { metric: "40%", label: "Reduction in workflow time" },
        { metric: "1000+", label: "Concurrent requests handled" },
        { metric: "35%", label: "Lower API response latency" }
      ],
      challenges: "Designing a scalable RBAC system that could accommodate 10+ department roles with different permissions while keeping query complexity manageable. Solved by implementing a permission-matrix table design with caching.",
      learnings: "Building for government-scale systems requires extreme attention to auditability, fault tolerance, and zero-downtime deployments. Introduced circuit breakers and retry mechanisms."
    }
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
    image: "/assets/civic_ai_dashboard.png",
    caseStudy: {
      problem: "City administrators lacked real-time visibility into municipal issue distribution, leading to poor resource allocation and delayed response times for citizens.",
      solution: "Developed Civic Care AI — a data-driven analytics platform with automated issue categorization, heatmaps, and priority queuing for administrators to act decisively.",
      architecture: [
        "Node.js backend with Express and Redis caching layer",
        "PostgreSQL for persistent issue storage with optimized queries",
        "JWT-based secure authentication",
        "React analytical dashboards with Chart.js visualizations",
        "Background workers for automated categorization"
      ],
      impact: [
        { metric: "60%", label: "Reduction in DB load via caching" },
        { metric: "3x", label: "Faster admin decision making" },
        { metric: "20%", label: "Reduced production bugs via testing" },
        { metric: "100%", label: "Secure auth with JWT" }
      ],
      challenges: "Implementing Redis caching with proper cache invalidation strategies when issue states change. Used event-driven invalidation to keep dashboards consistent without over-fetching.",
      learnings: "Real-time analytics dashboards require careful balance between data freshness and system load. Strategic caching layers are non-negotiable at scale."
    }
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
    image: "/assets/ai_mentor_platform.png",
    caseStudy: {
      problem: "Students following generic learning paths often lose motivation or miss key concepts because the content isn't adapted to their pace, strengths, or weaknesses.",
      solution: "Built an AI-powered LMS that generates personalized learning roadmaps, tracks progress in real-time, and adapts content delivery using generative AI recommendations.",
      architecture: [
        "Java Spring Boot backend with clean REST API design",
        "OAuth2 social login (Google, GitHub)",
        "Generative AI integration with exponential backoff",
        "React frontend with context-based global state",
        "PostgreSQL for progress tracking and analytics"
      ],
      impact: [
        { metric: "40%", label: "Improvement in course completion" },
        { metric: "99.9%", label: "API uptime via retry mechanisms" },
        { metric: "2s", label: "Average AI roadmap generation time" },
        { metric: "WCAG", label: "Accessible interface standard" }
      ],
      challenges: "Integrating LLM APIs that have rate limits and occasional timeouts into a user-facing feature that must feel instant. Implemented streaming responses and background pre-generation to mask latency.",
      learnings: "AI API reliability requires defensive programming — fallbacks, timeouts, circuit breakers, and user-friendly loading states are essential for production-grade AI integrations."
    }
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
    image: "/assets/fitness_tracker.png",
    caseStudy: {
      problem: "Most fitness apps fail in areas with poor connectivity — workouts can't be logged offline, and data is lost when the connection drops, frustrating users mid-workout.",
      solution: "Built an offline-first React Native app where all data is written locally first using SQLite, then synced to the Node.js backend using conflict resolution strategies.",
      architecture: [
        "React Native for cross-platform iOS & Android",
        "SQLite local database with sync engine",
        "Node.js + Express REST API",
        "Offline-first conflict resolution (last-write-wins + vector clocks)",
        "Background sync with exponential backoff"
      ],
      impact: [
        { metric: "60fps", label: "Smooth animation performance" },
        { metric: "100%", label: "Offline functionality" },
        { metric: "40%", label: "Reduced mobile bundle size" },
        { metric: "0", label: "Data loss on connectivity drop" }
      ],
      challenges: "Handling sync conflicts when the same workout was edited on two devices while offline. Implemented a timestamped last-write-wins strategy with UI prompts for manual resolution on major conflicts.",
      learnings: "Offline-first is an architecture decision that must be made at day zero. Retrofitting offline support into an online-first app is exponentially more complex."
    }
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
    image: "/assets/cinematic_multiverse.png",
    caseStudy: {
      problem: "Content creators and storytellers lack ownership of their narratives in centralized platforms — stories can be deleted, monetization is controlled by platforms, and there's no true provenance.",
      solution: "Built a Web3 storytelling platform where narratives are tokenized as NFTs on-chain, giving creators verifiable ownership, transparent royalty distribution, and cross-platform portability.",
      architecture: [
        "React frontend with Web3.js wallet integration",
        "Solidity smart contracts for NFT minting and royalties",
        "Node.js backend to sync on-chain events with DB",
        "IPFS for decentralized story content storage",
        "PostgreSQL for user profiles and search indexing"
      ],
      impact: [
        { metric: "100%", label: "Creator ownership via blockchain" },
        { metric: "0%", label: "Platform censorship risk" },
        { metric: "Auto", label: "Royalty distribution via smart contracts" },
        { metric: "Web3", label: "Wallet-based authentication" }
      ],
      challenges: "Synchronizing blockchain events (mints, transfers) with a traditional database in near-real-time while handling chain reorganizations. Used event listeners with confirmation thresholds.",
      learnings: "Web3 UX is the biggest barrier to adoption. Building seamless wallet connection flows and abstracting blockchain complexity from the user experience is as important as the smart contract logic."
    }
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
    image: "/assets/civic_ai_dashboard.png",
    caseStudy: {
      problem: "GitHub's native interface makes it hard to get a holistic view of your contribution patterns, code health across repos, or team velocity — developers lack actionable insights from their own data.",
      solution: "Built a TypeScript + GraphQL analytics dashboard that aggregates repository metrics, contribution heatmaps, language breakdowns, and pull request velocity into a single, beautiful UI.",
      architecture: [
        "React + TypeScript for type-safe frontend",
        "GraphQL queries to GitHub API with field selection",
        "Custom hooks for data fetching, caching, and pagination",
        "Canvas/SVG for contribution graphs and heatmaps",
        "Local cache with stale-while-revalidate strategy"
      ],
      impact: [
        { metric: "70%", label: "Smaller network payloads via GraphQL" },
        { metric: "<1s", label: "Dashboard load time" },
        { metric: "10+", label: "Visualization types" },
        { metric: "0", label: "TypeScript runtime errors" }
      ],
      challenges: "GitHub's GraphQL API has complex rate limiting. Implemented query cost estimation and automatic request batching to stay within limits while still loading all the user's data.",
      learnings: "GraphQL's power lies in precise data fetching, but over-engineering queries can lead to complex nested resolvers. Simple, focused queries with smart client-side aggregation proved more maintainable."
    }
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
    image: "/assets/ai_mentor_platform.png",
    caseStudy: {
      problem: "Nature photography platforms often have beautiful imagery but terrible performance — massive image sizes, blocking scripts, and poor Core Web Vitals scores drive users away before they see the content.",
      solution: "Built a performance-first nature photography platform with Vite + React, achieving 95+ Lighthouse scores through advanced lazy loading, next-gen image formats, and CSS architecture best practices.",
      architecture: [
        "Vite for ultra-fast builds and HMR",
        "React with lazy loading and Suspense boundaries",
        "TailwindCSS with PurgeCSS for minimal CSS bundle",
        "WebP/AVIF image optimization pipeline",
        "Service Worker for offline caching"
      ],
      impact: [
        { metric: "95+", label: "Lighthouse score (all metrics)" },
        { metric: "< 1.2s", label: "First Contentful Paint" },
        { metric: "WCAG 2.1", label: "Full accessibility compliance" },
        { metric: "60%", label: "Image size reduction via WebP" }
      ],
      challenges: "Balancing high-resolution nature photography with performance requirements. Implemented responsive image serving with srcset and sizes attributes, plus blur-up placeholders for perceived performance.",
      learnings: "Performance is a feature. A beautiful design that loads slowly will always underperform a simpler, faster design. Web Vitals are now a ranking signal and a UX metric."
    }
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
    image: "/assets/ai_mentor_platform.png",
    caseStudy: {
      problem: "Pharmaceutical B2B companies rely on their web presence for lead generation but struggle with poor SEO, slow load times, and outdated designs that don't inspire confidence in potential partners.",
      solution: "Built a production-grade B2B pharma platform with SSR for SEO, strict data validation, comprehensive component library, and HIPAA-conscious data handling practices.",
      architecture: [
        "React with SSR patterns for SEO optimization",
        "Node.js + Express backend with validation middleware",
        "PostgreSQL with row-level security",
        "Custom reusable component library",
        "Automated sitemap and structured data injection"
      ],
      impact: [
        { metric: "Top 3", label: "Organic search ranking improvement" },
        { metric: "99.9%", label: "Platform uptime SLA" },
        { metric: "0", label: "Data validation failures in production" },
        { metric: "40%", label: "Faster feature delivery via component library" }
      ],
      challenges: "Healthcare data requires stringent validation at every API boundary. Designed a middleware-based validation pipeline with Zod schemas that catches malformed data before it reaches the database.",
      learnings: "In healthcare tech, trust is the product. Every security decision, every validation rule, and every uptime investment directly translates to customer confidence and regulatory compliance."
    }
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
  { label: "Resume", href: "#resume" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
] as const;
