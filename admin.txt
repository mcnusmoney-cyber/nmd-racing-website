import {prisma} from "@/lib/prisma";

export default async function AdminPage() {
  const warrantyCount = await prisma.warranty.count();
  const claimCount = await prisma.claim.count();
  const dealerCount = await prisma.dealer.count();
  const customerCount = await prisma.customer.count();

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-2">
          NMD Racing Dashboard
        </h1>

        <p className="text-zinc-400 mb-10">
          Internal Management System
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
            <div className="text-zinc-400 mb-2">
              Warranty Registrations
            </div>

            <div className="text-4xl font-bold text-purple-400">
              {warrantyCount}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
            <div className="text-zinc-400 mb-2">
              Claims
            </div>

            <div className="text-4xl font-bold text-red-400">
              {claimCount}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
            <div className="text-zinc-400 mb-2">
              Dealers
            </div>

            <div className="text-4xl font-bold text-blue-400">
              {dealerCount}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
            <div className="text-zinc-400 mb-2">
              Customers
            </div>

            <div className="text-4xl font-bold text-green-400">
              {customerCount}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}