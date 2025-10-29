export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export const awards: Award[] = [
  {
    id: "1",
    title: "Best UX Design - Hackathon 2024",
    issuer: "University Tech Summit",
    date: "Mar 2024",
    description: "Awarded for outstanding user experience in healthcare booking system",
  },
  {
    id: "2",
    title: "Dean's List",
    issuer: "University Name",
    date: "Fall 2023",
    description: "Recognized for academic excellence with GPA above 3.75",
  },
  {
    id: "3",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Jan 2024",
  },
  {
    id: "4",
    title: "Open Source Contributor Badge",
    issuer: "GitHub",
    date: "2023",
    description: "Contributed to 10+ open-source projects",
  },
];
