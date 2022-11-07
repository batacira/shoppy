import { AiOutlineMenu } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { BsChatLeft } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";

export default function Header() {
  return (
    <header className="flex justify-between items-center md:px-10 fixed md:static  navbar w-full ">
      <div className=" cursor-pointer">
        <AiOutlineMenu size={20} className="text-tirquoise" />
      </div>
      <div className="flex items-center">
        <div className="py-2 px-3 cursor-pointer">
          <CgShoppingCart size={22} className="text-tirquoise" />
        </div>
        <div className="py-2 px-3 cursor-pointer relative">
          <BsChatLeft size={20} className="text-tirquoise" />
          <div className="rounded-full bg-tirquoise w-2 h-2 absolute top-1 right-2"></div>
        </div>
        <div className="py-2 px-3 cursor-pointer relative">
          <BiBell size={20} className="text-tirquoise" />
          <div className="rounded-full bg-yellow w-2 h-2 absolute top-1 right-2"></div>
        </div>
        <div className="py-2 px-3 cursor-pointer flex items-center space-x-2">
          <img
            src="https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.rsquare.w700.jpg"
            alt="avatar"
            className="rounded-full w-8 cursor-pointer"
          />
          <div className="text-gray-400 flex items-center space-x-1 text-sm">
            <p>
              Hi, <span className="font-bold">Michael</span>
            </p>
            <RiArrowDownSLine size={12} fontWeight="bold" />
          </div>
        </div>
      </div>
    </header>
  );
}
