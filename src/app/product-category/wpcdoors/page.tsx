import Parallelogram from '@/app/components/parallelogram'
import ProductCategory from '@/app/components/product-category'
import ProductHero from '@/app/components/productsHero'
import { wpcDoorsData } from '@/app/config/products/wpcdoors/wpcdoors'
import React from 'react'
import CardGrid from './components/card-grid'

const WPCDoors = () => {
  const wpcDoors = wpcDoorsData["WpcDoors"]
  return (
   <>
   <ProductHero
   bgImage='https://www.ileafdoors.com/wp-content/uploads/2025/05/Hero-WPC-doors.webp'
   />
         <div className="bg-black text-white flex flex-col justify-center items-center px-20 pt-20">
        <h1 className="font-raleway tracking-[1px] text-[14px] font-[300] text-center max-w-3xl leading-[180%]">
          {wpcDoors.description}
        </h1>
        <Parallelogram />
      </div>
      <ProductCategory />
      <CardGrid />
   </>
  )
}

export default WPCDoors