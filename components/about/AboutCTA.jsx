export default function AboutCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-100 via-rose-50 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          Bring <span className="text-rose-600">Handmade Warmth</span> to Someone Special 🧶
        </h3>
        <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Each Kalactive creation is made with love and care — perfect for gifting, decorating, or simply treating yourself.  
          Choose from our handcrafted collection or request a one-of-a-kind custom design.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="/shop"
            className="px-8 py-3 bg-rose-600 text-white font-medium rounded-full shadow-md hover:bg-rose-500 hover:scale-105 transition-transform"
          >
            Explore Our Collection
          </a>
          <a
            href="/contact"
            className="px-8 py-3 border border-rose-600 text-rose-600 font-medium rounded-full hover:bg-rose-50 hover:scale-105 transition-transform"
          >
            Get in Touch
          </a>
        </div>

        <p className="text-sm text-gray-400 mt-6">
          💌 Custom crochet orders open — make something truly personal with Kalactive.
        </p>
      </div>
    </section>
  );
}
