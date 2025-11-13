"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const categories = [
  { title: "Flowers", key: "flower", img: "/products/flower4.webp" },
  { title: "Keychains", key: "keychain", img: "/products/keychain1.webp" },
  { title: "Mobile Pouches", key: "mobile_pouch", img: "/products/mobile3.webp" },
  { title: "Toys", key: "toy", img: "/products/toy1.webp" },
  { title: "Mobile Keychain", key: "mobile_keychain", img: "/products/mobile-chain1.webp" },
  { title: "Bags", key: "bag", img: "/products/mobile1.webp" },
];

export default function CategoriesGrid() {
  const router = useRouter();

  const handleClick = (catKey) => {
    router.push(`/product?category=${catKey}`);
  };

  return (
    <section className="w-full px-4 mt-6 md:mt-10">
      <div className="max-w-md md:max-w-4xl lg:max-w-6xl mx-auto">
        <h4 className="text-base md:text-xl font-semibold mb-3 md:mb-6">
          Categories
        </h4>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-6">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => handleClick(c.key)}
              className="bg-white rounded-xl md:rounded-2xl p-3 md:p-5 flex flex-col items-center justify-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-14 h-14 md:w-20 md:h-20 mb-2 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <Image
                  src={c.img}
                  alt={c.title}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div className="text-xs md:text-sm text-gray-700 font-medium">
                {c.title}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
