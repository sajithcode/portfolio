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
    skills: ["ReactJS", "Springboot", "Laravel", "Express", "Next.js"],
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
    skills: ["MySQL", "MongoDB"],
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
