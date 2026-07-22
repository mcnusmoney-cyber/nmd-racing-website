export default function TrustBar() {
  const items = [
    "CNC MACHINED",
    "A356 ALUMINUM",
    "ISO9001 CERTIFIED",
    "365 DAY WARRANTY",
    "AFTER SALES SERVICE",
  ];

  return (
    <section className="border-y border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-5">

          {items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 px-4 py-4 transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/10"
            >
              <span className="text-sm font-bold tracking-[2px] text-zinc-300">
                {item}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}