import { Dealer } from "@/types/dealer";

type Props = {
  dealer: Dealer;
};

export default function DealerCard({
  dealer,
}: Props) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,.15)]">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-black">
          {dealer.name}
        </h2>

        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${
            dealer.status === "official"
              ? "bg-green-600 text-white"
              : "bg-yellow-600 text-black"
          }`}
        >
          {dealer.status === "official"
            ? "OFFICIAL"
            : "PARTNER"}
        </span>

      </div>

      <p className="mt-6 text-zinc-400">
        {dealer.address}
      </p>

      <p className="mt-2 text-zinc-500">
        {dealer.province}
      </p>

      <p className="mt-4 text-sm text-zinc-400">
        🕒 {dealer.openHours}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">

        <a
          href={`tel:${dealer.phone}`}
          className="rounded-xl bg-purple-600 px-5 py-3 font-bold transition hover:bg-purple-500"
        >
          📞 Call
        </a>

        {dealer.line && (
          <a
            href={dealer.line}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-zinc-700 px-5 py-3 transition hover:border-green-500"
          >
            LINE
          </a>
        )}

        {dealer.facebook && (
          <a
            href={dealer.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-zinc-700 px-5 py-3 transition hover:border-blue-500"
          >
            Facebook
          </a>
        )}

        <a
          href={dealer.map}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-zinc-700 px-5 py-3 transition hover:border-purple-500"
        >
          Google Maps
        </a>

      </div>

    </div>
  );
}