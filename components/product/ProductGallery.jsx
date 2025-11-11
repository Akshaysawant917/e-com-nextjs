// app/components/ProductGallery.jsx
'use client';

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ images = [] }) {
  const [mainIndex, setMainIndex] = useState(0);

  return (
    <div>
      <div className="relative w-full h-[420px] md:h-[560px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={images[mainIndex]}
          alt={`Product image ${mainIndex + 1}`}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="flex gap-3 mt-4 justify-center md:justify-start">
        {images.map((src, idx) => (
          <button
            key={src}
            onClick={() => setMainIndex(idx)}
            className={`w-20 h-20 rounded-lg overflow-hidden border ${idx === mainIndex ? "border-gray-800" : "border-transparent"} transition`}
            aria-label={`View image ${idx + 1}`}
          >
            <div className="relative w-full h-full">
              <Image src={src} alt={`thumb ${idx + 1}`} fill className="object-cover" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
