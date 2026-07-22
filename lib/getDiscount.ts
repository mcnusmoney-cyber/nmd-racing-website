export function getDiscount(
  price: number,
  salePrice?: number
) {
  if (!salePrice) return 0;

  return Math.round(
    ((price - salePrice) / price) * 100
  );
}