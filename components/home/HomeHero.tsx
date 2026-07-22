"use client";

import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#6F2CFF22,transparent_45%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">

        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* Left */}
          <div>

            <p className="text-purple-500 uppercase tracking-[0.5em] mb-6 text-sm">
              NMD Racing
            </p>

            <h1 className="text-6xl lg:text-8xl font-bold leading-none mb-8">
              PRECISION
              <br />
              FORGED
              <br />
              IDENTITY
            </h1>

            <p className="text-2xl text-zinc-300 mb-2">
              Built for Riders.
            </p>

            <p className="text-2xl text-zinc-300 mb-10">
              Inspired by the Nomad.
            </p>

            <p className="text-zinc-500 max-w-xl leading-relaxed mb-12">
              Japanese inspired premium CNC wheels engineered for
              riders who demand precision, performance and pride
              of ownership.
            </p>

            <div className="flex flex-wrap gap-4">

              <Link
                href="/products"
                className="
                  bg-purple-600
                  hover:bg-purple-700
                  px-8 py-4
                  rounded-full
                  font-semibold
                  transition
                "
              >
                Explore RONIN Series
              </Link>

              <Link
                href="/dealers"
                className="
                  border
                  border-zinc-700
                  hover:border-purple-500
                  px-8 py-4
                  rounded-full
                  font-semibold
                  transition
                "
              >
                Find Dealer
              </Link>

            </div>

          </div>

          {/* Right */}
          <div className="relative flex justify-center">

            <div
              className="
                absolute
                w-[500px]
                h-[500px]
                bg-purple-600/20
                blur-[120px]
                rounded-full
              "
            />

            <img
              src="/hero/forza-purple.png"
              alt="NMD Racing Forza"
              className="
                relative
                z-10
                w-full
                max-w-[700px]
                object-contain
              "
            />

          </div>

        </div>

      </div>

      {/* Bottom Stats */}

      <div className="relative z-10 border-t border-zinc-900">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

            <div>
              <h2 className="text-4xl font-bold text-purple-500">
                20+
              </h2>

              <p className="text-zinc-500 mt-2">
                Dealers Nationwide
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-purple-500">
                1000+
              </h2>

              <p className="text-zinc-500 mt-2">
                Wheels Delivered
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-purple-500">
                12
              </h2>

              <p className="text-zinc-500 mt-2">
                Months Warranty
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-purple-500">
                CNC
              </h2>

              <p className="text-zinc-500 mt-2">
                Precision Engineering
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}