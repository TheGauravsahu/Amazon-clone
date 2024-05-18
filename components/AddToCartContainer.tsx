import React from "react";
import { FaLock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const AddToCartContainer = ({ singleProduct }: { singleProduct: any }) => {
  let today = new Date();
  today.setDate(today.getDate() + 4);

  let tommorow = new Date();
  tommorow.setDate(today.getDate() + 1);

  return (
    <div className="border border-black border-opacity-30 rounded lg:w-[18%] w-[80%] px-2 m-4">
      {singleProduct.map((product: any) => (
        <div key={product.id} className="py-6 my-auto mx-auto">
          <h1 className="font-semibold">
            <sup>₹</sup>
            {product.price}
            <sup>00</sup>
          </h1>
          <h2 className="font-semibold"><span className="text-cyan-600 font-normal">FREE delivery </span>  {today.toISOString().split("T")[0]}</h2>
          
          <h2 className="text-md mt-4">Or fastest delivery on <span className="font-semibold">{tommorow.toISOString().split("T")[0]}</span></h2>
          <p className="flex gap-1 text-sm my-2"><FaLocationDot className="mt-1 opacity-75"/>Delivering to Patna 800001 - Update location</p>
          <h1 className="font-semibold text-lg text-green-600">In stock</h1>

          <button className="rounded-2xl bg-[#FFD814] px-8 py-1 my-2 font-light text-sm shadow w-full">Add to Cart</button>
          <button className="rounded-2xl bg-[#FFA41C] px-8 py-1 font-light text-sm shadow w-full">Buy now</button>
          <p className="flex items-center gap-1 text-sm mt-2"><FaLock className="opacity-80"/>Secure transaction</p>
        </div>
      ))}
    </div>
  );
};

export default AddToCartContainer;
