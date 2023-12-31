import React from "react";
import Image from "next/image";
import { Product } from "@/app.type";
import { SEO } from "@/app.conf";
import { fPrice } from "@/utils/Format";

type ProductCardProps = {
  product: Product;
};
export default async function ProductCard(props: ProductCardProps) {
  const { id, title, price, images, unit } = props.product;
  return (
    <article className={"product-card"} data-product-id={id} data-product-title={title}>
      <Image className={"product-photo"} src={images[0]} width={220} height={180} alt={`Sản phẩm ${title} ${SEO.alt_key}`} />

      <div className={"p-card-info"}>
        <h2 title={title}>{title}</h2>
        <h3 title={`${price}/${unit}`}>
          {fPrice(price)} / {unit}
        </h3>
      </div>
    </article>
  );
}
