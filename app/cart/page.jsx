// app/cart/page.jsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Heart, Trash2 } from "lucide-react";

const FALLBACK = [
  { id: 1, name: "Amigurumi Bunny", price: 799, qty: 1, img: "/products/flower3.webp" },
  { id: 2, name: "Chunky Wool Scarf", price: 1299, qty: 2, img: "/products/toy2.webp" },
  { id: 3, name: "Crochet Coasters (set of 4)", price: 499, qty: 1, img: "/products/flower3.webp" },
];

function formatINR(value) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(value);
}

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("kalactive_cart");
      const parsed = raw ? JSON.parse(raw) : FALLBACK;
      setCart(parsed);
    } catch (err) {
      setCart(FALLBACK);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (loading) return;
    localStorage.setItem("kalactive_cart", JSON.stringify(cart));
  }, [cart, loading]);

  function updateQty(id, delta) {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item))
        .filter(Boolean)
    );
  }

  function removeItem(id) {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  const subtotal = useMemo(() => cart.reduce((s, it) => s + it.price * it.qty, 0), [cart]);
  const shipping = subtotal === 0 || subtotal > 1999 ? 0 : 99;
  const total = subtotal + shipping;

  function handleCheckout() {
    alert(`Proceeding to checkout — total: ${formatINR(total)}\n(This is a demo)`);
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center py-24 bg-rose-50">
        <div className="text-gray-500">Loading your cozy cart...</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-rose-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Grid: left items (span 2 on md) + right summary (span 1 on md) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Cart items (md:col-span-2) */}
          <section className="md:col-span-2 bg-white rounded-3xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Your cart</h2>
                <p className="text-sm text-gray-500 mt-1">{cart.length} item{cart.length !== 1 ? "s" : ""}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => { if (confirm("Clear cart?")) clearCart(); }}
                  className="text-sm text-gray-500 hover:text-rose-600"
                >
                  Clear cart
                </button>
              </div>
            </div>

            {cart.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-gray-600 mb-6">Your cart is empty — let’s fill it with handmade goodness ✨</p>
                <a
                  href="/shop"
                  className="inline-block bg-rose-600 text-white px-6 py-3 rounded-full shadow hover:bg-rose-500 transition"
                >
                  Shop Kalactive
                </a>
              </div>
            ) : (
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:items-center gap-4 border rounded-2xl p-4 hover:shadow-md transition-shadow"
                  >
                    {/* Image */}
                    <div className="w-full sm:w-28 h-28 relative rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                      <Image src={item.img} alt={item.name} fill className="object-cover" sizes="112px" />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="font-semibold text-gray-800 truncate">{item.name}</h3>
                          <p className="text-sm text-gray-500 mt-1">{formatINR(item.price)}</p>
                        </div>

                        <div className="text-right">
                          <div className="text-sm text-gray-500">Total</div>
                          <div className="font-semibold text-gray-800">{formatINR(item.price * item.qty)}</div>
                        </div>
                      </div>

                      <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-2 py-1">
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, -1)}
                            className="w-8 h-8 grid place-items-center rounded-full hover:bg-gray-200"
                            aria-label={`Decrease ${item.name} quantity`}
                          >
                            −
                          </button>
                          <div className="px-4 font-medium">{item.qty}</div>
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, 1)}
                            className="w-8 h-8 grid place-items-center rounded-full hover:bg-gray-200"
                            aria-label={`Increase ${item.name} quantity`}
                          >
                            +
                          </button>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="flex items-center gap-2 text-sm text-rose-600 hover:underline"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 className="w-4 h-4" /> Remove
                          </button>

                          <button
                            type="button"
                            onClick={() => alert("Added to wishlist (demo)")}
                            className="p-2 rounded-full hover:bg-gray-100"
                            aria-label={`Favorite ${item.name}`}
                          >
                            <Heart className="w-5 h-5 text-rose-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Right: Summary (desktop) */}
          <aside className="hidden md:block">
            <div className="bg-white rounded-3xl shadow-lg p-6 sticky top-8 w-80">
              <h3 className="text-lg font-semibold mb-4">Order summary</h3>

              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatINR(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : formatINR(shipping)}</span>
                </div>

                <div className="border-t pt-4 flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-500">Total</div>
                    <div className="text-2xl font-bold">{formatINR(total)}</div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    disabled={cart.length === 0}
                    className="px-6 py-3 bg-rose-600 text-white rounded-full font-semibold disabled:opacity-50"
                    aria-label="Checkout"
                  >
                    Checkout
                  </button>
                </div>
              </div>

              <p className="text-xs text-gray-400 mt-4">Secure payment • Easy returns • Free shipping over ₹1999</p>
            </div>
          </aside>

          {/* Mobile-only summary card (shown under cart items) */}
          <div className="md:hidden">
            <div className="bg-white rounded-2xl shadow p-4 mt-4">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <div className="text-sm text-gray-500">Subtotal</div>
                  <div className="font-semibold text-gray-800">{formatINR(subtotal)}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Shipping</div>
                  <div className="font-medium text-gray-700">{shipping === 0 ? "Free" : formatINR(shipping)}</div>
                </div>
              </div>

              <div className="border-t pt-3 flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500">Total</div>
                  <div className="text-lg font-bold">{formatINR(total)}</div>
                </div>

                <div className="flex items-center gap-2">
                  <a href="/shop" className="text-sm text-gray-600 px-3 py-2 rounded-full hover:bg-gray-100">Continue</a>
                  <button
                    onClick={handleCheckout}
                    disabled={cart.length === 0}
                    className="px-4 py-2 bg-rose-600 text-white rounded-full font-semibold disabled:opacity-50"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky checkout bar */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[92%] md:hidden">
        <div className="bg-white rounded-full shadow-lg p-3 flex items-center justify-between gap-4">
          <div>
            <div className="text-xs text-gray-500">Total</div>
            <div className="font-semibold text-gray-800">{formatINR(total)}</div>
          </div>
          <div className="flex items-center gap-3">
            <a href="/shop" className="text-sm text-gray-600 px-4 py-2 rounded-full hover:bg-gray-100">Continue shopping</a>
            <button
              onClick={handleCheckout}
              disabled={cart.length === 0}
              className="px-4 py-2 bg-rose-600 text-white rounded-full font-semibold disabled:opacity-50"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
