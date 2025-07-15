import Parallelogram from '@/app/components/parallelogram'
import ProductCategory from '@/app/components/product-category'
import ProductHero from '@/app/components/productsHero'
import { wpcDoorsData } from '@/app/config/products/wpcdoors/wpcdoors'
import React from 'react'
import CardGrid from './components/card-grid'
import ProductCategoryMob from '@/app/components/product-category-mob'

const WPCDoors = () => {
  const wpcDoors = wpcDoorsData["WpcDoors"]
  return (
   <>
   <ProductHero
   position='100%'
   bgImage='https://res.cloudinary.com/db4zbyipc/image/upload/v1751663560/WPC-hero_qe1gul.webp'
   />
         <div className="bg-black text-white flex flex-col justify-center items-center px-20 pt-20">
        <h1 className="font-raleway tracking-[1px] text-[14px] font-[300] text-center max-w-3xl leading-[180%]">
          {wpcDoors.description}
        </h1>
        <Parallelogram />
      </div>
      <ProductCategory />
      <CardGrid />
      <ProductCategoryMob/>
   </>
  )
}

export default WPCDoors