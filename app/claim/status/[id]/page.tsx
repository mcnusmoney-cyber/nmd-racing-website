interface PageProps {
  params: {
    id: string;
  };
}

export default function ClaimStatusPage({ params }: PageProps) {
  const claim = {
    id: params.id,
    warrantyId: "NMD-20260712-000001",
    customer: "Badin Ruenglit",
    product: "NMD RONIN VI FORZA",
    status: "กำลังดำเนินการ",
    timeline: [
      {
        date: "12/07/2026 09:00",
        title: "รับเรื่องเคลม",
        description: "ระบบได้รับคำขอเคลมเรียบร้อยแล้ว",
      },
      {
        date: "12/07/2026 13:20",
        title: "ตรวจสอบสินค้า",
        description: "ทีมช่างกำลังตรวจสอบรายละเอียดสินค้า",
      },
      {
        date: "13/07/2026 10:30",
        title: "อนุมัติเคลม",
        description: "อนุมัติการเปลี่ยนสินค้าเรียบร้อย",
      },
      {
        date: "14/07/2026 16:00",
        title: "จัดส่งสินค้าใหม่",
        description: "สินค้าใหม่ถูกส่งออกจากคลังแล้ว",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-fuchsia-500 mb-4">
            Claim Status
          </h1>

          <p className="text-zinc-400">
            ติดตามสถานะการเคลมสินค้า NMD Racing
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-8">

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <p className="text-zinc-500">Claim ID</p>
              <p className="font-bold text-xl">{claim.id}</p>
            </div>

            <div>
              <p className="text-zinc-500">Warranty ID</p>
              <p>{claim.warrantyId}</p>
            </div>

            <div>
              <p className="text-zinc-500">Customer</p>
              <p>{claim.customer}</p>
            </div>

            <div>
              <p className="text-zinc-500">Product</p>
              <p>{claim.product}</p>
            </div>

            <div>
              <p className="text-zinc-500">Current Status</p>
              <p className="text-yellow-400 font-bold">
                {claim.status}
              </p>
            </div>

          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            Claim Timeline
          </h2>

          <div className="space-y-8">
            {claim.timeline.map((item, index) => (
              <div key={index} className="flex gap-5">

                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-fuchsia-500" />

                  {index !== claim.timeline.length - 1 && (
                    <div className="w-1 h-20 bg-zinc-700 mt-2" />
                  )}
                </div>

                <div className="flex-1 pb-8">
                  <p className="text-zinc-500 text-sm">
                    {item.date}
                  </p>

                  <h3 className="text-xl font-bold mt-1">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 mt-2">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </main>
  );
}