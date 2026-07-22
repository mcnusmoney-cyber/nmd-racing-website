import { Product } from "@/types/product";

type FilterOptions = {
  search?: string;
  category?: string;
  color?: string;
  sort?: string;
};

export default function filterProducts(
  products: Product[],
  options: FilterOptions
) {
  let result = [...products];

  if (options.search) {
    const keyword = options.search.toLowerCase();

    result = result.filter(
      (product) =>
        product.name.toLowerCase().includes(keyword) ||
        product.model.toLowerCase().includes(keyword) ||
        product.description.toLowerCase().includes(keyword)
    );
  }

  if (options.category) {
    result = result.filter(
      (product) => product.category === options.category
    );
  }

  if (options.color) {
    result = result.filter((product) =>
      product.colors.some(
        (color) =>
          color.name.toLowerCase() ===
          options.color?.toLowerCase()
      )
    );
  }

  switch (options.sort) {
    case "price-low":
      result.sort(
        (a, b) =>
          (a.price ?? 0) -
          (b.price ?? 0)
      );
      break;

    case "price-high":
      result.sort(
        (a, b) =>
          (b.price ?? 0) -
          (a.price ?? 0)
      );
      break;

    case "rating":
      result.sort(
        (a, b) =>
          (b.rating ?? 0) -
          (a.rating ?? 0)
      );
      break;

    case "reviews":
      result.sort(
        (a, b) =>
          (b.reviews ?? 0) -
          (a.reviews ?? 0)
      );
      break;

    default:
      break;
  }

  return result;
}