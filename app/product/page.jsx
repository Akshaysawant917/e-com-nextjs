import ProductGallery from "../../components/ProductGallery";
import ProductInfo from "../../components/ProductInfo";
import { product } from "../../lib/data";

export default function ProductPage() {
  return (
    <main>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* left: gallery */}
          <ProductGallery images={product.images} />

          {/* right: product info (client) */}
          <ProductInfo product={product} />
        </div>

        {/* Extra details below */}
        <div className="mt-12 prose max-w-none">
          <h3>About the product</h3>
          <p>{product.description}</p>

          <h4 className="mt-6">Specs & Features</h4>
          <ul className="list-disc list-inside space-y-2">
            {product.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
