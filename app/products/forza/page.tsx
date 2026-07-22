import ProductHero from "@/components/products/ProductHero";

export default function ForzaPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <ProductHero
        name="NMD RONIN VI"
        subtitle="Premium CNC 10-Spoke Y Design Wheel"
        description="Premium CNC motorcycle wheels designed for riders who demand strength, lightweight performance and premium styling. Developed specifically for Honda FORZA riders."

        images={[
          "/products/ronin-vi-forza/black.webp",
          "/products/ronin-vi-forza/silver.webp",
          "/products/ronin-vi-forza/gold.webp",
          "/products/ronin-vi-forza/blue.webp",
          "/products/ronin-vi-forza/green.webp",
          "/products/ronin-vi-forza/red.webp",
          "/products/ronin-vi-forza/purple.webp",
          "/products/ronin-vi-forza/pink.webp",
        ]}

        colors={[
          {
            name: "Black",
            hex: "#111111",
          },
          {
            name: "Silver",
            hex: "#C0C0C0",
          },
          {
            name: "Gold",
            hex: "#D4AF37",
          },
          {
            name: "Blue",
            hex: "#0057FF",
          },
          {
            name: "Green",
            hex: "#00A651",
          },
          {
            name: "Red",
            hex: "#D50000",
          },
          {
            name: "Purple",
            hex: "#7D26CD",
          },
          {
            name: "Pink",
            hex: "#FF4FA3",
          },
        ]}
      />
    </main>
  );
}