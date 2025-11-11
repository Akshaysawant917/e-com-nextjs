'use client';
import Link from "next/link";
import { useState } from "react";
import { Search, Camera, ShoppingCart, Menu } from "lucide-react";

export default function MobileNavbar({ cartCount = 0 }) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-transparent">
      {/* ---- MOBILE HEADER: show only on small screens ---- */}
      <div className="md:hidden px-4 pt-safe pb-3 pt-4">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-3">
            {/* Search box */}
            <div className="flex-1">
              <div className="flex items-center bg-white rounded-2xl shadow-sm px-3 py-2">
                <Search className="w-5 h-5 text-gray-400" aria-hidden />
                <input
                  className="ml-3 placeholder-gray-400 outline-none w-full text-sm"
                  placeholder="Search"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  aria-label="Search products"
                />
                <button className="ml-2" aria-label="Camera search">
                  <Camera className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Cart icon */}
            <Link href="/cart" className="relative">
              <div className="bg-white p-2 rounded-full shadow-sm">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
              </div>
              {cartCount > 0 && (
                <div className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                  {cartCount}
                </div>
              )}
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="ml-2 bg-white p-2 rounded-full shadow-sm"
              onClick={() => setOpen(!open)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-4 py-3">
          <div className="flex flex-col gap-3">
            <Link href="/" className="py-2">Home</Link>
            <Link href="/product" className="py-2">Product</Link>
            <Link href="/about" className="py-2">About</Link>
            <Link href="/contact" className="py-2">Contact</Link>
          </div>
        </div>
      )}

      {/* ---- DESKTOP HEADER: hidden on small screens, visible on md+ ---- */}
      <div className="hidden md:block">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center justify-between py-4">
            {/* Brand + search */}
            <div className="flex items-center gap-6">
              <Link href="/" className="text-xl font-semibold">
                ClassyPack
              </Link>

              <div className="hidden lg:flex items-center bg-white rounded-full shadow px-4 py-2 w-[520px]">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  className="ml-3 placeholder-gray-400 outline-none w-full text-sm"
                  placeholder="Search products, collections, categories..."
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  aria-label="Search products"
                />
                <button className="ml-2" aria-label="Camera search">
                  <Camera className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Links & cart */}
            <div className="flex items-center gap-6">
              <nav className="hidden lg:flex items-center gap-6 text-sm">
                <Link href="/" className="hover:text-gray-700">Home</Link>
                <Link href="/product" className="hover:text-gray-700">Product</Link>
                <Link href="/about" className="hover:text-gray-700">About</Link>
                <Link href="/contact" className="hover:text-gray-700">Contact</Link>
              </nav>

              <Link href="/cart" className="relative">
                <div className="bg-white p-2 rounded-full shadow-sm">
                  <ShoppingCart className="w-5 h-5 text-gray-700" />
                </div>
                {cartCount > 0 && (
                  <div className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {cartCount}
                  </div>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
