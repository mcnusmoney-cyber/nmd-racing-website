export default function RidersClub() {
  return (
    <section className="py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">
          NMD RIDERS CLUB
        </h2>

        <p className="text-zinc-400 mb-20">
          More than customers. We are riders.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="p-8 rounded-3xl border border-zinc-800">
            One Day Trip
          </div>

          <div className="p-8 rounded-3xl border border-zinc-800">
            Events
          </div>

          <div className="p-8 rounded-3xl border border-zinc-800">
            Merchandise
          </div>

          <div className="p-8 rounded-3xl border border-zinc-800">
            Featured Riders
          </div>
        </div>
      </div>
    </section>
  );
}