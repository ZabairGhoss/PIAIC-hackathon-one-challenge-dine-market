import { Products } from "@/utils/mocks";
import Image, { StaticImageData } from "next/image";

const getProductDetails = (id: number) => {
  return Products.filter((product) => product.id == id);
};

const page = ({ params }: { params: { id: number } }) => {
  const result = getProductDetails(params.id);
  console.log("Result>>",result);
  
  return (
    <div className="flex flex-wrap justify-evenly mt-[32px]">
     {
        result.map((product) => {
          return (
            <div key={product.id} className="flex justify-between">
                <div>
                  <Image src={product.img} alt={product.title} />
                </div>
                <div></div>
            </div>
          );
        })
      }


    </div>
  );
};

export default page;
