import { motion } from "framer-motion";

const animation = {
  initial: { opacity: 0, x: 0, scale: 0.8 },
  animate: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -100, scale: 0.8 },
};
const AnimatedRoute = ({ children }) => {
  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit={"exit"}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedRoute;
