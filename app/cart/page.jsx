"use client";

import { useState, useMemo } from "react";

const initialCart = [
  { id: 1, name: "Amigurumi Bunny", price: 799, qty: 1, img: "/images/bunny.jpg" },
  { id: 2, name: "Chunky Wool Scarf", price: 1299, qty: 2, img: "/images/scarf.jpg" },
  { id: 3, name: "Crochet Coasters (set of 4)", price: 499, qty: 1, img: "/images/coasters.jpg" },
];

function formatINR(value) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(value);
}

export default function CartPage() {
  const [cart, setCart] = useState(initialCart);

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

  const subtotal = useMemo(() => cart.reduce((s, it) => s + it.price * it.qty, 0), [cart]);
  const shipping = subtotal > 1999 || subtotal === 0 ? 0 : 99; // simple rule
  const total = subtotal + shipping;

  function handleCheckout() {
    // fake checkout: in real app redirect to payment or create order
    alert(`Checkout — total: ${formatINR(total)}\n(THIS IS A DEMO)`);
  }

  return (
    <main className="min-h-screen bg-rose-50 p-6 flex items-start justify-center">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">

        <section className="md:col-span-2 bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Your cart</h2>

          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty — go add some cozy things! 🧶</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center gap-4 border p-3 rounded-lg">
                  <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-md" />

                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{formatINR(item.price)}</p>

                    <div className="mt-2 flex items-center gap-2">
                      <button aria-label="Decrease" onClick={() => updateQty(item.id, -1)} className="w-8 h-8 rounded-md border grid place-items-center">-</button>
                      <div className="px-3">{item.qty}</div>
                      <button aria-label="Increase" onClick={() => updateQty(item.id, 1)} className="w-8 h-8 rounded-md border grid place-items-center">+</button>

                      <button onClick={() => removeItem(item.id)} className="ml-4 text-sm text-rose-600 underline">Remove</button>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-semibold">{formatINR(item.price * item.qty)}</div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        <aside className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Order summary</h3>

          <div className="flex justify-between text-gray-600 mb-2">
            <span>Subtotal</span>
            <span>{formatINR(subtotal)}</span>
          </div>

          <div className="flex justify-between text-gray-600 mb-4">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : formatINR(shipping)}</span>
          </div>

          <div className="border-t pt-4 flex justify-between items-center">
            <div>
              <div className="text-sm text-gray-600">Total</div>
              <div className="text-xl font-bold">{formatINR(total)}</div>
            </div>

            <button onClick={handleCheckout} disabled={cart.length === 0} className="px-4 py-2 bg-rose-500 text-white rounded-full font-semibold disabled:opacity-50">
              Checkout
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-3">This page uses fake demo data. Integrate with API/localStorage as next step.</p>
        </aside>
      </div>
    </main>
  );
}
