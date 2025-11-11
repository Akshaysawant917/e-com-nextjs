// /app/components/about/AboutTeam.jsx
import Image from "next/image";
import maker1 from "/public/backpack.webp";
import maker2 from "/public/backpack.webp";

const team = [
  { name: "aaaa", role: "Founder & Lead Maker", img: maker1, bio: "Designer & handcraft enthusiast. Loves colorwork and tiny details." },
  { name: "aaaa", role: "Production Lead", img: maker2, bio: "Organizes small-batch runs and ensures every stitch is perfect." },
];

export default function AboutTeam() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Meet The Makers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {team.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 flex gap-4 items-start shadow-sm">
              <div className="w-20 h-20 relative rounded-xl overflow-hidden flex-shrink-0">
                <Image src={t.img} alt={t.name} fill className="object-cover" />
              </div>
              <div className="text-left">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-gray-500 mb-2">{t.role}</div>
                <div className="text-sm text-gray-600">{t.bio}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
