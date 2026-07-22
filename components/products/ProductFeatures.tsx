import { ProductFeature } from "@/types/product";

type Props = {
  features: ProductFeature[];
};

export default function ProductFeatures({
  features,
}: Props) {
  return (
    <div className="space-y-3">

      {features.map((feature) => (
        <div
          key={feature.title}
          className="rounded-xl border border-zinc-800 bg-zinc-900 p-4"
        >
          ✓ {feature.title}
        </div>
      ))}

    </div>
  );
}