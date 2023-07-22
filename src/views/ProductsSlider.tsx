import { StaticImageData } from "next/image";
import ProductCard from "@/components/ProductCard";
import { Products } from "@/utils/mocks";

type Props = {};

const ProductsSlider = (props: Props) => {
  const featuredProducts = Products.slice(0, 3);

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
        {featuredProducts.map((product) => {
          return (
            <ProductCard
              key={product.id}
              imgURL={product.img}
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
