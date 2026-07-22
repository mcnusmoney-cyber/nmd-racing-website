"use client";

const features = [
  {
    title: "Premium CNC Machining",
    description:
      "Precision CNC machining process delivering exceptional accuracy and finish.",
  },

  {
    title: "Lightweight Performance",
    description:
      "Engineered to reduce unsprung weight and improve handling performance.",
  },

  {
    title: "Premium Paint Finish",
    description:
      "Automotive-grade coating process with outstanding durability and appearance.",
  },

  {
    title: "1 Year Warranty",
    description:
      "Confidence backed by nationwide after-sales service and warranty support.",
  },
];

export default function ManufacturingShowcase() {
  return (
    <section className="relative py-32 overflow-hidden">

      <div className="
        absolute inset-0
        bg-gradient-to-b
        from-transparent
        via-purple-950/10
        to-transparent
      " />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <div className="
            text-purple-400
            tracking-[0.35em]
            font-semibold
            mb-4
          ">
            ENGINEERED FOR PERFORMANCE
          </div>

          <h2 className="
            text-5xl lg:text-7xl
            font-black
            mb-8
          ">
            PRECISION
            <br />
            MANUFACTURING
          </h2>

          <p className="
            text-zinc-400
            text-xl
            max-w-4xl
            mx-auto
            leading-relaxed
          ">
            Every NMD wheel is built using advanced CNC machining,
            premium finishing technology and strict quality control
            to deliver performance worthy of riders who demand more.
          </p>

        </div>

        <div className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
        ">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                group
                bg-zinc-950/60
                border border-zinc-800
                rounded-[32px]
                p-8
                backdrop-blur-xl
                hover:border-purple-500/40
                hover:-translate-y-2
                transition-all duration-500
              "
            >

              <div className="
                w-16 h-16
                rounded-2xl
                bg-purple-600/20
                border border-purple-500/30
                flex items-center justify-center
                mb-8
              ">
                ⚡
              </div>

              <h3 className="
                text-2xl
                font-bold
                mb-4
              ">
                {feature.title}
              </h3>

              <p className="
                text-zinc-400
                leading-relaxed
              ">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}