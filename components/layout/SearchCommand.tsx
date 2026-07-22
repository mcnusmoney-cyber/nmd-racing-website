"use client";

import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

type Item = {
  title: string;
  href: string;
};

const items: Item[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Dealers",
    href: "/dealers",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function SearchCommand() {
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, []);

  const result = items.filter((item) =>
    item.title.toLowerCase().includes(keyword.toLowerCase())
  );

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-40 hidden items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-5 py-3 text-sm text-zinc-400 backdrop-blur-xl transition hover:border-purple-500 hover:text-white xl:flex"
      >
        <Search size={16} />
        Search
        <kbd className="rounded bg-zinc-800 px-2 py-1 text-[10px]">
          ⌘K
        </kbd>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[999] flex items-start justify-center bg-black/70 pt-24 backdrop-blur-xl">

      <div className="w-full max-w-xl rounded-[28px] border border-zinc-800 bg-zinc-950 shadow-2xl">

        <div className="flex items-center gap-4 border-b border-zinc-800 px-6 py-5">

          <Search size={20} />

          <input
            autoFocus
            value={keyword}
            onChange={(e) =>
              setKeyword(e.target.value)
            }
            placeholder="Search..."
            className="flex-1 bg-transparent outline-none"
          />

          <button onClick={() => setOpen(false)}>
            <X size={20} />
          </button>

        </div>

        <div className="max-h-80 overflow-y-auto p-3">

          {result.map((item) => (

            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 transition hover:bg-zinc-900"
            >
              {item.title}
            </Link>

          ))}

        </div>

      </div>

    </div>
  );
}