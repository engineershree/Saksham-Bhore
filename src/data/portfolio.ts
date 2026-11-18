export interface ImpactMetric {
  metric: string;
  label: string;
}

export interface TechnologyGroup {
  frontend?: string[];
  backend?: string[];
  ai_nlp?: string[];
  geospatial?: string[];
  database?: string[];
  tools?: string[];
}

export interface CaseStudy {
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  keyFeatures: string[];
  techStackDetailed?: TechnologyGroup;
  challenges: string;
  implementationDetails: string;
  impact: ImpactMetric[];
  github?: string;
  liveDemo?: string;
  learnings?: string;
}

export interface Project {
  id: string;
  name: string;
  shortName?: string;
  category: string;
  status: "Completed" | "Ongoing" | "In Development" | "Experimental";
  year: string;
  developmentDate: string;
  stack: readonly string[];
  description: string;
  highlights: string[];
  image: string;
  github?: string;
  liveDemo?: string;
  isFlagship?: boolean;
  evolvingPlatform?: boolean;
  completedFeatures?: string[];
  upcomingFeatures?: string[];
  caseStudy: CaseStudy;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  period: string;
  year: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  metrics: ImpactMetric[];
  keyContributions: string[];
  points: string[];
}

export const PROFILE = {
  name: "Saksham Bhore",
  firstName: "Saksham",
  role: "Full Stack Developer | Software Engineer | AI Engineering Enthusiast",
  titleRoles: [
    "Full Stack Developer",
    "Software Engineer",
    "AI Engineering Enthusiast",
    "Backend & System Architect"
  ],
  location: "Pune, Maharashtra, India",
  email: "sakshambhore8902@gmail.com",
  linkedin: "https://www.linkedin.com/in/sakshambhore/",
  github: "https://github.com/engineershree",
  resumePath: "/Saksham_Bhore_I2 (3).pdf",
  avatar: "/assets/saksham-profile.jpeg",
  summary:
    "Full Stack Developer and Software Engineer with practical engineering experience building resilient backend architectures, high-performance web and mobile platforms, and AI-powered systems. Experienced in Java, Spring Boot, Node.js, Python, FastAPI, and React, focusing on clean API design, JWT/RBAC security, SQL optimization, and scalable digital products.",
};

export const TECH_STACK = [
  {
    category: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Backend & Systems",
    items: ["Spring Boot", "Node.js", "Express.js", "FastAPI", "Flask", "REST APIs", "Microservices", "JWT", "RBAC"],
  },
  {
    category: "Frontend & Mobile",
    items: ["React.js", "React Native", "Next.js", "TailwindCSS", "Redux", "HTML5/CSS3"],
  },
  {
    category: "Databases & Storage",
    items: ["PostgreSQL", "MySQL", "SQLite", "Query Optimization", "Schema Design", "Database Indexing"],
  },
  {
    category: "AI, NLP & Geospatial",
    items: ["NLP", "Semantic Search", "Sentence Transformers", "OpenAI API", "PyMuPDF", "Shapely", "GeoJSON", "Three.js"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "GitHub", "Postman", "Docker", "Linux", "CI/CD"],
  },
] as const;

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "rsl-solutions",
    company: "RSL Solution Pvt. Ltd.",
    role: "Software Developer",
    duration: "August 2025 – July 2026",
    period: "Aug 2025 – Jul 2026",
    year: "2025 – 2026",
    location: "Pune, India",
    type: "Full-Time",
    summary:
      "Engineered production-grade CRM and Fitness application modules, designed secure REST APIs, implemented strict JWT/RBAC authentication, and investigated complex multi-service API integrations.",
    responsibilities: [
      "Worked on production CRM and Fitness application modules.",
      "Developed and integrated REST APIs and database operations.",
      "Worked on JWT/RBAC authentication and backend workflows.",
      "Investigated and resolved failures across 10+ third-party and internal API integrations.",
      "Improved application performance and React component delivery efficiency.",
      "Collaborated in Agile sprints, code reviews, and pull-request workflows.",
    ],
    achievements: [
      "Resolved mission-critical integration bugs across 10+ internal and external partner APIs.",
      "Standardized JWT authentication and Role-Based Access Control (RBAC) across modular CRM microservices.",
      "Enhanced React component delivery velocity and decreased UI render lag across heavy data tables.",
      "Maintained zero security regressions across client CRM authentication workflows.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "React.js",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "JWT",
      "RBAC",
      "Postman",
      "Git",
    ],
    metrics: [
      { metric: "10+", label: "API Integrations Resolved" },
      { metric: "100%", label: "Secure RBAC Auth Enforcement" },
      { metric: "0", label: "Security Regressions in Prod" },
      { metric: "25%", label: "Faster Frontend Feature Delivery" },
    ],
    keyContributions: [
      "Auth & Access Control: Built unified JWT token verification middleware and multi-tier role permissions for administrative users.",
      "Integration Resilience: Diagnosed API payload serialization mismatches, rate-limit stalls, and network edge-cases across external webhooks.",
      "Agile Collaboration: Led bi-weekly code reviews, maintained strict pull-request hygiene, and participated in sprint capacity planning.",
    ],
    points: [
      "Worked on production CRM and Fitness application modules.",
      "Developed and integrated REST APIs and database operations.",
      "Worked on JWT/RBAC authentication and backend workflows.",
      "Investigated and resolved failures across 10+ third-party and internal API integrations.",
      "Improved application performance and React component delivery efficiency.",
      "Collaborated in Agile sprints, code reviews, and pull-request workflows.",
    ],
  },
  {
    id: "dxrad",
    company: "DXRAD Pvt. Ltd.",
    role: "Frontend Developer & Scrum Master",
    duration: "February 2024 – March 2025",
    period: "Feb 2024 – Mar 2025",
    year: "2024 – 2025",
    location: "Pune, India",
    type: "Full-Time",
    summary:
      "Led frontend development with React.js and Redux, contributed to Node.js and MySQL backend services, executed query optimizations reducing response times by 30–40%, and steered sprint execution as Scrum Master.",
    responsibilities: [
      "Developed React.js and Redux-based application features.",
      "Integrated frontend components with backend REST APIs.",
      "Contributed to backend integration using Node.js and MySQL.",
      "Optimized SQL queries through indexing, joins, and pagination.",
      "Reduced backend response time by approximately 30–40%.",
      "Coordinated team delivery, sprint execution, and collaboration as Scrum Master.",
    ],
    achievements: [
      "Reduced backend API response latency by approximately 30–40% via targeted SQL indexing, composite joins, and keyset pagination.",
      "Delivered robust state management pipelines utilizing Redux Toolkit, eliminating prop drilling and rendering bottlenecks.",
      "Served as Scrum Master: facilitated daily stand-ups, backlog grooming, and sprint retrospectives, maintaining high sprint velocity.",
      "Bridged frontend and backend teams by establishing clear OpenAPI contracts and Postman collections.",
    ],
    technologies: [
      "React.js",
      "Redux",
      "Node.js",
      "MySQL",
      "REST APIs",
      "SQL Query Optimization",
      "Scrum / Agile",
      "Git",
      "Postman",
    ],
    metrics: [
      { metric: "30–40%", label: "Backend Response Time Reduction" },
      { metric: "100%", label: "On-Time Sprint Deliveries" },
      { metric: "<200ms", label: "Optimized SQL Query Latency" },
      { metric: "Agile", label: "Cross-Functional Scrum Leadership" },
    ],
    keyContributions: [
      "SQL Optimization: Analyzed slow query logs, eliminated redundant table scans, and built composite indexes for high-frequency queries.",
      "Frontend Architecture: Created reusable React component patterns with predictable Redux state flows and error boundaries.",
      "Scrum Leadership: Removed cross-department blockers, maintained Jira sprint boards, and cultivated clear engineering communication.",
    ],
    points: [
      "Developed React.js and Redux-based application features.",
      "Integrated frontend components with backend REST APIs.",
      "Contributed to backend integration using Node.js and MySQL.",
      "Optimized SQL queries through indexing, joins, and pagination.",
      "Reduced backend response time by approximately 30–40%.",
      "Coordinated team delivery, sprint execution, and collaboration as Scrum Master.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "ai-resume-screening",
    name: "AI Resume Screening & Intelligent Candidate Ranking System",
    shortName: "AI Resume Screening",
    category: "AI / Full Stack / NLP",
    status: "Completed",
    year: "2026",
    developmentDate: "2026",
    stack: ["React.js", "Python", "FastAPI", "PostgreSQL", "NLP", "Sentence Transformers", "OpenAI API"],
    description:
      "An AI-powered recruitment platform that automates resume parsing, candidate information extraction, job-description analysis, semantic matching, candidate scoring, and intelligent ranking.",
    highlights: [
      "Multi-format document parsing across PDF, DOCX, and TXT files",
      "Automated candidate contact and skill entity extraction",
      "Deep semantic similarity matching using Sentence Transformers",
      "Explainable candidate scoring breakdown and ranking rationale",
      "Interactive recruiter dashboard with real-time candidate filtering",
    ],
    image: "/assets/ai_resume_screening.svg",
    github: "https://github.com/engineershree/ai-screening-and-ranking-system",
    isFlagship: true,
    caseStudy: {
      overview:
        "An AI-powered recruitment intelligence platform built to modernize candidate screening. The system ingests resumes in multiple formats, extracts key profile entities, computes high-dimensional semantic embeddings, and ranks candidates against job descriptions with explainable scoring insights.",
      problem:
        "Traditional keyword-matching applicant tracking systems (ATS) frequently reject qualified candidates who use differing terminology, while manual human screening of hundreds of resumes per job opening is slow, biased, and inconsistent.",
      solution:
        "Architected an end-to-end recruitment platform using Sentence Transformers and FastAPI that parses PDF, DOCX, and TXT documents, computes dense vector representations for both resumes and job descriptions, evaluates semantic cosine similarity, and presents an explainable ranking dashboard to recruiters.",
      architecture: [
        "Document Ingestion: Multi-parser ingestion pipeline extracting clean text from PDF, DOCX, and TXT formats.",
        "Entity Extraction: NLP processing isolating candidate skills, experience duration, education, and domain competencies.",
        "Semantic Vector Engine: Sentence Transformers model generating 768-dimensional embeddings with OpenAI API fallback.",
        "Backend API: Asynchronous FastAPI service orchestrating parsing, vector matching, and PostgreSQL persistent caching.",
        "Recruiter Interface: Responsive React.js dashboard providing instant similarity thresholds, criteria weighting, and candidate comparison.",
      ],
      keyFeatures: [
        "PDF, DOCX, and TXT resume processing",
        "Candidate contact and technical information extraction",
        "Job description semantic parsing and criteria weighting",
        "Semantic similarity and candidate matching",
        "Candidate ranking with explainable insights and score breakdown",
        "Interactive recruiter dashboard with real-time sorting and filtering",
      ],
      techStackDetailed: {
        frontend: ["React.js", "TailwindCSS", "Lucide React", "Vite"],
        backend: ["Python", "FastAPI", "Uvicorn", "Pydantic"],
        ai_nlp: ["Sentence Transformers", "OpenAI API", "NLP Tokenization", "Cosine Similarity"],
        database: ["PostgreSQL", "Relational Candidate Store"],
      },
      challenges:
        "Handling diverse and irregular resume layouts (multi-column tables, visual blocks, graphical headers) without truncating or jumbling text. Solved by developing an intelligent whitespace-normalization and structural block extractor prior to NLP embedding.",
      implementationDetails:
        "Built asynchronous FastAPI background workers to process bulk resume uploads concurrently without blocking the main event loop. Vector similarity computations are optimized using vectorized NumPy/SciPy operations, allowing re-ranking of 50+ candidates in under 200ms.",
      impact: [
        { metric: "90%+", label: "Reduction in Resume Screening Time" },
        { metric: "768-D", label: "High-Dimensional Vector Embeddings" },
        { metric: "<200ms", label: "Candidate Re-ranking Latency" },
        { metric: "3 Formats", label: "PDF, DOCX & TXT Parsing Support" },
      ],
      github: "https://github.com/engineershree/ai-screening-and-ranking-system",
      learnings:
        "Explainability is paramount in AI HR systems. Recruiters need to see the exact semantic overlap and missing requirements rather than a black-box score to make fair hiring decisions.",
    },
  },
  {
    id: "life-engine",
    name: "Personalized Life Engine",
    shortName: "Personalized Life Engine",
    category: "AI / Full Stack / Productivity",
    status: "Ongoing",
    year: "2026",
    developmentDate: "2026 (Ongoing)",
    stack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "AI/NLP", "REST APIs", "TailwindCSS"],
    description:
      "An intelligent personal productivity and career management platform that connects goals, missions, projects, tasks, habits, learning, and career applications into one interconnected ecosystem.",
    highlights: [
      "Unified personal data management and centralized control hub",
      "Goal and hierarchical project milestone tracking",
      "Career application pipeline management and offer tracking",
      "Habit consistency analytics and daily task execution",
      "Upcoming: Autonomous AI planning and multi-agent scheduling",
    ],
    image: "/assets/life_engine.svg",
    github: "https://github.com/engineershree",
    isFlagship: true,
    evolvingPlatform: true,
    completedFeatures: [
      "Unified personal data management across goals, projects, and careers",
      "Hierarchical goal, mission, and milestone tracking architecture",
      "Career application management pipeline (applied, screening, interviews, offers)",
      "Daily habit rhythm and task completion velocity tracking",
      "Normalized relational PostgreSQL schema with sub-50ms query indexing",
    ],
    upcomingFeatures: [
      "Intelligent automated task decomposition via generative AI models",
      "Predictive schedule optimization and workload burnout detection",
      "Automated multi-agent career application assistant and follow-up reminders",
      "Cross-platform mobile client companion for real-time offline sync",
    ],
    caseStudy: {
      overview:
        "A comprehensive personal operating system built to unify fragmented productivity apps. It bridges high-level life missions with day-to-day tactical execution, tracking career applications, habits, projects, and goals in a cohesive data graph.",
      problem:
        "Knowledge workers use fragmented, disconnected tools (Notion, Trello, spreadsheets, habit trackers). As a result, daily tasks are frequently disconnected from overarching career milestones, and tracking job applications happens in isolation from active technical projects.",
      solution:
        "Engineered an interconnected full-stack platform where every daily task maps upward to an active project, goal, and career objective. Designed with an evolving architecture that distinguishes production-verified modules from upcoming AI automation features.",
      architecture: [
        "Data Model: Relational PostgreSQL schema structuring Missions, Milestones, Tasks, Habits, and Job Applications.",
        "API Service: Express.js REST API with structured validation, transactional integrity, and session handling.",
        "Analytics Engine: Heuristic aggregation computing weekly completion velocity, streak resilience, and goal momentum.",
        "Frontend Interface: React.js SPA featuring interactive timeline trackers, kanban boards, and status visualization.",
        "AI Extension (Planned): Asynchronous agent worker synthesizing tasks and generating adaptive weekly schedules.",
      ],
      keyFeatures: [
        "[Completed] Unified personal data management and command dashboard",
        "[Completed] Goal and hierarchical project milestone tracking",
        "[Completed] Career application management pipeline with interview stages",
        "[Completed] Productivity analytics and daily streak monitoring",
        "[Upcoming] Intelligent planning recommendations and auto-rescheduling",
        "[Upcoming] AI-assisted workflow automation and predictive insights",
      ],
      techStackDetailed: {
        frontend: ["React.js", "TailwindCSS", "Framer Motion", "Lucide React"],
        backend: ["Node.js", "Express.js", "REST APIs"],
        ai_nlp: ["AI/NLP Heuristics", "Semantic Categorization (Planned)"],
        database: ["PostgreSQL", "Database Schema Optimization"],
      },
      challenges:
        "Designing a relational data architecture that supports deep parent-child hierarchies (Mission → Goal → Project → Milestone → Task) while maintaining snappy query response times on complex dashboard views.",
      implementationDetails:
        "Utilized PostgreSQL foreign key indexing, composite views, and optimized joins to keep dashboard load times under 50ms. Implemented an optimistic UI update model in React to provide instant feedback during rapid task completion.",
      impact: [
        { metric: "1 Hub", label: "Unified Productivity & Career System" },
        { metric: "<50ms", label: "Dashboard Query Retrieval Time" },
        { metric: "100%", label: "Traceability from Tasks to Goals" },
        { metric: "Evolving", label: "Actively Developing AI Layer" },
      ],
      github: "https://github.com/engineershree",
      learnings:
        "Building an evolving platform requires clear product boundaries: shipping rock-solid core data tracking first before layering on autonomous AI recommendations guarantees a dependable user experience.",
    },
  },
  {
    id: "sky-cadastral",
    name: "Sky Cadastral Land Services",
    shortName: "Sky Cadastral",
    category: "Enterprise Software / Geospatial Engineering",
    status: "Ongoing",
    year: "2026",
    developmentDate: "2026 (Ongoing)",
    stack: ["React.js", "Node.js", "Express.js", "Python", "PyMuPDF", "Shapely", "PDF.js", "GeoJSON", "Three.js"],
    description:
      "A cadastral land management platform designed to process land-layout PDFs, extract plot information, validate geometry, and generate interactive 2D and 3D plot visualizations.",
    highlights: [
      "Vector PDF-based land-layout parsing and coordinate extraction",
      "Plot boundary geometry extraction and Shapely topological validation",
      "GeoJSON-based spatial data representation and metadata indexing",
      "Interactive 2D vector plot visualization canvas with zoom/pan",
      "Enterprise engineering case study with distinct completed and ongoing modules",
    ],
    image: "/assets/sky_cadastral.svg",
    github: "https://github.com/engineershree",
    evolvingPlatform: true,
    completedFeatures: [
      "PDF-based land-layout vector extraction using PyMuPDF and PDF.js",
      "Plot boundary and geometry polygon extraction",
      "Shapely topological verification ensuring non-overlapping closed polygons",
      "Standardized GeoJSON spatial data export and persistence",
      "Interactive 2D vector plot visualization and inspection canvas",
      "Admin workflows for plot verification, reconciliation, and status tracking",
    ],
    upcomingFeatures: [
      "Three.js 3D spatial terrain mesh generation with real-world elevation",
      "Automated boundary discrepancy reconciliation against government land registry datasets",
      "Client-facing parcel reservation, payment gateway, and revenue management modules",
    ],
    caseStudy: {
      overview:
        "An enterprise geospatial software engineering case study built to automate the digitization of cadastral land survey layouts. The system extracts geometric vectors from complex blueprint PDFs, validates polygon closure, and renders interactive 2D and 3D plot layouts.",
      problem:
        "Land survey blueprints and cadastral layouts are traditionally archived as static vector PDFs. Manual inspection of plot boundaries, dimensions, and zoning compliance is painstakingly slow, prone to boundary overlap errors, and inaccessible for real-time customer visualization.",
      solution:
        "Engineered a multi-stage geospatial pipeline using Python (PyMuPDF, Shapely) and Node.js. The pipeline parses vector graphics primitives, reconstructs closed parcel polygons, verifies topological validity, converts coordinates to GeoJSON, and renders interactive vector maps.",
      architecture: [
        "PDF Ingestion Pipeline: PyMuPDF and PDF.js parsing vector line segments, curves, and survey annotation text.",
        "Geospatial Validation Engine: Python service utilizing Shapely to validate polygon closure and detect self-intersections.",
        "Spatial Data Service: Express.js API persisting GeoJSON feature collections, plot attributes, and ownership status.",
        "Interactive Visualizer: React.js application rendering 2D vector maps and Three.js 3D boundary visualizations.",
        "Admin Portal: Workflow console for surveying engineers to inspect plot areas, resolve discrepancies, and approve parcels.",
      ],
      keyFeatures: [
        "[Completed] PDF-based land-layout vector coordinate processing",
        "[Completed] Plot boundary and geometry extraction",
        "[Completed] GeoJSON-based spatial data representation",
        "[Completed] Plot verification and topological closure validation",
        "[Completed] Interactive 2D vector visualization with pan/zoom and plot highlighting",
        "[Completed] Admin-facing workflows for plot inventory and validation",
        "[Ongoing] Three.js interactive 3D plot and elevation visualization",
        "[Ongoing] Automated revenue and boundary reconciliation against external registries",
      ],
      techStackDetailed: {
        frontend: ["React.js", "Three.js", "PDF.js", "TailwindCSS"],
        backend: ["Node.js", "Express.js", "Python"],
        geospatial: ["PyMuPDF", "Shapely", "GeoJSON"],
        database: ["PostgreSQL", "Spatial Indexing"],
      },
      challenges:
        "Handling floating-point coordinate precision drift and open polygon gaps in exported CAD blueprints. Developed a topological snapping algorithm with custom epsilon thresholds in Shapely to ensure all line segments cleanly snap to shared vertices.",
      implementationDetails:
        "Divided the system into a high-performance Python geometry microservice and a Node.js business logic backend. Extracted coordinates are normalized into normalized unit coordinates and transformed into standardized GeoJSON feature collections.",
      impact: [
        { metric: "100%", label: "Topological Polygon Closure Accuracy" },
        { metric: "GeoJSON", label: "Open Spatial Data Compatibility" },
        { metric: "2D & 3D", label: "Multi-Perspective Plot Visualization" },
        { metric: "Enterprise", label: "Production Engineering Case Study" },
      ],
      github: "https://github.com/engineershree",
      learnings:
        "Geospatial engineering requires strict mathematical tolerance handling: vector primitives extracted from PDFs must be rigorously verified for topology before being exposed to rendering engines.",
    },
  },
  {
    id: "fitness-tracker",
    name: "Fitness Tracker Application",
    shortName: "Fitness Tracker",
    category: "Mobile Development / Backend Engineering",
    status: "Completed",
    year: "2025",
    developmentDate: "2025",
    stack: ["React Native", "Python", "Flask", "FastAPI", "SQLite", "REST APIs"],
    description:
      "A cross-platform fitness tracking application with backend functionality for fitness activities, notifications, user data, and offline-first synchronization.",
    highlights: [
      "Cross-platform mobile application built with React Native",
      "Offline-first synchronization with local SQLite storage",
      "User authentication, profile management, and progress history",
      "Automated push notification workflows for workout consistency",
      "High-throughput REST API backend built with Python, Flask, and FastAPI",
    ],
    image: "/assets/fitness_tracker.png",
    github: "https://github.com/engineershree",
    caseStudy: {
      overview:
        "A robust mobile fitness tracking ecosystem engineered for seamless operation in low-connectivity environments. The app captures workouts, tracks progress metrics, schedules reminders, and synchronizes data with a Python backend when connectivity is restored.",
      problem:
        "Gyms and outdoor running paths often suffer from poor cellular connectivity. Traditional online-first fitness apps drop user session data or freeze when trying to log sets or track GPS runs offline.",
      solution:
        "Built an offline-first architecture using React Native with SQLite for local persistence, combined with background synchronization that detects network status and queues updates to a Python (Flask/FastAPI) backend.",
      architecture: [
        "Mobile Client: React Native application optimized for 60fps animations and low memory footprint.",
        "Local Database: SQLite database with write-ahead logging (WAL) for local-first reads and writes.",
        "Sync Engine: Background synchronization worker with exponential backoff and conflict resolution.",
        "Backend APIs: RESTful endpoints powered by FastAPI and Flask for authentication, data aggregation, and notifications.",
        "Notification System: Scheduled local notifications and remote alerts to drive workout adherence.",
      ],
      keyFeatures: [
        "Fitness activity and workout logging",
        "User authentication and profile management",
        "Workout history, personal bests, and progress tracking",
        "Notification workflows for routines and hydration",
        "Offline-first synchronization with zero data loss",
        "Backend API integration with fast query throughput",
      ],
      techStackDetailed: {
        frontend: ["React Native", "TypeScript", "React Navigation"],
        backend: ["Python", "Flask", "FastAPI", "REST APIs"],
        database: ["SQLite (Mobile)", "PostgreSQL (Backend)"],
        tools: ["Postman", "Git"],
      },
      challenges:
        "Resolving concurrent data sync conflicts when users logged workouts across multiple devices while offline. Implemented a timestamped version-vector strategy with server reconciliation.",
      implementationDetails:
        "Engineered the mobile client with optimized React Native re-rendering patterns to maintain smooth 60fps list scrolling during active workout timers. Leveraged SQLite indexes on timestamp and user ID columns.",
      impact: [
        { metric: "60fps", label: "Smooth Animation & UI Performance" },
        { metric: "100%", label: "Offline Workout Logging Reliability" },
        { metric: "0", label: "Data Loss Incidents During Disconnects" },
        { metric: "Mobile", label: "Cross-Platform iOS & Android" },
      ],
      github: "https://github.com/engineershree",
      learnings:
        "Offline-first is an architectural commitment that must guide every state management decision: treating the remote server as a sync target rather than a real-time dependency creates a vastly superior user experience.",
    },
  },
  {
    id: "civiccare-ai",
    name: "CivicCare AI",
    shortName: "CivicCare AI",
    category: "Full Stack / Civic Technology",
    status: "Completed",
    year: "2024 – 2025",
    developmentDate: "2024 – 2025",
    stack: ["React.js", "Node.js", "PostgreSQL", "REST APIs", "JWT", "RBAC"],
    description:
      "A civic issue management platform designed to streamline complaint submission, tracking, and management through a structured application and backend system.",
    highlights: [
      "Structured complaint submission and lifecycle tracking workflows",
      "Normalized PostgreSQL schema with optimized relational indexing",
      "Role-Based Access Control (RBAC) for citizens, field officers, and administrators",
      "Secure authentication workflows utilizing JWT tokens",
      "High-reliability REST API development with complete input validation",
    ],
    image: "/assets/civic_ai_dashboard.png",
    github: "https://github.com/engineershree",
    caseStudy: {
      overview:
        "A municipal issue management platform built to bridge the gap between citizens and local government bodies. Citizens submit categorized grievances, while administrative departments manage verification, assignment, and resolution through role-governed workflows.",
      problem:
        "Citizens lack visibility into municipal grievance resolution, while municipal administrators struggle with unstructured complaint channels, redundant reports, and lack of accountability across departments.",
      solution:
        "Developed a secure full-stack platform featuring structured issue submission, role-based departmental routing, normalized database architecture, and real-time status tracking for end-to-end transparency.",
      architecture: [
        "Backend Service: Node.js and Express RESTful API with middleware validation and centralized error handling.",
        "Security: JWT-based stateless authentication coupled with Role-Based Access Control (RBAC).",
        "Database Architecture: 3NF normalized PostgreSQL schema with foreign keys, composite indexes, and status enum constraints.",
        "Frontend Application: React.js portal with intuitive complaint registration forms and administrative management tables.",
        "Workflow Engine: State-machine based grievance status transitions (Submitted → Assigned → In-Progress → Resolved → Verified).",
      ],
      keyFeatures: [
        "Citizen complaint submission with categorization and media attachment",
        "End-to-end lifecycle status tracking with transparent audit trails",
        "Role-Based Access Control (Citizens, Department Heads, Field Agents)",
        "Administrative dashboard for ticket assignment and priority triage",
        "Normalized PostgreSQL schema ensuring referential integrity",
        "REST API endpoints with JWT authentication and rate limiting",
      ],
      techStackDetailed: {
        frontend: ["React.js", "TailwindCSS", "Lucide React"],
        backend: ["Node.js", "Express.js", "REST APIs", "JWT", "RBAC"],
        database: ["PostgreSQL", "Relational Schema Normalization"],
        tools: ["Postman", "Git"],
      },
      challenges:
        "Designing a role-based access matrix that cleanly separates departmental boundaries so that staff can only review and act upon grievances assigned to their specific civic department.",
      implementationDetails:
        "Constructed a granular RBAC middleware verifying both user identity and department tenancy before executing database transactions. Applied PostgreSQL indexing on status, department ID, and submission timestamp.",
      impact: [
        { metric: "100%", label: "Role-Based Tenancy & Authorization" },
        { metric: "35%", label: "Faster Ticket Triage & Assignment" },
        { metric: "3NF", label: "Normalized Relational Database" },
        { metric: "Zero", label: "Unauthorized Department Cross-Access" },
      ],
      github: "https://github.com/engineershree",
      learnings:
        "Public sector and enterprise platforms require strict auditability: maintaining immutable status logs for every ticket transition is essential for building citizen trust.",
    },
  },
  {
    id: "ai-mentor",
    name: "Personalized AI Mentor Platform",
    shortName: "AI Mentor",
    category: "AI / Education Technology",
    status: "Completed",
    year: "2024",
    developmentDate: "2024",
    stack: ["React.js", "Node.js", "REST APIs", "PostgreSQL", "OAuth2"],
    description:
      "An AI-assisted learning platform designed to personalize learning workflows through user progress tracking, recommendation logic, and structured learning plans.",
    highlights: [
      "Personalized learning roadmaps adapted to user pace and background",
      "Dynamic progress tracking and milestone completion verification",
      "Recommendation logic suggesting tailored follow-up modules",
      "Robust Node.js and REST API backend architecture",
      "Accessible React.js frontend interface with responsive design",
    ],
    image: "/assets/ai_mentor_platform.png",
    github: "https://github.com/engineershree",
    caseStudy: {
      overview:
        "An AI-assisted education technology platform designed to deliver personalized curriculum roadmaps. The system monitors student progress, evaluates comprehension checkpoints, and dynamically adjusts module recommendations.",
      problem:
        "Standardized online learning platforms force students into one-size-fits-all curricula, failing to adapt when learners struggle with prerequisites or accelerate through familiar subjects.",
      solution:
        "Built a structured learning platform with Node.js and React that evaluates learner progress, computes personalized study plans, and serves targeted learning materials through RESTful APIs.",
      architecture: [
        "Backend API: Node.js and Express server providing modular REST endpoints for courses, modules, and user progress.",
        "Adaptive Engine: Algorithmic recommendation service dynamically recalculating topic sequences based on quiz scores.",
        "Authentication: Secure user session management and OAuth2 integration.",
        "Frontend Portal: Component-driven React.js application with interactive roadmap visualization and progress analytics.",
        "Database: PostgreSQL tracking learner profiles, completion timestamps, and score metrics.",
      ],
      keyFeatures: [
        "Personalized learning workflows tailored to individual pace",
        "Progress-based recommendation logic for upcoming study modules",
        "Learning activity and quiz score management",
        "Backend REST API development with structured request validation",
        "Interactive course milestone tracking with visual progress indicators",
      ],
      techStackDetailed: {
        frontend: ["React.js", "TailwindCSS", "Lucide React"],
        backend: ["Node.js", "Express.js", "REST APIs"],
        database: ["PostgreSQL"],
        tools: ["Postman", "Git"],
      },
      challenges:
        "Creating dynamic learning roadmap paths that gracefully recalculate prerequisites when a student skips or fails a specific competency check without corrupting course progress trees.",
      implementationDetails:
        "Represented curriculum roadmaps as directed acyclic graphs (DAGs) in PostgreSQL. Used clean RESTful endpoints to query next-recommended modules with sub-50ms latency.",
      impact: [
        { metric: "100%", label: "Adaptive Curriculum Path Generation" },
        { metric: "<50ms", label: "Progress Checkpoint API Latency" },
        { metric: "DAG", label: "Curriculum Graph Data Modeling" },
        { metric: "WCAG", label: "Accessible Student UI Standards" },
      ],
      github: "https://github.com/engineershree",
      learnings:
        "Personalization is most effective when grounded in clear visual progress feedback: showing students where they stand on their roadmap significantly increases completion rates.",
    },
  },
  {
    id: "mcm",
    name: "My Cinematic Multiverse",
    shortName: "Cinematic Multiverse",
    category: "Web3 & Creative Tech",
    status: "Experimental",
    year: "2024",
    developmentDate: "2024",
    stack: ["React", "Node.js", "Web3.js", "Smart Contracts", "IPFS"],
    description:
      "A decentralized storytelling platform exploring blockchain integration and secure digital asset ownership architectures.",
    highlights: [
      "Decentralized digital narrative asset ownership",
      "Web3 wallet integration and authentication",
      "Hybrid on-chain and off-chain data indexing architecture",
    ],
    image: "/assets/cinematic_multiverse.png",
    github: "https://github.com/engineershree",
    caseStudy: {
      overview:
        "A decentralized storytelling exploration platform investigating on-chain creator provenance, digital collectible mechanics, and community-driven world building.",
      problem:
        "Creative storytellers on traditional social media do not own their IP, and platform algorithms control discovery and monetization.",
      solution:
        "Architected an experimental Web3 application with React and Node.js that tokenizes narrative elements and stores metadata immutably via IPFS.",
      architecture: [
        "React frontend connecting to Web3 provider wallets",
        "Smart contracts governing ownership and digital royalties",
        "Node.js syncing on-chain events into relational database",
        "IPFS for decentralized asset storage",
      ],
      keyFeatures: [
        "Web3 wallet authentication",
        "Story tokenization and royalty distribution",
        "Decentralized content storage on IPFS",
      ],
      challenges:
        "Syncing asynchronous blockchain event states with traditional database caches during high network congestion.",
      implementationDetails:
        "Built event listener daemons with confirmation thresholds to maintain consistent UI states.",
      impact: [
        { metric: "Web3", label: "Decentralized Identity" },
        { metric: "100%", label: "Verifiable Story Ownership" },
      ],
      github: "https://github.com/engineershree",
      learnings:
        "Web3 user experience requires deep abstraction: users care about creation and ownership, not raw transaction hashes.",
    },
  },
];

export const LEADERSHIP = {
  role: "Technical Head",
  org: "CESA — Computer Engineering Students' Association",
  period: "Past",
  points: [
    "Orchestrated large-scale technical workshops and knowledge-sharing sessions for 200+ engineering students.",
    "Mentored junior developers and students in modern web technologies, Git, and software engineering practices.",
    "Organized competitive coding events, hackathons, and community-building initiatives.",
    "Demonstrated strong team leadership and fostered a culture of collaborative innovation and continuous learning.",
  ],
} as const;

export const FUTURE_VISION = [
  {
    title: "AI Products",
    description:
      "Building practical, intelligent software products that combine robust backend architectures with modern NLP, semantic search, and autonomous agent workflows.",
  },
  {
    title: "Civic Technology",
    description:
      "Creating transparent, accountable digital systems that bridge the gap between citizens, enterprise stakeholders, and municipal authorities.",
  },
  {
    title: "Education Technology",
    description:
      "Democratizing technical knowledge through adaptive, AI-driven mentorship workflows and personalized learning pathways.",
  },
  {
    title: "Startup Engineering",
    description:
      "Scaling innovative, practical concepts into production-grade, highly scalable software architectures and enduring technical businesses.",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Expertise", href: "#stack" },
  { label: "Resume", href: "#resume" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
] as const;
