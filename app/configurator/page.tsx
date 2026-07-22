"use client";

import { useState } from "react";

import { vehicles } from "@/data/vehicles";
import { wheels } from "@/data/wheels";
import { colors } from "@/data/colors";

export default function ConfiguratorPage() {
  const [vehicle, setVehicle] = useState(vehicles[0]);
  const [wheel, setWheel] = useState(wheels[1]);
  const [color, setColor] = useState(colors[1]);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-bold mb-4 text-center">
          BUILD YOUR IDENTITY
        </h1>

        <p className="text-zinc-400 text-center mb-16">
          Configure your machine with NMD Racing.
        </p>

        <div className="grid lg:grid-cols-2 gap-16">

          <div className="space-y-12">

            <div>
              <h2 className="text-2xl mb-6">Vehicle</h2>

              <div className="grid grid-cols-3 gap-4">
                {vehicles.map((item) => (
                  <button
                    key={item.slug}
                    onClick={() => setVehicle(item)}
                    className={`p-6 rounded-2xl border ${
                      vehicle.slug === item.slug
                        ? "border-purple-500"
                        : "border-zinc-800"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl mb-6">Wheel</h2>

              <div className="grid grid-cols-3 gap-4">
                {wheels.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setWheel(item)}
                    className={`p-6 rounded-2xl border ${
                      wheel.id === item.id
                        ? "border-purple-500"
                        : "border-zinc-800"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl mb-6">Color</h2>

              <div className="flex gap-4">
                {colors.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setColor(item)}
                    className="w-14 h-14 rounded-full border-4 border-white"
                    style={{
                      backgroundColor: item.hex,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-zinc-950 rounded-3xl p-12 flex flex-col justify-center">

            <h2 className="text-4xl font-bold mb-8">
              Preview
            </h2>

            <div className="h-[400px] rounded-3xl bg-zinc-900 mb-8" />

            <div className="space-y-3">
              <p>{vehicle.name}</p>
              <p>{wheel.name}</p>
              <p>{color.name}</p>
            </div>

            <button className="mt-10 bg-purple-600 py-4 rounded-2xl font-bold">
              Find Dealer
            </button>

          </div>

        </div>
      </div>
    </main>
  );
}