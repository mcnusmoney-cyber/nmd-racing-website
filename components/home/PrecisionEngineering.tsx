const features = [
  {
    title: "CNC Precision",
    description: "High precision CNC machining technology engineered for perfection."
  },
  {
    title: "Lightweight Engineering",
    description: "Optimized unsprung weight for improved handling and performance."
  },
  {
    title: "Structural Strength",
    description: "Designed and tested for real world riding conditions."
  },
  {
    title: "Quality Inspection",
    description: "Every wheel is inspected before leaving the factory."
  }
];

export default function PrecisionEngineering() {
  return (
    <section className="py-32 bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-purple-500 uppercase tracking-[0.4em] text-center mb-4">
          Engineering
        </p>

        <h2 className="text-5xl font-bold text-center mb-6">
          PRECISION ENGINEERING
        </h2>

        <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-20">
          Precision is not an option. It is our standard.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-3xl border border-zinc-800 hover:border-purple-500 transition"
            >
              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}