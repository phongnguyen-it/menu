import { Metadata } from "next";
import { SEO } from "@/app.conf";
import dynamic from "next/dynamic";
import { products } from "@/data/product";
import "./menu.style.scss";
import Divider from "antd/es/divider";
import Row from "antd/es/row";
import Col from "antd/es/col";

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
            <Row gutter={[24, 24]}>
              {products
                .filter((x) => x.category === "drinks")
                .map((prod) => {
                  return (
                    <Col key={prod.id} xs={24} sm={12} md={8} lg={8} xxl={6}>
                      <ProductCard product={prod} />
                    </Col>
                  );
                })}
            </Row>
          </section>
        </section>

        <section className={"products-container"}>
          <Divider>
            <h2 className={"product-category-title"}>Ăn vặt</h2>
          </Divider>

          <section className={"products-list"}>
            <Row gutter={[24, 24]}>
              {products
                .filter((x) => x.category === "snacks")
                .map((prod, ind) => {
                  return (
                    <Col key={prod.id} xs={24} sm={12} md={8} lg={8} xxl={6}>
                      <ProductCard product={prod} />
                    </Col>
                  );
                })}
            </Row>
          </section>
        </section>

        <section className={"products-container"}>
          <Divider>
            <h2 className={"product-category-title"}>Thức ăn</h2>
          </Divider>

          <section className={"products-list"}>
            <Row gutter={[24, 24]}>
              {products
                .filter((x) => x.category === "food")
                .map((prod, ind) => {
                  return (
                    <Col key={prod.id} xs={24} sm={12} md={8} lg={8} xxl={6}>
                      <ProductCard product={prod} />
                    </Col>
                  );
                })}
            </Row>
          </section>
        </section>

        <section className={"products-container"}>
          <Divider>
            <h2 className={"product-category-title"}>Vật dụng</h2>
          </Divider>

          <section className={"products-list"}>
            <Row gutter={[24, 24]}>
              {products
                .filter((x) => x.category === "items")
                .map((prod) => {
                  return (
                    <Col key={prod.id} xs={24} sm={12} md={8} lg={8} xxl={6}>
                      <ProductCard product={prod} />
                    </Col>
                  );
                })}
            </Row>
          </section>
        </section>
      </section>
    </main>
  );
}
