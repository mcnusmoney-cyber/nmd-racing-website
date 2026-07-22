export default function WhyChooseProduct() {
  const items = [
    {
      icon: "⚡",
      title: "Precision CNC",
      description:
        "Manufactured using high precision CNC machining.",
    },
    {
      icon: "🪶",
      title: "Lightweight",
      description:
        "Reduce unsprung weight for better handling.",
    },
    {
      icon: "🛡️",
      title: "1 Year Warranty",
      description:
        "Official NMD Racing warranty.",
    },
    {
      icon: "🔧",
      title: "Direct Fit",
      description:
        "Designed for direct installation without modification.",
    },
  ];

  return (
    <section className="mt-24">

      <h2 className="mb-10 text-4xl font-black">
        Why Choose NMD Racing
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-purple-500"
          >
            <div className="text-5xl">
              {item.icon}
            </div>

            <h3 className="mt-6 text-2xl font-black">
              {item.title}
            </h3>

            <p className="mt-3 leading-8 text-zinc-400">
              {item.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}