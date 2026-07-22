"use client";

import Image from "next/image";
import { useState } from "react";

const motorcycles = [
  {
    name: "FORZA 350",
    image: "/vehicles/forza.png",
  },
  {
    name: "XMAX 300",
    image: "/vehicles/xmax.png",
  },
  {
    name: "PCX",
    image: "/vehicles/pcx.png",
  },
];

const wheelColors = [
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
    hex: "#7026CD",
  },
  {
    name: "Pink",
    image: "/products/ronin-vi-forza/pink.webp",
    hex: "#FF4FA3",
  },
];

export default function MotorcycleConfigurator() {
  const [selectedBike, setSelectedBike] = useState(motorcycles[0]);
  const [selectedWheel, setSelectedWheel] = useState(wheelColors[6]);

  return (
    <section className="py-32 relative overflow-hidden bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="text-purple-400 tracking-[0.35em] mb-4">
            MOTORCYCLE CONFIGURATOR
          </p>

          <h2 className="text-6xl font-black mb-8">
            BUILD YOUR
            <br />
            DREAM SETUP
          </h2>

          <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
            Select your motorcycle and wheel color to preview your perfect setup.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div className="relative flex justify-center">

            <div
              className="absolute w-[500px] h-[500px] rounded-full blur-[150px]"
              style={{
                backgroundColor: selectedWheel.hex,
                opacity: 0.25,
              }}
            />

            <Image
              src={selectedBike.image}
              alt={selectedBike.name}
              width={700}
              height={700}
              className="relative z-10"
            />
          </div>

          <div>

            <h3 className="text-3xl font-bold mb-6">
              Motorcycle
            </h3>

            <div className="flex flex-wrap gap-4 mb-10">
              {motorcycles.map((bike) => (
                <button
                  key={bike.name}
                  onClick={() => setSelectedBike(bike)}
                  className={`px-6 py-3 rounded-full border transition ${
                    selectedBike.name === bike.name
                      ? "border-purple-500 bg-purple-500/20"
                      : "border-zinc-700"
                  }`}
                >
                  {bike.name}
                </button>
              ))}
            </div>

            <h3 className="text-3xl font-bold mb-6">
              Wheel Color
            </h3>

            <div className="flex flex-wrap gap-5 mb-10">
              {wheelColors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedWheel(color)}
                  className={`w-16 h-16 rounded-full border-4 transition ${
                    selectedWheel.name === color.name
                      ? "border-white scale-125"
                      : "border-zinc-700"
                  }`}
                  style={{
                    backgroundColor: color.hex,
                  }}
                />
              ))}
            </div>

            <div className="mt-12 p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
              <div className="text-zinc-400 mb-2">
                Current Setup
              </div>

              <div className="text-4xl font-black mb-4">
                {selectedBike.name}
              </div>

              <div className="text-2xl font-bold text-purple-400">
                RONIN VI {selectedWheel.name}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}