"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const x = useSpring(mouseX, {
    stiffness: 180,
    damping: 22,
  });

  const y = useSpring(mouseY, {
    stiffness: 180,
    damping: 22,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 160);
      mouseY.set(e.clientY - 160);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[5]
        h-80
        w-80
        rounded-full
        bg-purple-500/10
        blur-[120px]
      "
    />
  );
}