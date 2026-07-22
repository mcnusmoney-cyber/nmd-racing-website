import { cn } from "@/lib/cn";

type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  center?: boolean;
  className?: string;
};

export default function Heading({
  title,
  subtitle,
  description,
  center = true,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "mb-16",
        center && "text-center",
        className
      )}
    >
      {subtitle && (
        <span className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[6px] text-purple-300">
          {subtitle}
        </span>
      )}

      <h2 className="mt-6 text-4xl font-black uppercase leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
        {title}
      </h2>

      <div
        className={cn(
          "mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500",
          center && "mx-auto"
        )}
      />

      {description && (
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}