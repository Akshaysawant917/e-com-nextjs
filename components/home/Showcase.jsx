import Image from "next/image";
import product1 from "@/public/products/couple1.webp";
import product2 from "@/public/products/toy2.webp";
import product3 from "@/public/products/flower4.webp";

export default function Showcase() {
  return (
    <section className="py-14 ">
      <div className="max-w-6xl mx-auto px-2 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Handmade Beauty, Crafted for You
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          From cozy crochet toys to delicate accessories — every Kalactive piece is handcrafted 
          with love, care, and creativity to brighten your day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Big Image (main showcase) */}
          <div className="md:col-span-2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg group">
            <Image
              src={product1}
              alt="Kalactive handmade crochet product showcase"
              fill
              className="object-contain md:object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Two small side images */}
          <div className="flex flex-col gap-6">
            <div className="relative h-[240px] rounded-2xl overflow-hidden shadow-md group">
              <Image
                src={product2}
                alt="Kalactive crochet toy"
                fill
                className="object-contain md:object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="relative h-[240px] rounded-2xl overflow-hidden shadow-md group">
              <Image
                src={product3}
                alt="Kalactive couple crochet set"
                fill
                className="object-contain md:object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
