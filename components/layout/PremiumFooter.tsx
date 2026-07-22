export default function PremiumFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-900 py-24">

      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-20">

          <div>
            <div className="text-purple-400 tracking-[8px] uppercase text-sm mb-6">
              NMD RACING
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              NOMAD IS WHO I AM.
              <br />
              <span className="text-purple-400">
                NMD IS WHAT I BELIEVE IN.
              </span>
            </h2>

            <p className="text-zinc-400 text-xl leading-relaxed max-w-xl">
              Built for riders.
              Inspired by the Nomad Spirit.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12">

            <div>
              <h3 className="text-white font-bold mb-6">
                Products
              </h3>

              <div className="space-y-4 text-zinc-500">
                <p>RONIN VI</p>
                <p>RONIN X</p>
                <p>FORZA</p>
                <p>XMAX</p>
                <p>PCX</p>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">
                Company
              </h3>

              <div className="space-y-4 text-zinc-500">
                <p>About</p>
                <p>Dealers</p>
                <p>Community</p>
                <p>Contact</p>
              </div>
            </div>

          </div>

        </div>

        <div className="border-t border-zinc-900 mt-20 pt-10 flex flex-col md:flex-row justify-between">

          <p className="text-zinc-600">
            © 2026 NMD Racing.
          </p>

          <p className="text-zinc-700">
            Designed in Thailand • Built for the World
          </p>

        </div>

      </div>

    </footer>
  );
}