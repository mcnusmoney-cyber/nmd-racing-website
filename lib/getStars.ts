export function getStars(rating: number) {
  return "★".repeat(Math.round(rating));
}