import React from "react";
import Image from "next/image";
import Ratings from "./shared/rating"
import { useRouter } from 'next/navigation';

const SearchResult = ({ filterData }: { filterData: any }) => {
  const router = useRouter();
  return (
    <div className="w-[80%] mx-auto">
      <h1 className="font-bold text-2xl mt-2">Results {filterData.length}</h1>
      <p>Price and other details may vary based on product size and colour.</p>

      <div className="flex flex-wrap gap-7 overflow-hidden items-center z-[9] mt-2">
        <div className="flex flex-wrap gap-5 items-center">
          {filterData?.map((product: any) => {
            return (
            <div key={product.title} className='cursor-pointer w-[300px] h-[400px] mt-4' onClick={()=>{
                router.push(`/product/${product.id}`)
            }}>
                <div className=' flex items-center justify-center bg-gray-100 h-[250px] rounded-md overflow-hidden'>
                    <Image className='mix-blend-multiply p-8' src={product.image} alt={product.title} width={200} height={200} />
                </div>
                <h1 className='font-bold'>{product.title}</h1>
                <p>{`${product.description.substring(0, 50)}...`}</p>
                <Ratings ratings={product.rating}/>
                <p className='font-bold text-2xl'>{`$${product.price}`}</p>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
