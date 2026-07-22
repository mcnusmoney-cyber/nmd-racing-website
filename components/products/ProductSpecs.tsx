type Props = {
  material: string;
  warranty: string;
  origin: string;
  useType: string;
  strength: string;
};

export default function ProductSpecs({
  material,
  warranty,
  origin,
  useType,
  strength,
}: Props) {
  const specs = [
    {
      title: "Material",
      value: material,
    },
    {
      title: "Warranty",
      value: warranty,
    },
    {
      title: "Origin",
      value: origin,
    },
    {
      title: "Designed For",
      value: useType,
    },
    {
      title: "Priority",
      value: strength,
    },
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="uppercase tracking-[4px] text-purple-400 font-semibold">
            Specifications
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-white">
            Built With Purpose.
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-5">

          {specs.map((spec) => (
            <div
              key={spec.title}
              className="rounded-3xl border border-zinc-800 bg-black p-8 text-center"
            >
              <h3 className="text-sm uppercase tracking-[3px] text-zinc-500">
                {spec.title}
              </h3>

              <p className="mt-4 text-xl font-bold text-purple-400">
                {spec.value}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}