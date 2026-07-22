"use client";

import Link from "next/link";

export default function BecomeDealer() {
  return (
    <section className="relative bg-black py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-600/15 blur-[240px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="
          rounded-[40px]
          border
          border-purple-500/20
          bg-gradient-to-br
          from-zinc-950
          to-black
          p-12
          md:p-20
          text-center
          overflow-hidden
          relative
        ">

          <div className="
            text-purple-400
            text-sm
            tracking-[0.5em]
            uppercase
            mb-6
          ">
            DEALER PROGRAM
          </div>

          <h2 className="
            text-5xl
            md:text-7xl
            font-black
            mb-8
            leading-tight
          ">
            BECOME AN
            <span className="text-purple-400">
              {" "}NMD DEALER
            </span>
          </h2>

          <p className="
            text-zinc-400
            text-lg
            md:text-xl
            max-w-3xl
            mx-auto
            mb-12
            leading-relaxed
          ">
            Join the growing NMD Racing dealer network and bring
            Japanese inspired premium CNC wheels to riders across Thailand.
          </p>

          <div className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-8
            mb-12
          ">

            <div className="
              rounded-3xl
              bg-zinc-900/70
              border
              border-purple-500/20
              p-8
            ">
              <div className="text-5xl font-black text-purple-400 mb-3">
                20+
              </div>

              <div className="text-zinc-400">
                Existing Dealers
              </div>
            </div>

            <div className="
              rounded-3xl
              bg-zinc-900/70
              border
              border-purple-500/20
              p-8
            ">
              <div className="text-5xl font-black text-purple-400 mb-3">
                77
              </div>

              <div className="text-zinc-400">
                Provinces Opportunity
              </div>
            </div>

            <div className="
              rounded-3xl
              bg-zinc-900/70
              border
              border-purple-500/20
              p-8
            ">
              <div className="text-5xl font-black text-purple-400 mb-3">
                1 Year
              </div>

              <div className="text-zinc-400">
                Official Warranty
              </div>
            </div>

          </div>

          <div className="
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-4
          ">

            <Link
              href="/dealer"
              className="
                px-10
                py-5
                rounded-full
                bg-purple-600
                hover:bg-purple-500
                transition
                font-bold
                shadow-[0_0_40px_rgba(168,85,247,0.5)]
              "
            >
              Apply Now
            </Link>

            <Link
              href="/contact"
              className="
                px-10
                py-5
                rounded-full
                border
                border-purple-500
                hover:bg-purple-500/10
                transition
                font-bold
              "
            >
              Contact Sales
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}