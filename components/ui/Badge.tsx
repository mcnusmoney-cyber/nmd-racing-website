import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "success" | "warning" | "dark";
};

const variants = {
  primary:
    "border-purple-500/40 bg-gradient-to-r from-purple-600/15 to-fuchsia-500/10 text-purple-300",

  success:
    "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",

  warning:
    "border-amber-500/40 bg-amber-500/10 text-amber-300",

  dark:
    "border-zinc-700 bg-zinc-900 text-zinc-300",
};

export default function Badge({
  children,
  className,
  variant = "primary",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center",
        "rounded-full",
        "border",
        "px-4 py-2",
        "text-xs font-bold uppercase tracking-[3px]",
        "backdrop-blur-sm",
        "transition-all duration-300",
        "shadow-[0_0_25px_rgba(124,58,237,.18)]",
        "hover:scale-105",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}