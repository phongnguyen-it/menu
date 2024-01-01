import { Metadata } from "next";
import { SEO } from "@/app.conf";
import dynamic from "next/dynamic";
import { products } from "@/data/product";
import "./menu.style.scss";
import { Divider } from "antd";

const ProductCard = dynamic(() => import("@/components/ProductCard"));

export const metadata: Metadata = {
  title: "Thực đơn",
  description: SEO.description,
  keywords: SEO.keywords
};

export default async function MenuPage() {
  return (
    <main className={"main"}>
      <section className={"page-container"}>
        <h1 className={"page-title"}>Thực đơn tại Hương Xuân quán</h1>

        <section className={"products-container"}>
          <Divider>
            <h2 className={"product-category-title"}>Nước uống</h2>
          </Divider>

          <section className={"products-list"}>
            {products
              .filter((x) => x.category === "drinks")
              .map((prod, ind) => {
                return <ProductCard key={prod.id + ind} product={prod} />;
              })}
          </section>
        </section>

        <section className={"products-container"}>
          <Divider>
            <h2 className={"product-category-title"}>Thức ăn</h2>
          </Divider>

          <section className={"products-list"}>
            {products
              .filter((x) => x.category === "food")
              .map((prod, ind) => {
                return <ProductCard key={prod.id + ind} product={prod} />;
              })}
          </section>
        </section>

        <section className={"products-container"}>
          <Divider>
            <h2 className={"product-category-title"}>Vật dụng</h2>
          </Divider>

          <section className={"products-list"}>
            {products
              .filter((x) => x.category === "items")
              .map((prod, ind) => {
                return <ProductCard key={prod.id + ind} product={prod} />;
              })}
          </section>
        </section>
      </section>
    </main>
  );
}
