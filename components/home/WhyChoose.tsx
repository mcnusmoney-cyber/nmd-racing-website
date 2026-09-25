import Link from "next/link";

const points = [
  { title: "เลือกให้ตรงรุ่น", detail: "แจ้งรุ่นและปีรถก่อนสั่งซื้อ ทีมงานช่วยตรวจรุ่นที่เหมาะกับรถของคุณ" },
  { title: "วัสดุ A356", detail: "ล้อ NMD Racing ผลิตด้วยอะลูมิเนียม A356 และกระบวนการ CNC" },
  { title: "รับประกัน 1 ปี", detail: "ดูเงื่อนไขการรับประกันและลงทะเบียนสินค้าได้ผ่านเว็บไซต์" },
];

export default function WhyChoose() {
  return (
    <section aria-labelledby="why-nmd-title" className="bg-black py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-purple-300">WHY NMD</p>
        <h2 id="why-nmd-title" className="mt-3 text-3xl font-black sm:text-5xl">เลือกมั่นใจก่อนติดตั้ง</h2>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {points.map((point) => (
            <div key={point.title} className="rounded-3xl border border-white/10 bg-zinc-950 p-7">
              <h3 className="text-xl font-bold text-white">{point.title}</h3>
              <p className="mt-3 text-base leading-7 text-zinc-300">{point.detail}</p>
            </div>
          ))}
        </div>
        <Link href="/warranty/register" className="mt-7 inline-block text-base font-semibold text-purple-300 underline underline-offset-4 hover:text-white">
          ดูการลงทะเบียนรับประกัน
        </Link>
      </div>
    </section>
  );
}
