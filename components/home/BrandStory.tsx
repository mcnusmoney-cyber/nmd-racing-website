"use client";

export default function BrandStory() {
  return (
    <section className="relative bg-zinc-950 py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-[800px] h-[800px] bg-purple-600/10 blur-[240px]" />
      <div className="absolute right-0 bottom-0 w-[800px] h-[800px] bg-fuchsia-600/10 blur-[240px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <div>

            <div className="
              text-purple-400
              text-sm
              tracking-[0.5em]
              uppercase
              mb-6
            ">
              BRAND STORY
            </div>

            <h2 className="
              text-5xl
              md:text-7xl
              font-black
              leading-tight
              mb-10
            ">
              NOMAD IS
              <br />
              WHO WE ARE.
            </h2>

            <div className="
              text-zinc-400
              text-lg
              leading-relaxed
              space-y-6
            ">
              <p>
                NMD Racing was born from a passion for motorcycles,
                travel and customization.
              </p>

              <p>
                Inspired by Japanese performance culture and the spirit
                of the nomad, every wheel is designed for riders who
                see the road as more than just a destination.
              </p>

              <p>
                NMD is not only a wheel brand.
                It represents freedom, craftsmanship and the pursuit
                of perfection.
              </p>
            </div>

            <div className="
              mt-12
              text-purple-400
              text-xl
              font-bold
            ">
              BUILT FOR RIDERS.
              <br />
              INSPIRED BY THE NOMAD.
            </div>

          </div>

          {/* Right */}
          <div className="
            relative
            rounded-[40px]
            overflow-hidden
            border
            border-purple-500/20
          ">

            <img
              src="/hero/forza-white-purple-shop.webp"
              alt="NMD Story"
              className="
                w-full
                h-[650px]
                object-cover
              "
            />

            <div className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              to-transparent
            " />

          </div>

        </div>

      </div>

    </section>
  );
}