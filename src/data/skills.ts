export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Java", "PHP", "Dart", "JavaScript"],
  },
  {
    category: "Frameworks",
    skills: ["ReactJS", "Springboot", "ASP.NET Core", "Laravel", "Express"],
  },
  {
    category: "Web Technologies",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "Firebase",
      "WordPress",
    ],
  },
  {
    category: "Mobile Development",
    skills: ["Flutter"],
  },
  {
    category: "Database Management",
    skills: ["MySQL", "Microsoft SQL Server"],
  },
  {
    category: "Version Control",
    skills: ["Git", "Github"],
  },
  {
    category: "Design Tools",
    skills: ["Figma"],
  },
];
