export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="py-28 border-b border-zinc-900">
        <div className="container mx-auto px-6 text-center">

          <div className="text-purple-400 font-semibold tracking-[0.3em] mb-4">
            CONTACT NMD RACING
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Get In Touch
          </h1>

          <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
            Contact us for product information, dealer opportunities
            and after sales support.
          </p>

        </div>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10">
            <div className="text-purple-400 font-semibold mb-4">
              CONTACT INFORMATION
            </div>

            <div className="space-y-8">

              <div>
                <div className="text-zinc-500 text-sm mb-1">
                  Brand
                </div>
                <div className="text-2xl font-bold">
                  NMD Racing
                </div>
              </div>

              <div>
                <div className="text-zinc-500 text-sm mb-1">
                  Address
                </div>
                <div className="text-lg text-zinc-300">
                  Bang Phli, Samut Prakan, Thailand
                </div>
              </div>

              <div>
                <div className="text-zinc-500 text-sm mb-1">
                  Business Hours
                </div>
                <div className="text-lg text-zinc-300">
                  12:00 - 22:00
                </div>
              </div>

              <div>
                <div className="text-zinc-500 text-sm mb-1">
                  Warranty
                </div>
                <div className="text-lg text-zinc-300">
                  1 Year Warranty
                </div>
              </div>

            </div>
          </div>

          <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-b from-purple-900/20 to-zinc-900 p-10">

            <div className="text-purple-400 font-semibold mb-4">
              QUICK CONTACT
            </div>

            <h2 className="text-4xl font-bold mb-6">
              Ready To Upgrade Your Ride?
            </h2>

            <p className="text-zinc-400 text-lg mb-10">
              Contact our team for product recommendations,
              pricing information and dealer applications.
            </p>

            <div className="space-y-4">

              <a
                href="https://line.me"
                target="_blank"
                className="
                  block
                  text-center
                  py-4
                  rounded-2xl
                  bg-[#06C755]
                  font-bold
                  text-lg
                  hover:scale-105
                  transition
                "
              >
                Contact via LINE
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                className="
                  block
                  text-center
                  py-4
                  rounded-2xl
                  bg-blue-600
                  font-bold
                  text-lg
                  hover:scale-105
                  transition
                "
              >
                Facebook Page
              </a>

              <a
                href="https://www.tiktok.com"
                target="_blank"
                className="
                  block
                  text-center
                  py-4
                  rounded-2xl
                  bg-zinc-800
                  font-bold
                  text-lg
                  hover:scale-105
                  transition
                "
              >
                TikTok Channel
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}