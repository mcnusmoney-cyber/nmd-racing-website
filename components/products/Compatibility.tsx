type Props = {
  models: string[];
};

export default function Compatibility({
  models,
}: Props) {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <span className="font-semibold uppercase tracking-[4px] text-purple-400">
          Compatibility
        </span>

        <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
          Designed For
        </h2>

        <div className="mt-16 flex flex-wrap justify-center gap-4">

          {models.map((model) => (
            <div
              key={model}
              className="rounded-full border border-purple-500/30 bg-purple-500/10 px-6 py-3 text-purple-300"
            >
              {model}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}