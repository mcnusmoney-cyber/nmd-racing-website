export default function WarrantySection() {
  return (
    <section className="py-32 bg-black px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">
          WARRANTY VERIFICATION
        </h2>

        <p className="text-zinc-400 mb-12">
          Confidence backed by commitment.
        </p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Serial Number"
            className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800"
          />

          <button className="w-full bg-purple-600 py-4 rounded-2xl font-bold hover:bg-purple-700 transition">
            Verify Warranty
          </button>
        </div>
      </div>
    </section>
  );
}