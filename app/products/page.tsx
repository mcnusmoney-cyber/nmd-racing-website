import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandStory from "@/components/home/BrandStory";
import WhyChoose from "@/components/home/WhyChoose";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <main className="bg-black text-white">

      <Hero />

      <FeaturedProducts />

      <BrandStory />

      <WhyChoose />

      <CTA />
            <div className="relative overflow-hidden">

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,.08),transparent_55%)]" />

      </div>

    </main>
  );
}
