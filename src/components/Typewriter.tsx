import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "Mobile Developer",
  "Front End Developer",
  "Backend Developer",
];

export const Typewriter = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: NodeJS.Timeout;

    const tick = () => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
          setTypingSpeed(100);
        } else {
          // Finished typing, pause before deleting
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
          setTypingSpeed(50);
        } else {
          // Move to next role
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500);
        }
      }
    };

    timer = setTimeout(tick, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="flex items-center gap-2 justify-center lg:justify-start mb-4 md:mb-6 h-10 md:h-15"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        className="w-6 h-6 md:w-8 md:h-8 text-primary flex-shrink-0"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      </motion.div>
      <h2 className="text-2xl md:text-3xl text-muted-foreground font-mono">
        {displayText}
        <span className="animate-pulse">|</span>
      </h2>
    </motion.div>
  );
};
