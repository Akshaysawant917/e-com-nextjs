import Image from "next/image";
import backpackImg from "@/public/backpack.webp"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-24 ">
      {/* Left Content */}
      <div className="max-w-lg space-y-6 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
          The <span className="text-gray-700">Perfect Backpack</span> <br />
          for Every Journey
        </h1>
        <p className="text-gray-600 text-lg">
          Designed for modern explorers — combining elegance, durability, and smart organization for your daily adventures.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="/product"
            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
          >
            View Product
          </a>
          <a
            href="/about"
            className="border border-gray-800 text-gray-800 px-8 py-3 rounded-full hover:bg-gray-800 hover:text-white transition"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <div className="relative w-[300px] h-[380px] md:w-[450px] md:h-[520px]">
          <Image
            src={backpackImg}
            alt="Classy modern backpack"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
