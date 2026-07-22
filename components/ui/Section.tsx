import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const spacing = {
  sm: "py-16 lg:py-20",
  md: "py-24 lg:py-32",
  lg: "py-32 lg:py-40",
};

export default function Section({
  children,
  className,
  size = "md",
}: Props) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        spacing[size],
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

        <div className="absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}