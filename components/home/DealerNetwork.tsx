"use client";

const dealers = [
  "Bangkok",
  "Chiang Mai",
  "Khon Kaen",
  "Nakhon Sawan",
  "Saraburi",
  "Surat Thani",
  "Phuket",
  "Hat Yai",
];

export default function DealerNetwork() {
  return (
    <section className="relative bg-black py-32 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-purple-600/10 blur-[220px]" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-fuchsia-600/10 blur-[220px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">

          <div className="
            text-purple-400
            text-sm
            tracking-[0.5em]
            uppercase
            mb-4
          ">
            DEALER NETWORK
          </div>

          <h2 className="
            text-5xl
            md:text-7xl
            font-black
            mb-6
          ">
            NATIONWIDE
            <span className="text-purple-400">
              {" "}COVERAGE
            </span>
          </h2>

          <p className="
            text-zinc-400
            text-lg
            max-w-3xl
            mx-auto
          ">
            Growing dealer network across Thailand to deliver
            premium service and support for every rider.
          </p>

        </div>

        {/* Stats */}
        <div className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-8
          mb-20
        ">

          <div className="text-center">
            <div className="text-6xl font-black text-purple-400">
              20+
            </div>

            <div className="text-zinc-500 mt-2">
              Dealers
            </div>
          </div>

          <div className="text-center">
            <div className="text-6xl font-black text-purple-400">
              77
            </div>

            <div className="text-zinc-500 mt-2">
              Provinces Coverage
            </div>
          </div>

          <div className="text-center">
            <div className="text-6xl font-black text-purple-400">
              1000+
            </div>

            <div className="text-zinc-500 mt-2">
              Riders
            </div>
          </div>

          <div className="text-center">
            <div className="text-6xl font-black text-purple-400">
              1 Year
            </div>

            <div className="text-zinc-500 mt-2">
              Warranty
            </div>
          </div>

        </div>

        {/* Dealer Grid */}
        <div className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-6
        ">

          {dealers.map((dealer) => (
            <div
              key={dealer}
              className="
                rounded-3xl
                border
                border-purple-500/20
                bg-zinc-950
                py-8
                text-center
                hover:border-purple-400/50
                transition
              "
            >
              <div className="text-xl font-bold">
                {dealer}
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}