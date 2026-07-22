import DealerSearch from "./DealerSearch";

type Props = {
  keyword: string;
  total: number;
  onKeywordChange: (value: string) => void;
};

export default function DealerToolbar({
  keyword,
  total,
  onKeywordChange,
}: Props) {
  return (
    <div className="mb-12 space-y-5">

      <DealerSearch
        value={keyword}
        onChange={onKeywordChange}
      />

      <p className="text-sm text-zinc-500">
        {total} Dealer{total !== 1 ? "s" : ""}
      </p>

    </div>
  );
}