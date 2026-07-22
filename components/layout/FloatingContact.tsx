"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

      <Link
        href="tel:0855655249"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-600 shadow-[0_0_40px_rgba(168,85,247,.4)] transition hover:scale-110"
      >
        <Phone className="h-6 w-6 text-white" />
      </Link>

      <Link
        href="https://lin.ee/smCEE9x"
        target="_blank"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-[0_0_40px_rgba(34,197,94,.4)] transition hover:scale-110"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Link>

    </div>
  );
}