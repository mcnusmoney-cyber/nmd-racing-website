import Link from "next/link";

type ProductCTAProps = {
  lineMessage?: string;
};

export default function ProductCTA({
  lineMessage,
}: ProductCTAProps) {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-5xl font-black text-white">
          {lineMessage || "I hope you like it,"}
        </h2>

        <h2 className="mt-4 text-5xl font-black text-purple-400">
          and I hope you love it.
        </h2>

        <p className="mt-8 text-xl text-zinc-400">
          Welcome to the NMD Racing Family.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">

          <Link
            href="https://lin.ee/smCEE9x"
            target="_blank"
            className="rounded-2xl bg-purple-600 px-10 py-5 font-bold text-white transition hover:bg-purple-500"
          >
            Contact Nomad
          </Link>

          <Link
            href="tel:0855655249"
            className="rounded-2xl border border-purple-500 px-10 py-5 font-bold text-purple-300 transition hover:bg-purple-500/10"
          >
            Call 085-565-5249
          </Link>

        </div>

      </div>
    </section>
  );
}