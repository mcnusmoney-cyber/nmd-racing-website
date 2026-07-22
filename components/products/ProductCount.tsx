type Props = {
  total: number;
};

export default function ProductCount({
  total,
}: Props) {
  return (
    <div className="text-sm text-zinc-500">
      {total} Product{total !== 1 ? "s" : ""} Found
    </div>
  );
}