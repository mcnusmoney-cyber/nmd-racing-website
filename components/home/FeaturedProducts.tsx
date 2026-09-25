import Link from "next/link";

const models = [
  {
    id: "forza",
    model: "HONDA FORZA 350",
    image: "/products/forza/Purple.png",
    alt: "ล้อ NMD Racing สำหรับ Honda Forza 350 สีม่วง",
    note: "เลือกลายและสีสำหรับ FORZA 350",
  },
  {
    id: "xmax",
    model: "YAMAHA XMAX 300",
    image: "/products/xmax/purple.png",
    alt: "ล้อ NMD Racing สำหรับ Yamaha XMAX 300 สีม่วง",
    note: "สอบถามลายที่ตรงกับปีรถของคุณ",
  },
  {
    id: "pcx",
    model: "HONDA PCX 160",
    image: "/products/pcx/STD Purple.png",
    alt: "ล้อ NMD Racing สำหรับ Honda PCX 160 STD สีม่วง",
    note: "แจ้งรุ่น ABS หรือ STD ก่อนเลือกสินค้า",
  },
];

export default function FeaturedProducts() {
  return (
    <section aria-labelledby="models-title" className="bg-zinc-950 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-purple-300">NMD WHEELS</p>
        <h2 id="models-title" className="mt-3 text-3xl font-black sm:text-5xl">เริ่มจากรุ่นรถของคุณ</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
          แจ้งรุ่นและปีรถให้ทีมงานช่วยตรวจความเข้ากันได้ ก่อนเลือกแบบล้อ สี และวิธีติดตั้ง
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {models.map((item) => (
            <article id={item.id} key={item.id} className="scroll-mt-24 overflow-hidden rounded-3xl border border-white/10 bg-black">
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-b from-zinc-900 to-black p-6">
                <img src={item.image} alt={item.alt} loading="lazy" className="h-full w-full object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black">{item.model}</h3>
                <p className="mt-2 min-h-12 text-base leading-6 text-zinc-300">{item.note}</p>
                <Link href="/contact" className="mt-6 inline-flex rounded-full bg-purple-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-purple-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300">
                  สอบถามรุ่นนี้
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-purple-500/25 bg-purple-500/10 p-5">
          <p className="text-base text-zinc-200">ขับ GIORNO 125 หรือ LEAD 125? ส่งรุ่นและปีรถให้ทีมงานช่วยเลือกได้</p>
          <Link href="/contact" className="font-bold text-purple-200 underline underline-offset-4 hover:text-white">สอบถามทีม NMD</Link>
        </div>
        <p className="mt-5 text-sm text-zinc-400">ราคาและสีที่พร้อมจำหน่าย กรุณาสอบถามทีมงานก่อนสั่งซื้อ</p>
      </div>
    </section>
  );
}
