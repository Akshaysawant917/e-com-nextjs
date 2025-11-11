import { Heart, HandHeart, Leaf, Sparkles } from "lucide-react";

const features = [
  {
    icon: <HandHeart className="w-8 h-8 text-rose-500" />,
    title: "Handcrafted with Love",
    desc: "Each product is carefully crocheted by artisans — unique, detailed, and full of warmth.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-rose-500" />,
    title: "One-of-a-Kind Designs",
    desc: "Beautiful crochet patterns that bring charm and creativity to your everyday life.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-rose-500" />,
    title: "Eco-Friendly Threads",
    desc: "We use sustainable, cruelty-free yarn that’s gentle on your skin and the planet.",
  },
  {
    icon: <Heart className="w-8 h-8 text-rose-500" />,
    title: "Made with Passion",
    desc: "Kalactive is powered by creativity and love for handmade art — made just for you.",
  },
];

export default function Highlights() {
  return (
    <section className="py-16 mt-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Crafted for Crochet Lovers
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Every Kalactive creation is handmade to perfection — cozy, sustainable, and
          made to bring joy to your space.
        </p>

        {/* Features Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-200"
            >
              <div className="p-4 bg-rose-100 rounded-full">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
