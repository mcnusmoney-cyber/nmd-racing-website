"use client";

const technologies = [
  {
    title: "6061-T6 CNC Aluminum",
    jp: "航空機グレードアルミ",
    description:
      "Aircraft grade aluminum alloy engineered for strength, rigidity and reduced rotational mass.",
  },

  {
    title: "Precision CNC Machining",
    jp: "高精度CNC加工",
    description:
      "Every wheel is manufactured using high precision CNC machining technology.",
  },

  {
    title: "Japanese Motorsport Philosophy",
    jp: "走りの哲学",
    description:
      "Inspired by Japanese racing culture where performance and aesthetics exist together.",
  },

  {
    title: "Premium Surface Finish",
    jp: "高級表面処理",
    description:
      "Multiple finishing processes ensure long lasting durability and premium appearance.",
  },
];

export default function Technology() {
  return (
    <section className="relative bg-zinc-950 py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-[800px] h-[800px] bg-purple-600/10 blur-[220px]" />
      <div className="absolute right-0 bottom-0 w-[800px] h-[800px] bg-fuchsia-600/10 blur-[220px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">

          <div className="
            text-purple-400
            tracking-[0.45em]
            text-sm
            uppercase
            mb-4
          ">
            JAPANESE ENGINEERING
          </div>

          <h2 className="
            text-5xl
            md:text-7xl
            font-black
            mb-6
          ">
            TECHNOLOGY &
            <span className="text-purple-400">
              {" "}ENGINEERING
            </span>
          </h2>

          <p className="
            text-zinc-400
            text-lg
            max-w-3xl
            mx-auto
          ">
            Inspired by Japanese motorsport engineering and built
            for riders who expect uncompromising quality.
          </p>

        </div>

        {/* Grid */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
        ">

          {technologies.map((item) => (
            <div
              key={item.title}
              className="
                group
                rounded-[32px]
                border
                border-purple-500/20
                bg-black
                p-10
                hover:border-purple-400/50
                transition-all
                duration-500
              "
            >

              <div className="
                text-purple-400
                text-sm
                tracking-[0.35em]
                mb-5
              ">
                {item.jp}
              </div>

              <h3 className="
                text-3xl
                font-black
                mb-6
              ">
                {item.title}
              </h3>

              <p className="
                text-zinc-400
                leading-relaxed
                text-lg
              ">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}