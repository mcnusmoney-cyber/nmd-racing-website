"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { name: "หน้าแรก", href: "/" },
  { name: "สินค้า", href: "/products" },
  { name: "ตัวแทนจำหน่าย", href: "/dealers" },
  { name: "รับประกันสินค้า", href: "/warranty" },
  { name: "จองคิว", href: "https://www.nmdracing.com/booking" },
  { name: "ติดต่อ", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 text-white backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
        <Link href="/" aria-label="NMD Racing หน้าแรก" className="shrink-0">
          <span className="block text-2xl font-black leading-none tracking-widest">NMD</span>
          <span className="block pt-1 text-xs font-bold tracking-[.35em] text-purple-400">RACING</span>
        </Link>

        <nav aria-label="เมนูหลัก" className="hidden items-center gap-5 lg:flex xl:gap-8">
          {menus.map((menu) => (
            <Link
              key={menu.name}
              href={menu.href}
              aria-current={pathname === menu.href ? "page" : undefined}
              className={`whitespace-nowrap text-sm font-semibold transition hover:text-purple-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300 ${pathname === menu.href ? "text-purple-300" : "text-zinc-200"}`}
            >
              {menu.name}
            </Link>
          ))}
        </nav>

        <details className="group relative lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-bold marker:hidden focus-visible:outline-2 focus-visible:outline-purple-300">
            เมนู <span aria-hidden="true" className="text-purple-300">☰</span>
          </summary>
          <nav aria-label="เมนูมือถือ" className="absolute right-0 top-full mt-3 w-[min(19rem,calc(100vw-3rem))] rounded-2xl border border-purple-500/30 bg-zinc-950 p-2 shadow-2xl">
            {menus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.href}
                aria-current={pathname === menu.href ? "page" : undefined}
                className={`block rounded-xl px-4 py-3 text-base font-semibold hover:bg-purple-500/15 focus-visible:outline-2 focus-visible:outline-purple-300 ${pathname === menu.href ? "text-purple-300" : "text-white"}`}
              >
                {menu.name}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
