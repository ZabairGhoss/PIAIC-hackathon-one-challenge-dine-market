import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import heroBannerImage from "@/../public/assets/images/hero-image.png";
import bazaarLogo from "@/../public/assets/brand-logos/bazaar-logo.jpg";
import bustleLogo from "@/../public/assets/brand-logos/bustle-logo.jpg";
import versaceLogo from "@/../public/assets/brand-logos/versace-logo.jpg";
import instyleLogo from "@/../public/assets/brand-logos/instyle-logo.jpg";

const Hero = () => {
  return (
    <section className="flex py-12">
      {/*Left Content section */}
      <div className="flex-1 pt-16 flex flex-col justify-between">
        <div className=" flex flex-col justify-center gap-10">
          <Badge className="w-[130px] bg-[#e1edff] px-7 py-2 rounded-sm text-blue-700 capitalize font-bold text-[16px]">
            sale 70%
          </Badge>

          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
            An Industrial Take on Streetwear
          </h1>

          <p className="leading-7 text-lg w-[90%] text-[#666666] [&:not(:first-child)]:mt-6">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>

          <Button className="w-[25vh] my-5 rounded-none bg-black text-[#fff] hover:bg-black">
            <ShoppingCart className="mr-2 h-5 w-5" /> Start Shopping
          </Button>
        </div>

        <div className="flex items-center justify-between w-full mx-auto mt-16">
          <div>
            <Image
              src={bazaarLogo}
              alt="bazaar"
              className="w-[100px] h-[35px]"
            />
          </div>
          <div>
            <Image
              src={bustleLogo}
              alt="bustle"
              className="w-[100px] h-[35px]"
            />
          </div>
          <div>
            <Image
              src={versaceLogo}
              alt="versace"
              className="w-[100px] h-[35px]"
            />
          </div>
          <div>
            <Image
              src={instyleLogo}
              alt="instyle"
              className="w-[100px] h-[35px]"
            />
          </div>
        </div>
      </div>

      {/* Right Hero Image Section*/}
      <div className="flex-1">
        <div className="w-[600px] h-[600px] rounded-full bg-[#ffece3] mx-auto relative">
          <Image
            src={heroBannerImage}
            alt="dine market hero"
            className="w-[650px] h-[650px] absolute -top-5"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
