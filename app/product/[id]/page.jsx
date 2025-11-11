// app/product/[id]/page.jsx
import productsData from "@/lib/products.json";
import ProductClient from "./ProductClient";
import { notFound } from "next/navigation";

// optional: pre-generate static pages (returns string ids)
export async function generateStaticParams() {
  return productsData.products.map((p) => ({ id: String(p.id) }));
}

// make the page async so we can await params if it's a Promise
export default async function ProductPage({ params }) {
  // unwrap params (works whether params is plain object or a Promise)
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);

  const product = productsData.products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-rose-50 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <ProductClient product={product} />
      </div>
    </div>
  );
}
