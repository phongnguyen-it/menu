import {Metadata} from "next";
import {SEO} from "@/app.conf";

export const metadata: Metadata = {
  title: `Thực đơn`,
  description: SEO.description,
  keywords: SEO.keywords
}

export default async function MenuPage() {
  return (
    <main className={"page-container"}>
      <h1>Thực đơn tại Hương Xuân</h1>
    </main>
  )
}
