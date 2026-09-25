import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChoose from "@/components/home/WhyChoose";
import RiderGallery from "@/components/home/RiderGallery";
import DealerNetwork from "@/components/home/DealerNetwork";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden bg-black text-white">
      <Header />
      <Hero />
      <FeaturedProducts />
      <WhyChoose />
      <RiderGallery />
      <DealerNetwork />
      <CTA />
      <Footer />
    </main>
  );
}
