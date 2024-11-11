import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export const AnimatedWrapper = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.97,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        backdropFilter: "blur(0px)",
        WebkitBackdropFilter: "blur(0px)",
      }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
