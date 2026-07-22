import { formatPrice } from "@/lib/formatPrice";
import { getDiscount } from "@/lib/getDiscount";

type Props = {
  price: number;
  salePrice?: number;
};

export default function ProductPrice({
  price,
  salePrice,
}: Props) {
  const discount = getDiscount(price, salePrice);

  if (!salePrice) {
    return (
      <h3 className="text-4xl font-black text-purple-400">
        {formatPrice(price)}
      </h3>
    );
  }

  return (
    <div className="space-y-2">

      <div className="flex items-center gap-3">

        <span className="text-4xl font-black text-purple-400">
          {formatPrice(salePrice)}
        </span>

        <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold">
          -{discount}%
        </span>

      </div>

      <p className="text-zinc-500 line-through">
        {formatPrice(price)}
      </p>

    </div>
  );
}