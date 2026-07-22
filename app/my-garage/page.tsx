import { prisma } from "@/lib/prisma";

export default async function MyGaragePage() {
  const vehicles = await prisma.garage.findMany();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-bold mb-4">
          MY GARAGE
        </h1>

        <p className="text-zinc-400 mb-16">
          Your machines. Your identity.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">

          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8"
            >
              <h2 className="text-3xl font-bold mb-6">
                {vehicle.vehicle}
              </h2>

              <div className="space-y-3 text-zinc-300">
                <p>Wheel : {vehicle.wheelModel}</p>
                <p>Color : {vehicle.wheelColor}</p>
                <p>Dealer : {vehicle.dealer}</p>
              </div>

              <button className="mt-8 bg-purple-600 px-8 py-3 rounded-2xl">
                View Warranty
              </button>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}