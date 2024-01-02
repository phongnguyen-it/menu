import Link from "next/link";
import { APP_ROUTE } from "@/app.const";
import "./app.scss";
import Button from "antd/es/button";
import Image from "next/image";
import { SEO } from "@/app.conf";
import React from "react";

export default async function Home() {
  return (
    <main className={"main"}>
      <section className="page">
        <h1>HƯƠNG XUÂN QUÁN</h1>

        <section className={"mg-top-24"}>
          <Link href={APP_ROUTE.MENU}>
            <Button type="primary">Xem thực đơn</Button>
          </Link>
        </section>

        <section className={"mg-top-24"}>
          <Image
            className={"product-photo"}
            src={"/HuongXuanBangHieu.jpg"}
            width={1024}
            priority={true}
            height={1024}
            style={{ width: "100%", height: "auto", maxHeight: "70%" }}
            alt={`Bảng hiệu Hương Xuân quán ${SEO.alt_key}`}
          />
        </section>
      </section>
    </main>
  );
}
