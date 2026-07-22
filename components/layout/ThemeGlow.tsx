"use client";

import { motion } from "framer-motion";

export default function ThemeGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-30 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-60 -top-60 h-[700px] w-[700px] rounded-full bg-purple-600/12 blur-[180px]"
      />

      <motion.div
        animate={{
          x: [0, -140, 0],
          y: [0, 120, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-60 top-1/3 h-[650px] w-[650px] rounded-full bg-fuchsia-600/10 blur-[180px]"
      />

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-280px] left-1/2 h-[750px] w-[750px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[220px]"
      />

    </div>
  );
}