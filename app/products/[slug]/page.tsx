import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = products.find(
    (item) => item.slug === params.slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Product Images */}
          <div>
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-900">
              <Image
                src={product.images?.[0] || "/placeholder.png"}
                alt={product.name}
                fill
                className="object-contain p-6"
              />
            </div>

            <div className="grid grid-cols-4 gap-4 mt-4">
              {product.images?.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800"
                >
                  <Image
                    src={image}
                    alt={`${product.name}-${index}`}
                    fill
                    className="object-contain p-3"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="text-sm text-zinc-400 mb-2">
              {product.category}
            </div>

            <h1 className="text-5xl font-bold mb-6">
              {product.name}
            </h1>

            <div className="text-4xl font-bold text-fuchsia-500 mb-6">
              ฿{product.price.toLocaleString()}
            </div>

            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Colors */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                Available Colors
              </h3>

              <div className="flex flex-wrap gap-3">
                {product.colors?.map((color: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800"
                  >
                    {typeof color === "string" ? (
                      <span>{color}</span>
                    ) : (
                      <>
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{
                            backgroundColor: color.hex,
                          }}
                        />
                        <span>{color.name}</span>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-fuchsia-600 hover:bg-fuchsia-700 px-8 py-4 rounded-xl font-semibold"
              >
                Contact Dealer
              </Link>

              <Link
                href="/products"
                className="border border-zinc-700 px-8 py-4 rounded-xl font-semibold"
              >
                Back
              </Link>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}