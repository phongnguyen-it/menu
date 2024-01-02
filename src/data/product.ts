import { Product } from "@/app.type";

export const products: Product[] = [
  {
    id: "coconut",
    title: "Nước dừa",
    price: 15000,
    unit: "trái",
    images: ["/assets/products/nuoc-dua.jpeg"],
    category: "drinks"
  },
  {
    id: "kumquat-coconut",
    title: "Dừa tắc",
    price: 12000,
    unit: "ly",
    images: ["/assets/products/dua-tac-0.png", "/assets/products/dua-tac-1.png"],
    category: "drinks"
  },
  {
    id: "iced-tea",
    title: "Trà đá",
    price: 0,
    unit: "ly",
    images: ["/assets/products/tra-da.jpeg"],
    category: "drinks"
  },
  {
    id: "lipton-tea",
    title: "Trà Lipton",
    price: 10000,
    unit: "ly",
    images: ["/assets/products/tra-lipton.png"],
    category: "drinks"
  },
  {
    id: "bo-huc",
    title: "Bò Húc",
    price: 15000,
    unit: "lon",
    images: ["/assets/products/bo-huc-0.png", "/assets/products/bo-huc.webp"],
    category: "drinks"
  },
  {
    id: "pepsi",
    title: "Pepsi",
    price: 12000,
    unit: "lon",
    images: ["/assets/products/pepsi.png", "/assets/products/pepsi-1.png"],
    category: "drinks"
  },
  {
    id: "sting-dau",
    title: "Sting Dâu",
    unit: "lon",
    price: 12000,
    images: ["/assets/products/sting-0.png", "/assets/products/sting-dau.webp"],
    category: "drinks"
  },

  {
    id: "mi-tom-xao",
    title: "Mì tôm trứng",
    price: 20000,
    images: ["/assets/products/mi-tom-xao.jpeg"],
    category: "food",
    unit: "tô"
  },
  {
    id: "bun-mam-nem",
    title: "Bún mắm nêm",
    price: 30000,
    images: ["/assets/products/bun-mam-nem.jpeg"],
    category: "food",
    unit: "tô"
  },

  {
    id: "dau-phong",
    title: "Đậu phộng",
    price: 6000,
    images: ["/assets/products/dau-phong-da-ca.jpeg"],
    category: "snacks",
    unit: "món"
  },

  {
    id: "keo-cao-su",
    title: "Kẹo Singum",
    price: 10000,
    images: ["/assets/products/cool-air.png", "/assets/products/keo-singum.png"],
    category: "snacks",
    unit: "vĩ"
  },

  {
    id: "khau-trang-y-te",
    title: "Khẩu trang y tế",
    price: 50000,
    images: ["/assets/products/khau-trang-y-te.png"],
    category: "items",
    unit: "hộp"
  },
  {
    id: "bao-li-xi",
    title: "Bao lì xì",
    price: 10000,
    images: ["/assets/products/bao-li-xi.jpeg"],
    category: "items",
    unit: "5 bao"
  }
];
