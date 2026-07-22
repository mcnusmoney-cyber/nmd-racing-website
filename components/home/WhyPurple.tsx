export default function WhyPurple() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,.15),transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        <span className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[4px] text-purple-300">
          Why Purple?
        </span>

        <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
          Purple isn't our brand color.
        </h2>

        <div className="mx-auto mt-8 h-1 w-32 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500" />

        <div className="mt-12 space-y-6 text-xl leading-10 text-zinc-400">

          <p>
            It's the color of sunrise.
          </p>

          <p>
            It's the color of sunset.
          </p>

          <p>
            It's the color that nature created without compromise.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8">
            <h3 className="text-2xl font-bold text-purple-400">
              New Beginning
            </h3>

            <p className="mt-4 text-zinc-500">
              The color of every sunrise.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8">
            <h3 className="text-2xl font-bold text-purple-400">
              Journey
            </h3>

            <p className="mt-4 text-zinc-500">
              The color of the road ahead.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8">
            <h3 className="text-2xl font-bold text-purple-400">
              NOMAD
            </h3>

            <p className="mt-4 text-zinc-500">
              The color of who we are.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}