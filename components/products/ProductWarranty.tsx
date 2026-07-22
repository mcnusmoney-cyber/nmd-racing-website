const items = [
  {
    title: "365 Day Warranty",
    description:
      "Every NMD wheel comes with a full 365-day warranty for your peace of mind.",
  },
  {
    title: "After Sales Service",
    description:
      "Our support doesn't end after delivery. We stay with our riders.",
  },
  {
    title: "Nationwide Dealer Network",
    description:
      "Available through dealers across Thailand with growing nationwide coverage.",
  },
  {
    title: "Direct Support From Nomad",
    description:
      "When you contact NMD, you are speaking directly with people who love motorcycles just like you.",
  },
];

export default function ProductWarranty() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="font-semibold uppercase tracking-[4px] text-purple-400">
            Warranty & Support
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            More Than A Product.
          </h2>

          <h2 className="mt-2 text-4xl font-black text-purple-400 md:text-6xl">
            A Promise.
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
            >
              <h3 className="text-2xl font-bold text-purple-400">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}