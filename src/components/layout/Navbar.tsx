import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Logo from "../../../public/assets/dine-market-logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-20 px-20">
      <Image src={Logo} alt="website logo" width={150} height={150} className="w-auto h-auto" />
      <div className="pt-2">
            <ul className="flex gap-x-10">
                <li className="text-lg font-bold">
                    <Link href="/female">Female</Link>
                </li>
                <li className="text-lg font-bold">
                    <Link href="/male">Male</Link>
                </li>
                <li className="text-lg font-bold">
                    <Link href="/kids">Kids</Link>
                </li>
                <li className="text-lg font-bold">
                    <Link href="/products">All Products</Link>
                </li>
            </ul>
      </div>
      <div className="flex border-[2px] border-dark rounded-lg pl-3 py-0 w-[30%] mt-2">
        <Search className="bg-white rounded-l" />{" "}
        <input
          type="text"
          placeholder="What you are looking for"
          className="rounded-r w-full px-2"
        ></input>
      </div>
      <div className="p-2 rounded-full bg-gray-300 mt-3">
        <ShoppingCart className="relative" />
        <span className="absolute top-4 right-45 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white ml-3">
          0
        </span>
      </div>
    </nav>
  );
};

export default Navbar