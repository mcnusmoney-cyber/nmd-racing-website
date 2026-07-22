export default function ProductInfo() {
  const sections = [
    {
      title: "📦 What's Included",
      items: [
        "1 Pair NMD Racing CNC Wheels",
        "Center Bush Set",
        "Installation Hardware",
        "Warranty Card",
      ],
    },
    {
      title: "🔧 Installation",
      items: [
        "Direct Fit",
        "No Modification Required",
        "Compatible with OEM Brake Disc",
        "Compatible with OEM ABS",
      ],
    },
    {
      title: "🛡 Warranty",
      items: [
        "1 Year Official Warranty",
        "Manufacturing Defect Coverage",
        "Official NMD Racing Support",
      ],
    },
  ];

  return (
    <section className="mt-24">

      <h2 className="mb-10 text-4xl font-black">
        Product Information
      </h2>

      <div className="grid gap-8 lg:grid-cols-3">

        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
          >
            <h3 className="text-2xl font-black">
              {section.title}
            </h3>

            <ul className="mt-6 space-y-3">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="text-zinc-400"
                >
                  ✓ {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

    </section>
  );
}