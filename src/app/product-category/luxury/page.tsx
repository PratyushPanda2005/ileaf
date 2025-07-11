import Parallelogram from '@/app/components/parallelogram';
import ProductCategory from '@/app/components/product-category';
import ProductHero from '@/app/components/productsHero'
import { luxuryDoorsData } from '@/app/config/products/luxury/luxury';
import React from 'react'
import CardGrid from './components/card-grid';
import ProductCategoryMob from '@/app/components/product-category-mob';

const LuxuryDoors = () => {
  const luxuryDoors = luxuryDoorsData["Luxury Doors"];

  return (
    <>
    <ProductHero
    headingOne='Unbeatable'
    headingTwo='Strength.'
    headingThree='Unmatched'
    headingFour='Beauty.'
    bgImage='https://www.ileafdoors.com/wp-content/uploads/2025/04/Hero-Luxury-doors-scaled.webp'
    />
    <div className='bg-black text-white flex flex-col justify-center items-center px-16 lg:px-20 pt-20'>
      <h1 className='font-raleway tracking-[1px] font-[300] text-sm text-center max-sm:uppercase'>{luxuryDoors.description}</h1>
      <Parallelogram/>
    </div>
    <ProductCategory/>
    <CardGrid/>
    <ProductCategoryMob/>
    </>
  )
}

export default LuxuryDoors