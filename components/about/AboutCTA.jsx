// /app/components/about/AboutCTA.jsx
export default function AboutCTA() {
  return (
    <section className="py-12 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-3">Ready to bring warmth to someone special?</h3>
        <p className="text-gray-600 mb-6">Browse our handcrafted collection or request a custom order — we love making gifts.</p>
        <div className="flex justify-center gap-4">
          <a href="/product" className="px-6 py-3 bg-black text-white rounded-full">Shop Now</a>
          <a href="/contact" className="px-6 py-3 border rounded-full">Contact Us</a>
        </div>
      </div>
    </section>
  );
}
