import Image from "next/image";
import bagcta from "@/public/bg-cta.jpg";

export default function CTA() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Optional background image overlay */}
      {/* <div className="absolute inset-0 opacity-10">
        <Image
          src={bagcta}
          alt="Backpack pattern"
          fill
          className="object-cover"
        />
      </div> */}

      <div className="relative max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Elevate Your Carry?
        </h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Discover the perfect balance of style, comfort, and function with ClassyPack.
          Your everyday backpack, reimagined.
        </p>

        <button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
          Shop Now
        </button>
      </div>
    </section>
  );
}
