"use client";

import Link from "next/link";
import {
  Home,
  Package,
  ImageIcon,
  MapPinned,
  Phone,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const items = [
  {
    href: "/",
    icon: Home,
    label: "Home",
  },
  {
    href: "/products",
    icon: Package,
    label: "Products",
  },
  {
    href: "/gallery",
    icon: ImageIcon,
    label: "Gallery",
  },
  {
    href: "/dealers",
    icon: MapPinned,
    label: "Dealers",
  },
  {
    href: "/contact",
    icon: Phone,
    label: "Contact",
  },
];

export default function FloatingDock() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 rounded-full border border-white/10 bg-black/70 p-2 backdrop-blur-2xl xl:hidden">

      {items.map((item) => {

        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "group flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300",
              pathname === item.href
                ? "bg-purple-600 text-white shadow-[0_0_25px_rgba(168,85,247,.55)]"
                : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
            )}
          >
            <Icon
              size={22}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </Link>
        );

      })}

    </div>
  );
}