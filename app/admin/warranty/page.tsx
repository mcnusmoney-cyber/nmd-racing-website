import { prisma } from "@/lib/prisma";

export default async function WarrantyPage() {
  const warranties = await prisma.warranty.findMany({
    include: {
      customer: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-2">
          Warranty Management
        </h1>

        <p className="text-zinc-400 mb-10">
          NMD Racing Warranty Database
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">

          <div className="grid grid-cols-7 gap-4 p-5 font-bold border-b border-zinc-800 bg-zinc-950">
            <div>Warranty ID</div>
            <div>Customer</div>
            <div>Motorcycle</div>
            <div>Product</div>
            <div>Color</div>
            <div>Status</div>
            <div>Purchase Date</div>
          </div>

          {warranties.map((warranty) => (
            <div
              key={warranty.id}
              className="grid grid-cols-7 gap-4 p-5 border-b border-zinc-800"
            >
              <div>{warranty.warrantyId}</div>
              <div>{warranty.customer?.name ?? "-"}</div>
              <div>{warranty.customer?.motorcycle ?? "-"}</div>
             <div>{warranty.vehicle}</div>
              <div>{warranty.wheel}</div>

              <div>
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                  {warranty.status}
                </span>
              </div>

              <div>
                {new Date(
                  warranty.installDate
                ).toLocaleDateString("th-TH")}
              </div>
            </div>
          ))}

          {warranties.length === 0 && (
            <div className="p-20 text-center text-zinc-500">
              No warranty registrations found
            </div>
          )}
        </div>

      </div>
    </main>
  );
}