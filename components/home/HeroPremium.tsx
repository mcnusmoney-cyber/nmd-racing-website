import Image from "next/image";
import Link from "next/link";

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <h3 className="text-3xl font-bold text-purple-400">
        {number}
      </h3>

      <p className="mt-2 text-sm text-zinc-400">
        {label}
      </p>
    </div>
  );
}

export default function HeroPremium() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/50 via-black to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
              Built for Riders • Inspired by the Nomad Spirit
            </span>

            <h1 className="mt-8 text-5xl font-black leading-none md:text-7xl">
              <span className="block">NOMAD</span>

              <span className="block text-purple-400">
                IS WHO I AM.
              </span>

              <span className="mt-8 block">
                NMD
              </span>

              <span className="block text-purple-400">
                IS WHAT I BELIEVE IN.
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-400">
              My motorcycle is not just a motorcycle.
              <br />
              It carries memories, journeys and dreams.
              <br />
              Its name is NOMAD.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-2xl bg-purple-600 px-8 py-4 font-semibold transition hover:bg-purple-500"
              >
                Explore Products
              </Link>

              <Link
                href="https://lin.ee/smCEE9x"
                target="_blank"
                className="rounded-2xl border border-zinc-700 bg-zinc-900 px-8 py-4 font-semibold transition hover:border-purple-500"
              >
                Contact Nomad
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-5">
              <Stat number="20+" label="Dealers" />
              <Stat number="20" label="Provinces" />
              <Stat number="2,000+" label="Riders" />
              <Stat number="365" label="Warranty Days" />
              <Stat number="300+" label="Pairs / Month" />
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <Image
              src="/products/forza/Purple.png"
              alt="NMD Racing Wheel"
              width={650}
              height={650}
              priority
              className="w-full max-w-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}