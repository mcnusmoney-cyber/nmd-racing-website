"use client";

import Link from "next/link";
import {
  MessageCircle,
  MapPinned,
  ShoppingCart,
  Wrench,
} from "lucide-react";

const actions = [
  {
    title: "Shop",
    href: "/products",
    icon: ShoppingCart,
  },
  {
    title: "Dealer",
    href: "/dealers",
    icon: MapPinned,
  },
  {
    title: "Service",
    href: "/contact",
    icon: Wrench,
  },
  {
    title: "LINE",
    href: "https://lin.ee/RKDyxOT",
    icon: MessageCircle,
    external: true,
  },
];

export default function QuickActions() {
  return (
    <section className="fixed bottom-24 right-6 z-40 hidden lg:block">

      <div className="flex flex-col gap-3">

        {actions.map((action) => {

          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-600"
            >
              <Icon
                size={22}
                className="text-zinc-300 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
              />
            </Link>
          );

        })}

      </div>

    </section>
  );
}