"use client"
import React from "react";
import { Links } from "@/utils/constant";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMdMenu } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const BottomHeader = () => {

  return (
    <div className="text-white bg-[#232F3E] w-full hidden lg:flex gap-4 py-4 justify-center items-center">
      <div className="text-white z-[99999] flex gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <IoMdMenu className="text-2xl" />
          </SheetTrigger>
          <SheetContent side="left" className="bg-white text-black z-[99999]">
            <SheetHeader>
              <SheetTitle className="text-center">Amazon Clone</SheetTitle>
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
      <h1 className="flex font-semibold items-center gap-1">All</h1>
      {Links.map((item, index) => (
        <h2 key={index} className="text-sm">
          {item}
        </h2>
      ))}
    </div>
  );
};

export default BottomHeader;
