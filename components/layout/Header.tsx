"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "PRODUCTS",
    href: "/products",
  },
  {
    name: "DEALERS",
    href: "/dealers",
  },
  {
    name: "WARRANTY",
    href: "/warranty/register",
  },
  {
    name: "CLAIM",
    href: "/claim/new",
  },
  {
    name: "RIDERS CLUB",
    href: "/riders-club",
  },
  {
    name: "CONTACT",
    href: "/contact",
  },
  {
    name: "LOGIN",
    href: "/login",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div>
            <div className="text-2xl font-black tracking-widest text-white">
              NMD
            </div>

            <div className="text-xs tracking-[0.4em] text-purple-400">
              RACING
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className={`text-sm font-semibold tracking-wider transition duration-300 ${
                pathname === menu.href
                  ? "text-purple-400"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              {menu.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="
              px-5
              py-2.5
              rounded-full
              bg-purple-600
              hover:bg-purple-500
              transition
              text-sm
              font-bold
              text-white
            "
          >
            CONTACT US
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button className="lg:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

      </div>
    </header>
  );
}