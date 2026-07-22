import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-900 bg-black text-white">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(147,51,234,.12),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-16 lg:grid-cols-4">

          {/* Brand */}

          <div className="lg:col-span-2">

            <div className="text-5xl font-black">
              NMD
            </div>

            <div className="mt-3 text-purple-400 uppercase tracking-[8px]">
              Racing
            </div>

            <p className="mt-8 max-w-lg text-zinc-400 leading-8">
              Built For Riders. Inspired By The Nomad.
              <br />
              ล้อ CNC พรีเมียมสำหรับนักขี่ที่เลือกเส้นทางของตัวเอง
              ถ่ายทอดจิตวิญญาณของนักเดินทางผ่านงานออกแบบที่แตกต่าง
              และคุณภาพระดับพรีเมียมจาก NMD Racing
            </p>

          </div>

          {/* Products */}

          <div>

            <h3 className="mb-8 text-lg font-bold">
              Products
            </h3>

            <div className="flex flex-col gap-4 text-zinc-400">

              <Link
                href="/products/ronin-vi-forza"
                className="transition hover:text-purple-400"
              >
                Ronin VI - FORZA
              </Link>

              <Link
                href="/products/ronin-vi-xmax"
                className="transition hover:text-purple-400"
              >
                Ronin VI - XMAX
              </Link>

            </div>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="mb-8 text-lg font-bold">
              Navigation
            </h3>

            <div className="flex flex-col gap-4 text-zinc-400">

              <Link
                href="/"
                className="transition hover:text-purple-400"
              >
                Home
              </Link>

              <Link
                href="/products"
                className="transition hover:text-purple-400"
              >
                Products
              </Link>

              <Link
                href="/gallery"
                className="transition hover:text-purple-400"
              >
                Gallery
              </Link>

              <Link
                href="/dealers"
                className="transition hover:text-purple-400"
              >
                Dealers
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-purple-400"
              >
                Contact
              </Link>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="
          mt-20
          border-t
          border-zinc-900
          pt-10
          text-center
          text-zinc-500
        ">

          <div className="font-medium">
            © 2026 NMD Racing. All Rights Reserved.
          </div>

          <div className="mt-3 text-sm uppercase tracking-[4px]">
            NOMAD IS WHO I AM. NMD IS WHAT I BELIEVE IN.
          </div>

        </div>

      </div>

    </footer>
  );
}