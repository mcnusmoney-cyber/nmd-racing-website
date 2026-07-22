const vehicles = [
  "FORZA",
  "XMAX",
  "PCX",
  "ADV",
  "GIORNO",
  "LEAD",
];

export default function VehicleSelector() {
  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">
          CHOOSE YOUR MACHINE
        </h2>

        <p className="text-zinc-400 text-center mb-20">
          Discover your identity.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle}
              className="h-56 rounded-3xl border border-zinc-800 flex items-center justify-center text-3xl font-bold hover:border-purple-500 hover:bg-zinc-900 transition cursor-pointer"
            >
              {vehicle}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}