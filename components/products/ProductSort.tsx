type SortOption =
  | "featured"
  | "price-low"
  | "price-high"
  | "rating";

type Props = {
  value: SortOption;
  onChange: (value: SortOption) => void;
};

export default function ProductSort({
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) =>
        onChange(e.target.value as SortOption)
      }
      className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-4 outline-none transition focus:border-purple-500"
    >
      <option value="featured">Featured</option>
      <option value="price-low">
        Price : Low to High
      </option>
      <option value="price-high">
        Price : High to Low
      </option>
      <option value="rating">
        Highest Rating
      </option>
    </select>
  );
}