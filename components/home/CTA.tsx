import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-black py-40 text-white">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,.18),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <p className="text-sm uppercase tracking-[8px] text-purple-400">
          READY FOR YOUR NEXT RIDE?
        </p>

        <h2 className="
          mt-8
          text-5xl
          font-black
          leading-tight
          lg:text-7xl
        ">
          Built For Riders.
          <br />

          <span className="text-purple-400">
            Inspired By The Nomad.
          </span>
        </h2>

        <p className="
          mx-auto
          mt-10
          max-w-3xl
          text-lg
          leading-9
          text-zinc-400
        ">
          ค้นหาล้อที่เหมาะกับรถของคุณ
          พร้อมสัมผัสประสบการณ์ใหม่ของการขับขี่
          ผ่านงานออกแบบและคุณภาพระดับพรีเมียมจาก NMD Racing
        </p>

        <div className="
          mt-16
          flex
          flex-wrap
          justify-center
          gap-5
        ">

          <Link
            href="/products"
            className="
              rounded-full
              bg-purple-600
              px-10
              py-5
              font-bold
              transition-all
              duration-300
              hover:scale-105
              hover:bg-purple-500
              hover:shadow-[0_0_50px_rgba(168,85,247,.45)]
            "
          >
            View Products
          </Link>

          <Link
            href="/dealers"
            className="
              rounded-full
              border
              border-zinc-700
              px-10
              py-5
              font-bold
              transition-all
              duration-300
              hover:border-purple-500
              hover:text-purple-400
            "
          >
            Find Dealer
          </Link>

          <Link
            href="/contact"
            className="
              rounded-full
              border
              border-zinc-700
              px-10
              py-5
              font-bold
              transition-all
              duration-300
              hover:border-purple-500
              hover:text-purple-400
            "
          >
            Contact Us
          </Link>

        </div>

      </div>

    </section>
  );
}