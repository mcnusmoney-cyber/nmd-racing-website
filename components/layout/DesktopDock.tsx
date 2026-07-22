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
    label: "Home",
    icon: Home,
  },
  {
    href: "/products",
    label: "Products",
    icon: Package,
  },
  {
    href: "/gallery",
    label: "Gallery",
    icon: ImageIcon,
  },
  {
    href: "/dealers",
    label: "Dealers",
    icon: MapPinned,
  },
  {
    href: "/contact",
    label: "Contact",
    icon: Phone,
  },
];

export default function DesktopDock() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-8 top-1/2 z-40 hidden -translate-y-1/2 xl:block">

      <div className="rounded-[28px] border border-zinc-800 bg-black/70 p-3 backdrop-blur-2xl">

        <div className="flex flex-col gap-3">

          {items.map((item) => {

            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                title={item.label}
                className={cn(
                  "group flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300",
                  pathname === item.href
                    ? "bg-purple-600 text-white shadow-[0_0_30px_rgba(168,85,247,.55)]"
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

      </div>

    </aside>
  );
}