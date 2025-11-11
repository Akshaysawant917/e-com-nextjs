// /app/components/about/AboutHero.jsx
import Image from "next/image";
import heroImg from "/public/backpack.webp";

export default function AboutHero() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Handcrafted Crochet • Made with Care
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            At <strong>CozyCrochet</strong> we craft timeless crochet pieces — from cozy shawls and baby hats to
            home décor and accessories. Every stitch is made by hand, guided by passion and slow-fashion values.
          </p>

          <ul className="space-y-3 text-gray-600 mb-6">
            <li>• Ethically sourced yarns</li>
            <li>• Limited small-batch collections</li>
            <li>• Custom orders & gift wrapping available</li>
          </ul>

          <a
            href="/product"
            className="inline-block bg-black text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform"
          >
            Shop Our Collection
          </a>
        </div>

        <div className="w-full h-72 sm:h-96 md:h-[420px] relative rounded-2xl overflow-hidden shadow-lg">
          <Image src={heroImg} alt="Handmade crochet items" fill className="object-cover" priority />
        </div>
      </div>
    </section>
  );
}
