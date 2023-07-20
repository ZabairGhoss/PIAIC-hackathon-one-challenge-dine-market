import Image, { StaticImageData } from "next/image";
import { Card, CardContent } from "./ui/card";

const ProductCard = (props: {
  imgURL: StaticImageData;
  title: string;
  price: number;
}) => {
  return (
    <>
      <div>
        <Card className="w-[395px] h-[100%] my-0 mx-auto border-0">
          <CardContent className="p-5">
            <div className="w-[350px] h-[100%]">
              <Image
                src={props.imgURL}
                width={650}
                height={500}
                alt=""
                className="mx-auto my-0"
              />
            </div>
            <h2 className="mt-2 text-lg font-bold">{props.title}</h2>
            <span>{`$${props.price}`}</span>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProductCard;
