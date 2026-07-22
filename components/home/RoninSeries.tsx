const products = [
  {
    name: "RONIN SIX",
    subtitle: "Urban Precision",
  },
  {
    name: "RONIN TEN",
    subtitle: "Forged Aggression",
  },
  {
    name: "RONIN ULTRA",
    subtitle: "Ultimate Expression",
  },
];

export default function RoninSeries() {
  return (
    <section className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">
          RONIN SERIES
        </h2>

        <p className="text-zinc-400 text-center mb-20">
          Japanese Inspired Precision Engineering
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="border border-zinc-800 rounded-3xl p-10 hover:border-purple-500 transition"
            >
              <h3 className="text-3xl font-bold mb-2">
                {product.name}
              </h3>

              <p className="text-purple-400 mb-8">
                {product.subtitle}
              </p>

              <div className="h-56 bg-zinc-900 rounded-2xl mb-8" />

              <button className="text-purple-400">
                Explore →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}