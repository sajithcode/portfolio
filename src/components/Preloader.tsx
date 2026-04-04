import { motion } from "framer-motion";
import Lottie from "lottie-react";
import paperplaneAnimation from "../../public/animations/paperplane.json";

export const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-4">
        <Lottie
          animationData={paperplaneAnimation}
          loop={true}
          autoplay={true}
          style={{ width: 400, height: 400 }}
        />

        {/* Loading Text */}
        {/* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-bold text-primary"
        >
          Loading...
        </motion.h2> */}
      </div>
    </motion.div>
  );
};
