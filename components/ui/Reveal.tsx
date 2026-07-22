"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 40,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{
        opacity: 0,
        y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once,
        amount: 0.2,
      }}
      transition={{
        delay,
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}