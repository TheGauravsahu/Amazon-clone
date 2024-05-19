import React from "react";
import Image from "next/image";
import Ratings from "./shared/rating";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
  return (
    <div className="lg:w-[80%] w-full mx-auto ">
      {singleProduct.map((product: any) => (
        <div
          key={product.id}
          className="flex flex-col lg:flex-row gap-6 px-7 w-full"
        >
          <div className="lg:w-1/3 w-full">
            <Link className="text-xs mb-3 flex gap-1 items-center" href="/">
              <FaArrowLeft />
              <u>Back to Home</u>
            </Link>
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <Image
                    priority
                    width={2000}
                    height={2000}
                    className="w-full h-full object-cover"
                    src={product.products__images__001}
                    alt={product.title}
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    priority
                    width={2000}
                    height={2000}
                    className="w-full h-full object-cover"
                    src={product.products__images__002}
                    alt={product.title}
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    priority
                    width={2000}
                    height={2000}
                    className="w-full h-full object-cover "
                    src={product.products__images__003}
                    alt={product.title}
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="border-b-[0.5px] border-b-black border-opacity-30 py-5">
              <h2 className="text-cyan-600 capitalize">
                {product.products__brand}
              </h2>
              <h1 className="font-semibold text-2xl capitalize">
                {product.title}
              </h1>
              <h2 className="text-sm my-2">
                {<Ratings ratings={product.rating} />}
              </h2>
              <p className="text-xs">
                {product.products__stock} bought in past month
              </p>
              <p className="opacity-50 leading-tight mt-2 ">
                {product.description}
              </p>
            </div>
            <div className="border-b-[0.5px] border-b-black border-opacity-30 py-5">
              <h1 className="text-2xl font-semibold">
                <span className="text-red-600 line-through ... font-light text-lg">
                  {product.price}%
                </span>{" "}
                ₹{product.products__discountPercentage}
              </h1>
              <p className="text-sm">Inclusive of all taxes</p>
            </div>
            <div className="border-b-[0.5px] border-b-black border-opacity-30 py-5">
              <h1 className="font-semibold">Product details</h1>
              <div className="flex items-center gap-4 mt-2">
                <p className="font-semibold capitalize">Title</p>
                <p>{product.title}</p>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <p className="font-semibold">Brand</p>
                <p>{product.products__brand}</p>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <p className="font-semibold">Category</p>
                <p>{product.products__category}</p>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <p></p>
                <p></p>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <p className="font-semibold"></p>
                <p></p>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <p className="font-semibold"></p>
                <p></p>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <p className="font-semibold"></p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleProduct;
