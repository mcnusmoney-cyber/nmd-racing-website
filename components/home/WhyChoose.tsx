"use client";

const features = [
  {
    number: "01",
    title: "Japanese Inspired Design",
    jp: "日本の美学",
    description:
      "Every NMD wheel is designed with inspiration from Japanese motorsport culture and premium wheel manufacturers.",
  },

  {
    number: "02",
    title: "6061-T6 CNC Aluminum",
    jp: "航空機グレードアルミ",
    description:
      "Manufactured from aerospace grade 6061-T6 aluminum for maximum strength and reduced weight.",
  },

  {
    number: "03",
    title: "1 Year Warranty",
    jp: "一年保証",
    description:
      "Official warranty registration system with online verification and after sales support.",
  },

  {
    number: "04",
    title: "Premium After Sales",
    jp: "プレミアムサポート",
    description:
      "Nationwide dealer network and direct support from NMD Racing Bang Phli.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative bg-black py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[700px] h-[700px] bg-purple-700/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-fuchsia-700/10 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">

          <div className="
            text-purple-400
            tracking-[0.5em]
            text-sm
            uppercase
            mb-4
          ">
            NMD ENGINEERING PHILOSOPHY
          </div>

          <h2 className="
            text-5xl
            md:text-7xl
            font-black
            mb-8
          ">
            WHY
            <span className="text-purple-400">
              {" "}CHOOSE NMD
            </span>
          </h2>

          <p className="
            text-zinc-400
            text-lg
            max-w-3xl
            mx-auto
          ">
            Built with the philosophy of Japanese performance,
            engineered for riders who expect more from every ride.
          </p>

        </div>

        {/* Feature Grid */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
        ">

          {features.map((feature) => (
            <div
              key={feature.number}
              className="
                group
                relative
                rounded-[32px]
                border
                border-purple-500/20
                bg-zinc-950
                p-10
                overflow-hidden
                hover:border-purple-400/50
                transition-all
                duration-500
              "
            >

              {/* Hover Glow */}
              <div className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
                bg-purple-500/5
              " />

              <div className="
                absolute
                -right-5
                -top-5
                text-[140px]
                font-black
                text-purple-500/10
                leading-none
              ">
                {feature.number}
              </div>

              <div className="relative z-10">

                <div className="
                  text-purple-400
                  text-sm
                  tracking-[0.35em]
                  mb-4
                ">
                  {feature.jp}
                </div>

                <h3 className="
                  text-3xl
                  font-black
                  mb-5
                ">
                  {feature.title}
                </h3>

                <p className="
                  text-zinc-400
                  leading-relaxed
                  text-lg
                ">
                  {feature.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}