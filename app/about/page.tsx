export default function AboutPage() {
  return (
    <main className="bg-black text-white">

      {/* Hero */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="text-purple-400 font-semibold tracking-[0.3em] mb-4">
            ABOUT NMD RACING
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Built For Riders.
            <br />
            Inspired By The Nomad.
          </h1>

          <p className="max-w-4xl mx-auto text-zinc-400 text-xl leading-relaxed">
            NMD Racing was founded from passion for motorcycles,
            customization and the freedom of riding.
            Every product is developed for riders who demand
            premium quality, performance and unique design.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="text-purple-400 font-semibold mb-4">
              OUR STORY
            </div>

            <h2 className="text-4xl font-bold mb-8">
              NOMAD is who I am.
              <br />
              NMD is what I believe in.
            </h2>

            <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
              <p>
                NMD Racing was established in 2025 from a love of
                motorcycles, travel and customization.
              </p>

              <p>
                The name NMD comes from NOMAD,
                representing freedom, adventure and passion.
              </p>

              <p>
                Every wheel developed by NMD Racing reflects
                our philosophy of combining premium design,
                lightweight engineering and real world performance.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-12">
            <div className="grid grid-cols-2 gap-10">

              <div>
                <div className="text-5xl font-bold text-purple-400 mb-2">
                  2025
                </div>
                <div className="text-zinc-400">
                  Founded
                </div>
              </div>

              <div>
                <div className="text-5xl font-bold text-purple-400 mb-2">
                  8
                </div>
                <div className="text-zinc-400">
                  Colors Available
                </div>
              </div>

              <div>
                <div className="text-5xl font-bold text-purple-400 mb-2">
                  1
                </div>
                <div className="text-zinc-400">
                  Year Warranty
                </div>
              </div>

              <div>
                <div className="text-5xl font-bold text-purple-400 mb-2">
                  CNC
                </div>
                <div className="text-zinc-400">
                  Precision Machining
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Mission */}
      <section className="container mx-auto px-6 py-24">
        <div className="rounded-3xl bg-gradient-to-r from-purple-900/20 to-black border border-purple-500/20 p-16 text-center">

          <div className="text-purple-400 font-semibold mb-4">
            OUR MISSION
          </div>

          <h2 className="text-5xl font-bold mb-8">
            Premium Motorcycle Wheels
            <br />
            Designed Without Compromise
          </h2>

          <p className="max-w-4xl mx-auto text-zinc-400 text-xl leading-relaxed">
            Our mission is to create premium motorcycle wheels
            that deliver superior aesthetics, lightweight performance
            and reliability for riders across Thailand and beyond.
          </p>

        </div>
      </section>

    </main>
  );
}