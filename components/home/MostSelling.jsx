"use client";
import Image from "next/image";
import productsData from "@/lib/products.json";
import { useRouter } from "next/navigation";

function formatINR(value) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(value);
}

export default function MostSelling() {
    const router = useRouter();
  const deals = productsData.products.slice(4, 7);

  return (
    <section className="w-full px-4 mt-14">
      <div className="max-w-md md:max-w-4xl lg:max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h4 className="text-lg md:text-xl font-bold text-gray-800">
            Most Loved Crochet Picks 💕
          </h4>
          <a
            href="/shop"
            className="text-sm text-rose-600 hover:text-rose-500 transition-colors"
          >
            See All
          </a>
        </div>

        {/* Product Grid */}
        <div className="flex gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible">
          {deals.map((d) => (
            <article
              key={d.id}
              className="min-w-[220px] md:min-w-0 bg-white rounded-3xl shadow-sm p-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-rose-100"
            >
              {/* Image - square */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-50">
                <Image
                  src={d.images?.[0] ?? "/images/placeholder.jpg"}
                  alt={d.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product info */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="text-base font-semibold text-gray-800 line-clamp-1">
                    {d.name}
                  </div>
                  <div className="text-gray-500 text-sm">{formatINR(d.price)}</div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <button
                    aria-label={`Favorite ${d.name}`}
                    className="text-gray-400 hover:text-rose-500 text-sm md:text-base transition-colors"
                  >
                    ♡
                  </button>

                  <button
                    aria-label={`Buy ${d.name}`}
                    className="bg-rose-600 hover:bg-rose-500 text-white px-4 py-1.5 rounded-full text-sm font-medium transition"
                      onClick={() => router.push(`/product/${d.id}`)}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
