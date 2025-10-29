export interface Experience {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  type: "internship" | "project" | "volunteer";
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Software Engineering Intern",
    organization: "Tech Startup Inc.",
    location: "Remote",
    period: "Jun 2024 - Present",
    type: "internship",
    description: [
      "Developed responsive web components using React and TypeScript, improving page load times by 40%",
      "Collaborated with cross-functional teams to implement new features based on user feedback",
      "Wrote comprehensive unit tests achieving 90% code coverage using Jest and React Testing Library",
      "Participated in code reviews and contributed to team documentation",
    ],
  },
  {
    id: "2",
    title: "Web Development Lead",
    organization: "University Tech Club",
    location: "Campus",
    period: "Sep 2023 - May 2024",
    type: "project",
    description: [
      "Led a team of 5 developers in building the club's portfolio website using Next.js and Tailwind CSS",
      "Organized weekly workshops teaching modern web development to 50+ students",
      "Implemented CI/CD pipeline reducing deployment time from hours to minutes",
      "Mentored junior members on Git workflow and best practices",
    ],
  },
  {
    id: "3",
    title: "Frontend Developer",
    organization: "Hackathon Project",
    location: "Virtual",
    period: "Mar 2024",
    type: "project",
    description: [
      "Built a healthcare appointment booking system in 48 hours with a team of 4",
      "Implemented responsive UI with real-time availability updates using React and WebSockets",
      "Won 'Best User Experience' award among 50+ competing teams",
      "Integrated payment processing and email notification systems",
    ],
  },
  {
    id: "4",
    title: "Volunteer Developer",
    organization: "Local Non-Profit",
    location: "Remote",
    period: "Jan 2024 - Apr 2024",
    type: "volunteer",
    description: [
      "Redesigned organization's website improving accessibility scores from 65 to 95",
      "Reduced page load times by 60% through image optimization and code splitting",
      "Implemented donation tracking system helping process 100+ monthly donations",
      "Trained staff on content management and basic web maintenance",
    ],
  },
];
