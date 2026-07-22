import { prisma } from "@/lib/prisma";

export default async function ClaimsPage() {
  const claims = await prisma.claim.findMany({
    include: {
      warranty: {
        include: {
          customer: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-2">
          Claim Management
        </h1>

        <p className="text-zinc-400 mb-10">
          NMD Racing Warranty Claim System
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">

          <div className="grid grid-cols-7 gap-4 p-5 font-bold border-b border-zinc-800 bg-zinc-950">
            <div>Claim ID</div>
            <div>Customer</div>
            <div>Warranty ID</div>
            <div>Issue</div>
            <div>Status</div>
            <div>Created</div>
            <div>Product</div>
          </div>

          {claims.map((claim) => (
            <div
              key={claim.id}
              className="grid grid-cols-7 gap-4 p-5 border-b border-zinc-800"
            >
              <div>{claim.claimId}</div>

              <div>
                {claim.warranty?.customer?.name ?? "-"}
              </div>

              <div>
                {claim.warranty?.warrantyId ?? "-"}
              </div>

              <div>
                {claim.issue}
              </div>

              <div>
                <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400">
                  {claim.status}
                </span>
              </div>

              <div>
                {new Date(claim.createdAt).toLocaleDateString("th-TH")}
              </div>

              <div>
                {claim.warranty?.vehicle ?? "-"}
              </div>
            </div>
          ))}

          {claims.length === 0 && (
            <div className="p-20 text-center text-zinc-500">
              No claims found
            </div>
          )}

        </div>
      </div>
    </main>
  );
}