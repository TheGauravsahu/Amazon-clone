"use client";
import Image from 'next/image';

import React, { useState, useEffect } from 'react';

  const ProductList = () => {
        
    const [products, setProducts] = useState([]);
      
        useEffect(() => {
             fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            .catch(error => console.error('Error fetching the products:', error));
        }, [products]);
      
        return (
            <div className='flex flex-wrap gap-7 overflow-hidden items-center mx-auto justify-center  z-[9] absolute top-[60%] left-0'>
             {
           products.map((item:any)=>(
            <div key={item.id} className='w-[300px] h-[500px] rounded-xl bg-white px-2'>
                <Image width={600} height={300} src={item.image} alt={item.title} className='h-[70%] w-full object-cover scale-75' />
                <h1>{item.title}</h1>
                <p>{item.price}</p>
            </div>
           ))
             }
            </div>
          );
        };
        
export default ProductList;
