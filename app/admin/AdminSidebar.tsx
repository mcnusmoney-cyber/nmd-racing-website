"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    name: "Claims",
    href: "/admin/claims",
  },
  {
    name: "Customers",
    href: "/admin/customers",
  },
  {
    name: "Dealers",
    href: "/admin/dealers",
  },
  {
    name: "Dealer Performance",
    href: "/admin/dealer-performance",
  },
  {
    name: "Inventory",
    href: "/admin/inventory",
  },
  {
    name: "Serial Management",
    href: "/admin/serials",
  },
  {
    name: "Warranty Verify",
    href: "/verify",
  },
  {
    name: "Sales",
    href: "/admin/sales",
  },
  {
    name: "Staff",
    href: "/admin/staff",
  },
  {
    name: "Notifications",
    href: "/admin/notifications",
  },
  {
    name: "Settings",
    href: "/admin/settings",
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-h-screen bg-zinc-950 border-r border-zinc-800 p-6">
      <div className="mb-10">
        <h1 className="text-3xl font-black text-fuchsia-500">
          NMD Racing
        </h1>

        <p className="text-zinc-400 text-sm mt-2">
          Admin Dashboard
        </p>
      </div>

      <nav className="space-y-2">
        {menus.map((menu) => {
          const active = pathname === menu.href;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`
                flex items-center px-4 py-3 rounded-xl transition-all
                ${
                  active
                    ? "bg-fuchsia-600 text-white"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }
              `}
            >
              {menu.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}