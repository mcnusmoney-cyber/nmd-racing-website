import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[radial-gradient(circle_at_center,rgba(126,34,206,.2),#000_65%)] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-purple-300">NMD RACING · BANG PHLI</p>
        <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">เลือกล้อให้ตรงรถ ก่อนตัดสินใจ</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-300">
          ส่งรุ่น ปีรถ และสีที่ชอบให้ทีมงานช่วยตรวจสินค้า ราคา และคิวติดตั้งล่าสุด
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="rounded-full bg-purple-600 px-8 py-4 font-bold transition hover:bg-purple-500">
            ติดต่อทีม NMD
          </Link>
          <Link href="/dealers" className="rounded-full border border-purple-400 px-8 py-4 font-bold transition hover:bg-purple-500/20">
            หาตัวแทนจำหน่าย
          </Link>
        </div>
      </div>
    </section>
  );
}
