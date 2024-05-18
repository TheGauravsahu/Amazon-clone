import Image from "next/image";
import React from "react";
import Logo from "@/public/amazon-logo-2.webp";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Link from "next/link"

const Header = () => {
  return (
    <nav
      className="bg-[#131921]
     text-white py-4 flex items-center gap-7 justify-center cursor-pointer"
    >
      <div>
        <Link href="/">
        <Image width={100} height={100} src={Logo} alt="Amazon Logo" />
        </Link>
      </div>
      <div className="flex bg-[#FEBD69] items-center rounded-sm ">
        <input
          className="w-[40rem] h-[2.5rem] px-2  rounded-l-sm placeholder:text-sm text-black outline-orange-400"
          type="text"
          placeholder="Search Amazon.in"
        />
           <IoSearch className="text-2xl text-black font-bold mx-2"/>
      </div>
      <div className="flex items-center gap-4 ">
        <div className="leading-none">
          <h1 className="text-xs">Hello, Gaurav</h1>
          <h1 className="font-bold text-sm">Account & Lists </h1>
        </div>
        <div className="leading-none">
          <h1 className="text-xs">Returns</h1>
          <h1 className="font-bold text-sm">& Orders</h1>
        </div>
         <div className="flex items-end gap-1">
            <p className="text-orange-400">0</p>
          <FaShoppingCart className="text-3xl" />
          <h1 className="font-bold text-sm">Cart</h1>
        </div>

      </div>
    </nav>
  );
};

export default Header;
