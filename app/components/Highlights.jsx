import { Diamond, Droplets, Backpack, Leaf } from "lucide-react";

const features = [
  {
    icon: <Diamond className="w-8 h-8 text-gray-900" />,
    title: "Premium Quality",
    desc: "Crafted with top-grade materials that ensure durability and style for years.",
  },
  {
    icon: <Backpack className="w-8 h-8 text-gray-900" />,
    title: "Smart Storage",
    desc: "Thoughtfully designed compartments for your laptop, travel gear, and essentials.",
  },
  {
    icon: <Droplets className="w-8 h-8 text-gray-900" />,
    title: "Water Resistant",
    desc: "Protects your valuables from rain or accidental spills during your adventures.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-gray-900" />,
    title: "Eco Friendly",
    desc: "Made using sustainable, cruelty-free materials that care for the planet.",
  },
];

export default function Highlights() {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Designed for Modern Life</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Every ClassyPack backpack is built to match your pace — elegant, practical, and ready for anything.
        </p>

        {/* Features Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center space-y-3 p-6 bg-white/60 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <div className="p-4 bg-gray-100 rounded-full">{f.icon}</div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
