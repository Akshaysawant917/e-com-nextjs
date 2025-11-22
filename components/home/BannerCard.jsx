import Image from "next/image";
import banner from "/public/products/hero-bg-removed.png";

export default function BannerCard() {
  return (
    <div className="max-w-md md:max-w-4xl lg:max-w-6xl mx-auto px-4 mt-4 md:mt-10">
      <div className="relative bg-gradient-to-br from-pink-400 to-rose-500 text-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:flex md:items-center md:justify-between">
        {/* ---- Left: Text ---- */}
        <div className="p-5 md:p-10 lg:p-16 md:w-3/4">
          <h3 className="text-lg md:text-3xl lg:text-4xl font-semibold md:font-bold tracking-tight">
            Handcrafted with Love ❤️
          </h3>
          <p className="text-sm md:text-lg text-rose-100/90 mt-2 md:mt-4 max-w-72 ">
            Discover beautiful handmade crochet creations — flowers, keychains, toys & more by Kalactive.
          </p>
          <a
            href="/product"
            className="inline-block mt-4 md:mt-6 bg-white text-rose-600 px-4 py-2 md:px-6 md:py-3 rounded-full font-medium shadow hover:scale-105 hover:bg-rose-50 transition-transform"
          >
            Explore Collection
          </a>
        </div>

        {/* ---- Right: Image ---- */}
        <div className="absolute md:static right-[-20px] top-5 w-30 h-28 md:w-1/4 md:h-full">
          <Image
            src={banner}
            alt="Kalactive crochet handmade products banner"
            className="object-contain md:object-cover md:object-right"
            // fill 
            width={300}
            priority
          />
        </div>

        {/* ---- Dots (only mobile) ---- */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 md:hidden">
          <span className="w-2 h-2 rounded-full bg-white/80" />
          <span className="w-2 h-2 rounded-full bg-white/40" />
          <span className="w-2 h-2 rounded-full bg-white/40" />
        </div>
      </div>
    </div>
  );
}
