"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function TopProgressBar() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[9999] h-1 w-full origin-left bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-500 shadow-[0_0_20px_rgba(168,85,247,.8)]"
    />
  );
}