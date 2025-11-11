// /app/components/about/AboutValues.jsx
import { Heart, Leaf, Clock } from "lucide-react";

const values = [
  { icon: <Heart className="w-6 h-6 text-pink-600" />, title: "Craft & Care", desc: "Every piece is hand-stitched with attention to detail." },
  { icon: <Leaf className="w-6 h-6 text-emerald-600" />, title: "Sustainable Materials", desc: "We choose natural and recycled yarns whenever possible." },
  { icon: <Clock className="w-6 h-6 text-gray-700" />, title: "Slow Fashion", desc: "Small batches that celebrate longevity over trends." }
];

export default function AboutValues() {
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Our Values</h2>
        <p className="text-gray-600 mb-8">We believe beautiful products come from thoughtful practices.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="mb-4">{v.icon}</div>
              <h3 className="font-semibold mb-2">{v.title}</h3>
              <p className="text-gray-600 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
