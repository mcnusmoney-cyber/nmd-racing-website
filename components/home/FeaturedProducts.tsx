"use client";

import Link from "next/link";

const products = [
  {
    name: "RONIN FORZA",
    subtitle: "FORZA 350",
    image: "/products/forza/Purple.png",
    price: "8,190",
    colors: "8 Colors",
    description:
      "Premium CNC wheel inspired by Japanese performance culture.",
  },

  {
    name: "RONIN XMAX",
    subtitle: "XMAX 300",
    image: "/products/xmax/Purple.png",
    price: "8,190",
    colors: "8 Colors",
    description:
      "Built for riders who demand precision and aggressive styling.",
  },

  {
    name: "RONIN PCX",
    subtitle: "PCX 160",
    image: "/products/pcx/Purple.png",
    price: "7,390",
    colors: "8 Colors",
    description:
      "Lightweight CNC performance wheel for everyday riders.",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="relative bg-black py-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-600/10 blur-[220px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20">

          <div className="
            text-purple-400
            tracking-[0.5em]
            text-sm
            uppercase
            mb-4
          ">
            製品ラインナップ
          </div>

          <h2 className="
            text-5xl
            md:text-7xl
            font-black
            mb-6
          ">
            FEATURED
            <span className="text-purple-400">
              {" "}PRODUCTS
            </span>
          </h2>

          <p className="
            text-zinc-400
            max-w-3xl
            mx-auto
            text-lg
          ">
            Explore our premium CNC wheel collection inspired by
            Japanese motorsport engineering and designed for riders
            who demand more.
          </p>

        </div>

        {/* Products Grid */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        ">

          {products.map((product) => (
            <div
              key={product.name}
              className="
                group
                relative
                rounded-[32px]
                overflow-hidden
                border
                border-purple-500/20
                bg-zinc-950
                hover:border-purple-400/60
                transition-all
                duration-500
              "
            >

              {/* Glow */}
              <div className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
                bg-purple-500/10
              " />

              {/* Image */}
              <div className="
                relative
                h-[360px]
                flex
                items-center
                justify-center
                bg-gradient-to-b
                from-zinc-900
                to-black
              ">

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    w-[85%]
                    object-contain
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div className="
                  absolute
                  top-6
                  left-6
                  text-purple-400
                  text-xs
                  tracking-[0.35em]
                ">
                  RONIN SERIES
                </div>

              </div>

              {/* Content */}
              <div className="p-8">

                <div className="
                  text-zinc-500
                  text-sm
                  mb-2
                  tracking-[0.3em]
                ">
                  {product.subtitle}
                </div>

                <h3 className="
                  text-3xl
                  font-black
                  mb-4
                ">
                  {product.name}
                </h3>

                <p className="
                  text-zinc-400
                  mb-6
                  leading-relaxed
                ">
                  {product.description}
                </p>

                <div className="
                  flex
                  justify-between
                  items-center
                  mb-6
                ">
                  <div>
                    <div className="
                      text-3xl
                      font-black
                      text-purple-400
                    ">
                      ฿{product.price}
                    </div>

                    <div className="
                      text-zinc-500
                      text-sm
                    ">
                      {product.colors}
                    </div>
                  </div>

                  <div className="
                    text-xs
                    text-zinc-500
                    tracking-[0.3em]
                  ">
                    CNC 6061-T6
                  </div>
                </div>

                <Link
                  href="/products"
                  className="
                    block
                    text-center
                    py-4
                    rounded-full
                    bg-purple-600
                    hover:bg-purple-500
                    transition
                    font-bold
                    shadow-[0_0_40px_rgba(168,85,247,0.4)]
                  "
                >
                  VIEW PRODUCT
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}