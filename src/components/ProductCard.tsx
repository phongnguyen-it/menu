import React from "react";
import Image from "next/image";
import { Product } from "@/app.type";
import { SEO } from "@/app.conf";
import { fPrice } from "@/utils/Format";
import Ribbon from "antd/es/badge/Ribbon";

type ProductCardProps = {
  product: Product;
};
export default function ProductCard(props: ProductCardProps) {
  const { id, title, price, images, unit } = props.product;

  const isShowBadge = price === 0 ? "Free" : "";

  if (!props) return <React.Fragment />;
  return (
    <article
      title={`Sản phẩm ${title} ${SEO.alt_key}`}
      className={"product-card"}
      data-product-id={id}
      data-product-title={title}
    >
      <Ribbon text={isShowBadge} style={{ display: isShowBadge ? "block" : "none" }} color="green">
        <Image
          className={"product-photo"}
          src={images[0]}
          width={420}
          priority={true}
          height={280}
          style={{ width: "100%" }}
          alt={`Sản phẩm ${title} ${SEO.alt_key}`}
        />
      </Ribbon>

      <div className={"p-card-info"}>
        <h2 className={"product-title"} title={title}>
          {title}
        </h2>

        {price === 0 ? (
          <h3 className={"product-price"} title={`Miễn phí sản phẩm ${title}`}>
            Miễn phí
          </h3>
        ) : (
          <h3 className={"product-price"} title={`${price}/${unit}`}>
            {fPrice(price)} / {unit}
          </h3>
        )}
      </div>
    </article>
  );
}
