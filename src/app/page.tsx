import { Button } from "antd";
import Link from "next/link";
import { APP_ROUTE } from "@/app.const";
import "./app.scss";

export default function Home() {
  return (
    <main className={"main"}>
      <h1>HƯƠNG XUÂN QUÁN</h1>

      <section className={"mg-top-24"}>
        <Link href={APP_ROUTE.MENU}>
          <Button>Xem thực đơn</Button>
        </Link>
      </section>
    </main>
  );
}
