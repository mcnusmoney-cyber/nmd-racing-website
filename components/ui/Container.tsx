import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
};

const sizes = {
  default: "max-w-7xl",
  wide: "max-w-[1440px]",
  narrow: "max-w-5xl",
};

export default function Container({
  children,
  className,
  size = "default",
}: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        sizes[size],
        "px-5 sm:px-6 lg:px-8 xl:px-10",
        className
      )}
    >
      {children}
    </div>
  );
}