"use client";

import Link from "next/link";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock3,
} from "lucide-react";

export default function ContactStrip() {
  return (
    <section className="border-b border-zinc-800 bg-zinc-950/70 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 py-3 text-sm text-zinc-400 lg:justify-between">

        <div className="flex flex-wrap items-center gap-6">

          <div className="flex items-center gap-2">

            <MapPin
              size={16}
              className="text-purple-400"
            />

            <span>
              Bang Phli, Samut Prakan
            </span>

          </div>

          <div className="flex items-center gap-2">

            <Clock3
              size={16}
              className="text-purple-400"
            />

            <span>
              12:00 - 22:00
            </span>

          </div>

        </div>

        <div className="flex items-center gap-5">

          <Link
            href="tel:0855655249"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <Phone
              size={16}
              className="text-purple-400"
            />

            085-565-5249
          </Link>

          <Link
            href="https://lin.ee/RKDyxOT"
            target="_blank"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <MessageCircle
              size={16}
              className="text-[#06C755]"
            />

            LINE Official
          </Link>

        </div>

      </div>

    </section>
  );
}