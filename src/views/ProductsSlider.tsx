import { StaticImageData } from "next/image";
import ProductCard from "@/components/ProductCard";
import P1 from "@/../public/assets/products-image/p1.png";
import P2 from "@/../public/assets/products-image/p2.png";
import P3 from "@/../public/assets/products-image/p3.png";
import P4 from "@/../public/assets/products-image/p4.png";
import prodImg1 from "@/../public/assets/products-image/p1.png";

type Props = {};

const ProductsSlider = (props: Props) => {

    interface Product {
        id: number;
        title: string;
        imgURL: StaticImageData;
        price: number;
      }
    
      const products: Product[] = [
        {
          id: 1,
          title: "Brushed Raglan Sweatshirt",
          imgURL: P1,
          price: 195,
        },
        {
          id: 2,
          title: "Cameryn Sash Tie Dress",
          imgURL: P2,
          price: 545,
        },
        {
          id: 3,
          title: "Flex Sweatshirt",
          imgURL: P3,
          price: 175,
        },
        {
          id: 4,
          title: "Cameryn Sash Tie Dress",
          imgURL: P4,
          price: 1535,
        },
        {
          id: 5,
          title: "Product 5 Test product",
          imgURL: prodImg1,
          price: 7.99,
        },
      ];
    


  return (
    <section className="w-full py-20">
      <div className="flex flex-col gap-5 mb-[32px]">
        <h3 className="uppercase text-center font-bold text-blue-700">
          products
        </h3>
        <h2 className="capitalize text-center font-bold text-4xl">
          checkout what we have
        </h2>
      </div>
      <div className="flex flex-wrap justify-evenly mt-[32px]">
        {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                imgURL={product.imgURL}
                title={product.title}
                price={product.price}
              />
            );
          })}
      </div>
    </section>
  );
};

export default ProductsSlider;
