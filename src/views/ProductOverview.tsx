import React from "react";

type Props = {};

const ProductOverview = (props:  { productDetails: string, productItems: string } ) => {
  return (
    <section className="w-full">
      <div className="flex flex-col mt-16 gap-8 p-x-16 pt-8 pb-24">
        <div className="relative border-b-2 border-[#c4c4c4]">
          <div className="w-[100%] h-[100%] text-[7.5rem] leading-[150px] text-[#f2f3f7] capitalize font-extrabold -z-[1] opacity-70">
            overview
          </div>
          <h2 className="capitalize text-[1.5rem] font-bold leading-6 tracking-wider text-[#212121] pb-12 z-[2] top-[48%] absolute">
            product information
          </h2>
        </div>

        <div className="flex">
          <h4 className="flex-1 w-1/3 uppercase font-bold text-base tracking-wider text-[#666]">
            product details
          </h4>
          <p className="flex-2 w-2/3 font-light text-base text-justify tracking-wider text-[#212121]">
           {props.productDetails}
          </p>
        </div>

        <div className="flex">
          <h4 className="flex-1 w-1/3 uppercase font-bold text-base tracking-wider text-[#666]">
            product care
          </h4>
          <ul className="flex-2 w-2/3 list-disc pl-5">
            <li className="font-semibold">Hand wash using cold water.</li>
            <li className="font-semibold">Do not using bleach.</li>
            <li className="font-semibold">Hang it to dry.</li>
            <li className="font-semibold">{props.productItems}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
