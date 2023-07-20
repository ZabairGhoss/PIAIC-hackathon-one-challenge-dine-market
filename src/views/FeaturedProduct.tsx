import Image from "next/image";
import featureProdImg from "@/../public/assets/gallery-images/feature-product.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FeaturedProduct = () => {
  return (
    <section className="w-full py-20">
      <div className="flex justify-end pb-8">
        <h1 className="w-[50%] text-[#212121] text-[44px] font-bold tracking-wider">
          Unique and Authentic Vintage Designer Jewellery
        </h1>
      </div>
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-1 justify-center items-center relative">
          <div className="font-extrabold text-[6.875rem] leading-[110px] absolute text-[#212121] opacity-[0.07] z-[1]">
            Different from others
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="w-[70%] z-[2]">
              <h3 className="font-semibold text-[1.125rem] leading-[20px] tracking-tight text-[#212121] mb-[1rem] capitalize">
                Using good quality materials
              </h3>
              <p className="font-light text-[1rem] leading-[22px] tracking-[0.05em] text-[#212121]">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className="w-[70%] z-[2]">
              <h3 className="font-semibold text-[1.125rem] leading-[20px] tracking-tight text-[#212121] mb-[1rem] capitalize">
                100% handmade products
              </h3>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="w-[70%]  z-[2]">
              <h3 className="font-semibold text-[1.125rem] leading-[20px] tracking-tight text-[#212121] mb-[1rem] capitalize">
                modern fashion design
              </h3>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div className="w-[70%]  z-[2]">
              <h3 className="font-semibold text-[1.125rem] leading-[20px] tracking-tight text-[#212121] mb-[1rem] capitalize">
                discount for bulk orders
              </h3>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[2.5rem]">
          <Image src={featureProdImg} alt="Feature product" />
          <div className="flex flex-col gap-[2rem]">
            <p className="font-[300] text-[1rem] leading-[26px] justify-normal text-[#212121]">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <Button className="py-[10px] rounded-none w-[250px] capitalize bg-black text-[#fff] ">
              <Link href="/products">see all product</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
