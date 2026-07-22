"use client";

import Link from "next/link";

interface StickyPurchaseBarProps {
  name: string;
  price: number;
}

export default function StickyPurchaseBar({
  name,
  price,
}: StickyPurchaseBarProps) {
  return (
    <div
      className="
      fixed
      bottom-0
      left-0
      right-0
      z-50
      bg-black/90
      backdrop-blur-xl
      border-t
      border-purple-500/20
      lg:hidden
    "
    >
      <div className="px-4 py-4 flex items-center justify-between gap-4">
        <div>
          <div className="font-bold text-white text-lg">
            {name}
          </div>

          <div className="text-purple-400 font-bold text-xl">
            ฿{price.toLocaleString()}
          </div>
        </div>

        <Link
          href="https://line.me"
          className="
            px-6
            py-3
            rounded-full
            bg-gradient-to-r
            from-purple-600
            to-fuchsia-600
            font-bold
            whitespace-nowrap
          "
        >
          สอบถามผ่าน LINE
        </Link>
      </div>
    </div>
  );
}