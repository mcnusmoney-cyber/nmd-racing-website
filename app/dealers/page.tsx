const dealers = [
  {
    province: "Chiang Mai",
    shop: "NMD Racing Chiang Mai",
  },
  {
    province: "Khon Kaen",
    shop: "NMD Racing Khon Kaen",
  },
  {
    province: "Udon Thani",
    shop: "NMD Racing Udon Thani",
  },
  {
    province: "Surat Thani",
    shop: "NMD Racing Surat Thani",
  },
  {
    province: "Hat Yai",
    shop: "NMD Racing Hat Yai",
  },
  {
    province: "Phuket",
    shop: "NMD Racing Phuket",
  },
];

export default function DealersPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="py-28 text-center border-b border-zinc-900">
        <div className="container mx-auto px-6">

          <div className="text-purple-400 font-semibold tracking-[0.3em] mb-4">
            OFFICIAL DEALERS
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            NMD Racing Dealers
          </h1>

          <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
            Find official NMD Racing dealers and service partners
            across Thailand.
          </p>

        </div>
      </section>

      {/* Dealer Grid */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {dealers.map((dealer) => (
            <div
              key={dealer.province}
              className="
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900
                p-8
                hover:border-purple-500
                hover:-translate-y-2
                transition
              "
            >
              <div className="text-purple-400 text-sm mb-2">
                OFFICIAL DEALER
              </div>

              <h2 className="text-2xl font-bold mb-3">
                {dealer.shop}
              </h2>

              <div className="text-zinc-400">
                {dealer.province}, Thailand
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Become Dealer */}
      <section className="container mx-auto px-6 pb-24">

        <div
          className="
            rounded-3xl
            border
            border-purple-500/30
            bg-gradient-to-r
            from-purple-900/20
            to-black
            p-16
            text-center
          "
        >
          <div className="text-purple-400 font-semibold mb-4">
            PARTNERSHIP
          </div>

          <h2 className="text-5xl font-bold mb-6">
            Become An Official Dealer
          </h2>

          <p className="text-zinc-400 text-xl max-w-3xl mx-auto mb-10">
            Join the NMD Racing dealer network and grow together
            with one of Thailand's premium motorcycle wheel brands.
          </p>

          <a
            href="https://line.me"
            target="_blank"
            className="
              inline-flex
              px-8
              py-4
              rounded-full
              bg-purple-600
              hover:bg-purple-500
              transition
              text-lg
              font-semibold
            "
          >
            Contact Us
          </a>
        </div>

      </section>

    </main>
  );
}