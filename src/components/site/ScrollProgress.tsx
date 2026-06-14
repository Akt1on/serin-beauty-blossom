import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-0 left-0 z-50 h-[2px] w-full"
    >
      <div className="h-full w-full bg-gradient-to-r from-gold via-rose to-gold" />
    </motion.div>
  );
}
