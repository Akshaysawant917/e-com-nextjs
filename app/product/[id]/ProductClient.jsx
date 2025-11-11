// app/product/[id]/ProductClient.jsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import productsData from "@/lib/products.json";

/* ---------- helpers ---------- */
function formatINR(v) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(v);
}
function calcDiscount(oldPrice, price) {
  if (!oldPrice) return null;
  const diff = oldPrice - price;
  return Math.round((diff / oldPrice) * 100);
}

/* ---------- component ---------- */
export default function ProductClient({ product }) {
  const [mainIdx, setMainIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [toast, setToast] = useState(null); // { msg, visible }
  const images = product.images && product.images.length ? product.images : ["/images/placeholder.jpg"];

  // related: pick up to 4 from same category excluding self
  const related = useMemo(() => {
    return (productsData.products || [])
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  // auto-hide toast
  useEffect(() => {
    if (!toast?.visible) return;
    const t = setTimeout(() => setToast(null), 2400);
    return () => clearTimeout(t);
  }, [toast]);

  function showToast(msg) {
    setToast({ msg, visible: true });
  }

  function addToCart(silent = false) {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem("kalactive_cart") : null;
      const cart = raw ? JSON.parse(raw) : [];
      const existing = cart.find((i) => i.id === product.id);
      if (existing) {
        existing.qty = existing.qty + qty;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          qty,
          image: images[0],
        });
      }
      localStorage.setItem("kalactive_cart", JSON.stringify(cart));
      if (!silent) showToast(`${qty} × ${product.name} added to cart`);
    } catch (err) {
      console.error(err);
      showToast("Could not add to cart — check console");
    }
  }

  const discount = calcDiscount(product.compareAt, product.price);

  return (
    <div className="space-y-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Breadcrumb + product container */}
        <nav className="text-sm text-gray-500 mb-2" aria-label="Breadcrumb">
          <ol className="inline-flex items-center gap-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li>/</li>
            <li><a href="/shop" className="hover:underline">Shop</a></li>
            <li>/</li>
            <li className="text-gray-700">{product.name}</li>
          </ol>
        </nav>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* LEFT: Hero image + thumbnails */}
          <div>
            <div className="relative w-full h-[520px] rounded-2xl overflow-hidden border bg-white">
              <Image
                src={images[mainIdx]}
                alt={`${product.name} image ${mainIdx + 1}`}
                fill
                className="object-contain p-6"
                priority
              />
              <div className="absolute left-4 top-4 bg-rose-50 text-rose-600 px-3 py-1 rounded-full text-xs font-medium shadow">
                Handmade
              </div>
              <div className="absolute left-4 bottom-4 bg-black/40 text-white text-xs px-2 py-1 rounded">{product.name}</div>
            </div>

            <div className="mt-4 flex items-center gap-3 overflow-auto">
              {images.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setMainIdx(i)}
                  aria-label={`Show image ${i + 1}`}
                  className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border transition-shadow ${
                    mainIdx === i ? "ring-2 ring-rose-400" : "hover:shadow-md"
                  }`}
                >
                  <Image src={src} alt={`${product.name} thumb ${i + 1}`} fill className="object-cover" sizes="80px" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Details and actions */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800">{product.name}</h1>

              <div className="mt-2 flex items-center gap-3">
                <span className="text-sm text-gray-500">{String(product.category ?? "").replaceAll("_", " ")}</span>

                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill={i < (product.rating ?? 4) ? "currentColor" : "none"} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" d="M12 .587l3.668 7.431L24 9.748l-6 5.847L19.335 24 12 20.013 4.665 24 6 15.595 0 9.748l8.332-1.73z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews ?? 12} reviews)</span>
                </div>
              </div>

              <div className="mt-4 flex items-end gap-4">
                <div className="text-2xl md:text-3xl font-extrabold text-rose-600">{formatINR(product.price)}</div>
                {product.compareAt && (
                  <div className="text-sm text-gray-400 line-through">{formatINR(product.compareAt)}</div>
                )}
                {discount && <div className="text-sm bg-rose-100 text-rose-600 px-2 py-1 rounded-full">{discount}% off</div>}
              </div>

              <p className="text-gray-600 mt-4">{product.description ?? "Lovingly handcrafted crochet item — perfect as a gift or decor."}</p>

              <div className="mt-4 flex flex-wrap gap-3">
                {product.attributes &&
                  Object.entries(product.attributes).map(([k, v]) => (
                    <div key={k} className="text-xs text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
                      <strong className="mr-1 text-gray-800">{k}:</strong>
                      {String(v)}
                    </div>
                  ))}

                <div className="text-xs text-rose-600 border border-rose-100 px-3 py-1 rounded-full">Handmade</div>
                <div className="text-xs text-rose-600 border border-rose-100 px-3 py-1 rounded-full">Eco yarn</div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-full overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="px-4 py-2 text-lg"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <div className="px-6 py-2 font-medium">{qty}</div>
                  <button
                    type="button"
                    onClick={() => setQty((q) => q + 1)}
                    className="px-4 py-2 text-lg"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => addToCart()}
                  className="bg-rose-600 hover:bg-rose-500 text-white px-6 py-3 rounded-full font-semibold shadow-md transition transform active:scale-95"
                  aria-label="Add to cart"
                  type="button"
                >
                  Add to cart
                </button>

                <button
                  type="button"
                  onClick={() => {
                    addToCart(true);
                    window.location.href = "/cart";
                  }}
                  className="border border-rose-600 text-rose-600 px-4 py-3 rounded-full font-semibold"
                >
                  Buy now
                </button>
              </div>

              <div className="mt-3 text-sm text-gray-400">Free shipping for orders above ₹1999 • Dispatch in 1–2 business days</div>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">You might also like</h3>
              <a href={`/shop?category=${product.category}`} className="text-sm text-rose-600">See all</a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((p) => (
                <a key={p.id} href={`/product/${p.id}`} className="block bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition">
                  <div className="relative w-full h-40 rounded-md overflow-hidden">
                    <Image src={p.images?.[0] ?? "/images/placeholder.jpg"} alt={p.name} fill className="object-cover" />
                  </div>
                  <div className="mt-2 text-sm font-medium text-gray-800">{p.name}</div>
                  <div className="text-sm text-gray-500">{formatINR(p.price)}</div>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Simple toast (no external lib) */}
      <div
        aria-live="polite"
        className={`fixed right-4 bottom-6 z-50 transition-all duration-300 ${
          toast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        {toast && (
          <div className="bg-rose-600 text-white px-5 py-3 rounded-full shadow-lg">
            {toast.msg}
          </div>
        )}
      </div>
    </div>
  );
}
