// /app/components/about/AboutProcess.jsx
import Image from "next/image";
import step1 from "/public/backpack.webp";
import step2 from "/public/backpack.webp";
import step3 from "/public/backpack.webp";


const steps = [
  { title: "Design", text: "We sketch and sample each design, focusing on function and form.", img: step1 },
  { title: "Yarn Selection", text: "We pick soft, durable yarns — natural fibers where possible.", img: step2 },
  { title: "Handcraft", text: "Skilled makers stitch every piece, with careful finishing touches.", img: step3 },
];

export default function AboutProcess() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">How We Make It</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border p-4 flex flex-col items-center text-center">
              <div className="w-full h-40 relative rounded-lg overflow-hidden mb-4">
                <Image src={s.img} alt={s.title} fill className="object-cover" />
              </div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
