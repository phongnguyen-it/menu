import React from "react";
import Link from "next/link";
import { APP_ROUTE } from "@/app.const";
import Button from "antd/es/button";
import Result from "antd/es/result";

type IProps = {};

const NotFoundPage = (props: IProps) => {
  return (
    <section className={"section"}>
      <Result
        status="404"
        title="404"
        subTitle="Xin lỗi bạn nhiều nha, trang bạn truy cập hiện đang không tìm thấy"
        extra={
          <Link href={APP_ROUTE.HOME}>
            <Button type={"primary"} id={"go-back-home"}>
              Trở về
            </Button>
          </Link>
        }
      />
    </section>
  );
};

export default NotFoundPage;
