import Image from "next/image";

const categories = [
  { title: "Mobile", img: "/backpack.webp" },
  { title: "Headphone", img: "/backpack.webp" },
  { title: "Tablets", img: "/backpack.webp" },
  { title: "Laptop", img: "/backpack.webp" },
  { title: "Speakers", img: "/backpack.webp" },
  { title: "More", img: "/backpack.webp" },
];

export default function CategoriesGrid() {
  return (
    <section className="w-full px-4 mt-6 md:mt-10">
      <div className="max-w-md md:max-w-4xl lg:max-w-6xl mx-auto">
        <h4 className="text-base md:text-xl font-semibold mb-3 md:mb-6">
          Categories
        </h4>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-6">
          {categories.map((c) => (
            <button
              key={c.title}
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
