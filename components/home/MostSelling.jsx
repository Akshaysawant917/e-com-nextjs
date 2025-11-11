import Image from "next/image";
import productsData from "@/lib/products.json";

function formatINR(value) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(value);
}

export default function MostSelling() {  
  const deals = productsData.products.slice(4, 7);

  return (
    <section className="w-full px-4 mt-6">
      <div className="max-w-md md:max-w-4xl lg:max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-base md:text-lg font-semibold">Most Selling Itemss</h4>
          <a href="/deals" className="text-sm text-rose-600">See All</a>
        </div>

        {/* Horizontal scroll on mobile; grid on md+ */}
        <div className="flex gap-3 overflow-x-auto pb-3 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
          {deals.map((d) => (
            <article
              key={d.id}
              className="min-w-[180px] md:min-w-0 bg-white rounded-2xl shadow-sm p-3 md:p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="relative w-full h-36 md:h-48 rounded-lg overflow-hidden mb-3">
                <Image
                  src={d.images?.[0] ?? "/images/placeholder.jpg"}
                  alt={d.name}
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>

              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="text-sm md:text-base font-medium">{d.name}</div>
                  <div className="text-gray-500 text-sm md:text-sm">{formatINR(d.price)}</div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <button
                    aria-label={`Favorite ${d.name}`}
                    className="text-gray-600 text-sm md:text-base"
                  >
                    ♡
                  </button>

                  <button
                    aria-label={`Buy ${d.name}`}
                    className="bg-rose-600 text-white px-3 py-1 rounded-full text-sm md:text-sm"
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
