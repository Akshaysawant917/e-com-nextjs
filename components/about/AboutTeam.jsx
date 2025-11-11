import Image from "next/image";
import maker1 from "/public/products/flower1.webp"; // replace with real Kalactive team photo
import maker2 from "/public/products/flower1.webp"; // replace with real Kalactive team photo

const team = [
  {
    name: "example",
    role: "Founder & Crochet Artist",
    img: maker1,
    bio: "The heart behind Kalactive — passionate about creating handmade crochet art that spreads warmth and color in every home.",
  },
  {
    name: "Creative Partner",
    role: "Design & Quality Lead",
    img: maker2,
    bio: "Supports pattern design and ensures every crochet piece meets Kalactive’s signature quality and charm.",
  },
];

export default function AboutTeam() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">
          Meet The <span className="text-rose-600">Makers</span>
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Behind every Kalactive creation is a small, passionate team dedicated to the art of crochet — blending creativity, patience, and love.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {team.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md border border-rose-100 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-32 h-32 relative rounded-full overflow-hidden shadow-md mb-4">
                <Image src={t.img} alt={t.name} fill className="object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
              <p className="text-sm text-rose-600 font-medium mb-2">{t.role}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
