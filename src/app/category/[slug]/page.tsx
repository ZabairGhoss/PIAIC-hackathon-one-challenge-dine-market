import ProductCard from "@/components/ProductCard";
import { Products } from "@/utils/mocks";
import { StaticImageData } from "next/image";

const getProductsByCategory = (category: string) => {
  return Products.filter((product) => product.category === category);
};



const page = ({ params }: { params: { slug: string } }) => {
  const result = getProductsByCategory(params.slug);
  return (
    <div className="flex flex-wrap justify-evenly mt-[32px]">
      {result.length <= 0 ? (
        <div>There is no product of {params.slug} added yet.</div>
      ) : (
        result.map((product) => {
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
        })
      )}
    </div>
  );
};

export default page;
