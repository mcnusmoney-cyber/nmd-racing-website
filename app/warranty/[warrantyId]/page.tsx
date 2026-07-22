import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    warrantyId: string;
  }>;
}

export default async function WarrantyDetail({ params }: Props) {
  const { warrantyId } = await params;

  const warranty = await prisma.warranty.findUnique({
    where: {
      warrantyId: warrantyId,
    },
    include: {
      customer: true,
    },
  });

  if (!warranty) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white flex justify-center items-center p-6">
      <div className="bg-zinc-900 border border-purple-500 rounded-3xl p-10 w-full max-w-2xl shadow-2xl">

        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-white">
            NMD Racing
          </h1>

          <p className="text-purple-400 mt-2 text-xl">
            Official Warranty Certificate
          </p>
        </div>

        <div className="space-y-4 text-xl">

          <div className="flex justify-between border-b border-zinc-700 pb-2">
            <span className="text-zinc-400">Warranty ID</span>
            <span>{warranty.warrantyId}</span>
          </div>

          <div className="flex justify-between border-b border-zinc-700 pb-2">
            <span className="text-zinc-400">Owner</span>
           <div>{warranty.wheel}</div>
          </div>

          <div className="flex justify-between border-b border-zinc-700 pb-2">
            <span className="text-zinc-400">Phone</span>
            <span>{warranty.customer?.phone ?? "-"}</span>
          </div>

          <div className="flex justify-between border-b border-zinc-700 pb-2">
            <span className="text-zinc-400">Motorcycle</span>
            <span>{warranty.customer?.motorcycle ?? "-"}</span>
          </div>

          <div className="flex justify-between border-b border-zinc-700 pb-2">
            <span className="text-zinc-400">Plate</span>
            <span>{warranty.customer?.plate ?? "-"}</span>
          </div>

          <div className="flex justify-between border-b border-zinc-700 pb-2">
            <span className="text-zinc-400">Product</span>
            <span>{warranty.vehicle ?? "-"}</span>
          </div>

          <div className="flex justify-between border-b border-zinc-700 pb-2">
            <span className="text-zinc-400">Color</span>
            <span>{warranty.wheel}</span>
          </div>

          {warranty.serialNumber && (
            <div className="flex justify-between border-b border-zinc-700 pb-2">
              <span className="text-zinc-400">Serial Number</span>
              <span>{warranty.serialNumber}</span>
            </div>
          )}

          <div className="flex justify-between border-b border-zinc-700 pb-2">
            <span className="text-zinc-400">Purchase Date</span>
            <span>
              {new Date(
                warranty.installDate
              ).toLocaleDateString("th-TH")}
            </span>
          </div>

          <div className="flex justify-between border-b border-zinc-700 pb-2">
            <span className="text-zinc-400">Expire Date</span>
            <span>
              {warranty.expiryDate
  ? new Date(warranty.expiryDate).toLocaleDateString("th-TH")
  : "-"}
            </span>
          </div>

          <div className="flex justify-between border-b border-zinc-700 pb-2">
            <span className="text-zinc-400">Status</span>

            <span
              className={`font-bold ${
                warranty.status === "ACTIVE"
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {warranty.status}
            </span>
          </div>

        </div>

        <div className="mt-10 text-center text-zinc-500 text-sm">
          NMD Racing Premium CNC Motorcycle Wheels
        </div>

      </div>
    </main>
  );
}