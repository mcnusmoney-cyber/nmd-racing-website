import { getStars } from "@/lib/getStars";

type Props = {
  rating: number;
  reviews: number;
};

export default function ProductRating({
  rating,
  reviews,
}: Props) {
  return (
    <div className="flex items-center gap-3">

      <span className="text-yellow-400">
        {getStars(rating)}
      </span>

      <span className="text-zinc-400">
        {reviews} Reviews
      </span>

    </div>
  );
}