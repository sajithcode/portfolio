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
    slug: "task-management-app",
    title: "Task Management App",
    summary: "A full-stack task management application with real-time updates and team collaboration features.",
    description: "Built a modern task management platform that helps teams organize, track, and collaborate on projects efficiently. Features include drag-and-drop interfaces, real-time synchronization, and advanced filtering.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSockets", "Tailwind CSS"],
    links: {
      github: "https://github.com/yourusername/task-app",
      demo: "https://task-app-demo.vercel.app",
    },
    images: ["/placeholder.svg"],
    problem: "Teams struggle with scattered tasks across multiple platforms, leading to miscommunication and missed deadlines.",
    approach: "Designed an intuitive interface with real-time collaboration features, implementing WebSocket connections for instant updates and optimistic UI patterns for better UX.",
    result: "Achieved <100ms update latency and 98% test coverage. Used by 50+ users in beta testing with positive feedback.",
    features: [
      "Real-time collaboration with WebSocket connections",
      "Drag-and-drop task organization",
      "Advanced filtering and search",
      "Role-based access control",
      "Email notifications and reminders",
    ],
    lessons: [
      "Optimistic UI updates significantly improve perceived performance",
      "Proper error boundaries are crucial for real-time applications",
      "User testing early revealed important UX improvements",
    ],
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    summary: "Interactive weather dashboard with data visualization and location-based forecasts.",
    description: "Created a responsive weather application that provides detailed forecasts, historical data visualization, and severe weather alerts using modern web technologies.",
    tech: ["React", "Chart.js", "OpenWeather API", "Geolocation API", "CSS Grid"],
    links: {
      github: "https://github.com/yourusername/weather-dashboard",
      demo: "https://weather-dashboard-demo.vercel.app",
    },
    images: ["/placeholder.svg"],
    problem: "Existing weather apps provide data but lack intuitive visualization and personalized alerts.",
    approach: "Integrated multiple weather APIs with Chart.js for data visualization, implementing caching strategies to reduce API calls and improve load times.",
    result: "Lighthouse score of 98/100, with <2s initial load time. Handles 10k+ API requests daily with optimized caching.",
    features: [
      "7-day detailed forecasts with hourly breakdowns",
      "Interactive temperature and precipitation charts",
      "Severe weather alerts and notifications",
      "Location-based automatic updates",
      "Dark mode with smooth transitions",
    ],
    lessons: [
      "API rate limiting requires smart caching strategies",
      "Accessibility in data visualization is often overlooked",
      "Progressive enhancement ensures functionality for all users",
    ],
  },
  {
    slug: "code-snippet-manager",
    title: "Code Snippet Manager",
    summary: "Developer tool for organizing and sharing code snippets with syntax highlighting and tags.",
    description: "Built a productivity tool for developers to save, organize, and share code snippets with advanced search, syntax highlighting, and collaboration features.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Monaco Editor", "TailwindCSS"],
    links: {
      github: "https://github.com/yourusername/snippet-manager",
    },
    images: ["/placeholder.svg"],
    problem: "Developers waste time searching through old projects or documentation for reusable code snippets.",
    approach: "Designed a fast, searchable snippet library with tag-based organization and VSCode-like editing experience using Monaco Editor.",
    result: "Used by 200+ developers. Average search time reduced from 5 minutes to <10 seconds.",
    features: [
      "Syntax highlighting for 50+ languages",
      "Full-text search with fuzzy matching",
      "Tag-based organization and filtering",
      "Public/private snippet sharing",
      "Code version history",
    ],
    lessons: [
      "Developer tools must be keyboard-first for adoption",
      "Search relevancy is more important than search speed",
      "Export functionality increases user trust and adoption",
    ],
  },
];
