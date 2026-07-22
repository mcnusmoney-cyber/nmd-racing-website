"use client";

import Link from "next/link";
import {
  Bike,
  Package,
  Phone,
  Wrench,
} from "lucide-react";

const actions = [
  {
    title: "Products",
    href: "/products",
    icon: Package,
  },
  {
    title: "Dealers",
    href: "/dealers",
    icon: Bike,
  },
  {
    title: "Service",
    href: "/contact",
    icon: Wrench,
  },
  {
    title: "Call",
    href: "tel:0855655249",
    icon: Phone,
  },
];

export default function PageActions() {
  return (
    <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 2xl:block">

      <div className="flex flex-col gap-4">

        {actions.map((action) => {

          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
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

    </div>
  );
}