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
    title: "Webmaster",
    organization: "IEEE Student Branch of Sabaragamuwa University of Sri Lanka",
    location: "Sri Lanka",
    period: "September 2025 – Present",
    type: "volunteer",
    description: [
      "Responsible for managing and maintaining the IEEE SUSL Student Branch website, ensuring seamless functionality and regular updates.",
      "Designed and implemented web pages to showcase events, projects, and achievements of the student branch.",
      "Collaborated with the executive committee to promote IEEE activities through digital platforms.",
      "Ensured website performance, accessibility, and security through continuous monitoring and optimization.",
    ],
  },
  {
    id: "2",
    title: "Volunteer Developer",
    organization: "Associated with Sabaragamuwa University of Sri Lanka",
    location: "Sri Lanka",
    period: "February 2025 – Present",
    type: "volunteer",
    description: [
      "Contributed to the Convocation Student Registration System, a live web-based platform used for managing student registration.",
      "Participated in testing and deployment processes to ensure smooth operation of the live system.",
      "Worked collaboratively with faculty members and students to design and deploy functional web solutions.",
      "Gained hands-on experience in teamwork, problem-solving, and agile-based project development.",
    ],
  },
  {
    id: "3",
    title: "YouTube Content Creator",
    organization: "YouTube (Self-employed)",
    location: "Online",
    period: "December 2024 – Present",
    type: "project",
    description: [
      "Created educational and technology-related content to help learners understand programming and development concepts.",
      "Managed the entire production process, including scripting, recording, editing, and publishing videos.",
      "Engaged with an online audience by responding to comments and implementing feedback for continuous improvement.",
      "Leveraged SEO strategies and thumbnails to enhance video reach and channel growth.",
    ],
  },
];
