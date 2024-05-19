"use client";
import SingleProduct from "@/components/SingleProduct";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useSupabase } from "@/lib/supabase/hooks/useSupabase";
import AddToCartContainer from "@/components/AddToCartContainer";
import Header from "@/components/Header";

const SingleProductpage = () => {
  const { id } = useParams();
  const { singleProduct, getSingleProduct } = useSupabase();

  useEffect(() => {
    getSingleProduct(Number(id));
  }, [getSingleProduct, id]);

  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row w-full mx-auto bg-white">
        <SingleProduct singleProduct={singleProduct} />
        <AddToCartContainer singleProduct={singleProduct} />
      </div>
    </>
  );
};

export default SingleProductpage;
