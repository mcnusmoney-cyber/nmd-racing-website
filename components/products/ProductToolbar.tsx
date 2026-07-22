import ProductSearch from "./ProductSearch";
import ProductSort from "./ProductSort";
import ProductCount from "./ProductCount";

type SortOption =
  | "featured"
  | "price-low"
  | "price-high"
  | "rating";

type Props = {
  keyword: string;
  sort: SortOption;
  total: number;
  onKeywordChange: (value: string) => void;
  onSortChange: (value: SortOption) => void;
};

export default function ProductToolbar({
  keyword,
  sort,
  total,
  onKeywordChange,
  onSortChange,
}: Props) {
  return (
    <div className="mb-12 space-y-6">

      <div className="grid gap-5 lg:grid-cols-2">

        <ProductSearch
          value={keyword}
          onChange={onKeywordChange}
        />

        <ProductSort
          value={sort}
          onChange={onSortChange}
        />

      </div>

      <ProductCount total={total} />

    </div>
  );
}