"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { usePathname } from "next/navigation";

const labels: Record<string, string> = {
  products: "Products",
  gallery: "Gallery",
  dealers: "Dealers",
  contact: "Contact",
};

export default function Breadcrumb() {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter(Boolean);

  if (segments.length === 0) return null;

  return (
    <div className="border-b border-zinc-800 bg-zinc-950/70 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-4 text-sm text-zinc-400">

        <Link
          href="/"
          className="transition hover:text-purple-400"
        >
          <Home size={16} />
        </Link>

        {segments.map((segment, index) => {
          const href =
            "/" +
            segments
              .slice(0, index + 1)
              .join("/");

          const label =
            labels[segment] ??
            segment
              .replace(/-/g, " ")
              .replace(/\b\w/g, (c) =>
                c.toUpperCase()
              );

          return (
            <div
              key={href}
              className="flex items-center gap-2"
            >
              <ChevronRight size={14} />

              <Link
                href={href}
                className="transition hover:text-purple-400"
              >
                {label}
              </Link>

            </div>
          );
        })}

      </div>

    </div>
  );
}