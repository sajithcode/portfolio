import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layers,
  Palette,
  Terminal,
  Zap,
  Globe,
  GitBranch,
} from "lucide-react";

const icons = [
  { Icon: Code2, delay: 0, position: "top-0 left-1/4" },
  { Icon: Database, delay: 0.1, position: "top-1/4 right-0" },
  { Icon: Layers, delay: 0.2, position: "top-1/2 left-0" },
  { Icon: Palette, delay: 0.3, position: "bottom-1/4 right-1/4" },
  { Icon: Terminal, delay: 0.4, position: "bottom-0 left-1/3" },
  { Icon: Zap, delay: 0.5, position: "top-1/3 left-1/2" },
  { Icon: Globe, delay: 0.6, position: "bottom-1/3 right-0" },
  { Icon: GitBranch, delay: 0.7, position: "top-2/3 left-1/4" },
];

export const TechIconCloud = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Central Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Floating Icons */}
      {icons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{
            opacity: { delay, duration: 0.5 },
            scale: { delay, duration: 0.5 },
            y: {
              delay: delay + 0.5,
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="p-4 bg-card border border-border rounded-xl shadow-lg backdrop-blur-sm hover:shadow-xl transition-shadow"
          >
            <Icon className="w-8 h-8 text-primary" />
          </motion.div>
        </motion.div>
      ))}

      {/* Center Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 p-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full border-2 border-primary/30 backdrop-blur-sm"
      >
        <Code2 className="w-16 h-16 text-primary" />
      </motion.div>
    </div>
  );
};
