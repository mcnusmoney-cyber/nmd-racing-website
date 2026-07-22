const dealers = [
  "Bangkok",
  "Samut Prakan",
  "Chonburi",
  "Rayong",
  "Nakhon Ratchasima",
  "Khon Kaen",
  "Chiang Mai",
  "Phuket",
  "Songkhla",
  "Surat Thani",
  "Nakhon Sawan",
  "Saraburi",
  "Nonthaburi",
  "Pattaya",
  "Chanthaburi",
  "Krabi",
  "Trang",
  "Phetchaburi",
  "Nakhon Pathom",
  "Samut Sakhon",
];

export default function DealerMap() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="font-semibold uppercase tracking-[4px] text-purple-400">
            Dealer Network
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Growing Across Thailand
          </h2>

          <p className="mt-6 text-zinc-400">
            Building towards 100 dealers nationwide.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {dealers.map((dealer) => (
            <div
              key={dealer}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 px-6 py-4 text-center transition hover:border-purple-500 hover:bg-purple-500/10"
            >
              <span className="text-zinc-300">
                {dealer}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}