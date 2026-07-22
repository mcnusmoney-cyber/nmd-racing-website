import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChoose from "@/components/home/WhyChoose";
import Technology from "@/components/home/Technology";
import DealerNetwork from "@/components/home/DealerNetwork";
import RiderGallery from "@/components/home/RiderGallery";
import BecomeDealer from "@/components/home/BecomeDealer";
import BrandStory from "@/components/home/BrandStory";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      <Header />

      <Hero />

      <FeaturedProducts />

      <WhyChoose />

      <Technology />

      <BrandStory />

      <DealerNetwork />

      <RiderGallery />

      <BecomeDealer />

      <Footer />

    </main>
  );
}