import { prisma } from "@/lib/prisma";

export default async function DealersPage() {
  const dealers = await prisma.dealer.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-2">
          Dealer Management
        </h1>

        <p className="text-zinc-400 mb-10">
          NMD Racing Dealer Network
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-6">
            <div className="text-zinc-500">
              Total Dealers
            </div>

            <div className="text-4xl font-bold text-fuchsia-400 mt-2">
              {dealers.length}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-6">
            <div className="text-zinc-500">
              Total Sales
            </div>

            <div className="text-4xl font-bold text-green-400 mt-2">
              {dealers.reduce(
                (sum, dealer) => sum + dealer.sales,
                0
              )}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-6">
            <div className="text-zinc-500">
              Warranty Registrations
            </div>

            <div className="text-4xl font-bold text-yellow-400 mt-2">
              {dealers.reduce(
                (sum, dealer) => sum + dealer.warranties,
                0
              )}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-6">
            <div className="text-zinc-500">
              Provinces Covered
            </div>

            <div className="text-4xl font-bold text-blue-400 mt-2">
              {
                new Set(
                  dealers.map(
                    dealer => dealer.province
                  )
                ).size
              }
            </div>
          </div>

        </div>

        <div className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden">

          <div className="grid grid-cols-5 gap-4 p-5 font-bold bg-zinc-950 border-b border-zinc-800">
            <div>Dealer Name</div>
            <div>Province</div>
            <div>Sales</div>
            <div>Warranty</div>
            <div>Claims</div>
          </div>

          {dealers.map((dealer) => (
            <div
              key={dealer.id}
              className="grid grid-cols-5 gap-4 p-5 border-b border-zinc-800"
            >
              <div>{dealer.name}</div>
              <div>{dealer.province}</div>
              <div>{dealer.sales}</div>
              <div>{dealer.warranties}</div>
              <div>{dealer.claims}</div>
            </div>
          ))}

          {dealers.length === 0 && (
            <div className="p-20 text-center text-zinc-500">
              No Dealers Found
            </div>
          )}

        </div>

      </div>
    </main>
  );
}