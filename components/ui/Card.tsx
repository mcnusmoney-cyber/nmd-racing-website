import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({
  children,
  className,
  hover = true,
}: CardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[28px]",
        "border border-zinc-800",
        "bg-gradient-to-b from-zinc-900 via-zinc-900 to-black",
        "transition-all duration-500",
        hover &&
          "hover:-translate-y-2 hover:border-purple-500/60 hover:shadow-[0_20px_70px_rgba(124,58,237,.18)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />

        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}