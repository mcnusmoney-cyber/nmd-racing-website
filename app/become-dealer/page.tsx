export default function BecomeDealerPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="py-28 border-b border-zinc-900">
        <div className="container mx-auto px-6 text-center">

          <div className="text-purple-400 font-semibold tracking-[0.3em] mb-4">
            NMD DEALER PROGRAM
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Become An Official Dealer
          </h1>

          <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
            Join the NMD Racing network and grow together with one of
            Thailand's premium motorcycle wheel brands.
          </p>

        </div>
      </section>

      {/* Form */}
      <section className="container mx-auto px-6 py-24 max-w-4xl">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

          <div className="grid md:grid-cols-2 gap-6">

            <input
              placeholder="Shop Name"
              className="bg-zinc-800 rounded-xl p-4"
            />

            <input
              placeholder="Owner Name"
              className="bg-zinc-800 rounded-xl p-4"
            />

            <input
              placeholder="Province"
              className="bg-zinc-800 rounded-xl p-4"
            />

            <input
              placeholder="Phone Number"
              className="bg-zinc-800 rounded-xl p-4"
            />

            <input
              placeholder="Facebook Page"
              className="bg-zinc-800 rounded-xl p-4"
            />

            <input
              placeholder="LINE ID"
              className="bg-zinc-800 rounded-xl p-4"
            />

          </div>

          <textarea
            placeholder="Tell us about your business"
            className="
              mt-6
              w-full
              h-40
              bg-zinc-800
              rounded-xl
              p-4
            "
          />

          <button
            className="
              mt-8
              w-full
              py-4
              rounded-xl
              bg-purple-600
              hover:bg-purple-500
              transition
              font-bold
            "
          >
            Submit Dealer Application
          </button>

        </div>

      </section>

    </main>
  );
}