import Image from "next/image";
import heroImg from "/public/products/toy1.webp"; // you can swap this later with a real crochet photo

export default function AboutHero() {
  return (
    <section className="w-full bg-gradient-to-b from-rose-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* ---- Left: Text ---- */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-gray-800">
            Handcrafted with Love • <span className="text-rose-600">Made by Kalactive</span>
          </h1>

          <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
            At <strong className="text-rose-600">Kalactive</strong>, we celebrate the beauty of handmade crochet.
            Each piece is designed with creativity, care, and comfort in mind — from cute toys and chic pouches to elegant flowers and accessories.
          </p>

          <ul className="space-y-3 text-gray-600 mb-6">
            <li>🧶 100% Handmade crochet creations</li>
            <li>🌱 Crafted with eco-friendly, premium yarns</li>
            <li>🎁 Perfect for gifts, decor, and self-love</li>
          </ul>

          <a
            href="/shop"
            className="inline-block bg-rose-600 hover:bg-rose-500 text-white px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105 font-medium"
          >
            Explore Our Collection
          </a>
        </div>

        {/* ---- Right: Image ---- */}
        <div className="w-full h-72 sm:h-96 md:h-[420px] relative rounded-3xl overflow-hidden shadow-xl">
          <Image
            src={heroImg}
            alt="Handcrafted crochet art by Kalactive"
            // fill
            className="object-contain md:object-cover"
            priority
          />
          {/* soft gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-rose-100/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
