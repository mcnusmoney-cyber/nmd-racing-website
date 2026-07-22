import { prisma } from "@/lib/prisma";

export default async function SerialsPage() {
  const warranties = await prisma.warranty.findMany({
    include: {
      customer: true,
      claims: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-2">
          Serial Tracking
        </h1>

        <p className="text-zinc-400 mb-10">
          NMD Racing Product Tracking System
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-6">
            <div className="text-zinc-500">Registered Products</div>
            <div className="text-4xl font-bold text-fuchsia-400 mt-2">
              {warranties.length}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-6">
            <div className="text-zinc-500">Claims Submitted</div>
            <div className="text-4xl font-bold text-yellow-400 mt-2">
              {warranties.filter(w => w.claims.length > 0).length}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-6">
            <div className="text-zinc-500">Active Warranty</div>
            <div className="text-4xl font-bold text-green-400 mt-2">
              {
                warranties.filter(
                  w => w.status === "ACTIVE"
                ).length
              }
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-6">
            <div className="text-zinc-500">Expired Warranty</div>
            <div className="text-4xl font-bold text-red-400 mt-2">
              {
                warranties.filter(
                  w => w.status !== "ACTIVE"
                ).length
              }
            </div>
          </div>

        </div>

        <div className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden">

          <div className="grid grid-cols-8 gap-4 p-5 font-bold border-b border-zinc-800 bg-zinc-950">
            <div>Warranty ID</div>
            <div>Customer</div>
            <div>Motorcycle</div>
            <div>Product</div>
            <div>Color</div>
            <div>Status</div>
            <div>Claims</div>
            <div>Purchase Date</div>
          </div>

          {warranties.map((warranty) => (
            <div
              key={warranty.id}
              className="grid grid-cols-8 gap-4 p-5 border-b border-zinc-800"
            >
              <div>{warranty.warrantyId}</div>

              <div>{warranty.customer?.name ?? "-"}</div>

              <div>{warranty.customer?.motorcycle ?? "-"}</div>
              <div>{warranty.vehicle ?? "-"}</div>

              <div>{warranty.wheel}</div>

              <div>
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                  {warranty.status}
                </span>
              </div>

              <div>{warranty.claims.length}</div>

              <div>
                {new Date(
  warranty.installDate
).toLocaleDateString("th-TH")}
              </div>
            </div>
          ))}

          {warranties.length === 0 && (
            <div className="p-20 text-center text-zinc-500">
              No registered products found
            </div>
          )}
        </div>

      </div>
    </main>
  );
}