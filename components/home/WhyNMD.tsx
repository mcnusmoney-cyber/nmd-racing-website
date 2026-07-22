const reasons = [
  "Japanese Inspired Design",
  "Premium CNC Manufacturing",
  "1 Year Warranty",
  "Nationwide Dealer Network"
];

export default function WhyNMD() {
  return (
    <section className="py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20">
          WHY NMD
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="border border-zinc-800 rounded-3xl p-10 text-center hover:border-purple-500 transition"
            >
              <h3 className="text-xl font-bold">
                {reason}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}