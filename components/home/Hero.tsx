import Link from "next/link";

const models = [
  { name: "FORZA 350", href: "#forza" },
  { name: "XMAX 300", href: "#xmax" },
  { name: "PCX 160", href: "#pcx" },
  { name: "GIORNO 125", href: "/contact" },
  { name: "LEAD 125", href: "/contact" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        <img src="/hero/nmd-forza-purple-hero.webp" alt="" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      <div className="relative mx-auto flex min-h-[640px] max-w-7xl flex-col justify-center px-6 pb-12 pt-14 lg:min-h-[610px] lg:pb-14">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-purple-300">NMD RACING / RONIN SERIES</p>
          <h1 className="mt-5 text-4xl font-black leading-[1.16] sm:text-5xl lg:text-6xl">
            ล้อ CNC ที่ใช่<br />
            <span className="text-purple-400">สำหรับรถของคุณ</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-200 sm:text-lg">
            เลือกทรงและสีล้อ NMD ให้ตรงรุ่นรถของคุณ พร้อมคำแนะนำเรื่องการติดตั้งและการรับประกัน 1 ปีจากทีมงานที่บางพลี
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#choose-bike" className="rounded-xl bg-purple-600 px-7 py-4 text-base font-bold transition hover:bg-purple-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300">
              เลือกรุ่นรถ
            </Link>
            <Link href="/contact" className="rounded-xl border border-purple-400 px-7 py-4 text-base font-bold transition hover:bg-purple-500/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300">
              สอบถามทีม NMD
            </Link>
          </div>
        </div>

        <div id="choose-bike" className="mt-10 scroll-mt-28">
          <h2 className="sr-only">เลือกรุ่นรถของคุณ</h2>
          <div className="flex flex-wrap gap-2">
            {models.map((model) => (
              <Link key={model.name} href={model.href} className="rounded-full border border-white/25 bg-zinc-900/80 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-purple-400 hover:bg-purple-500/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300">
                {model.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-purple-500/20 lg:hidden">
          <img src="/hero/nmd-forza-purple-hero.webp" alt="Honda Forza ติดตั้งล้อ NMD Racing สีม่วง" className="aspect-[4/3] w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
