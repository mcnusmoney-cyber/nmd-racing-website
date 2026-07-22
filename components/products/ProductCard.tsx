import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductCard({
  product,
}: Props) {
  const displayPrice =
    product.salePrice ??
    product.price ??
    0;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 hover:border-purple-500 transition"
    >
      <div className="relative aspect-square bg-black">
        <Image
          src={product.images?.[0] || "/placeholder.webp"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[3px] text-purple-400">
          {product.brand}
        </p>

        <h3 className="mt-2 text-2xl font-black text-white">
          {product.name}
        </h3>

        <p className="mt-1 text-zinc-400">
          {product.model}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-3xl font-black text-purple-400">
            ฿{displayPrice.toLocaleString("th-TH")}
          </span>

          {product.badge && (
            <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase">
              {product.badge}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}