// components/ShopClient.jsx
"use client";
import React, { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import ShopFilters from "./ShopFilters";

export default function ShopClient({ rawProducts = [],defaultCategory = null }) {
  const [filters, setFilters] = useState({
    q: "",
    category: defaultCategory, 
    minPrice: null,
    maxPrice: null,
    sort: "relevance",
  });

  const [visibleCount, setVisibleCount] = useState(9);

  const filtered = useMemo(() => {
    let out = rawProducts.slice();

    // search
    if (filters.q?.trim()) {
      const q = filters.q.toLowerCase();
      out = out.filter((p) => p.name.toLowerCase().includes(q) || (p.category && p.category.toLowerCase().includes(q)));
    }

    // category
    if (filters.category) {
      out = out.filter((p) => p.category === filters.category);
    }

    // price filters
    if (filters.minPrice != null) {
      out = out.filter((p) => p.price >= filters.minPrice);
    }
    if (filters.maxPrice != null) {
      out = out.filter((p) => p.price <= filters.maxPrice);
    }

    // sort
    if (filters.sort === "price_asc") out.sort((a, b) => a.price - b.price);
    else if (filters.sort === "price_desc") out.sort((a, b) => b.price - a.price);
    else if (filters.sort === "newest") out.sort((a, b) => b.id - a.id);

    return out;
  }, [rawProducts, filters]);

  const clearAll = () => {
    setFilters({ q: "", category: null, minPrice: null, maxPrice: null, sort: "relevance" });
  };

  const categoriesCount = useMemo(() => {
    const map = {};
    rawProducts.forEach((p) => {
      map[p.category] = (map[p.category] || 0) + 1;
    });
    return map;
  }, [rawProducts]);

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-1">
        <ShopFilters
          products={rawProducts}
          filters={filters}
          setFilters={setFilters}
          onClear={clearAll}
        />

        <div className="mt-6 text-sm text-gray-600">
          <div>Categories</div>
          <div className="mt-2 flex flex-wrap gap-2">
            <button
              onClick={() => setFilters((s) => ({ ...s, category: null }))}
              className={`px-3 py-1 rounded-full border ${!filters.category ? "bg-indigo-50" : ""}`}
            >
              All ({rawProducts.length})
            </button>
            {Object.entries(categoriesCount).map(([c, cnt]) => (
              <button
                key={c}
                onClick={() => setFilters((s) => ({ ...s, category: c }))}
                className={`px-3 py-1 rounded-full border ${filters.category === c ? "bg-indigo-50" : ""} capitalize`}
              >
                {c.replace(/_/g, " ")} ({cnt})
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="lg:col-span-3">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-gray-600">{filtered.length} product(s)</div>
          <div className="text-sm">
            <button
              onClick={() => {
                setFilters((s) => ({ ...s, sort: s.sort === "price_asc" ? "price_desc" : "price_asc" }));
              }}
              className="px-3 py-1 rounded-lg border text-xs"
            >
              Toggle price sort
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.slice(0, visibleCount).map((p) => (
            <ProductCard key={p.id} product={p} onOpen={(prod)=>alert(`${prod.name} quick view`)} />
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          {visibleCount < filtered.length ? (
            <button
              onClick={() => setVisibleCount((c) => c + 9)}
              className="px-4 py-2 rounded-lg border"
            >
              Load more
            </button>
          ) : (
            filtered.length === 0 ? null : (
              <div className="text-sm text-gray-500">End of results</div>
            )
          )}
        </div>
      </main>
    </div>
  );
}
