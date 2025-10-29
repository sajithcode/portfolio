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
    title: "DevOps Pre-Requisite Course",
    issuer: "KodeKloud",
    date: "FEB 2025",
    description:
      "Completed foundational DevOps concepts and tools prerequisite course",
  },
  {
    id: "2",
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "MAY 2024",
  },
  {
    id: "3",
    title: "Programming with JavaScript",
    issuer: "Meta, Coursera",
    date: "JULY 2023",
  },
  {
    id: "4",
    title: "Server-side Web Programming",
    issuer: "University of Moratuwa",
    date: "MARCH 2023",
  },
];
