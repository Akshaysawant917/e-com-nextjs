// app/shop/page.jsx
import productsJson from "@/lib/products.json"; // adjust path if needed
import React from "react";
import ShopClient from "../../components/filter/ShopClient";

export default function product({ searchParams }) {
    const categoryFromURL = searchParams?.category || null;
  return <ShopClient rawProducts={productsJson.products}  defaultCategory={categoryFromURL}/>;
}
