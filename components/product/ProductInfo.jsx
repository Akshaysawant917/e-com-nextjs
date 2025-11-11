// app/components/ProductInfo.jsx
'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function saveCart(cart) {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (e) {
    console.error("Cart save error", e);
  }
}

function getCart() {
  try {
    const raw = localStorage.getItem("cart");
    return raw ? JSON.parse(raw) : { items: [] };
  } catch (e) {
    return { items: [] };
  }
}

export default function ProductInfo({ product }) {
  const router = useRouter();
  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = getCart();
    const count = cart.items.reduce((s, it) => s + (it.quantity || 0), 0);
    setCartCount(count);
  }, []);

  function handleAddToCart() {
    setAdding(true);
    const cart = getCart();

    const existing = cart.items.find((i) => i.id === product.id);
    if (existing) {
      existing.quantity = (existing.quantity || 0) + qty;
    } else {
      cart.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0],
        quantity: qty
      });
    }

    saveCart(cart);
    setCartCount(cart.items.reduce((s, it) => s + it.quantity, 0));
    setTimeout(() => setAdding(false), 500);
  }

  function handleBuyNow() {
    // ensure item in cart then navigate to checkout
    const cart = getCart();
    const existing = cart.items.find((i) => i.id === product.id);
    if (!existing) {
      cart.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0],
        quantity: qty
      });
    } else {
      existing.quantity = (existing.quantity || 0) + qty;
    }

    saveCart(cart);
    router.push("/checkout"); // static checkout page to be implemented
  }

  return (
    <div className="flex flex-col justify-start">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <div className="text-sm text-gray-500">Cart: <span className="font-medium">{cartCount}</span></div>
      </div>

      <p className="text-gray-600 mb-6">{product.short}</p>

      <div className="text-2xl font-semibold mb-6">{product.currency} {product.price}</div>

      <div className="flex items-center gap-4 mb-6">
        <label className="text-sm text-gray-700">Quantity</label>
        <div className="flex items-center border rounded-md overflow-hidden">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="px-3 py-2"
            aria-label="Decrease quantity"
          >−</button>
          <div className="px-5 py-2 bg-white text-sm">{qty}</div>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="px-3 py-2"
            aria-label="Increase quantity"
          >+</button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleAddToCart}
          disabled={adding}
          className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition"
        >
          {adding ? "Adding..." : "Add to Cart"}
        </button>

        <button
          onClick={handleBuyNow}
          className="px-8 py-3 border border-gray-800 text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Buy Now
        </button>
      </div>

      <div className="mt-8 text-sm text-gray-600">
        <strong>Delivery:</strong> Estimated 3–7 business days. <br />
        <strong>Return policy:</strong> 14-day returns.
      </div>
    </div>
  );
}
