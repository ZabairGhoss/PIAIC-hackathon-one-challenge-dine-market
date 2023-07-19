import { Button } from "@/components/ui/button";
import Image from "next/image";
import promCardImg1 from "@/../public/assets/images/promotion-card1-img.png";
import promCardImg2 from "@/../public/assets/images/promotion-card2-img.png";
import promCardImg3 from "@/../public/assets/images/promotion-card3-img.png";

const Promotion = () => {
  return (
    <section>
      <div className="w-full pt-20">
        <h3 className="uppercase text-center font-bold text-blue-700">
          promotions
        </h3>
        <h2 className="capitalize text-center font-bold text-4xl">
          our promotions events
        </h2>
        <div className="w-full flex flex-row p-10 gap-x-10 items-center justify-center">
          <div className="w-[50%] flex flex-col gap-y-11 items-center justify-around">
            <div className="w-full bg-[#D6D6D8] flex px-5">
              <div className="w-full px-3 pt-5">
                <h3 className="text-3xl uppercase">
                  get up to <span className="font-bold block">60%</span>
                </h3>
                <p className="font-medium">For the summer season</p>
              </div>
              <Image
                src={promCardImg1}
                alt="female fashion model"
                className="w-[260px] h-[200px]"
              />
            </div>
            <div className="w-full py-12 px-8 bg-[#212121] text-center">
              <h3 className="text-[#fff] font-bold text-4xl mb-5">
                GET 30% Off
              </h3>
              <p className="text-[#fff] uppercase font-medium">
                use promo code
              </p>
              <Button className="bg-[#474747] py-2 px-8 font-bold uppercase rounded-md w-[70%] mt-1">
                d i n w e e k e n d s a l e
              </Button>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="bg-[#efe1c7] pt-5">
              <div className="pt-4 pl-2">
                <p className="capitalize font-medium ml-2">flex sweatshirt</p>
                <span className="line-through text-lg ml-2">$100</span>
                <span className="font-bold text-xl ml-2">$75.00</span>
              </div>
              <div className="pt-5">
                <Image
                  src={promCardImg2}
                  alt="male fashion model"
                  className="w-[280px] h-[340px]"
                />
              </div>
            </div>
            <div className="bg-[#d7d7d9] pt-5">
              <div className="pt-4 pl-2">
                <p className="capitalize font-medium ml-2">
                  flex push button bomber
                </p>
                <span className="line-through text-lg ml-2">$225.00</span>
                <span className="font-bold text-xl ml-2">$190.00</span>
              </div>
              <div className="pt-5">
                <Image src={promCardImg3} alt="male fashion model" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
