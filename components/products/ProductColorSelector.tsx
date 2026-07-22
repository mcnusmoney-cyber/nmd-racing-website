"use client";

import Image from "next/image";
import { useState } from "react";

const colors = [
  {
    name: "Black",
    image: "/products/ronin-vi-forza/black.webp",
    hex: "#111111",
  },

  {
    name: "Silver",
    image: "/products/ronin-vi-forza/silver.webp",
    hex: "#C0C0C0",
  },

  {
    name: "Gold",
    image: "/products/ronin-vi-forza/gold.webp",
    hex: "#D4AF37",
  },

  {
    name: "Blue",
    image: "/products/ronin-vi-forza/blue.webp",
    hex: "#0057FF",
  },

  {
    name: "Green",
    image: "/products/ronin-vi-forza/green.webp",
    hex: "#00A651",
  },

  {
    name: "Red",
    image: "/products/ronin-vi-forza/red.webp",
    hex: "#D50000",
  },

  {
    name: "Purple",
    image: "/products/ronin-vi-forza/purple.webp",
    hex: "#7D26CD",
  },

  {
    name: "Pink",
    image: "/products/ronin-vi-forza/pink.webp",
    hex: "#FF4FA3",
  },
];

export default function ProductColorSelector() {
  const [selectedColor, setSelectedColor] =
    useState(colors[6]);

  return (
    <section className="relative py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <div className="
            text-purple-400
            tracking-[0.35em]
            mb-4
          ">
            CUSTOMIZE YOUR STYLE
          </div>

          <h2 className="
            text-5xl
            lg:text-6xl
            font-black
            mb-6
          ">
            SELECT YOUR
            <br />
            COLOR
          </h2>

          <p className="
            text-zinc-400
            text-xl
            max-w-3xl
            mx-auto
          ">
            Explore every finish and choose
            the perfect look for your ride.
          </p>

        </div>

        <div className="
          grid
          lg:grid-cols-2
          gap-20
          items-center
        ">

          {/* Wheel */}
          <div className="
            relative
            flex
            justify-center
          ">

            <div
              className="
                absolute
                w-[500px]
                h-[500px]
                rounded-full
                blur-[120px]
              "
              style={{
                backgroundColor:
                  selectedColor.hex,
                opacity: 0.35,
              }}
            />

            <Image
              src={selectedColor.image}
              alt={selectedColor.name}
              width={650}
              height={650}
              className="
                relative
                z-10
                transition-all
                duration-700
                hover:rotate-12
              "
            />

          </div>

          {/* Controls */}
          <div>

            <div className="
              text-zinc-400
              mb-4
            ">
              Selected Color
            </div>

            <div className="
              text-5xl
              font-black
              mb-10
            ">
              {selectedColor.name}
            </div>

            <div className="
              flex
              flex-wrap
              gap-5
            ">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() =>
                    setSelectedColor(color)
                  }
                  className={`
                    w-16
                    h-16
                    rounded-full
                    border-4
                    transition-all
                    duration-300
                    ${
                      selectedColor.name ===
                      color.name
                        ? "border-white scale-125"
                        : "border-zinc-700"
                    }
                  `}
                  style={{
                    backgroundColor:
                      color.hex,
                  }}
                />
              ))}
            </div>

            <div className="
              mt-12
              text-zinc-400
              leading-relaxed
            ">
              Available for:
              <br />
              Honda FORZA 350
              <br />
              Yamaha XMAX
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}