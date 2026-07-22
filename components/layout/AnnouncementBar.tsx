"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600">

      <div className="absolute inset-0 opacity-20">
        <div className="animate-pulse absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.25),transparent)]" />
      </div>

      <div className="relative mx-auto flex h-11 max-w-7xl items-center justify-center gap-3 px-6 text-center">

        <span className="text-xs font-bold uppercase tracking-[3px] text-white md:text-sm">
          🎉 Official NMD Racing Premium CNC Wheels Available Now
        </span>

        <Link
          href="/products"
          className="hidden items-center gap-1 text-xs font-bold text-white transition hover:gap-2 md:flex"
        >
          Explore
          <ArrowRight size={14} />
        </Link>

      </div>

    </div>
  );
}