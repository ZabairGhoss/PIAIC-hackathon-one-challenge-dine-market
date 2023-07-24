import { Products } from "@/utils/mocks";
import Image, { StaticImageData } from "next/image";

const getProductDetails = (id: number) => {
  return Products.filter((product) => product.id == id);
};

const page = ({ params }: { params: { id: number } }) => {
  const result = getProductDetails(params.id);
  
  return (
    <div className="flex flex-wrap mt-[32px]">
     {
        result.map((product) => {
          return (
            <div key={product.id} className="flex justify-between">
                <div>
                  <Image src={product.img} alt={product.title} />
                </div>
                <div>
                  <p>{product.title}</p>
                  <p>{product.tagline}</p>
                </div>
            </div>
          );
        })
      }


    </div>
  );
};

export default page;
