"use client";

import Image from "next/image";
import { useState } from "react";

type Color = {
  name: string;
  hex: string;
};

type Props = {
  images: string[];
  colors: Color[];
};

export default function ProductGallery({
  images,
  colors,
}: Props) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-6">
      {/* Main Image */}
      <div className="relative aspect-square rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950">
        <Image
          src={selectedImage}
          alt="NMD Racing"
          fill
          priority
          className="object-contain p-8"
        />
      </div>

      {/* Color Selector */}
      <div>
        <h3 className="text-sm uppercase tracking-widest text-zinc-500 mb-4">
          Available Colors
        </h3>

        <div className="flex flex-wrap gap-4">
          {colors.map((color, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(images[index])}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="w-12 h-12 rounded-full border-2 border-white"
                style={{
                  backgroundColor: color.hex,
                }}
              />

              <span className="text-xs text-zinc-400">
                {color.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Thumbnail */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950"
          >
            <Image
              src={image}
              alt={`gallery-${index}`}
              fill
              className="object-contain p-3"
            />
          </button>
        ))}
      </div>
    </div>
  );
}