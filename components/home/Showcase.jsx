import Image from "next/image";
import productsData from "@/lib/products.json";

export default function Showcase() {
  // pick 5 images (fallback to placeholders)
  const items = (productsData.products || []).slice(0, 5).map((p) => ({
    id: p.id,
    name: p.name,
    img: p.images?.[0] ?? "/images/placeholder.jpg",
  }));

  const hero = items[0];
  const others = items.slice(1);

  return (
    <section className="py-14 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Handmade Beauty, Crafted for You</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            From cozy toys to delicate accessories — every Kalactive piece is handcrafted with love to brighten your day.
          </p>
        </div>

        {/* Mosaic grid: hero (left) + 4 tiles (right) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Hero image (taller) */}
          <div className="md:col-span-2 relative rounded-3xl overflow-hidden shadow-lg">
            <div className="relative w-full h-[520px] bg-gray-100">
              <Image
                src={hero?.img ?? "/images/placeholder.jpg"}
                alt={hero?.name ?? "Kalactive product"}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>

            <div className="absolute left-6 bottom-6 bg-rose-600/90 text-white px-4 py-2 rounded-full font-medium shadow-lg">
              {hero?.name}
            </div>
          </div>

          {/* Right mosaic */}
          <div className="grid grid-rows-2 grid-cols-2 gap-4">
            {others.map((it, i) => (
              <a
                key={it.id}
                href={`/product/${it.id}`}
                className="relative rounded-2xl overflow-hidden shadow-md group block"
                aria-label={it.name}
              >
                <div className="relative w-full h-full aspect-square bg-gray-50">
                  <Image
                    src={it.img}
                    alt={it.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 45vw, 20vw"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute left-3 bottom-3 text-white text-sm font-medium drop-shadow-sm">
                  {it.name}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href="/shop"
            className="inline-block bg-rose-600 hover:bg-rose-500 text-white px-6 py-3 rounded-full font-medium shadow-md transition-transform hover:-translate-y-0.5"
          >
            Explore the Collection
          </a>
        </div>
      </div>
    </section>
  );
}
