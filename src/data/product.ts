import { Product } from "@/app.type";

export const products: Product[] = [
  {
    id: "bo-huc",
    title: "Bò Húc",
    price: 20000,
    unit: "lon",
    images: ["/assets/products/bo-huc.webp"],
    category: "drinks"
  },
  {
    id: "sting",
    title: "Sting",
    unit: "lon",

    price: 20000,
    images: ["/assets/products/bo-huc.webp"],
    category: "drinks"
  },
  {
    id: "khau-trang-y-te",
    title: "Khẩu trang y tế",
    price: 20000,
    images: ["/assets/products/khau-trang-y-te.png"],
    category: "drinks",
    unit: "hộp"
  }
];
