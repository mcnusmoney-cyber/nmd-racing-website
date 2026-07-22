import ProductBadge from "./ProductBadge";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";

type Props = {
  brand: string;
  name: string;
  subtitle: string;
  badge?: string;
  rating: number;
  reviews: number;
  price: number;
  salePrice?: number;
};

export default function ProductHeader({
  brand,
  name,
  subtitle,
  badge,
  rating,
  reviews,
  price,
  salePrice,
}: Props) {
  return (
    <div className="space-y-8">

      {badge && (
        <ProductBadge>
  {badge}
</ProductBadge>
      )}

      <div>
        <p className="uppercase tracking-[6px] text-purple-400">
          {brand}
        </p>

        <h1 className="mt-3 text-5xl font-black lg:text-6xl">
          {name}
        </h1>

        <p className="mt-3 text-xl text-zinc-400">
          {subtitle}
        </p>
      </div>

      <ProductRating
        rating={rating}
        reviews={reviews}
      />

      <ProductPrice
        price={price}
        salePrice={salePrice}
      />

    </div>
  );
}