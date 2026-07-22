import Link from "next/link";
import ProductGallery from "./ProductGallery";
import { ProductColor } from "@/types/product";

type Props = {
  name: string;
  subtitle: string;
  description: string;
  images: string[];
  colors: ProductColor[];
};

export default function ProductHero({
  name,
  subtitle,
  description,
  images,
  colors,
}: Props) {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* Gallery */}
        <ProductGallery
          images={images}
          colors={colors}
        />

        {/* Product Info */}
        <div>

          <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            Premium CNC Wheel
          </span>

          <h1 className="mt-6 text-5xl font-black">
            {name}
          </h1>

          <h2 className="mt-2 text-3xl font-bold text-purple-400">
            {subtitle}
          </h2>

          <p className="mt-8 leading-8 text-zinc-400">
            {description}
          </p>

          {/* Features */}
          <div className="mt-10 space-y-4">
            <Feature text="Premium CNC Machining" />
            <Feature text="10-Spoke Y Design" />
            <Feature text="Diamond Cut Two Tone Finish" />
            <Feature text="Lightweight Performance Structure" />
            <Feature text="1 Year Warranty" />
            <Feature text="Designed For FORZA & XMAX" />
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">

            <Link
              href="https://lin.ee/smCEE9x"
              target="_blank"
              className="rounded-2xl bg-purple-600 px-8 py-4 text-center font-bold transition hover:bg-purple-700"
            >
              Contact Nomad
            </Link>

            <Link
              href="/products"
              className="rounded-2xl border border-zinc-700 px-8 py-4 text-center font-bold transition hover:border-purple-500"
            >
              View All Products
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}

function Feature({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-2 w-2 rounded-full bg-purple-500" />
      <span className="text-zinc-300">
        {text}
      </span>
    </div>
  );
}