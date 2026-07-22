import Image from "next/image";

export default function NightRide() {
  return (
    <section className="py-32 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <div className="text-purple-400 tracking-[10px] uppercase text-sm mb-6">
            LIFESTYLE
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Every Journey
            <br />
            <span className="text-purple-400">
              Creates A Story.
            </span>
          </h2>

          <p className="text-zinc-400 text-xl mt-8 max-w-3xl mx-auto">
            Some ride to arrive.
            Some ride to remember.
          </p>

        </div>

        <div className="relative rounded-[40px] overflow-hidden border border-zinc-800">

          <Image
            src="/gallery/night-ride.webp"
            alt="Night Ride"
            width={1600}
            height={900}
            className="w-full h-[700px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"/>

          <div className="absolute bottom-0 left-0 p-10 md:p-16">

            <div className="text-purple-400 tracking-[6px] uppercase mb-4">
              NIGHT RIDE
            </div>

            <h3 className="text-5xl font-black mb-6">
              Built For The
              <br />
              City Lights.
            </h3>

            <p className="text-zinc-300 max-w-xl text-lg leading-relaxed">
              When the city sleeps,
              riders keep moving.
              NMD belongs to the road after sunset.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}