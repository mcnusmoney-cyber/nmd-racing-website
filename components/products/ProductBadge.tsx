import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Badge({
  children,
  className,
}: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-purple-300",
        className
      )}
    >
      {children}
    </span>
  );
}