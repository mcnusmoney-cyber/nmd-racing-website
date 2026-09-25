"use client";

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(126,34,206,.24),transparent_45%)]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-12 lg:min-h-[680px] lg:grid-cols-2 lg:gap-16 lg:pb-24 lg:pt-20">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[.2em] text-purple-300">
            NMD RACING / RONIN SERIES
          </p>
          <h1 className="max-w-2xl text-4xl font-black leading-[1.16] sm:text-5xl lg:text-6xl">
            ล้อ CNC ที่ใช่
            <br />
            <span className="text-purple-400">สำหรับรถของคุณ</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-300 sm:text-lg">
            เลือกทรงและสีล้อ NMD ให้ตรงรุ่นรถของคุณ พร้อมคำแนะนำเรื่องการติดตั้งและการรับประกัน 1 ปีจากทีมงานที่บางพลี
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#choose-bike" className="rounded-full bg-purple-600 px-7 py-4 text-base font-bold text-white transition hover:bg-purple-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300">
              เลือกรุ่นรถ
            </Link>
            <Link href="/contact" className="rounded-full border border-purple-400 px-7 py-4 text-base font-bold text-white transition hover:bg-purple-500/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300">
              สอบถามทีม NMD
            </Link>
          </div>
          <div className="mt-10 border-t border-white/15 pt-6" id="choose-bike">
            <h2 className="text-base font-semibold text-white">คุณใช้รถรุ่นไหน?</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {models.map((model) => (
                <Link key={model.name} href={model.href} className="rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-purple-400 hover:bg-purple-500/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300">
                  {model.name}
                </Link>
              ))}
            </div>
            <p className="mt-3 text-sm text-zinc-400">GIORNO และ LEAD: ทีมงานช่วยตรวจรุ่นและสีที่พร้อมจำหน่าย</p>
          </div>
        </div>
        <div className="relative">
          <img src="/hero/forza-white-purple-shop.webp" alt="Honda Forza ติดตั้งล้อ NMD Racing สีม่วง" className="aspect-[4/3] w-full rounded-3xl border border-purple-500/25 object-cover shadow-[0_25px_90px_rgba(91,33,182,.25)]" />
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-zinc-300">
            <span>ตรงรุ่น ไม่ต้องแปลง</span>
            <span>รับประกัน 1 ปีตามเงื่อนไข</span>
          </div>
        </div>
      </div>
    </section>
  );
}
