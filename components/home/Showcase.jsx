import Image from "next/image";
import bag1 from "@/public/backpack.webp"; // main product
import bag2 from "@/public/backpack.webp"; // side angle
import bag3 from "@/public/backpack.webp"; // lifestyle shot

export default function Showcase() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Built to Move with You</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Whether you’re commuting, exploring, or working remotely — ClassyPack blends utility and elegance perfectly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Big Image */}
          <div className="md:col-span-2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg group">
            <Image
              src={bag1}
              alt="Backpack main view"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>

          {/* Two small images */}
          <div className="flex flex-col gap-6">
            <div className="relative h-[240px] rounded-2xl overflow-hidden shadow-md group">
              <Image
                src={bag2}
                alt="Side angle"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[240px] rounded-2xl overflow-hidden shadow-md group">
              <Image
                src={bag3}
                alt="Lifestyle shot"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
