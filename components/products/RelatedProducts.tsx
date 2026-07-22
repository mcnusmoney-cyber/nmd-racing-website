import ProductCard from "@/components/products/ProductCard";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { products } from "@/data/products";

type Props = {
  currentSlug: string;
};

export default function RelatedProducts({
  currentSlug,
}: Props) {
  const related = products.filter(
    (p) => p.slug !== currentSlug
  );

  return (
    <Section className="pt-10">
      <Container>

        <Heading
          subtitle="NMD Racing"
          title="Related Products"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {related.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}