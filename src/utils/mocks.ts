import { Product } from "./types";
import P1 from "@/../public/assets/products-image/p1.png";
import P2 from "@/../public/assets/products-image/p2.png";
import P3 from "@/../public/assets/products-image/p3.png";
import P4 from "@/../public/assets/products-image/p4.png";

export const Products: Product[] = [
  {
    id: 1,
    title: "Product 01",
    price: 999,
    tagline: "Sweater",
    category: "female",
    img: P1,
  },
  {
    id: 2,
    title: "Product 02",
    price: 999,
    tagline: "Dress",
    category: "male",
    img: P2,
  },
  {
    id: 3,
    title: "Product 03",
    price: 999.05,
    tagline: "Sweater",
    category: "female",
    img: P3,
  },
  {
    id: 4,
    title: "Product 04",
    price: 999,
    tagline: "Pants",
    category: "kids",
    img: P4,
  },
  {
    id: 5,
    title: "Product 05",
    price: 999,
    tagline: "Sweater",
    category: "female",
    img: P3,
  },
  {
    id: 6,
    title: "Product 06",
    price: 399,
    tagline: "Dress",
    category: "male",
    img: P2,
  },
  {
    id: 7,
    title: "Product 07",
    price: 599,
    tagline: "Sweater",
    category: "male",
    img: P1,
  },
  {
    id: 8,
    title: "Product 08",
    price: 499,
    tagline: "Pants",
    category: "kids",
    img: P4,
  },
];
