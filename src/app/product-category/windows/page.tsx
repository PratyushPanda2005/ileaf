import Parallelogram from '@/app/components/parallelogram'
import ProductCategory from '@/app/components/product-category';
import ProductHero from '@/app/components/productsHero'
import { windowsData } from '@/app/config/products/windows/windows';
import React from 'react'
import CardGrid from './components/card-grid';
import ProductCategoryMob from '@/app/components/product-category-mob';

const Windows = () => {
  const windows = windowsData["Windows"];

  return (
    <>
    <ProductHero
    bgImage='https://www.ileafdoors.com/wp-content/uploads/2025/04/Hero-Windows.webp'
    />
     <div className='bg-black text-white flex flex-col justify-center items-center px-20 pt-20'>
      <h1 className='font-raleway tracking-[1px] font-[300] text-[14px] text-center max-w-3xl leading-[180%]'>{windows.description}</h1>
      <Parallelogram/>
    </div>
    <ProductCategory/>
    <CardGrid/>
    <ProductCategoryMob/>
    </>
  )
}

export default Windows