import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const styles: Record<ButtonVariant, string> = {
  primary:
    "bg-purple-600 text-white shadow-[0_0_30px_rgba(124,58,237,.35)] hover:-translate-y-1 hover:bg-purple-500 hover:shadow-[0_0_50px_rgba(124,58,237,.55)]",

  secondary:
    "border border-zinc-700 bg-zinc-900/80 text-white backdrop-blur hover:border-purple-500 hover:bg-zinc-800",

  outline:
    "border border-purple-500 bg-transparent text-purple-300 hover:bg-purple-600 hover:text-white",

  ghost:
    "text-zinc-300 hover:bg-white/5 hover:text-white",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-2xl px-8 py-4 text-sm font-bold uppercase tracking-[2px] transition-all duration-300 active:scale-95",
        styles[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}