export default function WarrantyCertificatePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-10">
      <div className="max-w-2xl w-full bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

        <div className="text-center mb-10">
          <h1 className="text-5xl font-black text-purple-400">
            NMD WARRANTY
          </h1>

          <p className="text-zinc-400 mt-4">
            Official Warranty Certificate
          </p>
        </div>

        <div className="space-y-4 text-lg">
          <div>
            <span className="text-zinc-500">Warranty ID</span>
            <div>NMD-000001</div>
          </div>

          <div>
            <span className="text-zinc-500">Customer</span>
            <div>Badin Ruenglit</div>
          </div>

          <div>
            <span className="text-zinc-500">Vehicle</span>
            <div>FORZA 350</div>
          </div>

          <div>
            <span className="text-zinc-500">Wheel</span>
            <div>RONIN TEN Purple</div>
          </div>

          <div>
            <span className="text-zinc-500">Dealer</span>
            <div>NMD Racing Bang Phli</div>
          </div>

          <div>
            <span className="text-zinc-500">Warranty Expire</span>
            <div>17 July 2027</div>
          </div>
        </div>
      </div>
    </main>
  );
}