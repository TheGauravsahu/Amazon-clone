import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { Links } from "@/utils/constant"

const BottomHeader = () => {
    

  return (
    <div className='text-white bg-[#232F3E] w-full hidden lg:flex gap-4 py-4 justify-center items-center'>
       <h1 className='flex font-semibold items-center gap-1'><IoMdMenu className='text-2xl'/> All</h1>
     {Links.map((item, index)=><h2 key={index} className='text-sm'>{item}</h2>)}
    </div>
  )
}

export default BottomHeader