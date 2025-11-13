// components/ShopFilters.jsx
"use client";
import React, { useMemo, useState } from "react";

export default function ShopFilters({
  products,
  filters,
  setFilters,
  onClear,
}) {
  // derive categories from products
  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    return Array.from(set);
  }, [products]);

  const [localMin, setLocalMin] = useState(filters.minPrice ?? "");
  const [localMax, setLocalMax] = useState(filters.maxPrice ?? "");

  const applyPrice = () => {
    const min = localMin === "" ? null : Number(localMin);
    const max = localMax === "" ? null : Number(localMax);
    setFilters((s) => ({ ...s, minPrice: min, maxPrice: max }));
  };

  return (
    <aside className="space-y-4">
      <div>
        <label className="block text-xs font-medium mb-2">Search</label>
        <input
          type="search"
          value={filters.q}
          onChange={(e) => setFilters((s) => ({ ...s, q: e.target.value }))}
          placeholder="Search products..."
          className="w-full rounded-lg border px-3 py-2"
        />
      </div>

      <div>
        <div className="text-xs font-medium mb-2">Category</div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilters((s) => ({ ...s, category: null }))}
            className={`text-sm px-3 py-1 rounded-full border ${
              !filters.category ? "bg-indigo-50 border-indigo-200" : "border-gray-200"
            }`}
          >
            All
          </button>

          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilters((s) => ({ ...s, category: c }))}
              className={`text-sm px-3 py-1 rounded-full border ${
                filters.category === c ? "bg-indigo-50 border-indigo-200" : "border-gray-200"
              } capitalize`}
            >
              {c.replace(/_/g, " ")}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="text-xs font-medium mb-2">Price</div>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="min"
            value={localMin}
            onChange={(e) => setLocalMin(e.target.value)}
            className="w-1/2 rounded-lg border px-3 py-2"
          />
          <input
            type="number"
            placeholder="max"
            value={localMax}
            onChange={(e) => setLocalMax(e.target.value)}
            className="w-1/2 rounded-lg border px-3 py-2"
          />
        </div>

        <div className="mt-2 flex gap-2">
          <button
            onClick={applyPrice}
            className="text-sm px-3 py-1 rounded-lg bg-indigo-600 text-white"
          >
            Apply
          </button>
          <button
            onClick={() => { setLocalMin(""); setLocalMax(""); setFilters((s)=>({ ...s, minPrice: null, maxPrice: null })); }}
            className="text-sm px-3 py-1 rounded-lg border"
          >
            Clear
          </button>
        </div>
      </div>

      <div>
        <div className="text-xs font-medium mb-2">Sort</div>
        <select
          value={filters.sort}
          onChange={(e) => setFilters((s) => ({ ...s, sort: e.target.value }))}
          className="w-full rounded-lg border px-3 py-2"
        >
          <option value="relevance">Relevance</option>
          <option value="price_asc">Price: low to high</option>
          <option value="price_desc">Price: high to low</option>
          <option value="newest">Newest (id)</option>
        </select>
      </div>

      <div>
        <button
          onClick={onClear}
          className="w-full rounded-lg border px-3 py-2 text-sm"
        >
          Reset filters
        </button>
      </div>
    </aside>
  );
}
