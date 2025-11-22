"use client";
import Link from "next/link";
import { useState } from "react";
import { Search, Camera, ShoppingCart, Menu, X } from "lucide-react";
import Image from "next/image";


export default function Navbar({ cartCount = 0 }) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-transparent">
      {/* MOBILE HEADER */}
      <div className="md:hidden px-4 pb-3 pt-0">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between gap-3">
            {/* Search box */}
            <button
              type="button"
              className="ml-2 bg-white p-2 rounded-full shadow-sm"
              onClick={() => setOpen((s) => !s)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
            </button>

            {/* <div className="flex gap-4"> */}
            {/* Cart icon */}

            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Kalactive Logo"
                width={120}
                height={40}
                className="w-auto h-20 object-contain"
                priority
              />
            </Link>

            <Link href="/cart" className="relative" aria-label="Open cart">
              <div className="bg-white p-2 rounded-full shadow-sm">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
              </div>
              {cartCount > 0 && (
                <div className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs px-2 py-0.5 rounded-full">
                  {cartCount}
                </div>
              )}
            </Link>
            {/* Mobile menu toggle */}

            {/* </div> */}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center bg-white rounded-2xl shadow-sm px-3 py-2">
            <Search className="w-5 h-5 text-gray-400" aria-hidden />
            <input
              className="ml-3 placeholder-gray-400 outline-none w-full text-sm bg-transparent"
              placeholder="Search Kalactive"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-label="Search products"
            />
            <button type="button" className="ml-2" aria-label="Camera search">
              <Camera className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-4 py-3" role="dialog" aria-modal="true">
          <div className="flex flex-col gap-3">
            <Link href="/" className="py-2" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/product" className="py-2" onClick={() => setOpen(false)}>Shop</Link>
            <Link href="/about" className="py-2" onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" className="py-2" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}

      {/* DESKTOP HEADER */}
      <div className="hidden md:block">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center justify-between py-4">
            {/* Brand + search */}
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Kalactive Logo"
                  width={120}
                  height={40}
                  className="w-auto h-20 object-contain"
                  priority
                />
              </Link>


              <div className="hidden lg:flex items-center bg-white rounded-full shadow px-4 py-2 w-[520px]">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  className="ml-3 placeholder-gray-400 outline-none w-full text-sm bg-transparent"
                  placeholder="Search products, collections..."
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  aria-label="Search products"
                />
                <button type="button" className="ml-2" aria-label="Camera search">
                  <Camera className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Links & cart */}
            <div className="flex items-center gap-6">
              <nav className="hidden lg:flex items-center gap-6 text-sm">
                <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
                <Link href="/product" className="hover:text-rose-600 transition-colors">Shop</Link>
                <Link href="/about" className="hover:text-rose-600 transition-colors">About</Link>
                <Link href="/contact" className="hover:text-rose-600 transition-colors">Contact</Link>
              </nav>

              <Link href="/cart" className="relative" aria-label="Open cart">
                <div className="bg-white p-2 rounded-full shadow-sm">
                  <ShoppingCart className="w-5 h-5 text-gray-700" />
                </div>
                {cartCount > 0 && (
                  <div className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs px-2 py-0.5 rounded-full">
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
