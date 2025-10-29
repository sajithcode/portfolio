import { Github, Linkedin, Mail, Heart, Youtube } from "lucide-react";
import { socials } from "@/data/socials";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  youtube: Youtube,
};

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {year} Sajith R. Sampath's Portfolio.</span>
          </div>

          <div className="flex items-center gap-4">
            {socials
              .filter((s) => s.icon !== "twitter")
              .map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </footer>
  );
};
