import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });
  return (
    <motion.div
      style={{ scaleX: x, transformOrigin: "0% 50%" }}
      className="fixed left-0 right-0 top-0 z-[90] h-[2px] bg-gradient-to-r from-[color:var(--cyan)] via-[color:var(--cyan)] to-[color:var(--indigo)]"
    />
  );
}