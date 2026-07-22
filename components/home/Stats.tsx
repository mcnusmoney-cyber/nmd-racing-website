export default function Stats() {
  const stats = [
    {
      value: "20+",
      title: "AUTHORIZED",
      subtitle: "DEALERS",
    },
    {
      value: "2,000+",
      title: "RIDERS",
      subtitle: "TRUST NMD",
    },
    {
      value: "365",
      title: "DAY",
      subtitle: "WARRANTY",
    },
    {
      value: "A356",
      title: "AIRCRAFT",
      subtitle: "ALUMINUM",
    },
    {
      value: "CNC",
      title: "PRECISION",
      subtitle: "MACHINED",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-32">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7c3aed15,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="text-center mb-20">

          <p className="mb-5 text-sm tracking-[10px] uppercase text-purple-400">
            ENGINEERING
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-none">
            Engineered
            <br />
            <span className="text-purple-400">
              For Riders.
            </span>
          </h2>

          <p className="mt-10 text-zinc-500 text-lg max-w-2xl mx-auto leading-9">
            Designed in Thailand.
            Built for the world.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-12">

          {stats.map((item) => (
            <div
              key={item.subtitle}
              className="text-center"
            >

              <div className="
                text-5xl
                md:text-7xl
                font-black
                text-purple-400
              ">
                {item.value}
              </div>

              <div className="
                mt-5
                text-sm
                tracking-[6px]
                uppercase
                text-white
              ">
                {item.title}
              </div>

              <div className="
                mt-1
                text-xs
                tracking-[4px]
                uppercase
                text-zinc-500
              ">
                {item.subtitle}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}