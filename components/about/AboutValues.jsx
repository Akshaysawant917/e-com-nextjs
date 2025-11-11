import { Heart, Leaf, Sparkles } from "lucide-react";

const values = [
  {
    icon: <Heart className="w-8 h-8 text-rose-500" />,
    title: "Crafted with Love",
    desc: "Every crochet piece is handmade with patience, care, and creativity — no two are ever the same.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-emerald-600" />,
    title: "Eco-Friendly Yarns",
    desc: "We use sustainable, cruelty-free threads to ensure every creation is kind to the planet.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-amber-500" />,
    title: "Made to Last",
    desc: "Quality that stays — each Kalactive product is designed to be durable, cozy, and timeless.",
  },
];

export default function AboutValues() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">
          Our <span className="text-rose-600">Values</span>
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          At Kalactive, we believe that true beauty lies in mindful making — slow, sustainable, and full of love.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-rose-100 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">{v.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{v.title}</h3>
              <p className="text-gray-600 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
