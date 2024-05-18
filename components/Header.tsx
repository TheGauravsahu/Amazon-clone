"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/public/amazon-logo-2.webp";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import BottomHeader from "./BottomHeader";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMdMenu } from "react-icons/io";
import { Links } from "@/utils/constant";
import { useRouter } from "next/navigation";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();
  const searchHandler = () => {
    router.push(`/search/${query}`);
  };

  return (
    <>
      <nav
        className="w-full bg-[#131921]
     text-white py-4 items-center gap-7 lg:justify-center justify-between px-6 lg:px-0 cursor-pointer flex"
      >
        <div className="w-[30%] lg:w-fit flex items-center gap-1">
          <Link href="/">
            <Image width={100} height={100} src={Logo} alt="Amazon Logo" />
          </Link>
          
        </div>

        <div className="flex bg-[#FEBD69] items-center rounded-sm w-[60%] lg:w-fit">
          <input
            className="lg:w-[40rem] w-[80%] h-[2.5rem] px-2  rounded-l-sm placeholder:text-sm text-black outline-orange-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search Amazon.in"
          />
          <IoSearch
            onClick={searchHandler}
            className="text-2xl text-black font-bold mx-2"
          />
        </div>

        <div className="lg:hidden text-white z-[99999] flex gap-2">
          <Sheet>
          <div className="flex lg:hidden text-nowrap">
                    <SignedOut>
                      <SignInButton />
                    </SignedOut>
                    <SignedIn>
                      <UserButton />
                    </SignedIn>
                  </div>
            <SheetTrigger>
              <IoMdMenu className="text-2xl" />
            </SheetTrigger>
            <SheetContent className="bg-white text-black z-[99999]">
              <SheetHeader>
                <SheetTitle>Amazon Clone</SheetTitle>
                <SheetDescription className="flex flex-col items-center gap-5 ">
                  
                  <div className="leading-none mt-3 ">
                    <h1 className="text-xs">Returns</h1>
                    <h1 className="font-bold text-sm">& Orders</h1>
                  </div>
                  <div className="flex ">
                    <p className="text-orange-400">0</p>
                    <FaShoppingCart className="text-3xl" />
                    <h1 className="font-bold text-sm">Cart</h1>
                  </div>

                  {Links.map((item, index) => (
                    <h2 key={index} className="text-sm">
                      {item}
                    </h2>
                  ))}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden lg:flex items-center gap-4 ">
          <div className="leading-none text-nowrap">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
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
      <BottomHeader />
    </>
  );
};

export default Header;
