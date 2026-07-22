"use client";

const dealers = [
  {
    city: "Bangkok",
    name: "NMD Racing Bangphli",
  },
  {
    city: "Chiang Mai",
    name: "NMD Dealer Chiang Mai",
  },
  {
    city: "Khon Kaen",
    name: "NMD Dealer Khon Kaen",
  },
  {
    city: "Udon Thani",
    name: "NMD Dealer Udon Thani",
  },
  {
    city: "Phuket",
    name: "NMD Dealer Phuket",
  },
  {
    city: "Hat Yai",
    name: "NMD Dealer Hat Yai",
  },
];

export default function DealerMap() {
  return (
    <section className="relative py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <div className="
            text-purple-400
            tracking-[0.35em]
            font-semibold
            mb-4
          ">
            DEALER NETWORK
          </div>

          <h2 className="
            text-5xl
            lg:text-6xl
            font-black
            mb-6
          ">
            NATIONWIDE DEALER
            <br />
            NETWORK
          </h2>

          <p className="
            text-zinc-400
            text-xl
            max-w-3xl
            mx-auto
          ">
            Premium dealer partners across Thailand
            ready to support every rider.
          </p>

        </div>

        <div className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        ">
          {dealers.map((dealer) => (
            <div
              key={dealer.city}
              className="
                bg-zinc-950/70
                border border-zinc-800
                rounded-3xl
                p-8
                backdrop-blur-xl
                hover:border-purple-500/50
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              <div className="
                text-purple-400
                text-sm
                tracking-[0.25em]
                mb-3
              ">
                {dealer.city.toUpperCase()}
              </div>

              <div className="
                text-2xl
                font-bold
                text-white
              ">
                {dealer.name}
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}