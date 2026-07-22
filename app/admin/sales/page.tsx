export default function SalesPage() {
  return (
    <div>

      <h1 className="text-5xl font-black mb-10">
        Sales Analytics
      </h1>

      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
          <p className="text-zinc-400 mb-2">
            ยอดขายวันนี้
          </p>

          <h2 className="text-4xl font-black text-fuchsia-500">
            ฿48,500
          </h2>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
          <p className="text-zinc-400 mb-2">
            ยอดขายเดือนนี้
          </p>

          <h2 className="text-4xl font-black text-fuchsia-500">
            ฿426,000
          </h2>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
          <p className="text-zinc-400 mb-2">
            ดิลเลอร์อันดับ 1
          </p>

          <h2 className="text-2xl font-black text-fuchsia-500">
            NMD Hatyai
          </h2>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
          <p className="text-zinc-400 mb-2">
            รุ่นขายดีที่สุด
          </p>

          <h2 className="text-2xl font-black text-fuchsia-500">
            RONIN VI FORZA
          </h2>
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
          <h2 className="text-3xl font-bold mb-6">
            Top Dealers
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>NMD Hatyai</span>
              <span>21 คู่</span>
            </div>

            <div className="flex justify-between">
              <span>NMD Chiangmai</span>
              <span>18 คู่</span>
            </div>

            <div className="flex justify-between">
              <span>NMD Khonkaen</span>
              <span>12 คู่</span>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
          <h2 className="text-3xl font-bold mb-6">
            Top Products
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>RONIN VI FORZA</span>
              <span>62 คู่</span>
            </div>

            <div className="flex justify-between">
              <span>RONIN XMAX</span>
              <span>41 คู่</span>
            </div>

            <div className="flex justify-between">
              <span>RONIN PCX</span>
              <span>27 คู่</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}