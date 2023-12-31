import React from "react";
import { Product } from "@/app.type";

type ProductCardProps = {
  product: Product;
};
export default async function ProductCard(props: ProductCardProps) {
  const { id, title, price, images } = props.product;
  return (
    <article className={"product-card"} data-product-id={id} data-product-title={title}>
      <h1>{title}</h1>
    </article>
  );
}
