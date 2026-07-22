"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      aria-label="Scroll to top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="group fixed bottom-28 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/90 text-white shadow-[0_15px_40px_rgba(0,0,0,.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-600"
    >
      <ChevronUp
        size={24}
        className="transition-transform duration-300 group-hover:-translate-y-1"
      />
    </button>
  );
}