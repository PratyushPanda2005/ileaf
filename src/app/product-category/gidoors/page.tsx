import Parallelogram from '@/app/components/parallelogram'
import ProductHero from '@/app/components/productsHero'
import React from 'react'
import CardGrid from './components/card-grid'
import ProductCategory from '@/app/components/product-category'
import { giDoorsData } from '@/app/config/products/gidoors/gidoors'

const GiDoors = () => {
  const giDoors = giDoorsData["Gi Doors"];
  return (
    <>
      <ProductHero
    headingOne='Elevate'
    headingTwo='Safety And'
    headingThree='Elegance'
    bgImage='https://res.cloudinary.com/db4zbyipc/image/upload/v1752412886/gi-door-hero_edetpe.webp'
    />
     <div className="bg-black text-white flex flex-col justify-center items-center px-20 pt-20">
        <h1 className="font-raleway tracking-[1px] text-[14px] font-[300] text-center max-w-3xl leading-[180%]">
          {giDoors.description}
        </h1>
        <Parallelogram/>
      </div>
      <ProductCategory />
      <CardGrid />
    </>
  )
}

export default GiDoors