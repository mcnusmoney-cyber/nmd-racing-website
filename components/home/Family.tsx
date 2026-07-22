import Image from "next/image";

export default function Family() {
  return (
    <section className="relative py-32 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-20">
          <div className="text-purple-400 tracking-[10px] uppercase text-sm mb-6">
            COMMUNITY
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            More Than Customers.
            <br />
            <span className="text-purple-400">
              A Family Of Riders.
            </span>
          </h2>

          <p className="text-zinc-400 text-xl max-w-3xl mx-auto mt-8 leading-relaxed">
            From Bangkok streets to mountain roads,
            every rider who chooses NMD becomes part of our journey.
          </p>
        </div>

        <div className="relative rounded-[40px] overflow-hidden border border-zinc-800">

          <Image
            src="/gallery/family.webp"
            alt="NMD Family"
            width={1600}
            height={900}
            className="w-full h-[600px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 p-10 md:p-16">

            <div className="text-purple-400 tracking-[6px] uppercase mb-4">
              NMD FAMILY
            </div>

            <h3 className="text-4xl md:text-6xl font-black mb-6">
              Ride Together.
              <br />
              Grow Together.
            </h3>

            <p className="text-zinc-300 max-w-xl text-lg leading-relaxed mb-10">
              Every rider has a story.
              Every journey creates memories.
              Together, we build something bigger than motorcycles.
            </p>

            <button className="
              px-10 py-5
              rounded-full
              bg-gradient-to-r
              from-purple-500
              to-fuchsia-500
              font-bold
              text-lg
              hover:scale-105
              duration-300
            ">
              Join The Family
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}