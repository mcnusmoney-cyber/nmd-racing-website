"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('/backgrounds/carbon-purple.webp')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-600/20 blur-[180px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">

          {/* LEFT */}
          <div>

            <div className="
              inline-flex
              px-5
              py-2
              rounded-full
              border
              border-purple-500/40
              bg-purple-500/10
              text-purple-300
              text-xs
              tracking-[0.35em]
              uppercase
              mb-6
            ">
              NMD RACING
            </div>

            <div className="
              mb-4
              text-purple-300
              text-xs
              md:text-sm
              tracking-[0.6em]
              uppercase
              font-semibold
            ">
              走りの美学 • JAPANESE PERFORMANCE CULTURE
            </div>

            <h1 className="
              text-5xl
              md:text-7xl
              font-black
              leading-none
              mb-8
            ">
              BUILT FOR
              <br />

              <span className="
                bg-gradient-to-r
                from-purple-400
                to-fuchsia-500
                bg-clip-text
                text-transparent
              ">
                RIDERS
              </span>

              <br />

              INSPIRED BY
              <br />
              THE NOMAD
            </h1>

            <p className="
              text-zinc-400
              text-lg
              leading-relaxed
              max-w-xl
              mb-10
            ">
              Premium CNC Motorcycle Wheels engineered for riders
              who demand performance, precision and style.
            </p>

            {/* CTA */}
            <div className="
              flex
              flex-wrap
              gap-4
              mb-12
            ">
              <Link
                href="/products"
                className="
                  px-8
                  py-4
                  rounded-full
                  bg-purple-600
                  hover:bg-purple-500
                  transition
                  font-bold
                  shadow-[0_0_40px_rgba(125,38,205,0.5)]
                "
              >
                Explore Products
              </Link>

              <Link
                href="/warranty/register"
                className="
                  px-8
                  py-4
                  rounded-full
                  border
                  border-purple-500
                  hover:bg-purple-500/20
                  transition
                  font-bold
                "
              >
                Warranty Registration
              </Link>

              <Link
                href="/claim"
                className="
                  px-8
                  py-4
                  rounded-full
                  border
                  border-red-500
                  hover:bg-red-500/20
                  transition
                  font-bold
                "
              >
                Submit Claim
              </Link>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-4 gap-6">

              <div>
                <div className="text-4xl font-black text-purple-400">
                  1000+
                </div>
                <div className="text-zinc-500">
                  Pairs Produced
                </div>
              </div>

              <div>
                <div className="text-4xl font-black text-purple-400">
                  20+
                </div>
                <div className="text-zinc-500">
                  Dealers
                </div>
              </div>

              <div>
                <div className="text-4xl font-black text-purple-400">
                  1 Year
                </div>
                <div className="text-zinc-500">
                  Warranty
                </div>
              </div>

              <div>
                <div className="text-4xl font-black text-purple-400">
                  8
                </div>
                <div className="text-zinc-500">
                  Colors
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="
            relative
            flex
            justify-center
            items-center
          ">

            <div className="
              absolute
              w-[600px]
              h-[600px]
              rounded-full
              bg-purple-600/20
              blur-[160px]
            " />

            <img
              src="/hero/forza-white-purple-shop.webp"
              alt="NMD Hero"
              className="
                relative
                z-10
                rounded-3xl
                shadow-[0_0_100px_rgba(125,38,205,0.6)]
                border
                border-purple-500/30
                w-full
                max-w-[720px]
              "
            />

            {/* Floating Card */}
            <div className="
              absolute
              bottom-6
              right-6
              z-20
              bg-black/70
              backdrop-blur-xl
              border
              border-purple-500/30
              rounded-3xl
              px-5
              py-4
              shadow-[0_0_40px_rgba(168,85,247,0.25)]
              hidden lg:block
            ">
              <div className="text-purple-400 font-bold text-sm">
                RONIN SERIES
              </div>

              <div className="
                text-zinc-300
                text-xs
                mt-2
                space-y-1
              ">
                <div>6061-T6 CNC Aluminum</div>
                <div>Japanese Inspired Design</div>
                <div>1 Year Warranty</div>
                <div>Built For Riders</div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Scroll */}
      <div className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        text-purple-400
        animate-bounce
        z-20
      ">
        <div className="text-xs tracking-[0.4em]">
          SCROLL
        </div>

        <div className="text-center text-2xl">
          ↓
        </div>
      </div>

    </section>
  );
}