import Quantity from "@/components/Quantity";
import { Button } from "@/components/ui/button";
import { Products } from "@/utils/mocks";
import ProductOverview from "@/views/ProductOverview";
import { ShoppingCart } from "lucide-react";
import Image, { StaticImageData } from "next/image";

const getProductDetails = (id: number) => {
  return Products.filter((product) => product.id == id);
};

const sizes = ["xs", "s", "m", "l", "xl"];

const page = ({ params }: { params: { id: number } }) => {
  const result = getProductDetails(params.id);

  return (
    <div className="flex flex-wrap mt-[32px]  py-16">
      {result.map((product) => {
        return (
          <div
            key={product.id}
            className="w-full flex justify-between gap-10 mx-auto"
          >
            {/* <div>This div contains the hover view of product image(s)</div> */}
            <div className="flex flex-col gap-4">
              <div className="mx-auto">
                <Image
                  src={product.img}
                  alt={product.title}
                  width={150}
                  height={150}
                />
              </div>
              <div className="mx-auto">
                <Image
                  src={product.img}
                  alt={product.title}
                  width={150}
                  height={150}
                />
              </div>
            </div>
            <div className="w-[80%] h-[100%]">
              <Image
                src={product.img}
                alt={product.title}
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="w-1/2 px-10 py-20">
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
                <div className="mt-5 flex items-center gap-x-5">
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

      {/* Product Information Section */}
      <ProductOverview productDetails={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."} productItems={"Wash with care."} />
    </div>
  );
};

export default page;
