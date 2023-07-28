import ProductCard from "@/components/ProductCard";
import { Products } from "@/utils/mocks";
import { StaticImageData } from "next/image";

const AllProducts = () => {
  return (
    <div className="flex flex-wrap justify-evenly mt-[32px]">
      {Products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            imgURL={product.img as StaticImageData}
            title={product.title}
            price={product.price}
            category={product.category}
            id={product.id}
          />
        );
      })}
    </div>
  );
};

export default AllProducts;
