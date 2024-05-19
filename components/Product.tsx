"use client";
import Image from "next/image";
import { useSupabase } from "@/lib/supabase/hooks/useSupabase";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const ProductList = () => {
  const { products, getDataFromSupabase } = useSupabase();

  useEffect(() => {
    getDataFromSupabase();
  }, [getDataFromSupabase]);

  const router = useRouter();
  return (
    <div className="flex flex-wrap gap-7 overflow-hidden items-center mx-auto justify-center  z-[9] absolute top-[60%] left-0">
      {products.map((item: any) => (
        <div
          key={item.id}
          onClick={() => {
            router.push(`/product/${item.id}`);
          }}
          className="w-[300px] h-fit rounded-xl bg-[#E3E6E6] px-2 cursor-pointer overflow-hidden"
        >
          <Image
            width={400}
            height={400}
            src={item.products__images__001}
            alt={item.title}
            className="object-cover mix-blend-multiply h-[80%]"
          />
          <h1>{item.title}</h1>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
