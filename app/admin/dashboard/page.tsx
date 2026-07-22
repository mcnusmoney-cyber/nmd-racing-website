export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-5xl font-black mb-10">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-zinc-900 rounded-3xl p-6">
          <p className="text-zinc-400">Claims</p>
          <h2 className="text-4xl font-bold text-fuchsia-500">
            12
          </h2>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-6">
          <p className="text-zinc-400">Dealers</p>
          <h2 className="text-4xl font-bold text-fuchsia-500">
            20
          </h2>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-6">
          <p className="text-zinc-400">Inventory</p>
          <h2 className="text-4xl font-bold text-fuchsia-500">
            137
          </h2>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-6">
          <p className="text-zinc-400">Revenue</p>
          <h2 className="text-4xl font-bold text-fuchsia-500">
            ฿426K
          </h2>
        </div>

      </div>
    </div>
  );
}