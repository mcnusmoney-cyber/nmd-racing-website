"use client";

import Link from "next/link";
import {
  MessageCircle,
  Globe,
  Play,
  Camera,
} from "lucide-react";

const socials = [
  {
    href: "https://facebook.com/nmdracing",
    icon: Globe,
    label: "Facebook",
  },
  {
    href: "https://instagram.com/",
    icon: Camera,
    label: "Instagram",
  },
  {
    href: "https://youtube.com/",
    icon: Play,
    label: "YouTube",
  },
  {
    href: "https://lin.ee/RKDyxOT",
    icon: MessageCircle,
    label: "LINE",
  },
];

export default function SocialSidebar() {
  return (
    <div className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 xl:flex">

      <div className="flex flex-col gap-4">

        {socials.map((item) => {

          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-600"
            >
              <Icon
                size={20}
                className="text-zinc-300 transition duration-300 group-hover:text-white"
              />
            </Link>
          );

        })}

      </div>

    </div>
  );
}