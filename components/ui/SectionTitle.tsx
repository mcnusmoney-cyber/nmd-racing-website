type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: Props) {
  return (
    <div className="text-center mb-20">

      {eyebrow && (
        <p className="text-purple-500 uppercase tracking-[0.4em] mb-4">
          {eyebrow}
        </p>
      )}

      <h2 className="text-5xl font-bold mb-6">
        {title}
      </h2>

      {subtitle && (
        <p className="text-zinc-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

    </div>
  );
}