import { Metadata } from "next";
import { SEO } from "@/app.conf";
import dynamic from "next/dynamic";
import { products } from "@/data/product";

const ProductCard = dynamic(() => import("@/components/ProductCard"));

export const metadata: Metadata = {
  title: "Thực đơn",
  description: SEO.description,
  keywords: SEO.keywords
};

export default async function MenuPage() {
  return (
    <main className={"page-container"}>
      <h1>Thực đơn tại Hương Xuân</h1>

      {products.map((prod) => {
        return <ProductCard key={prod.id} product={prod} />;
      })}
    </main>
  );
}
