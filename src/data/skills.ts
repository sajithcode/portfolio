export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "HTML5", "CSS3", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Vercel", "PostgreSQL"],
  },
  {
    category: "Concepts",
    skills: ["Responsive Design", "REST APIs", "Agile", "Testing", "CI/CD", "Accessibility"],
  },
];
