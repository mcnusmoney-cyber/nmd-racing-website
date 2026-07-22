import Image from "next/image";

const galleryItems = [
  {
    title: "RONIN VI",
    subtitle: "Forged for riders who refuse compromise.",
    image: "/hero/ronin-hero.webp",
  },
  {
    title: "NIGHT RIDE",
    subtitle: "Performance engineered for the road ahead.",
    image: "/gallery/night-ride.webp",
  },
  {
    title: "NMD FAMILY",
    subtitle: "More than customers. A riding culture.",
    image: "/gallery/family.webp",
  },
];

export default function Gallery() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="tracking-[0.5em] text-purple-500 text-sm mb-6">
            GALLERY
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Moments That
            <br />
            <span className="text-purple-500">
              Define The Ride.
            </span>
          </h2>
        </div>

        <div className="space-y-20">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-[40px] border border-zinc-800 group"
            >
              <div className="relative h-[600px] md:h-[800px]">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 p-10 md:p-16">
                  <h3 className="text-4xl md:text-7xl font-black mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-300 text-lg max-w-xl">
                    {item.subtitle}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}