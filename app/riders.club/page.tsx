export default function RidersClubPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="py-28 border-b border-zinc-900">

        <div className="container mx-auto px-6 text-center">

          <div className="text-purple-400 font-semibold tracking-[0.3em] mb-4">
            NMD RIDERS CLUB
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            More Than A Wheel.
            <br />
            A Brotherhood.
          </h1>

          <p className="text-zinc-400 text-xl max-w-4xl mx-auto">
            Built for riders who choose their own road.
            Inspired by the spirit of the Nomad.
          </p>

        </div>

      </section>

      {/* Benefits */}
      <section className="container mx-auto px-6 py-24">

        <h2 className="text-4xl font-bold text-center mb-16">
          Membership Benefits
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              One Day Trip
            </h3>

            <p className="text-zinc-400">
              Join official NMD rides and events.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Exclusive Products
            </h3>

            <p className="text-zinc-400">
              Access limited colors and special editions.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Priority Support
            </h3>

            <p className="text-zinc-400">
              Faster service and after sales support.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Warranty Extension
            </h3>

            <p className="text-zinc-400">
              Additional warranty for club members.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Early Access
            </h3>

            <p className="text-zinc-400">
              See new products before public release.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Community
            </h3>

            <p className="text-zinc-400">
              Meet riders who share the same passion.
            </p>
          </div>

        </div>

      </section>

      {/* Join */}
      <section className="container mx-auto px-6 pb-24">

        <div className="
          bg-gradient-to-r
          from-purple-900/30
          to-black
          border
          border-purple-500/20
          rounded-3xl
          p-16
          text-center
        ">

          <h2 className="text-5xl font-bold mb-6">
            Join The Journey
          </h2>

          <p className="text-zinc-400 text-xl max-w-3xl mx-auto mb-10">
            NOMAD is who we are.
            NMD is what we believe in.
          </p>

          <button className="
            px-10
            py-4
            rounded-full
            bg-purple-600
            hover:bg-purple-500
            transition
            font-bold
          ">
            Join NMD Riders Club
          </button>

        </div>

      </section>

    </main>
  );
}