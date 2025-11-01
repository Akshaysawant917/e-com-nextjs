export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-200 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">ClassyPack</h2>
          <p className="text-sm text-gray-400">Modern backpacks for work, travel & life.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/product" className="hover:text-white">Product</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <p className="text-sm text-gray-400">Instagram | Twitter | Facebook</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} ClassyPack. All rights reserved.
      </div>
    </footer>
  );
}
