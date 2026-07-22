"use client";

const dealers = [
  {
    name: "NMD Racing Bangphli",
    province: "Samut Prakan",
    phone: "02-XXX-XXXX",
    distance: "5 km",
  },

  {
    name: "Chiang Mai Performance",
    province: "Chiang Mai",
    phone: "053-XXX-XXX",
    distance: "712 km",
  },

  {
    name: "Khon Kaen Motorsport",
    province: "Khon Kaen",
    phone: "043-XXX-XXX",
    distance: "445 km",
  },

  {
    name: "Hat Yai Racing Shop",
    province: "Songkhla",
    phone: "074-XXX-XXX",
    distance: "948 km",
  },
];

export default function DealerLocator() {
  return (
    <section className="py-32 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <div className="
            text-purple-400
            tracking-[0.35em]
            mb-4
          ">
            FIND YOUR DEALER
          </div>

          <h2 className="
            text-6xl
            font-black
            mb-8
          ">
            DEALER
            <br />
            LOCATOR
          </h2>

          <p className="
            text-zinc-400
            text-xl
            max-w-3xl
            mx-auto
          ">
            Find the nearest NMD Racing
            dealer and experience premium
            products and service.
          </p>

        </div>

        <div className="
          grid
          md:grid-cols-2
          gap-8
        ">

          {dealers.map((dealer) => (
            <div
              key={dealer.name}
              className="
                bg-zinc-950/70
                border border-zinc-800
                rounded-[32px]
                p-8
                backdrop-blur-xl
                hover:border-purple-500/50
                hover:-translate-y-2
                transition-all duration-500
              "
            >

              <div className="
                text-purple-400
                text-sm
                tracking-[0.3em]
                mb-3
              ">
                {dealer.province.toUpperCase()}
              </div>

              <div className="
                text-3xl
                font-bold
                mb-4
              ">
                {dealer.name}
              </div>

              <div className="
                text-zinc-400
                mb-2
              ">
                {dealer.phone}
              </div>

              <div className="
                text-zinc-500
              ">
                Approximate Distance:
                {" "}
                {dealer.distance}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}