export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-rose-100 via-rose-50 to-white border-t border-rose-200 ">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* ---- Brand Section ---- */}
        <div>
          <h2 className="text-2xl font-extrabold text-rose-600 mb-2">Kalactive</h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
            Handcrafted crochet creations made with love and care — bringing warmth, color, and creativity into every home.
          </p>
        </div>

        {/* ---- Quick Links ---- */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-rose-600 transition-colors">Home</a></li>
            <li><a href="/shop" className="hover:text-rose-600 transition-colors">Shop</a></li>
            <li><a href="/about" className="hover:text-rose-600 transition-colors">About</a></li>
            <li><a href="/contact" className="hover:text-rose-600 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* ---- Social Links ---- */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Follow Us</h3>
          <p className="text-sm text-gray-600 mb-3">Stay inspired — join our handmade journey 💖</p>
          <div className="flex gap-4 text-gray-500">
            <a href="https://instagram.com" target="_blank" className="hover:text-rose-600 transition-colors">Instagram</a>
            <a href="https://facebook.com" target="_blank" className="hover:text-rose-600 transition-colors">Facebook</a>
            <a href="https://pinterest.com" target="_blank" className="hover:text-rose-600 transition-colors">Pinterest</a>
          </div>
        </div>
      </div>

      {/* ---- Bottom Bar ---- */}
      <div className="text-center text-xs text-gray-500 border-t border-rose-100 py-4">
        © {new Date().getFullYear()} <span className="text-rose-600 font-semibold">Kalactive</span>.  
        All rights reserved • Made with 💕 in India.
      </div>
    </footer>
  );
}
