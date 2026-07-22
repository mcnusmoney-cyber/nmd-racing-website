"use client";

import { ChevronUp } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function BackToTopProgress() {
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 25,
  });

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label="Back to top"
      className="group fixed bottom-28 right-6 z-50"
    >
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,.45)]">

        <svg
          className="absolute inset-0 -rotate-90"
          viewBox="0 0 56 56"
        >
          <circle
            cx="28"
            cy="28"
            r="24"
            fill="none"
            stroke="rgba(255,255,255,.08)"
            strokeWidth="3"
          />

          <motion.circle
            cx="28"
            cy="28"
            r="24"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="3"
            strokeLinecap="round"
            pathLength={progress}
          />

          <defs>
            <linearGradient
              id="gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#A855F7"
              />

              <stop
                offset="100%"
                stopColor="#EC4899"
              />

            </linearGradient>

          </defs>

        </svg>

        <ChevronUp
          size={22}
          className="relative z-10 text-white transition-transform duration-300 group-hover:-translate-y-1"
        />

      </div>
    </button>
  );
}