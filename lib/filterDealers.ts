import { Dealer } from "@/types/dealer";

export function filterDealers(
  dealers: Dealer[],
  keyword: string
) {
  const query = keyword.trim().toLowerCase();

  if (!query) return dealers;

  return dealers.filter((dealer) =>
    [
      dealer.name,
      dealer.province,
      dealer.address,
    ]
      .join(" ")
      .toLowerCase()
      .includes(query)
  );
}