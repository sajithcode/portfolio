export interface Social {
  name: string;
  url: string;
  icon: string;
  username: string;
}

export const socials: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github",
    username: "@yourusername",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    icon: "linkedin",
    username: "Your Name",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "twitter",
    username: "@yourusername",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@yourchannel",
    icon: "youtube",
    username: "@yourchannel",
  },
  {
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: "mail",
    username: "your.email@example.com",
  },
];

export const resumeUrl = "/resume.pdf"; // Place your resume in public folder
