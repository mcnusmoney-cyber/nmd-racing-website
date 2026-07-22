"use client";

import Link from "next/link";

export default function MobileContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-800 bg-black/95 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-2">

        <Link
          href="tel:0855655249"
          className="flex items-center justify-center gap-2 border-r border-zinc-800 py-4 font-bold text-white"
        >
          📞 Call Nomad
        </Link>

        <Link
          href="https://lin.ee/smCEE9x"
          target="_blank"
          className="flex items-center justify-center gap-2 py-4 font-bold text-green-400"
        >
          💬 LINE OA
        </Link>

      </div>
    </div>
  );
}