import { motion } from "framer-motion";
import { HoverPopover } from "@/components/HoverPopover";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

interface SkillsPopoverProps {
  skill: string;
}

export const SkillsPopover = ({ skill }: SkillsPopoverProps) => {
  // Find projects that use this skill (case-insensitive, partial match allowed)
  const relatedProjects = projects.filter((project) =>
    project.tech.some((tech) =>
      tech.toLowerCase().includes(skill.toLowerCase()),
    ),
  );

  return (
    <HoverPopover
      trigger={
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <Badge
            variant="secondary"
            className="px-3 py-1.5 text-xs md:text-sm font-semibold bg-gradient-to-br from-secondary via-secondary to-secondary/80 hover:from-primary hover:to-primary/90 text-foreground hover:text-primary-foreground shadow-md hover:shadow-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-pulse"></span>
            <span className="relative">{skill}</span>
          </Badge>
        </motion.div>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="w-64"
      >
        <div className="mb-4 pb-3 border-b border-border">
          <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Used in Projects
          </h4>
        </div>

        {relatedProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-4"
          >
            <p className="text-muted-foreground text-sm">
              No projects using this skill yet.
            </p>
          </motion.div>
        ) : (
          <ul className="space-y-3">
            {relatedProjects.map((project, index) => (
              <motion.li
                key={project.slug}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="group/project"
              >
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="flex-shrink-0"
                  >
                    <img
                      src={project.images?.[0] || "/placeholder.svg"}
                      alt={project.title}
                      className="w-12 h-12 rounded-md object-cover border-2 border-primary/30 group-hover/project:border-primary/70 transition-all duration-300 shadow-sm"
                      loading="lazy"
                    />
                  </motion.div>
                  <div className="flex flex-col flex-grow min-w-0">
                    <span className="font-semibold text-sm text-foreground truncate group-hover/project:text-primary transition-colors duration-200">
                      {project.title}
                    </span>
                    <a
                      href={project.links.github || project.links.demo || `#`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:text-primary/80 hover:underline transition-colors duration-200 font-medium"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        )}
      </motion.div>
    </HoverPopover>
  );
};
