"use client";

import Link from "next/link";

export default function FloatingMenu() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

      {/* LINE */}
      <Link
        href="https://line.me"
        target="_blank"
        className="
          w-14 h-14
          rounded-full
          bg-green-500
          flex items-center justify-center
          shadow-lg
          hover:scale-110
          transition
          text-white
          font-bold
        "
      >
        LINE
      </Link>

      {/* Warranty */}
      <Link
        href="/warranty/register"
        className="
          w-14 h-14
          rounded-full
          bg-purple-600
          flex items-center justify-center
          shadow-lg
          hover:scale-110
          transition
          text-white
          text-xs
          font-bold
          text-center
        "
      >
        WR
      </Link>

      {/* Claim */}
      <Link
        href="/claim/new"
        className="
          w-14 h-14
          rounded-full
          bg-red-600
          flex items-center justify-center
          shadow-lg
          hover:scale-110
          transition
          text-white
          text-xs
          font-bold
          text-center
        "
      >
        CLM
      </Link>

      {/* Tracking */}
      <Link
        href="/claim/status"
        className="
          w-14 h-14
          rounded-full
          bg-blue-600
          flex items-center justify-center
          shadow-lg
          hover:scale-110
          transition
          text-white
          text-xs
          font-bold
          text-center
        "
      >
        TRK
      </Link>

    </div>
  );
}