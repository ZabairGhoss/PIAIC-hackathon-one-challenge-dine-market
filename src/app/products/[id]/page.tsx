import Quantity from "@/components/Quantity";
import { Button } from "@/components/ui/button";
import { Products } from "@/utils/mocks";
import { ShoppingCart } from "lucide-react";
import Image, { StaticImageData } from "next/image";

const getProductDetails = (id: number) => {
  return Products.filter((product) => product.id == id);
};

const sizes = ["xs", "s", "m", "l", "xl"];

const page = ({ params }: { params: { id: number } }) => {
  const result = getProductDetails(params.id);

  return (
    <div className="flex flex-wrap mt-[32px]">
      {result.map((product) => {
        return (
          <div key={product.id} className="flex justify-between gap-6">
            <div>
              <Image src={product.img} alt={product.title} />
            </div>
            <div>
              <div>
                <h1 className="text-2xl">{product.title}</h1>
                <h2 className="text-base font-semibold text-gray-400">
                  {product.tagline}
                </h2>
              </div>
              <div>
                <h3 className="uppercase text-xs font-bold mt-6">
                  select size
                </h3>
                <div className="flex gap-x-3">
                  {sizes.map((size) => {
                    return (
                      <div
                        key={size}
                        className="w-6 h-6 border rounded-full duration-300 hover:shadow-xl mt-2 cursor-pointer flex justify-center items-center"
                      >
                        <span className="uppercase text-[12px] font-bold text-gray-600">
                          {size}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex gap-x-3 mt-6 items-center">
                  <h3 className="capitalize text-[12px] font-semibold">
                    quantity:
                  </h3>
                  <Quantity />
                </div>
                <div className="mt-5 center gap-x-3">
                  <Button className="bg-[#000] text-[#fff] py-2 px-10">
                    <ShoppingCart />
                    <span className="ml-2">Add to Cart</span>
                  </Button>
                  <h2 className="text-xl font-bold">{`$${product.price.toFixed(
                    2
                  )}`}</h2>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default page;
