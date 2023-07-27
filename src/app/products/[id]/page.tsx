import { Products } from "@/utils/mocks";
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
                <h3 className="uppercase text-xs font-semibold mt-6">
                  select size
                </h3>
                <div className="flex gap-x-3">
                {sizes.map((size) => {
                  return (
                    <div
                      key={size}
                      className="w-6 h-6 rounded-full hover:shadow-xl mt-2 text-center cursor-pointer"
                    >
                      <span className="uppercase text-[10px] font-semibold text-gray-600">
                        {size}
                      </span>
                    </div>
                  );
                })}
                </div>
                <div>
                  <h3></h3>
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
