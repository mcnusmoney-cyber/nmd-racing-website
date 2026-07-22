export function getStatusColor(status: string) {
  switch (status) {
    case "available":
      return "bg-green-600";

    case "coming-soon":
      return "bg-yellow-500";

    default:
      return "bg-zinc-700";
  }
}