import Link from "next/link";

const builds = [
  { src: "/gallery/forza-purple.JPG", alt: "Honda Forza ติดตั้งล้อสีม่วงที่ NMD Racing" },
  { src: "/gallery/forza1.JPG", alt: "ผลงานรถ Honda Forza จาก NMD Racing" },
  { src: "/gallery/xmax-premium.JPG", alt: "ผลงานรถ Yamaha XMAX จาก NMD Racing" },
];

export default function RiderGallery() {
  return (
    <section aria-labelledby="gallery-title" className="bg-black py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-purple-300">NMD BUILDS</p>
        <h2 id="gallery-title" className="mt-3 text-3xl font-black sm:text-5xl">ดูงานติดตั้งจริง</h2>
        <p className="mt-4 text-base text-zinc-300">ภาพผลงานจากรถที่แต่งกับ NMD Racing</p>
        <div className="mt-9 grid gap-5 sm:grid-cols-3">
          {builds.map((build) => (
            <div key={build.src} className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
              <img src={build.src} alt={build.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            </div>
          ))}
        </div>
        <Link href="/gallery" className="mt-7 inline-block font-bold text-purple-300 underline underline-offset-4 hover:text-white">
          ดูผลงานเพิ่มเติม
        </Link>
      </div>
    </section>
  );
}
