import React from "react";
import Image from "next/image";
import Ratings from "./shared/rating";
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa";

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
  return (
    <div className="lg:w-[80%] w-full mx-auto">
      {singleProduct.map((product: any) => (
        <div key={product.id} className="flex flex-col lg:flex-row gap-6 px-7 w-full">
          <div className="lg:w-1/3 w-full">
          <Link className="text-xs mb-3 flex gap-1 items-center" href="/"><FaArrowLeft /><u>Back to Home</u></Link>
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
              className="mix-blend-multiply"
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="border border-b-black border-opacity-30 py-5">
              <h2 className="text-cyan-600">{product.category}</h2>
              <h1 className="font-semibold text-2xl">{product.title}</h1>
              <h2 className="text-sm my-2">
                {<Ratings ratings={product.rating} />}
              </h2>
              <p className="opacity-50 leading-tight mt-2 ">
                {product.description}
              </p>
            </div>
            <div className="border border-b-black border-opacity-30 py-5">
              <h1 className="text-2xl font-semibold">₹{product.price}</h1>
              <p className="text-sm">Inclusive of all taxes</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleProduct;
