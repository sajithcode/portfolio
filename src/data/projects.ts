export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  links: {
    github?: string;
    demo?: string;
  };
  images: string[];
  problem?: string;
  approach?: string;
  result?: string;
  features?: string[];
  lessons?: string[];
}

export const projects: Project[] = [
  {
    slug: "ledgervote",
    title: "LedgerVote — Blockchain Based Voting System",
    summary:
      "Secure, transparent, and tamper-evident voting platform using smart contracts with Web-based authentication.",
    description:
      "Group project delivering a blockchain-powered voting system focused on integrity, anonymity, and end-to-end transparency. Backend built with Spring Boot and MySQL; voter authentication integrated via MetaMask. React powers the client UI, while Solidity smart contracts enforce election rules on-chain.",
    tech: ["React", "Spring Boot", "MySQL", "Solidity", "MetaMask"],
    links: {
      github: "https://github.com/LedgerVote",
    },
    images: ["/ledgervote_img.png"],
    problem:
      "Traditional electronic voting systems struggle to prove integrity and resist tampering while preserving voter privacy.",
    approach:
      "Implemented election logic in Solidity smart contracts; built a Spring Boot API for off-chain processes and persistence; integrated MetaMask for wallet-based voter authentication and signing.",
    result:
      "Completed group build (Mar–Jul 2025). Delivered a working prototype demonstrating verifiable, privacy-preserving ballot casting and tallying.",
    features: [
      "Wallet-based voter authentication (MetaMask)",
      "On-chain, tamper-evident ballot recording",
      "Anonymity-preserving vote casting",
      "Admin panel for creating and closing elections",
      "Auditable tallies with public verification",
    ],
    lessons: [
      "Designing data flows across on-chain and off-chain layers",
      "Gas-cost awareness and contract optimization",
      "Thorough test coverage for smart contracts is critical",
    ],
  },
  {
    slug: "cloudexpiry",
    title: "CloudExpiry — Time-Limited File Sharing",
    summary:
      "Dockerized web app for uploading files with auto-expiring, secure share links.",
    description:
      "An individual project for ephemeral file sharing. Users upload files and receive time-limited links; upon expiry, files are purged from both object storage (MinIO) and the relational database. Built with a React front end and an Express.js backend orchestrated via Docker.",
    tech: ["React", "Express.js", "MySQL", "MinIO", "Docker"],
    links: {
      github: "https://github.com/sajithcode/CloudExpiry-Cloud-Based-File-Sharing",
    },
    images: ["/cloudexpiry_img.png"],
    problem:
      "Sharing sensitive files often leaves lingering copies in storage, creating security and compliance risks.",
    approach:
      "Implemented signed, time-bounded URLs with server-side schedulers/workers to enforce deletion and cleanup in storage and DB; abstracted storage with S3-compatible MinIO to simplify deployment.",
    result:
      "Ongoing (since Sep 2025). Functional MVP with automated expiry and cleanup workflows.",
    features: [
      "Time-limited, signed download links",
      "Automated file & metadata deletion on expiry",
      "S3-compatible storage with MinIO",
      "Upload progress and basic audit logging",
      "Containerized services for easy deployment",
    ],
    lessons: [
      "Background jobs and idempotent cleanup routines are essential",
      "Consistent storage/DB transactions avoid orphaned data",
      "S3-compatible abstractions simplify portability",
    ],
  },
  {
    slug: "convocation-registration-susl",
    title: "Convocation Student Registration (SUSL)",
    summary:
      "Production web system used annually by SUSL students for convocation registration.",
    description:
      "Contributed to a live Laravel application used each year by Sabaragamuwa University of Sri Lanka students for convocation registration. Work focused on improving usability, correctness, and data accuracy in core flows.",
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    links: {
      github: "https://github.com/sajithcode/conversation_student_registration_susl",
    },
    images: ["/convocation-registration-susl_img.png"],
    problem:
      "Manual or fragmented registration processes cause data inconsistencies and poor student experience.",
    approach:
      "Refined core forms and validation, improved server-side rules and DB constraints, and streamlined UI with Bootstrap components for clarity and accessibility.",
    result:
      "Ongoing contribution (since Feb 2025). Improved reliability and reduced operator overhead during yearly registration windows.",
    features: [
      "Guided registration flow with validations",
      "Admin review and data export",
      "Email/ID-based lookup and status tracking",
      "Mobile-friendly Bootstrap UI",
    ],
    lessons: [
      "Production data validation must be defense-in-depth",
      "Clear UX reduces support tickets during peak periods",
    ],
  },
];





// export interface Project {
//   slug: string;
//   title: string;
//   summary: string;
//   description: string;
//   tech: string[];
//   links: {
//     github?: string;
//     demo?: string;
//   };
//   images: string[];
//   problem?: string;
//   approach?: string;
//   result?: string;
//   features?: string[];
//   lessons?: string[];
// }

// export const projects: Project[] = [
//   {
//     slug: "task-management-app",
//     title: "Task Management App",
//     summary: "A full-stack task management application with real-time updates and team collaboration features.",
//     description: "Built a modern task management platform that helps teams organize, track, and collaborate on projects efficiently. Features include drag-and-drop interfaces, real-time synchronization, and advanced filtering.",
//     tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSockets", "Tailwind CSS"],
//     links: {
//       github: "https://github.com/yourusername/task-app",
//       demo: "https://task-app-demo.vercel.app",
//     },
//     images: ["/placeholder.svg"],
//     problem: "Teams struggle with scattered tasks across multiple platforms, leading to miscommunication and missed deadlines.",
//     approach: "Designed an intuitive interface with real-time collaboration features, implementing WebSocket connections for instant updates and optimistic UI patterns for better UX.",
//     result: "Achieved <100ms update latency and 98% test coverage. Used by 50+ users in beta testing with positive feedback.",
//     features: [
//       "Real-time collaboration with WebSocket connections",
//       "Drag-and-drop task organization",
//       "Advanced filtering and search",
//       "Role-based access control",
//       "Email notifications and reminders",
//     ],
//     lessons: [
//       "Optimistic UI updates significantly improve perceived performance",
//       "Proper error boundaries are crucial for real-time applications",
//       "User testing early revealed important UX improvements",
//     ],
//   },
//   {
//     slug: "weather-dashboard",
//     title: "Weather Dashboard",
//     summary: "Interactive weather dashboard with data visualization and location-based forecasts.",
//     description: "Created a responsive weather application that provides detailed forecasts, historical data visualization, and severe weather alerts using modern web technologies.",
//     tech: ["React", "Chart.js", "OpenWeather API", "Geolocation API", "CSS Grid"],
//     links: {
//       github: "https://github.com/yourusername/weather-dashboard",
//       demo: "https://weather-dashboard-demo.vercel.app",
//     },
//     images: ["/placeholder.svg"],
//     problem: "Existing weather apps provide data but lack intuitive visualization and personalized alerts.",
//     approach: "Integrated multiple weather APIs with Chart.js for data visualization, implementing caching strategies to reduce API calls and improve load times.",
//     result: "Lighthouse score of 98/100, with <2s initial load time. Handles 10k+ API requests daily with optimized caching.",
//     features: [
//       "7-day detailed forecasts with hourly breakdowns",
//       "Interactive temperature and precipitation charts",
//       "Severe weather alerts and notifications",
//       "Location-based automatic updates",
//       "Dark mode with smooth transitions",
//     ],
//     lessons: [
//       "API rate limiting requires smart caching strategies",
//       "Accessibility in data visualization is often overlooked",
//       "Progressive enhancement ensures functionality for all users",
//     ],
//   },
//   {
//     slug: "code-snippet-manager",
//     title: "Code Snippet Manager",
//     summary: "Developer tool for organizing and sharing code snippets with syntax highlighting and tags.",
//     description: "Built a productivity tool for developers to save, organize, and share code snippets with advanced search, syntax highlighting, and collaboration features.",
//     tech: ["Next.js", "Prisma", "PostgreSQL", "Monaco Editor", "TailwindCSS"],
//     links: {
//       github: "https://github.com/yourusername/snippet-manager",
//     },
//     images: ["/placeholder.svg"],
//     problem: "Developers waste time searching through old projects or documentation for reusable code snippets.",
//     approach: "Designed a fast, searchable snippet library with tag-based organization and VSCode-like editing experience using Monaco Editor.",
//     result: "Used by 200+ developers. Average search time reduced from 5 minutes to <10 seconds.",
//     features: [
//       "Syntax highlighting for 50+ languages",
//       "Full-text search with fuzzy matching",
//       "Tag-based organization and filtering",
//       "Public/private snippet sharing",
//       "Code version history",
//     ],
//     lessons: [
//       "Developer tools must be keyboard-first for adoption",
//       "Search relevancy is more important than search speed",
//       "Export functionality increases user trust and adoption",
//     ],
//   },
// ];
