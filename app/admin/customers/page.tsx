import { prisma } from "@/lib/prisma";

export default async function CustomersPage() {
  const customers = await prisma.customer.findMany({
    include: {
      warranties: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-2">
          Customer Management
        </h1>

        <p className="text-zinc-400 mb-10">
          NMD Racing Customer Database
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">

          <div className="grid grid-cols-7 gap-4 p-5 font-bold border-b border-zinc-800 bg-zinc-950">
            <div>Name</div>
            <div>Phone</div>
            <div>Address</div>
            <div>Motorcycle</div>
            <div>Plate</div>
            <div>Warranty Count</div>
            <div>Created</div>
          </div>

          {customers.map((customer) => (
            <div
              key={customer.id}
              className="grid grid-cols-7 gap-4 p-5 border-b border-zinc-800"
            >
              <div>{customer.name}</div>
              <div>{customer.phone}</div>
              <div>{customer.address}</div>
              <div>{customer.motorcycle}</div>
              <div>{customer.plate}</div>
              <div>{customer.warranties.length}</div>

              <div>
                {new Date(
                  customer.createdAt
                ).toLocaleDateString("th-TH")}
              </div>
            </div>
          ))}

          {customers.length === 0 && (
            <div className="p-20 text-center text-zinc-500">
              No customers found
            </div>
          )}
        </div>

      </div>
    </main>
  );
}