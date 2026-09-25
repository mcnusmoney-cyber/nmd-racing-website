import Link from "next/link";

export default function DealerNetwork() {
  return (
    <section className="bg-zinc-950 py-16 text-white sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.2em] text-purple-300">NMD NETWORK</p>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">ซื้อและติดตั้งกับร้านคู่ค้า</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
            หากอยู่ต่างจังหวัด ติดต่อทีม NMD เพื่อสอบถามตัวแทนจำหน่ายในพื้นที่และรุ่นล้อที่พร้อมจำหน่าย
          </p>
        </div>
        <Link href="/dealers" className="inline-flex shrink-0 rounded-full border border-purple-400 px-6 py-3 font-bold text-white transition hover:bg-purple-500/20">
          ดูตัวแทนจำหน่าย
        </Link>
      </div>
    </section>
  );
}
