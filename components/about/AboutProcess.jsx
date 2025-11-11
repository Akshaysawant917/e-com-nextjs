import Image from "next/image";
import step1 from "/public/products/flower1.webp"; 
import step2 from "/public/products/keychain1.webp"; 
import step3 from "/public/products/toy1.webp"; 

const steps = [
  {
    title: "Dream & Design",
    text: "Each crochet piece starts with an idea — inspired by everyday beauty, warmth, and comfort.",
    img: step1,
  },
  {
    title: "Select the Yarn",
    text: "We carefully choose soft, sustainable yarns in vibrant hues — because quality begins with the thread.",
    img: step2,
  },
  {
    title: "Handcraft with Love",
    text: "Our skilled artisans crochet each product by hand, ensuring every stitch tells a story of care and creativity.",
    img: step3,
  },
];

export default function AboutProcess() {
  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">
          How We <span className="text-rose-600">Create</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          From imagination to the final thread — every Kalactive piece passes through hands that love the art of crochet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-rose-100 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-full h-52 md:h-60 relative overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
