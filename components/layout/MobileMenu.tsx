"use client";

import Link from "next/link";
import { X } from "lucide-react";

import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type Props = {
  open: boolean;
  pathname: string;
  onClose: () => void;
};

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Dealers", href: "/dealers" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu({
  open,
  pathname,
  onClose,
}: Props) {
  return (
    <>
      <div
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-50 bg-black/60 backdrop-blur-md transition-all duration-300",
          open
            ? "opacity-100 visible"
            : "pointer-events-none invisible opacity-0"
        )}
      />

      <aside
        className={cn(
          "fixed right-0 top-0 z-[60] flex h-screen w-full max-w-sm flex-col border-l border-zinc-800 bg-black transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-zinc-800 p-6">

          <h2 className="text-3xl font-black">

            <span className="text-white">
              NMD
            </span>

            <span className="text-gradient">
              {" "}
              RACING
            </span>

          </h2>

          <button
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 transition hover:border-purple-500"
          >
            <X size={20} />
          </button>

        </div>

        <nav className="flex flex-1 flex-col gap-2 p-6">

          {navigation.map((item) => (

            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "rounded-2xl px-5 py-4 text-sm font-bold uppercase tracking-[2px] transition-all duration-300",
                pathname === item.href
                  ? "bg-purple-600/15 text-purple-400"
                  : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
              )}
            >
              {item.name}
            </Link>

          ))}

          <div className="mt-8">

            <Button
              href="/products"
              className="w-full"
            >
              Shop Now
            </Button>

          </div>

        </nav>

      </aside>
    </>
  );
}