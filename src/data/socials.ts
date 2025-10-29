export interface Social {
  name: string;
  url: string;
  icon: string;
  username: string;
}

export const socials: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com/sajithcode",
    icon: "github",
    username: "@sajithcode",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sajith-r-sampath/",
    icon: "linkedin",
    username: "Sajith R Sampath",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "twitter",
    username: "@yourusername",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@codewith-leo",
    icon: "youtube",
    username: "@codewith-leo",
  },
  {
    name: "Email",
    url: "mailto:sajithsampath721@gmail.com",
    icon: "mail",
    username: "sajithsampath721@gmail.com",
  },
];

export const resumeUrl = "/resume.pdf"; // Place your resume in public folder
