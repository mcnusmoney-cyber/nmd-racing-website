"use client";

const gallery = [
  "/gallery/forza-1.webp",
  "/gallery/forza-2.webp",
  "/gallery/xmax-1.webp",
  "/gallery/pcx-1.webp",
  "/gallery/giorno-1.webp",
  "/gallery/lead-1.webp",
];

export default function RiderGallery() {
  return (
    <section className="relative bg-zinc-950 py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-[700px] h-[700px] bg-purple-600/10 blur-[220px]" />
      <div className="absolute right-0 bottom-0 w-[700px] h-[700px] bg-fuchsia-600/10 blur-[220px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">

          <div className="
            text-purple-400
            text-sm
            tracking-[0.45em]
            uppercase
            mb-4
          ">
            NMD COMMUNITY
          </div>

          <h2 className="
            text-5xl
            md:text-7xl
            font-black
            mb-6
          ">
            RIDER
            <span className="text-purple-400">
              {" "}GALLERY
            </span>
          </h2>

          <p className="
            text-zinc-400
            text-lg
            max-w-3xl
            mx-auto
          ">
            Built by riders. Inspired by journeys.
            Discover real motorcycles running NMD Racing wheels.
          </p>

        </div>

        {/* Gallery */}
        <div className="
          grid
          grid-cols-2
          md:grid-cols-3
          gap-6
        ">

          {gallery.map((image) => (
            <div
              key={image}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-purple-500/20
                bg-black
              "
            >
              <img
                src={image}
                alt="NMD Rider"
                className="
                  w-full
                  aspect-square
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
              />

              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/80
                to-transparent
              " />

              <div className="
                absolute
                bottom-5
                left-5
              ">
                <div className="
                  text-purple-400
                  text-xs
                  tracking-[0.35em]
                  mb-2
                ">
                  NMD RIDER
                </div>

                <div className="
                  text-xl
                  font-bold
                ">
                  Built For Riders
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}