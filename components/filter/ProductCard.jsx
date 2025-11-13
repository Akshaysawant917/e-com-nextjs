// components/ProductCard.jsx
"use client";
import Image from "next/image";
import React from "react";

export default function ProductCard({ product, onOpen }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition p-0">
      <div className="relative w-full h-56 sm:h-44">
        <Image
          src={product.images?.[0] ?? "/images/placeholder.jpg"}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="p-3">
        <h3 className="text-sm font-semibold line-clamp-2">{product.name}</h3>

        <div className="mt-2 flex items-center justify-between">
          <div className="text-lg font-bold">₹{product.price}</div>
          <button
            onClick={() => onOpen?.(product)}
            className="text-xs px-3 py-1 rounded-full border border-gray-200 hover:bg-gray-50"
          >
            Quick view
          </button>
        </div>

        <div className="mt-3 text-xs text-gray-500 flex items-center justify-between">
          <span className="capitalize">{product.category.replace(/_/g, " ")}</span>
          <span>#{product.id}</span>
        </div>
      </div>
    </article>
  );
}
