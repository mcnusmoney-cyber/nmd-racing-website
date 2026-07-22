import Image from "next/image";

const galleryImages = [
  {
    name: "Black",
    image: "/products/ronin-vi-forza/black.webp",
  },
  {
    name: "Silver",
    image: "/products/ronin-vi-forza/silver.webp",
  },
  {
    name: "Gold",
    image: "/products/ronin-vi-forza/gold.webp",
  },
  {
    name: "Blue",
    image: "/products/ronin-vi-forza/blue.webp",
  },
  {
    name: "Green",
    image: "/products/ronin-vi-forza/green.webp",
  },
  {
    name: "Red",
    image: "/products/ronin-vi-forza/red.webp",
  },
  {
    name: "Purple",
    image: "/products/ronin-vi-forza/purple.webp",
  },
  {
    name: "Pink",
    image: "/products/ronin-vi-forza/pink.webp",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="container mx-auto px-6 py-24">

        <div className="text-center mb-20">

          <div className="text-purple-500 font-bold tracking-[0.3em] mb-4">
            NMD RACING GALLERY
          </div>

          <h1 className="text-6xl font-black mb-6">
            RONIN VI COLOR COLLECTION
          </h1>

          <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
            Premium CNC 10-Spoke Y Design Wheel
            available in 8 premium finishes.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="
                bg-zinc-900
                border border-zinc-800
                rounded-3xl
                overflow-hidden
                hover:border-purple-500
                transition
                duration-300
              "
            >
              <div className="relative aspect-square">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain p-6"
                />
              </div>

              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold">
                  {item.name}
                </h2>
              </div>
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}